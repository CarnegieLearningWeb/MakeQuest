var instructions = {
    level1: {
        title: "Level 1",
        content: "Somebody messed up the code and the platforms are not properly aligned. \nChange the numbers so you can reach the goal"
    },
    level2: {
        title: "Level 2",
        content: "Repeat last exercise.\n //Black platforms are fragile places to try and stand on. Change the color on the platforms to help the hero."
    }
}
$(document).ready(function() {
    currentLevel = 1;
    maxLevel = 2;
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
    $('iframe#preview').attr('src', 'mini/index.html');
    $instructions.find("h3").text(instructions["level"+currentLevel].title);
    $instructions.find("p").text(instructions["level"+currentLevel].content);
});

function loadMiniCourse(){
    console.log("Loading mini course template");

    var courseRef = new Firebase('https://mini-course.firebaseio.com/mini-course/level'+currentLevel);
    courseRef.once('value', function(snapshot) {
        var course = snapshot.val();
        console.log("Course retrieved: ");
        console.log(course);
        //Set html
        if(course){
            if( course.hasOwnProperty("html") ){
                editor_html.setValue(course.html);        
            }
            if( course.hasOwnProperty("css") ){
                editor_css.setValue(course.css);        
            }
            if( course.hasOwnProperty("js") ){
                editor_js.setValue(course.js);        
            }
            
        }
    });
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
                if( project.hasOwnProperty("html") ){
                    console.log("Setting html to");
                    console.log(project.html);
                    editor_html.setValue(project.html);        
                }
                if( project.hasOwnProperty("css") ){
                    console.log("Setting css to");
                    console.log(project.css);
                    editor_css.setValue(project.css);        
                }
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
        // myFirebaseRef.child("projects").child(currentUser.uid).set({
        //     currentLevelStr: {
        //         "html": editor_html.getValue(),
        //         "css": editor_css.getValue(),
        //         "js": editor_js.getValue()
        //     }
        // }, function(){alert("Save successful")});
    } else {
        alert("Please sign in to save your work");
    }
}

function nextLevel(){
    currentLevel == maxLevel ? maxLevel : currentLevel++;
    //Update iframe source
    $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    $instructions.find("h3").text(instructions["level"+currentLevel].title);
    $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadCurrentUserProject();
}

function prevLevel(){
    currentLevel == 1 ? 1 : currentLevel--;
    
    //Update iframe source
    $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    $instructions.find("h3").text(instructions["level"+currentLevel].title);
    $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadCurrentUserProject();
}
