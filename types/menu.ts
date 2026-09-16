export type DietaryTag = "V" | "VG" | "GF";

export type MenuItem = {
  name: string;
  description: string;
  /** Price in whole US dollars. Wines list a glass and a bottle price. */
  price: number | { glass: number; bottle: number };
  tags?: DietaryTag[];
};

export type MenuSection = {
  id: string;
  title: string;
  navLabel: string;
  intro: string;
  note: string;
  image?: { src: string; alt: string; width: number; height: number };
  items: MenuItem[];
};
