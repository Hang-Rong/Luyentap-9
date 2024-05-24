document.addEventListener('DOMContentLoaded', function () {
    const check = document.getElementById('check');
    const reset = document.getElementById('reset');
    check.onclick = function () {
        const aa = parseFloat(document.getElementById('canha').value);
        const ab = parseFloat(document.getElementById('canhb').value);
        const bc = parseFloat(document.getElementById('canhc').value);

        if (aa + ab > bc && aa + bc > ab && ab + bc > aa) {
            document.getElementById('thongbao').innerHTML = 'Ba cạnh AB, AC, BC tạo thành một tam giác.';
        } else {
            document.getElementById('thongbao').innerHTML = 'Ba cạnh AB, AC, BC không tạo thành một tam giác.';
        }
    };
    reset.onclick = function () {
      canha.value='';
      canhb.value='';
      canhc.value='';
      document.getElementById('thongbao').innerHTML =''
    }
});