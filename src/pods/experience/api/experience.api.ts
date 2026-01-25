import { getInfo } from "@/lib/read-file";
import { ExperienceApiInfo } from "./experience.api-model";

export const getExperienceInfo = async (): Promise<ExperienceApiInfo> => {
  try {
    const json = await getInfo();
    return json.experience;
  } catch (exception) {
    throw exception;
  }
};
