/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class DocAssetContract extends Contract {

    async docAssetExists(ctx, docAssetId) {
        const buffer = await ctx.stub.getState(docAssetId);
        return (!!buffer && buffer.length > 0);
    }

    async createDocAsset(ctx, docAssetId, name, institute, degree, degree_certificate) {
        const exists = await this.docAssetExists(ctx, docAssetId);
        if (exists) {
            throw new Error(`The doc asset ${docAssetId} already exists`);
        }
        const buffer = Buffer.from(JSON.stringify({
            name: name,
            institute: institute,
            degree: degree,
            degree_certificate: degree_certificate
        }));
        await ctx.stub.putState(docAssetId, buffer);
    }

    async readDocAsset(ctx, docAssetId) {
        const exists = await this.docAssetExists(ctx, docAssetId);
        if (!exists) {
            throw new Error(`The doc asset ${docAssetId} does not exist`);
        }
        const buffer = await ctx.stub.getState(docAssetId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateDocAsset(ctx, docAssetId, name, institute, degree, new_hash) {
        const exists = await this.docAssetExists(ctx, docAssetId);
        if (!exists) {
            throw new Error(`The doc asset ${docAssetId} does not exist`);
        }
        const asset = { 
            name: name,
            institute: institute,
            degree: degree,
            degree_certificate: new_hash
         };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(docAssetId, buffer);
    }

    async deleteDocAsset(ctx, docAssetId) {
        const exists = await this.docAssetExists(ctx, docAssetId);
        if (!exists) {
            throw new Error(`The doc asset ${docAssetId} does not exist`);
        }
        await ctx.stub.deleteState(docAssetId);
    }

}

module.exports = DocAssetContract;