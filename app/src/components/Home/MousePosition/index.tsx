import { useState, useEffect } from "react";


export function onMouseMove(): { x: number, y: number } {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  function updateMousePosition(event: MouseEvent) {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window?.removeEventListener("mousemove", updateMousePosition);
    }
  }, []);

  return mousePosition;
}