const { json } = require('express');
const request=require('request')
var fetchCapital= (searchquery,callback)=>
{
    request({url:'https://restcountries.eu/rest/v2/name/'+searchquery,json:true},(err,resp)=>{

        if(err || resp.statusCode!='200')
        {
            console.log(resp.body.message);
            callback("Country search failed"+resp.body.message,[])
        }
        else
        {
            console.log(resp.body);
            var respondarr=[];
            resp.body.forEach(element => {
                respondarr.push({countryname:element.name,capitalname:element.capital,population:element.population})
            });
            callback(undefined,respondarr);
        }
    });
}
module.exports=fetchCapital