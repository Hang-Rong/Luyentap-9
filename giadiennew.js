document.addEventListener('DOMContentLoaded', function () {
      const tinh = document.getElementById('tinh');
      const sodienInput = document.getElementById('sodien');
      const giadienDisplay = document.getElementById('giadien');

      tinh.onclick = function () {
        let sodien = parseFloat(sodienInput.value);
        let giadien = 0;

        const bacthang = [50, 50, 100, Infinity];
        const giadienbacthang = [1806, 1866, 2203, 2587];

        for (let i = 0; i < bacthang.length; i++) {
          if (sodien <= bacthang[i]) {
            giadien += sodien * giadienbacthang[i];
            break;
          } else {
            giadien += bacthang[i] * giadienbacthang[i];
            sodien -= bacthang[i];
          }
        }

        giadien = giadien * 1.1; // Tính VAT 10%
        giadienDisplay.innerText = `Tiền điện của bạn là ${giadien.toFixed(2)}đ.`;
      };
    });