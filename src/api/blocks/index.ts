import { makeApiCall } from '../../utils';
import { BASE_URL } from '../constants';

export default class BlocksApi {
  static async getBlocksByAsset(asset: string) {
    return makeApiCall({
      method: 'get',
      url: `${BASE_URL}/${asset}.json?page=1&asset=${asset}`,
    });
  }

  static async getBlockByAssetAndId(id: string, asset: string) {
    return makeApiCall({
      method: 'get',
      url: `${BASE_URL}/btc/${id}.json?asset=${asset}&id=${id}`,
    });
  }
}
