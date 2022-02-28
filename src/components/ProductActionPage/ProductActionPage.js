import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
class ProductActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            checkStatus: ''
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        // Chặn load lại trang
        e.preventDefault();
        var { txtName, txtPrice, checkStatus } = this.state;

        callApi('POST', 'products', {
            name: txtName,
            price: txtPrice,
            status: checkStatus
        }).then(res => {
            console.log(res)
        });
    }

    render() {
        var { txtName, txtPrice, checkStatus } = this.state
        return(
            <div className='col-md-6'>
                <form onSubmit={this.onSave}>
                    <div className='form-group'>
                        <label>Tên sản phẩm: </label>
                        <input type='text' className='form-control' name='txtName' value={txtName} onChange={this.onChange}/>
                    </div>
                    <div className='form-group'>
                        <label>Giá: </label>
                        <input type='number' className='form-control' name='txtPrice' value={txtPrice} onChange={this.onChange}/>
                    </div>
                    <div className='form-group'>
                        <label>Trạng thái: </label>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' id='flexCheckChecked' name='checkStatus' value={checkStatus} onChange={this.onChange}/>
                            <label className='form-check-label' htmlFor='flexCheckChecked'>Còn hàng</label>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>Lưu lại</button>
                </form>
            </div>
        )
    }
}

export default ProductActionPage