import React from 'react';

const Comments = ({userName,comment,date,removeComments,id})=>{


    return(
        <div key ={id} className ="item-comment">
            <div className="flex-row">

                <div className="userName">
                    <span className="userName_span">Имя:</span>
                    {userName}
                    <div> </div>
                </div>

                <p className="comment-text">
                    {comment}
                </p>
            </div>


            <button className="item-delete" onClick={()=>removeComments(id)}>
                X
            </button>
        </div>
    )
}

export default Comments;