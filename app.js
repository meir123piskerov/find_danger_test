import input from "analiza-sync";
import fs from "fs";
async function main() {
  while (true) {
    let dataOfPeople = JSON.parse(fs.readFileSync("PEOPLE.json", "utf8"));
    let dataOfTranscriptions = JSON.parse(
      fs.readFileSync("TRANSCRIPTIONS.json", "utf8")
    );
    let userChoice = input(
      "Press \n 1 to search by name: \n 2 to search by age: \n 3 to see the list of DangerousCalls by age:\n 4 to get average \n exit to exit: \n enter your choice here:"
    );
    if (userChoice === `1`) {
      while (true) {
        let flag = false;
        const userSearch = input(
          "enter name that u want to get data on:\nexit to return to the menu:\n enter name here:"
        );
        for (let i = 0; i < dataOfPeople.length; i++) {
          if (dataOfPeople[i]["name"] === userSearch) {
            console.log(dataOfPeople[i]);
            flag = true;
            break;
          }
        }
        if (flag === false) {
          console.log("user not found");
        }
        if (flag === true) {
          break;
        }
        if (userSearch === "exit") {
          break;
        }
      }
    } else if (userChoice === "2") {
      while (true) {
        let flag = false;
        const userSearch = input(
          "enter age that u want to get data on:\nexit to return to the menu:\n enter age here:"
        );
        for (let i = 0; i < dataOfTranscriptions.length; i++) {
          if (dataOfTranscriptions[i]["age"] === Number(userSearch)) {
            console.log(dataOfTranscriptions[i]);
            flag = true;
          }
        }
        if (flag === false) {
          console.log("user not found");
        }
        if (userSearch === "exit") {
          break;
        }
      }
    } else if (userChoice === "3") {
      getInfoOnPeople();
    } else if (userChoice === "4") {
      getAverage();
    } else if (userChoice === "exit") {
      break;
    } else {
      console.log("Invalid input enter only the options on the menu");
    }
  }
}

main();
