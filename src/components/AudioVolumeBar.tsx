interface VolumeInputProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export default function VolumeInput(props: VolumeInputProps) {
  const { volume, onVolumeChange } = props;
  return (
    <input
      aria-label="volume"
      name="volume"
      type="range"
      min={0}
      step={0.05}
      max={1}
      value={volume}
      className="w-full h-1 bg-stone-800 accent-white rounded-full overflow-hidden outline-none cursor-pointer group-hover:opacity-100 group-hover:opacity-100"
      onChange={(e) => {
        onVolumeChange(e.currentTarget.valueAsNumber);
      }}
    />
  );
}
