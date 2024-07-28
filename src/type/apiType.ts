export type ApiType = {
  addr1: string;
  addr2: string;
  areacode: string;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  cpyrhtDivCd: string;
  createdtime: string;
  firstimage: string;
  firstimage2: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  sigungucode: string;
  tel: string;
  title: string;
};

export type DetailItemType = {
  response: {
    body: {
      items: {
        item: [
          {
            addr1: string;
            addr2: string;
            areacode: string;
            booktour: string;
            contentid: string;
            contenttypeid: string;
            cpyrhtDivCd: string;
            createdtime: string;
            firstimage: string;
            firstimage2: string;
            homepage: string;
            mapx: string;
            mapy: string;
            mlevel: string;
            modifiedtime: string;
            overview: string;
            sigungucode: string;
            tel: string;
            telname: string;
            title: string;
            zipcode: string;
          }
        ];
      };
    };
  };
};
