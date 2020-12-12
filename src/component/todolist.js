import React, { Component } from 'react';
import { connect } from 'react-redux';

//style
import "../style/notelistStyle.scss";
import TodoCard from './todocard';


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state={
      ary:[],
      search:''
    }
      // this.editCall_ = this.editCall_.bind(this)
  }

  componentWillMount(){
    this.setState({
      ary: this.props.ary
    })
  }

  getObj(event){
    const { param } = event.target.dataset;
    console.log(param)
  }


  editCall_ = (item)=>(e) => {
    this.props.history.push('/addtodo/'+ item)
    e.preventDefault()
  }

  deleteCall_ = (item)=>(e) => {
    debugger
    this.props.dispatch({
      type: 'delete_todo',
      value: item
    })
  }

  onChange = (e) => {
    this.setState({ search: e.target.value});
  }

  render() {
    return (
      <div className="main-container">

        <div className="search-bar-container">
          <div className="control has-icons-left has-icons-right">
            <input className="input is-small" onChange={this.onChange}
            value={this.state.search}
            placeholder="Search.."/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="notes-list">
          {

            this.props.ary.filter((data)=>{
              if(this.state.search == null)
                return data
              else if(data.title.toLowerCase()
                .includes(this.state.search.toLowerCase()) || data.body.toLowerCase().includes(this.state.search.toLowerCase())){
                    return data
                }
              }).map((res,index)=>(
              <TodoCard 
                title={res.title} 
                key_={res._id} 
                body={res.body} 
                key={res._id} 
                editCall={this.editCall_} 
                deleteCall={this.deleteCall_} 
              /> 
            ))
          }
        </div>

        <button className="button floatin-add-button" onClick={()=>this.props.history.push('/addtodo')}>+ Add</button>
      </div>
    );
  }
}

const reciver = (state)=>{
  return{
    ary: state.ary,
  }
}

export default connect(reciver)(TodoList);