import {addComments,removeComments} from './types'

const comments =(state,action) => {


    switch(action.type) {

        case addComments:
            return[
                ...state,
                {
                    id:Math.random().toString(36).substr(2,9),
                    name:action.name,
                    comment:action.comment,
                    date:action.date
                }
            ]

        case removeComments:
            return state.map((comment)=>{
                return comment.id != id
            })
        
        default:
            return state;
    }
}

export default comments;