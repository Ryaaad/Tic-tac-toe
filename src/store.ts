import { configureStore } from '@reduxjs/toolkit';
import XOreducer from './features/XO/XOSlice';
import manreducer from './features/man/man'
export const store = configureStore({
  reducer: {
    XO:XOreducer,
    man:manreducer
  },
});
