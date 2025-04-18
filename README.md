# 📝 Word Counter

![Word Counter Preview](preview.png)

A lightweight, real-time word counter web application that analyzes text as you type, providing instant counts of words, letters, and sentences.

## ✨ Features

- **Real-time text analysis** - Instant updates as you type
- **Multiple metrics**:
  - ✅ Word count
  - 🔤 Character count (including spaces)
  - 📝 Sentence detection
- **Clean, modern UI** with responsive design
- **Zero dependencies** - Pure HTML, CSS, and JavaScript
- **Fast and lightweight** - Minimal resource usage

## 🚀 Usage

1. Type or paste text into the input box
2. Watch counters update in real-time:
   - **Words**: Counts space-separated terms
   - **Letters**: All characters (including spaces)
   - **Sentences**: Detects sentences ending with . ! or ?

Live demo: [GitHub Pages Link] _[Optional]_

## 🛠️ Technical Implementation

```javascript
// Core counting logic
textArea.addEventListener("input", (event) => {
  const inputStr = event.target.value.trim();

  // Letter count (all characters)
  letterCountElem.innerText = inputStr.length;

  // Word count (handles multiple spaces)
  wordCountElem.innerText = inputStr.split(/\s+/).filter((word) => word).length;

  // Sentence count
  sentenceCountElem.innerText = inputStr
    .split(/[.!?]+/)
    .filter((word) => word).length;
});
```
