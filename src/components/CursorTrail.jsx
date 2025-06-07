import React, { useEffect, useRef, useState } from "react";

const CursorTrail = ({ darkMode }) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const positions = useRef(Array(15).fill({ x: 0, y: 0 }));
  const mousePos = useRef({ x: 0, y: 0 });
  const wavePhase = useRef(0);
  const lastMoveTime = useRef(Date.now());
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = Date.now();
      if (!isMoving) setIsMoving(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isMoving]);

  useEffect(() => {
    const IDLE_TIMEOUT = 100;

    const animate = () => {
      const now = Date.now();
      const idle = now - lastMoveTime.current > IDLE_TIMEOUT;
      wavePhase.current += 0.3;

      const newPositions = [...positions.current];
      const { x: mouseX, y: mouseY } = mousePos.current;

      if (!idle) {
        setIsMoving(true);

        newPositions[0] = {
          x: newPositions[0].x + (mouseX - newPositions[0].x) * 0.3,
          y: newPositions[0].y + (mouseY - newPositions[0].y) * 0.3,
        };

        for (let i = 1; i < newPositions.length; i++) {
          const prev = newPositions[i - 1];
          const curr = newPositions[i];

          newPositions[i] = {
            x: curr.x + (prev.x - curr.x) * 0.3,
            y: curr.y + (prev.y - curr.y) * 0.3,
          };

          const dx = newPositions[i].x - newPositions[i - 1].x;
          const dy = newPositions[i].y - newPositions[i - 1].y;
          const angle = Math.atan2(dy, dx);

          const amplitude = 10 * (1 - i / newPositions.length);
          const offset = Math.sin(wavePhase.current + i * 1.5) * amplitude;

          newPositions[i].x += Math.cos(angle + Math.PI / 2) * offset;
          newPositions[i].y += Math.sin(angle + Math.PI / 2) * offset;
        }

        positions.current = newPositions;

        let pathData = `M ${newPositions[0].x},${newPositions[0].y}`;
        for (let i = 1; i < newPositions.length; i++) {
          pathData += ` L ${newPositions[i].x},${newPositions[i].y}`;
        }

        if (pathRef.current) {
          pathRef.current.setAttribute("d", pathData);
          pathRef.current.setAttribute("opacity", "1");
        }
      } else {
        setIsMoving(false);

        if (pathRef.current) pathRef.current.setAttribute("opacity", "0");

        if (svgRef.current) {
          const dot = svgRef.current.querySelector("#idle-dot");
          dot.setAttribute("cx", mousePos.current.x);
          dot.setAttribute("cy", mousePos.current.y);
          dot.setAttribute("display", "block");
        }
      }

      if (!idle && svgRef.current) {
        const dot = svgRef.current.querySelector("#idle-dot");
        dot.setAttribute("display", "none");
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const trailColor = darkMode ? "cyan" : "#1a1a1a"; // Dark color in light mode
  const glowColor = darkMode ? "cyan" : "#333";

  return (
    <svg
      ref={svgRef}
      className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none"
    >
      <defs>
        <linearGradient id="electricGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={trailColor} stopOpacity="0" />
          <stop offset="50%" stopColor={trailColor} stopOpacity="1" />
          <stop offset="100%" stopColor={trailColor} stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        ref={pathRef}
        stroke="url(#electricGradient)"
        strokeWidth="3"
        fill="none"
        opacity="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: `drop-shadow(0 0 8px ${glowColor}) blur(0.8px)`,
          transition: "opacity 0.2s ease-out",
        }}
      />

      <circle
        id="idle-dot"
        r="5"
        fill={trailColor}
        filter={`drop-shadow(0 0 6px ${glowColor})`}
        display="none"
      />
    </svg>
  );
};

export default CursorTrail;



// import React, { useEffect, useRef, useState } from "react";

// const CursorTrail = () => {
//   const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
//   const prevPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
//   const requestRef = useRef();
//   const phaseRef = useRef(0);

//   const SEGMENTS = 15;
//   const AMPLITUDE = 20;
//   const SEGMENT_LENGTH = 15;
//   const MOVE_THRESHOLD = 0.5;

//   const opacityRef = useRef(0);
//   const [pathData, setPathData] = useState("");
//   const [opacity, setOpacity] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mousePos.current = { x: e.clientX, y: e.clientY };
//       opacityRef.current = 1;
//       setOpacity(1);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const animate = () => {
//       phaseRef.current += 0.3;

//       const dx = mousePos.current.x - prevPos.current.x;
//       const dy = mousePos.current.y - prevPos.current.y;
//       const dist = Math.sqrt(dx * dx + dy * dy);

//       if (dist < MOVE_THRESHOLD) {
//         opacityRef.current *= 0.9;
//         if (opacityRef.current < 0.01) opacityRef.current = 0;
//       } else {
//         opacityRef.current = 1;
//       }

//       setOpacity(opacityRef.current);

//       if (opacityRef.current === 0) {
//         setPathData("");
//       } else {
//         const angle = Math.atan2(dy, dx);
//         const points = [];
//         points.push({ x: mousePos.current.x, y: mousePos.current.y });

//         for (let i = 1; i < SEGMENTS; i++) {
//           const prev = points[i - 1];
//           const baseX = prev.x - Math.cos(angle) * SEGMENT_LENGTH;
//           const baseY = prev.y - Math.sin(angle) * SEGMENT_LENGTH;

//           const direction = i % 2 === 0 ? 1 : -1;
//           const offsetX = direction * AMPLITUDE * Math.sin(phaseRef.current + i);

//           const perpAngle = angle + Math.PI / 2;

//           points.push({
//             x: baseX + Math.cos(perpAngle) * offsetX,
//             y: baseY + Math.sin(perpAngle) * offsetX,
//           });
//         }

//         const path = points
//           .map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`))
//           .join(" ");

//         setPathData(path);
//       }

//       prevPos.current = { ...mousePos.current };
//       requestRef.current = requestAnimationFrame(animate);
//     };

//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []);

//   return (
//     <svg
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         pointerEvents: "none",
//         zIndex: 9999,
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <defs>
//         <linearGradient id="fade-gradient" x1="0" y1="0" x2="1" y2="0">
//           {/* Tail is transparent, head is fully opaque */}
//           <stop offset="0%" stopColor="cyan" stopOpacity="0" />
//           <stop offset="100%" stopColor="cyan" stopOpacity={opacity} />
//         </linearGradient>
//       </defs>

//       {pathData && (
//         <path
//           d={pathData}
//           stroke="url(#fade-gradient)"
//           strokeWidth="3"
//           fill="none"
//           strokeLinecap="round"
//           filter="drop-shadow(0 0 8px cyan)"
//         />
//       )}
//     </svg>
//   );
// };

// export default CursorTrail;
