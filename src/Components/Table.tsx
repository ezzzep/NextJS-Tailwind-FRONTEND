
export default function Table(){
  return (  
     <div className="relative px-[18px] xl:px-[150px] lg:px-[70px] md:px-[44px] sm:px-[40px] overflow-auto">
       <div className="hidden md:block">
         <div className=" bg-white h-[400px] sm:h-[400px] md:h-[230px] shadow-lg mb-6 rounded-[2rem] border-2 border-[#007E66] overflow-x-auto">
           <div className="flex flex-col md:flex-row justify-evenly pr-10 font-montserrat font-bold text-black pt-7 mt-4">
             <h1 className="pl-4">Property Type</h1>
             <h1 className="pl-6">Model</h1>
             <h1 className="pl-5">Location</h1>
             <h1 className="">Area</h1>
             <h1 className="pr-8">Price</h1>
             <h1 className="">Availability</h1>
           </div>

           <div className="flex flex-col md:flex-row justify-evenly font-montserrat font-medium text-[#1D3461] pt-8 mt-3 text-sm px-5">
             <p className="pr-3 md:pl-4">Amaia Laguna</p>
             <p className="pr-2 md:pl-4">Amaia Lands</p>
             <p className="md:pr-1 pr-8 md:pl-1">Laguna</p>
             <p className="md:pl-4">50sqm</p>
             <p className="md:pl-2 pr-2">2.2 M</p>
             <p className="text-[#007E66] md:pl-2">Ready for Occupancy</p>
           </div>
           
           <div className="absolute w-[calc(100%-38px)] xl:w-[calc(100%-303px)] lg:w-[calc(100%-143px)] md:w-[calc(100%-90px)] sm:w-[calc(100%-82px)] h-[60px] sm:mt-[210px] mt-[210px] md:mt-[36px] bg-[#007E66] rounded-b-[2rem] 2xl:w-[1200px]">

               <div className="flex justify-between items-center pl-[84px] sm:pl-[70px] lg:pl-[116px] xl:pl-[108px] mt-3">
                 <div className="flex items-center space-x-5 pl-[10px]">
                   <div className="w-6 h-6 bg-[url('/images/Maps.png')] bg-cover"></div>
                   <p className="font-sans font-tight text-white tracking-wide hover:text-black hover:cursor-pointer">View Property Map</p>
                 </div>
                 <div className="flex pr-[50px] lg:pr-[110px]">
                 <button className="w-[232px] h-[35px] bg-[#FFB20C] rounded-full flex items-center justify-center hover:bg-yellow-600">
                   <p className="font-montserrat font-bold text-sm text-black">View Property Full Details</p>
                 </button>
                 </div>
               </div>
           </div>
         </div>
       </div>

       <div className="md:hidden bg-white rounded-[2rem] border-2 border-[#007E66]">
         <div className="h-[402px] sm:h-[381px] rounded-[2rem] shadow-lg overflow-x-auto">
           <div className="grid grid-cols-2 gap-x-4 font-montserrat text-black pt-7 mt-4">

             <div className="text-left space-y-5 pl-8 sm:pl-[80px] md:pl-[80px] font-bold">
               <h1>Property Type</h1>
               <h1>Model</h1>
               <h1>Location</h1>
               <h1>Area</h1>
               <h1>Price</h1>
               <h1>Availability</h1>
             </div>

             <div className="text-left space-y-5 pl-4 sm:pl-12 md:pl-[80px] font-medium">
               <p>Amaia Laguna</p>
               <p>Amaia Lands</p>
               <p>Laguna</p>
               <p>50sqm</p>
               <p>2.2 M</p>
               <p className="text-[#007E66]">Ready for Occupancy</p>
             </div>

           <div className="absolute w-[calc(100%-38px)] sm:w-[calc(100%-83px)] h-[60px] sm:mt-[278px] mt-[300px] bg-[#007E66] rounded-b-[2rem]">
               <div className="flex justify-between items-center pl-[30px] sm:pl-[50px] mt-3">
                 <div className="flex items-center space-x-5">
                   <div className="w-6 h-6 bg-[url('/images/Maps.png')] bg-cover"></div>
                     <p className="hidden sm:block font-sans font-tight text-white tracking-wide">View Property Map</p>
                     <p className="sm:hidden font-sans font-tight text-white tracking-wide">Map</p>
                  </div>
                   <div className="flex pr-[20px] sm:pr-[50px]">
                     <button className="hidden sm:block w-[232px] h-[35px] bg-[#FFB20C] rounded-full items-center justify-center">
                       <p className="font-montserrat font-bold text-sm text-black">View Property Full Details</p>
                     </button>
                     <button className="sm:hidden w-[100px] h-[35px] bg-[#FFB20C] rounded-full items-center justify-center">
                       <p className="font-montserrat font-bold text-sm text-black">Details</p>
                     </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
