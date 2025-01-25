// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  email: string;
  name: string;
  photo: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
 const parseUser=localStorage.getItem('user-token')
const getUser: User=JSON.parse(parseUser)

  const [user, setUser] = useState<User | null>(getUser || null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
