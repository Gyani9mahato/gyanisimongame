$(document).ready(function() {
    var uservalue = [];
    var cpuvalue = [];
    var statrt = "keypress";
    var rndvalue = [];

    // Define gm function outside of uservaluef
    function gm(event) {
        $(event.target).addClass("click_style");
        setTimeout(function() {
            $(event.target).removeClass("click_style");
        }, 500);
        var atr = $(event.target).attr("class");
        atr = atr.slice(4, 7);
        music(atr);
        uservalue.push(atr);
        cheeck();
        console.log("user" + uservalue);
    }

    // User Pattern
    function uservaluef() {
        $(".sub").on("click", gm);
    }

    document.addEventListener("keypress", function(event) {
        if (statrt === event.type) {
            uservalue = [];
            cpuvaluef();
        }
    });

    // Generate Random Pattern
    function cpuvaluef() {
        statrt = "abc";
        var randomn = rdmng();
        rndvalue.push(randomn);
        for (let i = 0; i < rndvalue.length; i++) {
            setTimeout(function() {
                switch (rndvalue[i]) {
                    case 1:
                        music("gre");
                        cpuvalue.push("gre");
                        style(".green");
                        break;
                    case 2:
                        music("red");
                        cpuvalue.push("red");
                        style(".red");
                        break;
                    case 3:
                        music("yel");
                        cpuvalue.push("yel");
                        style(".yellow");
                        break;
                    case 4:
                        music("blu");
                        cpuvalue.push("blu");
                        style(".blue");
                        break;
                }
            }, 1000 * i);
        }
        setTimeout(uservaluef, 1000 * rndvalue.length); // Call uservaluef after the CPU pattern is shown
    }

    // Condition Check
    function cheeck() {
        if (cpuvalue.length == uservalue.length) {
            if (JSON.stringify(cpuvalue) === JSON.stringify(uservalue)) {
                cpuvalue = [];
                uservalue = [];
                setTimeout(cpuvaluef, 1000);
                $(".sub").off("click", gm);
            } else {
                cpuvalue = [];
                uservalue = [];
                statrt = "keypress";
                rndvalue = [];
                music("wro");
                setTimeout(function() {
                    alert("wrong press any key to start again");
                }, 500);
                $(".sub").off("click", gm);
            }
        }
    }

    // Play Music
    function music(prms) {
        var audio = new Audio("./sounds/" + prms + ".mp3");
        audio.play();
    }

    // Generate Random Number
    function rdmng() {
        return Math.floor(Math.random() * 4) + 1;
    }

    // Apply Style
    function style(prms) {
        $(prms).addClass("click_style");
        setTimeout(function() {
            $(prms).removeClass("click_style");
        }, 500);
    }
});
