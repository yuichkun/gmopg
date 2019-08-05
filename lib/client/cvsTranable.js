"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encoding = require("encoding-japanese");
const merge = require("deepmerge");
exports.default = (Base) => class extends Base {
    async entryTranCvs(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            OrderID: undefined,
            Amount: undefined,
            Tax: undefined
        };
        const data = merge(defaultData, args);
        const parsed = await this.post('/payment/EntryTranCvs.idPass', data);
        return parsed;
    }
    async execTranCvs(args) {
        const parsed = await this.post('/payment/ExecTranCvs.idPass', Object.assign({}, args, { CustomerName: encoding.urlEncode(encoding.convert(args.CustomerName, 'SJIS')), CustomerKana: encoding.urlEncode(encoding.convert(args.CustomerKana, 'SJIS')) }));
        return parsed;
    }
    async cancelCvs(args) {
        const defaultData = {
            ShopID: this.config !== undefined ? this.config.ShopID : undefined,
            ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
            AccessID: undefined,
            AccessPass: undefined,
            OrderID: undefined
        };
        const data = merge(defaultData, args);
        const parsed = await this.post('/payment/CvsCancel.idPass', data);
        return parsed;
    }
};
