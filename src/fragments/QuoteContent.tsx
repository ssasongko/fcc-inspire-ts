import { FaQuoteLeft } from "react-icons/fa6"

type Props = {
  quote: string,
  author: string,
  hexColor: string,
}

const QuoteContent = ({ quote, author, hexColor }: Props) => {
  return (
    <>
      <h2
        id="text"
        className="text-2xl lg:text-3xl font-bold text-center gap-2 transition-colors duration-500 ease-in-out"
        style={{ color: hexColor }}
      >
        <FaQuoteLeft className="w-8 h-8" />
        {quote}
      </h2>
      <p
        id="author"
        className="text-md md:text-xl font-medium text-right transition-colors duration-500 ease-in-out"
        style={{ color: hexColor }}
      >
        - {author}
      </p>
    </>
  )
}

export default QuoteContent