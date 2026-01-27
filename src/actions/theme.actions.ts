"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { Theme, THEME_COOKIE_NAME } from "@/core/theme";

/**
 * Sets the theme preference in a cookie and revalidates the page.
 */
export async function setTheme(theme: Theme) {
  const cookieStore = await cookies();

  cookieStore.set(THEME_COOKIE_NAME, theme, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
  });

  // Revalidate the current path to apply the new theme
  revalidatePath("/", "layout");
}

/**
 * Toggles between light and dark theme.
 */
export async function toggleTheme() {
  const cookieStore = await cookies();
  const currentTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const newTheme: Theme = currentTheme === Theme.Dark ? Theme.Light : Theme.Dark;

  await setTheme(newTheme);
}
