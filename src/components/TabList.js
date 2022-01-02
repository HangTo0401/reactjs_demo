import { Component } from "react";
import TaskItem from "./TaskItem";

class TabList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var tasks  = this.props.tasks;
        var elementTask = tasks.map((singleTask, index) => {
            return <TaskItem singleTask = { singleTask } key = { singleTask.id } index = { index } onUpdateStatus = { this.props.onUpdateStatus }/>
        });

        return(
            <div className="row mt-15">     
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table-border">
                        <thead>
                            <tr>
                                <th className="col-title">STT</th>
                                <th className="col-title">Tên</th>
                                <th className="col-title">Trạng thái</th>
                                <th className="col-title">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" name="filterName"/>
                                </td>

                                <td>
                                    <select className="form-control" name="filterStatus">
                                        <option value={ -1 }>Tất cả</option>
                                        <option value={ 0 }>Kích hoạt</option>
                                        <option value={ 1 }>Ẩn</option>
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

export default TabList;