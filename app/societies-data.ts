// Single source of truth for IEEE EUI societies and organizational units.
// Used by the header, footer, events filter, event cards, and society pages.

export type Society = {
  name: string;
  slug: string;
  /** IEEE organizational unit code, as used in event societyCodes */
  code: string;
};

export const societies: Society[] = [
  { name: "Computer Society", slug: "computer-society", code: "SBC60211912" },
  {
    name: "Robotics and Automation",
    slug: "robotics-and-automation",
    code: "SBC60211912C",
  },
  { name: "SIGHT", slug: "sight", code: "SBA60211912S" },
  { name: "ComSoc", slug: "comsoc", code: "SBC60211912A" },
];

// Units that appear on events but have no dedicated page
const otherUnitNames: Record<string, string> = {
  STB60211912: "IEEE EUI SB",
  SBA60211912: "WIE",
  YP80103: "Young Professionals",
};

export function unitCodeToName(code: string): string {
  const society = societies.find((s) => s.code === code);
  return society?.name ?? otherUnitNames[code] ?? code;
}

export function findSociety(slugOrName: string): Society | undefined {
  const needle = slugOrName.toLowerCase();
  return societies.find(
    (s) => s.slug === needle || s.name.toLowerCase() === needle,
  );
}
