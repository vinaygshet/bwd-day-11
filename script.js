var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response)
console.log(data)
for(var i=0;i<=data.length;i++){
    console.log(`countries name:${data[i].name}  
    capital:${data[i].capital}  
    falg:${data[i].flag}`
    )
}

}
