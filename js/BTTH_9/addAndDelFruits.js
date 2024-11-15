let arrFruits = ["Cam", "Xoài", "Táo", "Nho", "Sầu Riêng"];

function manageFruits() {
    do {
        let select = prompt("Nhập lựa chọn (A: Thêm trái cây | D: Xóa trái cây | N: Thoát): ").toUpperCase();
        
        if (select === "A") {
            addFruit();
        } 

        else if (select === "D") {
            delFruit();
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

function delFruit() {
    let indexDelFruits = prompt("Nhập vị trí trái cây muốn xóa: ");
    arrFruits.splice(indexDelFruits,1);
    console.log("Danh sách trái cây hiện tại: \n", arrFruits);
}

function addFruit() {
    let indexAddFruits = prompt("Nhập vị trí trái cây muốn thêm: ");
    let valueAddFruits = prompt("Nhập giá trị trái cây muốn thêm: ");
    arrFruits.splice(indexAddFruits,0,valueAddFruits);
    console.log("Danh sách trái cây hiện tại: \n", arrFruits);
}

// Gọi hàm quản lý trái cây
manageFruits();
