interface Props {
    iconItem: string,
    name: string,
    price: number,
}

export default function CardItems(props: Props) {
    const {
        iconItem,
        name,
        price,
    } = props
    return (
        <article className="w-[128px] h-[180px] rounded-[10px] flex flex-col gap-3 justify-center ">
            <div className="w-20 h-20"><img src={iconItem} alt={name} /></div>
            <p className="font-poppins text-small text-blue_700 font-semibold">{name}</p>
            <p className="font-poppins text-small text-blue_700 font-semibold">${price}.00</p>
            <img src="icons/addCircle.svg" alt={name} className="w-10 h-10" />
        </article>
    )
}