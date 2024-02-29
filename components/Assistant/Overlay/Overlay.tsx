"use client";
import React, { useState } from "react";

import OverlayChatArea from "./OverlayChatArea";
import OverlayButton from "./OverlayButton";
import { usePathname } from "next/navigation";

const Overlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return pathname === '/dashboard' ? (
    <>
      {isOpen ? <OverlayChatArea setIsOpen={setIsOpen} /> : null}

      <OverlayButton setIsOpen={setIsOpen} />
    </>
  ): null;
};

export default Overlay;
