var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 4102415999000
body = JSON.stringify(obj);
$done({body});
