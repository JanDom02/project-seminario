"use client"
import { useEffect, useState } from "react";
import { createClient } from "../../utils/supabase/client";
import { User } from "@supabase/supabase-js";

interface Profile {
  nombre: string;
  apellido: string;
}

export const useUserProfile = () => {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchUserAndProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);

        const { data: profileData } = await supabase
          .from("profiles")
          .select("nombre, apellido")
          .eq("id", user.id)
          .single();

        setProfile(profileData);
      }
    };

    fetchUserAndProfile();
  }, []);

  return { user, profile };
};
