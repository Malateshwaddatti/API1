//XMLHtttpRequest or XHR<>are use interact with server with via api
//1.creating XHR objects
//New keyword
var request=new XMLHttpRequest();
//2.opening conections.
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending a conections.
request.send();
// once data respond succesfully then we have to process data.
request.onload=function(){
    var data=JSON.parse(this.response);
    for(var i=0;i<250;i++){
    console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
}
}