import React, { Component } from 'react'
import './BaiTapOanTuTi.css'
import Computer from './Computer';
import Player from './Player';
import KetQuaTroChoi from './KetQuaTroChoi';
import { connect} from 'react-redux';

 class BaiTapOanTuTi extends Component {
     
    render() {
        return (
            <div className="gameOanTuTi">
                
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />
                    </div>    
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button onClick={()=>{
                            this.props.playGame();
                        }} className="btn btn-primary p-2 display-4">Play game</button>
                    </div>    
                    <div className="col-4">
                        <Computer />
                    </div>    
                </div>         
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        playGame:()=>{
            let count=0;
            //khai báo hàm lặp đi lặp lại 
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type:'Ran_Dom',
                })
                count ++;
                if(count >20){
                    //dừng hàm setInterval
                    clearInterval(randomComputerItem);

                    dispatch({
                        type:'end_game',
                    })
                }
            },100)
            
        }
    }
}

export default connect(null,mapDispatchToProps)(BaiTapOanTuTi);