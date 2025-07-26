import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const isDev = process.env.NODE_ENV === "development";
const stringSchema = isDev ? z.string().optional() : z.string().min(1);
const urlSchema = isDev ? z.string().url().optional() : z.string().url().min(1);

export const env = createEnv({
  server: {
    NEXTAUTH_URL: urlSchema,
    AUTH_SECRET: stringSchema,
    GOOGLE_CLIENT_ID: stringSchema,
    GOOGLE_CLIENT_SECRET: stringSchema,
    GITHUB_OAUTH_TOKEN: stringSchema,
    DATABASE_URL: stringSchema,
    RESEND_API_KEY: stringSchema,
    EMAIL_FROM: stringSchema,
    STRIPE_API_KEY: stringSchema,
    STRIPE_WEBHOOK_SECRET: stringSchema,
  },
  client: {
    NEXT_PUBLIC_APP_URL: stringSchema,
    NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID: stringSchema,
    NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID: stringSchema,
    NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID: stringSchema,
    NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID: stringSchema,
  },
  runtimeEnv: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_OAUTH_TOKEN: process.env.GITHUB_OAUTH_TOKEN,
    DATABASE_URL: process.env.DATABASE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // Stripe
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
  },
});
