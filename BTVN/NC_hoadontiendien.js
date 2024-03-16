function inHoaDon(){
    let chiSoDienCu = document.getElementById('chiSoDienCu').value;
    let chiSoDienMoi = document.getElementById('chiSoDienMoi').value;
    let donGiaDien1 = 1806;
    let donGiaDien2 = 1866;
    let donGiaDien3 = 2167;
    let donGiaDien4 = 2729;
    let donGiaDien5 = 3050;
    let donGiaDien6 = 3151;

    let soDienTieuThu = chiSoDienMoi - chiSoDienCu;
    let tongTienDien = 0;
    let thueCoDinh = 8/100;

    if(soDienTieuThu <= 50){
        tongTienDien = soDienTieuThu * donGiaDien1;
    }else if(soDienTieuThu <= 100){
        tongTienDien = 50 * donGiaDien1 + (soDienTieuThu - 50) * donGiaDien2;
    }else if(soDienTieuThu <= 200){
        tongTienDien = 50 * donGiaDien1 + 50 * donGiaDien2 + (soDienTieuThu - 100) * donGiaDien3;
    }else if(soDienTieuThu <= 300){
        tongTienDien = 50 * donGiaDien1 + 50 * donGiaDien2 + 100 * donGiaDien3 + (soDienTieuThu - 100) * donGiaDien4;
    }else if(soDienTieuThu <= 400){
        tongTienDien = 50 * donGiaDien1 + 50 * donGiaDien2 + 100 * donGiaDien3 + 100 * donGiaDien4 + (soDienTieuThu - 100) * donGiaDien5;
    }else{
        tongTienDien = 50 * donGiaDien1 + 50 * donGiaDien2 + 100 * donGiaDien3 + 100 * donGiaDien4 + 100 * donGiaDien5 + (soDienTieuThu - 100) * donGiaDien6;
    }
    let phiCoDinh = thueCoDinh * tongTienDien;
    let tongTienThanhToan = phiCoDinh + tongTienDien;
    document.getElementById('chiSoMoi').innerHTML = "Chỉ số Điện mới: " + chiSoDienMoi + "kWh";
    document.getElementById('chiSoCu').innerHTML = "Chỉ số Điện mới: " + chiSoDienCu + "kWh";
    document.getElementById('soDienTieuThu').innerHTML = "Số Điện tiêu thụ: " + soDienTieuThu + "kWh";
    document.getElementById('tongTienDien').innerHTML = "Tổng tiền: " + tongTienDien.toLocaleString() + "đ";
    document.getElementById('phiCoDinh').innerHTML = "Thuế GTGT 8%: " + phiCoDinh.toLocaleString() + "đ";
    document.getElementById('tongTienThanhToan').innerHTML = "Thành tiền: " + tongTienThanhToan.toLocaleString() + "đ";
}