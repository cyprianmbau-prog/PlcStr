// object for fort jesus
const site = {

    location: "Mombasa",
    landmark: "Indian Ocean",
    notes: "Beautiful coastal attraction"

};

// function to display  stored object content
function showText() {

    document.getElementById("fortJesus").innerHTML =


        "Location:" + site.location +

        "<p>Landmark: " + site.landmark + "</p>" +


        "<p>Notes: " + site.notes + "</p>";
}


