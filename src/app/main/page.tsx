import ApiList from "@/components/main/ApiList";
import SelectedButton from "@/components/main/SelectedButton";
import IButton from "@/elements/Button";
import Link from "next/link";

const Main = () => {
  const list = [
    "서울",
    "경기",
    "인천",
    "강원",
    "충북",
    "충남",
    "대전",
    "경북",
    "경남",
    "대구",
    "울산",
    "부산",
    "전북",
    "전남",
    "광주",
    "제주",
  ];

  return (
    <div>
      <SelectedButton />
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
                <IButton type="more" title="더보기" />
              </Link>
            </div>
            <ApiList area={area} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
