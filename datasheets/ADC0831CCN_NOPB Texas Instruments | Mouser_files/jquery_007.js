(function(a){a.fn.autoSuggest=function(f,c){var i={asHtmlID:false,preferredLanguage:"en-US",startText:"",emptyText:"",preFill:{},limitText:"No More Selections Are Allowed",selectedItemProp:"value",selectedValuesProp:"value",searchObjProps:"value",queryParam:"q",retrieveLimit:false,extraParams:"",matchCase:false,minChars:2,keyDelay:300,resultsHighlight:true,neverSubmit:false,selectionLimit:false,showResultList:true,host:"",width:"600",height:"400",overflow:"auto",searchWithin:false,textSelectionOnly:false,start:function(){},selectionClick:function(j){},selectionAdded:function(j){},selectionRemoved:function(j){j.remove()},formatList:false,beforeRetrieve:function(j){return j},retrieveComplete:function(j){return j},resultClick:function(j){},resultsComplete:function(){}};var e=a.extend(i,c);var d="object";var h=0;if(typeof f=="string"){d="string";var b=f}else{var g=f;for(k in f){if(f.hasOwnProperty(k)){h++}}}if((d=="object"&&h>0)||d=="string"){return this.each(function(z){if(!e.asHtmlID){z=z+""+Math.floor(Math.random()*100);var l="as-input-"+z}else{z=e.asHtmlID;var l=z}e.start.call(this);var B=a(this);B.searchWithin=B.attr("name").indexOf("txtPartKeywordSearch")>0;B.attr("autocomplete","off").addClass("as-input").attr("id",l);if(B.val()==""){B.val(e.startText)}var H=false;var v=a("#as-original-"+z);var o=a('<div class="as-results" id="as-results-'+z+'"></div>').hide();var p=a('<ul class="as-list"></ul>');var M=a('<input type="hidden" class="as-values" name="as_values_'+z+'" id="as-values-'+z+'" />');var u=B.val();if(typeof e.preFill=="string"){var E=e.preFill.split(",");for(var I=0;I<E.length;I++){var n={};n[e.selectedValuesProp]=E[I];if(E[I]!=""){}}u=e.preFill}else{u="";var N=0;for(k in e.preFill){if(e.preFill.hasOwnProperty(k)){N++}}if(N>0){for(var I=0;I<N;I++){var F=e.preFill[I][e.selectedValuesProp];if(F==undefined){F=""}u=u+F+",";if(F!=""){}}}}if(u!=""){B.val("");var A=u.substring(u.length-1);if(A!=","){u=u+","}M.val(","+u);a("li.as-selection-item").addClass("blur").removeClass("selected")}B.after(M);if(!e.textSelectionOnly&&!B.searchWithin&B.parent().find("#scopeOptionDiv").length>0){if(B.hasClass("headerSearchBox")){B.parent().parent().parent().after(o)}else{B.parent().after(o)}}else{if(B.hasClass("headerSearchBox")){B.parent().parent().parent().append(o)}else{B.parent().append(o)}}var y=null;var G="";var q=0;var r=false;B.click(function(x){x.stopPropagation()}).focus(function(){a(".as-results").hide();if(a(this).val()==e.startText&&M.val()==""){a(this).val("")}else{if(D(a(this).val())){a("li.as-selection-item").removeClass("blur");if(a(this).val()!=""&&p.html()!=""){o.show();if(B.hasClass("headerSearchBox")){C()}}}}H=true;return true}).blur(function(){if(a(this).val()==""&&M.val()==""&&u==""){a(this).val(e.startText)}else{if(H){}}}).keydown(function(P){lastKeyPressCode=P.keyCode;first_focus=false;switch(P.keyCode){case 38:P.preventDefault();w("up");break;case 40:P.preventDefault();w("down");break;case 8:if(B.val()==""){var x=M.val().split(",");x=x[x.length-2];if(v.prev().hasClass("selected")){M.val(M.val().replace(","+x+",",","));e.selectionRemoved.call(this,v.prev())}else{e.selectionClick.call(this,v.prev());v.prev().addClass("selected")}}if(B.val().length==1){o.hide();a("#BG_overlay_asresults").remove();G=""}if(a(":visible",o).length>=0){if(y){clearTimeout(y)}y=setTimeout(function(){j();a("#BG_overlay_asresults").remove()},e.keyDelay)}break;case 13:r=false;var O=a("li.active:first",o);if(O.length>0){if(O.find("a").length>0){if(O.find("a").attr("href").length>0){B.blur();O.find("a").click();window.location=O.find("a").attr("href")}}else{if(e.textSelectionOnly){B.val(O.data("data").attributes);B.focus()}}o.hide();a("#BG_overlay_asresults").remove()}if(e.neverSubmit||O.length>0){P.preventDefault()}break;default:if(e.showResultList){if(e.selectionLimit&&a("li.as-selection-item").length>=e.selectionLimit){p.html('<li class="as-message">'+e.limitText+"</li>");o.show();if(B.hasClass("headerSearchBox")){C()}}else{if(y){clearTimeout(y)}y=setTimeout(function(){j();a("#BG_overlay_asresults").remove()},e.keyDelay)}}break}});function j(){if(lastKeyPressCode==46||(lastKeyPressCode>8&&lastKeyPressCode<32)){a("#BG_overlay_asresults").remove();return o.hide()}var O=B.val();searchTerm=B.val();G=O;var Q=true;if(B.searchWithin&&(typeof lasttemplateid==="undefined"||navids=="-2")){Q=false}if(D(a.trim(O))&&Q){if(B.next("i.search-spinner").length==0){if(!e.textSelectionOnly&&!B.searchWithin){B.after('<i style="z-index: 100; right: 30px; position: absolute; top: 4px;" class="fa fa-spinner fa-pulse fa-2x fa-fw hidden-for-nojs tooltip-icon search-spinner"></i>')}else{B.after('<i class="fa fa-spinner fa-pulse fa-2x fa-fw hidden-for-nojs tooltip-icon search-spinner"></i>')}B.focus()}if(d=="string"){var x="";if(e.retrieveLimit){x="&limit="+encodeURIComponent(e.retrieveLimit)}if(e.beforeRetrieve){O=e.beforeRetrieve.call(this,O)}if(xhr&&xhr.readystate!=4){xhr.abort()}var P=!B.searchWithin?(scopeCategoryId>0?scopeCategoryId:"-1"):lasttemplateid;var R=b+"?"+e.queryParam+"="+encodeURIComponent(O)+"&preferredLanguage="+e.preferredLanguage+"&templateid="+P+"&navids="+((typeof navids=="undefined"||navids==0||navids=="")?P:navids);xhr=a.getJSON(R,function(T){h=0;var S=e.retrieveComplete.call(this,T);for(k in S){if(S.hasOwnProperty(k)){h++}}s(S,O);if(h==0||isAta){if(ataAjaxCallsCount==0){ataAjaxStartTime=new Date().getMilliseconds();nonataCharCount=O.length}ataAjaxCallsCount++}});ataSearchBoxLocation=B.searchWithin?"Bottom":"Top"}else{if(e.beforeRetrieve){O=e.beforeRetrieve.call(this,O)}s(g,O)}}else{o.hide();a("#BG_overlay_asresults").remove()}}function D(O){if(e.preferredLanguage.indexOf("zh")==0||e.preferredLanguage.indexOf("ja")==0||e.preferredLanguage.indexOf("ko")==0){if(O.match(/[^\x20-\x7e]/g)){return true}var x=O.match(/[^\x20-\x7e]/g);var P=x?x.length:0;if(P>=3){return true}}if(O.length>=e.minChars){return true}else{return false}}var t=0;function s(ao,R){if(!e.matchCase){R=R.toLowerCase()}var P=0;var O=false;var Q=new Array();var X=0;var ab=true;var ak=true;o.html(p.html("")).hide();for(var ah=0;ah<h;ah++){var U=ah;t++;var Z=true;if(e.searchObjProps=="value"){var Y=ao[U].GR;var aa=ao[U].GN;var V=ao[U].EGN==null?ao[U].GN:ao[U].EGN;var af=ao[U].GT}else{var ae="";var ac=e.searchObjProps.split(",");for(var W=0;W<ac.length;W++){var ap=a.trim(ac[W]);ae=ae+ao[U][ap]+" "}}if(af=="A"){isAta=true}if(Z){if(Y.length>0){if(ab){var am=a("<li class=header><span class=AS_header>"+aa+(af=="P"&&!B.searchWithin&&scopeCategoryId!=0?(" - ("+scopeTranslatedCategoryName+")"):"")+"</span></li>");p.append(am)}var aj=af=="P"&&Y.length>30;for(var ad=0;ad<Y.length;ad++){var x=a('<li class="as-result-item" type="'+af+'" id="'+af+"-as-result-item-"+ad+'"></li>').click(function(){var at=a(this).data("data");var aq=at.num;if(a("#as-selection-"+aq).length<=0&&!r){var ar=at.attributes;if(e.textSelectionOnly){B.val(ar)}else{B.val("").focus();G="";e.resultClick.call(this,at)}o.hide();a("#BG_overlay_asresults").remove()}r=false}).mousedown(function(){H=false}).mouseover(function(){p.find(".active").removeClass("active");a(this).addClass("active")}).data("data",{attributes:Y[ad].ER,r:ad});try{if(!e.matchCase){var T=new RegExp("("+encodeURIComponent(R)+")","gi")}else{var T=new RegExp("("+encodeURIComponent(R)+")","g")}}catch(al){var T=new RegExp("()","gi")}var S="";if(e.textSelectionOnly){S="<txt>"+m(a.trim(af=="M"?Y[ad].ER:Y[ad].TR))+"</txt>"}else{var an="";if(Y[ad].Image!=undefined&&Y[ad].Image!=""){an="height:40px; background: url(http://www.mouser.com/images/"+Y[ad].Image+") no-repeat right center/40px;"}S=a("<a class='link'  style='"+an+"' index="+ad+" href="+e.host+(af=="P"?("_/?Keyword="+encodeURIComponent(Y[ad].ER)):("search/refine.aspx?N="+Y[ad].IDS))+"> "+m(a.trim(af=="M"?Y[ad].ER:Y[ad].TR))+" </a>").data("GAData",{entryType:encodeURIComponent(af),entryClicked:encodeURIComponent(af!="T"?a.trim(Y[ad].ER):a.trim(Y[ad].ER)),searchTerm:a.trim(R),groupName:aa,englishGroupName:V,groupNum:ah+1,itemIndex:ad+1}).click(function(aq){if(ak){GATracking(a(this).data("GAData").englishGroupName,a(this).data("GAData").entryClicked,a(this).data("GAData").searchTerm,a(this).data("GAData").groupNum,a(this).data("GAData").itemIndex,scopeCatgoryName)}})}x=x.html(S);if(x.width()>X){X=x.width()}p.append(x);if(x.width()>X){X=x.width()}}if(e.textSelectionOnly){}else{if(aj){p.append("<span><a href="+e.host+"_/?Keyword="+escape(R.replace("pn:",""))+" style='text-decoration:underline;padding:0px;' onclick=javascript:GATracking('MP','MoreParts','"+encodeURIComponent(a.trim(R))+"','-1','-1','"+scopeCatgoryName+"')  >"+lblMoreParts+"</a></span>")}}}P++;if(e.retrieveLimit&&e.retrieveLimit==P){break}}}if(O){p.append("<span><a href="+e.host+"_/?Keyword="+escape(R)+" style='text-decoration:underline;padding:0px;'>More Parts</a></span>")}var ai="<div class='bottomMsg'>"+auOffMsg+" <input class='autoimg_bottom' readonly='readonly' id='auimgoff' /></div>";p.parent("div").append(ai);a("input[id=auimgoff], .bottomMsg").click(function(){B.unbind("click");B.unbind("keydown");B.unbind("focus");writeCookie("DisableTypeAhead","yes",1825);o.hide();a("#BG_overlay_asresults").remove();a("input[id=auimgon]").show();B.focus();B.val(B.val());a(this).attr("autocomplete","on");if(a(window).width()>767){a("#search-bar").find(".form-control-clear").addClass("clear-input")}a('.has-clear input[type="text"]').on("input propertychange",function(){var aq=a(this);var ar=Boolean(aq.val());aq.siblings(".form-control-clear").toggleClass("hidden",!ar)}).trigger("propertychange")});p.height("").width("").css("overflow","auto");o.width("");if(P>0){o.show();if(B.hasClass("headerSearchBox")){C()}if(p.height()>400){p.css("height","400")}p.parent("div").css("height",p.height()+30);if(p.width()<e.width){p.css("padding","0px");o.css("width",e.width);o.css("padding","0px")}else{var ag=0;a(".as-list li").each(function(){if(a(this).width()>ag){ag=a(this).width()}});if(p.width()>ag){ag=p.width()}o.css("width",ag+15)}if(!e.textSelectionOnly&&B.searchWithin){o.css("top","30px")}if(disableScopeSearch){o.css("top","100px");o.css("left","0")}p.css("width","100%")}B.next("i.search-spinner").remove();B.focus();e.resultsComplete.call(this)}function L(O,x){M.val(M.val()+O[e.selectedValuesProp]+",");B.val(O[e.selectedValuesProp].split("##")[0]);B.blur()}function w(T){if(a(":visible",o).length>0){var V=a("li",o);var S=V.filter(".as-result-item, .as-result-item active");if(T=="down"){var x=S.eq(0)}else{var x=S.filter(":last")}var P=a("li.active:first",o);if(P.length>0){if(T=="down"){x=P.next();if(x.hasClass("header")){x=P.next().next()}if((x.index())<(P.last().index())){a(p).scrollTop(V.eq(1))}else{var Q=a(x).offset().top;var U=Q+a(x).outerHeight();var W=a(p).offset().top;var R=W+a(p).outerHeight();var O=a(p).scrollTop();if(U>R){a(p).scrollTop(O+(U-R))}else{if(W>Q){a(p).scrollTop(O+(Q-W))}}}}else{x=P.prev();if(x.hasClass("header")){x=P.prev().prev()}if((x.index())>(a("li",o).first().index())){var Q=a(x).offset().top;var U=Q+a(x).outerHeight();var W=a(p).offset().top;var R=W+a(p).outerHeight();var O=a(p).scrollTop();if(U>R){a(p).scrollTop(O+(U-R))}else{if(W>Q){a(p).scrollTop(O+(Q-W))}}}}}V.removeClass("active");x.addClass("active")}}function J(T,S){var R=T.split(">");var Q="";var P=false;if(R.length==1){return T}for(var O=0;O<R.length;O++){if(R[O].toLowerCase().indexOf(a.trim(S))>=0||P){Q=Q+R[O]+(O<(R.length-1)?" > ":"");P=true}}if(Q==""){Q=T}return Q}function m(x){if(x.indexOf("color:red")>0){return x}var P=a.trim(B.val()).replace(/\s+/g," ").split(" ");for(var O=0;O<P.length;O++){if(P[O]!=" "){var Q=B.val().length<3?"i":"gi";var R=new RegExp("("+encodeURIComponent(P[O])+")",Q);x=x.replace(R,"\x80$1\x81")}}x=x.replace(/\x80/g,"<em>");x=x.replace(/\x81/g,"</em>");x=x.replace(/\*\*\*/g,"<span style='color:blue'>&nbsp;|&nbsp;</span>");x=x.replace(/\|\|\|/g,"<span style='color:blue'>&nbsp;in&nbsp;</span>");return x}function C(){if(document.getElementById("BG_overlay_asresults")===null&&document.getElementById("BG_overlay")===null){a("body").append("<div id='BG_overlay_asresults'></div>");a("#BG_overlay_asresults").on("click",function(){a("#BG_overlay_asresults").remove()})}if(K()){a("#BG_overlay_asresults").addClass("BG_overlayMacFFBGHack")}else{a("#BG_overlay_asresults").addClass("BG_overlay")}}function K(){var x=navigator.userAgent.toLowerCase();if(x.indexOf("mac")!=-1&&x.indexOf("firefox")!=-1){return true}return false}})}}})(jQuery);jQuery.expr[":"].Contains=jQuery.expr.createPseudo(function(a){return function(b){return jQuery(b).text().toUpperCase().indexOf(a.toUpperCase())>=0}});