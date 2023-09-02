export const bulidRequestPara = (Md5Para, md5Value) => {
  const epay_url = "epay.globalcloud.cc";

  const RequestPara = `https://${epay_url}/submit.php?${Md5Para}&sign=${md5Value}&sign_type=MD5`;
  console.log("RequestPara is", RequestPara);
  return RequestPara;
};
