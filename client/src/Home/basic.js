// import { SiSublimetext,SiVisualstudiocode} from "react-icons/si";
// import { DiAtom } from "react-icons/di";
import sub from '../images/sublime.png'
import vim from '../images/vim.png'
import vs from '../images/vscode.png'
import atom from '../images/atom.png'
import textmate from '../images/Textmate.png'
import ue from '../images/UltraEdit.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import { FaRegHandPointUp } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'



function Basic(){
    return(
        <div>
        <div className="navbar-nav ultra">

            <h2 className="cen">Html Editors</h2>

<p className="cen">HTML ஆனது ஏதாவது ஒரு Text editor இல் எழுதப்படும்
ஆரம்ப காலங்களில் Notepad ஐ பயன்படுத்தி Html எழுதப்பட்டாலும் 
  தற்காலத்தில் HTML ஆனது தொழில்முறை editorளை பயன்படுத்தி எழுதப்படுகின்றது. 
</p>

<h4 className="cen"> சில Text Editors</h4>

       
<div className="row">
           
           <div className="col-12 col-md-4 animate-box">
             < img src={sub} className="icons2" />  
               <div className="card-body">
               <h6 className="card-title cen">Sublime</h6>
           </div>
           </div>
   
            
               <div className="col-12 col-md-4 animate-box">
               <img src={vs} className="icons2"/>  
                   <div className="card-body">
                       <h6 className="card-title cen">Visualstudiocode</h6>
                   </div>
                
                   
                   </div>

                   <div className="col-12 col-md-4 animate-box">
               <img src={atom} className="icons2"/>  
                   <div className="card-body">
                       <h6 className="card-title cen"> Atom</h6>
                   </div>
                   
                   
                   </div>
        
        

</div>


<div className="row">
           
           <div className="col-12 col-md-4 animate-box">
             < img src={vim} className="icons2" />  
               <div className="card-body">
               <h6 className="card-title cen">Vim</h6>
           </div>
           </div>
   
            
               <div className="col-12 col-md-4 animate-box">
               <img src={ue} className="icons2"/>  
                   <div className="card-body">
                       <h6 className="card-title cen">Ultraedit</h6>
                   </div>
                
                   
                   </div>

                   <div className="col-12 col-md-4 animate-box">
               <img src={textmate} className="icons2"/>  
                   <div className="card-body">
                       <h6 className="card-title cen"> textmate</h6>
                   </div>
                   
                   
                   </div>
        

</div>


<p className="cen"> நீங்கள் ஏதாவது ஒரு Text Editor ஐ உங்கள் கணனியில் நிறுவிக்கொள்ளுங்கள்
பின்னர் படத்தில் காட்டியவாறு Html coding ஐ எழுதிக்கொள்ளுங்கள்</p>
<img src={img2} className="img2"/>
<br />
        <p className="cen">   இதனை .html எனும் extension உடன் சேமித்தல் வேண்டும் பின்னர் அப் file ஐ open  செய்யும்போது அது
        Browser ல் பின்வருமாறு தெரியும்
</p>


<img src={img3} className="img3"/><br />
<p className="cen">  <FaRegHandPointUp className="uphand"/>  மேல் காட்டியவாறு தான் வலைத்தளங்கள் உருவாக்கப்படும்   <FaRegHandPointUp className="uphand"/>   </p>
<div className="cen Nb"><br />

<div className="cen">
 <Link to="/tutorials/"><button className="btn btn-dark">prev</button></Link>
<NavLink to="/tags"><button className="btn btn-dark my-3 ml-4">Next</button></NavLink>
</div>
</div>

</div>

     </div>
    )
}

export default Basic