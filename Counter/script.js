
let count = 0;
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// Loop through each button and add event listeners
buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    
    // console.dir(e.currentTarget)
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Change color based on the count value
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#102a42";
    }

    // Update the display
    value.textContent = count;
  });
});
