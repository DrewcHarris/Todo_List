//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on("click", "span", function(event) {
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    });

//Listener for the input box
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        //Grabbing new todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-o'aria-hidden='true'></i></span>" + todoText + "</li>")
        //clear out the input after hitting enter
        $(this).val("");
    }
});

//Listener on the plus icon
$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
});
