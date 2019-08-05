import Client from '../client';
import { Constructor } from '../util';
import { IDeleteCardArgs, IDeleteCardResult, ISaveCardArgs, ISaveCardResult, ISearchCardArgs, ISearchCardResult, ISearchCardDetailArgs, ISearchCardDetailResult } from './cardable.interface';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        defaultCardData(): any;
        saveCard(args: ISaveCardArgs): Promise<ISaveCardResult>;
        deleteCard(args: IDeleteCardArgs): Promise<IDeleteCardResult>;
        searchCard(args: ISearchCardArgs): Promise<ISearchCardResult[]>;
        searchCardDetail(args: ISearchCardDetailArgs): Promise<ISearchCardDetailResult[]>;
        config: import("../config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & T;
export default _default;
