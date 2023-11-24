 //Examples of element selector
 $(document).ready(function () {
    console.log("i am in a new file now")
    console.log("We are using jquery")
    //$('selector').action()
    // $('h1').click();
    $('h1').click(function () {
        console.log("you clicked me", this);
        $('#first').hide();
    })







// Mouse Events = click, dbclick, mouseselector, mouseleave
// KeyboardEvent = keypress , keydown , MediaKeyStatusMap
// form events = submit , change, focus, blur
// document/window events = load, resize, scrool, unload





});



// there are three main type of selctor in jquery
//1.ID selector
$('#first').click();
//2.Class selector
$('.second').click();
//3.Element selector  
$('h1').click(); 
