type CardProps = {
    title: string
    body:string
    img: string,
    sm: string[],
    md: string[],
    xl: string[],
    shadow: string,
}
import clsx from "clsx"
export default function Card({title, body, img, sm, md, xl, shadow}: CardProps){
    const mdStrings = md.join(" ") 
    const xlStrings = xl.join(" ")
    const smallStrings = sm.join(" ")
    return (
        <section className={clsx(
									 `relative p-8 rounded-lg  h-[15.625rem] w-[19.625rem] md:w-[21.875rem] ${mdStrings} ${xlStrings} ${shadow} ${smallStrings} `,
								)}
								>
            <hgroup>
                <h3  className="text-xl text-gray-500 font-semibold mb-[0.375rem] leading-[1.35]">{title}</h3>
                <p className="text-gray-400 text-[0.8125rem] tracking-[0.09px]">{body}</p>
            </hgroup>
            <img className="absolute inset-[auto_2rem_2rem_auto]"src={img} alt={title} />
        </section>
    )
}