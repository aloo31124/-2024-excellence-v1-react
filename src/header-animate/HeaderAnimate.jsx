
import './HeaderAnimate.css';
import bgLeftLittleStar from '../assets/background/bg-left-little-star.png';
import bgRightStar from '../assets/background/bg-right-star.png';
import bgLeftBigBlock from '../assets/background/bg-left-big-block.png';

function HeaderAnimate() {

    return(
        
        <section className="header-animation">

            <img className="head-right-little-img" src={bgLeftLittleStar}/>
            <img className="head-left-img" src={bgRightStar}/>
            <img className="head-right-img" src={bgLeftBigBlock}/>

            <div className="header-animation-text-content">
                <div className="move-slogn-container">
                    <div className="move-slogn-right">企業網站。形象網站</div>
                </div>
                <div className="center-title">
                    <h1 className="">網頁設計。官方網站</h1>
                    <p className="slogan-little">專業網頁設計，塑造您的獨特品牌形象，讓您在網絡世界中脫穎而出</p>
                </div>
                <div className="move-slogn-container">
                    <div className="move-slogn-left">UI/UX。RWD。SEO</div>
                </div>            
            </div>
        </section>

    );

}

export default HeaderAnimate;

