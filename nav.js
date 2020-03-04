//get the button
let backButton = document.getElementsByClassName("back")[0];

function back(){
    window.history.back();
}

backButton.addEventListener("click", function(){
    back();
});