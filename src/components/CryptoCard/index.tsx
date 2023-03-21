import React from 'react'
import CardFrame from '../../assets/cardFrame.svg'
import Chip from '../Chip'
import solanasmall from '../../assets/solanasmall.png';
import ethsmall from '../../assets/ethersmall.png';
import binancesmall from '../../assets/binancesmall.png';
import CircleContainer from "../CircleContainer";
import "./crypto.css"





function index() {
    return (
        <div className='card-style'>
            <div className='card-conatiner'>
                <div className='card-icon'>  <CircleContainer  /> </div>
                <div className='card-vector'>
                    <img src={CardFrame} />

                    <div className='card-frame'>
                        <div className='card-header'>{`Bitcoin (BTC)`}</div>
                        <div className='padding'>
                            <Chip isDiscount={true} cost={"31,812.80"} /></div>
                        <div className='card-header'>{`Price`}</div>
                        <div className='padding'>
                            <Chip isDiscount={false} cost={"60,000"} /></div>
                        <div className='card-header'>{`TVL`}</div>
                        <div className='chip-icon-container'>
                            <div className='icon-container'><img src={solanasmall} width={22} height={22} /></div>
                            <div className='icon-container'><img src={ethsmall} width={22} height={22} /></div>
                            <div className='icon-container'> <img src={binancesmall} width={22} height={22} /></div>
                        </div>
                        <div className='card-header'>{`Popular Pairs`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index;