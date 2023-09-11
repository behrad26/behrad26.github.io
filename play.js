function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function start() {
    var endTime, msLeft, time, func, randomNumber;
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    let currentIndex = numbers.length,  randomIndex;
    let objects = [
        document.querySelector("#opt1"),
        document.querySelector("#opt2"),
        document.querySelector("#opt3"),
        document.querySelector("#opt4"),
        document.querySelector("#opt5"),
        document.querySelector("#opt6"),
        document.querySelector("#opt7"),
        document.querySelector("#opt8"),
        document.querySelector("#opt9"),
        document.querySelector("#opt10"),
        document.querySelector("#opt11"),
        document.querySelector("#opt12"),
        document.querySelector("#opt13"),
        document.querySelector("#opt14"),
        document.querySelector("#opt15"),
        document.querySelector("#opt16"),
        document.querySelector("#opt17"),
        document.querySelector("#opt18"),
    ]


    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [numbers[currentIndex], numbers[randomIndex]] = [numbers[randomIndex], numbers[currentIndex]];
    }

    for (let i = 0; i < 18; i++) {
        objects[i].innerHTML = numbers[i];
    }

    function twoDigits(n)
    {
        return (n <= 9 ? "0" + n : n);
    }
    function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
            if (func == "hide") {
                hide();
            }
            else {
                getAnswer();
            }
        }
        else {
            time = new Date(msLeft);
            document.querySelector("#timer").innerHTML = twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }
    document.querySelector("h4").innerHTML = "Memorize the numbers...";
    document.querySelector("#start").remove();

    function check(event) {
        event.preventDefault();
        if (Number(document.querySelector("input").value) == randomNumber) {
            document.querySelector("h4").innerHTML = "Correct!";
            document.querySelector("h4").style.color = "green";
            document.querySelector("h5").innerHTML = "You won! Refresh the page to start again or go to <a href=\"index.html\">home page</a>.";
        }
        else {
            document.querySelector("h4").innerHTML = "Incorrect.";
            document.querySelector("h4").style.color = "red";
            document.querySelector("h5").innerHTML = "You lose. Refresh the page to start again or go to <a href=\"index.html\">home page</a>.";
        }
        document.querySelector("#inp").remove()
        document.querySelector("#submit-button").remove()
    }

    function hide() {
        document.querySelector("h4").innerHTML = "Wait for the timer to finish, then enter the answer. Refresh to start again.";
        for (let i = 0; i < 18; i++) {
            objects[i].innerHTML = "-";
        }
        endTime = (+new Date) + 1000 * (5) + 500;
        func = "getAnswer";
        updateTimer();
    }

    function getAnswer() {
        document.querySelector("h4").innerHTML = "Enter the answer. Refresh to start again.";
        randomNumber = Math.floor(Math.random()*18);
        for (let i = 0; i < 18; i++) {
            if (i == randomNumber){
                objects[i].innerHTML = "X";
            }
            else
            {
                objects[i].innerHTML = "O";
            }
        }
        randomNumber = numbers[randomNumber];
        document.querySelector("#timer").remove();
        document.querySelector("#form-container").appendChild(document.createElement("form"));
        document.querySelector("form").appendChild(document.createElement("input"));
        document.querySelector("form").appendChild(document.createElement("button"));
        document.querySelector("form").addEventListener("submit", check);
        document.querySelector("form input").setAttribute("id", "inp");
        document.querySelector("#inp").setAttribute("autocomplete", "off");
        document.querySelector("#inp").setAttribute("placeholder", "Answer...");
        document.querySelector("#inp").setAttribute("autofocus", "");
        document.querySelector("form button").setAttribute("id", "submit-button");
        document.querySelector("#submit-button").innerHTML = "Check";
    }

    endTime = (+new Date) + 1000 * (10) + 500;
    func = "hide";
    updateTimer();

}
