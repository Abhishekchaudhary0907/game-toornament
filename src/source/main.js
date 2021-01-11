import {  Component, react} from "react";
class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:"abhishek",
        };
    }

    render(){
        const name = this.state.name;
        return(
            <h1>{name}</h1>
        )

    }
}
export default Main;