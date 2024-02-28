"use client";
import React, { useState } from "react";


import OverlayChatArea from "./OverlayChatArea";
import OverlayButton from "./OverlayButton";

const Overlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? <OverlayChatArea setIsOpen={setIsOpen} /> : null}

      <OverlayButton setIsOpen={setIsOpen} />
    </>
  );
};

export default Overlay;
