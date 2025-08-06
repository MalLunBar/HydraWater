

const Icon = ({ src, name, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 gap-2 max-w-[90px]">
      <img
        className="w-14 h-14 md:w-8 md:h-8 invert"
        src={src}
        alt={description} />

      <p className="text-center">{name}</p>
    </div>
  )

}

export default Icon