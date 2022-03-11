class ShoeCard extends React.Component {

constructor(props){
    super(props);
}

    render(){
        return(
            <>
                <div className ="outside-card">
                        <img className ="images" src ={this.props.image} height ="300px" width ="300px"></img>
                        <h1 className ="name">{this.props.name}</h1>
                        <h1 className ="price">{this.props.price}</h1>
                        <div className ="review-row">
                            <img src ="images/star.png" height ="30px"></img>
                            <h1 className ="reviews">({this.props.reviews}) Reviews</h1>
                        </div>
                </div>
            </>
        )
    }
}