import "./Footer.css";
import iconLine from "../assets/icon/icon-line-green.png";

function Footer() {
    return (
        <div class="footer" id="footer">
            <div class="item-list">
                <div class="item">
                    <i class="">©</i>
                    <p>
                        2024 Copyright 網頁設計公司
                    </p>
                </div>
                <div class="item">
                    <i class="fas fa-envelope"></i>
                    <p>
                        webDesgin@gmail.com
                    </p>
                </div>
                <div class="item">
                    <i class="fas fa-phone"></i>
                    <p>
                        09-00000000
                    </p>
                </div>
                <div class="item">
                    <img src={iconLine} />
                </div>
            </div>
        </div>
    )
}
export default Footer;