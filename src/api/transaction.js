import { get } from "@/utils/http";

const transaction = {
  getRecentTxs(network, page = 1, limit = 40) {
    return get(network, `txs/recent/?page=${page}&limit=${limit}`);
  },

  getTxDetail(network, hash) {
    return get(network, `txs/${hash}`);
  },
};

export default transaction;
