import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects';
import * as taskActionsType from './../constants/taskActionsType';
import { getListTasks } from './../apis/taskApi';
import { STATUS_CODE } from './../constants/index';
import { showLoading, hideLoading } from '../actions/uiActions';
import { fetchListTasksSuccessActions, fetchListTasksFailureActions, filterTaskSuccess } from './../actions/taskActions';

// Process dùng để lắng nghe actions đăng ký
function* rootSaga(){
    yield fork(watchFetchListTasksActions);// watchFetchListTasksActions is generator function
    yield fork(watchCreateTaskActions);// watchCreateTaskActions is generator function, run parallel with watchFetchListTasksActions
    yield takeEvery(taskActionsType.FILTER_TASK, filterTaskSaga);
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
    while(true) {
        // Đoạn code từ đây trở về sẽ bị block cho đến chỉ khi ta dispatch action FETCH_TASKS, thì đoạn code dưới mới chạy
        yield take(taskActionsType.FETCH_TASKS);
        yield put(showLoading());
        const response = yield call(getListTasks);
        // Block cho đến chỉ khi ta call xong API, thì đoạn code dưới mới chạy
        const { status, data } = response
        if (status === STATUS_CODE.SUCCESS) {
            // dispatch action fetchListTaskSuccess
            yield put(fetchListTasksSuccessActions(data));
        } else {
            // dispatch action fetchListTaskFailed
            yield put(fetchListTasksFailureActions(data));
        }
        yield delay(1000);
        yield put(hideLoading());
    }
}

function* watchCreateTaskActions(){
    console.log('Watch create task Actions')
}

function* filterTaskSaga({ payload }) {
    yield delay(500)
    const keyword = payload;
    const list = yield select(state => state.taskReducer.listTasks);
    const filteredTasks = list.filter(task => task.title.toLowerCase().includes(keyword.trim().toLowerCase()));
    yield put(filterTaskSuccess(filteredTasks))
}

export default rootSaga;
