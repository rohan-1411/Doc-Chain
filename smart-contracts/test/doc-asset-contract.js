/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { DocAssetContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logger = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('DocAssetContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new DocAssetContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"doc asset 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"doc asset 1002 value"}'));
    });

    describe('#docAssetExists', () => {

        it('should return true for a doc asset', async () => {
            await contract.docAssetExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a doc asset that does not exist', async () => {
            await contract.docAssetExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createDocAsset', () => {

        it('should create a doc asset', async () => {
            await contract.createDocAsset(ctx, '1003', 'my-name', 'my-college', 'my-qualification', 'my-doc-hash');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"doc asset 1003 value"}'));
        });

        it('should throw an error for a doc asset that already exists', async () => {
            await contract.createDocAsset(ctx, '1001', 'myvalue').should.be.rejectedWith(/The doc asset 1001 already exists/);
        });

    });

    describe('#readDocAsset', () => {

        it('should return a doc asset', async () => {
            await contract.readDocAsset(ctx, '1001').should.eventually.deep.equal({ value: 'doc asset 1001 value' });
        });

        it('should throw an error for a doc asset that does not exist', async () => {
            await contract.readDocAsset(ctx, '1003').should.be.rejectedWith(/The doc asset 1003 does not exist/);
        });

    });

    describe('#updateDocAsset', () => {

        it('should update a doc asset', async () => {
            await contract.updateDocAsset(ctx, '1001', 'doc asset 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"doc asset 1001 new value"}'));
        });

        it('should throw an error for a doc asset that does not exist', async () => {
            await contract.updateDocAsset(ctx, '1003', 'doc asset 1003 new value').should.be.rejectedWith(/The doc asset 1003 does not exist/);
        });

    });

    describe('#deleteDocAsset', () => {

        it('should delete a doc asset', async () => {
            await contract.deleteDocAsset(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a doc asset that does not exist', async () => {
            await contract.deleteDocAsset(ctx, '1003').should.be.rejectedWith(/The doc asset 1003 does not exist/);
        });

    });

});
