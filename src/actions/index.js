export const action_add_comments = ({comment,name}) =>{
    return{
        type:'ADD_COMMENTS',
        id:Math.random().toString(36).substr(2,9),
        name,
        comment
    }
}

export const action_remove_comments = () =>{
    return {
        type:'REMOVE_COMMENTS',
    }
}