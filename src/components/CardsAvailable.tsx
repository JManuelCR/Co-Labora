import Image from "next/image";
import Card from "@/types/card.types";
import SingleStar from "../../public/icons/Single-Star-icon.svg";
import Link from "next/link";
export default function CardsAvailable(props: Card) {
  function onClick(_id: any) {
    localStorage.setItem("selectedPropertyId", _id);
  }
  const { name, location, ratings, price, comments, score, onClicked, image } =
    props;
  const ratingList = ratings;
  return (
    <Link href={`/detail`}>
      <button onClick={() => onClick(props._id)}>
      <article className="relative w-[296px] h-[340px] flex flex-col border border-solid border-primary rounded-2xl cursor-pointer">
      <div className="relative w-full h-[195px]">
        <Image
          src={image}
          objectFit="cover"
          fill={true}
          layout="fill"
          alt="carpenter-temporal"
          className="rounded-t-2xl bg-cover"
        />
      </div>
      <section className="px-4 py-[10px] flex flex-col mt-4 justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-blue_800 font-bold text-[16px] text-start font-poppins">{name}</h3>
          <p className="text-blue_700 text-start text-[12px] font-regular leading-[16.32px] tracking-[-0.24px]">{`${location.street} ${location.number} ${location.neighbor} ${location.city}`}</p>
        </div>
        <div className="absolute bottom-4 flex w-[250px] justify-between">
          <span className=" flex items-center">
            <Image src={SingleStar} alt="single star" width={12} height={12} />
            <p className="text-blue_700 mt-1 text-[12px] font-poppins font-bold">{`${score} ${
              comments && comments.length > 1
                ? `(${comments.length} opiniones)`
                : "(0 opiniones)"
            }`}</p>
          </span>
          <strong className="text-blue_800 mt-1 font-bold font-poppins">${price} x dia</strong>
        </div>
      </section>
    </article>
      </button>
    </Link>
   
  );
}
