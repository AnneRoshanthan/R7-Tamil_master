import React,{ useContext}  from 'react'
import {GlobalState} from './GlobelState'
import {BrowserRouter as Router,NavLink,Route,Switch} from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import '../App.css'
import Home from '../Home/home';
import notFound from './notfound'
import Books from './book'
import Details from './details';
import axios from 'axios';
import Cart from './cart'
import Categories from './createBook'
import OrderHistory from './orderHistory'
import OrderDetails from './orders'
import Footer from './footer'
import Tutorials from '../Home/tutorials'
import Categoriess from "./createproduct"


    const  Navbar = () => { 

        const state = useContext(GlobalState)
        // console.log(state)

        const [isLogged] = state.userAPI.isLogged
        const [isAdmin]  = state.userAPI.isAdmin
        const [cart] = state.userAPI.cart
       

      const  logoutUser = async() =>{
          await axios.get('/user/logout')
          localStorage.removeItem('firstLogin')
          window.location.href="/books";
      }



        const adminRouter = () =>{
            return(
                <div className="navbar-nav">
                    <li className="nav-item"><NavLink to="/create_product"  className="nav-link" ><i class="fa fa-plus text-white mr-1"></i>Create category</NavLink></li>
                    <li className="nav-item"><NavLink to="/product"  className="nav-link" ><i class="fa fa-book text-white mr-1"></i>Create Books</NavLink></li>

                </div>
            )
        }

        const loggedRouter = () =>{
            return(
                <div className="navbar-nav ml-auto">
                    <li className="nav-item"><NavLink to="/history"  className="nav-link" ><i class="fa fa-history text-white mr-1"></i>Orders</NavLink></li>
                    <li className="nav-item"><NavLink to="/logout"  onClick={logoutUser} className="nav-link"><i class="fa fa-sign-out text-white mr-1"></i>Logout</NavLink></li>

                </div>
            )
        }


        const adRouter = () =>{
            return(
                <div className="navbar-nav ml-auto">
                    <li className="nav-item"><NavLink to="/books"  className="nav-link" exact><i class="fa fa-users text-white mr-1"></i>Admin Panel</NavLink></li>

                </div>
            )
        }



        return(
           <div> 
            <Router>
            
            <nav className="navbar  navbar-expand-md colo" >
        <div className="container-fluid navbar-dark ">
            <div className="navbar-header">
                <a href="#!"  className="navbar-brand " id="Show" ><i className="R7 text-white">R7-<b>தமிழ்</b></i></a>
            </div>{/*<!--Nav-Header-->*/}

            <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarsExample09"> 
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>

            <div className="navbar-collapse collapse" id="navbar" >
               
               
                {
                    isAdmin ? adRouter () :
                <div>
                     <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to='/'  className="nav-link" exact > <i class="fa fa-home text-white"></i> Home</NavLink></li>
                    <li className="nav-item"><NavLink to='/tutorials'  className="nav-link" ><i class="fa fa-code text-white mr-1" ></i>Tutorials</NavLink></li>
                    <li className="nav-item"><NavLink to='/books'  className="nav-link" ><i class="fa fa-book text-white mr-1" aria-hidden="true"></i> Books</NavLink></li>

                    </ul>
                    </div>           
    }
                

                {isAdmin && adminRouter()}{
                    isLogged ? loggedRouter () :
                <div className="navbar-nav ml-auto">
                    <li className="nav-item"><NavLink to='/login'  className="nav-link"  ><i className="fa fa-sign-in text-white mr-1" ></i>Log in</NavLink></li>
                    <li className="nav-item"><NavLink to='/signup'  className="nav-link" ><i class="fa fa-user-plus text-white mr-1"></i>Sign up</NavLink></li>
                </div>
    }

{
    isAdmin ? '' 

:<div className="navbar-nav ">
    <li className="nav-item"><NavLink to='/cart'  className="nav-link" ><i class="fa fa-shopping-bag text-white mr-1" aria-hidden="true"></i>Shop <span style={{color:'#ffc107'}}>{cart.length}</span></NavLink></li>
 </div>

    }

            </div>{/* <!--Nav-collapse--> */}
            
            
            
        </div>{/* <!--container--> */}
    </nav>
    
    <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/signup" component={isLogged ? notFound : Signup} />
 <Route exact path="/login" component={isLogged ? notFound : Login} />
 <Route exact path="/create_product" component={isAdmin ? Categories: notFound } />
 <Route exact path="/product" component={isAdmin ? Categoriess: notFound } />
 <Route exact path="/edit/:id" component={isAdmin ? Categoriess: notFound } />
 <Route exact path="/history" component={isLogged ? OrderHistory : notFound}  />
 <Route exact path="/history/:id" component={isLogged ? OrderDetails : notFound}  />
 <Route exact path="/tutorials" component={Tutorials} />

 <Route exact path="/books" component={Books} />
 <Route exact path="/cart" component={Cart} />
 <Route exact path="/detail/:id" component={Details} />
 <Route exact path="*" component={notFound} />


    </Switch>
    
</Router>

<div>
    <Footer />
</div>

</div>
        )
    }

export default Navbar;


