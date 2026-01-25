import { createInitialAcademicInfo, AcademicInfo } from "./user-profile.vm";
import { getAcademicInfo } from "./api/user-profile.api";
import { mapApiAcademicToAcademic } from "./user-profile.mapper";

export const getAcademic = async (): Promise<AcademicInfo> => {
  try {
    const apiAcademic = await getAcademicInfo();
    return mapApiAcademicToAcademic(apiAcademic);
  } catch {
    return createInitialAcademicInfo();
  }
};
