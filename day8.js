//Thứ Tư: Async/Await trong JavaScript

//- Viết hàm sử dụng async và await để gọi API giả lập và hiển thị kết quả.
function callAPI(){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve({ title: "Tai du lieu API: Thanh cong."});
        }, 1000);
    });
}
async function getData() {
    try {
        const data = await callAPI();
        document.getElementById('loadData').innerHTML = data.title;
        console.log(data.title);
    } catch (err) {
        document.getElementById('loadData').innerHTML = "Tai du lieu API: That bai!!!";
        console.log("Tai du lieu API: That bai!!!");
    }
}
document.getElementById('btnLoadData').addEventListener('click', getData);


//- Tạo một hàm bất đồng bộ để tải một danh sách người dùng và hiển thị thông tin của người dùng đầu tiên.
function listUser(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([
                {
                    name: "Nguyen",
                    age:15,
                    address:"Lao Cai"},
                {
                    name: "Hieu",
                    age:21,
                    address:"Ho Chi Minh"},
                {
                    name: "Thien",
                    age:30,
                    address:"Ha Noi"},
                {
                    name:"Minh",
                    age:23,
                    address:"Quang Ninh"}
            ]);
        }, 2000);
    });
}
async function loadFirstUser() {
    try {
        const user = await listUser();
        const inputValue = Number(inputUser.value);
        const numberUser = inputValue - 1;
        const firstUser = user[numberUser];
        document.getElementById('txtUser').innerHTML = `Nguoi dung thu ${inputValue} la: ${firstUser.name} - ${firstUser.age} tuoi - Noi o ${firstUser.address}`;
        console.log(`Nguoi dung thu ${inputValue} la: ${firstUser.name} - ${firstUser.age} tuoi - Noi o ${firstUser.address}`);
    } catch(err){
        document.getElementById('txtUser').innerHTML = "Da xay ra loi hien thi thong tin nguoi dung!!!";
        console.log("Da xay ra loi hien thi thong tin nguoi dung!!!");
    }
}
document.getElementById('btnUser').addEventListener('click' , loadFirstUser);


