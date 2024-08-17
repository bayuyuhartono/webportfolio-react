import { HTMLProps } from "react"

const BadgeCard = (props: {text: string}) => {
    return (
      <>
        <span className={`text-l h-fit font-mono font-extrabold text-uismoke rounded-md border-2 pl-2 pr-2 pb-2 pt-2 ml-2 mr-2`}>
          {props.text}
        </span>
      </>
    )
  }
  
  export default BadgeCard
  