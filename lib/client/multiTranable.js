"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge = require("deepmerge");
exports.default = (Base) => class extends Base {
    async searchTradeMulti(args) {
        const defaultData = {
            ShopID: this.config.ShopID,
            ShopPass: this.config.ShopPass,
            OrderID: undefined,
            PayType: undefined
        };
        const data = merge(defaultData, args);
        const parsed = await this.post('/payment/SearchTradeMulti.idPass', data);
        return parsed;
    }
};
