export interface EducationAndCertificationsItem {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
}

export const createInitialEducationAndCertificationsItem = (): EducationAndCertificationsItem => ({
  title: "",
  subtitle: "",
  date: "",
  description: "",
});

export interface EducationAndCertificationsInfo {
  title: string;
  degrees: Array<EducationAndCertificationsItem>;
}

export const createInitialEducationAndCertificationsInfo = (): EducationAndCertificationsInfo => ({
  title: "",
  degrees: [],
});
