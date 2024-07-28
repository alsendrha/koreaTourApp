import ApiList from "@/components/main/ApiList";
import Link from "next/link";

const Main = () => {
  const list = ["서울", "경기", "강원", "제주"];

  return (
    <div className="w-full max-w-[928px] mx-auto">
      {list.map((area) => (
        <div key={area}>
          <div className="flex flex-wrap justify-between items-center mx-4">
            <p className="font-bold">{area}</p>
            <Link
              href={{
                pathname: "/detailList",
                query: {
                  id: area,
                },
              }}
            >
              <p className="border rounded-full px-3 py-1">더보기</p>
            </Link>
          </div>
          <ApiList area={area} />
        </div>
      ))}
    </div>
  );
};

export default Main;
