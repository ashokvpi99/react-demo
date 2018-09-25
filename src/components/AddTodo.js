import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name:null,
            text: null
        }
    }

    handleSubmit = (e) => {
        console.log('comign');
        e.preventDefault();
        console.log('state....', this.state);
        this.props.addTodo(this.state);
        this.setState({
            name:null,
            text: null
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return(
            <div className={'container'}>
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                    <input type={'text'} id={'name'} onChange={this.handleChange} value={this.state.name || ''} />
                <label>Descption</label>
                    <input type={'text'} id={'text'} onChange={this.handleChange} value={this.state.text || ''} />
                    <br />
                <button className="btn waves-effect waves-light hide" type="submit" name="action">Submit</button>            
            </form>
            </div>
        )
    }
}

export default AddTodo;