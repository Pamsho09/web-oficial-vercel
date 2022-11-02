import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useGsapFromTo, useGsapTo } from "../../hooks/useGsap";

const Workshops = () => {
  const [ref] = useGsapFromTo({
    element: ".workshops",
    from: {
      scale: 0.9,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "none",
    },
    to: { scale: 1, yoyo: true, duration: 2, repeat: -1, ease: "none" },
  });
  const events = [
    {
      name: "Angel Toledo Flores",
      description: "Emergys Machine Learning Developer",
      img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/%C3%81ngel%20Toledo_9DysIO0.jfif",
    },
    {
      name: "DevCaress",
      description: "Nogara DevCode CEO.",
      img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/DevCaress%20%28Panel%29_wdpYOjF.jpg",
    },
    {
      name: "Francisco Jiménez",
      description: "Traxion Sr React native",
      img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/1665375879854%20%282%29.jpg",
    },
    {
      name: "Gabriela Ramírez",
      description: "Sr Android Developer",
      img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/1641862064784_mcct7U3.jpg",
    },
  ];
  return (
    <div className="w-full flex-1 px-6 py-11 overflow-hidden bg-white z-50 grid gap-16  grid-cols-1 md:flex  place-content-around justify-center flex-wrap  ">
      <h1 className="w-full text-center text-slate-600 font-bold text-2xl">
        Eventos
      </h1>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-4 md:gap-6">
        {events.map((item, i) => (
          <div ref={ref} key={i} className="relative w-full">

            <div className="w-full h-full z-50 p-4 bg-white rounded-lg flex flex-col items-center  relative  border-2 border-solid   border-black">
              <img
                src={item.img}
                className={
                  "icon-workshop w-full h-[300px] rounded-lg  object-cover bg-gray-400 object-contain "
                }
              />

              <div className="w-full p-3 flex flex-col gap-1 justify-around pb-3">
                <h1 className="font-bold text-base ">{item.description} </h1>
                <h2>Taller de machine learning</h2>
                <h4>{item.name}</h4>
              </div>
            </div>
            <div className="w-full h-full z-0 bg-gray-900 ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0"></div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="w-auto bg-slate-600 text-white font-bold py-2 px-4 rounded">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Workshops;
