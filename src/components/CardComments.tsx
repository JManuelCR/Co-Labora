import { dataCommentsUsers } from "@/data/card-dataCommentsUsers";


interface Props {
    id: number,
    pictureProfile: string,
    name:string,
    profession: string,
    rating: number,
    description: string,
}
export default function CardComments (props:Props){
    const {
        id,
        pictureProfile,
        name,
        profession,
        rating,
        description,
    } = props;
    return (
        <div className="border-secondary bg-white border-2 md:w-[350px] md:h-[490px] rounded-2xl p-8 ">
                <div className="flex gap-5">
                    <img src={pictureProfile} alt={name} className="w-[108px] h-[135px] rounded-[50%] "/>
                    <div className="flex flex-col justify-center">
                        <span className="font-[acme] text-3xl leading-none p-0 ">{name}</span>
                        <span className="font-[acme] text-xl ">{profession}</span>
                    </div>
                </div>
                <div className="flex gap-10 m-10 justify-center items-center">
                    <div className="flex gap-3">
                        <img src="icons/star-icon.webp" alt="star" className="h-4 w-4" />
                        <img src="icons/star-icon.webp" alt="star" className="h-4 w-4" />
                        <img src="icons/star-icon.webp" alt="star" className="h-4 w-4" />
                        <img src="icons/star-icon.webp" alt="star" className="h-4 w-4" />
                    </div>
                    <div>
                        <p className=" font-[poppins] text-lg ">{rating}</p>
                    </div>
                </div>
                <p className="font-[poppins] text-lg ">{description} </p>
            </div>
    )}