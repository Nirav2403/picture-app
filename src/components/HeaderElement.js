import React from 'react';
import Twitter from '../icons/twitter.png';
import Instagram from '../icons/instagram.png';
import Facebook from '../icons/facebook.png'

const HeaderElement = () => {
    return (
        <>
            <div className="header-container">
                <div className="header-title-container">
                    <div className="header-title-name">Protograpy shop</div>
                    <div className="header-btns-menu">
                        <button type="button" className="header-btn"><img className="header-image" src={Twitter} alt="" /></button>
                        <button type="button" className="header-btn"><img className="header-image" src={Facebook} alt="" /></button>
                        <button type="button" className="header-btn"><img className="header-image" src={Instagram} alt="" /></button>
                        <button type="button" className="header-btn"><i className="fas fa-list header-icon"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default (HeaderElement)