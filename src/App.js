import { useEffect, useState } from "react";
import "./App.css";
import kitty from "./kitty.gif";
import backImage from "./back.jpg";

import icon1 from "./1.gif";
import icon2 from "./2.gif";
import icon3 from "./3.gif";
import icon4 from "./4.gif";

import Letter from "./Letter";

export default function App() {

    const [petals, setPetals] = useState([]);
    const [openLetter, setOpenLetter] = useState(false);
    const [showTransition, setShowTransition] = useState(false);

    useEffect(() => {
        const newPetals = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 5
        }));
        setPetals(newPetals);
    }, []);

    const handleClick = () => {

        setShowTransition(true);

        setTimeout(() => {
            setOpenLetter(true);

            setTimeout(() => {
                setShowTransition(false);
            }, 1500);

        }, 300);

    };

    return (
        <div
            className="wrapper"
            style={{
                backgroundImage: `url(${backImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

            {/* 하트 떨어짐 (편지 열리면 제거) */}
            {!openLetter && (
                <div className="sakura-container">
                    {petals.map((petal) => (
                        <div
                            key={petal.id}
                            className="sakura"
                            style={{
                                left: `${petal.left}%`,
                                animationDuration: `${petal.duration}s`,
                                animationDelay: `${petal.delay}s`
                            }}
                        />
                    ))}
                </div>
            )}

            {/* 흰색 전환 */}
            {showTransition && <div className="white-transition"></div>}

            {!openLetter ? (

                <div className="card">

                    <div className="content">

                        <div className="left">
                            <img src={kitty} alt="hello kitty" className="kitty"/>
                        </div>

                        <div className="right">

                            <div className="decor">ʚ ♡ ɞ</div>

                            <h1 className="title">김태은!</h1>

                            <p className="subtitle">
                                » Kim tae-eun :) «
                            </p>

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

                            <p className="click-text">
                                click click click!
                            </p>

                            <div className="buttons">
                                <button
                                    className="btn"
                                    onClick={handleClick}
                                >
                                    클릭해봐
                                </button>
                            </div>

                        </div>

                    </div>

                    <div className="credit">
                        정우가 만들었음!
                    </div>

                </div>

            ) : (

                <Letter/>

            )}

        </div>
    );
}