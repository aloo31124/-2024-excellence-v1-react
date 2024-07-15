
import styles from "./ServiceList.module.css"

function ServiceList() {
    return(
        <section className={styles.serviceList}>
            <div className={styles.rightBlock}>
                <h2 className={styles.serviceListTitle}>服務項目</h2>
            </div>
            <div className={styles.leftBlock}>
                <div className={styles.item}>
                    <h3>PM 專案顧問</h3>
                    <p>
                        提供全方位網站顧問諮詢服務，包括網頁分析規劃、平面設計、網站上線、網頁操作培訓，
                        確保您的網站建置順利進行且維護得以持續。
                    </p>
                </div>
                <div className={styles.item}>
                    <h3>RWD 網頁設計</h3>
                    <p>
                        網站皆採用RWD嚮應式技術，無論您使用電腦、平板或手機，都能輕鬆流暢地瀏覽網站。
                    </p>
                </div>
                <div className={styles.item}>
                    <h3>SEO 搜尋引擎優化</h3>
                    <p>
                        我們專注於品牌電商網站的全面SEO優化，使您的商品在搜索排名中獲得更大的競爭優勢。
                    
                    </p>
                </div>
                <div className={styles.item}>
                    <h3>OPT 持續優化</h3>
                    <p>
                        提供網站操作教學和技術支援，專業人員指導您操作，讓您輕鬆掌握後台管理，維運更加順暢。
                    </p>
                </div>
            </div>

        </section>
    );
}

export default ServiceList;
