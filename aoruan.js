/*************************************
项目名称：傲软投屏
下载地址：https://t.cn/A65nw9gx
**************************************

[rewrite_local]

^https://awvp.apsapp.cn/base/vip/v2/vips url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/aoruan.js

[mitm] 

hostname = awvp.apsapp.cn

*************************************/

var body = JSON.parse($response.body);
var obj = {
  "status" : 200,
  "message" : "success",
  "data" : {
    "group_expired_at" : 0,
    "is_tried" : 0,
    "max_devices" : 1,
    "period_type" : "daily",
    "candy_expired_at" : 0,
    "pending" : 0,
    "remained_seconds" : 189216000,
    "limit" : 0,
    "expired_at" : 1877918360,
    "candy" : 0,
    "license_type" : "personal",
    "quota" : 0,
    "status" : 1,
    "coin" : 0
  }
};

$done({ body: JSON.stringify(obj) });

