function showMockup(url, params) {
    var finalUrl = url + "?";
    if (params != null) {
        jQuery.each(params, function (par, field) {
            finalUrl += par + "=" + $("#" + field).val() + "&";
        });
    }
    location.href = finalUrl;
}
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
        showMockup('Detailakce.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#inner-page0").click(function (event) {
        showMockup('Detailakce.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#inner-page2").click(function (event) {
        showMockup('Detailakce.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#btn-1").click(function (event) {
        showMockup('Detailakce.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#btn-2").click(function (event) {
        showMockup('Detailakce.html');
        event.stopPropagation();
        event.preventDefault();

    });

    $("#btn-3").click(function (event) {
        showMockup('Detailakce.html');
        event.stopPropagation();
        event.preventDefault();

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
