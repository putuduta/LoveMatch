function myFunction() {
    var name = document.forms["myForm"]["fname"].value;
    var name2 = document.forms["myForm"]["lname"].value;
    if (name === "" || name2 === "") {
        document.getElementById("demo").innerHTML = "please fill the form";
        document.getElementById("demo2").innerHTML = "";
    } else {
        var random = Math.floor(Math.random() * 100 + 1);
        if (random > 80) {
            document.getElementById("demo").innerHTML = random + "%";
            document.getElementById("demo2").innerHTML = "You are perfect";
        } else if (random < 80 && random > 40) {
            document.getElementById("demo").innerHTML = random + "%";
            document.getElementById("demo2").innerHTML = "You are great couple";
        } else {
            document.getElementById("demo").innerHTML = random + "%";
            document.getElementById("demo2").innerHTML = "I think its bad";
        }

    }
}
