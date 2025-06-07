import React, { useRef, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";

const techNodes = [
  { id: "HTML", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { id: "CSS", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { id: "JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { id: "React", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { id: "Node.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { id: "Express", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { id: "MongoDB", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { id: "MySQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { id: "Java", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { id: "C++", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
  { id: "Python", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { id: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { id: "Photoshop", img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
  { id: "Premiere", img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Adobe_Premiere_Pro_Logo.svg" },
];

const techLinks = techNodes.map((node, i, arr) =>
  i < arr.length - 1 ? { source: node.id, target: arr[i + 1].id } : null
).filter(Boolean);

const SkillsWeb = () => {
  const fgRef = useRef();

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force("charge").strength(-200);
    }
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#5B2CFA] text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Proficient Technologies in My Skill Set</h2>
      <div className="w-full h-[600px]">
        <ForceGraph2D
          ref={fgRef}
          graphData={{ nodes: techNodes, links: techLinks }}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const img = new Image();
            img.src = node.img;
            ctx.save();
            ctx.beginPath();
            ctx.arc(node.x, node.y, 22, 0, 2 * Math.PI);
            ctx.clip();
            ctx.drawImage(img, node.x - 22, node.y - 22, 44, 44);
            ctx.restore();
          }}
          nodePointerAreaPaint={(node, color, ctx) => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 22, 0, 2 * Math.PI);
            ctx.fill();
          }}
          linkColor={() => "#ccc"}
          linkWidth={1}
          backgroundColor="#5B2CFA"
        />
      </div>
    </section>
  );
};

export default SkillsWeb;
