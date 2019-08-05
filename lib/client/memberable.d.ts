import Client from '../client';
import { Constructor } from '../util';
import { IDeleteMemberArgs, IDeleteMemberResult, ISaveMemberArgs, ISaveMemberResult, ISearchMemberArgs, ISearchMemberResult, IUpdateMemberArgs, IUpdateMemberResult } from './memberable.interface';
declare const _default: <T extends Constructor<Client>>(Base: T) => {
    new (...args: any[]): {
        defaultMemberData(): any;
        saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult>;
        updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult>;
        deleteMember(args: IDeleteMemberArgs): Promise<IDeleteMemberResult>;
        searchMember(args: ISearchMemberArgs): Promise<ISearchMemberResult | null>;
        config: import("../config.interface").IConfig;
        post(pathname: string, data: any): Promise<any>;
        isError(res: any): boolean;
    };
} & T;
export default _default;
