'use server'

import { cookies } from 'next/headers'
import { z } from 'zod'

const COOKIE_NAME = 'plugin-cookie-demo'
const schema = z.object({
  cookieValue: z.string().optional(),
})

/** 
 * Set provided form value as cookie with 24hr expiry. 
 * In this example we will use;
 * - `sameSite: 'none'` to allow cross-site cookies
 * - `secure: true` to ensure cookies are only sent over HTTPS
 * - `partitioned: true` enable CHIPS partitioning - https://developer.mozilla.org/en-US/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies
 */
export async function setCookieAction(formData: FormData) {
  const parsedFormData = schema.parse(Object.fromEntries(formData))

  if (parsedFormData.cookieValue) {
    cookies().set(
      COOKIE_NAME,
      parsedFormData.cookieValue,
      {
        expires: Date.now() + 86_400_000,
        sameSite: 'none',
        secure: true,
        partitioned: true,
      }
    )
  }
}

// Remove cookie
export async function removeCookieAction() {
  cookies().set(COOKIE_NAME, '', {
    expires: 0,
    sameSite: 'none',
    secure: true,
    partitioned: true,
  })
}
