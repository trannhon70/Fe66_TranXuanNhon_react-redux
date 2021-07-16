import React, { Component } from 'react'
import {connect} from 'react-redux';

 class XuatSac extends Component {
     renderXucSac=()=>{
         //lấy props từ reducer về
         return this.props.mangXucSac.map((xucSac,index)=>{
             return <img key={index} className="ml-2" style={{width:50, height:50}} src={xucSac.hinhAnh} alt={xucSac.hinhAnh}/>
         })
     }
    render() {
        return (
            <div>
                {this.renderXucSac()}
                {/* <img className="ml-2" width={40} height={40} src="./img/GameSucSac/1.png" alt="..." />
                <img className="ml-2" width={40} height={40} src="./img/GameSucSac/2.png" alt="..." />
                <img className="ml-2" width={40} height={40} src="./img/GameSucSac/3.png" alt="..." /> */}
            </div>
        )
    }
}
//hàm lấy state từ redux về thành props của component 
const mapStateToProps = state => {
    return {
        mangXucSac: state.BaiTapGameXuatSAcReducer.mangXucSac
    }
}

export default connect(mapStateToProps)(XuatSac);
