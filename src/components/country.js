import React from "react";

class Country extends React.Component {
    render(){
        return(
             <div> 
                {this.props.official &&
                    <div>
                    <p>Official Name: {this.props.official}</p>
                    <p>Official (Native) Name: {this.props.official_native}</p>
                    <p>Capital: {this.props.capital}</p> 
                    <p>Currency: {this.props.currency}</p>
                    <p>Language: {this.props.language}</p>
                    <img title="flag" src={this.props.flag} alt="flag" />
                  </div>
                }
                <span>{this.props.error}</span>
             </div>  
        );
    }
}

export default Country;

