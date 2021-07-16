import React, { Component } from 'react'
import BaiTapGioHangRedux from './BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapGameXuatSacRedux from './BaiTapGameXuatSac/BaiTapGameXuatSacRedux';
import BaiTapOanTuTi from './BaiTapOanTuTi/BaiTapOanTuTi';

export default class App extends Component{
  render() {
    return (
      <div>
        {/* <BaiTapGioHangRedux /> */}
        <BaiTapGameXuatSacRedux />
        {/* <BaiTapOanTuTi/> */}
      </div>
    )
  }
}
