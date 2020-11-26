import React, { Component } from 'react'

class Form extends Component{
    state={
        userName:''
    }

    handleSubmit = async(e)=>{
        e.preventDefault()
        const resp =await fetch(`https://api.github.com/users/${this.state.userName}`)
        const data = await resp.json()
        this.props.onAdd(data)
        this.setState({userName:''})
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Github username..." 
                    value = {this.state.userName}
                    onChange={e => this.setState({userName: e.target.value})}
                />
                <button>Add card</button>
            </form>
        )
    }

}
export default Form