var btn = document.querySelector('#btn_gt');
btn.addEventListener('click', tabuada);

function tabuada() {
    let num = document.querySelector('#camp_num');
    let tab = document.querySelector('#camp_tabuada');

    if (num.value.length == 0) {
        document.location.reload(true);
        alert('Por favor digite um número!');
    }
    else {
        let mult = document.getElementById('multiplicador');
        let m = mult.value
        let n = Number(num.value);
        tab.innerHTML = '';

        switch (m) {
            case 'somar':
                for (let c = 1; c <= 10; c++) {
                    let item = document.createElement('option');
                    item.text = `${n} + ${c} = ${c + n}`;
                    tab.appendChild(item);
                }
                break

            case 'diminuir':
                for (let c = 1; c <= 10; c++) {
                    if (c > n) {
                        let item = document.createElement('option');
                        item.text = `${c} - ${n} = ${c - n}`;
                        tab.appendChild(item);
                    }
                    else {
                        let item = document.createElement('option');
                        item.text = `${n} - ${c} = ${n - c}`;
                        tab.appendChild(item);
                    } 
                }
                break

            case 'multiplicar':
                for (let c = 1; c <= 10; c++) {
                    let item = document.createElement('option');
                    item.text = `${n} x ${c} = ${n * c}`;
                    tab.appendChild(item);
                }
                break

            case 'dividir':
                let divisor = 10 * n;
                for (let c = 2; c <= divisor; c++) {
                    if (c % num.value == 0) {
                        let item = document.createElement('option');
                        item.text = `${c} / ${n} = ${c / n}`;
                        tab.appendChild(item);
                    }
                }
                break
        }
    }
}

var n = 5
var d = 2
var num = n % d
if (num == 1) {
    console.log(`Número ${n} é Ímpar`)
} else {
    console.log(`Número ${n} é Par`)
}
console.log(num);