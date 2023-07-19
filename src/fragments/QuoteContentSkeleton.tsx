const QuoteContentSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-2.5 bg-gray-500 rounded-full w-48 mb-4"></div>
      <div className="h-2 bg-gray-500 rounded-full w-full mb-2.5"></div>
      <div className="h-2 bg-gray-500 rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray-500 rounded-full max-w-[360px]"></div>
    </div>
  )
}

export default QuoteContentSkeleton