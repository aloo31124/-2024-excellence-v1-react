
import './WorkFlowSlide.css';
import bgLeftLittleStar from '../assets/background/bg-left-little-star.png';
import bgRightStar from '../assets/background/bg-right-star.png';
import bgLeftBigBlock from '../assets/background/bg-left-big-block.png';

function WorkFlowSlide() {

    return (
        <section className="price-work-flow">
            <img className="left-little-img" src={bgLeftLittleStar}/>
            <img className="right-img" src={bgRightStar}/>
            <h2 className="price-work-flow-title" data-bg-color="#C3C3C3" data-fg-color="#00407E">合作流程</h2>
            <p>
                在尋找一個優流設計服務前，不妨先了解我們的服務流程。我們可將流程由繁化簡。
                <br/>
                必須由客戶與我們密切合作往來，替您取得優質成果。
            </p>
            <div className="price-work-flow-slide">
                <div className="flow-tab-list-container">
                    <div className="flow-tab-list">
                    
                        <div className="tab fa fa-search"></div>
                        <div className="fa fa-arrow-right"></div>
                        <div className="tab fa fa-code"></div>
                        <div className="fa fa-arrow-right"></div>
                        <div className="tab fa fa-check"></div>
                        <div className="fa fa-arrow-right"></div>
                        <div className="tab fa fa-upload"></div>
                         
                    </div>
                    <div className="price-work-flow-bounce-bottom-box">
                        <div className="price-work-flow-bounce-bottom"></div>
                    </div>
                </div>
                    
                <ul className="flow-slide-list">
                        <li className="slide" id="slide1">
                            <h3>01 需求分析</h3>
                            <p> 
                                1. 會請專業的顧問, 不只了解你的需求, 更是裡解你的痛點。
                                <b/>
                                2. 擬出初步專案管理規劃與簡易UI畫面來幫助團隊的討論。
                            </p>
                        </li>
                        <li className="slide" id="slide2">
                            <h3>02 開發回饋</h3>
                            <p>
                                1. 簽約後, 技術團隊便會立刻開發, 並在開發的各個階段與您確認, 保持期望一致。
                                <br/>
                                2. 團隊致力於敏捷開發, 若客戶有其他期待, 可在一定範圍內調整。
                            </p>
                        </li>
                        <li className="slide" id="slide3">
                            <h3>03 驗收優化</h3>
                            <p>
                                1. 協助將網站上架, 網域等相關設定建置。
                                <br/>
                                2. 可是情況教育訓練, 讓客戶更理解操作。
                            </p>
                        </li>
                        <li className="slide" id="slide4">
                            <h3>04 維護持續優化</h3>
                            <p>
                                1. 上架後若有任何疑問, 都能協助您維護與強化。
                                <br/>
                                2. 每年定期都可有進一步的客製優惠訪談, 如: 介面美化, 功能升級等......。
                            </p>
                        </li>

                        <div className="flow-button-icon-list">
                            <label id="flowIcon1"></label>
                            <label id="flowIcon2"></label>
                            <label id="flowIcon3"></label>
                            <label id="flowIcon4"></label>
                        </div>
                </ul>
            </div>
        </section>
    );
}

export default WorkFlowSlide;

