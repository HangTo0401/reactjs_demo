import { Component } from "react";

class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            status: false
        };
    }

    onClose = () => {
        this.props.onCloseForm();
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
        this.props.onReceiveTaskForm(this.state);
    }

    render() {
        return(
            <div className="form-input">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="row mt-40">
                            <div className="panel-text">Thêm công việc</div>
                            <span className="fa fa-times close-btn" aria-hidden="true" onClick={ this.onClose }></span>
                        </div>
                    </div>

                    <div className="panel-body">
                        <form onSubmit={ this.onSubmit }>
                            <div className="form-group">
                                <label>Tên</label>
                                <input type="text" name="name" className="form-control" value = { this.state.txtName } onChange={ this.onChangeForm }/>
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
                                <button type="reset" className="btn btn-danger"><i className="fa fa-times"></i>&nbsp; Hủy bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

    };
}

export default TaskForm;