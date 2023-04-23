import { PayloadAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { IArrayPhoto } from "../../../models/photo";
import { RootState } from "../../../redux/store";

interface PhotoState {
    photoDataList: IArrayPhoto[];
  }
  
  const initialState: PhotoState = {
    photoDataList: [],
  };
  
  export const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
      setPhotoDataList: (state, action: PayloadAction<IArrayPhoto[]>) => {
        state.photoDataList = action.payload;
      },
      addPhotoData: (state, action: PayloadAction<IArrayPhoto[]>) => {
        state.photoDataList = state.photoDataList.concat(action.payload);
      },
      editPhotoData: (state, action: PayloadAction<{ index: number, data: IArrayPhoto }>) => {
        state.photoDataList[action.payload.index] = action.payload.data;
      },
      deletePhotoData: (state, action: PayloadAction<number>) => {
        state.photoDataList.splice(action.payload, 1);
      }
    },
  });
  
  export const { setPhotoDataList, addPhotoData, editPhotoData , deletePhotoData } = photoSlice.actions;
  
  export const selectPhotoDataList = (state: RootState) =>
    state.photo.photoDataList;
  
  export default photoSlice.reducer;