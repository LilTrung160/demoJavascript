function tinhTienNuoc(){
    let chiSoNuocCu = document.getElementById("chiSoNuocCu").value;
    let chiSoNuocMoi = document.getElementById("chiSoNuocMoi").value;
    let donGiaNuoc1 = document.getElementById("donGiaNuoc1").value;
    let donGiaNuoc2 = document.getElementById("donGiaNuoc2").value;
    let donGiaNuoc3 = document.getElementById("donGiaNuoc3").value;
    let donGiaNuoc4 = document.getElementById("donGiaNuoc4").value;

    let soNuocTieuThu = chiSoNuocMoi - chiSoNuocCu;
    let tongTienNuoc = 0;
    let phiCoDinh = tongTienNuoc * 1.15;

    if (soNuocTieuThu <= 10){
        tongTienNuoc = soNuocTieuThu * donGiaNuoc1 + phiCoDinh;
    }else if (soNuocTieuThu <= 20){
        tongTienNuoc = 10 * donGiaNuoc1 + (soNuocTieuThu - 10) * donGiaNuoc2 + phiCoDinh;
    }else if (soNuocTieuThu <= 30){
        tongTienNuoc = 10 * donGiaNuoc1 + 10 * donGiaNuoc2 + (soNuocTieuThu - 10) * donGiaNuoc3 + phiCoDinh;
    }else{
        tongTienNuoc = 10 * donGiaNuoc1 + 10 * donGiaNuoc2 + 10 * donGiaNuoc3 + (soNuocTieuThu - 10) * donGiaNuoc4 + phiCoDinh;
    }

    document.getElementById('tongTienNuoc').innerHTML = "Tổng tiền Nước: " + tongTienNuoc.toLocaleString() + "đ";
}