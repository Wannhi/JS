let n;
n = prompt("Nhập kích thước hình:");
n = parseInt(n);

for (let i = 0; i < n; i++) {
    let row = ""; // Tạo một dòng trống để chứa các dấu '*'
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1) {
            // Dòng đầu tiên và dòng cuối cùng chỉ chứa dấu '*'
            row += "* ";
        } else {
            // Các dòng giữa chỉ có '*' ở đầu và cuối
            if (j === 0 || j === n - 1) {
                row += "* ";
            } else {
                row += "  "; // Khoảng trống giữa các dấu '*'
            }
        }
    }
    console.log(row); // In từng dòng sau khi hoàn thành
}
