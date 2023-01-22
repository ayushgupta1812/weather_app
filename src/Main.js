import React from 'react';
import WeekInfo from './WeekInfo';
import ChooseState from './ChooseState';
import Humidity from './Humidity';
import DaysInfo from './DaysInfo';
const Main = () => {
    return (
        <>
            <div className='homeWrap'>
                <div className='weatherSection'>
                    <DaysInfo />
                    <div className='rightSide'>
                        <ChooseState />
                        <WeekInfo />
                        <Humidity />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;