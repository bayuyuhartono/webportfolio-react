import { HTMLProps } from "react"

const BadgeCard = (props: {text: string}) => {
    return (
      <>
        <span className="text-l h-fit font-mono font-extrabold text-uismoke rounded-md border-2 pl-2 pr-2 pb-2 pt-2 mr-4">
          {props.text}
        </span>
      </>
    )
  }
  
  export default BadgeCard
  