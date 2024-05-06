import { Component } from "react";


class GoodEveningComponent extends Component {
constructor (props) {
    super(props);
    this.state = {greeting: "Good evening"};
}
render () {
    return (
        
        <div>
        {this.state.greeting}</div>
       
    );
}
}




export default GoodEveningComponent;