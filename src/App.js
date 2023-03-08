import { LegacyRef, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const [imageSource, setImageSource] = useState("");
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const getImageSource = webcamRef?.current?.getScreenshot();
    if (getImageSource) {
      setImageSource(getImageSource);
    }
  }, [webcamRef]);

  return (
    <div className="App">
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Tirar foto</button>
      {imageSource && <img src={imageSource} alt="person photography" />}
    </div>
  );
}

export default App;
