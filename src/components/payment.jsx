import "./dynamic.css"
import React from "react"
import payment from "../images/payment.png"
import { useNavigate } from "react-router-dom";

import { Accordion, useDisclosure, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Input, InputGroup, InputLeftAddon, } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
const PayemnetPage = () => {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || 0 || [];
    let finalRate = 0;
    cartData.forEach((el) => {
        finalRate = finalRate + el.price
    });
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()
    const orderPlace = () => {
        alert("Your Order is Placed")
        navigate("/")
    }
    return (

        <>
            <div className="checkout">
                <div className="firstCol">
                    <div className="paymnt1Div">
                        <div className="pymnt1">
                            <p className="text1">Contant</p>
                            <p>sk185618@gmail.com</p>
                            <p className="chngText">change</p>
                        </div>
                        <hr></hr>
                        <div className="pymnt1">
                            <p className="text1">Ship To</p>
                            <p>Bhikhana Pahari, 828202 Dhanbad JH, India</p>
                            <p>change</p>
                        </div>
                    </div>
                    <div className="pymnt2">
                        <h2 className="pymntText1">Payment</h2>
                        <p className="text1">All transactions are secure and encrypted.</p>
                    </div>
                    <br></br>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <Checkbox>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Checkbox>
                            <AccordionPanel pb={4}>
                                <img src={payment} alt="paymentimg" />
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <Checkbox>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Cashfree Payments
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Checkbox>
                            <AccordionPanel pb={4}>
                                <img src={payment} alt="paymentimg" />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <Checkbox>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>

                                        Pay on Delivery (Pay online through SMS Pay Link) - Cash on Delivery Available
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Checkbox>
                        </AccordionItem>
                        <AccordionItem>
                            <Checkbox>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        10% cashback upto ₹1000 with Simpl Pay in 3
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Checkbox>
                            <AccordionPanel pb={4}>
                                <img src={payment} alt="paymentimg" />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <br></br>
                    <div className="pymntbtn">
                        <Button colorScheme="blue" onClick={onOpen}>Complete Order</Button>
                        <br></br>
                        <Drawer
                            size="sm"
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>Headphone Zone <br></br>Do Your Payment Here!!</DrawerHeader>

                                <DrawerBody className="drwrbdy">
                                    <div>
                                        <InputGroup mb={4}>
                                            <InputLeftAddon children='+91' />
                                            <Input type='tel' placeholder='phone number' />
                                        </InputGroup>
                                        <Input mb={4} placeholder="Card Number" />
                                        <div className="Row3">
                                            <Input mr={4} placeholder="Exprire Date"  />
                                            <Input placeholder="CVV" />
                                        </div>
                                        <div className="finalBtnDiv">
                                            <Button variant='outline' mr={3} onClick={onClose}>
                                                Cancel
                                            </Button>
                                            <Button colorScheme='blue' onClick={ orderPlace}>Place Order</Button>
                                        </div>
                                        
                                    </div>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </div>
                    <br></br>
                    <br></br>
                </div>
                <div className="secondCol">
                    {
                        cartData.map((el) => (
                            <div className="secondColDiv"  >
                                <img src={el.imgurl} alt="prdctimg" />
                                <div className="checkoutpagetext">
                                    <p  >{el.p}</p>
                                </div>

                                <p className="checkoutpageprice" > ₹{el.price}</p>
                            </div>
                        ))
                    }
                    <hr></hr>
                    <br></br>
                    <div className="giftSec">
                        <Input
                            ml={5}
                            isInvalid
                            errorBorderColor='blue.300'
                            placeholder='Gift Card Or Discount Code'
                        />
                        <Button colorScheme="blue" >Apply</Button>
                    </div>
                    <div className="Tax">
                        <p>(Including ₹426.97 in taxes)</p>
                    </div>
                    <div className="grnd">
                        <p> Grand Total :- ₹{finalRate}</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayemnetPage;