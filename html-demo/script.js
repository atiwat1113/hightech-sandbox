function changeColor(id) {
  const bgn = document.getElementById(id).style.backgroundColor;
  if (bgn === "coral") {
    document.getElementById(id).style.backgroundColor = "white";
  } else {
    document.getElementById(id).style.backgroundColor = "coral";
  }
}
