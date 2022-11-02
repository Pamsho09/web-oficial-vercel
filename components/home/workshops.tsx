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
      name:'DevCaress',
      description: "Nogara DevCode CEO.",
      img:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/DevCaress%20%28Panel%29_wdpYOjF.jpg'
    },
    {
      name: "Francisco Jiménez",
      description: "Traxion Sr React native",
      img:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/1665375879854%20%282%29.jpg'
    },{
      name: "Gabriela Ramírez",
      description: "Sr Android Developer",
      img:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/1641862064784_mcct7U3.jpg'
    }
  ];
  return (
    <div className="w-full h-scree px-6 py-11 overflow-hidden bg-slate-600 z-50 grid gap-16  grid-cols-1 md:flex  place-content-around justify-center flex-wrap  ">
      <h1 className="w-full text-center text-white font-bold text-2xl">
        Eventos
      </h1>

      <div className="flex flex-col md:grid grid-cols-2 flex-wrap gap-4">
        {events.map((item, i) => (
          <div
            ref={ref}
            key={i}
            className={
              i % 2
                ? "cardW w-full  flex items-end h-auto bg-white  gap-4  pl-3 justify-between  rounded shadow  flex-row-reverse rounded-tr-[50px]"
                : "cardW w-full flex h-auto bg-white  gap-4  pr-3  justify-between items-end rounded shadow  flex-row rounded-tl-[50px]"
            }
          >
            <img
              src={item.img}  className={
                i % 2
                  ? "icon-workshop w-[200px] h-[300px] object-cover bg-gray-400 object-contain rounded-tr-[50px]"
                  : "icon-workshop  w-[200px] h-[300px] bg-gray-400 object-contain object-cover  rounded-tl-[50px]"
              }
            />

            <div className=" w-full flex flex-col gap-1 justify-around pb-3">
              <h1 className="font-bold text-base ">{item.description} </h1>
              <h4>{
                item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;
