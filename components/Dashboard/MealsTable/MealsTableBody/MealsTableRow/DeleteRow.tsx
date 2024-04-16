import { deleteMeal } from "@/actions/actions";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";

import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
type DeleteRowProps = {
  mealid: number;
  session: Session | null;
  className?: string;
};
const DeleteRow = ({ mealid, session, className }: DeleteRowProps) => {
  return (
    <MdDelete
      className={cn(
        " text-2xl text-red-600 right-0 md:right-2",
        className
      )}
      onClick={() =>
        deleteMeal(session?.user?.email!, mealid).then((res) =>
          toast.success(res.message)
        )
      }
    />
  );
};

export default DeleteRow;
