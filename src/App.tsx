import "./App.css";

export default function App() {
  return (
    <main>
      <iframe
        width="400"
        height="600"
        src="https://global-stg.transak.com?apiKey=d79671a4-b021-4a4f-a444-6862a680a94b&environment=STAGING"
        allow="camera;microphone;payment"
      ></iframe>
    </main>
  );
}
