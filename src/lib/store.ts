import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

interface variables {
  golbalEmail: string;
  emailOtp: string;
}

interface functions {
  setGolabalEmail: (data: string) => void;
  setEmailOtp: (data: string) => void;
  Email: (email: string) => void;
}

export const useStore = create<variables & functions>((set) => ({
  golbalEmail: "",
  emailOtp: "",
  setGolabalEmail: (data: string) => set({ golbalEmail: data }),
  setEmailOtp: (data: string) => set({ emailOtp: data }),
  Email: async (email: string) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/verifyemail`,
        {
          email,
        }
      );
      if (res?.data?.code?.code == "EENVELOPE") {
        toast.error("Email is not valid");
      } else {
        set({ emailOtp: res.data.code });
      }
      return;
    } catch (error) {
      console.log(error);
    }
  },
}));
