import React from "react";

function Index() {
  const date = [
    {
      name: "lunes",
      date: "2021-10-11",
    },
    {
      name: "martes",
      date: "2021-10-12",
    },
    {
      name: "miercoles",
      date: "2021-10-13",
    },
    {
      name: "jueves",
      date: "2021-10-14",
    },
    {
      name: "viernes",
      date: "2021-10-15",
    },
    {
      name: "sabado",
      date: "2021-10-16",
    },
  ];

  return (
    <div className="flex-1 w-full mt-24 grid place-items-center ">
      <div className="w-10/12">
        <div className="w-full grid grid-cols-6 gap-3">
          {date.map((item, index) => (
            <div key={index} className="w-full font-bold p-1 box-border bg-gray-200">{item.name}</div>
          ))}
        </div>
        <div className="w-full grid grid-cols-6 gap-3">
          {date.map((item, index) => (
            <div key={index} className="w-full h-auto font-bold p-1 box-border bg-gray-200">{new Array(8).fill(0).map(
                (item, index) => (
                    <div key={index} className="w-full  font-bold p-1 box-border bg-gray-200">{8+index}</div>
                )
            )}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
