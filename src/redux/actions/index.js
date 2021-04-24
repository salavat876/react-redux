import {idCreate} from '../idCreate'
export const action_add_comments = (comment) =>{
    return{
        type:'ADD_COMMENTS',
        id:idCreate(),
        comment:comment
    }
}

export const action_remove_comments = () =>{
    return {
        type:'REMOVE_COMMENTS',
    }
}