class Navbar extends React.Component {
 
    render(){
        return(
            <nav>
                <div className ="navbar1">
                    <h1 className ="nav1-button">Help</h1>
                    <p className ="nav1-button">|</p>
                    <h1 className ="nav1-button">Sign Up</h1>
                    <p className ="nav1-button">|</p>
                    <h1 className ="nav1-button">Login</h1>
                </div>
                <div className ="navbar2">
                    <img className ="logo" src ="images/shoes.png" height ="100px"></img>
                    <h1 className ="logo-text">Shoes.com</h1>
                    <input className ="searchbar" type ="text" placeholder ="Search for Shoes..."></input>
                    <h1 className ="nav2-button">New Releases</h1>
                    <h1 className ="nav2-button">Mens</h1>
                    <h1 className ="nav2-button">Womens</h1>
                    <h1 className ="nav2-button">Boys</h1>
                    <h1 className ="nav2-button">Girls</h1>

                </div>        
            </nav>
        )
    }


}