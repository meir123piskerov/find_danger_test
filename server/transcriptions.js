export default async function getTranscriptions() {
  const url = await fetch(
    `https://spiestestserver-j49p.onrender.com/transcriptions`
  );
  const TRANSCRIPTIONS = await url.json();
  return TRANSCRIPTIONS;
}
