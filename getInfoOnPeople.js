import fs from "fs";
export default function getInfoOnPeople() {
  let dataInfoOfTranscriptions = JSON.parse(
    fs.readFileSync("TRANSCRIPTIONS.json", "utf8")
  );
  const age = new Set();
  for (let i = 0; i < dataInfoOfTranscriptions.length; i++) {
    age.add(dataInfoOfTranscriptions[i]["age"]);
  }
  console.log(age);

  let dataInfo = [];
  for (let i = 0; i < dataInfoOfTranscriptions.length; i++) {
    let data = {
      age: dataInfoOfTranscriptions[i]["age"],
      DangerousCalls: [],
    };
    let words = dataInfoOfTranscriptions[i][`content`].split(" ");
    let count = 0;
    for (let word = 0; word < words.length; word++) {
      if (
        words[word].toLowerCase() === "death" ||
        words[word].toLowerCase() === `knife` ||
        words[word].toLowerCase() === `bomb` ||
        words[word].toLowerCase() === `attack`
      ) {
        count++;
      }
    }
    data[`DangerousCalls`].push(count);
    if (age.has(dataInfoOfTranscriptions[i]["age"])) {
      dataInfo.push(data);
      age.delete(dataInfoOfTranscriptions[i]["age"]);
    } else {
      for (let i = 0; i < dataInfo.length; i++) {
        if (dataInfo[i]["age"] === dataInfoOfTranscriptions[i]["age"]) {
          if (count > 0) {
            dataInfo[i][`DangerousCalls`].push(count);
          }
        }
      }
    }
  }

  return dataInfo;
}

function getAverage(list) {
  let datalist = [];
  for (let i = 0; i < list.length; i++) {
    let count = 0;
    let data = { age: list[i], sum: 0 };
    for (let j = 0; j < list[i][`DangerousCalls`].length; j++) {
      console.log(list[i][`DangerousCalls`]);
      count += Number(list[i][`DangerousCalls`][j]);
    }
    data[`sum`] = count / a[i].length;
    datalist.push(data);
  }
  return list;
}
