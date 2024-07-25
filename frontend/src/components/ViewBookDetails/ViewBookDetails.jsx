import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { GrLanguage } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const ViewBookDetails = () => {
  // Keep the parameter name same as that in the App.jsx route
  const { id } = useParams();
  //   console.log(id);

  const [Data, setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

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
        <div className="px-4 md:px-12 py-8 bg-zinc-900  gap-8 flex flex-col lg:flex-row">
          <div className="  px-4 py-12  w-full lg:w-3/6">
            <div className="flex flex-col md:flex-row justify-around bg-zinc-800 p-12 rounded">
              <img
                src={Data.url}
                alt=""
                className="h-[50vh] md:h-[60vh] lg:h-[70vh] rounded "
              />
              {isLoggedIn === true && role === "user" && (
                <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                  <button className="bg-white rounded lg:rounded-full text-3xl p-3 text-red-500 flex items-center justify-center">
                    <FaHeart />{" "}
                    <span className="ms-4 block lg:hidden">Favourites</span>
                  </button>
                  <button className="text-white rounded lg:rounded-full text-3xl p-3 mt-0 lg:mt-8 bg-blue-500 flex items-center justify-center">
                    <FaShoppingCart />{" "}
                    <span className="ms-4 block lg:hidden">Add to Cart</span>
                  </button>
                </div>
              )}
              {isLoggedIn === true && role === "admin" && (
                <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                  <button className="bg-white rounded lg:rounded-full text-3xl p-3 text-red-500 flex items-center justify-center">
                    <FaEdit />{" "}
                    <span className="ms-4 block lg:hidden">Edit book</span>
                  </button>
                  <button className="text-red-500 rounded lg:rounded-full text-3xl p-3 mt-0 lg:mt-8 bg-white flex items-center justify-center">
                    <MdOutlineDelete />{" "}
                    <span className="ms-4 block lg:hidden">Delete book</span>
                  </button>
                </div>
              )}
            </div>
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
