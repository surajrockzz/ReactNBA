import React,{Component} from 'react'

class Subscribe extends Component{
    constructor(props){
        super(props)

        this.state={
            email:''
        }
    }
    onChangeInput = (event)=>{
        this.setState({
            email:event.target.value
        })
    }
     clearMessages() {
        setTimeout(function(){
                this.setState({
                    error:false,
                    success:false
                })
            }.bind(this),3000)
}
    saveSubscription = (email)=>{
        const REQ_URL = `http://localhost:3004/subscriptions`;
        fetch(REQ_URL,{
            method:'post', 
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email})
        }).then(res=> res.json())
        .then(()=>{
            this.setState({
                email:'',
                success:true
            })
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        let email = this.state.email;
        let regex =/\S+@\S+\.\S+/;
        if(regex.test(email)){
            this.saveSubscription(email)
        }
        else{
                this.setState({
                    error:true
                })
        }
        this.clearMessages();
    }

    render(){
        return (
            <div className="subcribe_panel">
                <h3>Subscribe to us </h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="youremail@gmail.com"
                        value={this.state.email} onChange={this.onChangeInput}/>
                        <div className={this.state.error?"error show":"error"}>Check the email</div>
                        <div className={this.state.success?"success show":"success"}>Thank you</div>
                    </form>
                </div>
                < small >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </small>
            </div>
        )
    }

}

export default Subscribe