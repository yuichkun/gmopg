"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge = require("deepmerge");
exports.default = (Base) => class Cardable extends Base {
    defaultCardData() {
        const { SiteID, SitePass } = this.config;
        return {
            SiteID,
            SitePass,
            MemberID: undefined
        };
    }
    async saveCard(args) {
        const data = merge(this.defaultCardData(), args);
        const parsed = await this.post('/payment/SaveCard.idPass', data);
        return parsed;
    }
    async deleteCard(args) {
        const data = merge(this.defaultCardData(), args);
        const parsed = await this.post('/payment/DeleteCard.idPass', data);
        return parsed;
    }
    async searchCard(args) {
        const data = merge(this.defaultCardData(), args);
        const parsed = await this.post('/payment/SearchCard.idPass', data);
        const cardSeqArry = parsed.CardSeq.split('|');
        const defaultFlagArry = parsed.DefaultFlag.split('|');
        const cardNameArry = parsed.CardName.split('|');
        const cardNoArry = parsed.CardNo.split('|');
        const expireArry = parsed.Expire.split('|');
        const holderNameArry = parsed.HolderName.split('|');
        const deleteFlagArry = parsed.DeleteFlag.split('|');
        return cardSeqArry.map((cardSeq, index) => {
            return {
                CardSeq: cardSeq,
                DefaultFlag: defaultFlagArry[index],
                CardName: cardNameArry[index],
                CardNo: cardNoArry[index],
                Expire: expireArry[index],
                HolderName: holderNameArry[index],
                DeleteFlag: deleteFlagArry[index]
            };
        });
    }
    async searchCardDetail(args) {
        const data = merge(this.defaultCardData(), args);
        const parsed = await this.post('/payment/SearchCardDetail.idPass', data);
        const cardNoArry = parsed.CardNo.split('|');
        const brandArry = parsed.Brand.split('|');
        const domesticFlagArry = parsed.DomesticFlag.split('|');
        const issuerCodeArry = parsed.IssuerCode.split('|');
        const debitPrepaidFlagArry = parsed.DebitPrepaidFlag.split('|');
        const debitPrepaidIssuerNameArry = parsed.DebitPrepaidIssuerName.split('|');
        const forwardFianlArry = parsed.ForwardFinal.split('|');
        const errCodeArry = parsed.ErrCode.split('|');
        const errInfoArry = parsed.ErrInfo.split('|');
        return cardNoArry.map((_, index) => {
            return {
                CardNo: cardNoArry[index],
                Brand: brandArry[index],
                DomesticFlag: domesticFlagArry[index],
                IssuerCode: issuerCodeArry[index],
                DebitPrepaidFlag: debitPrepaidFlagArry[index],
                DebitPrepaidIssuerName: debitPrepaidIssuerNameArry[index],
                ForwardFinal: forwardFianlArry[index],
                ErrCode: errCodeArry[index],
                ErrInfo: errInfoArry[index]
            };
        });
    }
};
