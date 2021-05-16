// import React, { useContext, useState } from 'react'
import img4 from '../images/img4.png'
import img5 from '../images/img5.jpg'
import {FaRegHandPointRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Books from '../component/book'
import Footer from '../component/footer'
function Tags(){
    return(
        <div>
<div className="navbar-nav ultra">
    <h3 className="cen">HTML Tags</h3>


<p className="cen">
Tag ஆனது தகவல்களின் வகையை வரையறுக்கப் பயன்படுகின்றது இது இரண்டு வகையாக
பிரிக்கப்படுகின்றது <br />
1.Opening Tags இது தகவல் ஆரம்பிக்கின்றது என்பதை உணர்த்தும் உதாரணம்:- &lt;p&gt;<br />
2.Closing Tags இது தகவல் முடிவுற்றது என்பதை உணர்த்தும் உதாரணம்:- &lt;/p&gt;
</p>
<img src={img5} id="img5"/>
<br />
<h3 className="cen">சில tags களும் விளக்கமும்</h3>

 <div className="hands">
  {/*  <p> */}
 <FaRegHandPointRight className="pointr"/>   &lt;p&gt; =&gt; (Pragraph) ஒரு பந்தியை உருவாக்குவதற்குப் பயன்படும்<br />
 <FaRegHandPointRight className="pointr"/>   &lt;br&gt; =&gt; (Line break) body tag இல் உள்ளவற்றை அடுத்தடுத்த வரிகளில் கொண்டுவருவதற்கு பயன்படுத்தப்படும்<br />
<FaRegHandPointRight className="pointr"/> &lt;h1&gt; =&gt; (Heading) தலைப்பாக கொடுக்க விரும்பும் வார்த்தைகள் heading tag ன் உள் கொடுக்கப்படும் இது 6 வகைப்படும் 
<li className="cen"> &lt;h2&gt;,&lt;h3&gt;,&lt;h4&gt; ..... &lt;h6&gt; இவை முறையே எழுத்துக்கள் சிறிதாகி கொண்டு செல்லும்.</li>
    <FaRegHandPointRight className="pointr"/>&lt;sup&gt; =&gt; (Superscript) ஒரு சில எண்ககளை எழுத்துக்களின் மேற்பகுதியில் குறிப்பிட பயன்படுகின்றது.
  <br /> <FaRegHandPointRight className="pointr"/> &lt;sub&gt; =&gt; (Subscript) ஒரு சில எண்ககளை எழுத்துக்களின் கீழ்ப்பகுதியில் குறிப்பிட பயன்படுகின்றது
  <br /> <FaRegHandPointRight className="pointr"/> &lt;pre&gt; =&gt; (Preservative) body tag இல் உள்ளவற்றை அதன் வடிவம் கொஞ்சம் கூட மாறாமல் அப்படியே browser இல் 
  <li className="cen">வெளிப்படுத்த உதவுகின்றது.</li>
   <FaRegHandPointRight className="pointr"/> &lt;b&gt; =&gt; (Bold) ஒரு சில வரிகளை bold ஆக காட்டுவதற்கு பயன்படுகின்றது.
  <br /> <FaRegHandPointRight className="pointr"/> &lt;i&gt; =&gt; (Italic) எழுத்துக்களை  சாய்வெளுத்துக்களாக காட்டுவதற்கு பயன்படுகின்றது.
  <br /> <FaRegHandPointRight className="pointr"/> &lt;a&gt; =&gt; (anchor) link ஐ உருவாக்குவதற்கு பயன்படுகின்றது இதனை நாம் click செய்யும்போது எந்த இடத்திற்கு செல்ல 
  <li className="cen"> வேண்டும் என்பதை href (Hypertext reference) எனும் பண்பு தீர்மானிக்கும்</li>
   <FaRegHandPointRight className="pointr"/> &lt;input&gt; =&gt; பயனர்களிடம் இருந்து தகவல்களைப் பெற்றுக்கொள்ள பயன்படுகின்றது
  {/* </p>*/}
    
</div> 

<br />
<h3 className="cen">Attributes</h3>
<p className="cen">
Tags ஐ பயன்படுத்தும்போது அதிக நேரங்களில் Attributes பயன்படுத்தவேண்டி வரும்
Attributes என்பது html element பற்றிய மேலதிக தகவலாகும்
Attribute ஆனது எப்போதுமே name-value ஜோடி ஆகவே வரும்.<br />
</p>
EX:-
<img src={img4} className="img4"/>
<br />
<h3 className="cen">சில Attribute களும் விளக்கமும்</h3>
    <div className="note">
        <h5 >Note:-</h5>
    <p>Attributes எப்பொழுதும் Opening tag-க்கு உள்ளே தான் குறிப்பிட வேண்டும்.</p>
    <p>ஒரு html tag-ல் ஒன்று அல்லது அதற்க்கு மேற்பட்ட attributes களை குறிப்பிடலாம்.</p>
    <p>அனைத்து html tag-க்கும் வெவ்வேறு விதமான attributes இருக்கும்.</p>
    <p>சில attributes-களை, சில html tags-களில் மட்டும் தான் பயன்படுத்த முடியும்.</p>

    </div>
    <br />
    <div>
            <p className="cen">
                <b>height:-</b> உள்ளடக்கத்தின் நீளத்தினை மாற்றி அமைப்பதற்கு பயன்படுகின்றது.<br />
                <b>width:-</b>உள்ளடக்கத்தின் அகலத்தினை மாற்றி அமைப்பதற்கு பயன்படுகின்றது.<br />
                <b>value:-</b> tage உரிய மதிப்பினைக் கொண்டிருக்கும்
                {/* <b>style:-</b>  */}
            </p>
    </div>
            <h4 className="cen"> மேலும் படிக்க புத்தகங்களை கொள்வனவு செய்யுங்கள்</h4>
<div className="cen">
 <Link to="/basic"><button className="btn btn-dark">prev</button></Link>
<button className="btn btn-dark my-3 ml-4"><a href="/books " className="book">Books</a></button>

</div>

    

</div>

</div>
        )
}

export default Tags

