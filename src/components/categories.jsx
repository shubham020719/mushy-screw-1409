import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Heading, VStack } from "@chakra-ui/react"
import "../pages/HomepageBody/slide.css"

export default function Categories() {
    var item = [
        {
            id: 1,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-03_400x.jpg?v=1644040398",
            upper: "BEST SELLER",
            h3: "EPOS PC 5 CHAT",
            p: "Wired Headphones for Calls",
            price: "1,490",
            span1: ""
        },
        {
            id: 2,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Edifier-USB-K800-03_400x.jpg?v=1602504995",
            upper: "PRICE DROP",
            h3: "SDIFIER USB K800",
            p: "Wired Headphones for Calls",
            price: "1,799",
            span1: "2799"
        },
        {
            id: 3,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Edifier-K550-1160-1160-black_400x.jpg?v=1602496611",
            upper: "",
            h3: "EDIFIER - K550",
            p: "Wired Headphones for Calls",
            price: "999",
            span1: "1499"
        },
        {
            id: 4,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-V-MODA-BoomPro-X-1160-1160-1_400x.jpg?v=1638784282",
            upper: "",
            h3: "V MODABOOMPRO X MIC",
            p: "Studio Professional Mic",
            price: "3,499",
            span1: "4,499"
        },
        {
            id: 5,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-JBL-CSLM30B-03_400x.jpg?v=1634727955",
            upper: "",
            h3: "JBL CSLM30B",
            p: "Battery Powered Lavalier Microphone With Earphone",
            price: "3,660",
            span1: ""
        },
        {
            id: 6,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Beyerdynamic-HSP-321-1160-1160-2_400x.jpg?v=1594029340",
            upper: "",
            h3: "BEYER DYNAMICS HSP 321",
            p: "Single Ear Headset for Calls",
            price: "8,999",
            span1: "10,999"
        },
        {
            id: 7,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite-2-1160-1160-Navy-1_400x.jpg?v=1644902277",
            upper: "",
            h3: "BEYERDYNAMIC PHONUM",
            p: "Wireless Bluetooth Speakerphone",
            price: "23,999",
            span1: "27,999"
        },
        {
            id: 8,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite-2-1160-1160-Navy-1_400x.jpg?v=1644902277",
            upper: "",
            h3: "JABRA ELITE 2",
            p: "True Wireless Earbuds",
            price: "3,999",
            span1: "5,999"
        },
        {
            id: 9,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite3-Navy-02_400x.jpg?v=1644902693",
            upper: "",
            h3: "jabra Elite 3",
            p: "True Wireless Earbuds",
            price: "5,499",
            span1: "6,999"
        },
        {
            id: 10,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite4-Active-Navy-01_442ccfb0-3378-4cc1-9602-47de116f7838_400x.jpg?v=1641550739",
            upper: "",
            h3: "jabra ELITE 4 ACTIVE ",
            p: "True Wireless Earbuds With aptX Support",
            price: "9,999",
            span1: "10,999"
        },
        {
            id: 11,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-85t-Black-1160-1160-1_400x.jpg?v=1610038462",
            upper: "",
            h3: "JABRA ELITE 85T",
            p: "Noise Cancelling True Wireless Earbuds",
            price: "11,449",
            span1: "18,999"
        },
        {
            id: 12,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite-7-Pro-Titanium-Black-1160-1160_700x.jpg?v=1641551584",
            upper: "New",
            h3: " JABRA ELITE 7 PRO",
            p: "True Wireless Ear Buds With MultiSensor Voice Technology",
            price: "14,999",
            span1: "18,999"
        },
        {
            id: 13,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-JAYS-f-Five-True-Wireless-1160-1160-2_400x.jpg?v=1606370902",
            upper: "",
            h3: "JAYS F FIVE TRUE WIRELESS",
            p: "True Wireless Earbuds",
            price: "4,999",
            span1: "7,999"
        },
        {
            id: 14,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-1000XM4-Black-01_400x.jpg?v=1642060231",
            upper: "New",
            h3: "SONY-WF-1000 XM4",
            p: "Noise Cancelling True Wireless Earbuds",
            price: "19,990",
            span1: "24,990"
        },
        {
            id: 15,
            imgurl: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite-2-1160-1160-Navy-1_400x.jpg?v=1644902277",
            upper: "New",
            h3: "SHURE - AONIC 40",
            p: "Noise Cancelling True Wireless Earbudss",
            price: "19,999",
            span1: "28250"
        },
    ];
    const storedata = (el) => {
        localStorage.setItem('dyanamiProduct', JSON.stringify(el));
        
    }
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
                        <div className="eachprdct" key={el.id} onClick={() => storedata(el)}>
                            {/* console.log(el.id); */}
                            <img src={el.imgurl} alt="prdctimg" />
                            <h3 className="bold">{el.h3}</h3>
                            <h5 >{el.p}</h5>
                            <p className="cutPrice">MRP:₹{el.span1}</p>
                            <p className="finalprice">Sale Price: ₹{el.price}</p>
                        </div>
                    ))
                };

            </div>
        </div>
    )
}