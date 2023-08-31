import CardComments from "./CardComments";
import { dataCommentsUsers } from "@/data/card-dataCommentsUsers";

export default function CommentsUsers() {
  return (
    <section className="w-full bg-white md:p-14">
      <div className="flex justify-center md:my-[70px]">
        <div className="border-b-4 border-secondary">
          <h1 className="text-blue_800 md:text-4xl leading-loose font-[acme] ">
            Lo que nuestros clientes opinan
          </h1>
        </div>
      </div>
      {
        <div className="flex flex-row flex-wrap text-blue_800">
          {dataCommentsUsers.map((card, index) => (
            <div key={index} className="flex flex-row px-11 pb-5">
              <CardComments
                id={card.id}
                pictureProfile={card.pictureProfile}
                name={card.name}
                description={card.description}
                profession={card.profession}
                rating={card.rating}
              />
            </div>
          ))}
        </div>
      }
    </section>
  );
}
