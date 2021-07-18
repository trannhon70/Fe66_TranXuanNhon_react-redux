import { DAT_GHE ,HUY_GHE} from "../types/BaiTapDatVeTypes";

const stateDefault = {
    danhSachGheDangDat: [

    ]
}

const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {//khi người dùng cick ghế đang đặt đã có trong mảng => remove
                danhSachGheDangUpdate.splice(index, 1);
            }
            else {// 
                danhSachGheDangUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangUpdate;
            return { ...state };
        }
        case HUY_GHE:{
            let danhSachGheDangUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {//khi người dùng cick ghế đang đặt đã có trong mảng => remove
                danhSachGheDangUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat= danhSachGheDangUpdate;
            return {...state};
        }
        default: return { ...state }
    }
}

export default BaiTapDatVeReducer;