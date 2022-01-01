import { Component } from "react";

class TaskForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="form-input">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="panel-text">Thêm công việc</div>
                    </div>

                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Tên</label>
                                <input type="text" name="txtName" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Trạng thái: </label>
                                <select name="status" className="form-control">
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