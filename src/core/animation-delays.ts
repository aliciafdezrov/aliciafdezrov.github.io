export const PAGE_ANIMATION_DELAYS = {
  aboutMe: {
    name: 0,
    role: 0.1,
    socialLinks: {
      base: 0.15,
      increment: 0.03,
    },
    description: 0.3,
  },
  experience: {
    title: 0.4,
    rows: {
      base: 0.5,
      increment: 0.4,
      offsets: {
        date: 0.05,
        subtitle: 0.1,
        contributions: {
          base: 0.15,
          increment: 0.05,
        },
      },
    },
  },
  technicalSkills: {
    title: 2.0,
    rows: {
      base: 2.1,
      increment: 0.15,
      offsets: {
        description: 0.05,
      },
    },
  },
  educationAndCertifications: {
    title: 3.0,
    rows: {
      base: 3.1,
      increment: 0.25,
      offsets: {
        date: 0.05,
        subtitle: 0.1,
        description: 0.15,
      },
    },
  },
} as const;
