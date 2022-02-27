import React, { Component } from 'react';

class ProductActionPage extends Component {
    render() {
        return(
            <div className='col-md-6'>
                <form>
                    <div className='form-group'>
                        <label>Tên sản phẩm: </label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>Giá: </label>
                        <input type='number' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>Trạng thái: </label>
                        <div class='form-check'>
                            <input class='form-check-input' type='checkbox' value='' id='flexCheckChecked'/>
                            <label class='form-check-label' for='flexCheckChecked'>Còn hàng</label>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>Lưu lại</button>
                </form>
            </div>
        )
    }
}

export default ProductActionPage