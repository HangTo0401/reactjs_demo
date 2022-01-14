import { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Sort from './components/Sort';
import TaskList from './components/TaskList';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from './actions/index';
class App extends Component {

  // This function is called when component is rendered once only after we refresh page
  // TODO: Refractor componentWillMount to componentDidMount function
  // componentWillMount() {
  //   if (localStorage && localStorage.getItem('tasks')) {
  //     var multiTasks = JSON.parse(localStorage.getItem('tasks'));

  //     this.setState({
  //       tasks: multiTasks
  //     });
  //   }
  // }

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

  onReceiveTaskForm = (params) => {
    var { tasks } = this.state
    if (!params.id) {
      // Adding
      params.id = this.onGenerateId()
      tasks.push(params)
    } else {
      // Editing
      var index = _.findIndex(tasks, (task) => { return task.id === params.id });
      tasks[index] = params
    }

    this.setState({
      tasks: tasks,
      taskEditing: null
    });

    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
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
    var value = target.type === 'checkbox' ? target.checked : target.value

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
      rdLang: 'EN',
      chkbStatus: true
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
  }

  onGenerateData() {
    var newTasks = [{
      id: this.onGenerateId(),
      name: 'Học Angular',
      status: true
    },
    {
      id: this.onGenerateId(),
      name: 'Học Reactjs',
      status: false
    },
    {
      id: this.onGenerateId(),
      name: 'Học Thuật toán',
      status: true
    }];

    this.setState({
      tasks: newTasks
    })
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  onGenerateId = () => {
    return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
  }

  onDisplayForm = () => {
    // Form is opened and editing task
    // if (this.state.isDisplayForm && this.state.taskEditing) {
    //   this.setState({
    //     isDisplayForm : true,
    //     taskEditing: null
    //   });
    // } else {
    //   this.setState({
    //     isDisplayForm : !this.state.isDisplayForm,
    //     taskEditing: null
    //   });
    // }
    if (this.props.taskEditing && this.props.taskEditing.id !== '') {
      // Editing
      this.props.onOpenTaskForm()
    } else {
      // Adding new task
      this.props.onToggleForm()
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    })
  }

  // onCloseForm = () => {
  //   this.setState({
  //     isDisplayForm : false,
  //     taskEditing: null
  //   });
  // }

  onShowForm = () => {
    this.setState({
      isDisplayForm : true,
      taskEditing: null
    });
  }

  // onUpdateStatus = (id) => {
  //   var { tasks } = this.state
  //   var index = _.findIndex(tasks, (task) => { return task.id === id });
  //   if (index !== -1) {
  //     tasks[index].status = !tasks[index].status;
  //   }
  //   this.setState({
  //     tasks: tasks
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }

  // onDelete = (id) => {
  //   var { tasks } = this.state
  //   var deleteIndex = _.findIndex(tasks, (task) => { return task.id === id });
  //   if (deleteIndex !== -1) {
  //     tasks.splice(deleteIndex, 1)
  //     this.setState({
  //       tasks: tasks
  //     });
  //     localStorage.setItem('tasks', JSON.stringify(tasks))
  //   }
  //   this.onCloseForm()
  // }

  onUpdateForm = (id) => {
    var { tasks } = this.state
    var updateIndex = _.findIndex(tasks, (task) => { return task.id === id });
    var taskEditing = tasks[updateIndex]
    if (updateIndex !== -1) { 
      this.setState({
        taskEditing: taskEditing      
      });
    }
    this.onShowForm()
  }

  onFilter = (filterName, filterStatus) => {
    var filterStatus = parseInt(filterStatus, 10)
    this.setState({
      filter: {
        filterName: filterName.toLowerCase(),
        filterStatus: filterStatus
      }
    });
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }

  onSearch = (params) => {
    this.setState({
      keyword: params
    })
  }

  findIndex = (id) => {
    var { tasks } = this.state
    var result = -1

    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
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
      rdLang: 'EN',
      chkbStatus: true,
      isDisplayForm: false,
      filter: {
        filterName: '',
        filterStatus: -1
      },
      sortBy: 'name',
      sortValue: 1
    };

    this.onReceiveColor = this.onReceiveColor.bind(this);
    this.onReceiceSize = this.onReceiceSize.bind(this);
    this.onSetState = this.onSetState.bind(this);
    this.onHandleForm = this.onHandleForm.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onGenerateData = this.onGenerateData.bind(this);
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

    // var { tasks, isDisplayForm, taskEditing, filter, keyword, sortBy, sortValue } = this.state
    var { keyword, sortBy, sortValue } = this.state
    var { isDisplayForm } = this.props
    // var elementTaskForm = isDisplayForm ? <TaskForm onReceiveTaskForm = { this.onReceiveTaskForm } 
    //                                                 onCloseForm = { this.onCloseForm } 
    //                                                 taskEditing = { taskEditing }/> : ''
    // var elementTaskForm = isDisplayForm ? <TaskForm onReceiveTaskForm = { this.onReceiveTaskForm } taskEditing = { taskEditing }/> : ''
    return (
      <div className='App'>
          <Header/>
          <div className='container-fluid'>
            <div className='row'>
            <div className='panel panel-danger'>
              <div className='panel-heading'>
                <h3 className='panel-title'>Thêm sản phẩm</h3>
              </div>
              <div className='panel-body'>
                <div className='row'>
                  <label>Tên sản phẩm</label>
                  <input type='text' className='form-control' ref={this.refName}/>
                  <button className='btn btn-primary' onClick={() => this.onAddProduct()}>Lưu</button>
                </div>
              </div>
            </div>
            <table className='table table-hover'>
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
              
              <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <SizeSetting fontSize = { this.state.fontSize } onReceiceSize= { this.onReceiceSize }/>
                <br/>
                <Reset onSettingDefault = { this.onSettingDefault  }/>
              </div>
              <Result color = { this.state.color } fontSize = { this.state.fontSize }/>
            </div>
          </div>

          <div className='container mt-30'>
            <div className='row'>
              <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>
                      <h3 className='panel-title'>Form</h3>
                    </div>
                    <div className='panel-body'>
                      <form>
                        <div className='form-group'>
                          <label>Username</label>
                          <input type='text' className='form-control' placeholder='' aria-describedby='helpId' name='txtUsername' onChange={ this.onHandleForm } value={ this.state.txtUsername }/>
                        </div>

                        <div className='form-group'>
                          <label>Password</label>
                          <input type='password' className='form-control' placeholder='' aria-describedby='helpId' name='txtPassword' onChange={ this.onHandleForm } value={ this.state.txtPassword }/>
                        </div>

                        <div className='form-group'>
                          <label>Description</label>
                          <textarea className='form-control' placeholder='' aria-describedby='helpId' name='txtDescription' onChange={ this.onHandleForm } value={ this.state.txtDescription }/>
                        </div>

                        <label>Gender</label>
                        <select name='txtSelect' id='input' className='form-control' required='required' onChange={ this.onHandleForm } value={ this.state.sltGender }>
                          <option value={0}>Nữ</option>
                          <option value={1}>Nam</option>
                        </select>
                        <br/>

                        <label>Language</label>
                        <div className='radio'>
                          <label>
                            <input type='radio' name='rdLang' id='input' value='' checked={ this.state.rdLang === 'EN'} value='EN' onChange={ this.onHandleForm }/>
                            English
                          </label>&nbsp;
                          <label>
                            <input type='radio' name='rdLang' id='input' value='' checked={ this.state.rdLang === 'VN'} value='VN' onChange={ this.onHandleForm }/>
                            Vietnamese
                          </label>
                        </div>
                        <br/>
                        
                        <div className='checkbox'>
                          <label>
                            <input type='checkbox' name='chkbStatus' value={ true } onChange={ this.onHandleForm } checked={ this.state.chkbStatus === true}/>
                            Status
                          </label>
                        </div>
                        
                        <button type='submit' className='btn btn-primary' onClick={ this.onHandleSubmit }>Save</button>&nbsp;
                        <button type='reset' className='btn btn-default' onClick={ this.onReset }>Delete</button>
                      </form>
                    </div>
                </div>
                
              </div>
            </div>
          </div>

          <br/>
          <div className='container'>
            <div className='row'>
              <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                <h3 className='panel-title'>Task Management</h3>
                <TaskForm/>
              </div>

              <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button className='btn btn-primary' onClick={ this.onDisplayForm }><i className='fa fa-plus' aria-hidden='true'></i>Add New Task</button>&nbsp;
                <button className='btn btn-danger' onClick={ this.onGenerateData }>Generate Data</button>

                <div className='row mt-15'>
                  <Search onSearch = { this.onSearch } keyword = { keyword }/>
                  <Sort onSort = { this.onSort } sortBy = { sortBy } sortValue = { sortValue }/>
                </div>
                <br/>

                {/* <TaskList tasks = { tasks } 
                          onUpdateStatus = { this.onUpdateStatus } 
                          onDelete = { this.onDelete } 
                          onUpdateForm = { this.onUpdateForm } 
                          onFilter = { this.onFilter }/> */}
                <TaskList onUpdateForm = { this.onUpdateForm } />
              </div>
            </div>
          </div>
          <br/>
          <div className='container mt-50'>
            <div className='row'>
              <h3 className='panel-title'>Shopping Card Project</h3>
            </div>
            <header>
              <ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
                  <li>
                      <div className="logo-wrapper waves-light waves-effect waves-light">
                          <a>
                              <img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" alt="" className="img-fluid flex-center" />
                          </a>
                      </div>
                  </li>
                  <li>
                      <ul className="social">
                          <li>
                              <a className="icons-sm fb-ic">
                                  <i className="fa fa-facebook"> </i>
                              </a>
                          </li>
                          <li>
                              <a className="icons-sm pin-ic">
                                  <i className="fa fa-pinterest"> </i>
                              </a>
                          </li>
                          <li>
                              <a className="icons-sm gplus-ic">
                                  <i className="fa fa-google-plus"> </i>
                              </a>
                          </li>
                          <li>
                              <a className="icons-sm tw-ic">
                                  <i className="fa fa-twitter"> </i>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <form className="search-form" role="search">
                          <div className="form-group waves-light waves-effect waves-light">
                              <input type="text" className="form-control" placeholder="Search" />
                          </div>
                      </form>
                  </li>
                  <li>

                      <ul className="collapsible collapsible-accordion">
                          <li>
                              <a className="collapsible-header waves-effect arrow-r">
                                  <i className="fa fa-shopping-bag"></i> Product Page
                                  <i className="fa fa-angle-down rotate-icon"></i>
                              </a>
                              <div className="collapsible-body">
                                  <ul>
                                      <li>
                                          <a href="product.html" className="waves-effect">Product Page V.1</a>
                                      </li>
                                      <li>
                                          <a href="product-page.html" className="waves-effect">Product Page V.2</a>
                                      </li>
                                      <li>
                                          <a href="product-page-4.html" className="waves-effect">Product Page V.3</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          <li className="active">
                              <a className="collapsible-header waves-effect arrow-r active">
                                  <i className="fa fa-shopping-cart"></i> Cart Pages
                                  <i className="fa fa-angle-down rotate-icon"></i>
                              </a>
                              <div className="collapsible-body">
                                  <ul>
                                      <li>
                                          <a href="cart.html" className="waves-effect">Page with shopping cart</a>
                                      </li>
                                      <li>
                                          <a href="contact.html" className="waves-effect">Page with contact form</a>
                                      </li>
                                      <li>
                                          <a href="contact-2.html" className="waves-effect">Page with contact form V.2</a>
                                      </li>
                                      <li>
                                          <a href="login.html" className="waves-effect">Page with sign in form</a>
                                      </li>
                                      <li>
                                          <a href="terms.html" className="waves-effect">Page with 'terms of use'</a>
                                      </li>
                                      <li>
                                          <a href="faq.html" className="waves-effect">Page with 'FAQ'</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <a className="collapsible-header waves-effect arrow-r">
                                  <i className="fa fa-dashboard"></i> Homepages
                                  <i className="fa fa-angle-down rotate-icon"></i>
                              </a>
                              <div className="collapsible-body">
                                  <ul>
                                      <li>
                                          <a href="home-page.html" className="waves-effect">Ecommerce homepage default</a>
                                      </li>
                                      <li>
                                          <a href="home-page-2.html" className="waves-effect">Ecommerce homepage full width</a>
                                      </li>
                                      <li>
                                          <a href="home-page-3-carousel.html" className="waves-effect">Ecommerce homepage V.3 Carousel</a>
                                      </li>
                                      <li>
                                          <a href="home-page-3-full-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Full Page Carousel</a>
                                      </li>
                                      <li>
                                          <a href="home-page-3-half-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Half Page Carousel</a>
                                      </li>
                                      <li>
                                          <a href="home-page-4.html" className="waves-effect">Ecommerce homepage V.4</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <a className="collapsible-header waves-effect arrow-r">
                                  <i className="fa fa-desktop"></i> Post Pages
                                  <i className="fa fa-angle-down rotate-icon"></i>
                              </a>
                              <div className="collapsible-body">
                                  <ul>
                                      <li>
                                          <a href="post.html" className="waves-effect">Page with column on the right</a>
                                      </li>
                                      <li>
                                          <a href="blog-post-left-column.html" className="waves-effect">Page with newsletter on the left</a>
                                      </li>
                                      <li>
                                          <a href="blog-post.html" className="waves-effect">Page with newsletter on the right</a>
                                      </li>
                                      <li>
                                          <a href="blog-post-full-width.html" className="waves-effect">Full width page with logged user</a>
                                      </li>
                                      <li>
                                          <a href="blog-post-full-width%20not%20logged%20in%20user.html" className="waves-effect">Full width page with not logged user</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <a className="collapsible-header waves-effect arrow-r">
                                  <i className="fa fa-diamond"></i> Category Pages
                                  <i className="fa fa-angle-down rotate-icon"></i>
                              </a>
                              <div className="collapsible-body">
                                  <ul>
                                      <li>
                                          <a href="category-list-left-column.html" className="waves-effect">Category list with left column</a>
                                      </li>
                                      <li>
                                          <a href="category-list-right-column.html" className="waves-effect">Category list with right column</a>
                                      </li>
                                      <li>
                                          <a href="category-grid-left-column.html" className="waves-effect">Category grid with left column</a>
                                      </li>
                                      <li>
                                          <a href="category-right-column.html" className="waves-effect">Category grid with right column</a>
                                      </li>
                                      <li>
                                          <a href="category-grid-left-column-carousel.html" className="waves-effect">Category grid with left column carousel</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                      </ul>

                  </li>

                  <div className="sidenav-bg mask-strong"></div>

                  <div className="ps__scrollbar-x-rail">
                      <div className="ps__scrollbar-x" tabIndex="0"></div>
                  </div>
                  <div className="ps__scrollbar-y-rail">
                      <div className="ps__scrollbar-y" tabIndex="0"></div>
                  </div>
              </ul>

              <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

                  <div className="float-left">
                      <a data-activates="slide-out" className="button-collapse">
                          <i className="fa fa-bars"></i>
                      </a>
                  </div>

                  <div className="breadcrumb-dn mr-auto">
                      <ol className="breadcrumb header-breadcrumb">
                          <li className="breadcrumb-item">
                              <a>Trang Chủ</a>
                          </li>
                      </ol>
                  </div>

                  <ul className="nav navbar-nav nav-flex-icons ml-auto">
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              <i className="fa fa-user"></i> Tài Khoản</a>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                              <a className="dropdown-item waves-effect waves-light">Đăng Ký</a>
                              <a className="dropdown-item waves-effect waves-light">Đăng Nhập</a>
                              <a className="dropdown-item waves-effect waves-light">Đăng Xuất</a>
                          </div>
                      </li>
                  </ul>

              </nav>

          </header>
          <main id="mainContainer">
              <div className="container">
                  <section className="section">
                      <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                      <div className="row">
                          <div className="col-lg-4 col-md-6 mb-r">
                              <div className="card text-center card-cascade narrower">
                                  <div className="view overlay hm-white-slight z-depth-1">
                                      <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                                          className="img-fluid" alt="" />
                                      <a>
                                          <div className="mask waves-light waves-effect waves-light"></div>
                                      </a>
                                  </div>
                                  <div className="card-body">
                                      <h4 className="card-title">
                                          <strong>
                                              <a>Iphone 6 Plus</a>
                                          </strong>
                                      </h4>
                                      <ul className="rating">
                                          <li>
                                              <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                              <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                              <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                              <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                              <i className="fa fa-star"></i>
                                          </li>
                                      </ul>
                                      <p className="card-text">
                                          Sản phẩm do apply sản xuất
                                      </p>
                                      <div className="card-footer">
                                          <span className="left">15$</span>
                                          <span className="right">
                                              <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                                  <i className="fa fa-shopping-cart"></i>
                                              </a>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <h3>
                      <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
                  </h3>
                  <section className="section">
                      <div className="table-responsive">
                          <table className="table product-table">
                              <thead>
                                  <tr>
                                      <th></th>
                                      <th>Sản Phẩm</th>
                                      <th>Giá</th>
                                      <th>Số Lượng</th>
                                      <th>Tổng Cộng</th>
                                      <th></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <th scope="row">
                                          <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                                              alt="" className="img-fluid z-depth-0" />
                                      </th>
                                      <td>
                                          <h5>
                                              <strong>Iphone 6 Plus</strong>
                                          </h5>
                                      </td>
                                      <td>15$</td>
                                      <td className="center-on-small-only">
                                          <span className="qty">1 </span>
                                          <div className="btn-group radio-group" data-toggle="buttons">
                                              <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                                  <a>—</a>
                                              </label>
                                              <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                                  <a>+</a>
                                              </label>
                                          </div>
                                      </td>
                                      <td>15$</td>
                                      <td>
                                          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                              title="" data-original-title="Remove item">
                                              X
                                          </button>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td colSpan="3"></td>
                                      <td>
                                          <h4>
                                              <strong>Tổng Tiền</strong>
                                          </h4>
                                      </td>
                                      <td>
                                          <h4>
                                              <strong>15$</strong>
                                          </h4>
                                      </td>
                                      <td colSpan="3">
                                          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                              <i className="fa fa-angle-right right"></i>
                                          </button>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </section>
              </div>
          </main>
          <footer className="page-footer center-on-small-only">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-lg-2 ml-auto">
                          <h5 className="title social-section-title">Social Media</h5>
                          <div className="social-section text-md-left">
                              <ul className="text-center">
                                  <li>
                                      <a className="btn-floating btn-fb waves-effect waves-light">
                                          <i className="fa fa-facebook"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="btn-floating btn-ins waves-effect waves-light">
                                          <i className="fa fa-instagram"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="btn-floating btn-tw waves-effect waves-light">
                                          <i className="fa fa-twitter"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="btn-floating btn-yt waves-effect waves-light">
                                          <i className="fa fa-youtube"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="btn-floating btn-li waves-effect waves-light">
                                          <i className="fa fa-linkedin"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="btn-floating btn-dribbble waves-effect waves-light">
                                          <i className="fa fa-dribbble left"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="btn-floating btn-pin waves-effect waves-light">
                                          <i className="fa fa-pinterest"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="btn-floating btn-gplus waves-effect waves-light">
                                          <i className="fa fa-google-plus"></i>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-2">
                          <h5 className="title">Delivery</h5>
                          <ul>
                              <li>
                                  <a>Store Delivery</a>
                              </li>
                              <li>
                                  <a>Online Delivery</a>
                              </li>
                              <li>
                                  <a>Delivery Terms &amp; Conditions</a>
                              </li>
                              <li>
                                  <a>Tracking</a>
                              </li>
                          </ul>
                      </div>
                      <div className="col-lg-2">
                          <h5 className="title">Need help?</h5>
                          <ul>
                              <li>
                                  <a>FAQ</a>
                              </li>
                              <li>
                                  <a>Contact Us</a>
                              </li>
                              <li>
                                  <a>Return Policy</a>
                              </li>
                              <li>
                                  <a>Product Registration</a>
                              </li>
                          </ul>

                      </div>
                      <div className="col-lg-4">
                          <h5 className="title">Instagram Photos</h5>
                          <ul className="instagram-photos">
                              <li>
                                  <div className="view overlay hm-white-slight z-depth-1">
                                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="" />
                                      <a>
                                          <div className="mask waves-light waves-effect waves-light"></div>
                                      </a>
                                  </div>
                              </li>
                              <li>
                                  <div className="view overlay hm-white-slight z-depth-1">
                                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" />
                                      <a>
                                          <div className="mask waves-light waves-effect waves-light"></div>
                                      </a>
                                  </div>
                              </li>
                              <li>
                                  <div className="view overlay hm-white-slight z-depth-1">
                                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg" alt="" />
                                      <a>
                                          <div className="mask waves-light waves-effect waves-light"></div>
                                      </a>
                                  </div>
                              </li>
                              <li>
                                  <div className="view overlay hm-white-slight z-depth-1">
                                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg" alt="" />
                                      <a>
                                          <div className="mask waves-light waves-effect waves-light"></div>
                                      </a>
                                  </div>
                              </li>
                              <li>
                                  <div className="view overlay hm-white-slight z-depth-1">
                                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg" alt="" />
                                      <a>
                                          <div className="mask waves-light waves-effect waves-light"></div>
                                      </a>
                                  </div>
                              </li>
                              <li>
                                  <div className="view overlay hm-white-slight z-depth-1">
                                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(18).jpg" alt="" />
                                      <a>
                                          <div className="mask waves-light waves-effect waves-light"></div>
                                      </a>
                                  </div>
                              </li>
                              <li>
                                  <div className="view overlay hm-white-slight z-depth-1">
                                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg" alt="" />
                                      <a>
                                          <div className="mask waves-light waves-effect waves-light"></div>
                                      </a>
                                  </div>
                              </li>
                              <li>
                                  <div className="view overlay hm-white-slight z-depth-1">
                                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg" alt="" />
                                      <a>
                                          <div className="mask waves-light waves-effect waves-light"></div>
                                      </a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="footer-copyright">
                  <div className="container-fluid">
                      © 2016 Copyright:
                      <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
                  </div>
              </div>
          </footer>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.DisplayFormReducer,
    taskEditing: state.EditTaskReducer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onOpenTaskForm: () => {
      dispatch(actions.openForm())
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
