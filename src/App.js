import "./App.css";
import kitty from "./kitty.gif";
import backImage from "./back.jpg";

import icon1 from "./1.gif";
import icon2 from "./2.gif";
import icon3 from "./3.gif";
import icon4 from "./4.gif";

export default function App() {
    return (
        <div
            className="wrapper"
            style={{
                backgroundImage: `url(${backImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="card">
                <div className="content">
                    <div className="left">
                        <img src={kitty} alt="hello kitty" className="kitty" />
                    </div>

                    <div className="right">
                        <div className="decor">ʚ ♡ ɞ</div>
                        <h1 className="title">김태은!</h1>
                        <p className="subtitle">» Kim tae-eun :) «</p>

                        <div className="info-section">
                            <p className="info">항상 사랑하는 너에게</p>
                            <p className="info">뭘 만들지 고민하다가</p>
                            <p className="info">기억에 남을만한 걸 만들어 봤엉</p>
                        </div>

                        <div className="icons">
                            <img src={icon1} alt="icon1"/>
                            <img src={icon2} alt="icon2"/>
                            <img src={icon3} alt="icon3"/>
                            <img src={icon4} alt="icon4"/>
                        </div>
                        <p className="click-text">click click click!</p>

                        <div className="buttons">
                            {/* 버튼을 하나로 합치고 중앙 정렬을 위해 클래스 유지 */}
                            <button className="btn">클릭해봐</button>
                        </div>
                    </div>
                </div>

                <div className="credit">
                    정우가 만들었음!
                </div>
            </div>
        </div>
    );
}