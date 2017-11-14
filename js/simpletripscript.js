function showMockup(url, params) {
    var finalUrl = url + "?";
    if (params != null) {
        jQuery.each(params, function (par, field) {
            finalUrl += par + "=" + $("#" + field).val() + "&";
        });
    }
    location.href = finalUrl;
}

var loggedIn = localStorage.getItem("loggedIn");
if (!loggedIn){
    loggedIn = false;
}

var where = localStorage.getItem("where");
if (!where){
    where = "praha";
}

var whereItinerary = localStorage.getItem("whereItinerary");
if (!whereItinerary){
    whereItinerary = "praha";
}
var wentRight = false;

$(document).ready(function () {
    $("#menui0").click(function (event) {
        showMockup('index.html');
        event.stopPropagation();
        event.preventDefault();
    });
    $("#menui1").click(function (event) {
        showMockup('planner.html');
        event.stopPropagation();
        event.preventDefault();
    });

    $("#menui2").click(function (event) {
        showMockup('registration.html');
        event.stopPropagation();
        event.preventDefault();
    });


    $("#page-title").click(function (event) {

        event.stopPropagation();
        event.preventDefault();

    });

    $("#img-landing-page").click(function (event) {
        showMockup('detalakce.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#inner-page0").click(function (event) {
        showMockup('detalakce.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#inner-page2").click(function (event) {
        showMockup('detalakce.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#btn-1").click(function (event) {
        showMockup('detailitinerary.html');
    });

    $("#btn-2").click(function (event) {
        showMockup('detailitinerary.html');
    });

    $("#btn-3").click(function (event) {
        showMockup('detalakce.html');
    });
    $("#btn-4").click(function (event) {
        showMockup('detalakce.html');
    });

    $("#passwd-field").click(function (event) {
        event.stopPropagation();
        event.preventDefault();
    });

    $("#nap42").click(function (event) {
        showMockup('Hlavnístránka.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#email-label").click(function (event) {

        event.stopPropagation();
        event.preventDefault();

    });

    $("#passwd-label").click(function (event) {

        event.stopPropagation();
        event.preventDefault();

    });

    $("#email-field").click(function (event) {
        event.stopPropagation();
        event.preventDefault();
    });

    $("#help").click(function (event) {
        showMockup('help.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#contact").click(function (event) {
        showMockup('contact.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#sign-in-button").click(function (event) {
        loggedIn = true;
        localStorage.setItem("loggedIn", loggedIn);
        logIn();
    })

    $("#sign-out-button").click(function (event) {
        loggedIn = false;
        localStorage.setItem("loggedIn", loggedIn);
        logOut();
    })

    $("#arrow-icon2").click(function (event) {
        $("#slide1").toggleClass("invisible");
        $("#slide4").toggleClass("invisible");
    })

    $("#arrow-icon1").click(function (event) {
        $("#slide1").toggleClass("invisible");
        $("#slide4").toggleClass("invisible");
    })

    $("#arrow-icon3").click(function (event) {
        $("#slider1").toggleClass("invisible");
        $("#slider4").toggleClass("invisible");
    })

    $("#arrow-icon4").click(function (event) {
        $("#slider1").toggleClass("invisible");
        $("#slider4").toggleClass("invisible");
    })

    itineraryDetail(whereItinerary);
    dataDetail(where);
   logIn();

});

function dataDetail(whe) {
    where = whe;
    localStorage.setItem("where", where);
    $(document).ready(function () {
        if (where === "praha") {
            $("#akce-title").text("Staroměstská radnice");
            $("#main_image_detail").attr("src", "images/staromestska-radnice.jpg");
            $("#image1_detail").attr("src", "images/staromestska-radnice-2.jpg");
            $("#image2_detail").attr("src", "images/staromestska-radnice-3.jpg");
            $("#image3_detail").attr("src", "images/staromestska_radnice_vanoce.jpg");
        }
        else if (where === "morava") {
            $("#akce-title").text("Staroměstská radnice");
        }
        else if (where === "krumlov") {
            $("#akce-title").text("Staroměstská radnice");
        }
        else if (where === "zvirata-praha") {
            $("#akce-title").text("V Praze za zvířátky");
        }
    })

}

function itineraryDetail(whe) {
    whereItinerary = whe;
    localStorage.setItem("whereItinerary", whereItinerary);
    $(document).ready(function () {
        if (where === "praha") {
            $("#akce-title").text("Staroměstská radnice");
            $("#main_image_detail").attr("src", "images/staromestska-radnice.jpg");
            $("#image1_detail").attr("src", "images/staromestska-radnice-2.jpg");
            $("#image2_detail").attr("src", "images/staromestska-radnice-3.jpg");
            $("#image3_detail").attr("src", "images/staromestska_radnice_vanoce.jpg");
        }
        else if (where === "morava") {
            $("#akce-title").text("Staroměstská radnice");
        }
        else if (where === "krumlov") {
            $("#akce-title").text("Staroměstská radnice");
        }
        else if (where === "zvirata-praha") {
            $("#akce-title").text("V Praze za zvířátky");
        }
    })

}


function logIn() {
    if (loggedIn == true || loggedIn == "true") {
        $("#sign-in-form").toggleClass("invisible");
        $("#sign-out-form").toggleClass("invisible");
        $("#menui2").toggleClass("invisible");
        $("#recommended").toggleClass("invisible");
    }
}

function logOut() {
    if (loggedIn == false || loggedIn == "false") {
        $("#sign-in-form").toggleClass("invisible");
        $("#sign-out-form").toggleClass("invisible");
        $("#menui2").toggleClass("invisible");
        $("#recommended").toggleClass("invisible");
    }
}

function dropDownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function refresh() {
    location.reload();
}