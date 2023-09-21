import * as React from "react";

interface ProgressCSSProps extends React.CSSProperties {
  "--progress-width": number;
  "--buffered-width": number;
}

interface AudioProgressBarProps
  extends React.ComponentPropsWithoutRef<"input"> {
  duration: number;
  currentProgress: number;
  buffered: number;
}

export default function AudioProgressBar(props: AudioProgressBarProps) {
  const { duration, currentProgress, buffered, ...rest } = props;
  const progressBarWidth = isNaN(currentProgress / duration)
    ? 0
    : currentProgress / duration;
  const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;
  const progressStyles: ProgressCSSProps = {
    "--progress-width": progressBarWidth,
    "--buffered-width": bufferedWidth,
  };

  return (
    <div className="h-1 group -translate-y-1">
      <input
        type="range"
        name="progress"
        style={progressStyles}
        min={0}
        max={duration}
        value={currentProgress}
        className="w-full h-full bg-stone-800 accent-white rounded-full overflow-hidden outline-none cursor-pointer group-hover:opacity-100 group-hover:opacity-100"
        {...rest}
      />
    </div>
  );
}
