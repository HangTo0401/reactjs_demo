import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'
class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    onClose = () => {
        // this.props.onCloseForm();
        this.props.onCloseTaskForm()
    }

    onChangeForm = (event) => {
        var target = event.target
        var name = target.name
        if (name === "status") {
            var value = target.value === "true" ? true : false
        } else {
            var value = target.value
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state) // add new task on Store
        // this.props.onReceiveTaskForm(this.state);
        this.onClear()
        this.onClose()
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    // Click on Edit button first time then componentWillMount is called once only when TaskForm component is rendered first time
    // TODO: Refractor componentWillMount to componentDidMount function
    componentWillMount() {
        var taskEditing = this.props.taskEditing
        if (this.props.taskEditing) {
            this.setState({
                id: taskEditing.id,
                name: taskEditing.name,
                status: taskEditing.status
            });
        }
    }

    // If TaskForm component is rendered already, this function is called when it's rendered again
    // componentWillReceiveProps is renamed by getDerivedStateFromProps
    // TODO: Refractor componentWillReceiveProps to getDerivedStateFromProps function
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.taskEditing) {
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            });
        } else if (nextProps && !nextProps.taskEditing) {
            // Edit -> Add new
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }

    render() {
        var { id } = this.state
        return(
            <div className="form-input">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="row mt-40">
                            <div className="panel-text">{ id !== "" ? "Cập nhật công việc" : "Thêm công việc"}</div>
                            <span className="fa fa-times close-btn" aria-hidden="true" onClick={ this.onClose }></span>
                        </div>
                    </div>

                    <div className="panel-body">
                        <form onSubmit={ this.onSubmit }>
                            <div className="form-group">
                                <label>Tên</label>
                                <input type="text" name="name" className="form-control" value = { this.state.name } onChange={ this.onChangeForm }/>
                            </div>

                            <div className="form-group">
                                <label>Trạng thái: </label>
                                <select name="status" className="form-control" onChange={ this.onChangeForm } value = { this.state.status }>
                                    <option value={ true }>Kích hoạt</option>
                                    <option value={ false }>Ẩn</option>
                                </select>
                            </div>

                            <div className="btns-group">
                                <button type="submit" className="btn btn-warning"><i className="fa fa-plus"></i>&nbsp; Lưu lại</button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={ this.onClear }><i className="fa fa-times"></i>&nbsp; Hủy bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

    };
}

const mapStateToProps = (state) => {
    // Return object
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    // Return action to props
    return {
        onAddTask : (task) => {
            dispatch(actions.addTask(task))
        },
        onOpenTaskForm: () => {
            dispatch(actions.openForm())
        },
        onCloseTaskForm: () => {
            dispatch(actions.closeForm())
        }
    }
}

// Get input from Taskform and push on Store and Reducer return newTask so mapStateToProps is useless in here
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);