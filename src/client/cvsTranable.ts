import * as encoding from 'encoding-japanese'
import * as merge from 'deepmerge'
import Client from '../client'
import {Constructor} from '../util'
import {
  ICancelCvsArgs,
  ICancelCvsResult,
  IEntryTranCvsArgs,
  IEntryTranCvsResult,
  IExecTranCvsArgs,
  IExecTranCvsResult
} from './cvsTranable.interface'

export default <T extends Constructor<Client>>(Base: T) => class extends Base {
  public async entryTranCvs(args: IEntryTranCvsArgs): Promise<IEntryTranCvsResult> {
    const defaultData = {
      ShopID: this.config.ShopID,
      ShopPass: this.config.ShopPass,
      OrderID: undefined,
      Amount: undefined,
      Tax: undefined
    }
    const data: IEntryTranCvsArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/EntryTranCvs.idPass', data)

    return <IEntryTranCvsResult>parsed
  }

  public async execTranCvs(args: IExecTranCvsArgs): Promise<IExecTranCvsResult> {
    const parsed: any = await this.post('/payment/ExecTranCvs.idPass', {
      ...args,
      CustomerName: encoding.urlEncode(encoding.convert(args.CustomerName, 'SJIS')),
      CustomerKana: encoding.urlEncode(encoding.convert(args.CustomerKana, 'SJIS'))
    })

    return <IExecTranCvsResult>parsed
  }

  public async cancelCvs(args: ICancelCvsArgs): Promise<ICancelCvsResult> {
    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      AccessID: undefined,
      AccessPass: undefined,
      OrderID: undefined
    }
    const data: ICancelCvsArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/CvsCancel.idPass', data)

    return <ICancelCvsResult>parsed
  }
}
