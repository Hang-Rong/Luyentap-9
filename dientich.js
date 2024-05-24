document.addEventListener('DOMContentLoaded', function () {
    const shapeSelect = document.getElementById('shapeSelect');
    const inputForm = document.getElementById('inputForm');
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const result = document.getElementById('result');
    const calculateBtn = document.getElementById('calculateBtn');

    shapeSelect.addEventListener('change', function () {
        inputForm.classList.remove('hidden');
        result.innerText = '';
        inputA.value = '';
        inputB.value = '';

        const selectedShape = shapeSelect.value;
        if (selectedShape === 'square') {
            document.querySelector('label[for="inputB"]').style.display = 'none';
            inputB.style.display = 'none';
        } else {
            document.querySelector('label[for="inputB"]').style.display = 'inline';
            inputB.style.display = 'inline';
        }
    });

    calculateBtn.addEventListener('click', function () {
        const a = parseFloat(inputA.value);
        let b = parseFloat(inputB.value);
        const selectedShape = shapeSelect.value;
        let area = 0;

        if (isNaN(a) || (selectedShape !== 'square' && isNaN(b))) {
            result.innerText = 'Please enter a valid number for length and width.';
            return;
        }

        switch (selectedShape) {
            case 'square':
                area = a * a;
                break;
            case 'rectangle':
                area = a * b;
                break;
            case 'triangle':
                area = (a * b) / 2;
                break;
        }
        if (area == 0) {
            result.innerText = `Not a ${shapeSelect.options[shapeSelect.selectedIndex].text.toLowerCase()} shape`;
        } else {
        result.innerText = `The area of ${shapeSelect.options[shapeSelect.selectedIndex].text.toLowerCase()} is: ${area}`;
        }
    });
});