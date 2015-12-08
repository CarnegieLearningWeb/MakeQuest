var maxLevel = gameConstants.MAX_LEVEL;

$(document).ready(function() {
    // Don't start in sandbox if the page is refreshed
    storage.set('skipToSandbox', false);

    //Resize to viewport
    $("main").css("height", window.innerHeight-36);

    //Open welcome modal on first load
    $('#welcomeModal').foundation('reveal', 'open');

    // Init joyride after Welcome Modal
    $(document).on('close.fndtn.reveal', '#welcomeModal', function () {
      
      $(document).foundation('joyride', 'start', {
        
        pre_ride_callback      : function (){
                                  //Display all buttons for joyride
                                  $("#revert").css('display', 'block');
                                  $("#showHints").css('display', 'block');
                                  $("#previous").css('display', 'block');
                                  $("#next").css('display', 'block');
                                },
        pre_step_callback      : function (){
                                  console.log(this.$target.first().attr('id'));
                                  if(this.$target.first().attr('id') == "preview"){
                                    $("iframe").contents().find("canvas").addClass("joyride-highlight");
                                  }else{
                                    this.$target.first().addClass('joyride-highlight');
                                  }
                                },
        post_step_callback     : function (){
                                  if(this.$target.first().attr('id') == "preview"){
                                    $("iframe").contents().find("canvas").removeClass("joyride-highlight");
                                  }else{
                                    this.$target.first().removeClass('joyride-highlight');            
                                  }
                                },
        post_ride_callback     : function (){
                                    //Display all buttons for joyride
                                  $("#revert").css('display', 'none');
                                  $("#showHints").css('display', 'none');
                                  $("#previous").css('display', 'none');
                                  $("#next").css('display', 'none');

                                  // Init iframe's joyride
                                  // document.getElementById('preview').contentWindow.walkthrough()
                                },
        abort_on_close           : false,
      });

    });



    var startLevel = 0;
    var debugLevel = window.location.search.match(/debugLevel=(\d+)/);

    if (debugLevel) {
        startLevel = parseInt(debugLevel[1]);
    }


    //Reset sessionStorage to keep editor and iframe in sync
    window.sessionStorage['currentLevel'] = startLevel;

    currentLevel = startLevel;

    $instructions = $("#instructions");

    $(document).on('click', '#loginButton', function(e) {
        e.preventDefault();
        console.log("login");
        console.log(this);

        var email = document.getElementById('sign_in_email').value;
        var password = document.getElementById('sign_in_password').value;
        authWithPassword({
            email: email,
            password: password
        }, authHandler);



        $('#signupModal').foundation('reveal', 'close');
    });

    //Remove tooltips from code editor
    $(document).on('click', 'span.tooltip', function(){
        Foundation.libs.tooltip.hide( $('#editor-tooltip') );
        $(this).remove();
        $('#editor-tooltip').remove();
    });

    $(document).on('click', '#signupButton', function(e) {
        e.preventDefault();
        console.log("signup");
        console.log(this);
        
        var email = document.getElementById('sign_up_email').value;
        var password = document.getElementById('sign_up_password').value;

        createUserAndLogin({
            email: email,
            password: password
        });
        

        $('#signupModal').foundation('reveal', 'close');
    });

    $(document).on('click', '#logout', function(e) {
        e.preventDefault();
        console.log("logout");
        console.log(this);

        logout();
    });

    loadMiniCourse();
    //Set iframe to right level
    $('iframe#preview').attr('src', 'mini/index.html').focus();

    // Publishing form submission
    //is-adult
    $('form #00NU0000005PN7j').on('change', function(){
        console.log( $(this).prop('checked') );
        if( $(this).prop('checked') ){
            $('#first_name').prop('disabled', false);
            // $('#last_name').prop('disabled', false);
            $('#email').prop('disabled', false);
            $('#phone').prop('disabled', false);
        }else{
            $('#first_name').val('');
            // $('#last_name').val('');
            $('#email').val('');
            $('#phone').val('');

            $('#first_name').prop('disabled', true);
            // $('#last_name').prop('disabled', true);
            $('#email').prop('disabled', true);
            $('#phone').prop('disabled', true);
        }
    });
    // TODO: Get salesforce url for post
    $('#publish-form').submit(function(event) {
        console.log("VALIDATING");
        // Form validation
        if( $('#00NU0000005PN7e').val() == ""
            || $('#city').val() == ""
            || $('#country').val() == ""
            || $('#state').val() == ""
            ){
            console.log("VALIDATION FAILED");
            return false;
        }

        // Prevent form submission
        // Publish game and set url as the return parameter for the form.
        // Submit the form from publish
        console.log("PUBLISHING");
        publish();
        event.preventDefault();
        return false;
    });
});

function revertMiniCourse() {
    loadMiniCourse(refreshPreview);
}

function publishPrompt(){
  $('#publishModal').foundation('reveal', 'open');
}

function publish(){
  console.log("PARENT PUBLISH");
  
  generatedHTML = null;
  MinicoursePublisher.generateHTML({
    baseURL: './mini/',
    baseLevel: maxLevel,
    js: editor_js.getValue(),
    formInfo: '<span id="first_name">'+ $('#first_name').val().charAt(0).toUpperCase() + $('#first_name').val().slice(1) +'</span> from <span id="city">'+$('#city').val()+'</span>'
              +'<span id="grade" style="display: none;">'+$('#grade').val()+'</span>'
              +'<span id="school" style="display: none;">'+$('#00NU0000005PN7e').val()+'</span>'
              +'<span id="state" style="display: none;">'+$('#state').val()+'</span>'
              +'<span id="country" style="display: none;">'+$('#country').val()+'</span>'
  }, function(err, html) {
    if (err) {
      alert("Error generating published HTML: " + err.message);
      return;
    }
    
    generatedHTML = html;
    console.log("GENERATED HTML");
    console.log(generatedHTML);

    if (!generatedHTML) {
      alert("There was an error publishing your game. Please try again later!");
      return;
    }
    
    // Begin publishing
    $("#published").hide();
    $("#publishing").fadeIn();

    var baseURL = window.location.hostname.indexOf('code.globaloria.com') > -1
                  ? 'http://globaloria.com:8000/'
                  : 'https://hackpub.herokuapp.com/buckets/globaloria/';

    $.ajax({
      type: 'POST',
      url: baseURL + 'publish',
      data: {
        'html': generatedHTML
      },
      crossDomain: true,
      dataType: 'json',
      error: function() {
        alert("Error publishing HTML!");
        console.log(arguments);
      },
      success: function(data) {
        $("#published").fadeIn()
          .find('a')
          .attr('href', data['published-url'])
          .text(data['published-url']);

        
        // Replace the form's return URL and submit the form
        $('#publish-form input#retUrl').val( data['published-url'] );
        
        // Populate game link for salesforce capture
        $('#00NU0000005PN7t').val(data['published-url']);

        // Populate the role field for salesforce
        var role = [];
        if( $('#isStudent').prop('checked') ) role.push( $('#isStudent').val() );
        if( $('#isTeacher').prop('checked') ) role.push( $('#isTeacher').val() );
        if( $('#isParent').prop('checked') ) role.push( $('#isParent').val() );
        if( $('#isAdministrator').prop('checked') ) role.push( $('#isAdministrator').val() );
                    
        $('#00NU0000005Ph2K').val( role.join(',') );

        //Unbind form to prevent submit loop
        $('#publish-form').unbind().submit();

      },
      complete: function() {
        $("#publishing").hide();
      }
    });
  });
}

function loadMiniCourse(cb){
    cb = cb || function() {}
    console.log("Loading mini course template");
    var zeroPaddedLevel = (currentLevel < 10) ? '0' + currentLevel : currentLevel;

    // Skip to sandbox
    if( window.sessionStorage['skipToSandbox'] == "true" ){
        zeroPaddedLevel = maxLevel;
    }

    $.get('mini/levels/' + zeroPaddedLevel + '.js', function(data) {
        var markHints = [];
        var readOnlyTokens = [];
        var readOnlyRanges = [];
        var foldedRanges = [];
        var currLineNumber = 0;
        var currIndentation = 0;
        var editorTooltips = [];
        var editorCommands = {
            markHint: function() {
                markHints.push(arguments);
            },
            readOnlyToken: function(){
                readOnlyTokens.push(arguments);
            },
            beginReadOnly: function() {
                readOnlyRanges.push([currLineNumber]);
            },
            endReadOnly: function() {
                var currRange = readOnlyRanges[readOnlyRanges.length - 1];
                currRange.push(currLineNumber);
            },
            beginCodeFold: function(linkText) {
                foldedRanges.push({
                    begin: currLineNumber,
                    indentation: currIndentation,
                    linkText: linkText || 'More\u2026'
                });
            },
            endCodeFold: function() {
                var currRange = foldedRanges[foldedRanges.length - 1];
                currRange.end = currLineNumber;
            },

            insertTooltip: function(){
                editorTooltips.push(arguments);
            }
        };

        console.log("Course retrieved: ");
        console.log(data);

        // Normalize whitespace if we're on windows.
        data = data.replace(/\r\n/g, '\n');

        // We want to make it less likely that the user accidentally
        // deletes the closing brace of a function definition or adds
        // code after it, so we'll move it way down to the bottom of
        // the file with plenty of white-space in between.
        data = data.replace(/}\n*$/, '\n\n\n\n\n\n\n\n\n\n}\n');

        data = data.split('\n').filter(function(line) {
            var match = line.match(/(\s*)\/\/\s*EDITOR:(.*)/);
            if (!match) {
                currLineNumber++;
                return true;
            }

            currIndentation = match[1];
            with (editorCommands) {
                console.log("Executing editor command: " + match[2]);
                eval(match[2]);
            }

            return false;
        }).join('\n');

        originalEditorContent = data;
        editor_js.setValue(data);

        // Make the first line read-only.
        readOnlyRanges.push([0, 1]);

        // Make the last two lines read-only.
        readOnlyRanges.push([editor_js.lineCount() - 2, 
                             editor_js.lineCount()]);

        readOnlyRanges.forEach(function(range) {
            editor_js.markText({line: range[0], ch: 0}, {
              line: range[1],
              ch: 0
            }, {
              className: 'js-read-only',
              readOnly: true
          });
        });

        readOnlyTokens.forEach(function(arguments) {
            readOnlyToken.apply(this, arguments);
        });

        markHints.forEach(function(arguments) {
            markHint.apply(this, arguments);
        });

        $("#js_editor").removeClass('show-js-hints');

        if (markHints.length) {
            $("#showHints").show();
        } else {
            $("#showHints").hide();
        }

        foldedRanges.forEach(function(range) {
            var start = {line: range.begin, ch: 0};
            var span = $('<span class="cm-comment">' + range.indentation +
                         '// </span>');
            $('<span class="js-code-fold-link"></span>')
              .text(range.linkText)
              .appendTo(span);
            editor_js.foldCode(start, {
                widget: span[0],
                rangeFinder: function(cm, pos) {
                    return {
                        from: start,
                        to: {
                            line: range.end - 1,
                            ch: editor_js.getLine(range.end - 1).length
                        }
                    };
                }
            });
        });

        editorTooltips.forEach(function(arguments){
            insertEditoTooltip.apply(this, arguments);
        });

        cb();
    });
}

function showHints() {
    $("#js_editor").addClass('show-js-hints');
    $("#showHints").fadeOut();
}

// function loadCurrentUserProject(){
//     loadMiniCourse();
// }

function nextLevel(){
    currentLevel == maxLevel ? maxLevel : currentLevel++;
    //Update iframe source
    // $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    // $instructions.find("h3").text(instructions["level"+currentLevel].title);
    // $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadMiniCourse();
}

function prevLevel(){
    currentLevel == 1 ? 1 : currentLevel--;
    
    //Update iframe source
    // $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    // $instructions.find("h3").text(instructions["level"+currentLevel].title);
    // $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadMiniCourse();
}