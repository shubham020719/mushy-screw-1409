import { Button, Heading, Stack } from "@chakra-ui/react"
import Confused from "./confused"
import NEWLaunch from "./newlaunch/NEWLaunch"
import "./slide.css"
import brand from "./images/brand.png"
import SYAHeading from "./StartYourAudiophile/SYAHeading"
import SYAmul from "./StartYourAudiophile/SYAmul"
import VideoSlider from "./videoslider"
import Footerfun from "./footerfolder/Footer"

export default function Productsslider() {
    return (
        <>
            <br></br>
            <br></br>
            <Heading>SHOP THE FESTIVAL OF SOUND SALE</Heading>
            <br></br>
            <Stack direction="row" spacing={4} justifyContent='center'>
                <Button colorScheme='blue' variant='solid'>Wired Headphone</Button>
                <Button>AMPS & DOCS</Button>
                <Button>True Wireless</Button>
                <Button>Wireless Earphones</Button>
            </Stack>
            <br></br>
            <div className="prdcts">
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-CCA-LYRA-01_500x.jpg?v=1659512980" alt="prdctimg" />
                    <h3 className="bold">CCA - LYRA</h3>
                    <h5>In-Ears With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 2,499</p>
                    <p className="cutPrice">Selling Price: ₹1,799</p>
                    <p className="finalprice">Sale Price: ₹1,599</p>
                    <p className="review">65 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-KZ-ZEX-Black-2_500x.jpg?v=1632918833" alt="prdctimg" />
                    <h3 className="bold">KZ - ZEX</h3>
                    <h5>In-Ears With 1 DD + 1 EST Driver </h5>
                    <p className="cutPrice" >MRP: ₹ 2,499</p>
                    <p className="cutPrice">Selling Price: ₹1,999</p>
                    <p className="finalprice">Sale Price: ₹1,699</p>
                    <p className="review">368 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-7HZ-Salnotes-ZERO-Black-01_500x.jpg?v=1660714478" alt="prdctimg" />
                    <h3 className="bold">7HZ - SALNOTES ZERO</h3>
                    <h5>In-Ears With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 2,299</p>
                    <p className="cutPrice">Selling Price: ₹1,990</p>
                    <p className="finalprice">Sale Price: ₹1,790</p>
                    <p className="review">87 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/soundmagic-e11c-black-headphone-zone-5369095847999_500x.jpg?v=1580360044" alt="prdctimg" />
                    <h3 className="bold">FINAL - A3000</h3>
                    <h5>In-Ears With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 12,499</p>
                    <p className="cutPrice">Selling Price: ₹9,799</p>
                    <p className="finalprice">Sale Price: ₹6,599</p>
                    <p className="review">9 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Moondrop-CHU-Without-Mic-02_500x.jpg?v=1662011091" alt="prdctimg" />
                    <h3 className="bold">SOUNDMAGIC</h3>
                    <h5>Earphones With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 3,499</p>
                    <p className="cutPrice">Selling Price: ₹2,799</p>
                    <p className="finalprice">Sale Price: ₹1,999</p>
                    <p className="review">431 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/headphone-Zone-Moondrop-Aria-2_500x.jpg?v=1663323157" alt="prdctimg" />
                    <h3 className="bold">MOONDROP - ARIA</h3>
                    <h5 >In-Ears With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 8,499</p>
                    <p className="cutPrice">Selling Price: ₹7,799</p>
                    <p className="finalprice">Sale Price: ₹6,599</p>
                    <p className="review">33 reviews</p>
                </div>
            </div>
            <div className="btns">
                <Button margin="auto" colorScheme='blue'>View More</Button>
            </div>

            {/* ----------------------------------------------------------------------- */}

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Heading>SHOP THE FLAGSHIP COLLECTION</Heading>
            <br></br>
            <Stack direction="row" spacing={4} justifyContent='center'>
                <Button colorScheme='blue' variant='solid'>Flagship Item</Button>
                <Button>DESKTOP AMPS & DOCS</Button>
                <Button>Flagship Headphones</Button>
                <Button>Hi - res Audio Player</Button>
            </Stack>
            <div className="prdcts">
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/4_e2bc35c9-7072-4b03-9f4a-24da04aed7b4_500x.jpg?v=1663224444" alt="prdctimg" />
                    <h3 className="bold">CCA - LYRA</h3>
                    <h5>In-Ears With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 2,499</p>
                    <p className="cutPrice">Selling Price: ₹1,799</p>
                    <p className="finalprice">Sale Price: ₹1,599</p>
                    <p className="review">65 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Ara-02_500x.jpg?v=1591607325" alt="prdctimg" />
                    <h3 className="bold">KZ - ZEX</h3>
                    <h5>In-Ears With 1 DD + 1 EST Driver </h5>
                    <p className="cutPrice" >MRP: ₹ 2,499</p>
                    <p className="cutPrice">Selling Price: ₹1,999</p>
                    <p className="finalprice">Sale Price: ₹1,699</p>
                    <p className="review">368 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Noble-Audio-Jade-04_500x.jpg?v=1652084205" alt="prdctimg" />
                    <h3 className="bold">7HZ - SALNOTES ZERO</h3>
                    <h5>In-Ears With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 2,299</p>
                    <p className="cutPrice">Selling Price: ₹1,990</p>
                    <p className="finalprice">Sale Price: ₹1,790</p>
                    <p className="review">87 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Andromeda-2020-3_500x.jpg?v=1589970936" alt="prdctimg" />
                    <h3 className="bold">FINAL - A3000</h3>
                    <h5>In-Ears With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 12,499</p>
                    <p className="cutPrice">Selling Price: ₹9,799</p>
                    <p className="finalprice">Sale Price: ₹6,599</p>
                    <p className="review">9 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-zone-Unique-Melody-MKII-1160-1160-2_700x.jpg?v=1629701850" alt="prdctimg" />
                    <h3 className="bold">SOUNDMAGIC</h3>
                    <h5>Earphones With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 3,499</p>
                    <p className="cutPrice">Selling Price: ₹2,799</p>
                    <p className="finalprice">Sale Price: ₹1,999</p>
                    <p className="review">431 reviews</p>
                </div>
                <div className="eachprdct">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-FH5s-01_c0e6da60-45a5-4218-8a59-6e5f66fa3486_900x.jpg?v=1631871302" alt="prdctimg" />
                    <h3 className="bold">MOONDROP - ARIA</h3>
                    <h5 >In-Ears With 1 Dynamic Driver</h5>
                    <p className="cutPrice">MRP: ₹ 8,499</p>
                    <p className="cutPrice">Selling Price: ₹7,799</p>
                    <p className="finalprice">Sale Price: ₹6,599</p>
                    <p className="review">33 reviews</p>
                </div>

            </div>
            <div className="btns">
                <Button margin="auto" colorScheme='blue'>View More</Button>
            </div>

            <div>
                <SYAHeading />
                <SYAmul />
            </div>
            <div className="title2">
                <h1>LIKE YOU, WE LOVE MUSIC...</h1>
                <p>And we believe a Headphone is more than just an instrument for sound. <br></br>
                    It’s the key to a mind-blowing moment of emotion, bringing you closer to your favourite artist, and yourself.<br></br>
                    We’ve curated the world’s finest headphones & earphones to help you discover the riffs, percussions, basslines and solos that were always there but never heard.</p>
            </div>
            <div>

            </div>
            <VideoSlider />

            <div className="title2">
                <p>FRESH OFF THE BOAT, EXPLORE THE BEST IN AUDIOPHILIA RIGHT NOW </p>
                <h1>NEW LAUNCHES</h1>
            </div>

            <NEWLaunch />
            <Confused />
            <div className="brand">
                <img src={brand} alt="brand"/>
            </div>
            <Footerfun />
        </>
    )
}