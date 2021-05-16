import { ImHtmlFive } from "react-icons/im";
import { Link } from "react-router-dom";
import img from '../images/img.png'
import {FaRegHandPointRight} from 'react-icons/fa'
function Intro(){
    return(
<div>
    <div className="">
    <div className="navbar-nav ultra">
    
<h2 className="cen">HTML அறிமுகம்</h2><br />
<div>
          <p className="intro">  Hyper Text Markup Language என்பதே  <b>HTML</b> என்று அழைக்கப்படுகின்றது. இது ஒரு வலைத்தளத்தை உருவாக்க பயன்படும் மொழியாகும்
HTML ஐ பயன்படுத்தி Text-Editor இல் உருவாக்கப்படும் Programme ஆனது .html எனும் Extension உடன் சேமிக்கப்படும்
 File ஆனது Brower இல் வெளிப்படும் போது அழகிய வலைத்தளமாக தெரியும்.

{/* <p className="intro"> */}
    Text Editor இல் கொடுக்கப்படும் சாதாரண Text ஆனது பல்வேறு tags உடன் இணைந்து
Hypertext ஆக மாறுகின்றது இந்த Hypertext மூலமாக Brower க்கு கட்டளைகளை
பிறப்பிப்பதே Markup எனப்படும் இதுவே Hypertext Markup Language எனும் பெயர் உருவாகக்காரணம்.
</p>
</div>
<br />

<div className="animate-box">
<ImHtmlFive className="intro-img"/>
<div >
    <h5 className="cen intro-h5 bg-intro">    
        HTML ஐ கற்றுக்கொள்ள தேவையான விடயங்கள் 
        

<li>1. Browser:-Google Chrome,Firefox...</li>
<li>2. Text Editors:-Sublime,Notepad++,Vscode....</li>
<br />
<li>Html இல் வலைத்தளங்கள்  Tags ஐ பயன்படுத்தி உருவாக்கப்படும்</li><br />
<li> HTML ஆனது "இது ஒரு தலைப்பு", "இது ஒரு பத்தி", "இது ஒரு இணைப்பு" போன்ற உள்ளடக்கத்தின் துண்டுகளை அடையாளம் செய்கிறது.</li>

</h5>
</div>


<br />


<h2 className="cen">HTML Tags</h2>
<div className="line">
<FaRegHandPointRight  className="point"/>  ஒரு Html programme ஐ எழுதுவதற்கு மிக முக்கியமானது tags ஆகும்<br />
<FaRegHandPointRight  className="point"/>  <b>&lt;!DOCTYPE </b>html&gt; எந்த version ல் HTML page எழுதபட்டிருக்கிறது என்பதை browser க்கு தெரியபடுத்தும்<br />
<FaRegHandPointRight  className="point"/>  <b>&lt;html&gt; </b>முதன்முதலில் கொடுக்கப்படும் இந்த tag-ஆனது browser-க்கு இது ஒரு html program என்பதை உணர்த்தும் <br />
<FaRegHandPointRight  className="point"/>  <b>&lt;head&gt; </b>இந்த tag-ஆனது Webpage ன் தலைப்பை அமைக்க பயன்படுகின்றது<br />
<FaRegHandPointRight  className="point"/>  <b>&lt;title&gt;</b> எனும் tag ஆனது &lt;head&gt; எனும் tag இன் உள் கொடுக்கப்படும்.<br />
<FaRegHandPointRight  className="point"/>  title எனும் tag இன் உள் கொடுக்கப்படும் வார்த்தைகளே வலைத்தளத்தின் தலைப்பாக அமையும்<br />
<FaRegHandPointRight  className="point"/>  <b>&lt;body&gt;</b> எனும் tag இன் உள் வலைத்தளத்தில் இடம் பெறவேண்டிய மொத்த சாராம்சமும் அடங்கும்.

</div>
<h6 className="note my-3 cen">Note:-  தலைப்பினை நீங்கள் கொடுத்தாலும் கொடுக்காவிட்டாலும் இந்த title tag ஐ ஒவ்வொரு வலைத்தளத்திலும் பயன்படுத்த வேண்டும்</h6>
<br />
<h3 className="cen"> html இன் அடிப்படை அமைப்பு </h3>
<img src={img} className="ht-img"/>
<div className="cen mt-5">
<Link to="/basic"><button className="btn btn-dark">Next</button></Link>
</div>
            </div>
       </div>
   </div> 
</div>

    )
}

export default Intro