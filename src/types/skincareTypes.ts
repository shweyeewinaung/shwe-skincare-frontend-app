export interface SkincareInterface {
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  brand: string;
  category: string;
  image: string;
  ratingsAverage: number;
  _id: string;
}

export interface SkincaresArrayInterface {
  skincares: SkincareInterface[];
}

/* type SkincareType = {
  id: number;
  type: SkincareFilterType;
};
export type SkincareTypes = ReadonlyArray<SkincareType>; */

export type SkincareFilterType = "" | "new" | "luxury" | "sameBrand";
