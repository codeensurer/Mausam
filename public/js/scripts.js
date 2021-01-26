console.log('javascript Changed!');

//document.getElementById("myBtn").addEventListener("click", function() {
//var req = new Request();
    
//});
    var weatherform = document.querySelector('form');
var search = document.querySelector('input');
var resultpara1 = document.getElementById('locationpara');
var resultpara2 = document.querySelector('#weather-result');
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    //console.log(search.value)
   // console.log('http://localhost:3000/?search='+search.value);
    resultpara1.innerHTML='Loading...';
    resultpara2.innerHTML='';
fetch('http://localhost:3000/weather?search='+search.value).then((resp)=>{ 
//    console.log('http://localhost:3000/?search='+search.value);
    resp.json().then((data)=>{
        //console.log(data);
        if(data.error)
        {
            resultpara1.innerHTML= data.error
        }
        else
        {
            //console.log(resultpara1.innerHTML);
            resultpara1.innerHTML=data.location;
            resultpara2.innerHTML+=data.summary;
        }

    })    
        
    });

});