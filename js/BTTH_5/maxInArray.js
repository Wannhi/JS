function findMax(n) {
    let arr = Array(n);
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(prompt(`Nhập phần thử thứ ${i+1}: `));
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    alert(`Giá trị phần tử lớn nhất là: ` + max);
}

let n = parseInt(prompt(`Nhập số phần tử cho mảng:`));
findMax(n);