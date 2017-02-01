import api from 'api';

export const TEST_ACTION = 'TEST_ACTION';

export const TEST_ASYNC_ACTION_START = 'TEST_ASYNC_ACTION_START';
export const TEST_ASYNC_ACTION_ERROR = 'TEST_ASYNC_ACTION_ERROR';
export const TEST_ASYNC_ACTION_SUCCESS = 'TEST_ASYNC_ACTION_SUCCESS';
export const GET_EVENTS_START = 'GET_EVENTS_START';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';


// Test action

export function testAction() {
  return {
    type: TEST_ACTION,
  };
}

// Async action example

function testAsyncStart() {
  return {
    type: TEST_ASYNC_ACTION_START,
  };
}

function testAsyncSuccess(data) {
  return {
    type: TEST_ASYNC_ACTION_SUCCESS,
    data,
  };
}

function testAsyncError(error) {
  return {
    type: TEST_ASYNC_ACTION_ERROR,
    error,
  };
}

export function testAsync() {
  return function (dispatch) {
    dispatch(testAsyncStart());

    api.testAsync()
      .then(data => dispatch(testAsyncSuccess(data)))
      .catch(error => dispatch(testAsyncError(error)));
  };
}

// Update

function getEventsStart() {
  return {
    type: GET_EVENTS_START,
  };
}

function getEventsSuccess(data) {
  return {
    type: GET_EVENTS_SUCCESS,
    data,
  };
}

function getEventsError(error) {
  return {
    type: GET_EVENTS_ERROR,
    error,
  };
}

export function getEvents() {
  return function (dispatch) {
    dispatch(getEventsStart());

    api.getEvents()
      .then(data => dispatch(getEventsSuccess(data)))
      .catch(error => dispatch(getEventsError(error)));
  };
}
