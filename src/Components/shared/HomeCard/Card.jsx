

const Card = ({title,title2, illustrationSrc,illustrationAlt}) => {
  return (
    
    
    <div className="w-[80vw] px-45 h-[280px] bg-[#EDE9F2] flex flex-col items-center  justify-center rounded-2xl">

        <h1 className="flex gap-3 px-10 w-full  ">Home |
            <span className="text-[#7538c0] ">Become An Instructor </span>
           
        </h1>

    <div className="w-full  h-[250px] bg-[#EDE9F2] flex  justify-center items-center  rounded-xl p-6 mt-">
        <div className="w-1/2 bg-[#EDE9F2]  flex flex-col   text-4xl font-semibold text-blue-950 ">
           <h1 className="text-center">{title}</h1>
           <h2  className="text-center">{title2}</h2>
         </div>
         <div className="w-1/2 h-[210px] bg-[#EDE9F2] flex  justify-center items-center">
            <img className="w-[300px] h-[200px]" src={illustrationSrc} alt={illustrationAlt || "Illustration"}  />
         </div>
    </div>
    </div>
  )
}

export default Card