import React, { Suspense, use } from "react";
import FriendCard from "./FriendCard";
import Loading from "./Loading";
const fetchFriensdData = fetch("/data/friends.json").then((res) => res.json());
const Friend = () => {
  const friends = use(fetchFriensdData);

  return (
    <div className="max-w-[1200px] mx-auto mt-10 px-5 py-10 md:py-20 cursor-pointer">
      <h2 className="text-2xl text-[#1F2937] font-semibold">Your Friends</h2>
      <Suspense fallback={<Loading/>}>
        <div className="mt-5 grid grid-cols-2 justify-items-center gap-3 md:grid-cols-4">
          {friends.map((friend, index) => (
            <FriendCard key={index} friend={friend} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Friend;
