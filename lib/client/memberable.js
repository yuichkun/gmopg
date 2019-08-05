"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge = require("deepmerge");
exports.default = (Base) => class extends Base {
    defaultMemberData() {
        const { SiteID, SitePass } = this.config;
        return {
            SiteID,
            SitePass,
            MemberID: undefined
        };
    }
    async saveMember(args) {
        const data = merge(this.defaultMemberData(), args);
        const parsed = await this.post('/payment/SaveMember.idPass', data);
        return parsed;
    }
    async updateMember(args) {
        const data = merge(this.defaultMemberData(), args);
        const parsed = await this.post('/payment/UpdateMember.idPass', data);
        return parsed;
    }
    async deleteMember(args) {
        const data = merge(this.defaultMemberData(), args);
        const parsed = await this.post('/payment/DeleteMember.idPass', data);
        return parsed;
    }
    async searchMember(args) {
        const data = merge(this.defaultMemberData(), args);
        const parsed = await this.post('/payment/SearchMember.idPass', data);
        return parsed;
    }
};
