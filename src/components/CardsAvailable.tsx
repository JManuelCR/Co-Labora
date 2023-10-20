import Image from "next/image";
import Card from "@/types/card.types";
import SingleStar from "../../public/icons/Single-Star-icon.svg";
import Link from "next/link";
export default function CardsAvailable(props: Card) {
  function onClick(_id: any) {
    localStorage.setItem("selectedPropertyId", _id);
  }
  const { name, address, ratings, price, comments, score, onClicked, image } =
    props;
  const ratingList = ratings;
  return (
    <article className="w-[296px] h-[450px] flex flex-col justify-between border border-solid border-primary rounded-2xl">
      <section className="w-fit h-auto">
        <Image
          src={image}
          width={300}
          height={100}
          alt="carpenter-temporal"
          className="rounded-t-2xl bg-cover"
        />
      </section>
      <section className="px-3 py-1 flex flex-col justify-evenly">
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
