import { useEffect, useState } from "react";

export default function useOutsideAlerter({ modalRef, onClose }) {
  const viewport_width = document.documentElement.clientWidth;
  useEffect(() => {
    function handleOutsideClick(event) {
    
      if (
        (modalRef?.current && !modalRef.current.contains(event.target)) 
      ) {
        onClose();
      }
    }

    
      document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalRef, onClose]);
}
