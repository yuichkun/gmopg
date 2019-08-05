import Client from '../client';
import { Constructor } from '../util';
import { ICancelCvsArgs, ICancelCvsResult, IEntryTranCvsArgs, IEntryTranCvsResult, IExecTranCvsArgs, IExecTranCvsResult } from './cvsTranable.interface';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        entryTranCvs(args: IEntryTranCvsArgs): Promise<IEntryTranCvsResult>;
        execTranCvs(args: IExecTranCvsArgs): Promise<IExecTranCvsResult>;
        cancelCvs(args: ICancelCvsArgs): Promise<ICancelCvsResult>;
        config: import("../config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & T;
export default _default;
