import React, {Component} from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        
        //TODO - set initial state for link name and URL 
        this.state = {
            title: "",
            URL: ""
        }
        
        
    }

    handleChange = event => {

        //  TODO - Logic for changing state based on form changes
        this.setState({
            title: event.target.value,

        })
          
    }

    changeURL = (event) => {

        this.setState({
            
            URL: event.target.value,
        })

    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();

         
            //TODO - Logic for calling props to handle submission and setting state changes
        this.props.handleSubmit(this.state)
        

    }


    render() {

        return (
            
            <form onSubmit={this.onFormSubmit}>
            {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label for="title">Title</label>
                <input type="text" value={this.state.title} onChange={this.handleChange}/>
                <label for="URL">URL</label>
                <input type="text" value={this.state.url} onChange={this.changeURL}/>
                <button type="submit"> Submit </button>
                
            </form>
        )
    
    }
}


export default Form;
