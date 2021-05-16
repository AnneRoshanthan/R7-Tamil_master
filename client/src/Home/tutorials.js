import {BrowserRouter as Router,NavLink,Route,Switch} from 'react-router-dom';
import Basic from './basic'
import Intro from './intro'
import Tags from './tags';

function Tutorial(){
        return(
<div>


<Router> 
<div className="tab">
  
        <div className="navbar-nav ul">
<h5>HTML Tutorial</h5>
        <NavLink to="/tutorials/"  className="nav-link li cen" exact activeStyle={{backgroundColor:'#ccc'}}>HTML Intro</NavLink >
        <NavLink to="/basic"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>HTML Editor</NavLink >
        <NavLink to="/tags"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>HTML Tags</NavLink >
<br />
        <h5>Css Tutorial</h5>
        <NavLink to="/cssSliderintro"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>CSS Intro</NavLink >
        <NavLink to="/cssbasic"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>CSS Basic</NavLink >
        <NavLink to="/csselement"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>CSS Elements</NavLink >
        <br />

        <h5>Javascript Tutorial</h5>
        <NavLink to="/javaintro"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>Javascript Intro</NavLink >
        <NavLink to="/javabasic"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>Javascript Basic</NavLink >
        <NavLink to="/javaelement"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>Javascript Elements</NavLink >
        <br />

        <h5>Phython Tutorial</h5>
        <NavLink to="/javaintro"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>Javascript Intro</NavLink >
        <NavLink to="/javabasic"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>Javascript Basic</NavLink >
        <NavLink to="/javaelement"  className="nav-link li cen" activeStyle={{backgroundColor:'#ccc'}}>Javascript Elements</NavLink >

        </div>
    </div>


    <Switch>
   <Route exact path="/tutorials/" component={Intro} />
   <Route exact path="/basic" component={Basic} />
   <Route exact path="/tags" component={Tags} />

   </Switch>

    </Router>









</div>
        )
}

export default Tutorial