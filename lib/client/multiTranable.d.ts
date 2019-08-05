import Client from '../client';
import { Constructor } from '../util';
import { ISearchTradeMultiArgs, ISearchTradeMultiCardResult, ISearchTradeMultiCvsResult } from './multiTranable.interface';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        searchTradeMulti<R extends ISearchTradeMultiCardResult | ISearchTradeMultiCvsResult>(args: ISearchTradeMultiArgs): Promise<R>;
        config: import("../config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & T;
export default _default;
