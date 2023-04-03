import 'animate.css';

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
    return (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text animate__animated animate__fadeInLeft animate__slower 1s">
                Let's Build
            </h1>
            <h1 className="gradient__text animate__animated animate__fadeInRight animate__delay-2s animate__slower 1s">
                Something amazing
            </h1>
            <h1 className="gradient__text animate__animated animate__fadeInLeft animate__delay-3s animate__slower 1s">
                with GPT-3 OpenAI
            </h1>

            <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button" className='animate__animated animate__pulse animate__infinite'>
                    Get Started
                </button>
            </div>
            <div className="gpt3__header-content__people">
                <img src={people} alt="people" />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
        </div>
    </div>
    )
}

export default Header