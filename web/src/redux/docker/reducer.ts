import { createReducer } from '@reduxjs/toolkit';
import { setContainerId } from './actions';

interface State {
  containerId: string | null
}

const initialState: State = {
  containerId: null
};
 
export default createReducer(initialState, builder =>
  builder
    .addCase(setContainerId, (state, action) => {
      const containerId = action.payload;
      state.containerId = containerId;
      return state;
    })
);