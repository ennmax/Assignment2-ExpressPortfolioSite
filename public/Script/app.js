// IIFE
// Immediately Invoked Function Expression
// From Lecture 7

(function() {
    function start() {
        // Below message appears in the browser's console when page finishes loading
        console.log("App started")
    }
    
    // Register start function so it runs after all page assets have loaded
    window.addEventListener("load", start);
})();