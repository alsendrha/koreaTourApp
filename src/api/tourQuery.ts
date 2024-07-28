import { useQuery } from "@tanstack/react-query";
import { baseUrl, detailUrl } from "./baseApi";
import { DetailItemType } from "@/type/apiType";

export const useGetTourList = (keyword: string, numOfRows: Number) => {
  const queryFn = () =>
    baseUrl
      .get("", {
        params: {
          numOfRows,
          pageNo: 1,
          keyword,
        },
      })
      .then((res) => res.data.response.body.items.item);
  return useQuery({ queryKey: [`tourList${keyword}`], queryFn });
};

export const useGetDetailItem = (contentId: string) => {
  const queryFn = () =>
    detailUrl
      .get<DetailItemType>("", {
        params: {
          contentId,
        },
      })
      .then((res) => res.data.response.body.items.item);
  return useQuery({ queryKey: [`detailItem${contentId}`], queryFn });
};
