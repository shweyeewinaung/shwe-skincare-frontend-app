import { SkincareFilterType } from "@/types/skincareTypes";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllSkincares = async (
  type: SkincareFilterType,
  brand?: string
) => {
  let url = `${baseURL}/skincares`;

  if (type == "new") {
    url = url + `?sort=-createdAt&limit=5`;
  }
  if (type == "luxury") {
    url = url + `?price[gte]=1000&limit=5`;
  }
  if (type == "sameBrand") {
    url = url + `?brand=${brand}&limit=5`;
  }
  if (type === "brandDetail") {
    url = url + `?brand=${brand}`;
  }
  if (type === "brandList") {
    url = url + `?fields=brand,brandInfo`;
  }

  const response = await axios.get(url);
  return response.data;
};

export const getSkincare = async (id: string) => {
  const response = await axios.get(`${baseURL}/skincares/${id}`);
  return response.data;
};
