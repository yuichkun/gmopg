import * as enums from './client.enum';
import Client from './client';
declare const _default: {
    new (...args: any[]): {
        defaultCardData(): any;
        saveCard(args: import("./client/cardable.interface").ISaveCardArgs): Promise<import("./client/cardable.interface").ISaveCardResult>;
        deleteCard(args: import("./client/cardable.interface").IDeleteCardArgs): Promise<import("./client/cardable.interface").IDeleteCardResult>;
        searchCard(args: import("./client/cardable.interface").ISearchCardArgs): Promise<import("./client/cardable.interface").ISearchCardResult[]>;
        searchCardDetail(args: import("./client/cardable.interface").ISearchCardDetailArgs): Promise<import("./client/cardable.interface").ISearchCardDetailResult[]>;
        config: import("./config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & {
    new (...args: any[]): {
        entryTranCvs(args: import("./client/cvsTranable.interface").IEntryTranCvsArgs): Promise<import("./client/cvsTranable.interface").IEntryTranCvsResult>;
        execTranCvs(args: import("./client/cvsTranable.interface").IExecTranCvsArgs): Promise<import("./client/cvsTranable.interface").IExecTranCvsResult>;
        cancelCvs(args: import("./client/cvsTranable.interface").ICancelCvsArgs): Promise<import("./client/cvsTranable.interface").ICancelCvsResult>;
        config: import("./config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & {
    new (...args: any[]): {
        defaultMemberData(): any;
        saveMember(args: import("./client/memberable.interface").ISaveMemberArgs): Promise<import("./client/memberable.interface").ISaveMemberResult>;
        updateMember(args: import("./client/memberable.interface").IUpdateMemberArgs): Promise<import("./client/memberable.interface").IUpdateMemberResult>;
        deleteMember(args: import("./client/memberable.interface").IDeleteMemberArgs): Promise<import("./client/memberable.interface").IDeleteMemberResult>;
        searchMember(args: import("./client/memberable.interface").ISearchMemberArgs): Promise<import("./client/memberable.interface").ISearchMemberResult | null>;
        config: import("./config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & {
    new (...args: any[]): {
        searchTradeMulti<R extends import("./client/multiTranable.interface").ISearchTradeMultiCardResult | import("./client/multiTranable.interface").ISearchTradeMultiCvsResult>(args: import("./client/multiTranable.interface").ISearchTradeMultiArgs): Promise<R>;
        config: import("./config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & {
    new (...args: any[]): {
        entryTran(args: import("./client/tranable.interface").IEntryTranArgs): Promise<import("./client/tranable.interface").IEntryTranResult>;
        execTran(args: import("./client/tranable.interface").IExecTranArgs): Promise<import("./client/tranable.interface").IExecTranResult>;
        alterTran(args: import("./client/tranable.interface").IAlterTranArgs): Promise<import("./client/tranable.interface").IAlterTranResult>;
        searchTrade(args: import("./client/tranable.interface").ISearchTradeArgs): Promise<import("./client/tranable.interface").ISearchTradeResult>;
        changeTran(args: import("./client/tranable.interface").IChangeTranArgs): Promise<import("./client/tranable.interface").IChangeTranResult>;
        config: import("./config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & typeof Client;
export default _default;
export declare function GENERATE_MEMBER_ID(key: string): string;
export { enums as ENUMS };
export * from './config.interface';
export * from './client.interface';
export * from './client.enum';
export * from './client/memberable.interface';
export * from './client/cardable.interface';
export * from './client/tranable.interface';
export * from './client/cvsTranable.interface';
export * from './client/multiTranable.interface';
