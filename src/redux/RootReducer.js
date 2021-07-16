import { combineReducers } from "redux";
import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer'
import BaiTapGameXuatSAcReducer from './BaiTapXuatSacReducer';
import BaiTapOanTuTiReducer from './BaiTapOanTuTiReducer';

const rootReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer,
    BaiTapGameXuatSAcReducer ,//state của game xuất sắc
    BaiTapOanTuTiReducer, //state bài tập oản tù tì 
})

export default rootReducer;