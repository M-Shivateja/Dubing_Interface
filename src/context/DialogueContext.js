import React, { createContext, useState } from "react";

export const DialogueContext = createContext();

const mockDialogues = [
  {
    id: 1,
    originalText: "Hello, how are you?",
    translatedText: "Hola, ¿cómo estás?",
  },
  {
    id: 2,
    originalText: "I'm fine, thank you!",
    translatedText: "¡Estoy bien, gracias!",
  },
  {
    id: 3,
    originalText: "What are you doing today?",
    translatedText: "¿Qué estás haciendo hoy?",
  },
];

export const DialogueProvider = ({ children }) => {
  const [dialogues] = useState(mockDialogues);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDialogue, setCurrentDialogue] = useState(dialogues[0]);

  const updateText = (field, value) => {
    setCurrentDialogue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const navigateDialogue = (direction) => {
    let newIndex = currentIndex;
    if (direction === "next" && currentIndex < dialogues.length - 1) {
      newIndex += 1;
    } else if (direction === "prev" && currentIndex > 0) {
      newIndex -= 1;
    }
    setCurrentIndex(newIndex);
    setCurrentDialogue(dialogues[newIndex]);
  };

  return (
    <DialogueContext.Provider
      value={{
        dialogues,
        currentDialogue,
        updateText,
        navigateDialogue,
        currentIndex,
      }}
    >
      {children}
    </DialogueContext.Provider>
  );
};
