import React, { useEffect, useRef, useState } from 'react';
//import styles from "./PortfolioSlide.module.css"
import './PortfolioSlide.css'

function PortfolioSlide() {
    
    return (
        <div className="portfolio-block" id="portfolio-block">
            <img className="background-round-traingle" src="./images/background/round-traingle.svg"/>
            <h2 className="portfolio-block-title" data-bg-color="#C3C3C3" data-fg-color="#00407E">作品集</h2>
            <p>
                我們對各產業的網頁設計都有不同的見解，能滿足不同客戶的需求。
            </p>  
            <div className="computer-background-img">
                <div className="portfolio-slide-list">
                    <input type="radio" id="portfolio1" name="control"/>
                    <input type="radio" id="portfolio2" name="control" />
                    <input type="radio" id="portfolio3" name="control" />
                    <input type="radio" id="portfolio4" name="control" />
                    <input type="radio" id="portfolio5" name="control" />
                    <input type="radio" id="portfolio6" name="control" />
                    <input type="radio" id="portfolio7" name="control" />
                    <input type="radio" id="portfolio8" name="control" />
                    <input type="radio" id="portfolio9" name="control" />
                    <input type="radio" id="portfolio10" name="control"/>
                    <input type="radio" id="portfolio11" name="control"/>
                    <input type="radio" id="portfolio12" name="control"/>
                    
                    <div className="portfolio-slide">
                        <a target="_blank" href="https://aloo31124.github.io/2024-html-css-layout/portfolio/TravelWebsite/index.html">
                            <img src="./images/portfolio-slide/portfolio-slide1.png" />
                        </a>                    
                    </div>
                    <div className="portfolio-slide">
                        <a target="_blank" href="https://aloo31124.github.io/2024-html-css-layout/portfolio/CoffeeWebsite/index.html">
                            <img src="./images/portfolio-slide/portfolio-slide2.png" />
                        </a>                    
                    </div>
                    <div className="portfolio-slide">
                        <a target="_blank" href="https://aloo31124.github.io/2024-html-css-layout/portfolio/PersonalPortfolio/home.html">
                            <img src="./images/portfolio-slide/portfolio-slide3.png" />
                        </a>                    
                    </div>
                    <div className="portfolio-slide">
                        <a target="_blank" href="https://aloo31124.github.io/2024-html-css-layout/portfolio/DentistWebsiteFrontend/index.html">
                            <img src="./images/portfolio-slide/portfolio-slide4.png" />
                        </a>                    
                    </div>
                    <div className="portfolio-slide">
                        <a target="_blank" href="https://aloo31124.github.io/2024-html-css-layout/portfolio/WeddingWebsite/index.html">
                            <img src="./images/portfolio-slide/portfolio-slide5.png" />
                        </a>                    
                    </div>
                    <div className="portfolio-slide">
                        <a target="_blank" href="https://aloo31124.github.io/2024-html-css-layout/portfolio/FoodWebsite/index.html">
                            <img src="./images/portfolio-slide/portfolio-slide6.png" />
                        </a>                    
                    </div>
                    <div className="portfolio-slide">
                        <a target="_blank" href="https://aloo31124.github.io/2024-html-css-layout/portfolio/AppLandingWebsite/index.html">
                            <img src="./images/portfolio-slide/portfolio-slide7.png" />
                        </a>                    
                    </div>
                    <div className="portfolio-slide">
                        <a target="_blank" href="https://aloo31124.github.io/2024-html-css-layout/portfolio/EdufordWebsite/index.html">
                            {/* <img src="./images/portfolio-slide/portfolio-slide8.png"> /</img> */}
                        </a>                    
                    </div>
                </div>
            </div>
            <div className="portfolio-slide-tab-list">
                <label className="tab" for="portfolio1">旅行</label>
                <label className="tab" for="portfolio2">咖啡店</label>
                <label className="tab" for="portfolio3">個人履歷</label>
                <label className="tab" for="portfolio4">牙醫醫美</label>
                <label className="tab" for="portfolio5">婚禮企劃</label>
                <label className="tab" for="portfolio6">餐廳</label>
                <label className="tab" for="portfolio7">應用程式</label>
                <label className="tab" for="portfolio8">教育</label>
            </div>
        </div>
    )

}

export default PortfolioSlide;