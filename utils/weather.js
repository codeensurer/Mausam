const request=require('request');

const weather= ({latitude,longitude,lang}={lang:"hi"},callback)=>
{
    var darkurl="https://api.darksky.net/forecast/1e3af2c6ccc28dd5539fb3c4803ffa3e/"+latitude+","+longitude+"?units=si&exclude={minutely,hourly}"
    if(lang)
    {
        darkurl+="&lang="+lang;
    }
//console.log(darkurl);
    request({url:darkurl,json:true},(error,response)=>{
    if(error)
    {
        callback(error,undefined);
    }
    else
{  
    var finalresp=  response.body;
//console.log(finalresp);
    callback(undefined,finalresp);
}})
}

module.exports=weather