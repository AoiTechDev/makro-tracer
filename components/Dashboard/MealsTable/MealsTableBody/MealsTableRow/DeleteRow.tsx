import { deleteMeal } from "@/actions/actions";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";
type DeleteRowProps = {
  mealid: number;
  session: Session | null;
};
const DeleteRow = ({ mealid, session }: DeleteRowProps) => {

  return (
    <MdDelete
      className="absolute text-2xl text-red-600 right-0 md:right-2 top-[50%] -translate-y-[50%] group-hover:block hidden cursor-pointer "
      onClick={() => deleteMeal( session?.user?.email!, mealid)}
    />
  );
};

export default DeleteRow;
