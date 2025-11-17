// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();           // here we hsve to end by ;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')