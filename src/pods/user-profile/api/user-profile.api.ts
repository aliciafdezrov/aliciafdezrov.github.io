import { getInfo } from "@/lib/read-file";
import { AcademicApiInfo } from "./user-profile.api-model";

export const getAcademicInfo = async (): Promise<AcademicApiInfo> => {
  try {
    const json = await getInfo();
    return json.academic;
  } catch (exception) {
    throw exception;
  }
};
