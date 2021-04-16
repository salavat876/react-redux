export const addComments = ({comment,name}) =>{
    return{
        type:'ADD_COMMENTS',
        id:Math.random().toString(36).substr(2,9),
        name,
        comment
    }
}

export const removeComments = (id) =>{
    return {
        type:'REMOVE_COMMENTS',
        id
    }
}