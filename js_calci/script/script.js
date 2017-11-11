var exprArry = [];

function handleInput(event) {
    var x = event.target.innerText;
    if ($.isNumeric(x)) {
        var lastelement = exprArry.pop();
        if ($.isNumeric(lastelement)) {
            x = parseInt(lastelement) * 10 + parseInt(x);
        } else {
            exprArry.push(lastelement);
        }
        exprArry.push(x);

    } else {
        if (x == "C") {
            exprArry = [];

        } else if (x == "=") {
            try {
                var result = eval(exprArry.join(""));
                exprArry = [];
                exprArry.push(result);
            } catch (err) {
                alert("Invalid input")
            }


        } else {
            var lastelement = exprArry.pop();
            if ($.isNumeric(lastelement)) {
                exprArry.push(lastelement);
            }

            exprArry.push(x);


        }
    }
    document.getElementById("display").value = exprArry.join("");
}