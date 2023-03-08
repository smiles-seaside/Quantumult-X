var body = JSON.parse($response.body);
var obj = {
  "status" : "1",
  "data" : {
    "zfb_name" : "",
    "parentid" : 604151,
    "money" : "0.00",
    "weichat" : null,
    "safetycode" : 0,
    "status" : "1",
    "username_t" : "13721234567",
    "parent_weichat" : "「直接联系你上级即可」——影飒STUDIO",
    "rebate_money" : "0",
    "isfaka" : 0,
    "share_ma" : "440581",
    "vip_type" : 3,
    "team_num" : 0,
    "admin_weichat" : "请联系上级",
    "id" : 640870,
    "sign" : 17,
    "power" : "2",
    "email" : null,
    "zfb" : "",
    "user_nick_name" : "",
    "Source" : "APP注册",
    "password" : "8c93b91c4ca1133b98fc6ec65b83ce45",
    "vip_time" : 1836269062,
    "txje" : 0,
    "username" : "18888888888"
  }
};

$done({ body: JSON.stringify(obj) });
