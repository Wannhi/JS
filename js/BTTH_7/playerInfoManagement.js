const player = {
    name: "Fernando Torres",
    birthYear: 1984,
    nationality: "Spain"
};

function addInfoToPlayer() {
    const inforPlayer = prompt("Nhập thông tin muốn thêm: ");
    const valueOfInfor = prompt("Nhập giá trị cho thông tin: ");
    
    if (inforPlayer && valueOfInfor) {  // Kiểm tra cả hai giá trị không trống
        player[inforPlayer] = valueOfInfor;
    } else {
        console.log("Thông tin hoặc giá trị không hợp lệ. Vui lòng thử lại.");
    }
}

do {
    const checkRequest = prompt("Nhập yêu cầu (Y|N): ");
    
    if (checkRequest === "Y") {
        addInfoToPlayer();
        console.log(player);
    } else if (checkRequest === "N") {
        console.log(player);
        console.log("Chào tạm biệt");
        break;  // Thoát khỏi vòng lặp khi người dùng nhập "N"
    } else {
        console.log("Yêu cầu không hợp lệ. Vui lòng nhập Y hoặc N.");
    }
} while (true);
