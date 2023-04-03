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


{/* <div>
    <img src={google1} alt="google" width={180} />
</div>
<div>
    <img src={slack1} alt="slack"  width={125}  />
</div>
<div>
    <img src={dropbox1} alt="dropbox" width={150} />
</div>
<div>
    <img src={shopify1} alt="shopify" width={150} />
</div> 
<div>
    <img src={atlassian1} alt="atlassian" width={135} />
</div> */}