import { combineReducers } from "redux";
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGameXuatSAcReducer from './BaiTapXuatSacReducer';
import BaiTapOanTuTiReducer from './BaiTapOanTuTiReducer';
import BaiTapDatVeReducer from './BaiTapDatVeReducer'

const rootReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer,
    BaiTapGameXuatSAcReducer ,//state của game xuất sắc
    BaiTapOanTuTiReducer, //state bài tập oản tù tì 
    BaiTapDatVeReducer, //state bài tập đặt vé
})

export default rootReducer;