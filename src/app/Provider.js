"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const GlobalContextValue = {
  golbalEmail: "",
  emailOtp: "",
  isVerified: "",
  setGolabalEmail: (data) => {},
  setEmailOtp: (data) => {},
  setVerified: (data) => {},
};

const GlobalContext = createContext(GlobalContextValue);
export const useContextProvider = () => useContext(GlobalContext);

export const Provider = ({ children }) => {
  const [golbalEmail, setGolabalEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [isVerified, setVerified] = useState(false);
  return (
    <SessionProvider>
      <GlobalContext.Provider
        value={{
          // Variables
          golbalEmail,
          emailOtp,
          isVerified,
          // Functions
          setEmailOtp,
          setVerified,
          setGolabalEmail,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </SessionProvider>
  );
};
