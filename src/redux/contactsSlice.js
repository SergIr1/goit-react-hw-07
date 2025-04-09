import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

export const selectContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectNameFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    loading: false,
    error: null,
  },
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items = [...state.items, action.payload];
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        console.log('pending action reducer');
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log('fulfilled action reducer', state, action);
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default slice.reducer;

// export const { addContact, deleteContact } = slice.actions;
// export const { deleteContact } = slice.actions;
