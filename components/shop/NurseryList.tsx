import { NURSERY_QUERYResult } from "@/sanity.types";
import React from "react";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Props {
  nurseries: NURSERY_QUERYResult;
  selectedNursery?: string | null;
  setSelectedNursery: React.Dispatch<React.SetStateAction<string | null>>;
}

const NurseryList = ({ nurseries, selectedNursery, setSelectedNursery }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base font-black">Nurseries</Title>
      <RadioGroup value={selectedNursery || ""} className="mt-2 space-y-1">
        {nurseries?.map((nursery) => (
          <div
            key={nursery?._id}
            onClick={() => setSelectedNursery(nursery?.slug?.current as string)}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={nursery?.slug?.current as string}
              id={nursery?.slug?.current}
              className="rounded-sm"
            />
            <Label
              htmlFor={nursery?.slug?.current}
              className={`${selectedNursery === nursery?.slug?.current ? "font-semibold text-shop_dark_green" : "font-normal"}`}
            >
              {nursery?.title}
            </Label>
          </div>
        ))}
        {selectedNursery && (
          <button
            onClick={() => setSelectedNursery(null)}
            className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect text-left"
          >
            Reset selection
          </button>
        )}
      </RadioGroup>
    </div>
  );
};

export default NurseryList;
