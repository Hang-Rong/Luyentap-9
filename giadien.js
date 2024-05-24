document.addEventListener('DOMContentLoaded', function () {

    const tinh = document.getElementById('tinh');
    
    let giadien;
    tinh.onclick = function () {
        const sodien = parseFloat(document.getElementById('sodien').value);
        const bao = document.getElementById('giadien');
        const type1= 1806
        const type2= 1866
        const type3= 2167
        const type4= 2729
        if (sodien >= 0 && sodien <= 50) {
            giadien = (sodien * type1) * 1.08
                bao.innerHTML = 'Tiền điện của bạn là ' + giadien.toFixed(2) + 'đ.'
        } else if (sodien > 50 && sodien <= 100) {   
            giadien = (50 *type1 + (sodien - 50) * type2 )* 1.08
                bao.innerHTML = 'Tiền điện của bạn là ' + giadien.toFixed(2) + 'đ.'
        } else if (sodien >100 && sodien <= 200){
            giadien = ((50* type1) + (50* type2) +((sodien-100)*type3))*1.08
            bao.innerHTML = 'Tiền điện của bạn là ' + giadien.toFixed(2) + 'đ.'   
        } else if (sodien>200 && sodien<=300){
            giadien = (50*type1 + 50*type2 + 100*type3 + (sodien-150)*type4)* 1.08
            bao.innerHTML = 'Tiền điện của bạn là ' + giadien.toFixed(2) + 'đ.'
        } else {
            bao.innerHTML = 'Vui lòng nhập giá trị'
        }
            document.getElementById('sodien').value='';
            
    }
})