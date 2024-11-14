function sumOfInterger(n) {
    let arr = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt()); 
        sum += arr[i];    
    }
    alert(`Tổng giá trị trong mảng là: ` + sum);

}

let n = parseInt(prompt());
sumOfInterger(n);