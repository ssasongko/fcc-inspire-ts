import { useState, useEffect } from "react";
import Button from "../components/Button";
import About from "../components/About";
import axios from "axios";
import ShareTwitter from "../components/ShareTwitter";
import QuoteContentSkeleton from "./QuoteContentSkeleton";
import QuoteContent from "./QuoteContent";

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

  type Quote = {
    text: string;
    author: string;
  }

  const [quote, setQuote] = useState<Quote>({ text: '', author: '' });
  const [loadingQoute, setLoadingQoute] = useState(true);
  const fetchNewQuote = (): void => {
    setLoadingQoute(true);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    axios.get(import.meta.env.VITE_RAPID_QOUTES_URL, {
      params: { category: 'all', count: '1' },
      headers: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_QOUTES_KEY,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        'X-RapidAPI-Host': import.meta.env.VITE_RAPID_QOUTES_HOST
      },
    }
    ).then(res => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data } = res;

      const quote: Quote = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        text: data[0].text,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        author: data[0].author,
      };

      generateRandomColor();
      setQuote(quote);

    }).catch(() => {
      return;
    }).finally(() => {
      setLoadingQoute(false);
    });
  };

  useEffect(() => {
    generateRandomColor();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchNewQuote();
  }, [])


  return (
    <div
      className="h-screen flex flex-col gap-3 items-center justify-center transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: hexColor }}
    >
      <div id="quote-box" className='container w-full md:w-8/12 lg:w-5/12 flex flex-col gap-8 bg-white border p-12 rounded-lg'>
        <div className='flex flex-col gap-6'>
          {loadingQoute && (<QuoteContentSkeleton />)}
          {!loadingQoute && (
            <QuoteContent 
              quote={quote.text}
              author={quote.author}
              hexColor={hexColor}
            />
          )}
        </div>
        <div className='flex justify-between mt-3 p-2'>
          <ShareTwitter
            id="tweet-quote"
            hexColor={hexColor}
            isLoading={loadingQoute}
          />
          <Button
            id="new-quote"
            onClick={() => fetchNewQuote()}
            bgColor={hexColor}
            isLoading={loadingQoute}
          >
            New Qoute
          </Button>
        </div>
      </div>
      <About />
    </div>
  )
}

export default QuoteContainer