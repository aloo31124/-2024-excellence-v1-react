
import './Navigation.css'
import logo from '../assets/logo/logo.svg';
import iconHandShake from '../assets/icon/icon_handshake.svg';
import iconMenu from '../assets/icon/icon_handshake.svg';
import icon2Img from '../assets/icon/icon_2_img.svg';
import iconPhone from '../assets/icon/icon_handshake.svg';

function Navigation() {
    
    return (

            <div className="nav-container">
                <div className="nav-centent">
                    <a href="#" id="logo" className="logo">
                        <img src={logo} />
                    </a>
                    <div className="item-list">
                        <a className="item" id="nav-item1" href="#price-work-flow">
                            <img src={iconHandShake} />
                            <label>合作流程</label>
                        </a>
                        <a className="item" id="nav-item2" href="#service-list">
                            <img src={iconMenu} />
                            <label>服務項目</label>
                        </a>
                        <a className="item" id="nav-item3" href="#portfolio-block">
                            &nbsp;
                            <img src={icon2Img} />
                            <label>作品集</label>
                            &nbsp;
                        </a>
                        <a className="item" id="nav-item4" href="#footer">
                            <img src={iconPhone} />
                            <label>聯絡我們</label>
                        </a>
                    </div>
                </div>
                <div className="text-bounce-bottom-box">
                    <div className="text-bounce-bottom"></div>
                </div>
            </div>
    );
}

export default Navigation

