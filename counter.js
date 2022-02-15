let count = 0;

function countIt(inputId, isAdd) {
  document.getElementById(inputId).addEventListener("click", function (e) {
    if (isAdd == true) {
      count++;
    } else {
      count--;
    }
    if (count >= 0) {
      document.getElementById("count").innerText = count;
    }
  });
}

countIt("count-up", true);
countIt("count-down", false);
