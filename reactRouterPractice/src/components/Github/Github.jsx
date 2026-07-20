// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// this is the hook which is used to take the data from that api where we use loader property in route in main.jsx to fetch the data

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Sohil2085")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="bg-gray-500 text-center text-3xl text-white p-4">
      Github followers : {data.followers}
      <img className="" src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Sohil2085");
  return response.json();
};
