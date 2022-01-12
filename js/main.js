window.onload = function (){

 var chart1 = new Chart(
    document.getElementById('finalizedMarketAuctionsChart'),
    getBarChartConfig()
  );

initFNDanalytics().then((result) => {

	getFinalizedMarketAuctionsByDate().then((r1) => {
		
		chart1.data = r1;
		chart1.update();
		document.getElementById("finalizedMarketAuctionsSpinner").remove();
	})

 })

}