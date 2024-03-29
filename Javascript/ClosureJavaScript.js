// Closures are functions that have access to variables in their outer scope,
// even after the outer function has returned. 
//This is because the inner function maintains a reference to its outer lexical environment. For example:

function greet()
{
    let count =0 ;
    function inner(){
        count++;
        console.log(count);
    }

    return count;
    
}
