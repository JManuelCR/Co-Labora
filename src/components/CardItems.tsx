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
        <section className=" rounded-[10px] flex flex-col gap-2 h-[200px] justify-center text-center items-center border-2 border-primary p-4  w-32">
            <div className="w-15 h-15"><img src={iconItem} alt={name} /></div>
            <p className="font-poppins text-small text-blue_700 font-semibold leading-3">{name}</p>
            <p className="font-poppins text-small text-blue_700 font-semibold">${price}.00</p>
            <button>
            <img src="icons/addCircle.svg" alt={name} className="w-10 h-10" />
            </button>
        </section>
    )
}