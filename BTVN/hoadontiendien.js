function tinhTienDien(){
    let chiSoDienCu = document.getElementById("chiSoDienCu").value;
    let chiSoDienMoi = document.getElementById("chiSoDienMoi").value;
    let donGiaDien1 = document.getElementById("donGiaDien1").value;
    let donGiaDien2 = document.getElementById("donGiaDien2").value;
    let donGiaDien3 = document.getElementById("donGiaDien3").value;
    let donGiaDien4 = document.getElementById("donGiaDien4").value;
    let donGiaDien5 = document.getElementById("donGiaDien5").value;
    let donGiaDien6 = document.getElementById("donGiaDien6").value;

    let soDienTieuThu = chiSoDienMoi - chiSoDienCu;
    let tongTienDien = 0;
    let thueCoDinh = 8/100;

    if(soDienTieuThu <= 50){
        tongTienDien = soDienTieuThu * donGiaDien1;
    }else if(soDienTieuThu <= 100){
        tongTienDien = 50 * donGiaDien1 + (soDienTieuThu - 50) * donGiaDien2;
    }else if(soDienTieuThu <= 200){
        tongTienDien = 50 * donGiaDien1 + 50 * donGiaDien2 + (soDienTieuThu - 100) * donGiaDien3
                        + phiCoDinh;
    }else if(soDienTieuThu <= 300){
        tongTienDien = 50 * donGiaDien1 + 50 * donGiaDien2 + 100 * donGiaDien3 + (soDienTieuThu - 100) * donGiaDien4;
    }else if(soDienTieuThu <= 400){
        tongTienDien = 50 * donGiaDien1 + 50 * donGiaDien2 + 100 * donGiaDien3 + 100 * donGiaDien4 + (soDienTieuThu - 100) * donGiaDien5;
    }else{
        tongTienDien = 50 * donGiaDien1 + 50 * donGiaDien2 + 100 * donGiaDien3 + 100 * donGiaDien4 + 100 * donGiaDien5 + (soDienTieuThu - 100) * donGiaDien6;
    }
    let phiCoDinh = thueCoDinh * tongTienDien;
    let tongTienThanhToan = phiCoDinh + tongTienDien;
    document.getElementById('tongTienThanhToan').innerHTML = "Tổng tiền Điện: " + tongTienThanhToan.toLocaleString() /*định dạng số tiền theo đơn vị*/+ "đ";
}