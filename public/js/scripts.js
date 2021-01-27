console.log('javascript Changed!');

//document.getElementById("myBtn").addEventListener("click", function() {
//var req = new Request();
    
//});
    var weatherform = document.querySelector('form');
var search = document.querySelector('input');
var resultpara1 = document.getElementById('locationpara');
var resultpara2 = document.querySelector('#weather-result');
var resultpara3 = document.querySelector('#hindi-weather-result');

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    //console.log(search.value)
   // console.log('http://localhost:3000/?search='+search.value);
    resultpara1.innerHTML='Loading...';
    resultpara2.innerHTML='';
    resultpara3.innerHTML='';

    fetch('/weather?search='+search.value).then((resp)=>{ 
  resp.json().then((data)=>{
        if(data.error)
        {
            resultpara1.innerHTML= data.error
        }
        else
        {
            resultpara1.innerHTML=data.location;
            resultpara2.innerHTML+=JSON.stringify(data.summary.currently.summary);
            resultpara3.innerHTML+=JSON.stringify(data.summary.daily.summary);
            
        }

    })    
        
    });

});