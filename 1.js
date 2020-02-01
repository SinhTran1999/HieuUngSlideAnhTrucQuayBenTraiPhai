document.addEventListener("DOMContentLoaded",function(){
	var nutPhai = document.querySelector(".nuts b.phai");
	var nutTrai = document.querySelector(".nuts b.trai");
	var slides = document.querySelectorAll(".slides ul li");
	var chiSoHienTai = 0;
	var soLuongSlide =slides.length;
	var trangThai = "dangDungYen";


//1.Xac dinh slide hien tai va slide tiep theo khi click nut next

	 //Goi su kien click vao nut phai
	 var chuyenSlideChoNutPhai = function(){

	 	// kiem tra luon trang thai, neu dang chuyen dong
	 	if(trangThai == "dangChuyenDong"){return false;}//dung chuong trinh

	 	// den dong nay tuc la dang dung yen ,xu ly chuyen dong 
	 	// danh dau la dang chuyen dong
	 	trangThai = "dangChuyenDong";
	 	var trangThaiCua2ChuyenDong=0;
	 	var phanTuHienTai = slides[chiSoHienTai];

	 	// xac dinh chi so cua phan tu tiep theo dua tren phan tu hien tai
	 	if(chiSoHienTai <soLuongSlide - 1){ // chua den cuoi
	 		chiSoHienTai = chiSoHienTai +1;
	 	}else{//la phan tu cuoi cung roi
	 		chiSoHienTai = 0;
	 	}
	 	var phanTuTiepTheo = slides[chiSoHienTai];

	 	//check chuyen dong ket thuc
	 	var xuLyHienTaiKetThucCD=function(){
	 		this.classList.remove("dangxem");
	 		this.classList.remove("bienMatKhiAnNext");
	 		trangThaiCua2ChuyenDong++;
	 		if(trangThaiCua2ChuyenDong==2){trangThai = "dangDungYen";}
	 	}
	 	var xuLyTiepTheoKetThucCD = function(){
	 		this.classList.remove("diVaoKhiAnNext");
	 		this.classList.add("dangxem");
	 		trangThaiCua2ChuyenDong++;
	 		if(trangThaiCua2ChuyenDong==2){trangThai = "dangDungYen";}
	 	}

	 	//doituong.addEventListener("webkitAnimationEnd",function(){}) la check xem khi nao animation(chuyen dong) ket thuc
	 	//doituong chinh la cai khoi ma chinh no chuyen dong , neu doituong khong phai la khoi chuyen dong thi du dat doi tuong la gi no van khong thuc hien  
	 	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD);
	 	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD);
	 	// tao chuyen dong sau khi xac dinh duoc 2 phan tu
	 	phanTuHienTai.classList.add("bienMatKhiAnNext");
	 	phanTuTiepTheo.classList.add("diVaoKhiAnNext");
	 };
	 nutPhai.addEventListener("click", chuyenSlideChoNutPhai);
	 // Xong nut phai

	  //Goi su kien click vao nut trai
	 var chuyenSlideChoNutTrai = function(){
	 	if(trangThai=="dangChuyenDong"){return false;}
	 	trangThai = "dangChuyenDong";
	 // 1- Xac dinh duoc 2 phan , hien tai va tiep theo
	 // phan tu hien tai truoc
		 var phanTuHienTai = slides[chiSoHienTai];
		 var trangThaiCua2ChuyenDong=0;
		 // phan tu tiep theo
		 if(chiSoHienTai > 0){//chua den cuoi cung
		 	chiSoHienTai--;
		 }
		 else{//dang o phan tu dau tien, khong lui duoc nua,cho chuyen sang phan tu thu 5
		 	chiSoHienTai = soLuongSlide -1;
		 }
		 var phanTuTiepTheo=slides[chiSoHienTai];
		 //-----------------------
		 var xuLyHienTaiKetThucCD=function(){
		 	this.classList.remove("dangxem");
	 		this.classList.remove("bienMatKhiAnPrev");
	 		trangThaiCua2ChuyenDong++;
	 		if(trangThaiCua2ChuyenDong==2){trangThai = "dangDungYen";}
		 }
		 var xuLyTiepTheoKetThucCD=function(){
		 	this.classList.remove("diVaoKhiAnPrev");
	 		this.classList.add("dangxem");
	 		trangThaiCua2ChuyenDong++;
	 		if(trangThaiCua2ChuyenDong==2){trangThai = "dangDungYen";}
		 }
		 phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD);
		 phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD);

		 phanTuHienTai.classList.add("bienMatKhiAnPrev");
		 phanTuTiepTheo.classList.add("diVaoKhiAnPrev");

 	}
	 nutTrai.addEventListener("click",chuyenSlideChoNutTrai);	
	
},false)