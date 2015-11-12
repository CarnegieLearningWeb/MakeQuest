var maxLevel = window.sessionStorage['maxLevel'] = 16;

$(document).ready(function() {
    //Resize to viewport
    $("main").css("height", window.innerHeight-36);

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

    //Verify if user is currently logged in
    var currentUser = myFirebaseRef.getAuth();
    if( currentUser ){
        var userRef = new Firebase('https://mini-course.firebaseio.com/users/'+currentUser.uid);
        
        userRef.once('value', function(snapshot) {
            var user = snapshot.val();
            console.log(user.name);
            $('nav .account-action').html('<li>Hi, ' + user.name + '</li><li><a href="#" id="logout">Logout</a></li>');
        });        
    }

    loadCurrentUserProject();
    //Set iframe to right level
    $('iframe#preview').attr('src', 'mini/index.html').focus();
});

function revertMiniCourse() {
    loadMiniCourse(refreshPreview);
}

function publish(){
  console.log("PARENT PUBLISH");
  
  generatedHTML = null;
  MinicoursePublisher.generateHTML({
    baseURL: './mini/',
    baseLevel: maxLevel,
    js: editor_js.getValue()
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

    alert("Still need to implement publish functionality");
    return; //DEBUG ONLY

    // Begin publishing
    $("#publishing").fadeIn();

      $.ajax({
        type: 'POST',
        url: "https://hackpub.herokuapp.com/buckets/globaloria/publish",
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
        zeroPaddedLevel = window.sessionStorage['maxLevel'];
    }

    $.get('mini/levels/' + zeroPaddedLevel + '.js?cacheBust=' + Date.now(), function(data) {
        var markHints = [];
        var readOnlyTokens = [];
        var readOnlyRanges = [];
        var foldedRanges = [];
        var currLineNumber = 0;
        var currIndentation = 0;
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

        cb();
    });
}

function showHints() {
    $("#js_editor").addClass('show-js-hints');
    $("#showHints").fadeOut();
}

function loadCurrentUserProject(){
    
    currentUser = myFirebaseRef.getAuth();
    console.log("Load current project for ");
    console.log(currentUser);

    if(currentUser && currentUser.uid){
        var projectRef = new Firebase('https://mini-course.firebaseio.com/projects/'+currentUser.uid+'/level'+currentLevel);

        projectRef.once('value', function(snapshot) {
            project = snapshot.val();
            console.log("Users project");
            console.log(project);

            //Set html
            if(project){
                // if( project.hasOwnProperty("html") ){
                //     console.log("Setting html to");
                //     console.log(project.html);
                //     editor_html.setValue(project.html);        
                // }
                // if( project.hasOwnProperty("css") ){
                //     console.log("Setting css to");
                //     console.log(project.css);
                //     editor_css.setValue(project.css);        
                // }
                if( project.hasOwnProperty("js") ){
                    console.log("Setting js to");
                    console.log(project.js);
                    editor_js.setValue(project.js);        
                }
            }else{
                loadMiniCourse();
            }
        });
    }else{
        loadMiniCourse();
        console.log("No user signed in");
    }
}

function authHandler(error, authData) {
    if (error) {
        console.log("Login Failed!", error);
    } else {
        console.log("Authenticated successfully with payload:", authData);
        currentUser = authData;
        
    }
}

function saveProject(){
    var currentUser = myFirebaseRef.getAuth();
    if (currentUser) {
        var currentLevelStr = "level"+currentLevel;

        var payload = {
                "html": editor_html.getValue(),
                "css": editor_css.getValue(),
                "js": editor_js.getValue()
            }; 
        myFirebaseRef.child("projects").child(currentUser.uid).child(currentLevelStr).set(payload, function(){alert("Save successful")});
    } else {
        alert("Please sign in to save your work");
    }
}

function nextLevel(){
    currentLevel == maxLevel ? maxLevel : currentLevel++;
    //Update iframe source
    // $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    // $instructions.find("h3").text(instructions["level"+currentLevel].title);
    // $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadCurrentUserProject();
}

function prevLevel(){
    currentLevel == 1 ? 1 : currentLevel--;
    
    //Update iframe source
    // $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    // $instructions.find("h3").text(instructions["level"+currentLevel].title);
    // $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadCurrentUserProject();
}
