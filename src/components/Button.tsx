type Props = {
  id: string,
  children: string | JSX.Element | JSX.Element[]
  bgColor?: string,
  onClick?: () => void
}

const Button = ({id, children, bgColor, onClick }: Props) => {
  return (
    <button
      id={id}
      style={{ backgroundColor: bgColor }}
      className="py-2 px-4 font-semibold rounded-lg bg-gray-700 text-white transition-colors duration-500 ease-in-out"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button