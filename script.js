// object for fort jesus details
const site = {

    location: "Mombasa",
    landmark: "Indian Ocean",
    notes: "Beautiful coastal attraction",
    time: "23 september 2025"
};

// function to display  stored object content
function showText() {

    document.getElementById("fortJesus").innerHTML =


        "Location:" + site.location +

        "<p>Landmark: " + site.landmark + "</p>" +


        "<p>Notes: " + site.notes + "</p>" +

        "<p>Time: " + site.time + "</p>";
}
// function to delete the fort jesus button
function deleteContent() {

    document.getElementById("fortJesus").remove();
}

// object for hells gate details
const place = {

    location: "Naivasha",
    landmark: "Lake Naivasha",
    notes: "enjoyable but the journey was long!",
    time: "23 june 2025"
};

// function to display the hells gate content based on the object
function showName() {

    document.getElementById("hellsGate").innerHTML =


        "Location:" + place.location +

        "<p>Landmark: " + place.landmark + "</p>" +

        "<p>Notes: " + place.notes + "</p>" +

        "<p>Time: " + place.time + "</p>";
}
// function to delete the hells gate button
function deleteMessage() {

    document.getElementById("hellsGate").remove();
}

// object to hold maasai mara content
const tour = {

    location: "Narok",
    landmark: "Scattered trees and long grasses",
    notes: "enjoyalable to see the wild animals",
    time: "23rd May 2025"
};

// function
function getText() {

    document.getElementById("Maasai").innerHTML =


        "Location:" + tour.location +

        "<p>Landmark: " + tour.landmark + "</p>" +


        "<p>Notes: " + tour.notes + "</p>" +

        "<p>time:" + tour.time + "</p>";
}
// function to delete the maasai button
function deleteText() {

    document.getElementById("Maasai").remove();
}

// function to add a visit record
function addContent() {
    let text = document.getElementById("visitInput").value;
    document.getElementById("output").innerHTML = text;
}

