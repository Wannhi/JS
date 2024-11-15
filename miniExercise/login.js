function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("passwd").value;

    if (username === "" || password === "") {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu");
        return;
    }

    if (username.length < 5 || password.length < 5) {
        alert("Tên đăng nhập và mật khẩu phải có ít nhất 5 ký tự");
        return;
    }

}

