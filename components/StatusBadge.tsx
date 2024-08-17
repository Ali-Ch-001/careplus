import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div className="status-badge flex items-center space-x-2">
      <Image
        src={StatusIcon[status]}
        alt={status}
        width={24}
        height={24}
        className="h-6 w-6"
      />
      <p
        className={clsx("text-sm font-semibold capitalize", {
          "text-green-600": status === "scheduled",
          "text-blue-600": status === "pending",
          "text-red-600": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};