import { fork, take, call, put } from 'redux-saga/effects';
import * as taskActionsType from './../constants/taskActionsType';
import { getListTasks } from './../apis/taskApi';
import { STATUS_CODE } from './../constants/index';
import { fetchListTasksSuccessActions, fetchListTasksFailureActions } from './../actions/taskActions';

// Process dùng để lắng nghe actions đăng ký
function* rootSaga(){
    console.log('This is root saga')
    yield fork(watchFetchListTasksActions);// watchFetchListTasksActions is generator function
    yield fork(watchCreateTaskActions);// watchCreateTaskActions is generator function, run parallel with watchFetchListTasksActions
}

/**
 * Quy trình khi implement 1 request
 * B1: Dispatch action fetchListTask
 * B2: Gọi API và hiển thị loading
 * B3: Kiểm tra status code. Nếu thành công gán data vào, nếu thất bại trả ra lỗi
 * B4: Tắt loading
 * B5: Dispatch action tiếp theo
 */
function* watchFetchListTasksActions(){
    // take chỉ theo dõi đc lần đầu, sau khi xong process lần đầu thì những lần sau nó sẽ không theo dõi nữa
    // để khắc phục nhược điểm này của take, ta sẽ dùng vòng lặp vô tận (inifity loop)
    // Nên ở đây ta phải bỏ vô while(true)
    // Vòng lặp vô tận trong generation function sẽ không gây ra crash app
    yield take(taskActionsType.FETCH_TASKS);
    while(true) {
        // Đoạn code từ đây trở về sẽ bị block cho đến chỉ khi ta dispatch action FETCH_TASKS, thì đoạn code dưới mới chạy
        console.log('Watch fetch list tasks Actions')
        const response = yield call(getListTasks);
        // Block cho đến chỉ khi ta call xong API, thì đoạn code dưới mới chạy
        console.log('Print response: ')
        const { status, data } = response
        if (status === STATUS_CODE.SUCCESS) {
            // dispatch action fetchListTaskSuccess
            yield put(fetchListTasksSuccessActions(data))
        } else {
            // dispatch action fetchListTaskFailed
            yield put(fetchListTasksFailureActions(data))
        }
    }
}

function* watchCreateTaskActions(){
    console.log('Watch create task Actions')
}

export default rootSaga;
