import React from 'react'
import '../css/verticaltab.css'
import { DiReact, DiJava, DiJavascript, DiAngularSimple, DiPython } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaNode, FaBlogger, FaGraduationCap, FaDiscourse } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiOutlineGlobal } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import x1 from '../images/cardimg1.jpg'


function Home() {
    return (
        <div>
            <div className="background">

                <div className="center ">
                    <h1 className="cen pt-5">The Great Aim of Education is not </h1>
                    <h1 className="cen">Knowledge, But <span id="action">Action</span></h1>
                    <button className="btn mr-3" style={{backgroundColor: "#ffc107" }}><a href="/tutorials" className="link" style={{color: "#002147"}}>Tutorials</a></button>
                    <button className="btn " style={{backgroundColor: "#ffc107"}}><a href="/books" className="link" style={{color: "#002147"}}>Books</a></button>
                </div>
                <br />
                <br />
                <br />

            </div>

            <br /><br />


            {/* Sheshan added */}
            <div class="container-fluid " style={{ backgroundColor: "#002147", marginBottom: "50px", paddingBottom: "30px", paddingTop: "30px" }}>
                <div class="row">
                    <div class="col">
                        <p class="text-center text-white" style={{ color: "", fontSize: "25px" }}><i class="fa fa-video-camera mr-2 text-white"></i>Feature Courses</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" style={{ borderBottom: "3px solid white" }}>
                        <span class="mr-5 text-white" style={{ color: "",fontSize: "20px" }}></span>
                      
                    </div>
                </div>

                <div class="row mt-5">

                    {/* 1st image */}
                    <div class="col-2 she12">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img class="card-img-top" height="200px" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"} style={{backgroundColor:"#000"}} alt="Card image cap " />
                            <div class="card-body">
                                <p class="card-text" style={{textAlign:"center"}}>Angular FullStack Development With Spring Boot</p>
                            </div>
                        </div>
                    </div>

                    {/* 2st image */}
                    <div class="col-2 she12">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img class="card-img-top" height="200px" src={"https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png"} style={{backgroundColor:"#000"}} alt="Card image cap " />
                            <div class="card-body">
                                <p class="card-text cen">Modern Javascript Projects For Beginners
</p>
                            </div>
                        </div>
                    </div>


                    {/* 3st image */}
                    <div class="col-2 she12">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img class="card-img-top" height="200px" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"} style={{backgroundColor:"#000"}} alt="Card image cap " />
                            <div class="card-body">
                                <p class="card-text cen">Learn Vue.js The Progressive JavaScript Framework</p>
                            </div>
                        </div>
                    </div>



                    {/* 4st image */}
                    <div class="col-2 she12">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img class="card-img-top" height="200px" src={"https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png"} style={{backgroundColor:"#000"}} alt="Card image cap " />
                            <div class="card-body">
                                <p class="card-text cen">HTML & CSS - Certification Course For Beginners.</p>
                            </div>
                        </div>
                    </div>

                    {/* 4st image */}
                    <div class="col-2 she12">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img class="card-img-top" height="200px" src={"https://t3.ftcdn.net/jpg/01/70/28/92/360_F_170289223_KNx1FpHz8r5ody9XZq5kMOfNDxsZphLz.jpg"} style={{backgroundColor:"#000"}}  alt="Card image cap "  />
                            <div class="card-body">
                                <p class="card-text cen">Full Stack Java Developer - Java + JSP + Restful WS + Spring.</p>
                            </div>
                        </div>
                    </div>


                    {/* 4st image */}
                    <div class="col-2 she12">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img class="card-img-top" height="200px"  src={"https://lh3.googleusercontent.com/proxy/UIieqEtgNz0adrghdWPsEMdNHthvwXmtIDG6cMhaRUB0pmpCnx4MP0GJl2ylGhP5VWMyBTogr9VpXB0jzfFKYPs2Y0Mco06fA97FfcBqIt9bPWW2uy6sRz5VNw"} style={{backgroundColor:"#000"}} alt="Card image cap "  />
                            <div class="card-body">
                                <p class="card-text cen">Learn ASP.Net Web API 2 For Absolute Beginner.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



            <div style={{ backgroundColor: "#002147", marginBottom: "50px", paddingBottom: "30px", paddingTop: "27px" }}>
                <h2 className="cen text-white" style={{borderBottom: "4px solid white",borderTop: "4px solid white", paddingBottom: "15px",paddingTop: "15px"}}> <span class="mr-2 pl-3 " style={{
                    color: "#FFF0F5", fontSize: "50px",  fontWeight: "bold", border: "4px solid white"
                }}>Our </span>  Tutorials</h2> <br />
                

                <div className="container-fluid">
                    <div className="row " id="intro">

                        <div className="col-12 col-md-4 animate-box bord">
                            <div className="card dd ">
                                <FaHtml5 style={{color : "#ffc107"}} className="icons " />
                                <div className="card-body" >
                                    <h6 className="card-title cen">HTML</h6>
                                    <h6 className="card-text text-muted centt">The HyperText Markup Language, அல்லது HTML என்பது  web browser காண்பிக்க வடிவமைக்கப்பட்ட ஆவணங்களுக்கான நிலையான markup language ஆகும்.</h6>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-4 animate-box bord">
                            <div className="card dd">
                                <FaCss3Alt style={{color : "#ffc107"}} className="icons" />
                                <div className="card-body">
                                    <h6 className="card-title cen">CSS</h6>
                                    <h6 className="card-text text-muted centt">Cascading Style Sheets (CSS) என்பது ஒரு webpage ன் content ஐ user ன் பார்வைக்கு எப்படி தோற்றிவிப்பது என்பதை வரையறை செய்யும் ஒரு முக்கியமான language ஆகும்</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 animate-box bord">
                            <div className="card dd">
                                <DiJavascript style={{color : "#ffc107"}} className="icons" />
                                <div className="card-body">
                                    <h6 className="card-title cen">Java Script</h6>
                                    <h6 className="card-text text-muted centt">JavaScript ஒரு தனிப்பட்ட நிரலாக்க மொழி கிடையாது.இது Client side scripting language ஆகும்.இது html மற்றும் java போன்ற மொழிகளுடன் இணைந்து பயன்படுத்தப்படும்.</h6>
                                </div>
                            </div>
                        </div>

                    </div>{/* ROW 1 end */}




                    <br />
                    <br />

                    {/* Row 2 start */}

                    <div className="row">

                        <div className="col-12 col-md-4 animate-box">
                            <div className="card dd">
                                <SiBootstrap style={{color : "#ffc107"}} className="icons" />
                                <div className="card-body">
                                    <h6 className="card-title cen">Bootstrap</h6>
                                    <h6 className="card-text text-muted centt">Bootstrap என்பது வலை அபிவிருத்தியில் இயக்கப்பட்ட  இலவச மற்றும் திறந்த CSS கட்டமைப்பாகும் இது CSS மற்றும் JavaScript அடிப்படைகளைக்கொண்டது</h6>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-4 animate-box">
                            <div className="card dd">
                                <FaNode style={{color : "#ffc107"}} className="icons" />
                                <div className="card-body">
                                    <h6 className="card-title cen">Node JS</h6>
                                    <h6 className="card-text text-muted centt">NodeJS என்பது வேகமான மற்றும் அளவிடக்கூடிய பயன்பாடுகளை எளிதாக உருவாக்குவதற்காக Chrome இன் JavaScript இயக்க நேரத்தில் கட்டப்பட்ட ஒரு தளமாகும்.</h6>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-4 animate-box">
                            <div className="card dd">
                                <DiReact style={{color : "#ffc107"}} className="icons" />
                                <div className="card-body">
                                    <h6 className="card-title cen">React JS</h6>
                                    <h6 className="card-text text-muted centt">React என்பது பயனர் இடைமுகங்களை உருவாக்குவதற்கான JavaScript நூலகமாகும்.Single page பயன்பாடுகளை உருவாக்க React பயன்படுத்தப்படுகிறது</h6>
                                </div>
                            </div>

                        </div>


                    </div>


                    <br />
                    <br />

                    {/* row 3 start */}
                    <div className="row">

                        <div className="col-12 col-md-4 animate-box">
                            <div className="card dd">
                                <DiAngularSimple style={{color : "#ffc107"}} className="icons" />
                                <div className="card-body">
                                    <h6 className="card-title cen">AngularJS</h6>
                                    <h6 className="card-text text-muted centt">AngularJS என்பது ஒரு dynamic web பயன்பாட்டை உருவாக்க client side JavaScript MVC கட்டமைப்பாகும். AngularJS நிலையான HTML ஐ dynamic HTML ஆக மாற்றுகிறது</h6>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-4 animate-box">
                            <div className="card dd">
                                <DiJava style={{color : "#ffc107"}} className="icons" />
                                <div className="card-body">
                                    <h6 className="card-title cen">JAVA</h6>
                                    <h6 className="card-text text-muted centt">Java என்பது பல தளங்கள், பொருள் சார்ந்த மற்றும் Network மையப்படுத்தப்பட்ட நிரலாக்க மொழி Java என்பது ஒரு பொது நோக்கம், வர்க்க அடிப்படையிலான மொழி</h6>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-4 animate-box">
                            <div className="card dd">
                                <DiPython style={{color : "#ffc107"}} className="icons" />
                                <div className="card-body">
                                    <h6 className="card-title cen">Phython</h6>
                                    <h6 className="card-text text-muted centt">Python என்பது ஒரு உயர் மட்ட நிரலாக்க மொழியாகும். Python syntax ஆனது எளிமையாகவும் அனைவரும் புரிந்துக்கொள்ளும் படியாகவும் உள்ளது.</h6>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>{/* container */}

            </div>













           

            <div>


                
                <br /><br />
                <hr />
                {/* ------------------------------------------------counter--------------------------------------- */}
                <div style={{ width: "100%", height: "500px", marginLeft: "", backgroundColor: "#002147",marginBottom:"150px", paddingBottom: "150px" }}>
                    <h3 className="text-white text-center" style={{paddingTop: "50px"}}>Get Started With <span style={{ color: "white", fontSize: "35px", fontWeight: "bold" }}>R7-தமிழ்</span></h3>
                    <div className="row  " style={{ marginTop: "-200px" }}>




<div className="container">
                        <div className=" col-md-3 animate-box">
                            <div className=" dddd">
                                <AiOutlineGlobal style={{color: "white"}} className="iconss" />
                                <div className="card-body">
                                    <h6 style={{color: "white"}} className="card-title cen js-counter" data-from="0" data-to="3297" data-speed="5000" data-refresh-interval="50"></h6>
                                    <h6 className="card-text cen " style={{color: "white"}}>+Followers</h6>
                                </div>
                            </div>
                        </div>


                        <div className=" col-md-3 animate-box">
                            <div className= "dddd">
                                <FaGraduationCap style={{color: "white"}} className="iconss" />
                                <div className="card-body">
                                    <h6 style={{color: "white"}} className="card-title cen js-counter" data-from="0" data-to="3700" data-speed="5000" data-refresh-interval="50"></h6>
                                    <h6 className="card-text cen counter-label" style={{color: "white"}}>+StudentsEnroll</h6>
                                </div>
                            </div>

                        </div>

                        <div className=" col-md-3 animate-box">
                            <div className=" dddd">
                                <BsBook style={{color: "white"}} className="iconss" />
                                <div className="card-body">
                                    <h6 style={{color: "white"}} className="card-title cen js-counter" data-from="0" data-to="3000" data-speed="5000" data-refresh-interval="50"></h6>
                                    <h6 className="card-text  cen counter-label" style={{color: "white"}}>+Books</h6>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-3 animate-box">
                            <div className=" dddd">
                                <FaDiscourse style={{color: "white"}} className="iconss" />
                                <div className="card-body">
                                    <h6 style={{color: "white"}} className="card-title cen js-counter" data-from="0" data-to="3000" data-speed="5000" data-refresh-interval="50"></h6>
                                    <h6 className="card-text  cen" style={{color: "white"}}>+Courses</h6>
                                </div>
                            </div>

                        </div>

                        </div>

                    </div>
                    <hr />
                </div>

            </div>

            {/* ----------------------------------chat la poduratha podal--------------------- */}

            <div className=' p-5 bgimage'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1 className='textdesign'>Buy 8 books get a book</h1>

                        <div className="cen">
                            <a href='/books' className='btn' style={{backgroundColor: "#ffc107" }}>Shop Now</a>
                        </div>

                    </div>
                    <div className='col-lg-6'></div>
                </div>
            </div>

            <br />
                  </div>
    )
}

export default Home;
