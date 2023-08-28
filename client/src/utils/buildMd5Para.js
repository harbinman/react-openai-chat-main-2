import { generateOrderNumber } from "./orderId";
export const buildMd5Para = (money) => {
  const key = process.env.KEY;

  const name = process.env.NAME;
  const notify_url = process.env.NOTIFY_URL;
  const out_trade_no = generateOrderNumber();
  const pid = process.env.PID;
  const return_url = process.env.RETURN_URL;
  const type = process.env.TYPE;

  const Md5Para = `key=${key}&money=${money}&name=${name}&notify_url=${notify_url}&out_trade_no=${out_trade_no}&pid=${pid}&return_url=${return_url}&type=${type}`;
  return Md5Para;
};
