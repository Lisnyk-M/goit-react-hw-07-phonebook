import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBookReducer';
import logger from 'redux-logger';

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
    reducer: phoneBookReducer,
    // middleware: [...defaultMiddleware, logger]
    middleware: [...defaultMiddleware]
})

export default store;