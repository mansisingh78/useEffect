import { useEffect, useState } from "react";

const PracticeUseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((item) => setData(item))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  return (
    <div className=" grid grid-cols-4 w-[90%] h-[80%] w- m-auto gap-9 px-6 py-5 ">
      {data.map((item, index) => (
        <div
          key={index}
          className=" bg-white-400 rounded-lg shadow-lg px-5 py-5  "
        >
          <img className="  w-full h-48 mb-6 " src={item.image} />
          <h1 className="mb-2 text-center text-red-900">{item.title}</h1>
          <h2 className="mb-2 font-bold text-center  w-full max-w-xs mx-auto truncate ">
            {item.description}
          </h2>
          <h2 className="text-center font-medium ">Price - {item.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default PracticeUseEffect;
