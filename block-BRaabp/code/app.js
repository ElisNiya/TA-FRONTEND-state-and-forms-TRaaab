class App extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             isLoggedIn: false,
             inputText: "",
         }
     }
     handleClick = () => {
         this.setState((prevState) => {
             return {
                 isLoggedIn: !prevState.isLoggedIn
             }
         })
     }
     handleView = (userStatus) => {
        if(userStatus ) {
            return <User />;
        } else {
            return <Guest />;
        }
    }

    handleChange = (event) => {

    }
    
    render(){
         return(
            <> 
            <button onClick={this.handleClick}> 
            {this.state.isLoggedIn ? "Logout" : "Login"}
            </button> 
            <input onChange = {this.handleChange}></input>
            </>
         )  
    }
}

