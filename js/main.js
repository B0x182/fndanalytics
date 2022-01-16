window.onload = function (){

 var chart0 = new Chart(
    document.getElementById('marketVolumeChart'),
    getStackedBarChartConfig()
  );

 var chart1 = new Chart(
    document.getElementById('marketStatsChart'),
    getBarChartConfig()
  );


getGASPriceHTMLTable().then((t) => {	
		 document.getElementById("gasPriceTable").innerHTML="test";
		})

//update all 20 sec
var intervalId = window.setInterval(function(){
 
  getGASPriceHTMLTable().then((t) => {
		
		 document.getElementById("gasPriceTable").innerHTML=t;
		})

}, 20000);

initFNDanalytics().then((r0) => {
 
	getMarketVolume().then((r1) => {

		chart0.data = r1;
		chart0.update();
		document.getElementById("marketVolumeSpinner").remove();
		
		getMarketStats().then((r2) => {
		
			chart1.data = r2;
			chart1.update();
			document.getElementById("marketStatsSpinner").remove();
		})
	})
 })
 

}
