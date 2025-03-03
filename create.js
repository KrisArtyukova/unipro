const renderZone = document.querySelector("#render-zone");

const data = {
  1: [
    {
      coll: 9,
      letter: "б",
    },
    {
      coll: 10,
      letter: "а",
    },
    {
      coll: 11,
      letter: "р",
    },
    {
      coll: 12,
      letter: "а",
    },
    {
      coll: 13,
      letter: "ш",
    },
    {
      coll: 14,
      letter: "к",
    },
    {
      coll: 15,
      letter: "о",
    },
    {
      coll: 16,
      letter: "в",
    },
    {
      coll: 17,
      letter: "а",
    },
    {
      coll: 23,
      letter: "к",
    },
  ],
  2: [
    {
      coll: 9,
      letter: "е",
    },
    {
      coll: 13,
      letter: "к",
    },
    {
      coll: 17,
      letter: "з",
    },
    {
      coll: 18,
      letter: "е",
    },
    {
      coll: 19,
      letter: "р",
    },
    {
      coll: 20,
      letter: "к",
    },
    {
      coll: 21,
      letter: "а",
    },
    {
      coll: 22,
      letter: "л",
    },
    {
      coll: 23,
      letter: "о",
    },
  ],
  3: [
    {
      coll: 7,
      letter: "т",
    },
    {
      coll: 8,
      letter: "е",
    },
    {
      coll: 9,
      letter: "р",
    },
    {
      coll: 10,
      letter: "е",
    },
    {
      coll: 11,
      letter: "ш",
    },
    {
      coll: 12,
      letter: "к",
    },
    {
      coll: 13,
      letter: "о",
    },
    {
      coll: 14,
      letter: "в",
    },
    {
      coll: 15,
      letter: "а",
    },
    {
      coll: 17,
      letter: "а",
    },
    {
      coll: 20,
      letter: "с",
    },
    {
      coll: 23,
      letter: "п",
    },
  ],
  4: [
    {
      coll: 9,
      letter: "г",
    },
    {
      coll: 13,
      letter: "л",
    },
    {
      coll: 15,
      letter: "л",
    },
    {
      coll: 16,
      letter: "а",
    },
    {
      coll: 17,
      letter: "р",
    },
    {
      coll: 18,
      letter: "и",
    },
    {
      coll: 19,
      letter: "н",
    },
    {
      coll: 20,
      letter: "а",
    },
    {
      coll: 23,
      letter: "е",
    },
  ],
  5: [
    {
      coll: 9,
      letter: "г",
    },
    {
      coll: 11,
      letter: "т",
    },
    {
      coll: 13,
      letter: "а",
    },
    {
      coll: 15,
      letter: "и",
    },
    {
      coll: 17,
      letter: "о",
    },
    {
      coll: 20,
      letter: "н",
    },
    {
      coll: 21,
      letter: "о",
    },
    {
      coll: 22,
      letter: "а",
    },
    {
      coll: 23,
      letter: "н",
    },
  ],
  6: [
    {
      coll: 7,
      letter: "в",
    },
    {
      coll: 8,
      letter: "и",
    },
    {
      coll: 9,
      letter: "о",
    },
    {
      coll: 10,
      letter: "л",
    },
    {
      coll: 11,
      letter: "а",
    },
    {
      coll: 15,
      letter: "с",
    },
    {
      coll: 17,
      letter: "в",
    },
    {
      coll: 20,
      letter: "к",
    },
    {
      coll: 23,
      letter: "г",
    },
  ],
  7: [
    {
      coll: 1,
      letter: "р",
    },
    {
      coll: 2,
      letter: "у",
    },
    {
      coll: 3,
      letter: "б",
    },
    {
      coll: 4,
      letter: "е",
    },
    {
      coll: 5,
      letter: "н",
    },
    {
      coll: 6,
      letter: "с",
    },
    {
      coll: 9,
      letter: "л",
    },
    {
      coll: 11,
      letter: "л",
    },
    {
      coll: 12,
      letter: "ы",
    },
    {
      coll: 13,
      letter: "ж",
    },
    {
      coll: 14,
      letter: "н",
    },
    {
      coll: 15,
      letter: "и",
    },
    {
      coll: 16,
      letter: "ц",
    },
    {
      coll: 17,
      letter: "а",
    },
    {
      coll: 19,
      letter: "в",
    },
    {
      coll: 20,
      letter: "а",
    },
    {
      coll: 21,
      letter: "л",
    },
    {
      coll: 22,
      letter: "у",
    },
    {
      coll: 23,
      letter: "а",
    },
    {
      coll: 27,
      letter: "с",
    },
    {
      coll: 29,
      letter: "п",
    },
  ],
  8: [
    {
      coll: 3,
      letter: "р",
    },
    {
      coll: 6,
      letter: "м",
    },
    {
      coll: 9,
      letter: "ь",
    },
    {
      coll: 11,
      letter: "и",
    },
    {
      coll: 15,
      letter: "я",
    },
    {
      coll: 19,
      letter: "у",
    },
    {
      coll: 23,
      letter: "г",
    },
    {
      coll: 24,
      letter: "о",
    },
    {
      coll: 25,
      letter: "л",
    },
    {
      coll: 26,
      letter: "у",
    },
    {
      coll: 27,
      letter: "б",
    },
    {
      coll: 28,
      letter: "к",
    },
    {
      coll: 29,
      letter: "а",
    },
  ],
  9: [
    {
      coll: 3,
      letter: "о",
    },
    {
      coll: 4,
      letter: "б",
    },
    {
      coll: 5,
      letter: "л",
    },
    {
      coll: 6,
      letter: "и",
    },
    {
      coll: 7,
      letter: "г",
    },
    {
      coll: 8,
      letter: "а",
    },
    {
      coll: 9,
      letter: "ц",
    },
    {
      coll: 10,
      letter: "и",
    },
    {
      coll: 11,
      letter: "я",
    },
    {
      coll: 19,
      letter: "п",
    },
    {
      coll: 20,
      letter: "е",
    },
    {
      coll: 21,
      letter: "н",
    },
    {
      coll: 22,
      letter: "и",
    },
    {
      coll: 23,
      letter: "е",
    },
    {
      coll: 27,
      letter: "о",
    },
    {
      coll: 29,
      letter: "х",
    },
  ],
  10: [
    {
      coll: 1,
      letter: "к",
    },
    {
      coll: 3,
      letter: "н",
    },
    {
      coll: 6,
      letter: "р",
    },
    {
      coll: 8,
      letter: "р",
    },
    {
      coll: 10,
      letter: "д",
    },
    {
      coll: 19,
      letter: "и",
    },
    {
      coll: 23,
      letter: "н",
    },
    {
      coll: 25,
      letter: "а",
    },
    {
      coll: 26,
      letter: "б",
    },
    {
      coll: 27,
      letter: "р",
    },
    {
      coll: 28,
      letter: "а",
    },
    {
      coll: 29,
      letter: "м",
    },
  ],
  11: [
    {
      coll: 1,
      letter: "а",
    },
    {
      coll: 3,
      letter: "т",
    },
    {
      coll: 6,
      letter: "н",
    },
    {
      coll: 8,
      letter: "т",
    },
    {
      coll: 10,
      letter: "а",
    },
    {
      coll: 21,
      letter: "ф",
    },
    {
      coll: 24,
      letter: "т",
    },
    {
      coll: 26,
      letter: "а",
    },
    {
      coll: 29,
      letter: "у",
    },
  ],
  12: [
    {
      coll: 1,
      letter: "п",
    },
    {
      coll: 2,
      letter: "с",
    },
    {
      coll: 3,
      letter: "е",
    },
    {
      coll: 4,
      letter: "в",
    },
    {
      coll: 5,
      letter: "д",
    },
    {
      coll: 6,
      letter: "о",
    },
    {
      coll: 7,
      letter: "н",
    },
    {
      coll: 8,
      letter: "и",
    },
    {
      coll: 9,
      letter: "м",
    },
    {
      coll: 11,
      letter: "э",
    },
    {
      coll: 19,
      letter: "к",
    },
    {
      coll: 21,
      letter: "а",
    },
    {
      coll: 24,
      letter: "ю",
    },
    {
      coll: 26,
      letter: "б",
    },
    {
      coll: 29,
      letter: "т",
    },
  ],
  13: [
    {
      coll: 1,
      letter: "л",
    },
    {
      coll: 6,
      letter: "в",
    },
    {
      coll: 8,
      letter: "с",
    },
    {
      coll: 11,
      letter: "с",
    },
    {
      coll: 19,
      letter: "р",
    },
    {
      coll: 20,
      letter: "а",
    },
    {
      coll: 21,
      letter: "н",
    },
    {
      coll: 22,
      letter: "е",
    },
    {
      coll: 23,
      letter: "в",
    },
    {
      coll: 24,
      letter: "с",
    },
    {
      coll: 25,
      letter: "к",
    },
    {
      coll: 26,
      letter: "а",
    },
    {
      coll: 27,
      letter: "я",
    },
    {
      coll: 29,
      letter: "о",
    },
  ],
  14: [
    {
      coll: 1,
      letter: "а",
    },
    {
      coll: 2,
      letter: "л",
    },
    {
      coll: 3,
      letter: "е",
    },
    {
      coll: 4,
      letter: "к",
    },
    {
      coll: 5,
      letter: "с",
    },
    {
      coll: 6,
      letter: "а",
    },
    {
      coll: 8,
      letter: "т",
    },
    {
      coll: 11,
      letter: "м",
    },
    {
      coll: 19,
      letter: "и",
    },
    {
      coll: 21,
      letter: "т",
    },
    {
      coll: 24,
      letter: "с",
    },
    {
      coll: 26,
      letter: "я",
    },
    {
      coll: 29,
      letter: "в",
    },
  ],
  15: [
    {
      coll: 1,
      letter: "н",
    },
    {
      coll: 7,
      letter: "е",
    },
    {
      coll: 8,
      letter: "к",
    },
    {
      coll: 9,
      letter: "а",
    },
    {
      coll: 10,
      letter: "т",
    },
    {
      coll: 11,
      letter: "е",
    },
    {
      coll: 12,
      letter: "р",
    },
    {
      coll: 13,
      letter: "и",
    },
    {
      coll: 14,
      letter: "н",
    },
    {
      coll: 15,
      letter: "а",
    },
    {
      coll: 19,
      letter: "с",
    },
    {
      coll: 21,
      letter: "а",
    },
    {
      coll: 23,
      letter: "р",
    },
    {
      coll: 24,
      letter: "о",
    },
    {
      coll: 25,
      letter: "д",
    },
    {
      coll: 26,
      letter: "н",
    },
    {
      coll: 27,
      letter: "и",
    },
    {
      coll: 28,
      letter: "н",
    },
    {
      coll: 29,
      letter: "а",
    },
  ],
  16: [
    {
      coll: 8,
      letter: "а",
    },
    {
      coll: 11,
      letter: "р",
    },
    {
      coll: 16,
      letter: "п",
    },
    {
      coll: 17,
      letter: "о",
    },
    {
      coll: 18,
      letter: "э",
    },
    {
      coll: 19,
      letter: "т",
    },
    {
      coll: 20,
      letter: "е",
    },
    {
      coll: 21,
      letter: "с",
    },
    {
      coll: 22,
      letter: "с",
    },
    {
      coll: 23,
      letter: "а",
    },
  ],
  17: [
    {
      coll: 11,
      letter: "а",
    },
    {
      coll: 13,
      letter: "а",
    },
    {
      coll: 16,
      letter: "л",
    },
    {
      coll: 19,
      letter: "и",
    },
    {
      coll: 21,
      letter: "т",
    },
    {
      coll: 23,
      letter: "д",
    },
  ],
  18: [
    {
      coll: 7,
      letter: "к",
    },
    {
      coll: 8,
      letter: "о",
    },
    {
      coll: 9,
      letter: "в",
    },
    {
      coll: 10,
      letter: "а",
    },
    {
      coll: 11,
      letter: "л",
    },
    {
      coll: 12,
      letter: "е",
    },
    {
      coll: 13,
      letter: "в",
    },
    {
      coll: 14,
      letter: "с",
    },
    {
      coll: 15,
      letter: "к",
    },
    {
      coll: 16,
      letter: "а",
    },
    {
      coll: 17,
      letter: "я",
    },
    {
      coll: 19,
      letter: "н",
    },
    {
      coll: 20,
      letter: "а",
    },
    {
      coll: 21,
      letter: "и",
    },
    {
      coll: 22,
      letter: "н",
    },
    {
      coll: 23,
      letter: "а",
    },
  ],
  19: [
    {
      coll: 7,
      letter: "о",
    },
    {
      coll: 9,
      letter: "и",
    },
    {
      coll: 11,
      letter: "ь",
    },
    {
      coll: 13,
      letter: "т",
    },
    {
      coll: 16,
      letter: "т",
    },
    {
      coll: 19,
      letter: "а",
    },
    {
      coll: 21,
      letter: "к",
    },
    {
      coll: 23,
      letter: "м",
    },
  ],
  20: [
    {
      coll: 7,
      letter: "з",
    },
    {
      coll: 9,
      letter: "к",
    },
    {
      coll: 11,
      letter: "д",
    },
    {
      coll: 13,
      letter: "о",
    },
    {
      coll: 16,
      letter: "о",
    },
    {
      coll: 21,
      letter: "а",
    },
    {
      coll: 23,
      letter: "е",
    },
  ],
  21: [
    {
      coll: 7,
      letter: "а",
    },
    {
      coll: 8,
      letter: "л",
    },
    {
      coll: 9,
      letter: "и",
    },
    {
      coll: 10,
      letter: "с",
    },
    {
      coll: 11,
      letter: "а",
    },
    {
      coll: 13,
      letter: "р",
    },
    {
      coll: 14,
      letter: "а",
    },
    {
      coll: 15,
      letter: "с",
    },
    {
      coll: 16,
      letter: "к",
    },
    {
      coll: 17,
      letter: "о",
    },
    {
      coll: 18,
      letter: "п",
    },
    {
      coll: 19,
      letter: "к",
    },
    {
      coll: 20,
      letter: "и",
    },
    {
      coll: 23,
      letter: "с",
    },
  ],
};

const res = Object.entries(data)
  .map((row, rowNum) => {
    let rowText = "";
    for (let index = 1; index <= 29; index++) {
      const isEl = row[1].find((el) => el.coll === index);
      if (isEl) {
        rowText += `#item${rowNum + 1}-${index}:valid ~`;
        // rowText += `<input class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[${isEl.letter.toLocaleLowerCase()}${isEl.letter.toUpperCase()}]{1}$" required="required" value="" id="item${
        //   rowNum + 1
        // }-${index}" />`;
      } else {
        // rowText += `<span class="crossword-board__item--blank" id="item${
        //   rowNum + 1
        // }-${index}" ></span>`;
      }
    }
    return rowText;
  })
  .join("");

console.log(res);
