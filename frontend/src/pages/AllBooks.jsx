import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";
import Loader from "../components/Loader/Loader";

const AllBooks = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios
        // .get("http://localhost:1000/api/v1/get-all-books")
        .get("http://127.0.0.1:8000/api/v1/blogs/");
      // console.log(response.data);
      setData(response.data);
    };
    fetch();
  }, []);

  return (
    <div className="bg-zinc-900 px-12 h-auto py-8">
      <h4 className="text-3xl text-yellow-100 text-center md:text-left">
        Our Book Collection
      </h4>
      {/* Loads loader till data is fetched  */}
      {!Data && (
        <div className="flex items-center justify-center my-8">
          <Loader />
        </div>
      )}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {/* IF data is available, then this gets displayed  */}
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllBooks;
