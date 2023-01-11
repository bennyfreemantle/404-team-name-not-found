import Link from "next/link";
import React from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function LoginButton() {
  const session = useSession();
  const supabase = useSupabaseClient();

  function logout() {
    supabase.auth.signOut();
  }

  return (
    <>
      {session ? (
        <button
          onClick={logout}
          className="w-28 p-1 bg-amber-50 rounded-xl text-slate-900"
        >
          Logout
        </button>
      ) : (
        <Link href={"/login"}>
          <button className="w-28 p-1 bg-amber-50 rounded-xl text-slate-900">
            Login
          </button>
        </Link>
      )}
    </>
  );
}
