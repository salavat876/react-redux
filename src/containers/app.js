//import react-redux
import {bindActionCreators} from 'redux';
import React from 'react';

//import dumb-component
import Info from '../components/Info';
import InputForm from '../components/form';
import Comments from '../components/comments';

//import action-Creators
import{action_add_comments,action_remove_comments} from '../redux/actions/index'
import { connect } from 'react-redux';




function App(){

    return(
        <div className="fixed-container">
            <Info />
            <InputForm
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addComments:bindActionCreators(action_add_comments,dispatch),
        removeComments:bindActionCreators(action_remove_comments,dispatch)
    }
}

const mapStateToProps = (state) => {
    return{
        userName: state.name,
        comment:state.comment,
        date:state.date
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)