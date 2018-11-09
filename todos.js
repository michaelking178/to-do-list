// Check off specific To-Dos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete To-Do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // Grabbing new ToDo text from input
        let toDoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span>" + toDoText + "</li>");
    }
});

$(".menu").on("click", function(){
    $("input[type='text']").fadeToggle();
    $(".fa-plus").toggleClass("hide");
    $(".fa-minus").toggleClass("hide");
});