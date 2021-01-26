const request=require('request');

const geocode = (address,callback)=>
{
    var geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicnVrdXN1cnUiLCJhIjoiY2tqcG4zbDhsMXJlODJ6bWp4anlxMjE2YyJ9.DZGcxXQ9ZQKp-gIBX1bHvA&limit=3';
request({url:geocodeURL,json:true},(error,response)=>{
    if(error)
    {
        callback("unable to reach service :(",undefined);
    }
    else if(response.body.features.length==0)
    {
        callback('no location found with the given address'+address,undefined);
    }
    else
    {
        const feature=response.body.features[0];
        callback(undefined,{location:feature.place_name,latitude:feature.center[1],longitude:feature.center[0]});
    }
})

}

module.exports=geocode