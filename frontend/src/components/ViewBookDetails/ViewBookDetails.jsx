import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { GrLanguage } from "react-icons/gr";

const ViewBookDetails = () => {
  // Keep the parameter name same as that in the App.jsx route
  const { id } = useParams();
  //   console.log(id);

  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios
        // .get(`http://localhost:1000/api/v1/get-book-by-id/${id}`)
        .get(`http://127.0.0.1:8000/api/v1/blogs/${id}`);
      console.log(response.data);
      setData(response.data);
    };
    fetch();
  }, []);

  return (
    <>
      {!Data && (
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
      {Data && (
        <div className="px-4 md:px-12 py-8 bg-zinc-900  gap-8 flex flex-col md:flex-row">
          <div className="bg-zinc-800 rounded p-4 h-[60vh] lg:h-[88vh] w-full lg:w-3/6 flex items-center justify-center">
            <img src={Data.url} alt="" className="h-[50vh] lg:h-[70vh] " />
          </div>
          <div className="p-4 w-full lg:w-3/6">
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {Data.title}
            </h1>
            <p className="text-zinc-400 mt-1">{Data.author}</p>
            <p className="text-zinc-500 text-xl mt-4">{Data.desc}</p>
            <p className="text-zinc-400 flex mt-4 items-center justify-start">
              <GrLanguage className="me-3" />
              {Data.language}
            </p>
            <p className="mt-4 text-zinc-100 text-3xl font-semibold">
              Price : Rs {Data.price}{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
