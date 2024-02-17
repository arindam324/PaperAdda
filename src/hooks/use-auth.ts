import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface AuthProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuth = create<AuthProps>((set) => ({
  user: null,
  login: (user: any) => set({ user }),
  logout: () => set({ user: null }),
}));
