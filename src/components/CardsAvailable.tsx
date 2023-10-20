import Image from "next/image";
import image from "../../public/temporal-images/holder-carpenter.webp";
import Card from "@/types/card.types";
import SingleStar from "../../public/icons/Single-Star-icon.svg";
import Link from "next/link";
export default function CardsAvailable(props: Card) {
  function onClick(_id: any) {
    localStorage.setItem("selectedPropertyId", _id);
  }
  const { name, address, ratings, price, comments, score, onClicked } = props;
  const ratingList = ratings;
  return (
    <article className="w-[296px] h-auto flex flex-col  border border-solid border-primary rounded-2xl">
      <section>
        <Image
          src={image}
          alt="carpenter-temporal"
          width={296}
          height={195}
          className="rounded-t-2xl"
        />
      </section>
      <section className="p-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-blue_800 font-bold text-suTitles">{name}</h3>
          <p className="font-semibold text-blue_700">{address}</p>
        </div>
        <div className="flex justify-between">
          <span className=" flex items-center">
            <Image src={SingleStar} alt="single star" width={12} height={12} />
            <p className="text-blue_700 mt-1">{`${score} ${
              comments && comments.length > 1
                ? `(${comments.length} opiniones)`
                : "(0 opiniones)"
            }`}</p>
          </span>
          <strong className="text-blue_800 mt-1 ">${price} x dia</strong>
        </div>
        <div className="flex mt-2 justify-between">
          <Link href={"/detail"}>
            <button
              className="px-3 py-1 border border-solid border-primary text-primary rounded-xl font-bold"
              onClick={onClicked()}>
              Ver mas
            </button>
          </Link>
          <Link href={"/detail"}>
            <button
              className="px-3 py-1 bg-primary rounded-xl text-white"
              onClick={() => onClick(props._id)}>
              Rentar
            </button>
          </Link>
        </div>
      </section>
    </article>
  );
}
