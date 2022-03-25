import { fork } from 'redux-saga/effects';

// Process dùng để lắng nghe actions đăng ký
function* rootSaga(){
    console.log('This is root saga')
    yield fork(watchFetchListTasksActions);// watchFetchListTasksActions is generator function
    yield fork(watchCreateTaskActions);// watchCreateTaskActions is generator function, run parallel with watchFetchListTasksActions
}

function* watchFetchListTasksActions(){
    console.log('Watch fetch list tasks Actions')
}

function* watchCreateTaskActions(){
    console.log('Watch create task Actions')
}

export default rootSaga;
