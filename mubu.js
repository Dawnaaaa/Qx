/*******************************
脚本名称:幕布（终身会员）
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
*******************************
[rewrite_local]
^https:\/\/api2.mubu.com\/v3\/api\/user/* url script-response-body https://raw.githubusercontent.com/Dawnaaaa/Qx/main/mubu.js
[mitm] 
hostname = api2.mubu.com

*******************************/
var obj = JSON.parse($response.body);
    obj.data.level= 2;
    $done({body: JSON.stringify(obj)});
