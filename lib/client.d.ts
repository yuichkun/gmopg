import { IConfig } from './config.interface';
export default class Client {
    config: IConfig;
    constructor(config?: IConfig);
    post(pathname: string, data: any): Promise<any>;
    isError(res: any): boolean;
}
