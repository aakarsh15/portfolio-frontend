import React, { useEffect, useState } from "react";

const CursorRipple = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const { clientX: x, clientY: y } = e;
      const newRipple = { id: Date.now(), x, y };
      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation duration (600ms)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {ripples.map(({ id, x, y }) => (
        <span
          key={id}
          className="ripple-effect"
          style={{ left: x, top: y }}
        ></span>
      ))}
    </>
  );
};

export default CursorRipple;
