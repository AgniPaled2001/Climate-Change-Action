const Login = ()=> {
    return(
    <>
    <center><h1>LOGIN</h1>
    <label>Enter Name:-</label>
    <input type="text"></input><br></br><br></br>
    <label>Enter The Password:-</label>
    <input type="password"></input><br></br><br></br>
    <button>OK</button>
    <h1 class="pt-5 ps-3 pe-3 text-primary" >Let us join together</h1>  
    <div class="pb-2  "> 
     <button class="btn p-2 text-warning m-4"> <a class="nav-link text-warning">Contact Us</a></button>
   </div>
    <img src="https://miro.medium.com/v2/resize:fit:2400/1*aDT5b3T7zBUNALBRlikHjg.jpeg" style={{height:300}}></img>
    </center>
    </>
    )
};
export default Login;