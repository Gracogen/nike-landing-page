
const ShoeCard = ({imgURL, bigShoeImg, changeBigShoeImage }) => {

  const handleClick =()=>{
if(bigShoeImg !== imgURL.bigShoe){
  changeBigShoeImage(imgURL.bigShoe)
}
  }

  return (
  <div className={`rounded-xl border-2
    ${ bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent' } cursor-pointer max-sm:flex-1
  `} onClick={handleClick}>

    <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
  <img src={imgURL.thumbnail} alt="Shoe Collection" height={103} width={127} className="object-contain"/>
  </div>
  </div>
  )
}

export default ShoeCard