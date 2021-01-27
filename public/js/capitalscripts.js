console.log("capital scripts loaded")
const country = document.querySelector('#country');
const searchcap=document.querySelector('#searchcap');
const resolvedCountry =document.querySelector('#resolvedCountry');
const searchCapital = document.querySelector('#searchedCapital');
searchcap.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchCapital.innerHTML='';
resolvedCountry.innerHTML='Loading..'

    fetch('/capitals/search?country='+country.value).then((response)=>
    {
        response.json().then((data)=>
        {
            //{countryname:resp.name,capitalname:resp.capital}
            resolvedCountry.innerHTML='';//"Your searched country is "+country.value;
            var searchhtml = '<table><tr><th>Country</th><th>Capital</th></tr>';
                      
         
data.sort((a,b)=>{return b.population-a.population});
data.forEach(element => {
    searchhtml+='<tr><td>'+element.countryname+ '</td><td> '+element.capitalname+'</td></tr>';
});
searchhtml+=' </table>';
            searchCapital.innerHTML= searchhtml;
        })
    });
})