import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects';
import * as taskActionsType from './../constants/taskActionsType';
import { addTask, getListTasks, updateTask, deleteTask } from './../apis/taskApi';
import { STATUS_CODE, STATUS } from './../constants/index';
import { showLoading, hideLoading } from '../actions/uiActions';
import { 
    fetchListTasksActions, 
    fetchListTasksSuccessActions, 
    fetchListTasksFailureActions, 
    filterTaskSuccess, 
    addTaskSuccessActions, 
    addTaskFailureActions, 
    updateTaskSuccessActions, 
    updateTaskFailureActions,
    deleteTaskSuccessActions,
    deleteTaskFailureActions } from './../actions/taskActions';
import { hideModal } from '../actions/modalActions';

// Process dùng để lắng nghe actions đăng ký
function* rootSaga(){
    yield fork(watchFetchListTasksActions);// watchFetchListTasksActions is generator function
    yield fork(watchCreateTaskActions);// watchCreateTaskActions is generator function, run parallel with watchFetchListTasksActions
    yield takeLatest(taskActionsType.FILTER_TASK, filterTaskSaga);
    yield takeEvery(taskActionsType.ADD_TASK, addTaskSaga);
    yield takeLatest(taskActionsType.UPDATE_TASK, updateTaskSaga);
    yield takeLatest(taskActionsType.DELETE_TASK, deleteTaskSaga);
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
        const action = yield take(taskActionsType.FETCH_TASKS);
        yield put(showLoading());
        const { params } = action.payload;
        const response = yield call(getListTasks, params);
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
    yield put(fetchListTasksActions({
        q: keyword
    }))
    // const keyword = payload;
    // const list = yield select(state => state.taskReducer.listTasks);
    // const filteredTasks = list.filter(task => task.title.toLowerCase().includes(keyword.trim().toLowerCase()));
    // yield put(filterTaskSuccess(filteredTasks))
}

function* addTaskSaga({ payload }) {
    const { title, description } = payload
    yield put(showLoading())
    const resp = yield call(addTask, {
        title,
        description,
        status: STATUS[0].value
    })

    const { data, status } = resp
    if (status === STATUS_CODE.CREATED) {
        yield put(addTaskSuccessActions(data))
        yield put(hideModal())
    } else {
        yield put(addTaskFailureActions(data))
    }

    yield delay(1000)
    yield put(hideLoading())
}

function* updateTaskSaga({ payload }) {
    // Using select to get data from store
    const taskEditing = yield select(state => state.taskReducer.taskEditing)
    yield put(showLoading())
    const resp = yield call(updateTask, payload, taskEditing.id)

    const { data, status } = resp
    if (status === STATUS_CODE.SUCCESS) {
        yield put(updateTaskSuccessActions(data))
        yield put(hideModal())
    } else {
        yield put(updateTaskFailureActions(data))
    }

    yield delay(1000)
    yield put(hideLoading())
}

function* deleteTaskSaga({ payload }) {
    const { taskId } = payload;
    yield put(showLoading())
    const resp = yield call(deleteTask, taskId)

    const { data, status } = resp
    if (status === STATUS_CODE.SUCCESS) {
        yield put(deleteTaskSuccessActions(taskId))
        yield put(hideModal())
    } else {
        yield put(deleteTaskFailureActions(data))
    }

    yield delay(1000)
    yield put(hideLoading())
}

export default rootSaga;
