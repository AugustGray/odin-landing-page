var images = ["makima-wp.jpeg", "diana-wp.jpeg", "zerotwo-wp.jpeg", "asuka-wp.jpeg", "antenora-wp.jpg"];
    $(function () {
        var i = 0;
        $("#title").css("background-image", "url(./img/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#title").fadeOut("slow", function () {
                $(this).css("background-image", "url(./img/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 5000);
    });
