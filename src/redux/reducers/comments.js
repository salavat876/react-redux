import {ADD_COMMENT,REMOVE_COMMENTS} from '../types'

const initialState = {
    comments:[]
}
const comments = (state = initialState,action) => {

    switch(action.type) {

        case ADD_COMMENT:
            return{
                ...state, comment:[...state,state.comment]            
            }


        case REMOVE_COMMENTS:
            return state.map((comment)=>{
                return comment.id != comment.id
            })
        
        default:
            return state;
    }
}

export default comments;