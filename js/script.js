// Get user input and set it to an li that has a small x button for removal
//Take li and append it to ul (list)
//Make sure input field is blank
//Refer to zillow script for functions help

//when add-button is clicked, run function
$(".add-btn").on("click", function (evt) {
    //set input value entered to var newInput
    const addSkill = $("input").val();
    //if there is newInput
    if (addSkill) {
        //add new input and an 'x' btn to an li in the unordered list 
        const list = `<li class="skill-li"><button class="x-btn">x</button>${addSkill}</li>`
        $("#list").append(list);
        //set the input field to empty string
        $("input").val("");
    }
});


//function that deletes closest li when button is clicked (jim showed on zillow script)
$("#list").on("click", "button", function (evt) {
    $(this).closest(".skill-li").fadeOut(500, function () {
        $(this).remove();
    });
});