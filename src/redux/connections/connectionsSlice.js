import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connections",
  initialState: {
    connections: null,
    connectionsLoader: false,
  },
  reducers: {
    requestConnnections: (state) => {
      state.connectionsLoader = true;
    },
    addConnections: (state, action) => {
      state.connections = action.payload;
      state.connectionsLoader = false;
    },
  },
});

export const { addConnections, requestConnnections } = connectionsSlice.actions;
export default connectionsSlice.reducer;
