import AdminHomePage from '../containers/AdminHomePage/index';
import Taskboard from '../containers/Taskboard/index';

// import { Taskboard } from "./../containers/Taskboard";

export const API_ENDPOINT = 'http://localhost:3000'

export const STATUS = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'IN PROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETE',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATE: 202
}

export const FORM_NAME = 'TASK MANAGEMENT'

export const ADMIN_ROUTES = [
  {
    path: '/task-board',
    name: 'Taskboard',
    exact: false,
    component: <Taskboard />
  },
  {
    path: '/',
    name: 'Dashboard',
    exact: true,
    component: <AdminHomePage />
  }
]
