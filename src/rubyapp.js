const request = require('request')
const express = require('express')
const path = require('path')
const hbs = require('hbs');
const geocode=require('../utils/geocode')
const weather=require('../utils/weather')
const app = express();
const port = process.env.PORT || 3000
var publictpath=path.join(__dirname,'../public')
console.log(publictpath)
//console.log(publictpath)
app.use(express.static(publictpath));
var viewpath=path.join(__dirname,'../templates/views')
hbs.registerPartials(path.join(__dirname,'../templates/partials'))
app.set('view engine','hbs');
app.set('views',viewpath)
app.get('',(req,res)=>{
    if(req.query.search)
    {
        geocode(req.query.search,(err,{location,latitude,longitude}={})=>
        {
            if(err)
            {
                console.log("No geocode");
            }
            else
            {
                weather({latitude,longitude},(error,{summary}={})=>{
                    if(error)
                    {
                        console.log("no weather");
                    }
                    else
                    {
                           return {location:location,summary:summary}
                    }
                })
            }
        })
    }
    else
    {
        console.log(req.query.search);
    res.render('index',
    {title:'',name:"Ruby"})
}});
app.get('/weather',(req,res)=>{
    if(req.query.search)
    {
        geocode(req.query.search,(err,{location,latitude,longitude}={})=>
        {
            if(err)
            {
                console.log("No geocode");
            }
            else
            {
                var retSummary='';
                var retresp={};
                weather({latitude,longitude,lang:'hi'},(error,respsummaryhin={})=>{
                    if(error)
                    {
                        console.log("no weather");
                    }
                    else
                    {
                        retresp={location:location,summary:respsummaryhin};
                     //   return res.send({location:location,summary:summary});
                     weather({latitude,longitude},(error,respsummary={})=>{
                        if(error)
                        {
                            console.log("no weather");
                        }
                        else
                        {
                            //console.log(respsummary)
                            retresp.Engsummary=respsummary;
                            //console.log(respsummary);
                            return res.send(retresp);
                            }
                    });
                    
                        
                    }
                })
                
                
                
            }
        })
    }
    else
    {
        console.log(req.query.search);
    res.render('index',
    {title:'',name:"Ruby"})
}

});
app.get('/about',(req,res)=>{
    res.render('about',{title:"About",name:"Ruby"})
})


app.get('/help',(req,res)=>{
    res.render('help',{title:"Help",name:"Ruby"})
})

  app.listen(port,()=>{console.log("server is up on port"+port)})