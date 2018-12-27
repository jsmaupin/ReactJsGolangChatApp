import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fecha from 'fecha'

class Message extends Component {
    render() {
        const {message} = this.props;
        let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YY')
        return (
            <li>
                <div className='author'>
                    <strong>{message.author}</strong>{message.timestamp}
                    <i className='timestamp'>{createdAt}</i>
                </div>
                <div className='body'>{message.body}</div>                
            </li>
        )
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message