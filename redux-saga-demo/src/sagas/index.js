import { fork, take, call } from 'redux-saga/effects';
import * as taskActionsType from './../constants/taskActionsType';
import { getListTasks } from './../apis/taskApi';
import { STATUS_CODE } from './../constants/index';

// Process dùng để lắng nghe actions đăng ký
function* rootSaga(){
    console.log('This is root saga')
    yield fork(watchFetchListTasksActions);// watchFetchListTasksActions is generator function
    yield fork(watchCreateTaskActions);// watchCreateTaskActions is generator function, run parallel with watchFetchListTasksActions
}

function* watchFetchListTasksActions(){
    yield take(taskActionsType.FETCH_TASKS);
    // Đoạn code từ đây trở về sẽ bị block cho đến chỉ khi ta dispatch action FETCH_TASKS, thì đoạn code dưới mới chạy
    console.log('Watch fetch list tasks Actions')
    const response = yield call(getListTasks);
    // Block cho đến chỉ khi ta call xong API, thì đoạn code dưới mới chạy
    console.log('Print response: ')
    const { status, data } = response
    if (status === STATUS_CODE.SUCCESS) {
        // dispatch action fetchListTaskSuccess
    } else {
        // dispatch action fetchListTaskFailed
    }
}

function* watchCreateTaskActions(){
    console.log('Watch create task Actions')
}

export default rootSaga;
