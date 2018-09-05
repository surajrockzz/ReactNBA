import React ,{Component} from 'react'



const BASE_URL = 'http://localhost:3004/teams'
class Poll extends Component{
    constructor(props){
        super(props)
        this.state={
            pollteams:''
        }
    }
    fetchPollTeams(){
        fetch(`${BASE_URL}?poll=true&_sort=count&_order=desc`,{method:'GET'})
        .then(response=> response.json())
        .then(json=>{
            this.setState({
                pollteams:json
            })
        })
    }
    componentDidMount(){
        this.fetchPollTeams()
    }
    addCount(count,id){
        fetch(`${BASE_URL}/${id}`,{
            method:'PATCH',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify({count:count+1})
        })
        .then(()=>this.fetchPollTeams())
    }
    renderpoll(){
        const position = ['1ST','2ND','3RD']
        if(this.state.pollteams){
        return this.state.pollteams.map((item,index)=>{
            return (
                <div key={item.id} className="poll_item">
                    <img alt={item.name} src={`../images/teams/${item.logo}`} onClick={()=> this.addCount(item.count,item.id)}/>
                    <h4>{position[index]}</h4>
                    <div>{item.count} Votes</div>
                </div>
            )
        })
    }
}


    render(){
        return (
           < div className="home_poll">
            <h3>Who will be the next champion?</h3>
            <div className="poll_container">  {this.renderpoll()}</div>
           </div>
        
        )  
      }
}

export default Poll