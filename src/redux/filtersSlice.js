import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;

      // return {
      //   ...state,
      //   name: action.payload,
      // };
    },
  },
});

export default slice.reducer;

export const { changeFilter } = slice.actions;

// ============== without createSlice ==================================

// export const changeFilter = createAction('name/changeFilter');

// const initialState = {
//   name: '',
// };

// export default function filtersSliceReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'name/changeFilter':
//       return {
//         ...state,
//         name: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// ============== /without createSlice ==================================
