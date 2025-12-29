import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { defaultLocale, locales, type Locale } from "./config";

export default getRequestConfig(async () => {
  // Try to get locale from cookie first
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value as
    | Locale
    | undefined;

  if (localeCookie && locales.includes(localeCookie)) {
    return {
      locale: localeCookie,
      messages: (await import(`../../messages/${localeCookie}.json`)).default,
    };
  }

  // Auto-detect from Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Check if user prefers Polish
  const prefersPL = acceptLanguage.toLowerCase().includes("pl");
  const detectedLocale: Locale = prefersPL ? "pl" : "en";

  return {
    locale: detectedLocale,
    messages: (await import(`../../messages/${detectedLocale}.json`)).default,
  };
});
