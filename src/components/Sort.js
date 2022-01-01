import { Component } from "react";

class Sort extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
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
                        <li role="separator" className="divider"></li>
                        <li>
                            <a role="button">
                                <span className="">Trạng thái kích hoạt</span>
                            </a>
                        </li>
                        <li>
                            <a role="button">
                                <span className="">Trạng thái ẩn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default Sort;