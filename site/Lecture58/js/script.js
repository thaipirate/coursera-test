var boom = {};
boom.firstName = "Alex";
boom.lastName = "HG"
boom.likesChineseFood = false
boom.numberOfDisplays = 2
// console.log(boom)
    // Event handling
document.addEventListener("DOMContentLoaded", function(global) {
        // Unobtrusive event binding
        document.querySelector("button").addEventListener("click", function whoopie() {
            // Call server to get the name
            $ajaxUtils.sendGetRequest("data/name.json", function blank(response){$ajaxUtils.Responder(response)});
        });
    }
);
document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("hello")
    document.getElementById('kaboomer').addEventListener("click", function muck() {
        $ajaxUtils.Responder(boom);
    });
});
$ajaxUtils.Responder = function TheResponder(responses) {
    var message = responses.firstName + " " + responses.lastName;
    if (responses.likesChineseFood) {
        message += " likes Chinese food";
    } else {
        message += " doesn't like Chinese food";
    };
    message += " and uses ";
    message += responses.numberOfDisplays + 1;
    message += " displays for coding.";
    document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
};