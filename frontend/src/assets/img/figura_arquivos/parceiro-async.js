(function(){var clickUOL={cl:"barraparceiro",pv:"barraparceiro-pv"};var classe="barrauol";if(window.location.href.match(/folha(\.uol)?\.com\.br/)){classe+=" barrafolha";}else{if(window.location.href.match(/bol(\.uol)\.com\.br/)){return;}}var contentStyle='@font-face{src:url(https://stc.uol.com/c/webfont/projeto-grafico/v2/icones-setas/uol-icones-setas.woff?2017) format("woff"),url(https://stc.uol.com/c/webfont/projeto-grafico/v2/icones-setas/uol-icones-setas.ttf?2017#iefix) format("embedded-opentype"), url(https://stc.uol.com/c/webfont/projeto-grafico/v2/icones-setas/uol-icones-setas.svg?2017#uol-icones-e-setas) format("svg");font-family:UOLIcons;font-weight:400;font-display:swap;font-style:normal;}@font-face{src:url(https://stc.uol.com/c/webfont/projeto-grafico/uol-font/uol-text-regular.woff2?v5) format("woff2"), local("?"), url(https://stc.uol.com/c/webfont/projeto-grafico/uol-font/uol-text-regular.ttf?#iefix) format("embedded-opentype"), url(https://stc.uol.com/c/webfont/projeto-grafico/uol-font/uol-text-regular.svg?v5#uol-text-regular) format("svg");font-family:UOLText;font-weight:400;font-display:swap;font-style:normal;}#barrauol{background-color:#262626;color:#FFF;font:14px UOLText,sans-serif,Helvetica,Arial;margin:0;padding:0;position:relative;text-align:center;width:100%;z-index:9;}#barrauol .containerUOL{display:flex;flex-direction:row;flex-wrap:nowrap;margin:0 auto;height:44px;max-height:44px;width:1170px;}#barrauol .menu-products{flex-grow:2;}#barrauol .logotipo{margin:auto 30px auto 8px;}#barrauol .fs-15{font-size:15px;}#barrauol a{text-decoration:none;}#barrauol a,#barrauol a:focus,#barrauol a:hover,#barrauol a:visited{color:#FFF;}#barrauol a,#barrauol nav li{transition:all .1s linear;}#barrauol ul,#barrauol li{list-style:none;margin:0;padding:0;}#barrauol nav{background:#262626;height:44px;position:relative;width:auto;}#barrauol nav a{display:flex;font:13px UOLText, sans-serif, Helvetica, Arial;height:44px;line-height:44px;padding:0 8px;vertical-align:middle;letter-spacing:normal;text-transform:uppercase;}#barrauol nav i{display:block;font-style:normal;margin:auto 4px auto 0;}#barrauol nav a:before{display:none;}#barrauol nav li{float:left;height:44px;background:transparent;border:0;}#barrauol nav li.first a{padding-left:15px;}#barrauol nav li.last a{padding-right:15px;}#barrauol nav li:hover{background-color:#404040;}#barrauol .uolicons{font-family:UOLIcons;color:#fff;}#barrauol i.icon-Busca_Outline:before{content:"\\e905";font-size:24px;}#barrauol i.icon-Email_Outline:before{content:"\\e906";font-size:24px;}#barrauol i.icon-Batepapo_Outline:before{content:"\\e904";font-size:24px;}#barrauol i.icon-email{font-size:24px;width:25px;}#barrauol i:before{font-family:UOLIcons;margin:-3px 5px 0 0;opacity:1;}#barrauol i.icon-email:before{content:"\\e626";font-size:26px;width:24px;}#barrauol i.icon-batepapo{font-size:26px;margin-top:1px;width:27px;}#barrauol i.icon-batepapo:before{content:"\\e654";font-size:26px;width:30px;}#barrauol i.icon-search{font-size:20px;margin-top:-4px;width:25px;}#barrauol i.icon-search:before{content:"\\e619";font-size:22px;width:20px;}#barrauol .logouol{display:block;}#barrauol .logouol:hover{opacity:.9;}#barrauol .logouol span{padding-left:30px;}#barrauol .logouol img{border:none;width:68px;}@media (max-width:1024px){#barrauol nav a{font-family:UOLText;font-size:13px;}#barrauol .containerUOL{width:940px;}}@media (min-width:894px) and (max-width:1023px){#barrauol .containerUOL .menu-products .uol-play{display:none;}}@media (min-width:769px) and (max-width:893px){#barrauol .containerUOL .menu-products .uol-play,#barrauol .containerUOL .menu-products .pagseguro{display:none;}}@media (max-width:768px){#barrauol nav{display:none;}#barrauol .containerUOL{justify-content:center;align-items:center;height:44px;width:100%;}#barrauol .logotipo{margin:0;}}/* PERSONALIZAÇÃO DA ALTURA PARA BARRA DA FOLHA */#barrauol.barrafolha,#barrauol.barrafolha .containerUOL,#barrauol.barrafolha .containerUOL .logotipo,#barrauol.barrafolha .containerUOL nav{height:36px;max-height:36px;}#barrauol.barrafolha .containerUOL .logotipo,#barrauol.barrafolha .containerUOL .logotipo .logouol{display:flex;}#barrauol.barrafolha .containerUOL .logotipo .logouol{display:inherit;align-items:center;}#barrauol.barrafolha .containerUOL .logotipo .logouol img{height:unset;}#barrauol.barrafolha .logouol,#barrauol.barrafolha a{line-height:36px;-webkit-font-smoothing:initial;}#barrauol.barrafolha .menu-products li.assine_sac,#barrauol.barrafolha .menu-services li.item-busca{display:none;}';var content='<div class="containerUOL"> <div class="logotipo"> <a class="logouol" href="https://www.uol.com.br/" onclick="javascript:audCountClick(\'home\')"><img src="https://imguol.com/c/_layout/v3/logoUOL2021/uol2021_completo_white_68x24.png" width="68" height="24" alt="UOL - O melhor conte&uacute;do" title="UOL - O melhor conte&uacute;do"></a> </div> <nav class="menu-products"> <ul> <li><a class="ingresso-com" href="https://www.ingresso.com/?utm_source=uol-parceiros&utm_medium=barrauol&utm_campaign=linkfixo_barrauol&utm_content=barrauol-link-ingressocom&utm_term=barrauol-ingressocom" onclick="javascript:audCountClick(\'ingresso\')">INGRESSO.COM</a></li> <li><a class="uol-host" href="https://clicklogger.rm.uol.com.br/?prd=16&grp=src:210;chn:102;cpg:barrauol_parceiros;creative:barrauol-host&msr=Cliques%20de%20Origem:1&oper=11&redir=http://www.uolhost.uol.com.br/" onclick="javascript:audCountClick(\'host\')">UOL HOST</a></li> <li><a class="pagbank" href="https://clicklogger.rm.uol.com.br/?prd=16&grp=src:210;chn:102;cpg: barrauol_parceiros;creative:barrauol-pagbank&msr=Cliques%20de%20Origem:1&oper=11&redir=https://pagseguro.uol.com.br/conta-digital/conta-digital-gratis/" onclick="javascript:audCountClick(\'pagbank\')">PAGBANK</a></li> <li><a class="pagseguro" href="https://clicklogger.rm.uol.com.br/?prd=32&grp=src:210;chn:102;cpg:barrauol_parceiros;creative:barrauol-pagseguro&msr=Cliques%20de%20Origem:1&oper=11&redir=https://pagseguro.uol.com.br/" onclick="javascript:audCountClick(\'pagseguro\')">PAGSEGURO</a></li> <li><a class="cursos" href="https://clicklogger.rm.uol.com.br/?prd=78&grp=src:210;chn:102;cpg:barrauol_parceiros;creative:barrauol-cursos-online&msr=Cliques%20de%20Origem:1&oper=11&redir=https://www.portaleducacao.com.br/cursos?utm_source=uol&utm_medium=header-menu&utm_campaign=cursos" onclick="javascript:audCountClick(\'cursos\')">CURSOS</a></li> <li><a class="uol-play" href="https://play.uol.com.br/?utm_source=uol-parceiros&utm_medium=barrauol&utm_campaign=linkfixo_barrauol&utm_term=barrauol-uolplay&utm_content=barrauol" onclick="javascript:audCountClick(\'uolplay\')">UOL PLAY</a></li> </ul> </nav> <nav class="menu-services"> <ul> <li class="item-busca"><a href="https://busca.uol.com.br/" onclick="javascript:audCountClick(\'busca\')"><i class="uolicons icon-Busca_Outline"></i>BUSCA</a></li> <li class="item-batepapo"><a href="https://batepapo.uol.com.br/" onclick="javascript:audCountClick(\'batepapo\')"><i class="uolicons icon-Batepapo_Outline"></i>BATE-PAPO</a></li> <li><a href="https://email.uol.com.br/" onclick="javascript:audCountClick(\'email\')"><i class="uolicons icon-Email_Outline"></i>EMAIL</a></li> </ul> </nav> </div> '.replace(/{{ref-cl}}/gi,clickUOL.cl).replace(/{{ref-pv}}/gi,clickUOL.pv);content=content.replace(/\{\{ref-cl\}\}/gi,clickUOL.cl).replace(/\{\{ref-pv\}\}/gi,clickUOL.pv);function writePreload(){if(!document.getElementById("css-barrauol")){var linkPrefetch=document.createElement("link");linkPrefetch.setAttribute("rel","dns-prefetch");linkPrefetch.setAttribute("href","//stc.uol.com");document.getElementsByTagName("head")[0].appendChild(linkPrefetch);var fontIcon=document.createElement("link");fontIcon.type="font/woff2";fontIcon.setAttribute("rel","preload");fontIcon.setAttribute("as","font");fontIcon.setAttribute("href","https://stc.uol.com/c/webfont/projeto-grafico/v2/icones-setas/uol-icones-setas.woff?2017");fontIcon.setAttribute("crossorigin","");document.getElementsByTagName("head")[0].appendChild(fontIcon);var fontRegular=document.createElement("link");fontRegular.type="font/woff2";fontRegular.setAttribute("rel","preload");fontRegular.setAttribute("as","font");fontRegular.setAttribute("href","https://stc.uol.com/c/webfont/projeto-grafico/uol-font/uol-text-regular.woff2?v5");fontRegular.setAttribute("crossorigin","");document.getElementsByTagName("head")[0].appendChild(fontRegular);}}writePreload();function writeCss(){if(!document.getElementById("css-barrauol")){var css=document.createElement("style");css.type="text/css";css.setAttribute("rel","preload");css.id="css-barrauol";var styles=contentStyle;if(css.styleSheet){css.styleSheet.cssText=styles;}else{css.appendChild(document.createTextNode(styles));}document.getElementsByTagName("head")[0].appendChild(css);}}writeCss();function _loadChartbeat(){if(window.location.host=="publico.uol.com.br"){window._sf_async_config=null;}if(window._sf_async_config==null||window._sf_async_config==undefined){window._sf_async_config=window._sf_async_config||{};window._sf_async_config.uid=61085;window._sf_async_config.domain="uol.com.br";window._sf_async_config.flickerControl=false;window._sf_async_config.useCanonical=true;window._sf_async_config.autoDetect=false;window._sf_startpt=(new Date()).getTime();var scriptChartbeatHead=document.createElement("script");scriptChartbeatHead.setAttribute("language","javascript");scriptChartbeatHead.setAttribute("async",true);scriptChartbeatHead.setAttribute("type","text/javascript");scriptChartbeatHead.setAttribute("src","//static.chartbeat.com/js/chartbeat_mab.js");document.getElementsByTagName("head")[0].appendChild(scriptChartbeatHead);const rollupSite=window.universal_variable.aud.rollupSite,rollupChannel=window.universal_variable.aud.rollupChannel;const hasNivel2=(rollupSite!=rollupChannel||rollupChannel=="NE10"||rollupChannel=="Grande Premio")?",Total - "+rollupChannel:"",nivel3=(rollupSite==undefined||"")?",Parceiro - brasilescola":",Parceiro - "+rollupSite;window._sf_async_config.sections="Total Parceiros"+hasNivel2+nivel3;window._sf_async_config.authors="brasilescola";window._sf_endpt=(new Date()).getTime();var scriptChartbeatBody=document.createElement("script");scriptChartbeatBody.setAttribute("language","javascript");scriptChartbeatBody.setAttribute("type","text/javascript");scriptChartbeatBody.setAttribute("src","//static.chartbeat.com/js/chartbeat_video.js");document.body.appendChild(scriptChartbeatBody);}}var _retryLoadChartbat=100;function _stillTryLoadChartbeat(){return _retryLoadChartbat>0;}function _audObjectValidate(){return window.universal_variable.aud&&window.universal_variable.aud.rollupChannel&&window.universal_variable.aud.rollupSite?true:false;}function _checkLoadChartbeat(){var chartBeatBlacklist=["email.uol.com.br","mail.uol.com.br","mail1.uol.com.br","email.bol.uol.com.br","visitante.acesso.uol.com.br","bmail1.uol.com.br","sac.uol.com.br","disponivel.uol.com.br","batepapo.uol.com.br","mapadobrincar.folha.com.br","email.folha.uol.com.br","mail.folha.uol.com.br","bmail.uol.com.br","comentarios1.folha.uol.com.br","inglescomclassicos.folha.com.br","temas.folha.uol.com.br","www1.folha.uol.com.br","datafolha.folha.uol.com.br","acesso.uol.com.br","tempo.folha.uol.com.br","classificados1.folha.uol.com.br","localhost"];for(let i=0;i<chartBeatBlacklist.length;i++){if(chartBeatBlacklist[i]==window.location.host){return;}}if(_audObjectValidate()===true){return _loadChartbeat();}if(_stillTryLoadChartbeat()===false){return;}_retryLoadChartbat-=1;window.requestIdleCallback?requestIdleCallback(_checkLoadChartbeat,{timeout:500}):setTimeout(_checkLoadChartbeat,300);}var BarItems={ingresso:{action:"https://www.ingresso.com/",label:"ingresso.com"},host:{action:"https://www.uolhost.uol.com.br/",label:"uol host"},pagseguro:{action:"https://pagseguro.uol.com.br/",label:"pagseguro"},pagbank:{action:"https://pagseguro.uol.com.br/",label:"pagbank"},cursos:{action:"https://parceiro.portaleducacao.com.br/parceiro/uolcursos",label:"cursos"},uolplay:{action:"https://play.uol.com.br/",label:"uol play"},produtos:{action:"https://produtos.uol.com.br/",label:"produtos"},home:{action:"https://www.uol.com.br/",label:"home uol"},busca:{action:"https://busca.uol.com.br/",label:"busca uol"},batepapo:{action:"https://batepapo.uol.com.br/",label:"bate papo"},email:{action:"https://email.uol.com.br/",label:"email"}};window.audCountClick=function(item){BarItems[item].category="barra uol";if(window.UOLPD&&window.UOLPD.Audience&&window.UOLPD.Audience.countClick){window.UOLPD.Audience.countClick(BarItems[item]);}};var barElement=document.createElement("div");barElement.id="barrauol";barElement.className=classe;barElement.innerHTML=content;if(!document.body){document.onreadystatechange=function(){if(document.readyState=="interactive"){documentLoaded();}};}else{documentLoaded();}function documentLoaded(){var body=document.body;body.insertBefore(barElement,body.firstChild);removeBatePapo();try{if(typeof _checkLoadChartbeat=="function"){_checkLoadChartbeat();}}catch(err){console.log(">>> buol chartbeat fail",err);}}function removeBatePapo(){var scripts=document.getElementsByTagName("script");for(var i=scripts.length-1;i>=0;i--){if(scripts[i].src.match(/barra\/parceiro(-async)?\.js/)&&scripts[i].src.match(/hidebp/)){var bp=document.querySelector("#barrauol .item-batepapo");bp.parentNode.removeChild(bp);return;}}}window.rewriteBarraUOL=function(){writeCss();var el=document.getElementById("barrauol");if(el){el.className=classe;el.innerHTML=content;}else{console.error("[barra uol] rewriteBarraUOL() exige um div#barrauol");}};function hrefChange(){var url=new URL(window.location);var customHrefs={"uol-play":"https://play.uol.com.br/?utm_source="+url.hostname+"&utm_medium=barrauol&utm_campaign=linkfixo_barrauol&utm_term=barrauol-uolplay&utm_content=barrauol"};var uolPlay=document.querySelector(".containerUOL .menu-products ul .uol-play");if(url&&uolPlay){uolPlay.href=customHrefs[uolPlay.className];}else{return;}}hrefChange();}());