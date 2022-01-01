import { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import Header from './components/Header';
import Product from './components/Product';

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

  constructor(props) {
    super(props)
    // this.state = {
    //   products: [{
    //     id: 4,
    //     name: 'Iphone 6',
    //     price: '5.000.000 VNĐ',
    //     image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6s-plus-vang-didongviet_2_1.jpg',
    //     status: true
    //   },
    //   {
    //     id: 5,
    //     name: 'Iphone 7',
    //     price: '7.000.000 VNĐ',
    //     image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6s-plus-vang-didongviet_2_1.jpg',
    //     status: true
    //   },
    //   {
    //     id: 6,
    //     name: 'Iphone 8',
    //     price: '8.000.000 VNĐ',
    //     image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6s-plus-vang-didongviet_2_1.jpg',
    //     status: true
    //   }],
    //   isActive: true
    // }

    // this.onSetState = this.onSetState.bind(this);

    this.state = {
      color: 'red',
      fontSize: 15,
    };

    this.onReceiveColor = this.onReceiveColor.bind(this);
    this.onReceiceSize = this.onReceiceSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }



  render() {
    var Products = [
      {
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
      }
    ]

    // let elements = this.state.products.map((product, index) => {
    //   let result = '';
    //   if (product.status) {
    //     return(
    //       <tr key={index}>
    //         <td>{ index }</td>
    //         <td>{ product.name }</td>
    //         <td className='label label-success'>{ product.price }</td>
    //       </tr>
    //       // <Product name={product.name} price={product.price} image={product.image} key={index}/>
    //     )
    //   } else {
    //     return result;
    //   }
    // });

    return (
      <div className='App'>
          <Header/>
          {/* <div className='container-fluid'>
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
          </div> */}
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
      </div>
    );
  }
}

export default App;
