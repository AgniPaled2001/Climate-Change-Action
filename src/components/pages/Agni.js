import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import { CSSTransition } from "react-transition-group";
// import {Img} from "../reusablebanners/img1.jpg"
import { faFacebook, faInstagram, faLinkedin, faMailchimp, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMessage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faBoxArchive, faBoxes, faBoxesAlt, faClover, faGrinHearts, faHeartCircleBolt, faHeartCircleCheck, faHeartCircleExclamation, faHeartCirclePlus, faHeartCircleXmark, faHeartPulse, faHeartbeat, faMailBulk, faMailForward, faMattressPillow, faMicrophoneLinesSlash, faPlane, faRightLong, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleChevronRight, faGreaterThan, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";


export function Homepagereusable() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const style1 = {
        backgroundImage: 'url("https://th.bing.com/th?id=OIP.kTyhoz2Sdv1IZLp0XXKo8QHaEJ&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2")',
        backgroundRepeat: "no-repeat",
        height: "800px",
        backgroundSize: "cover",
    }
    const style2 = {
        marginTop: "200px",
        marginLeft: "50px",
        
    }
    const button1 = {
        backgroundColor: "white",
        color: "black",
        padding: "10px"
    }
    const h11 = {
        fontFamily: "Arial Black"
    }
    const h12 = {
        fontFamily: "Arial Black"
    }
    const div1 = {
        backgroundColor: "grey",
        width: "100vw",
    }
    const img1 = {
        width: "100%",
        margin: 10,
    }
    const div2 = {
        border: "1px solid green",
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <div class="container-fluid">
                    <div class="col-3 m-1 p-1">
                        <a class="navbar-brand" href="#"><img src="https://th.bing.com/th?id=OIP.93-c_PI70RU2dYQjn1P7RAHaDt&w=349&h=175&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" style={{ width: 100, height: 50, borderRadius: 200 }} /></a>
                    </div>
                    <div class="col-5 m-2 p-2 text-end">

                        <a class="m-1" style={{ color: "darkblue", justifyContent: "end" }} href="" bac><FontAwesomeIcon icon={faFacebook} /></a>
                        <a class="m-1" style={{ color: "blue" }} href=""><FontAwesomeIcon icon={faTwitter}  /></a>
                        <a class="m-1" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class=" m-1 text-danger" style={{ borderRadius: 10, }} href=""><FontAwesomeIcon icon={faYoutube} /></a>
                        <a class="m-1 text-danger " href=""><FontAwesomeIcon icon={faInstagram} /></a>

                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="http://localhost:3000/aboutus.js">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Programs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container-fluid row" style={style1}>
                <div class="col-5  text-light" style={style2}>
                    <h6>EXPLANATION</h6>
                    <h1 style={h11}>CLIMATE CHANGE AND ACTION!</h1>
                    <p>climate change describes global warming—the ongoing increase in global average temperature—and its effects on Earth's climate system..</p>
                    <button style={button1}>START Now</button>
                </div>
            </div>
            <div class='container-fluid row ' style={div1}>
                <div class='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-5  m-4 text-end'>
                    {/* <img src={Img} style={img1} /> */}
                </div>
                <div class='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-5 m-5'>
                    <h1 style={h12}>WHAT IS CLIMATE CHANGE ?</h1>
                    <p>"Global warming" redirects here. For other uses, see Climate change (disambiguation) and Global warming (disambiguation). This article is about contemporary climate change. For historical climate trends, see Climate variability and change..</p>
                    <p>Climate change refers to long-term shifts in temperatures and weather patterns. Such shifts can be natural, due to changes in the sun’s activity or large volcanic eruptions. But since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil and gas.

Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun’s heat and raising temperatures..</p>
                    <a href="">Learn More</a>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 class="text-center ">Causes of climate change</h1>
            <p class="text-center ">At the root of climate change is the phenomenon known as the greenhouse effect, the term scientists use to describe the way that certain atmospheric gases “trap” heat that would otherwise radiate upward, from the planet’s surface, into outer space. On the one hand, we have the greenhouse effect to thank for the presence of life on earth; without it, our planet would be cold and unlivable.</p>
            <br></br>
            <br></br>
            <br></br>
            <div class="container-fluid row" style={{justifyContent:"center",width:"100%"}}>
                    <div class="col-10 col-md-10 col-lg-5 m-5" style={{ width: "100%", width: isHovered ? 500 : 400, border: "1px solid black"  }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} >
                        <img src="https://cdn.britannica.com/19/73319-050-065E4F9B/Sun-ultraviolet-light-satellite-Earth-Solar-and.jpg?w=300" style={{ width: "100%", }}
                        />
        
                        <h2 style={{ color: "red" }}>Solar variability</h2>
                        <p>The luminosity, or brightness, of the Sun has been increasing steadily since its formation. This phenomenon is important to Earth’s climate, because the Sun provides the energy to drive atmospheric circulation and constitutes the input for Earth’s heat budget. Low solar luminosity during Precambrian time underlies the faint young Sun paradox, described in the section Climates of early Earth..</p>
                        <a href="" style={{ color: "red" }}>Learn More</a>
                </div>
                    <div class="col-10 col-md-10 col-lg-5 m-5" style={{ width: "100%", width: isHovered1 ? 500 : 400, border: "1px solid black"}}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)} >
                        <img src="https://cdn.britannica.com/61/93161-050-22598D4F/column-gas-ash-explosion-Philippines-Mount-Pinatubo-June-15.jpg?w=300" style={{ width: "100%", }}
                        />
                        <h2 style={{ color: "red" }}>Volcanic Activity</h2>
                        <p>Volcanic activity can influence climate in a number of ways at different timescales. Individual volcanic eruptions can release large quantities of sulfur dioxide and other aerosols into the stratosphere, reducing atmospheric transparency and thus the amount of solar radiation reaching Earth’s surface and troposphere..</p>
                        <a href="" style={{ color: "red" }}>Learn More</a>
            </div>
            </div>
            <div class="container-fluid row" style={{ backgroundColor: "yellow" }}>
                <div class="col-10 col-md-10 col-lg-10 col-xl-5 m-5 ">
                    <h1 style={{ fontFamily: "Arial Black" }}>IMPACT OF CLIMATE CHANGE</h1>
                    <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.Integer efficitur tellus metus, sed feugiat leo posuere.</p>
                    <div class="container-fluid row " style={{ border: "1px solid black" }}>
                        <div class="col-10 " >
                            <h2>Environmental effects</h2>
                            <p>The environmental effects of climate change are broad and far-reaching, affecting oceans, ice, and weather.</p>
                        </div>
                        <div class="col-2">
                            {/* <button class="btn btn-outline-success " style={{ borderRadius: 100, width:'100%', height: 60, color: "green", marginTop: 20, }}><FontAwesomeIcon icon={faChevronRight} /></button> */}
                        </div>
                    </div>
                    <br></br>
                    <div class="container-fluid row " style={{ border: "1px solid black" }}>

                        <div class="col-10">
                            <h2>Tipping points and long-term impacts</h2>
                            <p>Greater degrees of global warming increase the risk of passing through 'tipping points'—thresholds beyond which certain impacts can no longer be avoided even if temperatures are reduced.</p>
                        </div>
                        <div class="col-2">
                            {/* <button class="btn btn-outline-success " style={{ borderRadius: 100, width: '100%', height: 60, color: "green", marginTop: 20, }}><FontAwesomeIcon icon={faChevronRight} /></button> */}
                        </div>
                    </div>
                    <br></br>
                    <div class="container-fluid row " style={{ border: "1px solid black" }}>
                        <div class="col-10">
                            <h2>Nature and wildlife</h2>
                            <p>Recent warming has driven many terrestrial and freshwater species poleward and towards higher altitudes.[188] Higher atmospheric CO2 levels and an extended growing season have resulted in global greening. However, heatwaves and drought have reduced ecosystem productivity in some regions.</p>
                        </div>
                        <div class="col-2">
                            {/* <button class="btn btn-outline-success" style={{ borderRadius: 100, width: '100%', height: 60, color: "green", marginTop: 20, }}><FontAwesomeIcon icon={faChevronRight} /></button> */}
                        </div>
                    </div>
                </div>
                <div class="col-10 col-md-10 col-lg-10 col-xl-5 m-5" >
                    <img src="https://th.bing.com/th/id/OIP.F2gSf_DRGNR9FvXS_OcJSQHaF0?w=227&h=180&c=7&r=0&o=5&pid=1.7" style={{ width: "100%", height: "100%" }} />
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="container-fluid row">
                <div class="col-6 ">
                    <h1 style={{ fontFamily: "Arial Black" }}>QUICK FACTS:</h1>
                </div>
                <div class="col-6 text-end" style={{ justifyContent: "end" }}>
                    <a href="">Learn More</a>
                </div>
            </div>
            <div class="container-fluid row " style={{ justifyContent: "center" }}>


                <div class="col-10 col-md-4 m-5">
                    <img src="https://th.bing.com/th/id/OIP.iKKOHvJCKNFBxRuB-z2-PwHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7" style={{ width: "100%", height: "100%", }} />
                    <p>The term global warming refers to the long-term warming of the planet. The term climate change encompasses global warming, but refers to the broader range of changes that are happening to our planet.</p>
                </div>
                <div class="col-10 col-md-4 m-5">
                    <img src="https://th.bing.com/th/id/OIP.mrGNcNU9iezEEWE5GJfMZAAAAA?w=329&h=185&c=7&r=0&o=5&pid=1.7" style={{ width: "100%", height: "100%", }} />
                    <p>These broader climate changes include: rising sea levels, shrinking mountain glaciers, accelerating ice melt in Greenland, Antarctica and the Arctic, and shifts in flower and plant blooming times</p>
                </div>
                <div class="col-10 col-md-4 m-5">
                    <img src="https://th.bing.com/th/id/OIP.awaY5tr49rfLel6MO2JJowAAAA?w=301&h=180&c=7&r=0&o=5&pid=1.7" style={{ width: "100%", height: "100%", }} />
                    <p>The Intergovernmental Panel on Climate Change was formed in 1988 to collect and assess evidence on climate change. Since then, it has produced a series of alarming climate models. Under these models, most of the planet’s ice cover would melt by the end of the century and trigger a cascade of irreversible consequences, including flooding strong enough to engulf entire cities.</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>


            {/* OUR PRETRAINERS */}

            <div class='container-fluid row text-light ' style={{ backgroundColor: "lightpink" }}>
                <div class='col-10 col-md-10 col-lg-10 col-xl-5 m-5 text-end' style={{ backgroundColor: "lightpink" }}>
                    {/* <img src={Img} style={img1} /> */}
                </div>
                <div class='col-10 col-md-10 col-lg-10 col-xl-5 m-5' style={{ backgroundColor: "orange" }}>
                    <h1 style={h11}>TRUSTED BY OVER
                        <br></br> 6000+ SOCIEITY</h1>
                    <p>Public debate about climate change has been strongly affected by climate change denial and misinformation, which originated in the United States and has since spread to other countries, particularly Canada and Australia. Climate change denial has originated from fossil fuel companies, industry groups, conservative think tanks, and contrarian scientists.[362] Like the tobacco industry, the main strategy of these groups has been to manufacture doubt about scientific data and results.[363] People who hold unwarranted doubt about climate change are called climate change "skeptics", although "contrarians" or "deniers" are more appropriate terms..</p>
                    <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                    <a href="">Join Now</a>
                </div>
            </div>


            <div class="container-fluid row bg-warning text-sucess" style={{justifyContent:"center"}} >
                <div class="col-2 col-md-2 m-5">
                    <h1>Quick Links</h1>
                    <p>Work</p>
                    <p>Services</p>
                    <p>Products</p>
                    <p>Tips & Tricks</p>
                </div>
                <div class="col-2 col-md-2 m-5">
                    <h1>Sociecity</h1>
                    <p>Air Freight</p>
                    <p>Ocean Freight</p>
                    <p>Large Projects</p>

                </div>
                <div class="col-2 col-md-2  m-5">
                    <h1>Resouces</h1>
                    <p>FAQ</p>
                    <p>Submit Ticket</p>
                    <p>Contact Us</p>

                </div>
                <div class="col-5 col-md-2  m-5">
                    <h1>Know more To search</h1>
                    <p>Subscribe to get updates.</p>
                    <div class="btn-group  " role="group" aria-label="Basic outlined example">
                        <input type="email " class=" " placeholder="Enter your email" />
                        <button type="button" class="btn btn-outline-success "><FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="container-fluid row">
                        <div class="col-1">
                            <a class="m-2"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>

                        <div class="col-1">
                            <a class="m-2"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>

                        <div class="col-1">
                            <a class="m-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>

                        <div class="col-1">
                            <a class="m-2"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>


                    </div>
                </div>
               
            </div>
        </>
    );
}