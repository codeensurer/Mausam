const request=require('request');

const weather= ({latitude,longitude}={},callback)=>
{
    const darkurl="https://api.darksky.net/forecast/1e3af2c6ccc28dd5539fb3c4803ffa3e/"+latitude+","+longitude+"?units=si&exclude={minutely,hourly}"
request({url:darkurl,json:true},(error,response)=>{
    if(error)
    {
        callback(error,undefined);
    }
    else
{  
    var finalresp=  response.body.currently;
    const darkurl="https://api.darksky.net/forecast/1e3af2c6ccc28dd5539fb3c4803ffa3e/"+latitude+","+longitude+"?units=si&exclude={minutely,hourly}&lang=hi"
    request({url:darkurl,json:true},(erro,respons)=>{finalresp = finalresp+" "+respons.body.currently});
    callback(undefined,finalresp);
}})
}

module.exports=weather