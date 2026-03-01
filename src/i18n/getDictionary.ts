import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";

export enum Lang {
  EN = "en",
  ES = "es",
}

export type Dictionary = typeof en;

export const LANGS: Lang[] = [Lang.EN, Lang.ES];

export const getDictionary = (lang: Lang): Dictionary => {
  return lang === Lang.ES ? es : en;
};
