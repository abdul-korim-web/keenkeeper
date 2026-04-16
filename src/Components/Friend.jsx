import React, { Suspense, use, useEffect, useState } from "react";
import FriendCard from "./FriendCard";
import Loading from "./Loading";
const fetchFriensdData = fetch("/data/friends.json").then((res) => res.json());
const Friend = () => {
  const friends = use(fetchFriensdData);
  const [selectValue, setSelectValue] = useState("default");
  const [SortFriendData, setsortFriendData] = useState(friends);
  const getSortData = () => {
    if (selectValue == "default") {
     return setsortFriendData(friends);
    }
    if (selectValue == "newest") {
     const sortData = [...friends].sort((a,b)=>new Date(a.next_due_date) - new Date(b.next_due_date))
     setsortFriendData(sortData)
    }
    if (selectValue == "oldest") {
     const sortData = [...friends].sort((a,b)=>new Date(b.next_due_date) - new Date(a.next_due_date))
     setsortFriendData(sortData)
    }

  };
  useEffect(() => {
    getSortData()
  }, [selectValue]);

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
      <Suspense fallback={<Loading />}>
        <div className="mt-5 grid grid-cols-2 justify-items-center gap-3 md:grid-cols-4">
          {SortFriendData.map((friend, index) => (
            <FriendCard key={index} friend={friend} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Friend;
