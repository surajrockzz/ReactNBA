import React,{Component} from 'react'
import Featured from './featured' 
import Subscribe from './subscribe'
import Blocks from './blocks'


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
            <div>
            <Featured slides={this.state.home.slider}/>
            <Subscribe/>
            <Blocks blocks={this.state.home.blocks}/>
            </div>
        )
    }
}

export default Home;