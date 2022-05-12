import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import volunteeringSlice from "./volunteeringDataSlice";
import associationsSlice from "./AssociationDataSlice";
import foundersSlice from "./founderDataSlice";
import newAssociationsSlice from "./newAssociationsSlice";
import popularAssociationsSlice from "./popularAssociationsSlice";
import openAssociationsSlice from "./openAssociationsSlice";


const store = configureStore({
  reducer: {
    founders: foundersSlice.reducer,
    associations: associationsSlice.reducer,
    volunteering: volunteeringSlice.reducer,
    newAssociations: newAssociationsSlice.reducer,
    popularAssociations: popularAssociationsSlice.reducer,
    openAssociations: openAssociationsSlice.reducer
  },
});


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;

