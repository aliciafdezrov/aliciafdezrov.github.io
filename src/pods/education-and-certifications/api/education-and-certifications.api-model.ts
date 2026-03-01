export interface EducationAndCertificationsApiItem {
  name: string;
  location: string;
  date: string;
  description?: string;
}

export const createInitialEducationAndCertificationsApiItem = (): EducationAndCertificationsApiItem => ({
  name: "",
  location: "",
  date: "",
  description: "",
});

export interface EducationAndCertificationsApiInfo {
  title: string;
  degrees: Array<EducationAndCertificationsApiItem>;
}

export const createInitialEducationAndCertificationsApiInfo = (): EducationAndCertificationsApiInfo => ({
  title: "",
  degrees: [],
});
