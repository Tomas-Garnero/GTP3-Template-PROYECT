import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div className="gpt3__brand__img-size">
                <img src={google} alt="google" />
            </div>
            <div className="gpt3__brand__img-size">
                <img src={slack} alt="slack" />
            </div>
            <div className="gpt3__brand__img-size">
                <img src={dropbox} alt="dropbox" />
            </div>
            <div className="gpt3__brand__img-size">
                <img src={shopify} alt="shopify" />
            </div> 
            <div className="gpt3__brand__img-size">
                <img src={atlassian} alt="atlassian" />
            </div>
        </div>
    )
}

export default Brand;
