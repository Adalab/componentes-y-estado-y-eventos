import React from 'react';


class Text extends React.Component{
    render(){
        return(
            <div>
                <input type="text" onKeyUp={this.props.handleKeyPress}/>
                <p>{this.props.text}</p>
            </div>
        );
    }
}


export default Text;