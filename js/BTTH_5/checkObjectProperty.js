const student = {
    name:"Student 1",
    age:"18",
    hobbies:"Math"
}
console.log(student);

delete student.age;
console.log(student);

// if (student.name == undefined) {
//     console.log("Không tồn tại")
// } else {
//     console.log("Tồn tại")
// }

console.log(student.name == undefined ? "Không tồn tại" : "Tồn tại")
