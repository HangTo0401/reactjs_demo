import { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props)
    }

    onClickSortItem = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue)
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
                            id='dropdownMenu'><i className='fa fa-sort' aria-hidden='true'></i>&nbsp; Sắp xếp</button>
                    
                    <ul className='dropdown-menu'>
                        <li onClick={() => this.onClickSortItem('name', 1) }>
                            <a role='button' className= { this.props.sortBy === 'name' && this.props.sortValue === 1 ?
                                                        'sort_selected' : ''}>
                                <span className='fas fa-sort-amount-up' data-fa-transform='flip-v'>&nbsp;Tên A-Z</span>
                            </a>
                        </li>
                        <li onClick={() => this.onClickSortItem('name', -1) }>
                            <a role='button' className= { this.props.sortBy === 'name' && this.props.sortValue === -1 ?
                                                        'sort_selected' : ''}>
                                <span  className='fas fa-sort-amount-down' data-fa-transform='flip-v'>&nbsp;Tên Z-A</span>
                            </a>
                        </li>
                        <li role='separator' className='divider'></li>
                        <li onClick={() => this.onClickSortItem('status', 1) }>
                            <a role='button' className= { this.props.sortBy === 'status' && this.props.sortValue === 1 ?
                                                        'sort_selected' : ''}>
                                <span>Trạng thái kích hoạt</span>
                            </a>
                        </li>
                        <li onClick={() => this.onClickSortItem('status', -1) }>
                            <a role='button' className= { this.props.sortBy === 'status' && this.props.sortValue === -1 ?
                                                        'sort_selected' : ''}>
                                <span>Trạng thái ẩn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default Sort;