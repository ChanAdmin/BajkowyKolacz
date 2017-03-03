document.addEventListener('DOMContentLoaded', function () {

    var parameters = []

    function hide(add, param) {
        if (add) {
            parameters.push(param);
        }
        else {
            parameters.splice(parameters.indexOf(param), 1);
        }

        for (var art of document.querySelectorAll("article")) {
            art.classList.remove("hidden");
            for(var parameter of parameters)
            {
                if (art.classList.contains(parameter)) {
                    art.classList.add("hidden");
                }
            }
        }
    }

    for (var input of document.querySelectorAll("aside input"))
    {
        input.addEventListener("change", function (event) {
            if (this.checked) {
                hide(false, this.getAttribute("name"));
            } else {
                hide(true, this.getAttribute("name"));
            }
        });
    }

});
