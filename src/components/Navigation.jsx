import React, { useState, useRef } from 'react';
import './Navigation.css'
import logo from '../assets/logo/logo.svg';
import iconHandShake from '../assets/icon/icon_handshake.svg';
import iconMenu from '../assets/icon/icon_handshake.svg';
import icon2Img from '../assets/icon/icon_2_img.svg';
import iconPhone from '../assets/icon/icon_handshake.svg';

function Navigation() {

    /* 導覽列收合 */
    const [isOpen, setIsOpen] = useState(true); 
    const toggleNav = () => {
      setIsOpen(!isOpen);
    };

    /* 藍色底線位移 */
    const [boxLeft, setBoxLeft] = useState("21%"); 
    const logoRef = useRef(null);
    const itemsRef = useRef([]);
    const handleItemClick = (index) => {
        const selectedItem = itemsRef.current[index];
        console.log(selectedItem.getBoundingClientRect());
        const itemRect = selectedItem.getBoundingClientRect();
        const containerRect = logoRef.current.getBoundingClientRect();
        const newLeft = itemRect.left - containerRect.left + itemRect.width / 2 ;
        setBoxLeft(newLeft);
    };

    return (

            <div className="nav-container">
                <div className={`nav-centent ${isOpen ? '' : 'closed'}`}>
                    <a href="#" id="logo" ref={logoRef}  className={`logo ${isOpen ? '' : 'closed'}`}>
                        <img src={logo} />
                    </a>
                    <div className={`item-list ${isOpen ? '' : 'closed'}`}>
                            <a 
                                className="item" 
                                href="#price-work-flow"
                                ref={el => itemsRef.current[0] = el}
                                onClick={() => handleItemClick(0)}
                            >
                                <img src={iconHandShake} alt="合作流程" />
                                <label>合作流程</label>
                            </a>
                            <a 
                                className="item" 
                                href="#service-list"
                                ref={el => itemsRef.current[1] = el}
                                onClick={() => handleItemClick(1)}
                            >
                                <img src={iconMenu} alt="服務項目" />
                                <label>服務項目</label>
                            </a>
                            <a 
                                className="item" 
                                href="#portfolio-block"
                                ref={el => itemsRef.current[2] = el}
                                onClick={() => handleItemClick(2)}
                            >
                                <img src={icon2Img} alt="作品集" />
                                <label>作品集</label>
                            </a>
                            <a 
                                className="item" 
                                href="#footer"
                                ref={el => itemsRef.current[3] = el}
                                onClick={() => handleItemClick(3)}
                            >
                                <img src={iconPhone} alt="聯絡我們" />
                                <label>聯絡我們</label>
                            </a>
                        <div className="item fa fa-close" onClick={toggleNav}></div>
                    </div>
                    <div className={`item-bar ${isOpen ? '' : 'closed'}`} >
                        <div className="fa fa-bars" onClick={toggleNav}></div>
                    </div>
                </div>
                <div className={`text-bounce-bottom-box ${isOpen ? '' : 'closed'}`} style={{ left: boxLeft }}>
                    <div className="text-bounce-bottom"></div>
                </div>
            </div>
    );
}

export default Navigation;

