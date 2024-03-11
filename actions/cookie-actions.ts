'use server'

import { cookies } from 'next/headers'
import { z } from 'zod'

const COOKIE_NAME = 'plugin-cookie-demo'
const schema = z.object({
  cookieValue: z.string().optional(),
})

// Set provided form value as cookie with 24hr expiry
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
  })
}
