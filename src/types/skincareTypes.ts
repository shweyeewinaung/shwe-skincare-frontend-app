export interface BrandDetailInterface {
  logo: string;
  description: string;
  slug: string;
}

export interface BrandInterface {
  _id: string;
  brand: string;
  brandInfo: BrandDetailInterface;
}

export interface SkincareInterface extends BrandInterface {
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  brand: string;
  image: string;
  ratingsAverage: number;
}

export interface SkincaresArrayInterface {
  skincares: SkincareInterface[];
}

/* type SkincareType = {
  id: number;
  type: SkincareFilterType;
};
export type SkincareTypes = ReadonlyArray<SkincareType>; */

export type SkincareFilterType =
  | ""
  | "new"
  | "luxury"
  | "sameBrand"
  | "brandDetail"
  | "brandList";
