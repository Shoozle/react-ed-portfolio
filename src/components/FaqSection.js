import styled from "styled-components";
import { About } from "../styles";

import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, enim.</p>
                    </div>
                </Toggle>
                <Toggle title="Well, how did I get here?">

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, enim.</p>
                    </div>
                </Toggle>
                <Toggle title="What happened to my beautiful wife?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, enim.</p>
                    </div>
                </Toggle>
                <Toggle title="What happened to my beautiful house?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, enim.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
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