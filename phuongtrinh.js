document.addEventListener('DOMContentLoaded', function () {
    const ptrinh = document.getElementById('ptrinh')
    const inputABC = document.getElementById('inputABC')
    const inputa = document.getElementById('inputa')
    const inputb = document.getElementById('inputb')
    const inputc = document.getElementById('inputc')
    const ketqua = document.getElementById('ketqua')
    const labelc = document.getElementById('inputc')
    const calEQ = document.getElementById('calEQ')

    ptrinh.addEventListener('change', function () {
        inputABC.classList.remove('hide');
        ketqua.innerText = '';
        inputa.value = '';
        inputb.value = '';
        inputc.value = '';

        const cpt = ptrinh.value;
        if (cpt === "Bac1") {
            labelc.style.display = 'none';
            inputc.style.display = 'none';
        } else {
            labelc.style.display = 'inline';
            inputc.style.display = 'inline';
        }
    })
})
calEQ.addEventListener('click', function () {
        const a = parseFloat(inputa.value);
        const b = parseFloat(inputb.value);
        const c = parseFloat(inputc.value);
        const cpt = ptrinh.value;
        let result;

        if (isNaN(a) || isNaN(b) || (cpt === "Bac2" && isNaN(c))) {
            ketqua.innerText = 'Please enter valid numbers for a, b, and c.';
            return;
        }

        if (cpt === "Bac1") {
            result = -b / a;
            ketqua.innerText = `Nghiệm của phương trình bậc 1 là: x = ${result}`;
        } else {
            const delta = b * b - 4 * a * c;
            if (delta < 0) {
                ketqua.innerText = 'Phương trình vô nghiệm';
            } else if (delta === 0) {
                result = -b / (2 * a);
                ketqua.innerText = `Phương trình có nghiệm kép: x = ${result}`;
            } else {
                const x1 = (-b + Math.sqrt(delta)) / (2 * a);
                const x2 = (-b - Math.sqrt(delta)) / (2 * a);
                ketqua.innerText = `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
            }
        }
    });