/******************************

脚本功能：cubox-收藏阅读+解锁VIP

*******************************

[rewrite_local]

^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/Dawnaaaa/Qx/main/cubox.js

[mitm] 

hostname = cubox.pro

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/userInfo';


if (url.indexOf(vip) != -1) {
    obj.data.level = 1;
    obj.data.expireTime = "2099-09-12T23:50:23+08:00";
    obj.data.isExpire = false;
    obj.data.active = true;
    obj.data.payTime = "2022-09-12T23:50:23+08:00";
    obj.data.paymentSource = 9;
	body = JSON.stringify(obj);
}


$done({body});
