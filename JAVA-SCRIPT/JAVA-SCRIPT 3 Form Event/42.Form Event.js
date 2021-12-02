function focusFunction(element) {
    element.style.background = "lime"
}
function blurFunction(element) {
    element.style.background = "red"
}
function inputFunction(element) {
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}