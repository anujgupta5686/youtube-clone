import React from "react";
import { Button } from "@/components/ui/button";

const TagButton = ({ name }) => {
  return (
    <div>
      <Button
        size="sm"
        className="bg-gray-300 text-slate-500 hover:bg-gray-400 hover:text-slate-600"
      >
        {name}
      </Button>
    </div>
  );
};

export default TagButton;
