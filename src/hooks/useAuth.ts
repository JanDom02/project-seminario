"use client"

import { useEffect, useState } from "react";
import { createClient } from "../../utils/supabase/client";
import { useRouter } from "next/navigation";

export function useAuth() {
    const supabase = createClient()
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    const getUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
        return user;
    };

    const signUp = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        return { data, error };
    };

    const signIn = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        return { data, error };
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        router.push("/login");
    };

    useEffect(() => {
        getUser();
    }, []);

  return { user, getUser, signUp, signIn, signOut };
}
