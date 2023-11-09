
import { ApiState } from "../types/Index" 

export const initialState = {
    user: {
      loading: false,
      error: null,
      data: null,
    },
} as ApiState;
