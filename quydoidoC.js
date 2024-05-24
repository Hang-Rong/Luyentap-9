document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('F').onclick = convert; 
});

function convert() {
    let a = parseFloat(document.getElementById('inputC').value);
    if (isNaN(a)) {
        document.getElementById('quydoi').innerText = "Enter a valid number";
        return;
    }
    let afterconvert = a * 9 / 5 + 32;
    console.log(afterconvert);
    document.querySelector('#inputC').value='';
    document.getElementById('quydoi').innerText = "Result:  " + afterconvert + "F Celsius.";
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fee').onclick = convertF;
});

function convertF() {
    let b = parseFloat(document.getElementById('inputM').value);
    if (isNaN(b)) {
        document.getElementById('feet').innerHTML = "Enter a valid number";
        return;
    }
    let afterconvertF = b * 3.2808;
    console.log(afterconvertF);
    document.querySelector('#inputM').value='';
    document.getElementById('feet').innerHTML = "Result: " + afterconvertF + " feets.";
}    