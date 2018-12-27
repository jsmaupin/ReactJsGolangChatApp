import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value = '';
    }

    render() {
        return (
            <div className='form-group'>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input
                        className='form-control'
                        placeholder='Add Channel'
                        type='text'
                        ref='channel'
                    />
                </form>
            </div>
        )
    }
}

ChannelForm.propTypes = {
    addChannel: PropTypes.func.isRequired
}

export default ChannelForm