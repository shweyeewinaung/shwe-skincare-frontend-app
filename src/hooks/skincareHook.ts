import { getAllSkincares, getSkincare } from "@/services/skincareService";
import { SkincareFilterType } from "@/types/skincareTypes";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const useAllSkincares = (type: SkincareFilterType, brand?: string) => {
  const result = useQuery({
    queryKey: ["skincares", type, brand],
    queryFn: () => getAllSkincares(type, brand),
  });

  return result;
};

const useSkincarebyId = (id: string) => {
  const result = useQuery({
    queryKey: ["skincares", id],
    queryFn: () => getSkincare(id),
  });

  return result;
};

export { useAllSkincares, useSkincarebyId };
