const textArea = document.getElementById("textArea");
const letterCountElem = document.getElementById("letter-count");
const wordCountElem = document.getElementById("word-count");
const sentenceCountElem = document.getElementById("sentence-count");

textArea.addEventListener("input", (event) => {
  const inputStr = event.target.value.trim();
  letterCountElem.innerText = inputStr.length;

  //   const wordsArr = inputStr.split(" ");
  //   const wordsFilteredArr = wordsArr.filter((word) => word);
  //     const wordsCount = wordsFilteredArr.length;

  wordCountElem.innerText = inputStr.split(/\s+/).filter((word) => word).length;
  sentenceCountElem.innerText = inputStr
    .split(/[.!?]+/)
    .filter((word) => word).length;

  //   sentenceCountElem.innerText = inputStr.split(".").length;
});
