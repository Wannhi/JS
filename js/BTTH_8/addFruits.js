let arrFruits = ["Cam", "Xoài", "Táo", "Nho", "Sầu Riêng"];

function manageFruits() {
    do {
        let select = prompt("Nhập lựa chọn (Y: Thêm trái cây | N: Thoát): ").toUpperCase();
        
        if (select === "Y") {
            addFruit();
        } 
        else if (select === "N") {
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        } 
        else {
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
        }
    } while (true);
}

function addFruit() {
    let addFruits = prompt("Nhập trái cây muốn thêm: ");
    arrFruits.push(addFruits);
    console.log("Danh sách trái cây hiện tại:", arrFruits);
}

// Gọi hàm quản lý trái cây
manageFruits();
