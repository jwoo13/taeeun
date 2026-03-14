import { useState } from "react";
import "./Letter.css";

export default function Letter(){

    const [page, setPage] = useState(1);
    const [animate, setAnimate] = useState(false);

    const nextPage = () => {

        setAnimate(true);

        setTimeout(()=>{
            setPage(prev => prev + 1);
            setAnimate(false);
        },200);

    };

    const prevPage = () => {

        setAnimate(true);

        setTimeout(()=>{
            setPage(prev => prev - 1);
            setAnimate(false);
        },200);

    };

    return(

        <div className={`letter ${animate ? "pageOut" : "pageIn"}`}>

            {page === 1 && (
                <>
                    <h2>태은이에게</h2>

                    <p>
                        뭔가 색다른 이벤트를 해주고 싶어서<br/>
                        나름대로 준비 해 봤는데 음..좋아할지 모르겠네<br/>
                        헤헤.. 기념일엔 손편지 써줄겡<br/><br/>
                        우리가 벌써 만난지 한달이 지났더라구<br/>
                        시간 많이 빠르더라<br/>
                        짧은 시간이지만 너랑 있으면서<br/>
                        꽤 많은 추억을 쌓은 것 같아<br/>
                        그 추억 안에서 너라는 사람이 어떤 사람인지<br/>
                        많은 걸 알아갈 수 있었던 것 같아<br/>
                    </p>
                </>
            )}

            {page === 2 && (
                <>
                    <p>
                        너가 뭘 싫어하고 뭘 좋아하는지...<br/>
                        나한테 어떤 감정을 가지고 있고 궁시렁 궁시렁,,<br/>
                        아무튼 정말 짧은 시간에 여자친구인 너를 <br/>
                        바라보면서 든 생각은 이렇게 좋은 사람이 <br/>
                        내 여자친구라고? 너무 행복하다였어 ㅎ,,<br/>
                        <br/>
                        알면 알수록 정말 마음이 깊은 아이고 <br/>
                        생각보다 여리면서 나를 정말로 <br/>
                        좋아해주는게 느껴지는게 하루하루가<br/>
                        진심으로 행복하고 소중하게 느껴져<br/>
                        <br/>
                    </p>
                </>
            )}

            {page === 3 && (
                <>
                    <p>
                        뭔가 너라면 내 모든걸 줘도 될 것 같구<br/>
                        내 인생에서 이제 너가 없으면 안될 것 같아<br/>
                        그만큼 나한텐 너가 너무나 소중하고 <br/>
                        정말로 사랑하는 사람인것 같아..//<br/>
                        <br/>
                        사귀기 시작한 후로 점점 이 감정들이 커져갔고<br/>
                        단 하루라도 떨어져 있으면 너무 보고싶어 <br/>
                        이렇게 사랑하는 사람을 대학교에서 만난게<br/>
                        정말 행운인 것 같아 만약에 너가 없었다면<br/>
                        지루하게 남은 학교 생활들 보내면서 <br/>
                        <br/>
                    </p>
                </>
            )}

            {page === 4 && (
                <>
                    <p>
                        재미없고 별다른 추억없는 졸업을 했을 거야<br/>
                        같이 있기만 해도 나한텐 큰 추억이고 <br/>
                        너랑하는 모든 것들은 나한텐 정말 <br/>
                        소중한 추억들이 될 것 같아<br/>
                        너도 그렇겠지? 헤헤<br/>
                        <br/>

                        정말 너무 많이 사랑하구 <br/>
                        지금으로도 너가 표현하는 행동들이 <br/>
                        나한텐 너무 잘 와닿구 얼만큼<br/>
                        나를 사랑하는게 정말 잘 느껴져!!<br/>

                        <br/>
                    </p>
                </>
            )}

            {page === 5 && (
                <>
                    <p>
                        그니까 너무 걱정하지 말고 앞으로도<br/>
                        지금같이 서로 더 많이 알아가고<br/>
                        데이트도 많이 하구 맛있는 것도 많이 <br/>
                        먹으러 댕기면서 학교생활 재밌게 보내자<br/><br/>

                        내가 진심으로 사랑하는 사람이 너여서<br/>
                        너무 행복하고 앞으로도 더 같이 잘 <br/>
                        지내보장<br/>
                        <br/>
                        항상 사랑하는 태은아 내 옆에 있어줘서<br/>
                        너무 고맙고 항상 사랑해 💗
                        <br/>
                        <br/>
                    </p>
                </>
            )}

            {/* 다음 페이지 */}
            {page < 5 && (
                <button className="nextBtn" onClick={nextPage}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            )}

            {/* 이전 페이지 */}
            {page > 1 && (
                <button className="prevBtn" onClick={prevPage}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
            )}

        </div>

    )

}