import { cookies } from "next/headers";
import { setCookieAction } from "@/actions/cookie-actions";
import { RemoveCookieForm, SetCookieForm } from "@/components/cookie-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const cookie = cookies().get("plugin-cookie-demo");
  const cookieHasValue = Boolean(cookie && cookie.value);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 max-w-l w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="mx-auto flex w-full justify-center grid grid-cols-1 gap-8 mt-4">
          <div className="grid gap-2">
            <Card>
              <CardHeader>
                <CardTitle>Next.js / Front Plugin demo with Cookies</CardTitle>
                <CardDescription>
                  This is a Next.js demo application built as a Front plugin. It
                  sets and removes a cookie using Next.js Server Actions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid gap-2">
            <Card>
              <form action={setCookieAction}>
                <CardHeader>
                  <CardTitle>Set cookie</CardTitle>
                  <CardDescription>Set the cookie value.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="cookieValue">Set cookie value as</Label>
                    <Input
                      id="cookieValue"
                      name="cookieValue"
                      placeholder="Testing..."
                    />
                  </div>
                </CardContent>
                <CardFooter className="justify-between space-x-2">
                  <SetCookieForm />
                </CardFooter>
              </form>
            </Card>
          </div>

          <div className="grid gap-2">
            <Card>
              <CardHeader>
                <CardTitle>Remove cookie</CardTitle>
                <CardDescription>Remove the cookie value.</CardDescription>
              </CardHeader>
              <CardContent>
                <RemoveCookieForm />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-2">
            <Card>
              <CardHeader>
                <CardTitle>Cookie value</CardTitle>
                <CardDescription>
                  {cookieHasValue ? (
                    <span className="text-green-500">Cookie is set</span>
                  ) : (
                    <span className="text-red-500">Cookie is not set</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre>{JSON.stringify(cookie, null, 2)}</pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
