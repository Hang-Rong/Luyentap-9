document.addEventListener('DOMContentLoaded', function () {
    const nuttuoi = document.getElementById('nuttuoi');
    const displayage = document.getElementById('displayage');

    document.getElementById('Ages').addEventListener('input', function () {
        nuttuoi.disabled = this.value.length === 0;
    });

    nuttuoi.onclick = function () {
        const ages = parseInt(document.getElementById('Ages').value, 10);
        if (!isNaN(ages) && ages >= 0 && ages < 120) {
            displayage.innerHTML = ages + " is a valid age.";
        } else {
            displayage.innerHTML = "Not a valid age.";
        }
        document.getElementById('Ages').value='';
    };
    
});