import SliderLandinDesktop from "./SliderLandigDesktop";

export default function CommentsUsers() {
  return (
    <section className="w-full bg-white md:px-[100px] mb-[86px]">
      <div className="flex justify-center md:my-[70px] max-lg:mb-[60px]  max-lg:mt-[30px]">
        <div className="border-b border-secondary mx-w-[560px] text-center">
          <h1 className="md:text-[40px] leading-loose font-acme text-blue_800 font-[800] leading-2.25 w-auto text-[20px] max-lg:block max-md:w-[160px] max-lg:leading-8 tracking-[-0.4px]">
            ¡Lo que opinan nuestros clientes!
          </h1>
        </div>
      </div>
      <SliderLandinDesktop />
    </section>
  );
}
