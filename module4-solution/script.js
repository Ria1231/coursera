  
(function (window) {
// STEP 1
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    // STEP 10
    for (var i in names) {
         // STEP 11
         var firstLetter = ((names[i]).charAt(0)).toLowerCase();
          // STEP 12
         if (firstLetter == 'j') {
            window.byeSpeaker.speak(names[i]);
         } else {
            window.helloSpeaker.speak(names[i]);
         }
        }
    })(window);