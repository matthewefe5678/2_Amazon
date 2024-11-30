import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../App.css"


const NavigationPanel = () => {


    return (
        <div className="d-flex p-2 gap-3" style={{color:"white", backgroundColor:"green"}} >

            <h3 className="font-roboto">Amazon</h3>
            <div>
                <p className="m-0">Deliver to</p>
                <p className="m-0">Nigeria</p>
            </div>

           
            <div className="clearfix">
                <div className="floatItem" style={{height:"100%",backgroundColor:"blue", width:"5vw"}}>
                    <p style={{position:"relative", top:"50%", transform:"translate(0%, -50%"}}>all</p>
                </div>
                
                <input  className="floatItem" type="text" style={{height:"100%", width:"30vw", textAlign:"left"}} placeholder="Search Amazon" />
                
                <div className="floatItem" 
                style={{height:"100%",backgroundColor:"blue", width:"5vw"}}>
                    <div style={{position:"relative", top:"50%", transform:"translate(0%, -50%"}}>
                     <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    
                </div>

            </div>


            <div className="onClickShowBorder onHoverAccountList">
                <p className="mb-0 pt-1 pb-1 px-2" style={{fontSize:"12px"}} >Hello, sign in</p>
                <p className="mt-0" >Account & Lists

                <div className="showAccountDialog" style={{position:"absolute", backgroundColor:"cyan"}}>
                    <div style={{padding:"3vw"}}>
                        <button  style={{position:"relative", left:"50%", transform:"translate(-50%, 0)",
                            backgroundColor:"yellow", padding:"2px 100px", borderRadius:"5px", borderWidth:"0"
                        }}>Sign in</button>

                        <p style={{textAlign:"center", color:"black"}}>New customer? <a href="#">Start here.</a></p>
                    
                        <div>
                            <div style={{color:"black", float:"left"}}>
                                <h5 style={{fontWeight:"bold"}}>Your Lists</h5>
                                <ul style={{listStyle:"none"}}>
                                    <li><a href="#">Create a List</a></li>
                                    <li><a href="#">Find a List or Registry</a></li>
                                </ul>
                            </div>
                            <div style={{color:"black", float:"left"}}>
                                <h5 style={{fontWeight:"bold"}}>Your Account</h5>
                                <ul style={{listStyle:"none"}}>
                                    <li><a href="#">Account</a></li>
                                    <li><a href="#">Orders</a></li>
                                    <li><a href="#">Recommendations</a></li>
                                    <li><a href="#">Browsing History</a></li>
                                    <li><a href="#">WatchList</a></li>
                                    <li><a href="#">Video Purchase & Rentals</a></li>
                                    <li><a href="#">Kindle Unlimited</a></li>
                                    <li><a href="#">Content & Devices</a></li>
                                    <li><a href="#">Subscribe & Save Items</a></li>
                                    <li><a href="#">Membership & Subscriptions</a></li>
                                    <li><a href="#">Music library</a></li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>


                </p>

                
            </div>

            
                
         
            

        </div>
    )
};

export default NavigationPanel;