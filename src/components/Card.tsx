type CardProps = {
    title: string
    body:string
    img: string,
    md: string[],
    xl: string[],
    shadow: string,
}
import clsx from "clsx"
export default function Card({title, body, img, md, xl, shadow}: CardProps){
    const mdStrings = md.join(" ") 
    const xlStrings = xl.join(" ")
    return (
        <section className={clsx(
									 `flex flex-col justify-between border p-8 rounded-lg  h-[15.625rem] min-w-[19.625rem] md:w-max-full ${mdStrings} ${xlStrings} ${shadow}  `,
								)}
								>
            <hgroup>
                <h3  className="text-xl text-gray-500 font-semibold mb-[0.375rem] leading-[1.35]">{title}</h3>
                <p className="text-gray-400 text-[0.8125rem] tracking-[0.09px]">{body}</p>
            </hgroup>
            <img className="self-end justify-self-end" src={img} alt={title} />
        </section>
    )
}