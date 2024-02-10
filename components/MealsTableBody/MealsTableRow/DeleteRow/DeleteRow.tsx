import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";
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

    router.refresh();
  };
  return (
    <MdDelete
      className="absolute text-2xl text-red-600 right-0 md:right-2 top-[50%] -translate-y-[50%] group-hover:block hidden cursor-pointer "
      onClick={deleteMeal}
    />
  );
};

export default DeleteRow;
