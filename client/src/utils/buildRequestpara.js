import { generateOrderNumber } from "./orderId";
export const bulidRequestPara = (money, sign) => {
  const epay_url = process.env.EPAY_URL;

  const name = process.env.NAME;
  const notify_url = process.env.NOTIFY_URL;
  const out_trade_no = generateOrderNumber();
  const pid = process.env.PID;
  const return_url = process.env.RETURN_URL;
  const type = process.env.TYPE;

  const RequestPara = `https://${epay_url}/submit.php?&money=${money}&name=${name}&notify_url=${notify_url}&out_trade_no=${out_trade_no}&pid=${pid}&return_url=${return_url}&sign=${sign}&type=${type}`;
  return RequestPara;
};
