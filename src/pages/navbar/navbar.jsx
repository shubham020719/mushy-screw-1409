import React from "react";
import "./nav.css"
import { useNavigate } from "react-router-dom";


import img1 from "./HZlogo.png"
import { Link } from "react-router-dom";
import { Checkbox, Heading, Textarea, useDisclosure } from '@chakra-ui/react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react'


export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let cartData = JSON.parse(localStorage.getItem("cartData")) || 0 || [];
    let finalRate = 0;
    cartData.forEach((el) => {
        finalRate = finalRate + el.price
    });
    const navigate = useNavigate()
    function GotoPyamentPage() {
        if (finalRate !== 0) {
            navigate("/checkout")
        } else {
            alert("Please Add Some product to move Forward")
        }  
    }
    const redirectHomepage = () => {
        navigate("/")
    }
    return (
        <div className="navBar-div">
            <img src={img1} alt="logo" onClick={redirectHomepage} className="headphoneLlogo" />
            <div className="navMid">
                <Link to="./">Sale</Link>
                <Link to="./earphone">Earphones </Link>
                <Link to="./headphone">Headphone</Link>
                <Link to="./price">Price</Link>
                <Link to="./deals">Deals</Link>
                <Link to="./finder">Headphone finder</Link>
                <Link to="./events">Events</Link>
                <Link to="./forums">Forums</Link>
                <Link to="./info">Info</Link>
                <Link to="./help">Help center</Link>
            </div>
            <div className="navMid">
                <Link to="./search">Search</Link>
                <Link to="./login">Login</Link>
                <Link onClick={onOpen}>Cart ({cartData.length})</Link>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size="md"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>{cartData.length} Items</DrawerHeader>

                        <DrawerBody>
                            {
                                cartData.map((el) => (
                                    <div className="eachprdctCart"  >
                                        <div className="cartImg">
                                            <img src={el.imgurl} alt="prdctimg" />
                                        </div>
                                        <div className="cartDisc">
                                            <h3 className="bold">{el.h3}</h3>
                                            <h5 >{el.p}</h5>
                                            <p className="finalprice">Sale Price: ₹{el.price}</p>

                                        </div>
                                    </div>
                                ))
                            }

                            <Checkbox isInvalid> For ₹ 50 please wrap the products in this order.</Checkbox>
                            <br></br>
                            <br></br>
                            <Textarea isInvalid placeholder='Gift message (free and optional)' />
                            <Heading>Grand Total: ₹{finalRate} </Heading>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue' onClick={GotoPyamentPage}>Checkout -  ₹{finalRate}</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>

        </div>
    )
}