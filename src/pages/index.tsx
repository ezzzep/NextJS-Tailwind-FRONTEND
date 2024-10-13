import Table from "../Components/Table";

export default function Home() {
  return (
    <div className="relative h-screen bg-no-repeat bg-cover bg-center bg-[url('/images/Amaia.jpg')]">
      <div className="bg-white bg-opacity-65 shadow-lg h-[407px]"></div>

      <p className="absolute top-[30px] sm:top-[140px] font-montserrat font-extrabold text-[34px] sm:text-[40px] md:text-[50px] 2xl:text-[57.4px] xl:left-[222px] md:left-[100px] lg:left-[110px] sm:left-[90px] left-[30px] text-[#1D3461]">
        Amaia Scapes Laguna
      </p>

      <p
        className="absolute md:w-[500px] top-[135px] sm:top-[195px] md:top-[215px] lg:left-[110px] md:left-[100px] sm:left-[90px] xl:left-[222px] left-[30px] font-montserrat font-extrabold text-2xl md:text-4xl text-[#007366]"
        style={{ letterSpacing: "13px" }}>
        PROPERTY LIST
      </p> 

        <div className="absolute w-full h-[2700px] sm:h-[2600px] md:h-[1680px] bg-[#1D3461] sm:top-[320px] md:top-[350px] top-[240px] xl:top-[402px]overflow-auto">

              <div className="mt-10 sm:mt-10 md:mt-12">
                <Table />
              </div>

              <div className="mt-10 sm:mt-10 md:mt-5">
                <Table />
              </div>

              <div className="mt-10 sm:mt-10 md:mt-5">
                <Table />
              </div>

              <div className="mt-10 sm:mt-10 md:mt-5">
                <Table />
              </div>

              <div className="mt-10 sm:mt-10 md:mt-5">
                <Table />
              </div>

              <div className="mt-10 sm:mt-10 md:mt-5">
                <Table />
              </div>

        </div>

      </div>
  );
}
