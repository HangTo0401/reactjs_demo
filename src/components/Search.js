import { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="input-group">
                    <input type="text" className="form-control search-input" placeholder="Nhập từ khóa..."  name="keyword" onChange={ this.onHandleForm }/>
                    <button className="btn btn-info search-btn" type="button"><i className="fa fa-search" aria-hidden="true"></i>&nbsp; Tìm</button>
                </div>
            </div>
        );

    };
}

export default Search;