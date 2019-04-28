import React, { Component } from 'react'

class Output extends Component {
    constructor() {
        super()
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
    render() {
        const styles = {
            padding: "20px",
            width: "200px"
          }
          
          const titles = this.state.titles.map((titleList)=>{
              return <h3>{titleList}</h3>
          })
          const descriptions = this.state.descriptions.map((descriptionList)=>{
              return <h3>{descriptionList}</h3>
          })
          const images = this.state.images.map((imageList)=>{
              return <h3>{imageList}</h3>
          })

        return (
            <div style={styles}>
                <div>
                    Submissions: {titles}{descriptions}{images}
                    <img src={this.state.image} alt="" />
                </div>
            </div>
        )
    }
}
export default Output 