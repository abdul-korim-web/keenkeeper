import React, { Suspense, use, useEffect, useState } from "react";
import FriendCard from "./FriendCard";
import Loading from "./Loading";
const fetchFriensdData = fetch("/data/friends.json").then((res) => res.json());
const Friend = () => {
  const friends = use(fetchFriensdData);

  const [selectValue, setSelectValue] = useState("default");
  const [searchValue, setSearchValue] = useState("");
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    let data = [...friends];
    if (searchValue) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }
    if (selectValue === "newest") {
      data.sort((a, b) => new Date(b.next_due_date) - new Date(a.next_due_date));
    }
    if (selectValue === "oldest") {data.sort((a, b) => new Date(a.next_due_date) - new Date(b.next_due_date));
    }

    setFinalData(data);
  }, [friends, searchValue, selectValue]);

  return (
    <div className="max-w-[1200px] mx-auto mt-10 px-5 py-10 md:py-20 cursor-pointer">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-[#1F2937] font-semibold">Your Friends</h2>
        <select
          onChange={(e) => setSelectValue(e.target.value)}
          defaultValue="Filter timeline"
          className="select border outline-none border-[#9696A2]/30 mt-3 bg-[#F8FAFC] cursor-pointer w-[100px] md:w-[150px] "
        >
          <option>default</option>
          <option>newest</option>
          <option>oldest</option>
        </select>
      </div>
      <div className="flex justify-center my-5">
        <label className="input md:w-[500px] md:h-[50px] rounded-2xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search Your Friends"
          />
        </label>
      </div>
      <Suspense fallback={<Loading />}>
        {finalData.length===0? (
<div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
      
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f1f5f9] text-3xl">
        🔍
      </div>

      <h2 className="text-xl font-semibold text-[#1F2937]">
        No friends found
      </h2>

      <p className="text-[#64748b] max-w-[300px]">
        No results match your search. Try a different keyword.
      </p>

      <button
        onClick={() => setSearchValue("")}
        className="btn px-4 py-2 bg-[#244d3f] text-white rounded-lg hover:bg-[#1b3a30] transition"
      >
        Clear Search
      </button>

    </div>
        ):(
          <div className="mt-5 grid grid-cols-2 justify-items-center gap-3 md:grid-cols-4">
          {finalData.map((friend, index) => (
            <FriendCard key={index} friend={friend} />
          ))}
        </div>
        )}
      </Suspense>
    </div>
  );
};

export default Friend;
