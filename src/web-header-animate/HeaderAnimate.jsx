
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
                    <div className="move-slogn-right">教育旅行咖啡花店</div>
                </div>
                <div className="center-title">
                    <h1 className="">艾陞倫 We're Excellence!</h1>
                    <p className="slogan-little">我們熱愛學習溝通, 您值得信賴的合作夥版</p>
                </div>
                <div className="move-slogn-container">
                    <div className="move-slogn-left">設計SSL安全憑證</div>
                </div>            
            </div>
        </section>

    );

}

export default HeaderAnimate;

