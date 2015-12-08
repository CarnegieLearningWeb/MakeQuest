function markHint(){var e=[],r=0,o=0,t=editor_js.getValue(),n=esprima.tokenize(t,{range:!0}),i=[].slice.call(arguments).map(function(e){return null===e?{canBeAnything:!0}:("string"==typeof e&&(e={value:e}),e)}),a=function(e,r){return e.canBeAnything?!0:"value"in e?r.value===e.value:"type"in e?r.type==e.type:void 0};n.forEach(function(t,n){var l=i[r];a(l,t)?(r++,l.highlight&&e.push(t),i.length==r&&(e.forEach(function(e){var r=editor_js.posFromIndex(e.range[0]),t=editor_js.posFromIndex(e.range[1]);0==o++&&editor_js.scrollIntoView(r),editor_js.markText(r,t,{className:"js-hint"})}),r=0)):(r=0,e=[])})}function readOnlyToken(){var e=[],r=0,o=0,t=editor_js.getValue(),n=esprima.tokenize(t,{range:!0}),i=[].slice.call(arguments).map(function(e){return null===e?{canBeAnything:!0}:("string"==typeof e&&(e={value:e}),e)}),a=function(e,r){return e.canBeAnything?!0:"value"in e?r.value===e.value:"type"in e?r.type==e.type:void 0};n.forEach(function(t,n){var l=i[r];a(l,t)?(r++,l.highlight&&e.push(t),i.length==r&&(e.forEach(function(e){var r=editor_js.posFromIndex(e.range[0]),t=editor_js.posFromIndex(e.range[1]);0==o++&&editor_js.scrollIntoView(r),editor_js.markText(r,t,{className:"js-read-only",readOnly:!0})}),r=0)):(r=0,e=[])})}function markJsErrorAtLine(e){var r={line:e-1,ch:0};editor_js.markText(r,{line:e,ch:0},{className:"js-error",clearOnEnter:!0}),editor_js.scrollIntoView(r)}function refreshPreview(){if(console.log("Refreshing view"),!CustomErrors.test()){var e=editor_js.getValue();if("undefined"!=typeof esprima)try{esprima.parse(e)}catch(r){if(r.lineNumber)return markJsErrorAtLine(r.lineNumber),$("#errorModal p.error-text").text(r.description+" at line "+r.lineNumber),void $("#errorModal").foundation("reveal","open")}try{console.log("Eval js"),console.log(e),preview.eval(e+"//# sourceURL=user-level.js"),preview.remove(),preview.p5PlayRebind(),preview.eval("new p5();")}catch(o){StackTrace.fromError(o,{offline:!0,filter:function(e){return/user-level\.js/.test(e.fileName)}}).then(function(e){e.length&&markJsErrorAtLine(e[0].lineNumber)}),console.log("ERROR"),console.log(o),$("#errorModal p.error-text").text(o),$("#errorModal").foundation("reveal","open")}}}function insertEditoTooltip(e,r,o){$("body").prepend('<span id="editor-tooltip" data-tooltip class="has-tip" title="'+e+'"></span>'),editor_js.addWidget({ch:o,line:r-1},$("#editor-tooltip")[0],!0),$(document).foundation("tooltip","reflow"),Foundation.libs.tooltip.showTip($("#editor-tooltip"))}var originalEditorContent="",editor_js=CodeMirror($("#js_editor")[0],{lineNumbers:!0,lineWrapping:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],mode:"javascript"});editor_js.on("changes",function(){editor_js.getValue()===originalEditorContent?$("#revert").hide():$("#revert").show()});
var CustomErrors={test:function(){var r=editor_js.getValue();try{tokens=esprima.tokenize(r,{range:!0,loc:!0})}catch(e){console.log("ERROR TOKENIZING"),console.log(e);var o="Unexpected token ILLEGAL"==e.description?"It looks like you have a typo. Make sure your STRINGS have an opening ' and a closing ' ":e.description;return this.displayError(e.lineNumber,o),!0}for(var s=0;s<tokens.length;s++)if("Identifier"==tokens[s].type&&"createPlatform"==tokens[s].value){var t=CustomErrors.createPlatform(tokens,s);if(t)return!0}},displayError:function(r,e){markJsErrorAtLine(r),$("#errorModal p.error-text").text(e),$("#errorModal").foundation("reveal","open")},errorMsgs:{color:"You need a valid color name. Make sure you're spelling the name of your color correctly, and that it's surrounded with quotation marks.",comma:"Every value or ARGUMENT inside parentheses must be separated by a comma",semicolon:"Every line of code or STATEMENT must end with a semicolon ';' ",parentheses:"You need an opening '(' and a closing ')' parentheses."},createPlatform:function(r,e){for(var o={fourArgs:[{type:["Punctuator"],value:["("],errorMsg:CustomErrors.errorMsgs.parentheses},{type:["Numeric"],value:null,errorMsg:""},{type:["Punctuator"],value:[","],errorMsg:CustomErrors.errorMsgs.comma},{type:["Numeric"],value:null,errorMsg:""},{type:["Punctuator"],value:[","],errorMsg:CustomErrors.errorMsgs.comma},{type:["Numeric","Identifier"],value:null,errorMsg:""},{type:["Punctuator"],value:[","],errorMsg:CustomErrors.errorMsgs.comma},{type:["Numeric","Identifier"],value:null,errorMsg:""},{type:["Punctuator"],value:[")"],errorMsg:CustomErrors.errorMsgs.parentheses},{type:["Punctuator"],value:[";"],errorMsg:CustomErrors.errorMsgs.semicolon}],fiveArgs:[{type:["Punctuator"],value:["("],errorMsg:CustomErrors.errorMsgs.parentheses},{type:["Numeric"],value:null,errorMsg:""},{type:["Punctuator"],value:[","],errorMsg:CustomErrors.errorMsgs.comma},{type:["Numeric"],value:null,errorMsg:""},{type:["Punctuator"],value:[","],errorMsg:CustomErrors.errorMsgs.comma},{type:["Numeric","Identifier"],value:null,errorMsg:""},{type:["Punctuator"],value:[","],errorMsg:CustomErrors.errorMsgs.comma},{type:["Numeric","Identifier"],value:null,errorMsg:""},{type:["Punctuator"],value:[","],errorMsg:CustomErrors.errorMsgs.comma},{type:["String","Identifier"],value:null,errorMsg:CustomErrors.errorMsgs.color},{type:["Punctuator"],value:[")"],errorMsg:CustomErrors.errorMsgs.parentheses},{type:["Punctuator"],value:[";"],errorMsg:CustomErrors.errorMsgs.semicolon}]},s=currentLevel>1&&currentLevel<4?o.fourArgs:o.fiveArgs,t=0;t<s.length;t++){var u=e+1+t,a=r[u].type,n=r[u].value;if(-1==s[t].type.indexOf(a)){console.log("Err A"),console.log(a),console.log(s[t]),console.log(s),console.log(r[u]);var l={token:r[e],errMsg:s[t].errorMsg};return this.displayError(l.token.loc.start.line,l.errMsg),!0}if(s[t].value&&-1==s[t].value.indexOf(n)){console.log("Err B");var l={token:r[e],errMsg:s[t].errorMsg};return this.displayError(l.token.loc.start.line,l.errMsg),!0}}}};
function revertMiniCourse(){loadMiniCourse(refreshPreview)}function publishPrompt(){$("#publishModal").foundation("reveal","open")}function publish(){console.log("PARENT PUBLISH"),generatedHTML=null,MinicoursePublisher.generateHTML({baseURL:"./mini/",baseLevel:maxLevel,js:editor_js.getValue(),formInfo:'<span id="first_name">'+$("#first_name").val().charAt(0).toUpperCase()+$("#first_name").val().slice(1)+'</span> from <span id="city">'+$("#city").val()+'</span><span id="grade" style="display: none;">'+$("#grade").val()+'</span><span id="school" style="display: none;">'+$("#00NU0000005PN7e").val()+'</span><span id="state" style="display: none;">'+$("#state").val()+'</span><span id="country" style="display: none;">'+$("#country").val()+"</span>"},function(e,n){if(e)return void alert("Error generating published HTML: "+e.message);if(generatedHTML=n,console.log("GENERATED HTML"),console.log(generatedHTML),!generatedHTML)return void alert("There was an error publishing your game. Please try again later!");$("#published").hide(),$("#publishing").fadeIn();var o=window.location.hostname.indexOf("code.globaloria.com")>-1?"http://globaloria.com:8000/":"https://hackpub.herokuapp.com/buckets/globaloria/";$.ajax({type:"POST",url:o+"publish",data:{html:generatedHTML},crossDomain:!0,dataType:"json",error:function(){alert("Error publishing HTML!"),console.log(arguments)},success:function(e){$("#published").fadeIn().find("a").attr("href",e["published-url"]).text(e["published-url"]),$("#publish-form input#retUrl").val(e["published-url"]),$("#00NU0000005PN7t").val(e["published-url"]);var n=[];$("#isStudent").prop("checked")&&n.push($("#isStudent").val()),$("#isTeacher").prop("checked")&&n.push($("#isTeacher").val()),$("#isParent").prop("checked")&&n.push($("#isParent").val()),$("#isAdministrator").prop("checked")&&n.push($("#isAdministrator").val()),$("#00NU0000005Ph2K").val(n.join(",")),$("#publish-form").unbind().submit()},complete:function(){$("#publishing").hide()}})})}function loadMiniCourse(cb){cb=cb||function(){},console.log("Loading mini course template");var zeroPaddedLevel=currentLevel<10?"0"+currentLevel:currentLevel;"true"==window.sessionStorage.skipToSandbox&&(zeroPaddedLevel=maxLevel),$.get("mini/levels/"+zeroPaddedLevel+".js",function(data){var markHints=[],readOnlyTokens=[],readOnlyRanges=[],foldedRanges=[],currLineNumber=0,currIndentation=0,editorTooltips=[],editorCommands={markHint:function(){markHints.push(arguments)},readOnlyToken:function(){readOnlyTokens.push(arguments)},beginReadOnly:function(){readOnlyRanges.push([currLineNumber])},endReadOnly:function(){var e=readOnlyRanges[readOnlyRanges.length-1];e.push(currLineNumber)},beginCodeFold:function(e){foldedRanges.push({begin:currLineNumber,indentation:currIndentation,linkText:e||"More…"})},endCodeFold:function(){var e=foldedRanges[foldedRanges.length-1];e.end=currLineNumber},insertTooltip:function(){editorTooltips.push(arguments)}};console.log("Course retrieved: "),console.log(data),data=data.replace(/\r\n/g,"\n"),data=data.replace(/}\n*$/,"\n\n\n\n\n\n\n\n\n\n}\n"),data=data.split("\n").filter(function(line){var match=line.match(/(\s*)\/\/\s*EDITOR:(.*)/);if(!match)return currLineNumber++,!0;with(currIndentation=match[1],editorCommands)console.log("Executing editor command: "+match[2]),eval(match[2]);return!1}).join("\n"),originalEditorContent=data,editor_js.setValue(data),readOnlyRanges.push([0,1]),readOnlyRanges.push([editor_js.lineCount()-2,editor_js.lineCount()]),readOnlyRanges.forEach(function(e){editor_js.markText({line:e[0],ch:0},{line:e[1],ch:0},{className:"js-read-only",readOnly:!0})}),readOnlyTokens.forEach(function(e){readOnlyToken.apply(this,e)}),markHints.forEach(function(e){markHint.apply(this,e)}),$("#js_editor").removeClass("show-js-hints"),markHints.length?$("#showHints").show():$("#showHints").hide(),foldedRanges.forEach(function(e){var n={line:e.begin,ch:0},o=$('<span class="cm-comment">'+e.indentation+"// </span>");$('<span class="js-code-fold-link"></span>').text(e.linkText).appendTo(o),editor_js.foldCode(n,{widget:o[0],rangeFinder:function(o,t){return{from:n,to:{line:e.end-1,ch:editor_js.getLine(e.end-1).length}}}})}),editorTooltips.forEach(function(e){insertEditoTooltip.apply(this,e)}),cb()})}function showHints(){$("#js_editor").addClass("show-js-hints"),$("#showHints").fadeOut()}function nextLevel(){currentLevel==maxLevel?maxLevel:currentLevel++,loadMiniCourse()}function prevLevel(){1==currentLevel?1:currentLevel--,loadMiniCourse()}var maxLevel=gameConstants.MAX_LEVEL;$(document).ready(function(){storage.set("skipToSandbox",!1),$("main").css("height",window.innerHeight-36),$("#welcomeModal").foundation("reveal","open"),$(document).on("close.fndtn.reveal","#welcomeModal",function(){$(document).foundation("joyride","start",{pre_ride_callback:function(){$("#revert").css("display","block"),$("#showHints").css("display","block"),$("#previous").css("display","block"),$("#next").css("display","block")},pre_step_callback:function(){console.log(this.$target.first().attr("id")),"preview"==this.$target.first().attr("id")?$("iframe").contents().find("canvas").addClass("joyride-highlight"):this.$target.first().addClass("joyride-highlight")},post_step_callback:function(){"preview"==this.$target.first().attr("id")?$("iframe").contents().find("canvas").removeClass("joyride-highlight"):this.$target.first().removeClass("joyride-highlight")},post_ride_callback:function(){$("#revert").css("display","none"),$("#showHints").css("display","none"),$("#previous").css("display","none"),$("#next").css("display","none")},abort_on_close:!1})});var e=0,n=window.location.search.match(/debugLevel=(\d+)/);n&&(e=parseInt(n[1])),window.sessionStorage.currentLevel=e,currentLevel=e,$instructions=$("#instructions"),$(document).on("click","#loginButton",function(e){e.preventDefault(),console.log("login"),console.log(this);var n=document.getElementById("sign_in_email").value,o=document.getElementById("sign_in_password").value;authWithPassword({email:n,password:o},authHandler),$("#signupModal").foundation("reveal","close")}),$(document).on("click","span.tooltip",function(){Foundation.libs.tooltip.hide($("#editor-tooltip")),$(this).remove(),$("#editor-tooltip").remove()}),$(document).on("click","#signupButton",function(e){e.preventDefault(),console.log("signup"),console.log(this);var n=document.getElementById("sign_up_email").value,o=document.getElementById("sign_up_password").value;createUserAndLogin({email:n,password:o}),$("#signupModal").foundation("reveal","close")}),$(document).on("click","#logout",function(e){e.preventDefault(),console.log("logout"),console.log(this),logout()}),loadMiniCourse(),$("iframe#preview").attr("src","mini/index.html").focus(),$("form #00NU0000005PN7j").on("change",function(){console.log($(this).prop("checked")),$(this).prop("checked")?($("#first_name").prop("disabled",!1),$("#email").prop("disabled",!1),$("#phone").prop("disabled",!1)):($("#first_name").val(""),$("#email").val(""),$("#phone").val(""),$("#first_name").prop("disabled",!0),$("#email").prop("disabled",!0),$("#phone").prop("disabled",!0))}),$("#publish-form").submit(function(e){return console.log("VALIDATING"),""==$("#00NU0000005PN7e").val()||""==$("#city").val()||""==$("#country").val()||""==$("#state").val()?(console.log("VALIDATION FAILED"),!1):(console.log("PUBLISHING"),publish(),e.preventDefault(),!1)})});
var MinicoursePublisher=function(e){var r={};return r.generateHTML=function(r,n){var a=r.baseLevel,t=r.js,E=r.formInfo,u=e("<a></a>").attr("href",r.baseURL)[0].href,i=u+"index.html";e.ajax({url:i,success:function(e){var r=function(r,n){if(-1==e.indexOf(r))throw new Error("Could not find text: "+r);e=e.replace(r,n)};try{r("<!-- PUBLISHER: INSERT BASE HREF TAG HERE -->",'<base href="'+u+'">'),r("// PUBLISHER: INSERT LEVEL CODE HERE",t),r("<!-- PUBLISHER: INSERT HTML HERE -->",E),r("data-is-unpublished-game",'data-published-game-base-level="'+a+'"')}catch(i){return n(i)}n(null,e)},error:function(){n(new Error("Unable to retrieve "+i))}})},r}(jQuery);