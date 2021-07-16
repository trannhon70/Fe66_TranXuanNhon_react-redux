
const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/GameOanTuTi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/GameOanTuTi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/GameOanTuTi/bao.png', datCuoc: true },
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/GameOanTuTi/keo.png' },
}


const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'chon_keo_bua_bao': {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false };
            })
            state.mangDatCuoc = mangCuocUpdate
            return { ...state };
        }
        case 'Ran_Dom': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc
            [soNgauNhien];
            state.computer = quanCuocNgauNhien;
            //console.log('random' , action);
            return { ...state };
        }
        case 'end_game': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'hòa nhau !!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'bạn đã thua sml !!!';
                    }
                    else {
                        state.soBanThang += 1;
                        state.ketQua = 'chúc mừng bạn đã chiến thắng haha...';
                    }; break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = 'chúc mừng bạn đã chiến thắng haha...';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'hòa nhau !!!';
                    }
                    else {
                        state.ketQua = 'bạn đã thua sml !!!';
                    }; break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'bạn đã thua sml !!!';
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;
                        state.ketQua = 'chúc mừng bạn đã chiến thắng haha...';
                    }
                    else {
                        state.ketQua = 'hòa nhau !!!';
                    }; break;
                default:
                    state.soBanThang += 1;
                    state.ketQua = 'chúc mừng bạn đã chiến thắng haha...';
                    break;

            }
            state.soBanChoi += 1;
            return { ...state };
        }

        default: return { ...state }
    }
}

export default BaiTapOanTuTiReducer;