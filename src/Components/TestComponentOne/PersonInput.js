import React, { Component } from 'react'
import axios from 'axios'

class PersonInput extends Component {

    state = {
         name: ''
    }

    handleChange = e =>{
        this.setState({name: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name: this.state.name
        }
        axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
            .then(res => {
                console.log(res.data)
            })
            .then(
                axios.get('http://jsonplaceholder.typicode.com/users')
                .then(res1 => {
                console.log(res1.data)
                 })


            )
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    person name: 
                    <input type="text" name="name" onChange= {this.handleChange} />
                    </label>
                    <button type="submit">ADD</button>
                </form>
            </div>
        )
    }
}

export default PersonInput
