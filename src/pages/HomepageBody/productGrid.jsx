import { Heading, Text } from "@chakra-ui/react"
import "./slide.css";
import banner from "./images/banner.png"

export default function Product(){

    return (
    <>
        <div className="title">
                <Text >HEY NOW, HEY NOW, THIS IS WHAT DREAMS ARE MADE OF</Text>
                <Heading >HANDPICKED DEALS FOR THE AUDIOPHILE IN YOU</Heading>
        </div>
        <div className="cont">
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Audeze-Euclid-250-250.jpg?v=1663240701" alt="pr" />
                <h3>CCA - C10 PRO</h3>
                <h5>In-Ears With 1 DD + 1 BA Drivers</h5>
            </div>    
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-A8000-250-250.jpg?v=1663240157" alt="pr" />
                <h3>BLON - BL - 03</h3>
                <h5>In-Ears With 1 Dynamic Driver</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Campfire-Audio-Ara-250-250.jpg?v=1663240701" alt="pr" />
                <h3>CCA - CRA</h3>
                <h5>Get flat 61.55% off</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Campfire-Audio-Dorado-2020-250-250.jpg?v=1663240865" alt="pr" />
                <h3>CCA - C10 pro</h3>
                <h5>In-Ears With 1DD + 4BA Driver</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-STAX-SRS-3100-250-250.jpg?v=1663240701" alt="pr" />
                <h3>KZ X CRINNACLE (CRN) zex pro</h3>
                <h5>Tribrid Driver In-Ears Tuned By Crinacle</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Untitled-Headphone-Zone-Final-A3000-250-250.jpg?v=1663240170" alt="pr" />
                <h3>KZ ZXT X</h3>
                <h5>Get flat 61.55% off</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-KZ-Lyra-250-250.jpg?v=1663240157" alt="pr" />
                <h3>FINAL E500</h3>
                <h5>Earphones For Spatial Audio</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-A8000-01_06656176-cb10-4d4a-bd1c-8e328f3d6478_800x.jpg?v=1644220901" alt="pr" />
                <h3>FINAL-E2000</h3>
                <h5>In-Ears With 1 Dynamic Driver</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Focal-Stellia-250-250.jpg?v=1663240157" alt="pr" />
                <h3>FINAL E3000</h3>
                <h5>Get flat 61.55% off</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-KZ-ZEX-250-250.jpg?v=1663240397" alt="pr" />
                <h3>FINAL vr300</h3>
                <h5>Wired In-Ears For Gaming & VR</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-iFi-Audio-ZEN-Air-DAC-250-250.jpg?v=1663240396" alt="pr" />
                <h3>HiFiMAN Sundara (2022)</h3>
                <h5>Get flat 16.67% off</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Lypertek-Pureplay-Z3-250-250.jpg?v=1663240397" alt="pr" />
                <h3>FINAL vr300</h3>
                <h5>Wired In-Ears For Gaming & VR</h5>
            </div> 
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-HiFiMAN-Sundara-250-250.jpg?v=1663240397" alt="pr"/>
                <h3>meze 12 classics V2</h3>
                <h5>Get flat 61.55% off</h5>
            </div> 
            </div>
            <div className="banner">
                <img src={banner} alt="banner"/>
            </div>
        </>
    )
       
    
}