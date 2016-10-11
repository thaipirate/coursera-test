(function(global) {

    // Set up a namespace for our utility
    var ajaxUtils = {};
    // Returns an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else {
            global.alert("Ajax is not supported!");
            return (null);
        }
    }


    // Makes an Ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse) {
        var request = getRequestObject();
        request.onreadystatechange = function() {
            handleResponse(request, responseHandler, isJsonResponse);
        };

// console.log ("URL" + requestUrl)
// console.log ("responseHandler    "  + responseHandler)
// // console.log ("json" + isJsonResponse)

        request.open("GET", requestUrl, true);
        request.send(null); // for POST only
    };


    // Only calls user provided 'responseHandler' function if response is ready and not an error
    function handleResponse(request, responseHandler, isJsonResponse) {
        // console.log (request.readyState);
        // console.log (request.status);
        if ((request.readyState == 4) && (request.status == 200)) {
// console.log (isJsonResponse)
            // Default to isJsonResponse = true
            if (isJsonResponse == undefined) {
                isJsonResponse = true;

            }
            // console.log(request.responseText)

            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText));
                // console.log ("is it")
                // $ajaxUtils.success = JSON.parse(request.responseText);
                // $ajaxUtils.Responder($ajaxUtils.success);
            } else {
                responseHandler(request.responseText);
                // console.log("else")
            }
        }
    }


    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;


})(window);

