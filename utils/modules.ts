export interface DocsModule {
  param: string;
  name: string;
  description: string;
  iconId: string;
}

export const docsModules: DocsModule[] = [
  {
    name: "Overview",
    param: "overview",
    description: "Overview what FE Tier1 is",
    iconId: "overview",
  },
  {
    name: "Business",
    param: "business",
    description: "Understanding the business",
    iconId: "business",
  },
  {
    name: "Leadership",
    param: "leadership",
    description: "Vision, mission, values",
    iconId: "leadership",
  },
  {
    name: "Techniques",
    param: "techniques",
    description: "We are art science",
    iconId: "techniques",
  },
  {
    name: "Health",
    param: "health",
    description: "Take care of ourselves",
    iconId: "health",
  },
  {
    name: "Finance",
    param: "finance",
    description: "Money is the ven",
    iconId: "finance",
  },
];
