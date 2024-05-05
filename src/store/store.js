import { create } from 'zustand'

export const useUserStore = create((set) => ({
  isLogin: false,
  userId: 0,
  Username: "",
  UserId: "",
  email: "",
  avatar: "",
  firstName: "",
  lastName: "",
  theme: "light",
  isAlert: false,
  alertMsg: "",
  alertType: "",
  attachments: [],
  uploadProgressCaption: "",
  attachmentProgress: 0,


  setFirstName: (newState) => set({ firstName:newState}),
  setUserId: (newState) => set({ UserId:newState}),
  setLastName: (newState) => set({ lastName:newState}),
  setIsLogin: (newState) => set({ isLogin:newState}),
  setUsername: (newState) => set({ Username:newState}),
  setUserId: (newState) => set({ UserId:newState}),
  setEmail: (newState) => set({ email:newState}),
  setAvatar: (newState) => set({ avatar:newState}),
  setIsAlert: (newState) => set({ isAlert:newState}),
  setAlertMsg: (newState) => set({ alertMsg:newState }),
  setAlertType: (newState) => set({ alertType:newState }),
  setTheme: (newTheme) => set({ theme:newTheme }),

}))