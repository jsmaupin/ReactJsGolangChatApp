import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.user;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = '';
    }

    render() {
        return (
            <div className='form-group'>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input
                        className='form-control'
                        placeholder='Set Your Name...'
                        type='text'
                        ref='user'
                    />
                </form>
            </div>
        )
    }
}

UserForm.propTypes = {
    setUserName: PropTypes.func.isRequired
}

export default UserForm