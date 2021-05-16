import '../css/footer.css'
import React from 'react'
import '../css/verticaltab.css'
import { DiReact ,DiJava ,DiJavascript,DiAngularSimple,DiPython} from "react-icons/di";
import {FaHtml5 ,FaCss3Alt,FaNode,FaBlogger,FaGraduationCap,FaDiscourse} from "react-icons/fa";
import {SiBootstrap} from "react-icons/si";
import {AiFillGithub ,AiFillLinkedin,AiFillFacebook,AiOutlineGlobal} from "react-icons/ai";
import {BsBook} from "react-icons/bs";

function Footer(){
        return(
<div>
    
{/* ------------------------- footer-------------------------------------  */}


<footer id="footerr ">
<div className="backgro text-white" style={{backgroundColor: "#002147"}}>			
						<div className="row justin" >
							<div className="col-12 col-md-4  mt-5 ">
								<h3 >About us</h3>
								<p>The main purpose of your About Us <br /> page is to give your visitors a glimpse <br />into who you are as a person or a business 
								</p>
							</div>

							<div className="col-12 col-md-4  mt-5 ">
								<h3>Contact us</h3>
								<p>+94 776 75 4345 
                                    <br />
                                    r7-tamil@gmail.com <br />
                                    r7-tamil@yahoo.com.au

                                </p>
							</div>

                            <div className="col-12 col-md-4  mt-5 ">
								<h3>Services</h3>
								<p>
                                    24/7 Customer service <br/>
                                    Shop in Srilanka<br />
                                    Secure perment
                                </p>
							</div>

                           

</div>


<br /><br />
<h3 className="center">Follow us</h3>
				
								<ul className="cen">
									<li className="display d2"><a href="https://anneroshanthan.github.io/" className="link" target="blank"><AiFillGithub   className="ICON d2"/></a></li>
									<li className="display d2"><a href="https://www.linkedin.com/in/anne-roshanthan-05113a210/" className="link" target="blank"><AiFillLinkedin className="ICON d2"/></a></li>
									<li className="display d2"><a href="https://ukilifexercise.blogspot.com/" className="link"target="blank"><FaBlogger      className="ICON d2"/></a></li>
									<li className="display d2"><a href="#" className="link" target="blank"><AiFillFacebook className="ICON d2"/></a></li>
								</ul>
<div className="bgg">
        <div className=" text-center text-muted" style={{backgroundColor: "white", color:"black"}}>
            <h4 style={{color:"black"}}>&copy; 2021 All Rights Reserved by R7-Tamil</h4>
         </div>
        </div>
                             
                                </div>


</footer>






</div>
        )
}

export default Footer