import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      checkStatus: "",
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (match) {
      var id = match.params.id;
      callApi("GET", `products/${id}`, null).then((res) => {
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          checkStatus: data.status,
        });
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    // Chặn load lại trang
    e.preventDefault();
    var { id, txtName, txtPrice, checkStatus } = this.state;

    if (id) {
        // Update
        callApi('PUT', `products/${id}`, {
            name: txtName,
            price: txtPrice,
            status: checkStatus,
          }).then((res) => {
            if (res.status === 200) {
              toast('Update product successfully!');
              this.props.navigate('/product-list');
            }
        });
    } else {
        // Add new
        callApi('POST', 'products', {
            name: txtName,
            price: txtPrice,
            status: checkStatus,
          }).then((res) => {
            if (res.status === 201) {
              toast("Add new product successfully!");
              this.props.navigate('/product-list');
            }
        });
    }
  };

  render() {
    var { txtName, txtPrice, checkStatus } = this.state;
    return (
      <div className="col-md-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm: </label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá: </label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng thái: </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
                name="checkStatus"
                value={checkStatus}
                checked={checkStatus}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Còn hàng
              </label>
            </div>
          </div>
          <Link to="/product-list" className="btn btn-warning">Quay lại</Link>
          <button type="submit" className="btn btn-primary">Lưu lại</button>
        </form>
      </div>
    );
  }
}

function WithNavigate(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const match = { params: useParams() };
  return (
    <ProductActionPage
      {...props} navigate={navigate} location={location} match={match}
    />
  );
}

export default WithNavigate;
