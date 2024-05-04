
import './Navigation.css'

function Navigation() {
    
    return (

            <div className="nav-container">
                <div className="nav-centent">
                    <div className="item-list">
                        <a className="item" id="nav-item1" href="#price-work-flow">
                            <label>合作流程</label>
                        </a>
                        <a className="item" id="nav-item2" href="#service-list">
                            
                            <label>服務項目</label>
                        </a>
                        <a className="item" id="nav-item3" href="#portfolio-block">
                            &nbsp;
                            
                            <label>作品集</label>
                            &nbsp;
                        </a>
                        <a className="item" id="nav-item4" href="#footer">
                            
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

