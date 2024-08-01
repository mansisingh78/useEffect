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
    <div className="flex-col justify-center text-center p-2 gap-2">
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PracticeUseEffect;
