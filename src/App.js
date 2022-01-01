import { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import Header from './components/Header';

class App extends Component {

  showInfo(a) {
    if (a === 5) {
      return <h2>Active: {a}</h2>
    }
  };

  onSetState() {
    if (this.state.isActive === true) {
      this.setState({
        isActive: false
      });
    } else {
      this.setState({
        isActive: true
      });
    }
  }

  onReceiveColor(params) {
    this.setState({
      color: params
    });
  }

  onReceiceSize(params) {
    if (this.state.fontSize + params >= 8 && this.state.fontSize + params < 36) {
      this.setState({
        fontSize: this.state.fontSize + params
      });
    }
  }

  onSettingDefault(params) {
    if (params) {
      this.setState({
        color: 'red',
        fontSize: 15,
      });
    }
  }

  onHandleForm(event) {
    var target = event.target
    var name = target.name
    var value = target.type === "checkbox" ? target.checked : target.value

    // Set value for multi inputs
    this.setState({
      [name]: value
    });
  }

  onReset() {
    this.setState({
      txtUsername: '',
      txtPassword: '',
      txtDescription: '',
      sltGender: 0,
      rdLang: 'VN',
      chkbStatus: true
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    
  }

  constructor(props) {
    super(props)

    this.state = {
      products: [{
        id: 1,
        name: 'Iphone 6',
        price: '5.000.000 VNĐ',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6s-plus-vang-didongviet_2_1.jpg',
        status: true
      },
      {
        id: 2,
        name: 'Iphone 7',
        price: '7.000.000 VNĐ',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6s-plus-vang-didongviet_2_1.jpg',
        status: true
      },
      {
        id: 3,
        name: 'Iphone 8',
        price: '8.000.000 VNĐ',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6s-plus-vang-didongviet_2_1.jpg',
        status: true
      }],
      isActive: true,
      color: 'red',
      fontSize: 15,
      txtUsername: '',
      txtPassword: '',
      txtDescription: '',
      sltGender: 0,
      rdLang: 'VN',
      chkbStatus: true
    };

    this.onReceiveColor = this.onReceiveColor.bind(this);
    this.onReceiceSize = this.onReceiceSize.bind(this);
    this.onSetState = this.onSetState.bind(this);
    this.onHandleForm = this.onHandleForm.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }

  render() {
    let elements = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        return(
          <tr key={index}>
            <td>{ index }</td>
            <td>{ product.name }</td>
            <td className='label label-success'>{ product.price }</td>
          </tr>
        )
      } else {
        return result;
      }
    });

    return (
      <div className='App'>
          <Header/>
          <div className='container-fluid'>
            <div className='row'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                  { elements }
                </tbody>
            </table>
             <button className='btn btn-danger' onClick={ this.onSetState }>Active: { this.state.isActive === true ? 'true' : 'false' }</button> 
            </div>
          </div>
          <br/>
          <div className='container mt-50'>
            <div className='row'>     
              <ColorPicker color={ this.state.color } onReceiveColor= { this.onReceiveColor }/>
              
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SizeSetting fontSize = { this.state.fontSize } onReceiceSize= { this.onReceiceSize }/>
                <Reset onSettingDefault = { this.onSettingDefault  }/>
              </div>
              <Result color = { this.state.color } fontSize = { this.state.fontSize }/>
            </div>
          </div>

          <div className='container mt-30'>
            <div className='row'>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">Form</h3>
                    </div>
                    <div className="panel-body">
                      <form>
                        <div className="form-group">
                          <label>Username</label>
                          <input type="text" className="form-control" placeholder="" aria-describedby="helpId" name="txtUsername" onChange={ this.onHandleForm } value={ this.state.txtUsername }/>
                        </div>

                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" placeholder="" aria-describedby="helpId" name="txtPassword" onChange={ this.onHandleForm } value={ this.state.txtPassword }/>
                        </div>

                        <div className="form-group">
                          <label>Description</label>
                          <textarea className="form-control" placeholder="" aria-describedby="helpId" name="txtDescription" onChange={ this.onHandleForm } value={ this.state.txtDescription }/>
                        </div>

                        <label>Gender</label>
                        <select name="txtSelect" id="input" className="form-control" required="required" onChange={ this.onHandleForm } value={ this.state.sltGender }>
                          <option value={0}>Nữ</option>
                          <option value={1}>Nam</option>
                        </select>
                        <br/>

                        <label>Language</label>
                        <div className="radio">
                          <label>
                            <input type="radio" name="rdLang" id="input" value="" checked={ this.state.rdLang === "ENG"} value="ENG" onChange={ this.onHandleForm }/>
                            Tiếng Anh
                          </label>&nbsp;
                          <label>
                            <input type="radio" name="rdLang" id="input" value="" checked={ this.state.rdLang === "VN"} value="VN" onChange={ this.onHandleForm }/>
                            Tiếng Việt
                          </label>
                        </div>
                        <br/>
                        
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="chkbStatus" value={ true } onChange={ this.onHandleForm } checked={ this.state.chkbStatus === true}/>
                            Trạng thái
                          </label>
                        </div>
                        
                        <button type="submit" className="btn btn-primary" onClick={ this.onHandleSubmit }>Lưu lại</button>&nbsp;
                        <button type="reset" className="btn btn-default" onClick={ this.onReset }>Xóa</button>
                      </form>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
