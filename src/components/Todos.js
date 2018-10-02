import React, { Component } from 'react';
import '../css/Todos.css';
import { connect } from 'react-redux';
import { getAllPost } from '../actions/Post';
import Spinner from '../assets/spinner/Spinner';

class Todos extends Component {

    componentWillMount() {
        this.props.getAllPost({url: 'https://jsonplaceholder.typicode.com/posts'});
    }

    render() {

        const { todos, posts, isLoading } = this.props;

        const todosCollection = todos.length ? (
            todos.map((todo) => <li className="collection-item todo-item" key={todo.id} onClick={() => {this.props.deleteTodo(todo.id)}}>Name : {todo.name} Descrition: {todo.text}</li>)
        ): <li className="collection-item">No todos for today</li>;

        const Posts = posts.length ? (
            posts.map((post) => <li className="collection-item todo-item" key={post.id}>Name : {post.title} Descrition: {post.body}</li>)
        ): <li className="collection-item">No posts for today</li>;

        return (
            <React.Fragment>
                <ul className={'center collection'}>
                    {todosCollection}
                </ul>

                <ul className={'center collection'}>
                    {Posts}
                </ul>

                <Spinner active={isLoading}/>

            </React.Fragment>
        )
    }
}

const getState = (state, props) => {
    return {
        posts: state.postState.posts,
        isLoading: state.postState.isLoading
    }
};

export default connect(getState, { getAllPost })(Todos);