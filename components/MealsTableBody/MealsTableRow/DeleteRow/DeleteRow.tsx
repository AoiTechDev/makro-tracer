import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React from "react";

type DeleteRowProps = {
  mealid: number;
  session: Session | null;
};
const DeleteRow = ({ mealid, session }: DeleteRowProps) => {
    const router = useRouter();
  const deleteMeal = async () => {
    try {
      const response = await fetch("/api/deleteMeal", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mealid, email: session?.user?.email }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("delete meal error", err);
    }

    router.refresh()
  };
  return (
    <div
      className="absolute w-5 h-5 bg-red-400 right-2 top-[50%] -translate-y-[50%] group-hover:block hidden"
      onClick={deleteMeal}
    ></div>
  );
};

export default DeleteRow;
