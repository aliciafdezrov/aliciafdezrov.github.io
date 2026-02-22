import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiBriefcaseDuotone,
  PiStackDuotone,
  PiGearSixDuotone,
  PiTreeStructureDuotone,
  PiPuzzlePieceDuotone,
  PiLightningDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiTypescript,
  SiReactrouter,
  SiReactquery,
  SiCss3,
  SiSass,
  SiStyledcomponents,
  SiJest,
  SiVitest,
  SiCypress,
  SiWebpack,
  SiVite,
  SiGit,
  SiRedux,
} from "react-icons/si";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaHeart,
} from "react-icons/fa6";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  briefcase: PiBriefcaseDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  github: FaGithub,
  linkedin: FaLinkedin,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  figma: SiFigma,
  instagram: FaInstagram,
  react: FaReact,
  typescript: SiTypescript,
  "react-router": SiReactrouter,
  "tanstack-query": SiReactquery,
  css: SiCss3,
  sass: SiSass,
  "styled-components": SiStyledcomponents,
  jest: SiJest,
  vitest: SiVitest,
  cypress: SiCypress,
  webpack: SiWebpack,
  vite: SiVite,
  git: SiGit,
  redux: SiRedux,
  lightMode: MdOutlineLightMode,
  darkMode: MdOutlineNightlight,
  love: FaHeart,
  stack: PiStackDuotone,
  gear: PiGearSixDuotone,
  "tree-structure": PiTreeStructureDuotone,
  puzzle: PiPuzzlePieceDuotone,
  lightning: PiLightningDuotone,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
