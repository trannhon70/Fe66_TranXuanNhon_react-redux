import React, { Component } from 'react'
import { connect } from 'react-redux';

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -30px}
            25% {top: 30px}
            50% {top: -30px}
            75% {top: 30px}
            100% {top: 0px}
        } `
        return (
            <div className="text-center player">
                <style>
                    {keyframe}
                </style>
                <div className="TheThink " style={{position:'relative'}}>
                    <img style={{
                        animation: `randomItem${Date.now()} 0.5s`,
                        transform: 'rotate(120deg)',
                        position:'absolute',
                        left:'30%',


                    }} className="mt-4" with={50} height={50} src={this.props.computer.hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img with={200} height={130} src="./img/GameOanTuTi/playerComputer.png" alt="..." />

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuTiReducer.computer,
    }
}

export default connect(mapStateToProps)(Computer);
