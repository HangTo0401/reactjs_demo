import { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterName: '',
            filterStatus: -1 // all: -1, active: 1, deactive: 0
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(name === 'filterName' ? value : this.state.filterName, name === 'filterStatus' ? value : this.state.filterStatus)
        this.setState({
            [name]: value
        });
    }

    render() {
        var { tasks }  = this.props;
        var { filterName, filterStatus }  = this.state;
        var elementTask = tasks.map((singleTask, index) => {
            return <TaskItem singleTask = { singleTask } 
                             key = { singleTask.id } 
                             index = { index } 
                             onUpdateStatus = { this.props.onUpdateStatus }
                             onDelete = { this.props.onDelete }
                             onUpdateForm = { this.props.onUpdateForm }/>
        });

        return(
            <div className='row mt-15'>     
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <table className='table-border'>
                        <thead>
                            <tr>
                                <th className='col-title'>STT</th>
                                <th className='col-title'>Tên</th>
                                <th className='col-title'>Trạng thái</th>
                                <th className='col-title'>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type='text' className='form-control' name='filterName' value = { filterName } onChange={ this.onChange }/>
                                </td>

                                <td>
                                    <select className='form-control' name='filterStatus' value = { filterStatus } onChange={ this.onChange }>
                                        <option value={ -1 }>Tất cả</option>
                                        <option value={ 1 }>Kích hoạt</option>
                                        <option value={ 0 }>Ẩn</option>
                                    </select>
                                </td>
                            </tr>
                            { elementTask }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    };
}

// Convert state of Store to props of Component
const mapStateToProps = (state) => {
    return {
        // now props of TaskList is tasks
        tasks: state.TasksReducer // TasksReducer from index.js from reducers folder
    }
}

export default connect(mapStateToProps, null)(TaskList);