export function createCanvasBackground(videoElement: HTMLVideoElement) {
  const video = videoElement;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.className = "video-background";
  canvas.style.cssText = video.style.cssText;
  video.parentNode?.replaceChild(canvas, video);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Dark coding simulation with typing effect
  const codeLines = [
    'import React, { useState, useEffect } from "react";',
    "const Portfolio = () => {",
    "  const [isLoading, setIsLoading] = useState(true);",
    "  const [projects, setProjects] = useState([]);",
    "",
    "  useEffect(() => {",
    "    fetchProjects().then(data => {",
    "      setProjects(data);",
    "      setIsLoading(false);",
    "    });",
    "  }, []);",
    "",
    "  const handleProjectClick = (id) => {",
    "    router.push(`/projects/${id}`);",
    "  };",
    "",
    "  return (",
    '    <div classNameName="portfolio-container">',
    "      {isLoading ? (",
    "        <LoadingSpinner />",
    "      ) : (",
    "        <ProjectGrid",
    "          projects={projects}",
    "          onProjectClick={handleProjectClick}",
    "        />",
    "      )}",
    "    </div>",
    "  );",
    "};",
    "",
    "export default Portfolio;",
  ];

  let currentLine = 0;
  let currentChar = 0;
  let cursorVisible = true;
  const typingSpeed = 50;

  function drawCode() {
    if (!ctx) return;
    // Dark background
    ctx.fillStyle = "#0d1117";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Code editor styling
    ctx.font = '16px "Fira Code", "Courier New", monospace';
    ctx.textBaseline = "top";

    const lineHeight = 24;
    const startY = 50;
    const startX = 60;

    // Draw line numbers
    ctx.fillStyle = "#484f58";
    for (let i = 0; i <= Math.min(currentLine + 5, codeLines.length); i++) {
      ctx.fillText(
        (i + 1).toString().padStart(2, " "),
        20,
        startY + i * lineHeight
      );
    }

    // Draw completed lines
    for (let i = 0; i < currentLine; i++) {
      const line = codeLines[i];
      ctx.fillStyle = getCodeColor(line);
      ctx.fillText(line, startX, startY + i * lineHeight);
    }

    // Draw current line being typed
    if (currentLine < codeLines.length) {
      const currentLineText = codeLines[currentLine];
      const visibleText = currentLineText.substring(0, currentChar);

      ctx.fillStyle = getCodeColor(currentLineText);
      ctx.fillText(visibleText, startX, startY + currentLine * lineHeight);

      // Draw cursor
      if (cursorVisible) {
        const textWidth = ctx.measureText(visibleText).width;
        ctx.fillStyle = "#58a6ff";
        ctx.fillRect(
          startX + textWidth,
          startY + currentLine * lineHeight,
          2,
          20
        );
      }
    }

    // Add subtle glow effects
    ctx.shadowColor = "#58a6ff";
    ctx.shadowBlur = 10;
    ctx.fillStyle = "rgba(88, 166, 255, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.shadowBlur = 0;
  }

  function getCodeColor(line: string): string {
    if (
      line.includes("import") ||
      line.includes("export") ||
      line.includes("const") ||
      line.includes("let")
    ) {
      return "#ff7b72"; // Red for keywords
    } else if (
      line.includes("useState") ||
      line.includes("useEffect") ||
      line.includes("React")
    ) {
      return "#79c0ff"; // Blue for React/hooks
    } else if (line.includes("//") || line.includes("/*")) {
      return "#8b949e"; // Gray for comments
    } else if (line.includes('"') || line.includes("'")) {
      return "#a5d6ff"; // Light blue for strings
    } else if (
      line.includes("{") ||
      line.includes("}") ||
      line.includes("(") ||
      line.includes(")")
    ) {
      return "#f85149"; // Red for brackets
    } else if (line.trim() === "") {
      return "#e6edf3"; // White for empty lines
    } else {
      return "#e6edf3"; // Default white
    }
  }

  function animate() {
    drawCode();

    // Typing animation
    if (currentLine < codeLines.length) {
      if (currentChar < codeLines[currentLine].length) {
        currentChar++;
      } else {
        currentLine++;
        currentChar = 0;
        // Pause at end of line
        setTimeout(() => {}, 200);
      }
    } else {
      // Reset animation
      setTimeout(() => {
        currentLine = 0;
        currentChar = 0;
      }, 3000);
    }

    // Cursor blinking
    if (Math.random() > 0.7) {
      cursorVisible = !cursorVisible;
    }

    setTimeout(
      () => requestAnimationFrame(animate),
      typingSpeed + Math.random() * 50
    );
  }

  animate();

  // // Resize canvas on window resize
  // window.addEventListener("resize", () => {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  // });
}
