
$(function(){
  getBpi("USD");
});
function getBpi(code)
{ $.ajax({
   url:"https://api.coindesk.com/v1/bpi/currentprice.json",
   dataType:"json",
   cashe:false,
   success:function(data,status)
   {
      var desc=data.bpi[code].description;
      var rate= data.bpi[code].rate;
     
      document.getElementById("desc").innerHTML=desc;
      document.getElementById("code").innerHTML=code;
      document.getElementById("rate").innerHTML=rate;},
      error:function(xhr,textStatus,err){
         //document.getElementById("err").innerHTML=error;
         console.log(xhr);
         console.log(textStatus);
         console.log(err);
          alert("Connection Faild please try again later ..");
      }

});

};
