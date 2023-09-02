import md5 from "md5";
import { toast } from "react-toastify";
export const buildMd5Para = (money, orderNumber, title) => {
  const key = "clcoh6z6X8AktXVaZAQ88CVA6lcbAWcX";
  const notify_url = "http://127.0.0.1:5173/buy/";
  const return_url = "http://127.0.0.1:5173/buy/";
  const pid = "1001";
  const type = "alipay";
  const sitename = "IMbot";

  const name = title;
  const out_trade_no = orderNumber;
  const param = title;
  const Md5Para = `money=${money}&name=${name}&notify_url=${notify_url}&out_trade_no=${out_trade_no}&param=${param}&pid=${pid}&return_url=${return_url}&sitename=${sitename}&type=${type}`;
  const Md5ParaAll = `money=${money}&name=${name}&notify_url=${notify_url}&out_trade_no=${out_trade_no}&param=${param}&pid=${pid}&return_url=${return_url}&sitename=${sitename}&type=${type}${key}`;
  const md5Value = md5(Md5ParaAll);
  return { md5Value, Md5Para };
};
