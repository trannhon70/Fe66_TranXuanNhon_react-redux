const stateDefault = {
    taiXiu: true,//true là tài (3->11) còn lại là xỉu
    mangXucSac: [
        { ma: 6, hinhAnh: './img/GameSucSac/6.png' },
        { ma: 6, hinhAnh: './img/GameSucSac/6.png' },
        { ma: 6, hinhAnh: './img/GameSucSac/6.png' }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
}



const BaiTapGameXuatSAcReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.taiXiu = action.taiXiu;
            return { ...state };
        }
        case 'PLAY_GAME': {
            //bước 1 xử lí rendom xúc sắc 
            let mangXucSacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                //mỗi lần lặp random ra sô ngẫu nhiên từ 1->6
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                //tạo ra 1 đối tượng xúc sắc ngẫu nhiên 
                let xucSacNgauNhien = { ma: soNgauNhien, hinhAnh: `./img/GameSucSac/${soNgauNhien}.png` };
                //push vào mảng xúc sắc ngẫu nhiên 
                mangXucSacNgauNhien.push(xucSacNgauNhien);
            }
            //gán state mangXucSac=mangxucsacngaunhien
            state.mangXucSac = mangXucSacNgauNhien;
            //xử lý tăng bàn chơi 
            state.tongSoBanChoi += 1;
            //xử lý số bàn thắng
            let tongSoDiem = mangXucSacNgauNhien.reduce((tongDiem, xucSac, index) => {
                return tongDiem += xucSac.ma;
            }, 0);
            if (tongSoDiem > 11 && state.taiXiu === true || (tongSoDiem <= 11 && state.taiXiu === false)) {
                state.soBanThang += 1;
            }
            
            return { ...state };

        }
        default: return { ...state }
    }
}

export default BaiTapGameXuatSAcReducer;