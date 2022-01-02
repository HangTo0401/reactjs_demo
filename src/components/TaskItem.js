import { Component } from "react";

class TaskItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let status;
        if (this.props.singleTask.status) {
            status = <span className="label label-info">Kích hoạt</span>
        } else {
            status = <span className="label label-danger">Ẩn</span>;
        }

        return(
            <tr>
                <td> { this.props.singleTask.id }</td>
                <td>{ this.props.singleTask.name }</td>

                <td className="text-center">
                    { status }
                </td>

                <td className="text-center">
                    <button type="button" className="btn btn-warning"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp; Sửa</button>&nbsp;
                    <button type="button" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp; Xóa</button>
                </td>
            </tr>
        );

    };
}

export default TaskItem;