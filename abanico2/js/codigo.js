const fan = document.getElementById("fan");

function setSpeed(level) {

    if (level === 0) {

        fan.style.animation = "none";

    } else {

        let speed;

        switch (level) {

            case 1:

                speed = "2s";

                break;

            case 2:

                speed = "1s";

                break;

            case 3:

                speed = "0.5s";

                break;

        }

        fan.style.animation = `spin ${speed} linear infinite`;

    }

}
