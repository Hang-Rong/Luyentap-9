document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fee').onclick = convertF;
});

function convertF() {
    let b = parseFloat(document.getElementById('inputM').value);
    if (isNaN(b)) {
        document.getElementById('feet').innerHTML = "Type a valid number";
        return;
    }
    let afterconvertF = b * 3.2808;
    console.log(afterconvertF);
    document.querySelector('#inputM').value='';
    document.getElementById('feet').innerHTML = "Result: " + afterconvertF + " feets.";
}