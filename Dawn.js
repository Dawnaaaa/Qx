/*
#已添加脚本：幕布,cubox
*/

hostname =cubox.pro,api2.mubu.com

#幕布-终身会员
^https:\/\/api2.mubu.com\/v3\/api\/user/* url script-response-body https://raw.githubusercontent.com/Dawnaaaa/Qx/main/mubu.js

#cubox-收藏阅读+解锁VIP
#^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/Dawnaaaa/Qx/main/cubox.js

