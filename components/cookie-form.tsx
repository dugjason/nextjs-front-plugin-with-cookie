"use client";

import { useFormStatus } from "react-dom";

import { removeCookieAction } from "@/actions/cookie-actions";
import { Button } from "./ui/button";

export function SetCookieForm() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="p-2 border border-gray-300 rounded-md"
      aria-disabled={pending}
    >
      {pending ? "Setting..." : "Set Cookie"}
    </Button>
  );
}

export function RemoveCookieForm() {
  return (
    <form action={removeCookieAction}>
      <Button
        variant="destructive"
        type="submit"
        className="p-2 border border-gray-300 rounded-md"
      >
        Remove Cookie
      </Button>
    </form>
  );
}
