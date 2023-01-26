import Head from "next/head";
import Image from "next/image";
import { Database } from "../../types/supabase";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

type AccountProfileProps = {
  session?: Session;
};

export default function AccountProfile({ session }: AccountProfileProps) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(true);

  const [username, setUsername] = useState<Profiles["username"]>(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let {
        data: profile,
        error,
        status,
      } = await supabase
        .from("profiles")
        .select(`username`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (profile) {
        setUsername(profile.username);
        console.log(user);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
  }: {
    username: Profiles["username"];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      const updates = {
        id: user.id,
        username,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-800">
      <div className="flex flex-col min-h-screen container mx-auto my-0 p-3">
        <main className="flex gap-4 flex-1 flex-col text-amber-50">
          <div>
            <h1 className="text-2xl font-bold">Profile settings</h1>
            <p>Change your account settings here</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Image
              alt="profile pic placeholder"
              src="./person.svg"
              width={50}
              height={50}
            />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <form
              onSubmit={() => updateProfile({ username })}
              className="flex flex-col gap-4 md:w-1/2"
            >
              <div className="flex flex-col md:flex-row md:justify-between">
                <label>Your Username:</label>
                <input
                  className="w-2/3 text-slate-900"
                  type="text"
                  value={username || ""}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <button className="rounded-xl bg-red-400 text-amber-50 p-1 text-lg md:w-32">
                Save
              </button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}
