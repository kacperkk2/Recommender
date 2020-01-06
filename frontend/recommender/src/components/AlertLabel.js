import React from 'react';
import { Alert } from 'antd';


class AlertLabel extends React.Component {

    render() {
        return (
            <div style={{padding: '20px'}}>
                <Alert message={this.props.message} type="error" style={{textAlign: 'center', height: '50px', lineHeight: '30px', fontSize: '120%'}}/>
            </div>
        );
    }
}

export default AlertLabel;