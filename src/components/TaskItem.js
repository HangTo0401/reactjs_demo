import { Component } from "react";

class TaskItem extends Component {
    constructor(props) {
        super(props)
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.singleTask.id)
    }

    render() {

        return(
            <tr>
                <td> { this.props.index + 1 }</td>
                <td>{ this.props.singleTask.name }</td>

                <td className="text-center">
                    <span className={ this.props.singleTask.status ? "label label-info" : "label label-danger" } onClick={ this.onUpdateStatus }>
                        { this.props.singleTask.status ? "Kích hoạt" : "Ẩn" }
                    </span>
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