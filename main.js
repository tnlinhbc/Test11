function kiemTra() {
    var hoTen = document.frmThongTinCaNhan.hoTen.value;
    var ngaySinh = document.frmThongTinCaNhan.ngaySinh.value;
    var thagSinh = document.frmThongTinCaNhan.thagSinh.value;
    var namSinh = document.frmThongTinCaNhan.namSinh.value;
    var tel = document.frmThongTinCaNhan.tel.value;
    var cmnd = document.frmThongTinCaNhan.cmnd.value;
    var diaChi = document.frmThongTinCaNhan.diaChi.value;
    var tenDangNhap = document.frmDangKy.tenDangNhap.value;
    var password = document.frmDangKy.password.value;
    var nhapLaiMatKhau = document.frmDangKy.nhapLaiMatKhau.value;
    var email = document.frmThongTinCaNhan.email.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (hoTen == '') {
        alert('Nhập họ tên');
        document.frmThongTinCaNhan.hoTen.focus();
        return false;
    }
    if (ngaySinh == 'ngaySinh') {
        alert('Chọn ngày sinh');
        return false
    }
    if (thagSinh == 'thangSinh') {
        alert('Chọn tháng sinh');
        return false
    }
    if (namSinh == '') {
        alert('Nhập năm sinh');
        document.frmThongTinCaNhan.namSinh.focus();
        return false;
    }
    if (tel == '') {
        alert('Nhập số điện thoại');
        document.frmThongTinCaNhan.tel.focus();
        return false;
    }
    else if (tel.length <= 9) {
        alert('Số điện thoại chưa đúng');
        document.frmThongTinCaNhan.tel.focus();
        return false;
    }
    if (cmnd == '') {
        alert('Nhập số căn cước công dân');
        document.frmThongTinCaNhan.cmnd.focus();
        return false;
    }
    else if (cmnd.length < 12) {
        alert('Số căn cước công dân chưa đúng');
        document.frmThongTinCaNhan.cmnd.focus();
        return false;
    }
    else if (cmnd.length > 12) {
        alert('Số căn cước công dân chưa đúng');
        document.frmThongTinCaNhan.cmnd.focus();
        return false;
    }
    if (email == '') {
        alert('Nhập địa chỉ Email');
        document.frmThongTinCaNhan.email.focus();
        return false;
    }
    else if (!filter.test(email)) {
        alert('Địa chỉ Email chưa đúng');
        document.frmThongTinCaNhan.email.focus();
        return false;
    }
    if (diaChi == '') {
        alert('Nhập số dịa chỉ');
        document.frmThongTinCaNhan.diaChi.focus();
        return false;
    }
    if (tenDangNhap == "") {
        alert('Nhập tên đăng nhập');
        document.frmDangKy.tenDangNhap.focus();
        return false;
    }
    else if (tenDangNhap <= 6) {
        alert('Tên đăng nhập không được dưới 7 ký tự');
        document.frmDangKy.tenDangNhap.focus();
        return false;
    }
    if (password == "") {
        alert('Nhập mật khẩu');
        document.frmDangKy.password.focus();
        return false;
    }
    else if (password <= 6) {
        alert('mật khẩu không được dưới 7 ký tự');
        document.frmDangKy.password.focus();
        return false;
    }
    if (password != nhapLaiMatKhau) {
        alert('Nhập lại mật khẩu chưa đúng');
        document.frmDangKy.nhapLaiMatKhau.focus();
        return false;
    }
    alert('Bạn đã đăng ký thành công')
    thongTin = '<h1>THÔNG TIN ĐĂNG KÝ</h1>' +
        '<p><b>Họ tên: </b>' + hoTen + '</p>' +
        '<p><b>Ngày/tháng/nămsinh: </b>' + ngaySinh + '/' + thagSinh + '/' + namSinh + '</p>' +
        '<p><b>Số điện thoại: </b>' + tel + '</p>' +
        '<p><b>Số căn cước công dân: </b>' + cmnd + '</p>' +
        '<p><b>Địa chỉ Email: </b>' + email + '</p>' +
        '<p><b>Địa chỉ: </b>' + diaChi + '</p>' +
        '<p><b>Tên đăng nhập: </b>' + '<span>' + tenDangNhap + '</span>' + '</p>' +
        '<p><b>Mật khẩu: </b>' + '<span>' + password + '</span>' + '</p>';
    document.getElementById('hienThongTin').innerHTML = thongTin;
}
function reload() {
    location.reload(true);
}
