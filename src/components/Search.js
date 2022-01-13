import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        };
    }

    onHandleForm = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
        this.props.onSearchTask(this.state.keyword)
    }

    render() {
        var { keyword } = this.state
        return(
            <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                <div className='input-group'>
                    <input type='text' className='form-control search-input' placeholder='Nhập từ khóa...'  name='keyword' onChange={ this.onHandleForm } value = { keyword }/>
                    <button className='btn btn-info search-btn' type='button' onClick={ this.onSearch }><i className='fa fa-search' aria-hidden='true'></i>&nbsp; Search</button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchTask: (keyword) => {
            dispatch(actions.searchTask(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);