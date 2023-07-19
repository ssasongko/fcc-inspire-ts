import { BiLogoTwitter } from "react-icons/bi"
import LoadingSpinner from "./icons/LoadingSpinner"

type Props = {
  id: string,
  hexColor?: string,
  isLoading: boolean
}

const ShareTwitter = ({ id, hexColor, isLoading }: Props) => {
  return (
    <a
      id={id}
      href="https://twitter.com/intent/tweet"
      className="p-2 background text-sm text-white rounded-lg transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: hexColor }}
      target="_blank"
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && <BiLogoTwitter className="w-8 h-8"/>}
    </a>
  )
}

export default ShareTwitter