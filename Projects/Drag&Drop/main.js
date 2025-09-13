const dragItem = document.getElementById("dragMe");
const dropZones = document.querySelectorAll(".dropZone");
const bucket = document.getElementById("bucket");
// Start drag
dragItem.ondragstart = function (event) {
    console.log("hiii....")
    event.dataTransfer.setData("text", event.target.id);
};

dropZones.forEach(zone => {
    zone.ondragover = function (event) {
        event.preventDefault(); // allow dropping
    };

    zone.ondrop = function (event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const draggedElement = document.getElementById(data);

        zone.innerHTML = ""; // clear text
        zone.appendChild(draggedElement);

        // Reset style
        draggedElement.style.position = "static";
        draggedElement.style.margin = "0";
    };

    bucket.ondragover = function (event) {
        event.preventDefault(); // allow dropping
    };

    bucket.ondrop = function (event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const draggedElement = document.getElementById(data);

        bucket.innerHTML = ""; // clear text
        bucket.appendChild(draggedElement);

        // Reset style
        draggedElement.style.position = "static";
        draggedElement.style.margin = "0";
    };
});
