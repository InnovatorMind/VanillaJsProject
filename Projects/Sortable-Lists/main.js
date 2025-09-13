
const items = document.querySelectorAll(".item");
const boxes = document.querySelectorAll(".box");

let draggedItem = null;

// Setup drag events for items
items.forEach(item => {
    item.addEventListener("dragstart", () => {
        draggedItem = item;
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        draggedItem = null;
        item.classList.remove("dragging");
    });
});

// Setup drag events for boxes
boxes.forEach(box => {
    box.addEventListener("dragover", e => {
        e.preventDefault();
        box.classList.add("over");

        // Handle sorting inside box
        const afterElement = getDragAfterElement(box, e.clientY);
        if (afterElement == null) {
            box.appendChild(draggedItem);
        } else {
            box.insertBefore(draggedItem, afterElement);
        }
    });

    box.addEventListener("dragleave", () => {
        box.classList.remove("over");
    });

    box.addEventListener("drop", () => {
        box.classList.remove("over");
    });
});

// Helper: find where to place item when sorting
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".item:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
