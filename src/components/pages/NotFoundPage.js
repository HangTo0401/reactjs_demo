import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Page 404</h2>
                <div className='alert alert-warning'>
                    <strong>Không tìm thấy trang</strong>
                </div>
            </div>
        )
    }
}

export default NotFoundPage