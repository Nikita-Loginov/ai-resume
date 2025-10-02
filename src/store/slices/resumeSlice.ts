import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Images } from "@/assets/images";

import type { IResume } from "@/types";

interface ResumeState {
  items: IResume[];
}

const initialState: ResumeState = {
  items: [
    {
      id: "1",
      company: "CodeNest",
      special: "Frontend Dev",
      img: Images.Resume,
      progress: "60",
      descr: '423',
    },
    {
      id: "2",
      company: "rwe",
      special: "Frontend Dev",
      img: Images.Resume,
      progress: "100",
      descr: 'fs',
    },
  ],
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IResume>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = resumeSlice.actions;
export default resumeSlice.reducer;
