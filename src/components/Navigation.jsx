import React, { useState } from 'react';
import './Navigation.css'
import logo from '../assets/logo/logo.svg';
import iconHandShake from '../assets/icon/icon_handshake.svg';
import iconMenu from '../assets/icon/icon_handshake.svg';
import icon2Img from '../assets/icon/icon_2_img.svg';
import iconPhone from '../assets/icon/icon_handshake.svg';

function Navigation() {
    const [isOpen, setIsOpen] = useState(true); // 初始狀態為展開

    const toggleNav = () => {
      setIsOpen(!isOpen);
    };

    return (

            <div className="nav-container">
                <div className={`nav-centent ${isOpen ? '' : 'closed'}`}>
                    <a href="#" id="logo" className={`logo ${isOpen ? '' : 'closed'}`}>
                        <img src={logo} />
                    </a>
                    <div className={`item-list ${isOpen ? '' : 'closed'}`}>
                        <a className="item" href="#price-work-flow">
                            <img src={iconHandShake} />
                            <label>合作流程</label>
                        </a>
                        <a className="item" href="#service-list">
                            <img src={iconMenu} />
                            <label>服務項目</label>
                        </a>
                        <a className="item" href="#portfolio-block">
                            &nbsp;
                            <img src={icon2Img} />
                            <label>作品集</label>
                            &nbsp;
                        </a>
                        <a className="item" href="#footer">
                            <img src={iconPhone} />
                            <label>聯絡我們</label>
                        </a>
                        <div className="item fa fa-close" onClick={toggleNav}></div>
                    </div>
                    <div className={`item-bar ${isOpen ? '' : 'closed'}`} >
                        <div className="fa fa-bars" onClick={toggleNav}></div>
                    </div>
                </div>
                <div className={`text-bounce-bottom-box ${isOpen ? '' : 'closed'}`}>
                    <div className="text-bounce-bottom"></div>
                </div>
            </div>
    );
}

export default Navigation;

