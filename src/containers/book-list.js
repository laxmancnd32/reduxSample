import React, { Component } from 'react';
import { connect } from 'react-redux';  //used to connect component and state.
import { selectBook } from '../actions/index';  
import { bindActionCreators} from 'redux';  //used to make sure action returned by ActionCreators get propagated to all reducers.

//Container is a component that has direct access to the state produced by Redux.
class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li 
                key={book.title} 
                onClick= {()=>this.props.selectBook(book)}
                className="listelements">
                {book.title}
                </li>
            );
        });
    }
    render(){
        return (
            <ul className="ulist">
                {this.renderList()}
            </ul>
        ) 
    }
}
//takes application state and whatever it returns shows as props inside container(BookList)
function mapStateToProps(state){
    return {
        books : state.books
    }
}
//whatever it returns(1st argument) shows as props inside container(BookList)
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to
    //all of our reducers(bindActionCreator with dispatch ensures it)
    return bindActionCreators({selectBook : selectBook},dispatch);    //value selectBook is the ActionCreator that we imported at top.
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
//connect takes a function and a component and produces container.