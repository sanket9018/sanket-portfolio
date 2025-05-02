$("#save_feedback").on('click', async function () {
    $("#save_feedback").attr('disabled', true);
    const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];

    var user_mail = $("#email").val();
    var user_feedback = $.trim($("#feedback").val());

    data = {
        "email": user_mail,
        "feedback": user_feedback
    }

    // Show the loading spinner
    $("#loader").show();
    $("#save_feedback").attr("disabled", true); // Disable the button while waiting for the response

    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/User-Feedback/",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "X-CSRFToken": csrfToken
        },
        success: function (response) {
            console.log("Success:", response);
            if (response.status == 200) {
                var form_element = $("#feedback_form");
                var successSpan = $('<span style="color:#fff; text-align:center;">Thank you for feedback</span>').hide();
                form_element.append(successSpan);

                // Fade in the span slowly
                successSpan.fadeIn(1000, function () {
                    // Wait for 1 second and then start fading out
                    setTimeout(function () {
                        successSpan.fadeOut(1000, function () {
                            // Remove the span when the fade-out is complete
                            successSpan.remove();
                            $("#email").val('');
                            $("#feedback").val('');
                        });
                    }, 1000); // 1000 milliseconds = 1 second
                });
                $("#save_feedback").attr('disabled', false);
            }
            if (response.status == 400) {

                if (response['result']['email']) {
                    var error_show = response['result']['email']
                }
                if (response['result']['feedback']) {
                    var error_show = response['result']['feedback']
                }

                var form_element = $("#feedback_form");
                var successSpan = $(`<span style="color:#d41730; text-align:center;">${error_show}</span>`).hide();
                form_element.append(successSpan);

                // Fade in the span slowly
                successSpan.fadeIn(1000, function () {
                    // Wait for 1 second and then start fading out
                    setTimeout(function () {
                        successSpan.fadeOut(1000, function () {
                            // Remove the span when the fade-out is complete
                            successSpan.remove();
                            $("#email").val('');
                            $("#feedback").val('');
                        });
                    }, 1000); // 1000 milliseconds = 1 second
                });
                $("#save_feedback").attr('disabled', false);
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error("Error:", errorThrown);
        },
        complete: function () {
            // Hide the loading spinner and re-enable the button
            $("#loader").hide();
            $("#save_feedback").attr("disabled", false);
        }
    });
});