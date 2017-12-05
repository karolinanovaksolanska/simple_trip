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

    $("#page-title").click(function (event) {
        showMockup('index.html');
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

    $("#send-discussion-btn").click(function (event) {
        $("#prispevek1-odstavec").text($('textarea#text-discussion-itinerary').val());
        var d = new Date();
        var strDate = (d.getMonth()+1) + ". " + d.getDate() + ". "  + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        $("#datum").text(strDate);
        $("#prispevek1").toggleClass("invisible")

    });

    $("#btn-1").click(function (event) {
        showMockup('detailitinerary.html');
    });


    $("#btn-plan-1").click(function (event) {
        showMockup('detailitinerary.html');
    });

    $("#btn-plan-2").click(function (event) {
        showMockup('detalakce.html');
    });


    $("#slide1").click(function (event) {
        showMockup('detailitinerary.html');
    });

    $("#slide2").click(function (event) {
        showMockup('detailitinerary.html');
    });

    $("#btn-1a").click(function (event) {
        showMockup('detalakce.html');
    });

    $("#slide3").click(function (event) {
        showMockup('detalakce.html');
    });

    $("#slide4").click(function (event) {
        showMockup('detalakce.html');
    });

    $("#btnr-1").click(function (event) {
        showMockup('detalakce.html');
    });
    $("#btnr-3").click(function (event) {
        showMockup('detalakce.html');
    });
    $("#btnr-2").click(function (event) {
        showMockup('detalakce.html');
    });

    $("#btn-2").click(function (event) {
        showMockup('detailitinerary.html');
    });

    $("#btn-2a").click(function (event) {
       $("#btn-2a").toggleClass("invisible");
       $("#btn-3a").toggleClass("invisible");
    });

    $("#btn-3a").click(function (event) {
       $("#btn-2a").toggleClass("invisible");
        $("#btn-3a").toggleClass("invisible");
    });

    $("#btn-5a").click(function (event) {
       $("#btn-5a").toggleClass("invisible");
       $("#btn-6a").toggleClass("invisible");
    });

    $("#btn-6a").click(function (event) {
       $("#btn-5a").toggleClass("invisible");
        $("#btn-6a").toggleClass("invisible");
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

    $('.my_select_box').on('change', function(evt, params) {
        $("#vez").toggleClass("invisible");
    });

    $("#sign-in-button2").click(function (event) {
        loggedIn = true;
        localStorage.setItem("loggedIn", loggedIn);
        logIn();
        showMockup('my_trips.html')
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

    $("#zrusit-platbu").click(function (event) {
        $("#zrusena-platba").toggleClass("invisible");
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
            $("#main-image-akce").attr("src", "images/staromestska-radnice.jpg");
            $("#image1_detail").attr("src", "images/staromestska-radnice-2.jpg");
            $("#image2_detail").attr("src", "images/staromestska-radnice-3.jpg");
            $("#image3_detail").attr("src", "images/staromestska_radnice_vanoce.jpg");
        }
        else if (where === "morava") {
            $("#akce-title").text("Vyhlídka na severní moravě");
        }
        else if (where === "krumlov") {
            $("#akce-title").text("Drákula premiéra");
            $("#main-image-akce").attr("src", "images/krumlov.jpg");
            $("#date-time").text("21.6. 2017 - 20:00");
            $("#adresa-akce").text("Zámmek Krumlov, Český Krumlov");
            $("#web-akce").attr("href","");
            $("#web-akce").text("http://www.krumlov.cz/");
        }
        else if (where === "zvirata-praha") {
            $("#akce-title").text("V Praze za zvířátky");
        }
        else if (where === "petnik"){
            $("#akce-title").text("Restaurace u pětníka");
            $("#main-image-akce").attr("src", "images/petnik.jpg");
            $("#date-time").text("Každý den 10:00 - 24:00");
            $("#adresa-akce").text("U pětníka, Hezká ulice, Praha 1");
            $("#web-akce").attr("href","http://www.drest.cz/u-petnika/");
            $("#web-akce").text("http://www.drest.cz/u-petnika/");
        }
    })

}

function itineraryDetail(whe) {
    whereItinerary = whe;
    localStorage.setItem("whereItinerary", whereItinerary);
    $(document).ready(function () {
        if (whereItinerary === "praha") {
            $("#itinerary-title").text("Den ve staré Praze");
            $("#main_image_detail").attr("src", "images/staromestska-radnice.jpg");
            $("#date-time-it").text("Každý den, kromě pondělí 8:30 - 17:00");
            $("#image1_detail").attr("src", "images/staromestska-radnice-2.jpg");
            $("#image2_detail").attr("src", "images/staromestska-radnice-3.jpg");
            $("#image3_detail").attr("src", "images/staromestska_radnice_vanoce.jpg");
        }
        else if (whereItinerary === "morava") {
            $("#akce-title").text("Staroměstská radnice");
        }
        else if (whereItinerary === "krumlov") {
            $("#akce-title").text("Staroměstská radnice");
        }
        else if (whereItinerary === "zvirata-praha") {
            $("#itinerary-title").text("V Praze za zvířátky");
            $("#akce1").text("9:00 - 13:00 Pražská zoo");
            $("#akce2").text("13:00 - 13:30 Přesun metrem na Žižkov");
            $("#akce3").text("13:30 - 14:30 Oběd v kočičí kavárně");
            $("#akce4").text("14:30 - 15:00 Přesun metrem do Hloubětína");
            $("#akce5").text("15:00 - 16:00 Mazlení s papoušky, fotografování");
            $("#itinerary-main-image").attr("src", "images/zvirata.jpg")
        }
    })


}


function logIn() {
    if (loggedIn == true || loggedIn == "true") {
        $("#sign-in-form").toggleClass("invisible");
        $("#sign-out-form").toggleClass("invisible");
        $("#menui2").toggleClass("invisible");
        $("#menui3").toggleClass("invisible");
        $("#menui4").toggleClass("invisible");
        $("#menui5").toggleClass("invisible");
        $("#recommended").toggleClass("invisible");
    }
}

function logOut() {
    if (loggedIn == false || loggedIn == "false") {
        $("#sign-in-form").toggleClass("invisible");
        $("#sign-out-form").toggleClass("invisible");
        $("#menui2").toggleClass("invisible");
        $("#menui3").toggleClass("invisible");
        $("#menui4").toggleClass("invisible");
        $("#menui5").toggleClass("invisible");
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

function plan() {
    showMockup('detailitinerary.html');
}

function toMyTrips() {
    if (loggedIn == "true") {
        showMockup('planned_trips.html');
    }
    else {
        $("#modal_window_saved").toggleClass("invisible");
    }
}

function toPay() {
    showMockup('payments.html');
}

function deleteLine(lineId) {
    $(lineId).toggleClass("invisible");
}

function moveUp(lineId, futureId) {
    var future = $(futureId + "-text").text();
    $(futureId + "-text").text($(lineId + "-text").text());
    $(lineId + "-text").text(future);
}

function moveDown(lineId, futureId) {
    var future = $(futureId + "-text").text();
    $(futureId + "-text").text($(lineId + "-text").text());
    $(lineId + "-text").text(future);
}

function showInfo(id) {
    $(id+"-info").toggleClass("invisible");
}

function showModalSaved() {
    $("#modal_window_saved").toggleClass("invisible");
}

function showVez() {
    $("#vez").toggleClass("invisible");
}

function save3() {
    $("#setting3-saved").toggleClass("invisible", 5000);
    window.setTimeout(function() {
        $("#setting3-saved").toggleClass('invisible');
    }, 5000);
}

function save1() {
    $("#setting1-saved").toggleClass("invisible", 5000);
    window.setTimeout(function() {
        $("#setting1-saved").toggleClass('invisible');
    }, 5000);
}

function save2() {
    $("#setting2-saved").toggleClass("invisible", 5000);
    window.setTimeout(function() {
        $("#setting2-saved").toggleClass('invisible');
    }, 5000);
}