/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import raitingStars from "../../public/icons/stars.svg"


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
                        <span className="font-acme text-blue_800 text-[40px] leading-none p-0">{name}</span>
                        <span className="font-acme text-blue_800 text-[24px] ">{profession}</span>
                    </div>
                </div>
                <div className="flex gap-10 my-10 justify-start  items-center">
                    <div className="flex gap-3">
                            <Image src={raitingStars} alt={"raiting stars"}/>
                    </div>
                    <div>
                        <p className="font-poppins text-[18px] text-blue_800">{rating}</p>
                    </div>
                </div>
                <p className="font-poppins text-[18px] text-blue_800">{description} </p>
            </div>
    )}