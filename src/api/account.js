import { get } from "@/utils/http";

export default {
  getAccountDetail(address) {
    return get(`accounts/${address}`);
  },
  getTxs(address, page, limit = 8) {
    return get(`accounts/${address}/txs?page=${page}&limit=${limit}`);
  },
  getTxs20(address, page, limit = 8) {
    return get(`accounts/${address}/erc20txs?page=${page}&limit=${limit}`);
  },
  getBuckets(address, page, limit = 8) {
    return get(`accounts/${address}/buckets?page=${page}&limit=${limit}`);
  },
  getTopMTR(page, limit = 8) {
    return get(`accounts/top/mtr?page=${page}&limit=${limit}`);
  },
  getTopMTRG(page, limit = 8) {
    return get(`accounts/top/mtrg?page=${page}&limit=${limit}`);
  },
};
