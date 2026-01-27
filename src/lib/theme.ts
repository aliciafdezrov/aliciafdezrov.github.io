import { cookies } from "next/headers";
import { Theme, THEME_COOKIE_NAME } from "@/core/theme";

/**
 * Gets the current theme from cookies.
 * Falls back to "light" if no theme is set.
 */
export async function getTheme(): Promise<Theme> {
  const cookieStore = await cookies();
  const theme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  return theme === Theme.Light ? Theme.Light : Theme.Dark;
}

/**
 * Gets the theme that should be applied on initial page load.
 * This checks cookies first, then system preference.
 */
export async function getInitialTheme(): Promise<Theme> {
  return getTheme();
}
