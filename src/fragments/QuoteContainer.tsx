import { useState, useEffect } from "react";
import { BiLogoTwitter } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa6";
import Button from "../components/Button";

const QuoteContainer = () => {

  const [hexColor, setHexColor] = useState<string>("");
  const generateRandomColor = (): void => {
    const r: number = Math.floor(Math.random() * 200);
    const g: number = Math.floor(Math.random() * 200);
    const b: number = Math.floor(Math.random() * 200);

    const hexR: string = r.toString(16).padStart(2, '0');
    const hexG: string = g.toString(16).padStart(2, '0');
    const hexB: string = b.toString(16).padStart(2, '0');

    const hexColor: string = '#' + hexR + hexG + hexB;

    setHexColor(hexColor);
  }
  useEffect(() => {
    generateRandomColor();
  }, [])

  return (
    <div
      className="h-screen flex items-center justify-center transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: hexColor }}
    >
      <div id="quote-box" className='container w-full md:w-8/12 lg:w-5/12 flex flex-col gap-8 bg-white border p-12 rounded-lg'>
        <div className='flex flex-col gap-6'>
          <h2 
            id="text" 
            className="text-2xl lg:text-3xl font-bold text-center gap-2 transition-colors duration-500 ease-in-out"
            style={{ color: hexColor }}
          >
            <FaQuoteLeft className="w-8 h-8" />
            Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.
          </h2>
          <p
            id="author"
            className="text-md md:text-xl font-medium text-right transition-colors duration-500 ease-in-out"
            style={{ color: hexColor }}
          >
            - Nur Sasongko
          </p>
        </div>
        <div className='flex justify-between mt-3 p-2'>
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            className="p-2 background text-sm text-white rounded-lg transition-colors duration-500 ease-in-out"
            style={{ backgroundColor: hexColor }}
          >
            <BiLogoTwitter
              className="w-8 h-8"
            />
          </a>
          <Button
            id="new-quote"
            onClick={() => generateRandomColor()}
            bgColor={hexColor}
          >
            New Qoute
          </Button>
        </div>
      </div>
    </div>
  )
}

export default QuoteContainer