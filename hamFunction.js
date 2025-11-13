const button1 = document.getElementById('button_1');
const button2 = document.getElementById('button_2');
const text1 = document.getElementById('text_1');
const text2 = document.getElementById('text_2');
const input1 = document.getElementById('input_1');
const input2 = document.getElementById('input_2');

function check(n){
    if (n < 2) return false;
    for (let i = 2 ; i<=n-1; i++){
        if (n % i ===0) return false;
    }
    return true;
}
function hienthi(a){
    let dem = "";
    for(let d = 1; d<=a; d++){
        dem += d + " "
    }return dem;
}

button1.addEventListener('click', () => {
    let n = Number(input1.value);
    if (check(n)) {
        alert('Đây là số nguyên tố :))');
        console.log(`Số ${n} là số nguyên tố`);
    }else {
        alert('Đây không phải là số nguyên tố :((');
        console.log(`Số ${n} không phải là số nguyên tố`);
    }
    text1.innerHTML='Vào console để đọc thông báo !!!';
});

button2.addEventListener('click', () =>{
    let a = Number(input1.value);
    text2.innerHTML=hienthi(a);
    console.log(hienthi(a));
});

