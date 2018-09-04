import React,{Component} from 'react'
import Featured from './featured' 


const BASE_URL = 'http://localhost:3004/home'
class Home extends Component
{
    constructor(props){
        super(props);
        this.state = {
            home:''
        }
    }
    componentDidMount(){
        fetch(BASE_URL,{method:'GET'})
        .then(response => response.json())
        .then(json=>{
            this.setState({
                home:json
            })
        })
    }
    render(){
        return (
            <Featured slides={this.state.home.slider}/>
        )
    }
}

export default Home;