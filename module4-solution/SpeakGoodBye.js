(function (window) {
    // STEP 7
    var byeSpeaker = {};
    
    var speakWord = "Good Bye";
    
    // STEP 8
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    }
    
    // STEP 9
    window.byeSpeaker = byeSpeaker;
    
    })(window);