import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component {
    constructor(props) {
        super(props)
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.singleTask.id)
    }

    onDelete = () => {
        this.props.onDelete(this.props.singleTask.id)
    }

    onUpdate = () => {
        // this.props.onUpdateForm(this.props.singleTask.id)
        this.props.onUpdateStatusTask(this.props.singleTask.id)
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
                    <button type="button" className="btn btn-warning" onClick={ this.onUpdate }><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp; Sửa</button>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={ this.onDelete }><i className="fa fa-trash" aria-hidden="true"></i>&nbsp; Xóa</button>
                </td>
            </tr>
        );

    };
}

const mapStateToProps = () => {

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatusTask: (id) => {
            dispatch(actions.updateStatusTask(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);