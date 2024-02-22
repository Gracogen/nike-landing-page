
const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
   <button className={`flex justify-center items-center 
   ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "border-coral-red bg-coral-red text-white" } ${fullWidth && 'w-full' }
   gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full`}>
        {label}

        {iconURL && <img src={iconURL} alt="right arrow" className="ml-2 rounded-full w-5 h-5 " />
}
   </button>
  )
}

export default Button