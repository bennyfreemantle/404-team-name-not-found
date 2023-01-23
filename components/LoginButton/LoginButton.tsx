import Link from "next/link";
import React from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function LoginButton() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  function logout() {
    supabase.auth.signOut();
    router.push("/");
  }

  return (
    <>
      {session ? (
        <button
          onClick={logout}
          className="w-28 p-1 text-md uppercase font-semibold bg-amber-50 rounded-xl text-slate-900"
        >
          Logout
        </button>
      ) : (
        <Link href={"/login"}>
          <button className="w-28 p-1 text-lg uppercase font-semibold bg-amber-50 rounded-md text-slate-900">
            Login
          </button>
        </Link>
      )}
    </>
  );
}
