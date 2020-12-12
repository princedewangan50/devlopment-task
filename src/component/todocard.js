
import React, { Component } from 'react';

//style
import "../style/notecardStyle.scss";

class TodoCard extends Component {

  render() {
    const {title, body, editCall, key_, deleteCall} = this.props;
    
    return (

     <div className="note-card-container">
       <div className="note-card-content" onClick={editCall(key_)}>

        <div className="note-card-title">{title}</div>

        <div className="note-card-body">
            {body} 
          <div className="fade-out-truncation"></div>
        </div>
       </div>
       <div className="x-button" onClick={deleteCall(key_)}></div>
     </div>
    )          
  }
}

export default TodoCard;

