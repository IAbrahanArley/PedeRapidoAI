"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Auth = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <p>Olá, {session.user?.name}!</p>
          <button onClick={() => signOut()}>Sair</button>
        </div>
      ) : (
        <button onClick={() => signIn("google")}>Entrar com Google</button>
      )}
    </div>
  );
};

export default Auth;
