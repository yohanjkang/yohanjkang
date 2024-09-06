const wordsToHighlight = [
  "C#",
  "Unity3D",
  "Blender",
  "Python",
  "Three.js",
  "React",
  "TypeScript",
  "Pandas",
];

export const highlightWordsInString = (text) => {
  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");
  return text.split(regex).map((part, index) =>
    wordsToHighlight.includes(part.toLowerCase()) ? (
      <span key={index} className="text-accent font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};
