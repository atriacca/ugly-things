import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            image: "",
            titles: [],
            descriptions: [],
            images: [],
        }
            // this.handleChange = this.handleChange.bind(this)
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return {
                title: "",
                description: "",
                image: "",
                titles: [prevState.title, ...prevState.titles],
                descriptions: [prevState.description, ...prevState.descriptions],
                images: [prevState.image, ...prevState.images],
            }
        })
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const styles = {
            padding: "20px",
            width: "200px"
        }

        return (
            <div>
                <form onSubmit={this.onSubmit} style={styles}>
                    <h3>Ugly Things</h3>
                    <input name="title" value={this.state.title} type="text" placeholder="Name the thing" onChange={this.handleChange} />
                    <input name="description" value={this.state.description} type="text" placeholder="Describe the thing" onChange={this.handleChange} />
                    <input name="image" value={this.state.image} type="url" placeholder="The URL for the thing" onChange={this.handleChange} />
                    <button>Click to submit</button>
                </form>
            </div>
        )
    }
}
export default Form 
<input name="image" value={this.state.image} type="url" placeholder="The URL for the thing" onChange={this.handleChange} />
