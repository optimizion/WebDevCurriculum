(() => {
  const lines = parseInt(prompt("몇 줄?"));
  if (lines <= 0) {
    return console.log("줄은 1줄 이상이어야 합니다.");
  }
  if (!lines || typeof lines !== "number") {
    return console.log("잘못된 입력입니다.");
  }

  for (let i = 0; i < lines; i++) {
    console.log(
      " ".repeat(lines - 1 - i) +
        "*".repeat(2 * i + 1) +
        " ".repeat(lines - 1 - i)
    );
  }
})();
