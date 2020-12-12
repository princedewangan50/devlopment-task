
const initialState = {
  ary: [
     { _id: 1,
      title: 'Intershala Task Deadline',
      body: 'create a todo app with all curd related task..'
     },
  ]
}

const reducer = (state=initialState,action)=>{

  switch(action.type){

    case "add_todo" : 
      Object.assign(action.value,{_id: state.ary.length+1})
      return{
        ary: state.ary.concat(action.value)
      }

    case "update_todo" :
      state.ary[action.key-1].title = action.value.title 
      state.ary[action.key-1].body = action.value.body 
      return {
        ary: state.ary
      }
  
    case "delete_todo":
      let du_array= [...state.ary]
      const ind = du_array.findIndex((element,index)=>{
        if(element._id == action.value){
          return index
        }
      })
      du_array.splice(ind, 1)
      return{
        ary: du_array
      }

    default:  
      return state  
  }
}
export default reducer