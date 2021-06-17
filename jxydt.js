var obj = JSON.parse($response.body);
 obj= {
 "code": 0,
  "result": {
    "SPEED_VIP_KM4": {
      "resourceId": "1",
      "residualSecond": "999",
      "rightsType": "SPEED_VIP_KM4",
      "description": null,
      "beginTime": "2021-06-16",
      "endTime": "2022-06-16",
      "deviceOverflow": "0",
      "status": "5",
      "overdueSecond": "-1"
    }
};
$done({body: JSON.stringify(obj)});
//
