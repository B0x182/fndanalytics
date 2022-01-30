window.onload = function (){

var _updateInt = 20000;
var _tickrate = 1000;


 getGASPriceHTMLTable().then((t) => {	
		
		 document.getElementById("gasPriceTable").innerHTML=t;
		 document.getElementById("gasPriceTableSpinner").remove();
		 update();
  })


 getBlockHash().then((r0) => {
 
	getNFTsMintedStats24H().then((r1) => {
		
		document.getElementById("stats2").innerHTML=r1;
	    document.getElementById("stats2sp").remove();
		
		getAuctionsStartedStats24H().then((r2) => {
			
			document.getElementById("stats3").innerHTML=r2;
			document.getElementById("stats3sp").remove();
			
			getMarketVolumeStats24H().then((r3) => {
		
				document.getElementById("stats1").innerHTML=r3;
				document.getElementById("stats1sp").remove();
			})

		})

	})
 })


getNFTCardHTML("0x3b3ee1931dc30c1957379fac9aba94d1c48a5405-121713").then((c) => {	
		 document.getElementById("nftcard0").innerHTML=c;
		})
		
getNFTCardHTML("0x3b3ee1931dc30c1957379fac9aba94d1c48a5405-107617").then((c) => {	
		 document.getElementById("nftcard1").innerHTML=c;
		})		

getNFTCardHTML("0x3b3ee1931dc30c1957379fac9aba94d1c48a5405-121948").then((c) => {	
		 document.getElementById("nftcard2").innerHTML=c;
		})


function update(){	
	
	var i = 0;
	var width = 100;
	var elem = document.getElementById("gasprogress");
	elem.style.width = width + "%";
     elem.innerHTML = (_updateInt - i)/_tickrate + " seconds";
	
    
    var id = setInterval(frame, _tickrate);
	
	function frame() {
      if (i == _updateInt) {
     
	 clearInterval(id);
	
		getGASPriceHTMLTable().then((t) => {
		 document.getElementById("gasPriceTable").innerHTML=t;
		 update();
		})
		
      } else {
		  i = i + _tickrate;
	
        width =   (_updateInt - i) / _updateInt * 100;
        elem.style.width = width + "%";
        elem.innerHTML = (_updateInt - i)/_tickrate + " seconds";
      }
    }
	
}


}
