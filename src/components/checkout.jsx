import "./dynamic.css"
import React from "react"
import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, Select } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"


function CheckoutPage() {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || 0 || [];
    let finalRate = 0;
    cartData.map((el) => {
        finalRate = finalRate + el.price
    });
    const navigate = useNavigate()
    const pymtntredirecct = () => {
        navigate("/paymentPage")
    }
    return (
        <>
            <div className="checkout">
                <div className="firstCol">
                    <FormControl>
                        <FormLabel>Contact Information</FormLabel>
                        <Input type='email' placeholder="Email" />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                        <Checkbox>	Email and WhatsApp me with news and offers</Checkbox>
                        <p className="ship">Shipping Address</p>
                        <FormLabel>Country</FormLabel>
                        <Select mb={4} placeholder='Select country'>
                            <option>India</option>
                        </Select>
                        <Input mb={4} placeholder='Full Name' />
                        <Input mb={4} placeholder='Address' />
                        <div className="Row3">
                            <Input mb={4} mr={3} placeholder='City' />
                            <Select mr={3} placeholder='Select option'>
                                <option value="">Andhra Pradesh</option>
                                <option value="">Arunachal Pradesh</option>
                                <option value="">Assam</option>
                                <option value="">Bihar</option>
                                <option value="">Chhattisgarh</option>
                                <option value="">Goa</option>
                                <option value="">Gujarat</option>
                                <option value="">Haryana</option>
                                <option value="">Himachal Pradesh</option>
                                <option value="">Jammu and Kashmir</option>
                                <option value="">Jharkhand</option>
                                <option value="">Karnataka</option>
                                <option value="">Kerala</option>
                                <option value="">Maharashtra</option>
                                <option value="">Manipur</option>
                                <option value="">Meghalaya</option>
                                <option value="">Mizoram</option>
                                <option value="">Nagaland</option>
                                <option value="">Punjab</option>
                                <option value="">Odisha</option>
                                <option value="">Sikkim</option>
                                <option value="">Rajasthan</option>
                                <option value="">Tamil Nadu</option>
                                <option value="">Telangana</option>
                                <option value="">Tripura</option>
                                <option value="">Uttarakhand</option>
                                <option value="">Uttar Pradesh</option>
                                <option value="">West Bengal</option>
                                <option value="">Chandigarh</option>
                                <option value="">Delhi</option>
                                <option value="">Lakshadweep</option>
                                <option value="">Puducherry</option>
                            </Select>
                            <Input mb={4} placeholder='Pin Code' />

                        </div>
                        <InputGroup>
                            <InputLeftAddon children='+91' />
                            <Input type='tel' placeholder='phone number' />
                        </InputGroup>

                    </FormControl>
                    <br></br>
                    <div className="pymntbtn">
                        <br></br>
                        <Checkbox>Save this information for next time</Checkbox>
                        <br></br>
                        <br></br>
                        <Button colorScheme="blue" onClick={pymtntredirecct}>Continue to payment method</Button>

                    </div>

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
                        <Button  colorScheme="blue" >Apply</Button>
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
//className="secondColDiv"

export default CheckoutPage;