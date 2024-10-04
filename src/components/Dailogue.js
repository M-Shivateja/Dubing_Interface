import React, { useContext } from "react";
import { DialogueContext } from "../context/DialogueContext";

const Dialogue = () => {
  const {
    currentDialogue,
    updateText,
    navigateDialogue,
    currentIndex,
    dialogues,
  } = useContext(DialogueContext);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-2">Current Dialogue</h3>
      <div className="mb-4">
        <label className="block font-medium">Original Text</label>
        <input
          type="text"
          value={currentDialogue.originalText}
          onChange={(e) => updateText("originalText", e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Translated Text</label>
        <input
          type="text"
          value={currentDialogue.translatedText}
          onChange={(e) => updateText("translatedText", e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => navigateDialogue("prev")}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-md text-white ${
            currentIndex === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => navigateDialogue("next")}
          disabled={currentIndex === dialogues.length - 1}
          className={`px-4 py-2 rounded-md text-white ${
            currentIndex === dialogues.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dialogue;
