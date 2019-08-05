import Client from '../client';
import { Constructor } from '../util';
import { IAlterTranArgs, IAlterTranResult, IChangeTranArgs, IChangeTranResult, IEntryTranArgs, IEntryTranResult, IExecTranArgs, IExecTranResult, ISearchTradeArgs, ISearchTradeResult } from './tranable.interface';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        entryTran(args: IEntryTranArgs): Promise<IEntryTranResult>;
        execTran(args: IExecTranArgs): Promise<IExecTranResult>;
        alterTran(args: IAlterTranArgs): Promise<IAlterTranResult>;
        searchTrade(args: ISearchTradeArgs): Promise<ISearchTradeResult>;
        changeTran(args: IChangeTranArgs): Promise<IChangeTranResult>;
        config: import("../config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & T;
export default _default;
