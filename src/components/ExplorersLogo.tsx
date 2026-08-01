import React, { useEffect, useState } from "react";

interface ExplorersLogoProps {
  className?: string;
}

export const ExplorersLogo: React.FC<ExplorersLogoProps> = ({ className = "h-12 w-auto" }) => {
  const [defaultImgSrc, setDefaultImgSrc] = useState<string>("");

  // Generate high quality pixelated college logo
  useEffect(() => {
    const renderLogoImage = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 900;
      canvas.height = 190;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = false;

      const mainFont = "'Graduate', 'Press Start 2P', 'Roboto Slab', serif";
      ctx.textBaseline = "middle";

      const drawBorderedText = (
        text: string,
        x: number,
        y: number,
        fillColor: string,
        strokeColor: string,
        fontSize: number
      ) => {
        ctx.font = `900 ${fontSize}px ${mainFont}`;
        ctx.lineWidth = 10;
        ctx.strokeStyle = strokeColor;
        ctx.strokeText(text, x, y);
        ctx.fillStyle = fillColor;
        ctx.fillText(text, x, y);
      };

      const yPos = 85;
      const fontSize = 84;

      ctx.font = `900 ${fontSize}px ${mainFont}`;
      const explWidth = ctx.measureText("EXPL").width;
      const oWidth = ctx.measureText("O").width;

      const startX = 35;
      const oX = startX + explWidth + 8;
      const rersX = oX + oWidth + 8;

      ctx.fillStyle = "#041230";
      ctx.font = `900 ${fontSize}px ${mainFont}`;
      ctx.fillText("EXPL", startX + 4, yPos + 4);
      ctx.fillText("O", oX + 4, yPos + 4);
      ctx.fillText("RERS", rersX + 4, yPos + 4);

      drawBorderedText("EXPL", startX, yPos, "#0F52BA", "#082866", fontSize);
      drawBorderedText("O", oX, yPos, "#F5B800", "#082866", fontSize);
      drawBorderedText("RERS", rersX, yPos, "#0F52BA", "#082866", fontSize);

      const subFont = "'Silkscreen', 'Press Start 2P', monospace";
      ctx.font = `700 22px ${subFont}`;
      ctx.fillStyle = "#0A0A0A";
      ctx.textAlign = "center";
      ctx.fillText("ECOSISTEMA DE INNOVACIÓN EDUCATIVA", canvas.width / 2, 160);

      setDefaultImgSrc(canvas.toDataURL("image/png"));
    };

    renderLogoImage();

    if (document.fonts) {
      document.fonts.ready.then(renderLogoImage);
    }
  }, []);

  return (
    <div className="relative inline-block select-none">
      {defaultImgSrc ? (
        <img
          src={defaultImgSrc}
          alt="EXPLORERS - Ecosistema de Innovación Educativa"
          className={`object-contain select-none pointer-events-none ${className}`}
          style={{ imageRendering: "pixelated" }}
          draggable={false}
        />
      ) : (
        <div className={`bg-gray-100 rounded min-w-[200px] min-h-[48px] animate-pulse ${className}`} />
      )}
    </div>
  );
};

