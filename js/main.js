window.onload = function (){

getGASPriceHTMLTable().then((t) => {	
		 document.getElementById("gasPriceTable").innerHTML=t;
		})

getNFTCardHTML("0x3b3ee1931dc30c1957379fac9aba94d1c48a5405-121713").then((c) => {	
		 document.getElementById("nftcard0").innerHTML=c;
		})
		
getNFTCardHTML("0x3b3ee1931dc30c1957379fac9aba94d1c48a5405-107617").then((c) => {	
		 document.getElementById("nftcard1").innerHTML=c;
		})		

getNFTCardHTML("0x3b3ee1931dc30c1957379fac9aba94d1c48a5405-118255").then((c) => {	
		 document.getElementById("nftcard2").innerHTML=c;
		})


//update all 20 sec
var intervalId = window.setInterval(function(){
 
  getGASPriceHTMLTable().then((t) => {
		
		 document.getElementById("gasPriceTable").innerHTML=t;
		})

}, 20000);


}
