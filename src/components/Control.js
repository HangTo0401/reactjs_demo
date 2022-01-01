import { Component } from "react";

class Control extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="row mt-15">
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <div className="input-group">
                        <input type="text" className="form-control search-input" placeholder="Nhập từ khóa..."  name="keyword" onChange={ this.onHandleForm }/>
                        <button className="btn btn-info search-btn" type="button"><i className="fa fa-search" aria-hidden="true"></i>&nbsp; Tìm</button>
                    </div>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <div className="dropdown">
                        <button className="btn btn-info dropdown-btn" 
                                type="button" 
                                data-toggle="dropdown" 
                                id="dropdownMenu"><i className="fa fa-sort" aria-hidden="true"></i>&nbsp; Sắp xếp</button>
                        
                        <ul className="dropdown-menu">
                            <li>
                                <a role="button" className="sort_selected">
                                    <span className="">Tên A-Z</span>
                                </a>
                            </li>
                            <li>
                                <a role="button">
                                    <span className="">Tên Z-A</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );

    };
}

export default Control;