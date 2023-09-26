"use client";

import { FormEvent, useState } from "react";

export default function Form() {
  const [userEmail, setUserEmail] = useState("");
  const isFormValid: Boolean =
    userEmail.trim() != "" && userEmail.includes("@");

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail }),
    });

    if (res.ok) {
      setUserEmail("");
    }

    if (!res.ok) {
      setUserEmail(userEmail);
    }
  };
  return (
    <form onSubmit={formHandler} className={"my-6"}>
      <input
        className={"bg-neutral-900 rounded-xl py-3 px-4"}
        type={"email"}
        name={"email"}
        placeholder={"email"}
        required={true}
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button
        className={
          "bg-white text-black rounded-xl py-2 px-4 mx-3 hover:bg-neutral-300"
        }
        type={"submit"}
        disabled={!isFormValid}
      >
        Insert
      </button>
    </form>
  );
}
