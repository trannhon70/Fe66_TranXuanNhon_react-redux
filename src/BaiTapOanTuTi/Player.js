import React, { Component } from 'react'
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        console.log('props',this.props.mangDatCuoc);
        return (
            <div className="text-center player">
                <div className="TheThink">
                    <img style={{transform:'rotate(120deg)'}} className="mt-4" with={50} height={50} src={this.props.mangDatCuoc.find(item=> item.datCuoc===true).hinhAnh} alt="..."/>
                </div>
                <div className="speech-bubble"></div>
                <img with={200} height={130} src="./img/GameOanTuTi/player.png" alt="..." />
                <div className="row">
                    {this.props.mangDatCuoc.map((item,index)=>{
                        //xét giá trị đặt cược thêm viền cho item được chọn 
                        let border = {};
                        if(item.datCuoc){
                            border = {border : '3px solid orange'}
                        }
                        return <div className="col-4">
                            <button onClick={()=>{
                                this.props.datCuoc(item.ma);
                            }} style={border} className="btnItem">
                                <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                        </div>
                    })}
                    {/* <div className="col-4">
                        <button className="btnItem">
                            <img with={50} height={50} src="./img/GameOanTuTi/keo.png" alt="./img/GameOanTuTi/keo.png" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                            <img with={50} height={50} src="./img/GameOanTuTi/bua.png" alt="./img/GameOanTuTi/bua.png" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                            <img with={50} height={50} src="./img/GameOanTuTi/bao.png" alt="./img/GameOanTuTi/bao.png" />
                        </button>
                    </div> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc)=>{
            dispatch({
                type: 'chon_keo_bua_bao',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);