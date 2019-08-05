"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge = require("deepmerge");
exports.default = (Base) => class extends Base {
    async entryTran(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            OrderID: undefined,
            JobCd: undefined,
            Amount: undefined
        };
        const data = merge(defaultData, args);
        const parsed = await this.post('/payment/EntryTran.idPass', data);
        return parsed;
    }
    async execTran(args) {
        const parsed = await this.post('/payment/ExecTran.idPass', args);
        return parsed;
    }
    async alterTran(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            AccessID: undefined,
            AccessPass: undefined,
            JobCd: undefined
        };
        const data = merge(defaultData, args);
        const parsed = await this.post('/payment/AlterTran.idPass', data);
        return parsed;
    }
    async searchTrade(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            OrderID: undefined
        };
        const data = merge(defaultData, args);
        const parsed = await this.post('/payment/SearchTrade.idPass', data);
        return parsed;
    }
    async changeTran(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            AccessID: undefined,
            AccessPass: undefined,
            JobCd: undefined,
            Amount: undefined
        };
        const data = merge(defaultData, args);
        const parsed = await this.post('/payment/ChangeTran.idPass', data);
        return parsed;
    }
};
