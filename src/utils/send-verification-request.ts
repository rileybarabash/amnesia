/**
 * @file Sends a verification request (magic link) to the user's email address.
 * @author Riley Barabash <riley@rileybarabash.com>
 */

import { MagicLink } from "~/emails"
import { env } from "~/env"
import { resend } from "~/lib"
import { preferences } from "~/preferences"
import { createSenderIdentity } from "~/utils"
import { type SendVerificationRequestParams } from "next-auth/providers/email"

export async function sendVerificationRequest({ identifier, url, expires }: SendVerificationRequestParams): Promise<void> {
    try {
        //  Send the verification email

        const response = await resend.emails.send({
            from: createSenderIdentity({
                senderEmail: preferences.brand.emails.auth
            }),
            to: [identifier],
            subject: `Sign in to ${preferences.brand.displayName}`,
            text: `Open this link to sign in to ${preferences.brand.displayName}: ${url}\n\n`,
            react: MagicLink({
                authLink: url,
                logoURL: `${env.BASE_URL}/brandmark.png`,
                recipientEmail: identifier,
                expires: expires
            })
        })

        if (response.error) {
            throw new Error(`Failed to send verification email to ${identifier}`, { cause: response.error })
        }
    } catch (error) {
        console.error(error)
    }
}
