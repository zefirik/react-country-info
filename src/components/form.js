import React from "react";

class Form extends React.Component {
    render(){
        return(
                <form onSubmit = {this.props.dataForm}>
                    <input type="text" name="country" placeholder="enter country"/>
                    <button>Get country</button>
                </form>
        );
    }
}

export default Form;