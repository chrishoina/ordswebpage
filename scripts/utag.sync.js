//tealium universal tag - utag.sync ut4.0.202501080445, Copyright 2025 Tealium.com Inc. All Rights Reserved.
try{try{if(typeof utag_data=="undefined"){var utag_data={};}
if(navigator.doNotTrack==1||window.doNotTrack==1||navigator.msDoNotTrack==1){utag_data.consent_do_not_track=true;}else{utag_data.consent_do_not_track=false;}
if(typeof oracle!=="undefined"&&typeof oracle.truste!=="undefined"&&oracle.truste.api!=="undefined"&&typeof oracle.truste.api.getGdprConsentDecision!=="undefined"&&typeof oracle.truste.api.getGdprConsentDecision()!=="undefined"){utag_data.consent_decision=oracle.truste.api.getGdprConsentDecision().consentDecision;utag_data.consent_source=oracle.truste.api.getGdprConsentDecision().source;}else{window.oracle=window.oracle||{};window.oracle.truste={},window.oracle.truste.api={},function(){this.getCookieName=function(){return"notice_preferences"},this.getStorageItemName=function(){return"truste.eu.cookie.notice_preferences"},this.getGdprCookieName=function(){return"notice_gdpr_prefs"},this.getGdprStorageItemName=function(){return"truste.eu.cookie.notice_gdpr_prefs"}}.apply(window.oracle.truste),function(){var e=window.oracle.truste;function t(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}
return null}
function r(e){var t,r=(t=e,"undefined"!=typeof Storage?localStorage.getItem(t):null);return null!=r?JSON.parse(r).value:null}
this.getConsentCode=function(){var n=r(e.getStorageItemName())||t(e.getCookieName());return null==n?-1:parseInt(n)+1},this.getGdprConsentCode=function(){var n=r(e.getGdprStorageItemName())||t(e.getGdprCookieName());if(null==n)return-1;var o=new Array;o=n.split(",");for(a in o)o[a]=parseInt(o[a],10)+1;return o.toString()},this.getConsentDecision=function(){var e=this.getConsentCode();if(-1==e){var t='{"consentDecision": 0, "source": "implied"}';return JSON.parse(t)}
t='{"consentDecision": '+parseInt(e)+', "source": "asserted"}';return JSON.parse(t)},this.getGdprConsentDecision=function(){var e=this.getGdprConsentCode();if(-1==e){var t='{"consentDecision": [0], "source": "implied"}';return JSON.parse(t)}
t='{"consentDecision": ['+e+'], "source": "asserted"}';return JSON.parse(t)}}.apply(window.oracle.truste.api);if(typeof window.oracle!=="undefined"&&typeof window.oracle.truste!=="undefined"&&window.oracle.truste.api!=="undefined"&&typeof window.oracle.truste.api.getGdprConsentDecision()!=="undefined"){utag_data.consent_decision=window.oracle.truste.api.getGdprConsentDecision().consentDecision;utag_data.consent_source=window.oracle.truste.api.getGdprConsentDecision().source;}else if(typeof truste!=="undefined"&&typeof truste.cma!=="undefined"&&typeof truste.cma.callApi()!=="undefined"){utag_data.consent_decision=truste.cma.callApi("getGDPRConsentDecision","oracle.com").consentDecision;utag_data.consent_source=truste.cma.callApi("getGDPRConsentDecision","oracle.com").source;}else{utag_data.consent_decision="-1";utag_data.consent_source="NoTRUSTe";}}
if(typeof utag_data['consent_decision']!='undefined'&&utag_data['consent_decision'].toString().toLowerCase().indexOf('3'.toLowerCase())>-1){utag_data['consent_advertising']=true;}else{utag_data['consent_advertising']=false;}
if(typeof utag_data['consent_decision']!='undefined'&&utag_data['consent_decision'].toString().toLowerCase().indexOf('2'.toLowerCase())>-1){utag_data['consent_functional']=true;}else{utag_data['consent_functional']=false;}
if(typeof utag_data['consent_decision']!='undefined'&&utag_data['consent_decision'].toString().toLowerCase().indexOf('0'.toLowerCase())>-1){if(typeof utag_data['consent_do_not_track']!='undefined'&&utag_data['consent_do_not_track'].toString().toLowerCase().indexOf('false'.toLowerCase())>-1){utag_data['consent_implied']=true;}else{utag_data['consent_implied']=false;}}else{utag_data['consent_implied']=false;}
(function setCountryExclusion(){function launchGetUrlVars(){var a=[],b,c=window.location.href;-
1!=c.indexOf("#")&&(c=c.split("#")[0]);for(var d=c.slice(window.location.href.indexOf("?")+1).split("&"),e=0;e<d.length;e++){b=d[e].split("=");a.push(b[0]);a[b[0]]=b[1]}
return a}
var countryFound=false;var countryList=['/ru/','/cn/'];var arrLen=countryList.length;for(var i=0;i<arrLen;i++){if(location.href.indexOf(countryList[i])!=-1){countryFound=true;break;}}
if(location.hostname==="go.oracle.com"){var langCode=(window.languageCode)?(window.languageCode):"en";var countryId=(window.countryCode)?(window.countryCode):"us";var srcParam=launchGetUrlVars()["src1"];if(srcParam!=undefined){if(srcParam.indexOf('a_')!=-1){console.log("in if lop");var countryValue=srcParam.split(':');for(var i=0;i<countryValue.length;i++){if(countryValue[i].indexOf('a_')!=-1){console.log("in countryid");countryId=countryValue[i].substring(2);console.log(countryId);break;}}}}
if(langCode=="ru-ru"||countryId=="ru"||langCode=="zh-cn"||countryId=="cn"){countryFound=true;}}
if(window.truste){if(window.truste.eu&&truste.eu.bindMap&&truste.eu.bindMap.country){if(window.truste.eu.bindMap.country=='ru'){countryFound=true;}}}
window.utag_data.country_exclusion=countryFound;})();window.utag_data.consent_code_has_run=true;}catch(e){console.log(e)}}catch(e){console.log(e);}
try{try{function getVisitorInfo(){try{var explicit_countries=['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','KR','LV','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','CH','GB','SG','BA','GI','ME','RS','CA','CO'];var visitorAPI="https://www.oracle.com/visitorinfo/";var request=new XMLHttpRequest();request.open('GET',visitorAPI,false);request.send(null);utag_data['visitor_info_api']=true;if(typeof window.utag_data=="undefinedcl"){window.utag_data={};}
if(request.status===200){var resp=JSON.parse(request.responseText);utag_data['visitor_geo']=resp;if(explicit_countries.includes(utag_data['visitor_geo'].country_code)){utag_data['explicit_country']=true;}}else{utag_data['visitor_geo']=false;utag_data['explicit_country']=false;}}catch(e){console.log(e);}}
function load_maxymizer(){getVisitorInfo();if(utag_data['explicit_country']){if(typeof utag_data['consent_implied']!='undefined'&&utag_data['consent_implied'].toString().toLowerCase().indexOf('true'.toLowerCase())===-1){document.write('<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></scr'+'ipt>');}}else{document.write('<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></scr'+'ipt>');}
utag_data['maxymiser_loaded']=true;}
function load_ubi(){getVisitorInfo();if(utag_data['explicit_country']){if(typeof utag_data['consent_implied']!='undefined'&&utag_data['consent_implied'].toString().toLowerCase().indexOf('true'.toLowerCase())===-1){document.write('<script type="text/javascript" src="//d.oracleinfinity.io/infy/acs/account/wh3g12c3gg/js/orapersonalization/odc.js"></script>');}}else{document.write('<script type="text/javascript" src="//d.oracleinfinity.io/infy/acs/account/wh3g12c3gg/js/orapersonalization/odc.js"></script>');}
utag_data['ubi_loaded']=true;}
function load_target(){getVisitorInfo();if(utag_data['explicit_country']){if(typeof utag_data['consent_implied']!='undefined'&&utag_data['consent_implied'].toString().toLowerCase().indexOf('true'.toLowerCase())===-1){document.write('<script type="text/javascript" src="/a/ocom/docs/at.js"></script>');}}else{document.write('<script type="text/javascript" src="/a/ocom/docs/at.js"></script>');}
utag_data['target_loaded']=true;}
if(typeof utag_data['consent_functional']!='undefined'&&utag_data['consent_functional'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1||typeof utag_data['consent_implied']!='undefined'&&utag_data['consent_implied'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1){if((typeof location.host!='undefined')&&location.host.toString().toLowerCase()=='www.oracle.com'&&((typeof location.pathname!='undefined'&&/^\/_qa\/erp-what-is-erp-copy-v3\/$/.test(location.pathname)))){load_ubi();}
if((typeof location.host!='undefined'&&location.host.toString().toLowerCase()=='www-sites.oracle.com'.toLowerCase())||(typeof location.host!='undefined'&&location.host.toString().toLowerCase()=='www.oracle.com'.toLowerCase())){if(typeof location.pathname!='undefined'&&/^\/developer\/$/.test(location.pathname)||typeof location.pathname!='undefined'&&/^\/retail\/$/.test(location.pathname)){load_ubi();}}
if((typeof location.host!='undefined'&&location.host.toString().toLowerCase()=='www-sites.oracle.com'.toLowerCase())){if(typeof location.pathname!='undefined'&&/^\/cloud\/$/.test(location.pathname)||(typeof location.pathname!='undefined'&&/^\/autonomous-database\/autonomous-data-warehouse\/$/.test(location.pathname))){load_target();}}}}catch(e){console.log(e)}}catch(e){console.log(e);}
try{try{try{if(typeof window.utag_data=="undefined"){window.utag_data={};}
var visitorAPI="https://www.oracle.com/visitorinfo/";utag_data['explicit_country']=false;var explicit_countries=['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','KR','LV','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','CH','GB','SG','BA','GI','ME','RS','CA','CO'];var request=new XMLHttpRequest();request.open('GET',visitorAPI,true);request.onload=function(){if(request.readyState===4){if(request.status===200){var resp=JSON.parse(request.responseText);utag_data['visitor_geo']=resp;if(explicit_countries.includes(utag_data['visitor_geo'].country_code)){utag_data['explicit_country']=true;if(utag_data['consent_implied']){console.log("in if ora test1");window.s_PingOK=false;trustarc_listener();}
}else{utag_data['explicit_country']=false;}}else{utag_data['visitor_geo']=false;utag_data['explicit_country']=false;}}}
request.onerror=(e)=>{console.error(request.statusText);utag_data['visitor_geo']=false;utag_data['explicit_country']=false;};if(typeof utag_data==="object"&&utag_data['visitor_info_api']!=true){request.send(null);}else{if(explicit_countries.includes(utag_data['visitor_geo'].country_code)){if(utag_data['consent_implied']){console.log("explicit implie");window.s_PingOK=false;utag_data['explicit_country']=true;trustarc_listener();}}}
function trustarc_listener(){if(utag_data['explicit_country']==true&&utag_data.consent_decision==0){"use strict";var observer=new MutationObserver(function(){if(document.body){var consentHandler=function(e){var updatedConsentPref=e.detail;if(utag_data.consent_decision==0&&typeof updatedConsentPref!='undefined'&&updatedConsentPref.toString().toLowerCase().indexOf('1'.toLowerCase())>-1){utag_data.consent_decision=oracle.truste.api.getGdprConsentDecision().consentDecision;utag_data.consent_source=oracle.truste.api.getGdprConsentDecision().source;window.s_PingOK=true;s.t();}else if(typeof updatedConsentPref!='undefined'&&updatedConsentPref==0){s.doPlugins=function(s){s.abort=true;};}};document.body.addEventListener('truste-consent',consentHandler);observer.disconnect();}});observer.observe(document.documentElement,{childList:true});}}}catch(e){console.log(e);}
}catch(e){console.log(e)}}catch(e){console.log(e);}
try{try{try{if(!window.dataLayerObject){window.dataLayerObject={};}
var _variation=false;window.dataLayerObject.page={variation:"default"};var keywords=document.getElementsByName('keywords')&&document.getElementsByName('keywords')[0]&&document.getElementsByName('keywords')[0].getAttribute('content')||'';if(keywords===''){keywords=document.getElementsByName('Keywords')&&document.getElementsByName('Keywords')[0]&&document.getElementsByName('Keywords')[0].getAttribute('content')||'';}
if(keywords!=''){var keywordsArr=keywords.split(',');keywordsArr.forEach(function(ele){if(ele.trim().indexOf('AA')!=-1){window.dataLayerObject.page.variation=ele.trim();}});}}catch(e){console.error('Tealium: utag.sync - Set Page Variation to DataLayer Object',e);}}catch(e){console.log(e)}}catch(e){console.log(e);}