import { resetMessage } from "../slices/photoSlice";

export const useResetComponentMessage = (dispatch: any) => {
  return () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };
};