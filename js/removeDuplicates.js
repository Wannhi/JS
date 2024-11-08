function removeDuplicates(arr) {
    let uniqueArray = [];
    let seen = {};
    for (let item of arr) {
        if (!seen[item]) {
            uniqueArray.push(item);
            seen[item] = true;
        }
    }
    return uniqueArray;
}

let n = parseInt(prompt(`Nhập số lượng phần tử trong mảng:`));
let arr = Array(n)
for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(prompt(`Nhập giá trị phần tử thứ ${i+1}: `));    
}
let arrUnique = removeDuplicates(arr);
alert(arrUnique);