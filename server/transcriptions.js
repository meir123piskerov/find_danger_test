import fs from "fs";
export default async function getTranscriptions() {
  const url = await fetch(
    `https://spiestestserver-j49p.onrender.com/transcriptions`
  );
  const data = await url.json();
  fs.writeFile("TRANSCRIPTIONS.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
getTranscriptions();
