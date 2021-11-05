import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, enim.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Well, how did I get here?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, enim.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What happened to my beautiful wife?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, enim.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What happened to my beautiful house?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, enim.</p>
                </div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
    display:block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question {
        padding: 1.5rem 0;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0;
        p {
            padding: 1rem 0;
        }
    }
`

export default FaqSection