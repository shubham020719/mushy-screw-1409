import { Button } from "@chakra-ui/react";
import "../pages/HomepageBody/slide.css"
import review from "../images/review.png"
import "./dynamic.css"
import down1 from "../images/down1.png"
import down2 from "../images/down2.png"
import down3 from "../images/down3.png"
import Footerfun from "../pages/HomepageBody/footerfolder/Footer";

export default function Dynamic() {
    let data = JSON.parse(localStorage.getItem("dynamicprdt"));
    console.log(data);
    function cartData() {
        let s1 = JSON.parse(localStorage.getItem("cartData")) || [];
        s1.push(data);
        localStorage.setItem("cartData", JSON.stringify(s1));
        alert("Product Added to Cart Successfully");
        window.location.reload();
    }
    return (
        <>
            <div className="dynamicfull">
                <div className="dynamicfullfirst">
                    <img className="bigImg" src={data.imgurl} alt="prdctImg" />
                </div>
                <div className="dynamicfullsecond">
                    <h1 className="boldText">{data.h3}</h1>
                    <h1 className="smallText">{data.p}</h1>
                    <img className="reviewImg" src={review} alt="prdctImg" />
                    <p className="cutPriceDynamicPage">MRP:₹ {data.span}</p>
                    <p className="finalPriceDynamicPage">Sale Price: ₹{data.price}</p>
                    <p className="smallstatic">Or ₹ 132 (Simpl/Axio/Bajaj/Zest/Cards) </p>
                    <p className="smallstatic">Includes GST of ₹ 427 </p>
                    <p className="anotherText">Type: {data.h3} without Mic</p>
                    <div className="btnrows">
                        <Button className="btnxx">With Mice</Button>
                        <Button className="btnxx">Without Mice</Button>
                    </div>
                    <br></br>
                    <p>color :</p>
                    <div className="btnrows">
                        <img className="smallImg" src={data.imgurl} alt="prdctImg" />
                        <img className="smallImg" src={data.imgurl} alt="prdctImg" />
                    </div>
                    <button className="cartButton" onClick={cartData}>Add To Cart</button>
                    <img src={down1} alt="prdctImg" />
                </div>

            </div>
            <div className="downdiv">
                <img className="down2" src={down2} alt="prdctImg" />
                <img className="down3" src={down3} alt="prdctImg" />
            </div>
            <Footerfun />
        </>
    )
}