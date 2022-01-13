import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class Sort extends Component {
    constructor(props) {
        super(props)
    }

    onClickSortItem = (sortBy, sortValue) => {
        // this.props.onSort(sortBy, sortValue)
        this.props.onSortTask({
            by: sortBy,
            value: sortValue
        })
    }

    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        return(
            <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                <div className='dropdown'>
                    <button className='btn btn-info dropdown-btn' 
                            type='button' 
                            data-toggle='dropdown' 
                            id='dropdownMenu'><i className='fa fa-sort' aria-hidden='true'></i>&nbsp;  Sort</button>
                    
                    <ul className='dropdown-menu'>
                        <li onClick={() => this.onClickSortItem('name', 1) }>
                            <a role='button' className= { this.props.sort.by === 'name' && this.props.sort.value === 1 ?
                                                        'sort_selected' : ''}>
                                <span className='fas fa-sort-amount-up' data-fa-transform='flip-v'>&nbsp;Name A-Z</span>
                            </a>
                        </li>
                        <li onClick={() => this.onClickSortItem('name', -1) }>
                            <a role='button' className= { this.props.sort.by === 'name' && this.props.sort.value === -1 ?
                                                        'sort_selected' : ''}>
                                <span  className='fas fa-sort-amount-down' data-fa-transform='flip-v'>&nbsp;Name Z-A</span>
                            </a>
                        </li>
                        <li role='separator' className='divider'></li>
                        <li onClick={() => this.onClickSortItem('status', 1) }>
                            <a role='button' className= { this.props.sort.by === 'status' && this.props.sort.value === 1 ?
                                                        'sort_selected' : ''}>
                                <span>Active status</span>
                            </a>
                        </li>
                        <li onClick={() => this.onClickSortItem('status', -1) }>
                            <a role='button' className= { this.props.sort.by === 'status' && this.props.sort.value === -1 ?
                                                        'sort_selected' : ''}>
                                <span>Deactive status</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        sort: state.SortTaskReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortTask: (sort) => {
            dispatch(actions.sortTask(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);