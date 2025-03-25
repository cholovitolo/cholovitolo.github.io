$(document).ready(function () {
    $("#visaForm").submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        let passport = $("#passport").val().trim();
        let destination = $("#destination").val().trim();

        if (!passport || !destination) {
            $("#visaResult").html("<strong>Please enter both fields.</strong>").fadeIn();
            return;
        }

        // Show loading animation
        $("#visaResult").html('<div class="loader"></div>').fadeIn();

        const apiUrl = "https://visa-requirement.p.rapidapi.com/";

        $.ajax({
            url: apiUrl,
            method: "POST",
            contentType: "application/x-www-form-urlencoded",
            headers: {
                "x-rapidapi-key": "41cf51fa42mshc9f719e4656631ap1fa307jsnd99b2e3656ec",
                "x-rapidapi-host": "visa-requirement.p.rapidapi.com"
            },
            data: { passport: passport, destination: destination },
            success: function (response) {
                if (!response.error) {
                    $("#visaResult").html(`
                        <strong>Passport of:</strong> ${response.passport_of}<br>
                        <strong>Destination:</strong> ${response.destination}<br>
                        <strong>Visa Type:</strong> ${response.visa}<br>
                        <strong>Stay Duration:</strong> ${response.stay_of}<br>
                        <strong>More Info:</strong> <a href="${response.link}" target="_blank">Click Here</a>
                    `).fadeIn();
                } else {
                    $("#visaResult").html(`<strong>Error:</strong> ${response.error}`).fadeIn();
                }
            },
            error: function () {
                $("#visaResult").html("<strong>Failed to fetch data. Try again later.</strong>").fadeIn();
            }
        });
    });
});
