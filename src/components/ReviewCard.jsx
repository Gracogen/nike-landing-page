import { star } from "../assets/icons"

const ReviewCard = ({imgURL, feedback, customerName, rating}) => {
  return (
    <div className="flex justify-center items-center flex-col">
<img src={imgURL} alt="customer" className="w-[120px] h-[120px] rounded-full object-cover" />
<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
    <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
        <p className="font-montserrat text-slate-gray text-xl">{rating}</p>
    </div>
    
    <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard