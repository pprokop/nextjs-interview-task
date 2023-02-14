import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { PEXELS_URL } from '../utils/constants';
import { PhotosResponse } from '../interfaces/photos';

interface SliceState {
  data: PhotosResponse,
  error: string;
  loading: boolean;
};

export const initialState: SliceState = {
  data: {
    photos: [],
    total_results: 0,
    page: 0,
    per_page: 0,
  },
  error: '',
  loading: false,
};

export const fetchPhotos = createAsyncThunk<
  PhotosResponse, // return value
  {}, // parameters
  {}
>(
  'photos/fetchPhotos',
  async params => {
    console.log(params)
    const { data } = await axios.get<PhotosResponse>(PEXELS_URL, {
      headers: {
        Authorization: process.env.API_KEY,
      },
      params
    });
    console.log(data)
    return data;
  }
);


const photosDataSlice = createSlice({
  extraReducers: {
    [fetchPhotos.pending.toString()]: (state: SliceState) => {
      state.loading = true;
    },
    [fetchPhotos.fulfilled.toString()]: (state: SliceState, action: PayloadAction<PhotosResponse>) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchPhotos.rejected.toString()]: (state: SliceState, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  initialState,
  name: 'photos',
  reducers: {
    // reducers
  },
});

export default photosDataSlice.reducer;
