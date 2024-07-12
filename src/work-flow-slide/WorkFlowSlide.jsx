
import './WorkFlowSlide.css';
import bgLeftLittleStar from '../assets/background/bg-left-little-star.png';
import bgRightStar from '../assets/background/bg-right-star.png';
import bgLeftBigBlock from '../assets/background/bg-left-big-block.png';
import { useRef } from 'react';

function WorkFlowSlide() {

    // 輪播圖 所有圖片列表
    const flowSlideList = useRef();

    /* 
     * 位移輪播圖
     */
    const moveSlide = (index) => {
        flowSlideList.current.style.transition = "0.5s ease-in-out"; // 水平滑動動畫效果
        flowSlideList.current.style.left = (index * -800) + 'px';
    }

    return (
        <section className="price-work-flow" id="price-work-flow">
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
                        <div className="tab fa fa-search" onClick={() => moveSlide(0)}></div>
                        <div className="fa fa-arrow-right"></div>
                        <div className="tab fa fa-code"   onClick={() => moveSlide(1)}></div>
                        <div className="fa fa-arrow-right"></div>
                        <div className="tab fa fa-check"  onClick={() => moveSlide(2)}></div>
                        <div className="fa fa-arrow-right"></div>
                        <div className="tab fa fa-upload" onClick={() => moveSlide(3)}></div>
                    </div>
                </div>
                    
                <div className="flow-slide-list-rail">
                    <div className="flow-slide-list" ref={flowSlideList}>
                        <div className="slide" id="slide1">
                            <h3>01 需求分析</h3>
                            <p> 
                                1. 會請專業的顧問, 不只了解你的需求, 更是裡解你的痛點。
                                <br/>
                                2. 擬出初步專案管理規劃與簡易UI畫面來幫助團隊的討論。
                            </p>
                        </div>
                        <div className="slide" id="slide2">
                            <h3>02 開發回饋</h3>
                            <p>
                                1. 簽約後, 技術團隊便會立刻開發, 並在開發的各個階段與您確認, 保持期望一致。
                                <br/>
                                2. 團隊致力於敏捷開發, 若客戶有其他期待, 可在一定範圍內調整。
                            </p>
                        </div>
                        <div className="slide" id="slide3">
                            <h3>03 驗收優化</h3>
                            <p>
                                1. 協助將網站上架, 網域等相關設定建置。
                                <br/>
                                2. 可是情況教育訓練, 讓客戶更理解操作。
                            </p>
                        </div>
                        <div className="slide" id="slide4">
                            <h3>04 維護持續優化</h3>
                            <p>
                                1. 上架後若有任何疑問, 都能協助您維護與強化。
                                <br/>
                                2. 每年定期都可有進一步的客製優惠訪談, 如: 介面美化, 功能升級等......。
                            </p>
                        </div>
                    </div>

                    <div className="flow-button-icon-list">
                        <label id="flowIcon1" onClick={() => moveSlide(0)}></label>
                        <label id="flowIcon2" onClick={() => moveSlide(1)}></label>
                        <label id="flowIcon3" onClick={() => moveSlide(2)}></label>
                        <label id="flowIcon4" onClick={() => moveSlide(3)}></label>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkFlowSlide;

