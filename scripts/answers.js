addEventListener("DOMContentLoaded", function () {
    var openButtonIndex = 0;

    document.getElementById("openButton1").addEventListener("click", function () {
        if (openButtonIndex === 0) {
            document.getElementById("closeButton1").style.display = "flex";
            document.getElementById("openText1").style.display = "flex";
            document.getElementById("QopenButton1").style.display = "none";
            openButtonIndex++;
        } else {
            document.getElementById("closeButton1").style.display = "none";
            document.getElementById("openText1").style.display = "none";
            document.getElementById("QopenButton1").style.display = "flex";
            openButtonIndex--;
        }
    });
    var openButtonIndex2 = 0;

    document.getElementById("openButton2").addEventListener("click", function () {
        if (openButtonIndex2 === 0) {
            document.getElementById("closeButton2").style.display = "flex";
            document.getElementById("openText2").style.display = "flex";
            document.getElementById("QopenButton2").style.display = "none";
            openButtonIndex2++;
        } else {
            document.getElementById("closeButton2").style.display = "none";
            document.getElementById("openText2").style.display = "none";
            document.getElementById("QopenButton2").style.display = "flex";
            openButtonIndex2--;
        }
    });

    var openButtonIndex3 = 0;

    document.getElementById("openButton3").addEventListener("click", function () {
        if (openButtonIndex3 === 0) {
            document.getElementById("closeButton3").style.display = "flex";
            document.getElementById("openText3").style.display = "flex";
            document.getElementById("QopenButton3").style.display = "none";
            openButtonIndex3++;
        } else {
            document.getElementById("closeButton3").style.display = "none";
            document.getElementById("openText3").style.display = "none";
            document.getElementById("QopenButton3").style.display = "flex";
            openButtonIndex3--;
        }
    });

    var openButtonIndex4 = 0;

    document.getElementById("openButton4").addEventListener("click", function () {
        if (openButtonIndex4 === 0) {
            document.getElementById("closeButton4").style.display = "flex";
            document.getElementById("openText4").style.display = "flex";
            document.getElementById("QopenButton4").style.display = "none";
            openButtonIndex4++;
        } else {
            document.getElementById("closeButton4").style.display = "none";
            document.getElementById("openText4").style.display = "none";
            document.getElementById("QopenButton4").style.display = "flex";
            openButtonIndex4--;
        }
    });

    var openButtonIndex5 = 0;

    document.getElementById("openButton5").addEventListener("click", function () {
        if (openButtonIndex5 === 0) {
            document.getElementById("closeButton5").style.display = "flex";
            document.getElementById("openText5").style.display = "flex";
            document.getElementById("QopenButton5").style.display = "none";
            openButtonIndex5++;
        } else {
            document.getElementById("closeButton5").style.display = "none";
            document.getElementById("openText5").style.display = "none";
            document.getElementById("QopenButton5").style.display = "flex";
            openButtonIndex5--;
        }
    });

    var openButtonIndex6 = 0;

    document.getElementById("openButton6").addEventListener("click", function () {
        if (openButtonIndex6 === 0) {
            document.getElementById("closeButton6").style.display = "flex";
            document.getElementById("openText6").style.display = "flex";
            document.getElementById("QopenButton6").style.display = "none";
            openButtonIndex6++;
        } else {
            document.getElementById("closeButton6").style.display = "none";
            document.getElementById("openText6").style.display = "none";
            document.getElementById("QopenButton6").style.display = "flex";
            openButtonIndex6--;
        }
    });


})

