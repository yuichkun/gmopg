import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import {SeqMode} from '../client.enum'
import WithCardable from './cardable'
import {IDeleteCardResult, ISaveCardResult, ISearchCardResult} from './cardable.interface'

const Cardable = WithCardable(Client)
const cardable = new Cardable()

test.afterEach(() => {
  sinon.restore();
})

test('.saveCard calls API and returns response', async (t) => {
  const expect: ISaveCardResult = {
    CardSeq: 'cardseq',
    CardNo: 'cardno',
    Forward: 'forward',
    Brand: 'brand'
  };

  sinon.stub(cardable, 'post').resolves(expect)

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid'
  }
  const res = await cardable.saveCard(args)

  t.deepEqual(res, expect)
})

test('.deleteCard calls API and returns response', async (t) => {

  const expect: IDeleteCardResult = {
    CardSeq: 'cardseq'
  }

  sinon.stub(cardable, 'post').resolves(expect)

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid',
    SeqMode: SeqMode.Logic,
    CardSeq: 'cardseq'
  }
  const res = await cardable.deleteCard(args)

  t.deepEqual(res, expect)
})

test('.searchCard calls API and returns response', async (t) => {

  const result: ISearchCardResult = {
    CardSeq: 'cardseq',
    DefaultFlag: '1',
    CardName: 'cardname',
    CardNo: 'cardno',
    Expire: 'expire',
    HolderName: 'holdername',
    DeleteFlag: '0'
  }

  sinon.stub(cardable, 'post').resolves(result)

  const expect = [result]

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid',
    SeqMode: SeqMode.Logic,
    CardSeq: 'cardseq'
  }
  const res = await cardable.searchCard(args)

  t.deepEqual(res, expect)
})
