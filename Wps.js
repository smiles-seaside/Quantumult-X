/*
QX
[Script]
http-response ^https?:\/\/account\.wps\.cn\/api\/users requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/eHpo1/Surge/master/Script/wps.js

[MITM]
hostname = account.wps.cn
*/

var obj = JSON.parse($response.body);

var id = obj.userid;

obj = {
  exp: 0,
  level: 1,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 1631619709 },
    { spid: "ocr", times: 0, expire_time: 1631619709 },
    { spid: "pdf2doc", times: 0, expire_time: 1631619709 },
    { spid: "pdf_merge", times: 0, expire_time: 1631619709 },
    { spid: "pdf_sign", times: 0, expire_time: 1631619709 },
    { spid: "pdf_split", times: 0, expire_time: 1631619709 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: 0,
  userid: 0000,
  vip: {
    name: "WPS会员",
    has_ad: 0,
    memberid: 20,
    expire_time: 1631619709,
    enabled: [
      { memberid: 20, name: "WPS会员", expire_time: 1631619709 },
      { memberid: 12, name: "稻壳会员", expire_time: 1631619709 }
    ]
  vips: [
      { name: "WPS会员", has_ad: 0, memberid: 20, expire_time: 1631619709, enabled: null },
      { name: "稻壳会员", has_ad: 0, memberid: 12, expire_time: 1631619709, enabled: null },
    ]
  },
  wealth: 0
};

obj.userid = id;

$done({ body: JSON.stringify(obj) });
