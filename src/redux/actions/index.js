import {idCreate} from '../idCreate'
export const action_add_comments = ({comment,name,date}) =>{
    return{
        type:'ADD_COMMENTS',
        id:idCreate(),
        name,
        comment,
        date
    }
}

export const action_remove_comments = () =>{
    return {
        type:'REMOVE_COMMENTS',
    }
}