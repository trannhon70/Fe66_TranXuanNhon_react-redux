import React, { Component } from 'react';
import './BaiTapBookingTecKet.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import DanhSachGheData from '../Data/danhSachGhe.json'; 
import HangGhe from './HangGhe';
export default class BaiTapBookingTecKet extends Component {

    renderHangGhe=()=>{
        return DanhSachGheData.map((hangGhe, index)=>{
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }

    render() {
        return (
            <div className="bookingMovie" style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/BookingChecket/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', position: 'fixed', width: '100%', height: '100%' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center mt-3">
                                <h1 className="text-warning ">đặt vé xem phim </h1>
                                <div className="mt-1 text-primary" style={{ fontSize: '25px' }}>Màn hình </div>
                                <div className="mt-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                    <div className="screen"></div>
                                    {this.renderHangGhe()}
                                </div>
                                
                            </div>
                            
                            <div className="col-4 mt-3">
                                <h1 className="text-white" style={{fontSize:'30px'}}>Danh sách ghế bạn chọn  </h1>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
