import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
    className={`overlay ${
        started ? 'overlay-hidden' : 'overlay-visible'
    }`}
>
    <div className="overlay-text">
        <div
            className="overlay-progress"
            style={{ width: `${progress}%` }}
        >
            Ehs
        </div>
        <div className="overlay-progress-text">Ehs</div>
    </div>
</div>
  );
};