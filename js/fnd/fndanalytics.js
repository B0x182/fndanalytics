var _0x240808=_0x1828;(function(_0x2787c4,_0x390247){var _0x2bfb06=_0x1828,_0x30e7e8=_0x2787c4();while(!![]){try{var _0x22ba3b=-parseInt(_0x2bfb06(0x112))/0x1+-parseInt(_0x2bfb06(0xfe))/0x2*(-parseInt(_0x2bfb06(0x117))/0x3)+-parseInt(_0x2bfb06(0x103))/0x4+parseInt(_0x2bfb06(0xf6))/0x5*(-parseInt(_0x2bfb06(0x10a))/0x6)+-parseInt(_0x2bfb06(0x125))/0x7+-parseInt(_0x2bfb06(0x124))/0x8*(parseInt(_0x2bfb06(0x11f))/0x9)+parseInt(_0x2bfb06(0x101))/0xa;if(_0x22ba3b===_0x390247)break;else _0x30e7e8['push'](_0x30e7e8['shift']());}catch(_0x84d9b){_0x30e7e8['push'](_0x30e7e8['shift']());}}}(_0x5b63,0x36190));const _days_back=0x4,_client=new Apollo[(_0x240808(0x111))]['ApolloClient']({'networkInterface':Apollo[_0x240808(0x111)][_0x240808(0xf3)]({'uri':'https://api.thegraph.com/subgraphs/name/f8n/fnd','transportBatching':!![]}),'connectToDevTools':!![]});var _pageSize=0x3e8,_blockHash;const _isDebug=![];function _0x1828(_0xd7226,_0x1c69e7){var _0x5b639d=_0x5b63();return _0x1828=function(_0x182871,_0x54c1ea){_0x182871=_0x182871-0xef;var _0x4a2313=_0x5b639d[_0x182871];return _0x4a2313;},_0x1828(_0xd7226,_0x1c69e7);}function unixtime2dateString(_0x116aa9){var _0x53e879=_0x240808,_0x3dfa7d=new Date(_0x116aa9*0x3e8),_0x444177=[_0x53e879(0x113),_0x53e879(0xfc),_0x53e879(0x118),'Apr',_0x53e879(0x106),'Jun','Jul',_0x53e879(0x105),_0x53e879(0x10b),'Oct',_0x53e879(0x11a),_0x53e879(0x128)],_0x35933c=_0x3dfa7d[_0x53e879(0xf5)](),_0x2e2815=_0x444177[_0x3dfa7d['getMonth']()],_0x202ec8=_0x3dfa7d['getDate'](),_0x164269=_0x3dfa7d[_0x53e879(0x11b)](),_0x1443f3=_0x3dfa7d[_0x53e879(0x119)](),_0x42f3d5=_0x3dfa7d[_0x53e879(0xfb)](),_0x709306=_0x202ec8+'\x20'+_0x2e2815+'\x20'+_0x35933c;return _0x709306;}function getBarChartConfig(){var _0x165c5f=_0x240808,_0x38ed76={'type':_0x165c5f(0xf0),'data':[],'options':{'scales':{'y':{'stacked':!![],'beginAtZero':!![],'grid':{'display':![]}},'x':{'stacked':!![],'grid':{'display':![]}}},'plugins':{'tooltip':{'enabled':!![]},'legend':{'display':!![]}}}};return _0x38ed76;}function _0x5b63(){var _0x147f0f=['Error\x20fetching\x20data:\x20','rgba(208,\x2061,\x20202,\x201)','query','creatorRevenueInETH','lib','48432zPijCg','Jan','fetchFinalizedMarketAuctions:\x20','then','length','5001BiYnMO','Mar','getMinutes','Nov','getHours','getTime','ownerRevenueInETH','numberAuctions','9XNUxbP','_meta','catch','sumRevenueInETH','rgba(251,\x2092,\x20129\x20,\x201)','2902768ZucldG','505757PgXtqL','highestBid','CreatorRevenueInETH','Dec','log','bar','floor','getDate','createNetworkInterface','FoundationRevenueInETH','getFullYear','5oZesIW','unix_timestamp:','rgba(167,\x20240,\x200\x20,\x201)','OwnerRevenueInETH','sumOwnerRevenueInETH','getSeconds','Feb','data','268ffcZes','push','sumCreatorRevenueInETH','10867660HqgYqM','nftMarketAuctions','790648sJOkOe','block','Aug','May','amountInETH','sumFoundationRevenueInETH','foundationRevenueInETH','2444214SOxbZu','Sep','gql'];_0x5b63=function(){return _0x147f0f;};return _0x5b63();}function getFromDate(){var _0x13c662=_0x240808,_0x35ab51=new Date();_0x35ab51['setHours'](0x0,0x0,0x1,0x0),_0x35ab51['setDate'](_0x35ab51[_0x13c662(0xf2)]()-_days_back);_isDebug&&console[_0x13c662(0xef)]('day_back:',_0x35ab51);var _0x2554d9=Math[_0x13c662(0xf1)](_0x35ab51[_0x13c662(0x11c)]()/0x3e8);return _isDebug&&console['log'](_0x13c662(0xf7),_0x2554d9),_0x2554d9;}async function initFNDanalytics(){return _fromDate=getFromDate(),_blockHash=await getBlockHash(),_blockHash;}async function getBlockHash(){var _0x2aae8f=_0x240808,_0x4456ef=Apollo['gql']`
{
  _meta{block{hash}}
}
`;return await _client[_0x2aae8f(0x10f)]({'query':_0x4456ef})[_0x2aae8f(0x115)](_0xb6701e=>{var _0x45767f=_0x2aae8f;h=_0xb6701e[_0x45767f(0xfd)][_0x45767f(0x120)][_0x45767f(0x104)]['hash'];})[_0x2aae8f(0x121)](_0x287ed9=>{var _0x75b0b5=_0x2aae8f;_isDebug&&console[_0x75b0b5(0xef)](_0x75b0b5(0x10d),_0x287ed9);}),_isDebug&&console[_0x2aae8f(0xef)]('getBlockHash:\x20',h),h;}async function getFinalizedMarketAuctionsByDate(){var _0x296690=_0x240808,_0x3f8639=[],_0x33d5e3=[],_0x5d8ed7=[],_0x3c64f7=[],_0x25d9b8=[],_0x4553d8=[],_0x1db3af=await fetchFinalizedMarketAuctions(),_0x311968=_0x1db3af['reduce'](function(_0x2db2be,_0x4f89c4){var _0x361e37=_0x1828,_0x430485=unixtime2dateString(_0x4f89c4['dateFinalized']);if(!_0x2db2be[_0x430485]){var _0x2f010e=new Object();_0x2f010e['numberAuctions']=0x1,_0x2f010e[_0x361e37(0x122)]=parseFloat(_0x4f89c4[_0x361e37(0x126)][_0x361e37(0x107)]),_0x2f010e[_0x361e37(0x100)]=parseFloat(_0x4f89c4[_0x361e37(0x110)]),_0x2f010e[_0x361e37(0x108)]=parseFloat(_0x4f89c4['foundationRevenueInETH']),_0x2f010e[_0x361e37(0xfa)]=parseFloat(_0x4f89c4['ownerRevenueInETH']),_0x2db2be[_0x430485]=_0x2f010e;}return _0x2db2be[_0x430485]['numberAuctions']=_0x2db2be[_0x430485][_0x361e37(0x11e)]+0x1,_0x2db2be[_0x430485][_0x361e37(0x122)]=_0x2db2be[_0x430485][_0x361e37(0x122)]+parseFloat(_0x4f89c4[_0x361e37(0x126)][_0x361e37(0x107)]),_0x2db2be[_0x430485][_0x361e37(0x100)]=_0x2db2be[_0x430485][_0x361e37(0x100)]+parseFloat(_0x4f89c4['creatorRevenueInETH']),_0x2db2be[_0x430485][_0x361e37(0x108)]=_0x2db2be[_0x430485][_0x361e37(0x108)]+parseFloat(_0x4f89c4[_0x361e37(0x109)]),_0x2db2be[_0x430485][_0x361e37(0xfa)]=_0x2db2be[_0x430485][_0x361e37(0xfa)]+parseFloat(_0x4f89c4[_0x361e37(0x11d)]),_0x2db2be;},{});for(day in _0x311968){_0x311968['hasOwnProperty'](day)&&(_0x3f8639[_0x296690(0xff)](day),_0x33d5e3['push'](_0x311968[day][_0x296690(0x11e)]),_0x5d8ed7[_0x296690(0xff)](_0x311968[day][_0x296690(0x122)]),_0x3c64f7[_0x296690(0xff)](_0x311968[day][_0x296690(0x100)]),_0x25d9b8['push'](_0x311968[day][_0x296690(0x108)]),_0x4553d8[_0x296690(0xff)](_0x311968[day][_0x296690(0xfa)]));}var _0x2d20c9={'labels':_0x3f8639,'datasets':[{'label':_0x296690(0xf9),'data':_0x4553d8,'backgroundColor':[_0x296690(0xf8),_0x296690(0xf8),_0x296690(0xf8),_0x296690(0xf8),_0x296690(0xf8)],'barPercentage':0.5},{'label':_0x296690(0x127),'data':_0x3c64f7,'backgroundColor':['rgba(251,\x2092,\x20129\x20,\x201)',_0x296690(0x123),_0x296690(0x123),_0x296690(0x123),_0x296690(0x123)],'barPercentage':0.5},{'label':_0x296690(0xf4),'data':_0x25d9b8,'backgroundColor':[_0x296690(0x10e),'rgba(208,\x2061,\x20202,\x201)',_0x296690(0x10e),_0x296690(0x10e),_0x296690(0x10e)],'barPercentage':0.5}]};return _0x2d20c9;}async function fetchFinalizedMarketAuctions(){var _0x3a2703=_0x240808;let _0x229ec4=0x0;var _0x3f9b04=-0x1,_0x300326=[];while(_0x3f9b04==_pageSize||_0x3f9b04==-0x1){let _0x3ea28f=_0x229ec4*_pageSize,_0x10ee08=Apollo[_0x3a2703(0x10c)]`
{
  nftMarketAuctions(
    first: ${_pageSize}, skip: ${_0x3ea28f}
    where: { dateFinalized_gte:  ${_fromDate}} , block: { hash: "${_blockHash}" }
    orderBy: dateFinalized, orderDirection: asc
  ) 
  {
      id
  ,dateFinalized
  ,reservePriceInETH 
   ,creatorRevenueInETH
   ,foundationRevenueInETH
    ,ownerRevenueInETH
    ,bidVolumeInETH
    ,numberOfBids
	,highestBid{amountInETH}
  }
}
`;await _client[_0x3a2703(0x10f)]({'query':_0x10ee08})[_0x3a2703(0x115)](_0x516fa4=>{var _0x2fd98a=_0x3a2703;_0x3f9b04=_0x516fa4[_0x2fd98a(0xfd)][_0x2fd98a(0x102)][_0x2fd98a(0x116)];for(var _0x84bb7a in _0x516fa4[_0x2fd98a(0xfd)][_0x2fd98a(0x102)]){_0x300326['push'](_0x516fa4['data'][_0x2fd98a(0x102)][_0x84bb7a]);}_0x229ec4++;})[_0x3a2703(0x121)](_0x475b25=>{var _0x276031=_0x3a2703;_isDebug&&console[_0x276031(0xef)](_0x276031(0x10d),_0x475b25);});}return _isDebug&&console[_0x3a2703(0xef)](_0x3a2703(0x114),_0x300326),_0x300326;}