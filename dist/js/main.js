function levelSelectMenu(){$("#levelSelectMenuModal").foundation("reveal","open")}function skipToLevel(e){return"sandbox"==e?(storage.set("skipToSandbox",!0),void loadMiniCourse()):(currentLevel=e,void loadMiniCourse())}function revertMiniCourse(){loadMiniCourse(refreshPreview)}function publishPrompt(){$("#publishModal").foundation("reveal","open")}function undo(){editor_js.undo()}function publish(){console.log("PARENT PUBLISH"),generatedHTML=null,MinicoursePublisher.generateHTML({baseURL:"./mini/",baseLevel:maxLevel,js:editor_js.getValue(),formInfo:'<span id="first_name">'+$("#first_name").val().charAt(0).toUpperCase()+$("#first_name").val().slice(1)+'</span> from <span id="city">'+$("#city").val()+'</span><span id="grade" style="display: none;">'+$("#grade").val()+'</span><span id="school" style="display: none;">'+$("#00NU0000005PN7e").val()+'</span><span id="state" style="display: none;">'+$("#state").val()+'</span><span id="country" style="display: none;">'+$("#country").val()+"</span>"},function(e,n){if(e)return void alert("Error generating published HTML: "+e.message);if(generatedHTML=n,console.log("GENERATED HTML"),console.log(generatedHTML),!generatedHTML)return void alert("There was an error publishing your game. Please try again later!");$("#published").hide(),$("#publishing").fadeIn();var o=window.location.hostname.indexOf("code.globaloria.com")>-1?"http://globaloria.com:8000/":"https://hackpub.herokuapp.com/buckets/globaloria/";$.ajax({type:"POST",url:o+"publish",data:{html:generatedHTML},crossDomain:!0,dataType:"json",error:function(){alert("Error publishing HTML!"),console.log(arguments)},success:function(e){$("#published").fadeIn().find("a").attr("href",e["published-url"]).text(e["published-url"]),$("#publish-form input#retUrl").val(e["published-url"]),$("#00NU0000005PN7t").val(e["published-url"]);var n=[];$("#isStudent").prop("checked")&&n.push($("#isStudent").val()),$("#isTeacher").prop("checked")&&n.push($("#isTeacher").val()),$("#isParent").prop("checked")&&n.push($("#isParent").val()),$("#isAdministrator").prop("checked")&&n.push($("#isAdministrator").val()),$("#00NU0000005Ph2K").val(n.join(",")),$("#publish-form").unbind().submit()},complete:function(){$("#publishing").hide()}})})}function loadMiniCourse(cb){cb=cb||function(){},console.log("Loading mini course template");var zeroPaddedLevel=currentLevel<10?"0"+currentLevel:currentLevel;"true"==storage.get("skipToSandbox")&&(zeroPaddedLevel=maxLevel);var codeUrl="mini/levels/"+zeroPaddedLevel+".js";remixUrl&&"true"==storage.get("skipToSandbox")&&(codeUrl="http://mycode.globaloria.com/"+remixUrl[1]),$.get(codeUrl,function(data){if(remixUrl){debug2=data;var remixCode=data.match(/<script id="published-level-code">([\s\S])+?<\/script>/g);remixCode&&(data=remixCode[0].replace('<script id="published-level-code">',"").replace("</script>",""),console.log("NEW DATA"),console.log(data))}var markHints=[],readOnlyTokens=[],readOnlyRanges=[],foldedRanges=[],currLineNumber=0,currIndentation=0,editorTooltips=[],editorCommands={markHint:function(){markHints.push(arguments)},readOnlyToken:function(){readOnlyTokens.push(arguments)},beginReadOnly:function(){readOnlyRanges.push([currLineNumber])},endReadOnly:function(){var e=readOnlyRanges[readOnlyRanges.length-1];e.push(currLineNumber)},beginCodeFold:function(e){foldedRanges.push({begin:currLineNumber,indentation:currIndentation,linkText:e||"More…"})},endCodeFold:function(){var e=foldedRanges[foldedRanges.length-1];e.end=currLineNumber},insertTooltip:function(){editorTooltips.push(arguments)}};console.log("Course retrieved: "),console.log(data),data=data.replace(/\r\n/g,"\n"),data=data.replace(/}\n*$/,"\n\n\n\n\n\n\n\n\n\n}\n"),data=data.split("\n").filter(function(line){var match=line.match(/(\s*)\/\/\s*EDITOR:(.*)/);if(!match)return currLineNumber++,!0;with(currIndentation=match[1],editorCommands)console.log("Executing editor command: "+match[2]),eval(match[2]);return!1}).join("\n"),originalEditorContent=data,editor_js.setValue(data),readOnlyRanges.push([0,1]),readOnlyRanges.push([editor_js.lineCount()-2,editor_js.lineCount()]),readOnlyRanges.forEach(function(e){editor_js.markText({line:e[0],ch:0},{line:e[1],ch:0},{className:"js-read-only",readOnly:!0})}),readOnlyTokens.forEach(function(e){readOnlyToken.apply(this,e)}),markHints.forEach(function(e){markHint.apply(this,e)}),$("#js_editor").removeClass("show-js-hints"),markHints.length?$("#showHints").show():$("#showHints").hide(),foldedRanges.forEach(function(e){var n={line:e.begin,ch:0},o=$('<span class="cm-comment">'+e.indentation+"// </span>");$('<span class="js-code-fold-link"></span>').text(e.linkText).appendTo(o),editor_js.foldCode(n,{widget:o[0],rangeFinder:function(o,t){return{from:n,to:{line:e.end-1,ch:editor_js.getLine(e.end-1).length}}}})}),editorTooltips.forEach(function(e){insertEditoTooltip.apply(this,e)}),cb()}),storage.set("currentLevel",currentLevel),document.getElementById("preview").contentWindow.location.reload()}function showHints(){$("#js_editor").addClass("show-js-hints"),$("#showHints").fadeOut()}function nextLevel(){currentLevel==maxLevel?maxLevel:currentLevel++,loadMiniCourse()}function prevLevel(){1==currentLevel?1:currentLevel--,loadMiniCourse()}var maxLevel=gameConstants.MAX_LEVEL,remixUrl=window.location.href.match(/remix=(.+)/);$(document).ready(function(){storage.set("skipToSandbox",!1),remixUrl&&storage.set("skipToSandbox",!0),$("main").css("height",window.innerHeight-36),$("#welcomeModal").foundation("reveal","open"),$(document).on("close.fndtn.reveal","#welcomeModal",function(){$(document).foundation("joyride","start",{pre_ride_callback:function(){$("#showHints").css("display","block"),$("#previous").css("display","block"),$("#next").css("display","block")},pre_step_callback:function(){console.log(this.$target.first().attr("id")),"preview"==this.$target.first().attr("id")?$("iframe").contents().find("canvas").addClass("joyride-highlight"):this.$target.first().addClass("joyride-highlight")},post_step_callback:function(){"preview"==this.$target.first().attr("id")?$("iframe").contents().find("canvas").removeClass("joyride-highlight"):this.$target.first().removeClass("joyride-highlight")},post_ride_callback:function(){console.log("JOYRIDE CLOSED"),$("#showHints").css("display","none"),$("#previous").css("display","none"),$("#next").css("display","none")},abort_on_close:!1})}),$(document).on("click",".joyride-close-tip",function(){console.log(this)});var e=0,n=window.location.search.match(/debugLevel=(\d+)/);n&&(e=parseInt(n[1])),window.sessionStorage.currentLevel=e,currentLevel=e,$instructions=$("#instructions"),$(document).on("click","span.tooltip",function(){Foundation.libs.tooltip.hide($("#editor-tooltip")),$(this).remove(),$("#editor-tooltip").remove()}),$(document).on("click","#signupButton",function(e){e.preventDefault(),console.log("signup"),console.log(this);var n=document.getElementById("sign_up_email").value,o=document.getElementById("sign_up_password").value;createUserAndLogin({email:n,password:o}),$("#signupModal").foundation("reveal","close")}),$(document).on("click","#logout",function(e){e.preventDefault(),console.log("logout"),console.log(this),logout()}),loadMiniCourse(),$("iframe#preview").attr("src","mini/index.html").focus(),$("form #00NU0000005PN7j").on("change",function(){console.log($(this).prop("checked")),$(this).prop("checked")?($("#first_name").prop("disabled",!1),$("#email").prop("disabled",!1),$("#phone").prop("disabled",!1)):($("#first_name").val(""),$("#email").val(""),$("#phone").val(""),$("#first_name").prop("disabled",!0),$("#email").prop("disabled",!0),$("#phone").prop("disabled",!0))}),$("#publish-form").submit(function(e){return console.log("VALIDATING"),""==$("#00NU0000005PN7e").val()||""==$("#city").val()||""==$("#country").val()||""==$("#state").val()?(console.log("VALIDATION FAILED"),!1):(console.log("PUBLISHING"),publish(),e.preventDefault(),!1)})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsibGV2ZWxTZWxlY3RNZW51IiwiJCIsImZvdW5kYXRpb24iLCJza2lwVG9MZXZlbCIsImxldmVsIiwic3RvcmFnZSIsInNldCIsImxvYWRNaW5pQ291cnNlIiwiY3VycmVudExldmVsIiwicmV2ZXJ0TWluaUNvdXJzZSIsInJlZnJlc2hQcmV2aWV3IiwicHVibGlzaFByb21wdCIsInVuZG8iLCJlZGl0b3JfanMiLCJwdWJsaXNoIiwiY29uc29sZSIsImxvZyIsImdlbmVyYXRlZEhUTUwiLCJNaW5pY291cnNlUHVibGlzaGVyIiwiZ2VuZXJhdGVIVE1MIiwiYmFzZVVSTCIsImJhc2VMZXZlbCIsIm1heExldmVsIiwianMiLCJnZXRWYWx1ZSIsImZvcm1JbmZvIiwidmFsIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImVyciIsImh0bWwiLCJhbGVydCIsIm1lc3NhZ2UiLCJoaWRlIiwiZmFkZUluIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImluZGV4T2YiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJjcm9zc0RvbWFpbiIsImRhdGFUeXBlIiwiZXJyb3IiLCJhcmd1bWVudHMiLCJzdWNjZXNzIiwiZmluZCIsImF0dHIiLCJ0ZXh0Iiwicm9sZSIsInByb3AiLCJwdXNoIiwiam9pbiIsInVuYmluZCIsInN1Ym1pdCIsImNvbXBsZXRlIiwiY2IiLCJ6ZXJvUGFkZGVkTGV2ZWwiLCJnZXQiLCJjb2RlVXJsIiwicmVtaXhVcmwiLCJkZWJ1ZzIiLCJyZW1peENvZGUiLCJtYXRjaCIsInJlcGxhY2UiLCJtYXJrSGludHMiLCJyZWFkT25seVRva2VucyIsInJlYWRPbmx5UmFuZ2VzIiwiZm9sZGVkUmFuZ2VzIiwiY3VyckxpbmVOdW1iZXIiLCJjdXJySW5kZW50YXRpb24iLCJlZGl0b3JUb29sdGlwcyIsImVkaXRvckNvbW1hbmRzIiwibWFya0hpbnQiLCJyZWFkT25seVRva2VuIiwiYmVnaW5SZWFkT25seSIsImVuZFJlYWRPbmx5IiwiY3VyclJhbmdlIiwibGVuZ3RoIiwiYmVnaW5Db2RlRm9sZCIsImxpbmtUZXh0IiwiYmVnaW4iLCJpbmRlbnRhdGlvbiIsImVuZENvZGVGb2xkIiwiZW5kIiwiaW5zZXJ0VG9vbHRpcCIsInNwbGl0IiwiZmlsdGVyIiwibGluZSIsImV2YWwiLCJvcmlnaW5hbEVkaXRvckNvbnRlbnQiLCJzZXRWYWx1ZSIsImxpbmVDb3VudCIsImZvckVhY2giLCJyYW5nZSIsIm1hcmtUZXh0IiwiY2giLCJjbGFzc05hbWUiLCJyZWFkT25seSIsImFwcGx5IiwidGhpcyIsInJlbW92ZUNsYXNzIiwic2hvdyIsInN0YXJ0Iiwic3BhbiIsImFwcGVuZFRvIiwiZm9sZENvZGUiLCJ3aWRnZXQiLCJyYW5nZUZpbmRlciIsImNtIiwicG9zIiwiZnJvbSIsInRvIiwiZ2V0TGluZSIsImluc2VydEVkaXRvVG9vbHRpcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50V2luZG93IiwicmVsb2FkIiwic2hvd0hpbnRzIiwiYWRkQ2xhc3MiLCJmYWRlT3V0IiwibmV4dExldmVsIiwicHJldkxldmVsIiwiZ2FtZUNvbnN0YW50cyIsIk1BWF9MRVZFTCIsImhyZWYiLCJyZWFkeSIsImNzcyIsImlubmVySGVpZ2h0Iiwib24iLCJwcmVfcmlkZV9jYWxsYmFjayIsInByZV9zdGVwX2NhbGxiYWNrIiwiJHRhcmdldCIsImZpcnN0IiwiY29udGVudHMiLCJwb3N0X3N0ZXBfY2FsbGJhY2siLCJwb3N0X3JpZGVfY2FsbGJhY2siLCJhYm9ydF9vbl9jbG9zZSIsInN0YXJ0TGV2ZWwiLCJkZWJ1Z0xldmVsIiwic2VhcmNoIiwicGFyc2VJbnQiLCJzZXNzaW9uU3RvcmFnZSIsIiRpbnN0cnVjdGlvbnMiLCJGb3VuZGF0aW9uIiwibGlicyIsInRvb2x0aXAiLCJyZW1vdmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsInZhbHVlIiwicGFzc3dvcmQiLCJjcmVhdGVVc2VyQW5k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SUFFaEJ6QixFQUFFLGVBQWVvRCxLQUFLLFlBQVksR0FFbENwRCxFQUFFLFVBQVVvRCxLQUFLLFlBQVksR0FDN0JwRCxFQUFFLFVBQVVvRCxLQUFLLFlBQVksTUFJckNwRCxFQUFFLGlCQUFpQndELE9BQU8sU0FBU3VHLEdBRy9CLE1BRkFqSixTQUFRQyxJQUFJLGNBRXVCLElBQS9CZixFQUFFLG9CQUFvQnlCLE9BQ0MsSUFBcEJ6QixFQUFFLFNBQVN5QixPQUNZLElBQXZCekIsRUFBRSxZQUFZeUIsT0FDTyxJQUFyQnpCLEVBQUUsVUFBVXlCLE9BRWZYLFFBQVFDLElBQUksc0JBQ0wsSUFNWEQsUUFBUUMsSUFBSSxjQUNaRixVQUNBa0osRUFBTVAsa0JBQ0MiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXhMZXZlbCA9IGdhbWVDb25zdGFudHMuTUFYX0xFVkVMO1xuLy8gQ2hlY2sgaWYgd2UncmUgYWNjZXNzaW5nIGEgcmVtaXggdXJsLCBpZiBzbywgc3RvcmUgdGhlIHVybCBmb3IgbGF0ZXIgdXNlXG52YXIgcmVtaXhVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgvcmVtaXg9KC4rKS8pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBEb24ndCBzdGFydCBpbiBzYW5kYm94IGlmIHRoZSBwYWdlIGlzIHJlZnJlc2hlZCBhbmQgd2UncmUgbm90IGluIHJlbWl4IG1vZGVcbiAgICBzdG9yYWdlLnNldCgnc2tpcFRvU2FuZGJveCcsIGZhbHNlKTtcbiAgICBpZihyZW1peFVybCl7XG4gICAgICAgIHN0b3JhZ2Uuc2V0KCdza2lwVG9TYW5kYm94JywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy9SZXNpemUgdG8gdmlld3BvcnRcbiAgICAkKFwibWFpblwiKS5jc3MoXCJoZWlnaHRcIiwgd2luZG93LmlubmVySGVpZ2h0LTM2KTtcblxuICAgIC8vT3BlbiB3ZWxjb21lIG1vZGFsIG9uIGZpcnN0IGxvYWRcbiAgICAkKCcjd2VsY29tZU1vZGFsJykuZm91bmRhdGlvbigncmV2ZWFsJywgJ29wZW4nKTtcblxuICAgIC8vIEluaXQgam95cmlkZSBhZnRlciBXZWxjb21lIE1vZGFsXG4gICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICcjd2VsY29tZU1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgXG4gICAgICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCdqb3lyaWRlJywgJ3N0YXJ0Jywge1xuICAgICAgICBcbiAgICAgICAgcHJlX3JpZGVfY2FsbGJhY2sgICAgICA6IGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRGlzcGxheSBhbGwgYnV0dG9ucyBmb3Igam95cmlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2hvd0hpbnRzXCIpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJldmlvdXNcIikuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNuZXh0XCIpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICBwcmVfc3RlcF9jYWxsYmFjayAgICAgIDogZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kdGFyZ2V0LmZpcnN0KCkuYXR0cignaWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy4kdGFyZ2V0LmZpcnN0KCkuYXR0cignaWQnKSA9PSBcInByZXZpZXdcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiaWZyYW1lXCIpLmNvbnRlbnRzKCkuZmluZChcImNhbnZhc1wiKS5hZGRDbGFzcyhcImpveXJpZGUtaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdGFyZ2V0LmZpcnN0KCkuYWRkQ2xhc3MoJ2pveXJpZGUtaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICBwb3N0X3N0ZXBfY2FsbGJhY2sgICAgIDogZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy4kdGFyZ2V0LmZpcnN0KCkuYXR0cignaWQnKSA9PSBcInByZXZpZXdcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiaWZyYW1lXCIpLmNvbnRlbnRzKCkuZmluZChcImNhbnZhc1wiKS5yZW1vdmVDbGFzcyhcImpveXJpZGUtaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdGFyZ2V0LmZpcnN0KCkucmVtb3ZlQ2xhc3MoJ2pveXJpZGUtaGlnaGxpZ2h0Jyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICBwb3N0X3JpZGVfY2FsbGJhY2sgICAgIDogZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSk9ZUklERSBDTE9TRURcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0Rpc3BsYXkgYWxsIGJ1dHRvbnMgZm9yIGpveXJpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Nob3dIaW50c1wiKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJldmlvdXNcIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI25leHRcIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgYWJvcnRfb25fY2xvc2UgICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuam95cmlkZS1jbG9zZS10aXAnLCBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgfSk7XG5cblxuICAgIHZhciBzdGFydExldmVsID0gMDtcbiAgICB2YXIgZGVidWdMZXZlbCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gubWF0Y2goL2RlYnVnTGV2ZWw9KFxcZCspLyk7XG5cbiAgICBpZiAoZGVidWdMZXZlbCkge1xuICAgICAgICBzdGFydExldmVsID0gcGFyc2VJbnQoZGVidWdMZXZlbFsxXSk7XG4gICAgfVxuXG5cbiAgICAvL1Jlc2V0IHNlc3Npb25TdG9yYWdlIHRvIGtlZXAgZWRpdG9yIGFuZCBpZnJhbWUgaW4gc3luY1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZVsnY3VycmVudExldmVsJ10gPSBzdGFydExldmVsO1xuXG4gICAgY3VycmVudExldmVsID0gc3RhcnRMZXZlbDtcblxuICAgICRpbnN0cnVjdGlvbnMgPSAkKFwiI2luc3RydWN0aW9uc1wiKTtcblxuICAgIC8vUmVtb3ZlIHRvb2x0aXBzIGZyb20gY29kZSBlZGl0b3JcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnc3Bhbi50b29sdGlwJywgZnVuY3Rpb24oKXtcbiAgICAgICAgRm91bmRhdGlvbi5saWJzLnRvb2x0aXAuaGlkZSggJCgnI2VkaXRvci10b29sdGlwJykgKTtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgJCgnI2VkaXRvci10b29sdGlwJykucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3NpZ251cEJ1dHRvbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ251cFwiKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIFxuICAgICAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbl91cF9lbWFpbCcpLnZhbHVlO1xuICAgICAgICB2YXIgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbl91cF9wYXNzd29yZCcpLnZhbHVlO1xuXG4gICAgICAgIGNyZWF0ZVVzZXJBbmRMb2dpbih7XG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgICAgICQoJyNzaWdudXBNb2RhbCcpLmZvdW5kYXRpb24oJ3JldmVhbCcsICdjbG9zZScpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNsb2dvdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dvdXRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuXG4gICAgICAgIGxvZ291dCgpO1xuICAgIH0pO1xuXG4gICAgbG9hZE1pbmlDb3Vyc2UoKTtcbiAgICAvL1NldCBpZnJhbWUgdG8gcmlnaHQgbGV2ZWxcbiAgICAkKCdpZnJhbWUjcHJldmlldycpLmF0dHIoJ3NyYycsICdtaW5pL2luZGV4Lmh0bWwnKS5mb2N1cygpO1xuXG4gICAgLy8gUHVibGlzaGluZyBmb3JtIHN1Ym1pc3Npb25cbiAgICAvL2lzLWFkdWx0XG4gICAgJCgnZm9ybSAjMDBOVTAwMDAwMDVQTjdqJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSApO1xuICAgICAgICBpZiggJCh0aGlzKS5wcm9wKCdjaGVja2VkJykgKXtcbiAgICAgICAgICAgICQoJyNmaXJzdF9uYW1lJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyAkKCcjbGFzdF9uYW1lJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjZW1haWwnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwaG9uZScpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJyNmaXJzdF9uYW1lJykudmFsKCcnKTtcbiAgICAgICAgICAgIC8vICQoJyNsYXN0X25hbWUnKS52YWwoJycpO1xuICAgICAgICAgICAgJCgnI2VtYWlsJykudmFsKCcnKTtcbiAgICAgICAgICAgICQoJyNwaG9uZScpLnZhbCgnJyk7XG5cbiAgICAgICAgICAgICQoJyNmaXJzdF9uYW1lJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIC8vICQoJyNsYXN0X25hbWUnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgJCgnI2VtYWlsJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICQoJyNwaG9uZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAkKCcjcHVibGlzaC1mb3JtJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVkFMSURBVElOR1wiKTtcbiAgICAgICAgLy8gRm9ybSB2YWxpZGF0aW9uXG4gICAgICAgIGlmKCAkKCcjMDBOVTAwMDAwMDVQTjdlJykudmFsKCkgPT0gXCJcIlxuICAgICAgICAgICAgfHwgJCgnI2NpdHknKS52YWwoKSA9PSBcIlwiXG4gICAgICAgICAgICB8fCAkKCcjY291bnRyeScpLnZhbCgpID09IFwiXCJcbiAgICAgICAgICAgIHx8ICQoJyNzdGF0ZScpLnZhbCgpID09IFwiXCJcbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZBTElEQVRJT04gRkFJTEVEXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgLy8gUHVibGlzaCBnYW1lIGFuZCBzZXQgdXJsIGFzIHRoZSByZXR1cm4gcGFyYW1ldGVyIGZvciB0aGUgZm9ybS5cbiAgICAgICAgLy8gU3VibWl0IHRoZSBmb3JtIGZyb20gcHVibGlzaFxuICAgICAgICBjb25zb2xlLmxvZyhcIlBVQkxJU0hJTkdcIik7XG4gICAgICAgIHB1Ymxpc2goKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGxldmVsU2VsZWN0TWVudSgpe1xuICAkKCcjbGV2ZWxTZWxlY3RNZW51TW9kYWwnKS5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpOyAgXG59XG5cbmZ1bmN0aW9uIHNraXBUb0xldmVsKGxldmVsKXtcbiAgICBpZihsZXZlbCA9PSAnc2FuZGJveCcpe1xuICAgICAgICBzdG9yYWdlLnNldCgnc2tpcFRvU2FuZGJveCcsIHRydWUpO1xuICAgICAgICBsb2FkTWluaUNvdXJzZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudExldmVsID0gbGV2ZWw7XG4gICAgbG9hZE1pbmlDb3Vyc2UoKTtcbn1cblxuZnVuY3Rpb24gcmV2ZXJ0TWluaUNvdXJzZSgpIHtcbiAgICBsb2FkTWluaUNvdXJzZShyZWZyZXNoUHJldmlldyk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hQcm9tcHQoKXtcbiAgJCgnI3B1Ymxpc2hNb2RhbCcpLmZvdW5kYXRpb24oJ3JldmVhbCcsICdvcGVuJyk7XG59XG5cbmZ1bmN0aW9uIHVuZG8oKXtcbiAgICBlZGl0b3JfanMudW5kbygpO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoKCl7XG4gIGNvbnNvbGUubG9nKFwiUEFSRU5UIFBVQkxJU0hcIik7XG4gIFxuICBnZW5lcmF0ZWRIVE1MID0gbnVsbDtcbiAgTWluaWNvdXJzZVB1Ymxpc2hlci5nZW5lcmF0ZUhUTUwoe1xuICAgIGJhc2VVUkw6ICcuL21pbmkvJyxcbiAgICBiYXNlTGV2ZWw6IG1heExldmVsLFxuICAgIGpzOiBlZGl0b3JfanMuZ2V0VmFsdWUoKSxcbiAgICBmb3JtSW5mbzogJzxzcGFuIGlkPVwiZmlyc3RfbmFtZVwiPicrICQoJyNmaXJzdF9uYW1lJykudmFsKCkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyAkKCcjZmlyc3RfbmFtZScpLnZhbCgpLnNsaWNlKDEpICsnPC9zcGFuPiBmcm9tIDxzcGFuIGlkPVwiY2l0eVwiPicrJCgnI2NpdHknKS52YWwoKSsnPC9zcGFuPidcbiAgICAgICAgICAgICAgKyc8c3BhbiBpZD1cImdyYWRlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPicrJCgnI2dyYWRlJykudmFsKCkrJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICsnPHNwYW4gaWQ9XCJzY2hvb2xcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+JyskKCcjMDBOVTAwMDAwMDVQTjdlJykudmFsKCkrJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICsnPHNwYW4gaWQ9XCJzdGF0ZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj4nKyQoJyNzdGF0ZScpLnZhbCgpKyc8L3NwYW4+J1xuICAgICAgICAgICAgICArJzxzcGFuIGlkPVwiY291bnRyeVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj4nKyQoJyNjb3VudHJ5JykudmFsKCkrJzwvc3Bhbj4nXG4gIH0sIGZ1bmN0aW9uKGVyciwgaHRtbCkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3IgZ2VuZXJhdGluZyBwdWJsaXNoZWQgSFRNTDogXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGdlbmVyYXRlZEhUTUwgPSBodG1sO1xuICAgIGNvbnNvbGUubG9nKFwiR0VORVJBVEVEIEhUTUxcIik7XG4gICAgY29uc29sZS5sb2coZ2VuZXJhdGVkSFRNTCk7XG5cbiAgICBpZiAoIWdlbmVyYXRlZEhUTUwpIHtcbiAgICAgIGFsZXJ0KFwiVGhlcmUgd2FzIGFuIGVycm9yIHB1Ymxpc2hpbmcgeW91ciBnYW1lLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gQmVnaW4gcHVibGlzaGluZ1xuICAgICQoXCIjcHVibGlzaGVkXCIpLmhpZGUoKTtcbiAgICAkKFwiI3B1Ymxpc2hpbmdcIikuZmFkZUluKCk7XG5cbiAgICB2YXIgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCdjb2RlLmdsb2JhbG9yaWEuY29tJykgPiAtMVxuICAgICAgICAgICAgICAgICAgPyAnaHR0cDovL2dsb2JhbG9yaWEuY29tOjgwMDAvJ1xuICAgICAgICAgICAgICAgICAgOiAnaHR0cHM6Ly9oYWNrcHViLmhlcm9rdWFwcC5jb20vYnVja2V0cy9nbG9iYWxvcmlhLyc7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiBiYXNlVVJMICsgJ3B1Ymxpc2gnLFxuICAgICAgZGF0YToge1xuICAgICAgICAnaHRtbCc6IGdlbmVyYXRlZEhUTUxcbiAgICAgIH0sXG4gICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgcHVibGlzaGluZyBIVE1MIVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICQoXCIjcHVibGlzaGVkXCIpLmZhZGVJbigpXG4gICAgICAgICAgLmZpbmQoJ2EnKVxuICAgICAgICAgIC5hdHRyKCdocmVmJywgZGF0YVsncHVibGlzaGVkLXVybCddKVxuICAgICAgICAgIC50ZXh0KGRhdGFbJ3B1Ymxpc2hlZC11cmwnXSk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIGZvcm0ncyByZXR1cm4gVVJMIGFuZCBzdWJtaXQgdGhlIGZvcm1cbiAgICAgICAgJCgnI3B1Ymxpc2gtZm9ybSBpbnB1dCNyZXRVcmwnKS52YWwoIGRhdGFbJ3B1Ymxpc2hlZC11cmwnXSApO1xuICAgICAgICBcbiAgICAgICAgLy8gUG9wdWxhdGUgZ2FtZSBsaW5rIGZvciBzYWxlc2ZvcmNlIGNhcHR1cmVcbiAgICAgICAgJCgnIzAwTlUwMDAwMDA1UE43dCcpLnZhbChkYXRhWydwdWJsaXNoZWQtdXJsJ10pO1xuXG4gICAgICAgIC8vIFBvcHVsYXRlIHRoZSByb2xlIGZpZWxkIGZvciBzYWxlc2ZvcmNlXG4gICAgICAgIHZhciByb2xlID0gW107XG4gICAgICAgIGlmKCAkKCcjaXNTdHVkZW50JykucHJvcCgnY2hlY2tlZCcpICkgcm9sZS5wdXNoKCAkKCcjaXNTdHVkZW50JykudmFsKCkgKTtcbiAgICAgICAgaWYoICQoJyNpc1RlYWNoZXInKS5wcm9wKCdjaGVja2VkJykgKSByb2xlLnB1c2goICQoJyNpc1RlYWNoZXInKS52YWwoKSApO1xuICAgICAgICBpZiggJCgnI2lzUGFyZW50JykucHJvcCgnY2hlY2tlZCcpICkgcm9sZS5wdXNoKCAkKCcjaXNQYXJlbnQnKS52YWwoKSApO1xuICAgICAgICBpZiggJCgnI2lzQWRtaW5pc3RyYXRvcicpLnByb3AoJ2NoZWNrZWQnKSApIHJvbGUucHVzaCggJCgnI2lzQWRtaW5pc3RyYXRvcicpLnZhbCgpICk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAkKCcjMDBOVTAwMDAwMDVQaDJLJykudmFsKCByb2xlLmpvaW4oJywnKSApO1xuXG4gICAgICAgIC8vVW5iaW5kIGZvcm0gdG8gcHJldmVudCBzdWJtaXQgbG9vcFxuICAgICAgICAkKCcjcHVibGlzaC1mb3JtJykudW5iaW5kKCkuc3VibWl0KCk7XG5cbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIjcHVibGlzaGluZ1wiKS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkTWluaUNvdXJzZShjYil7XG4gICAgY2IgPSBjYiB8fCBmdW5jdGlvbigpIHt9XG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nIG1pbmkgY291cnNlIHRlbXBsYXRlXCIpO1xuICAgIHZhciB6ZXJvUGFkZGVkTGV2ZWwgPSAoY3VycmVudExldmVsIDwgMTApID8gJzAnICsgY3VycmVudExldmVsIDogY3VycmVudExldmVsO1xuXG4gICAgLy8gU2tpcCB0byBzYW5kYm94XG4gICAgaWYoIHN0b3JhZ2UuZ2V0KCdza2lwVG9TYW5kYm94JykgPT0gJ3RydWUnICl7XG4gICAgICAgIHplcm9QYWRkZWRMZXZlbCA9IG1heExldmVsO1xuICAgIH1cblxuICAgIHZhciBjb2RlVXJsID0gJ21pbmkvbGV2ZWxzLycgKyB6ZXJvUGFkZGVkTGV2ZWwgKyAnLmpzJztcblxuICAgIC8vIExvYWQgcmVtaXggY29kZSBmb3Igc2FuZGJveCB3aGVuIGF2YWlsYWJsZVxuICAgIGlmKCByZW1peFVybCAmJiBzdG9yYWdlLmdldCgnc2tpcFRvU2FuZGJveCcpID09ICd0cnVlJyApe1xuICAgICAgICAvLyBQdWxsIGdhbWUgZnJvbSBkZXYgb3IgbGl2ZSAoQ09SUyBpcyBjdXJyZW50bHkgYnJlYWtpbmcgcHVsbHMgZnJvbSBnbG9iYWxvcmlhLWRldi5zMylcbiAgICAgICAgLy8gaWYod2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goL2NvZGUuZ2xvYmFsb3JpYS5jb20vKSl7XG4gICAgICAgICAgICBjb2RlVXJsID0gJ2h0dHA6Ly9teWNvZGUuZ2xvYmFsb3JpYS5jb20vJytyZW1peFVybFsxXTtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICBjb2RlVXJsID0gJ2h0dHA6Ly9nbG9iYWxvcmlhLWRldi5zMy5hbWF6b25hd3MuY29tLycrcmVtaXhVcmxbMV07XG4gICAgICAgIC8vIH0gICAgXG4gICAgfVxuXG4gICAgJC5nZXQoY29kZVVybCwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyBFeHRyYWN0IGVkaXRvciBjb2RlIGZyb20gdGhlIHB1Ymxpc2hlZCBIVE1MIGRvY3VtZW50XG4gICAgICAgIGlmKHJlbWl4VXJsKXtcbiAgICAgICAgICAgIGRlYnVnMiA9IGRhdGE7XG4gICAgICAgICAgICB2YXIgcmVtaXhDb2RlID0gZGF0YS5tYXRjaCgvPHNjcmlwdCBpZD1cInB1Ymxpc2hlZC1sZXZlbC1jb2RlXCI+KFtcXHNcXFNdKSs/PFxcL3NjcmlwdD4vZyk7XG4gICAgICAgICAgICBpZihyZW1peENvZGUpe1xuICAgICAgICAgICAgICAgIC8vIERhdGEgc2hvdWxkIG9ubHkgYmUgdGhlIGVkaXRvciBzcGVjaWZpYyBjb2RlIChpLmUuIHRoZSBjYXB0dXJlZCBncm91cClcbiAgICAgICAgICAgICAgICBkYXRhID0gcmVtaXhDb2RlWzBdLnJlcGxhY2UoJzxzY3JpcHQgaWQ9XCJwdWJsaXNoZWQtbGV2ZWwtY29kZVwiPicsICcnKS5yZXBsYWNlKCc8L3NjcmlwdD4nLCAnJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJORVcgREFUQVwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXJrSGludHMgPSBbXTtcbiAgICAgICAgdmFyIHJlYWRPbmx5VG9rZW5zID0gW107XG4gICAgICAgIHZhciByZWFkT25seVJhbmdlcyA9IFtdO1xuICAgICAgICB2YXIgZm9sZGVkUmFuZ2VzID0gW107XG4gICAgICAgIHZhciBjdXJyTGluZU51bWJlciA9IDA7XG4gICAgICAgIHZhciBjdXJySW5kZW50YXRpb24gPSAwO1xuICAgICAgICB2YXIgZWRpdG9yVG9vbHRpcHMgPSBbXTtcbiAgICAgICAgdmFyIGVkaXRvckNvbW1hbmRzID0ge1xuICAgICAgICAgICAgbWFya0hpbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG1hcmtIaW50cy5wdXNoKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVhZE9ubHlUb2tlbjogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZWFkT25seVRva2Vucy5wdXNoKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVnaW5SZWFkT25seTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlSYW5nZXMucHVzaChbY3VyckxpbmVOdW1iZXJdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRSZWFkT25seTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJSYW5nZSA9IHJlYWRPbmx5UmFuZ2VzW3JlYWRPbmx5UmFuZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGN1cnJSYW5nZS5wdXNoKGN1cnJMaW5lTnVtYmVyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWdpbkNvZGVGb2xkOiBmdW5jdGlvbihsaW5rVGV4dCkge1xuICAgICAgICAgICAgICAgIGZvbGRlZFJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGN1cnJMaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBpbmRlbnRhdGlvbjogY3VyckluZGVudGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dDogbGlua1RleHQgfHwgJ01vcmVcXHUyMDI2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZENvZGVGb2xkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VyclJhbmdlID0gZm9sZGVkUmFuZ2VzW2ZvbGRlZFJhbmdlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBjdXJyUmFuZ2UuZW5kID0gY3VyckxpbmVOdW1iZXI7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpbnNlcnRUb29sdGlwOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGVkaXRvclRvb2x0aXBzLnB1c2goYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvdXJzZSByZXRyaWV2ZWQ6IFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgLy8gTm9ybWFsaXplIHdoaXRlc3BhY2UgaWYgd2UncmUgb24gd2luZG93cy5cbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXFxyXFxuL2csICdcXG4nKTtcblxuICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2UgaXQgbGVzcyBsaWtlbHkgdGhhdCB0aGUgdXNlciBhY2NpZGVudGFsbHlcbiAgICAgICAgLy8gZGVsZXRlcyB0aGUgY2xvc2luZyBicmFjZSBvZiBhIGZ1bmN0aW9uIGRlZmluaXRpb24gb3IgYWRkc1xuICAgICAgICAvLyBjb2RlIGFmdGVyIGl0LCBzbyB3ZSdsbCBtb3ZlIGl0IHdheSBkb3duIHRvIHRoZSBib3R0b20gb2ZcbiAgICAgICAgLy8gdGhlIGZpbGUgd2l0aCBwbGVudHkgb2Ygd2hpdGUtc3BhY2UgaW4gYmV0d2Vlbi5cbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvfVxcbiokLywgJ1xcblxcblxcblxcblxcblxcblxcblxcblxcblxcbn1cXG4nKTtcblxuICAgICAgICBkYXRhID0gZGF0YS5zcGxpdCgnXFxuJykuZmlsdGVyKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGxpbmUubWF0Y2goLyhcXHMqKVxcL1xcL1xccypFRElUT1I6KC4qKS8pO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIGN1cnJMaW5lTnVtYmVyKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJJbmRlbnRhdGlvbiA9IG1hdGNoWzFdO1xuICAgICAgICAgICAgd2l0aCAoZWRpdG9yQ29tbWFuZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4ZWN1dGluZyBlZGl0b3IgY29tbWFuZDogXCIgKyBtYXRjaFsyXSk7XG4gICAgICAgICAgICAgICAgZXZhbChtYXRjaFsyXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkuam9pbignXFxuJyk7XG5cbiAgICAgICAgb3JpZ2luYWxFZGl0b3JDb250ZW50ID0gZGF0YTtcbiAgICAgICAgZWRpdG9yX2pzLnNldFZhbHVlKGRhdGEpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIGZpcnN0IGxpbmUgcmVhZC1vbmx5LlxuICAgICAgICByZWFkT25seVJhbmdlcy5wdXNoKFswLCAxXSk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgbGFzdCB0d28gbGluZXMgcmVhZC1vbmx5LlxuICAgICAgICByZWFkT25seVJhbmdlcy5wdXNoKFtlZGl0b3JfanMubGluZUNvdW50KCkgLSAyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yX2pzLmxpbmVDb3VudCgpXSk7XG5cbiAgICAgICAgcmVhZE9ubHlSYW5nZXMuZm9yRWFjaChmdW5jdGlvbihyYW5nZSkge1xuICAgICAgICAgICAgZWRpdG9yX2pzLm1hcmtUZXh0KHtsaW5lOiByYW5nZVswXSwgY2g6IDB9LCB7XG4gICAgICAgICAgICAgIGxpbmU6IHJhbmdlWzFdLFxuICAgICAgICAgICAgICBjaDogMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdqcy1yZWFkLW9ubHknLFxuICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZWFkT25seVRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGFyZ3VtZW50cykge1xuICAgICAgICAgICAgcmVhZE9ubHlUb2tlbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYXJrSGludHMuZm9yRWFjaChmdW5jdGlvbihhcmd1bWVudHMpIHtcbiAgICAgICAgICAgIG1hcmtIaW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIjanNfZWRpdG9yXCIpLnJlbW92ZUNsYXNzKCdzaG93LWpzLWhpbnRzJyk7XG5cbiAgICAgICAgaWYgKG1hcmtIaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIjc2hvd0hpbnRzXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjc2hvd0hpbnRzXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvbGRlZFJhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSB7bGluZTogcmFuZ2UuYmVnaW4sIGNoOiAwfTtcbiAgICAgICAgICAgIHZhciBzcGFuID0gJCgnPHNwYW4gY2xhc3M9XCJjbS1jb21tZW50XCI+JyArIHJhbmdlLmluZGVudGF0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnLy8gPC9zcGFuPicpO1xuICAgICAgICAgICAgJCgnPHNwYW4gY2xhc3M9XCJqcy1jb2RlLWZvbGQtbGlua1wiPjwvc3Bhbj4nKVxuICAgICAgICAgICAgICAudGV4dChyYW5nZS5saW5rVGV4dClcbiAgICAgICAgICAgICAgLmFwcGVuZFRvKHNwYW4pO1xuICAgICAgICAgICAgZWRpdG9yX2pzLmZvbGRDb2RlKHN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0OiBzcGFuWzBdLFxuICAgICAgICAgICAgICAgIHJhbmdlRmluZGVyOiBmdW5jdGlvbihjbSwgcG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTogcmFuZ2UuZW5kIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaDogZWRpdG9yX2pzLmdldExpbmUocmFuZ2UuZW5kIC0gMSkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVkaXRvclRvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24oYXJndW1lbnRzKXtcbiAgICAgICAgICAgIGluc2VydEVkaXRvVG9vbHRpcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYigpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIFNldCBzZXNzaW9uIHN0b3JhZ2UgYW5kIHJlbG9hZCB0aGUgaWZyYW1lIHRvIGJlIHN5bmNoZWRcbiAgICBzdG9yYWdlLnNldCgnY3VycmVudExldmVsJywgY3VycmVudExldmVsKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldycpLmNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dIaW50cygpIHtcbiAgICAkKFwiI2pzX2VkaXRvclwiKS5hZGRDbGFzcygnc2hvdy1qcy1oaW50cycpO1xuICAgICQoXCIjc2hvd0hpbnRzXCIpLmZhZGVPdXQoKTtcbn1cblxuZnVuY3Rpb24gbmV4dExldmVsKCl7XG4gICAgY3VycmVudExldmVsID09IG1heExldmVsID8gbWF4TGV2ZWwgOiBjdXJyZW50TGV2ZWwrKztcbiAgICBcbiAgICAvL1VwZGF0ZSBpZnJhbWUgc291cmNlXG4gICAgLy8gJCgnaWZyYW1lI3ByZXZpZXcnKS5hdHRyKCdzcmMnLCAncHJvamVjdF90ZW1wbGF0ZS9pbmRleCcrY3VycmVudExldmVsKycuaHRtbCcpO1xuICAgIC8vICRpbnN0cnVjdGlvbnMuZmluZChcImgzXCIpLnRleHQoaW5zdHJ1Y3Rpb25zW1wibGV2ZWxcIitjdXJyZW50TGV2ZWxdLnRpdGxlKTtcbiAgICAvLyAkaW5zdHJ1Y3Rpb25zLmZpbmQoXCJwXCIpLnRleHQoaW5zdHJ1Y3Rpb25zW1wibGV2ZWxcIitjdXJyZW50TGV2ZWxdLmNvbnRlbnQpO1xuICAgIGxvYWRNaW5pQ291cnNlKCk7XG59XG5cbmZ1bmN0aW9uIHByZXZMZXZlbCgpe1xuICAgIGN1cnJlbnRMZXZlbCA9PSAxID8gMSA6IGN1cnJlbnRMZXZlbC0tO1xuICAgIFxuICAgIC8vVXBkYXRlIGlmcmFtZSBzb3VyY2VcbiAgICAvLyAkKCdpZnJhbWUjcHJldmlldycpLmF0dHIoJ3NyYycsICdwcm9qZWN0X3RlbXBsYXRlL2luZGV4JytjdXJyZW50TGV2ZWwrJy5odG1sJyk7XG4gICAgLy8gJGluc3RydWN0aW9ucy5maW5kKFwiaDNcIikudGV4dChpbnN0cnVjdGlvbnNbXCJsZXZlbFwiK2N1cnJlbnRMZXZlbF0udGl0bGUpO1xuICAgIC8vICRpbnN0cnVjdGlvbnMuZmluZChcInBcIikudGV4dChpbnN0cnVjdGlvbnNbXCJsZXZlbFwiK2N1cnJlbnRMZXZlbF0uY29udGVudCk7XG4gICAgbG9hZE1pbmlDb3Vyc2UoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
