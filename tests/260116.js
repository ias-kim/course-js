
// outer Function 
function Bar() {

    let test = 1;
    // inner function
    function Foo() {
        print(test);
    }
    // closure = inner function + reference a variable of outer function
    // Capturing = 
    return Foo();
}