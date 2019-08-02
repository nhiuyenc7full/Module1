let vatly
let hoahoc
let sinhhoc
let dtb
let tong

vatly=prompt("Nhập điểm môn Vật Lý: ")
hoahoc=prompt("Nhập điểm môn Hóa học: ")
sinhhoc=prompt("Nhập điểm môn Sinh học: ")

let vat=parseInt(vatly)
let hoa=parseInt(hoahoc)
let sinh=parseInt(sinhhoc)

dtb= (vat + hoa + sinh)/3
tong= vat + hoa + sinh

document.write("Điểm trung bình: " + dtb)
document.write("<br/>")
document.write ("Tổng: " + tong)