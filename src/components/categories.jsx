import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Heading, VStack } from "@chakra-ui/react"
import "../pages/HomepageBody/slide.css"
import { useNavigate } from "react-router-dom";

export default function Categories() {
    var item = [
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-SoundMAGIC-E11C-1160-1160-black_500x.jpg?v=1649233095",
            h5: "BEST SELLER",
            h3: "CCA - C10 PRO",
            p: "In-Ears With 1 DD + 1 BA Drivers",
            price: 1699,
            span: 2499,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-RE800-1160-1160-011_500x.jpg?v=1643803585",
            h5: "BEST SELLER",
            h3: "BLON - BL - 03",
            p: "In-Ears With 1 Dynamic Driver",
            price: 1990,
            span: 3999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/4be3c481986e40ba9c3133b879bdae48_500x.jpg?v=1650872939",
            h5: "BEST SELLER",
            h3: "CCA - CRA",
            p: "In-Ears With 1 Dynamic Driver",
            price: 1399,
            span: 1499,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-CCA-C10pro-Black-02_400x.jpg?v=1627994425",
            h5: "BEST SELLER",
            h3: "CCA - C10 pro",
            p: "In-Ears With 1DD + 4BA Driver",
            price: 2999,
            span: 4999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-KZ-ZEX-Pro-Black-01_400x.jpg?v=1641194893",
            h5: "BEST SELLER",
            h3: "KZ X CRINNACLE (CRN) zex pro",
            p: "Tribrid Driver In-Ears Tuned By Crinacle",
            price: 2790,
            span: 4999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-6_500x.jpg?v=1593432193",
            h5: "BEST SELLER",
            h3: "KZ ZXT X",
            p: "In-Ears With 1 DD + 1 BA Drivers",
            price: 1399,
            span: 1999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-E500-1160-1160-9_400x.jpg?v=1637903241",
            h5: "BEST SELLER",
            h3: "FINAL E500",
            p: "Earphones For Spatial Audio",
            price: 1599,
            span: 1999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-final-Audio-E2000-Black-New_400x.jpg?v=1632220373",
            h5: "BEST SELLER",
            h3: "FINAL-E2000",
            p: "In-Ears With 1 Dynamic Driver",
            price: 2799,
            span: 2999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E3000-08_400x.jpg?v=1632399354",
            h5: "BEST SELLER",
            h3: "FINAL E3000",
            p: "In-Ears With 1 Dynamic Driver",
            price: 3699,
            span: 3999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-VR3000-15_400x.jpg?v=1633676571",
            h5: "BEST SELLER",
            h3: "FINAL vr300",
            p: "Wired In-Ears For Gaming & VR",
            price: 5999,
            span: 7999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-VR3000-15_400x.jpg?v=1633676571",
            h5: "BEST SELLER",
            h3: "FINAL vr300",
            p: "Wired In-Ears For Gaming & VR",
            price: 5999,
            span: 7999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Meze-12-Classics-V2-02_400x.jpg?v=1612869168",
            h5: "BEST SELLER",
            h3: "meze 12 classics V2",
            p: "In-Ears With 1 Dynamic Driver",
            price: 4999,
            span: 6999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-RE800-1160-1160-011_400x.jpg?v=1643803585",
            h5: "BEST SELLER",
            h3: "HIFI man - RE 800",
            p: "In-Ears With 9.2mm Nanotech Topology Dynamic Driver",
            price: 11999,
            span: 12999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-iBasso-IT01X-Black-04_400x.jpg?v=1634645565",
            h5: "BEST SELLER",
            h3: "IBASSO-it01X",
            p: "In-Ears With 1 Dynamic Driver",
            price: 10999,
            span: 11999,
        },
        {
            imgurl:
                "https://cdn.shopify.com/s/files/1/0153/8863/products/397b9537bf78aea1a4a4acc4496a47fe_400x.jpg?v=1641184507",
            h5: "BEST SELLER",
            h3: "CAMFIRE AUDIO - HONEYDEW",
            p: "In-Ears With 1 Dynamic Driver",
            price: 19999,
            span: 24999,
        },
    ];

    const storedata = (el) => {
        localStorage.setItem("dynamicprdt",JSON.stringify(el));
    }

    const navigate = useNavigate()
    
    return (
        <div className="fullbody">

            <div className="sorting">
                <Heading>Filters</Heading>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Brand
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack alignItems="flex-start">
                                <Checkbox isInvalid>1Custum</Checkbox>
                                <Checkbox isInvalid>7HZ(3)</Checkbox>
                                <Checkbox isInvalid>Audio-Technica (1)</Checkbox>
                                <Checkbox isInvalid>BLON (4)</Checkbox>
                                <Checkbox isInvalid>CCA (5)</Checkbox>
                                <Checkbox isInvalid>Campfire Audio (2)</Checkbox>
                                <Checkbox isInvalid>DUNU (1)</Checkbox>
                                <Checkbox isInvalid>Etymotic (3)</Checkbox>
                                <Checkbox isInvalid>FiiO (7)</Checkbox>
                                <Checkbox isInvalid>Final Audio (9)</Checkbox>
                                <Checkbox isInvalid>HiFiMAN (2)</Checkbox>
                                <Checkbox isInvalid>
                                    IKKO (2)</Checkbox>
                                <Checkbox isInvalid>JAYS (1)</Checkbox>
                                <Checkbox isInvalid>LETSHUOER (1)</Checkbox>
                                <Checkbox isInvalid>Moondrop (6)</Checkbox>
                                <Checkbox isInvalid>Sennheiser (1)</Checkbox>
                                <Checkbox isInvalid>SoundMAGIC (2)</Checkbox>
                                <Checkbox isInvalid>Venture Electronics (2)</Checkbox>
                                <Checkbox isInvalid>iBasso (2)</Checkbox>
                                <Checkbox isInvalid>oBravo (1)</Checkbox>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Product Type
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack alignItems="flex-start">
                                <Checkbox isInvalid>Gaming (1)</Checkbox>
                                <Checkbox isInvalid>Wired Earphones (81)</Checkbox>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Availability
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack alignItems="flex-start">
                                <Checkbox isInvalid>In Stock (63)</Checkbox>
                                <Checkbox isInvalid>Out of Stock (33)</Checkbox>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            
            <div className="categories">
                {
                    item.map((el) => (
                        <div className="eachprdct" key={el.id}  onClick={() => navigate(`/earphone/${el.id}`)}>
                            {/* console.log(el.id); */}
                            <img onClick={() => storedata(el)} src={el.imgurl} alt="prdctimg" />
                            <h3 onClick={() => storedata(el)} className="bold">{el.h3}</h3>
                            <h5 >{el.p}</h5>
                            <p className="cutPrice">MRP:₹{el.span}</p>
                            <p className="finalprice">Sale Price: ₹{el.price}</p>
                        </div>
                    ))
                };

            </div>
        </div>
    )
}

//onClick={() => navigate(`/product/${el.id}`)}