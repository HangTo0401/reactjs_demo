import { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import _ from 'lodash';
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
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterTask(filter)
        // this.props.onFilter(name === 'filterName' ? value : this.state.filterName, name === 'filterStatus' ? value : this.state.filterStatus)
        this.setState({
            [name]: value
        });
    }

    render() {
        var { tasks, filterTask, keyword }  = this.props;
        var { filterName, filterStatus }  = this.state;

        // Filter on table
        if (filterTask) {
            if (filterTask.name) {
                tasks = _.filter(tasks, (task) => {
                    return task.name.toLowerCase().indexOf(filterTask.name.toLowerCase()) !== -1;
                })
            }

            if (filterTask.status !== undefined || filterTask.status !== null) {
                tasks = _.filter(tasks, (task) => {
                    if (filterTask.status == -1) return task
                    else return task.status === (filterTask.status === 1 ? true : false)
                });
            }
        }

        // Search
        if (keyword) {
            tasks = _.filter(tasks, (task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            })
        }

        var elementTask = tasks.map((singleTask, index) => {
            // return <TaskItem singleTask = { singleTask } 
            //                  key = { singleTask.id } 
            //                  index = { index } 
            //                  onUpdateStatus = { this.props.onUpdateStatus }
            //                  onDelete = { this.props.onDelete }
            //                  onUpdateForm = { this.props.onUpdateForm }/>
            return <TaskItem singleTask = { singleTask }
            key = { singleTask.id }
            index = { index }
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
                                        <option value={ -1 }>All</option>
                                        <option value={ 1 }>Active</option>
                                        <option value={ 0 }>Deactive</option>
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
        tasks: state.TasksReducer, // TasksReducer from index.js from reducers folder
        filterTask: state.FilterTaskReducer,
        keyword: state.SearchTaskReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTask: (filter) => {
            dispatch(actions.filterTask(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);