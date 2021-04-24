import {idCreate} from '../idCreate';

import {ADD_COMMENT,REMOVE_COMMENTS} from '../types'

export const action_add_comments = (comment) =>{
    return{
        type:ADD_COMMENT,
        id:idCreate(),
        comment:comment
    }
}

export const action_remove_comments = () =>{
    return {
        type:REMOVE_COMMENTS,
    }
}