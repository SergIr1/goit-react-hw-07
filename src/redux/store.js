import { configureStore } from '@reduxjs/toolkit';
import contactsSliceReducer from './contactsSlice';
import filtersSliceReducer from './filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const contactsPersistConfig = {
  key: 'user_contacts',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
