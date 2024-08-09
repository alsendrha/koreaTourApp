import { useQuery } from "@tanstack/react-query";
import { baseUrl, detailImageUrl, detailUrl } from "./baseApi";
import { DetailItemType } from "@/type/apiType";

export const useGetTourList = (
  keyword: string,
  numOfRows: number,
  contentType: number
) => {
  const queryFn = () =>
    baseUrl
      .get("", {
        params: {
          numOfRows,
          pageNo: 1,
          keyword,
          contentTypeId: contentType,
        },
      })
      .then((res) => res.data.response.body.items.item);
  return useQuery({
    queryKey: [`tourList${keyword}`],
    queryFn,
    initialData: [],
    refetchOnWindowFocus: false,
  });
};

export const useGetDetailItem = (contentId: string, contentType: number) => {
  const queryFn = () =>
    detailUrl
      .get<DetailItemType>("", {
        params: {
          contentId,
          contentTypeId: contentType,
        },
      })
      .then((res) => res.data.response.body.items.item);
  return useQuery({ queryKey: [`detailItem${contentId}`], queryFn });
};

export const useGetDetailItemImage = (contentId: string) => {
  const queryFn = () =>
    detailImageUrl
      .get("", {
        params: {
          contentId,
        },
      })
      .then((res) => res.data.response.body.items.item);
  return useQuery({ queryKey: [`detailImages${contentId}`], queryFn });
};
