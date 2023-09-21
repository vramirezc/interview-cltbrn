import { useSelectedPodcast } from "../hooks/useSelectedPodcast";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ReplayIcon from "@mui/icons-material/Replay";
import React, { useEffect, useRef, useState } from "react";
import AudioProgressBar from "./AudioProgressBar";
import VolumeInput from "./AudioVolumeBar";
import { formatDurationDisplay } from "../utils/formatDurationDisplay";

const Player = () => {
  const { selectedPodcast, setSelectedPodcast, loading, setLoading } =
    useSelectedPodcast();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currrentProgress, setCurrrentProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = React.useState(0.2);
  const [duration, setDuration] = useState(0);

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  function togglePlay() {
    if (!selectedPodcast.playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  }

  function replay() {
    audioRef.current?.pause();
    audioRef.current?.load();
    audioRef.current?.play();
    setSelectedPodcast({ ...selectedPodcast, playing: true });
  }

  const handleShuffle = () => {
    const randomIndex = Math.floor(
      Math.random() * selectedPodcast.episodes?.length!
    );
    if (randomIndex !== selectedPodcast.episodeIndex) {
      setLoading(true);
      setSelectedPodcast({
        ...selectedPodcast.episodes?.[randomIndex],
        episodes: selectedPodcast.episodes,
        playing: true,
      });
    } else {
      replay();
      setSelectedPodcast({
        ...selectedPodcast,
        playing: true,
      });
    }
  };

  const handlePrevious = () => {
    setLoading(true);
    if (selectedPodcast.episodeIndex !== 0) {
      setSelectedPodcast({
        ...selectedPodcast.episodes?.[selectedPodcast.episodeIndex! - 1],
        episodes: selectedPodcast.episodes,
        playing: true,
      });
    } else {
      setSelectedPodcast({
        ...selectedPodcast.episodes?.[selectedPodcast.episodes.length! - 1],
        episodes: selectedPodcast.episodes,
        playing: true,
      });
    }
  };

  const handleNext = () => {
    setLoading(true);
    if (
      selectedPodcast.episodeIndex !==
      selectedPodcast.episodes?.length! - 1
    ) {
      setSelectedPodcast({
        ...selectedPodcast.episodes?.[selectedPodcast.episodeIndex! + 1],
        episodes: selectedPodcast.episodes,
        playing: true,
      });
    } else {
      setSelectedPodcast({
        ...selectedPodcast.episodes?.[0],
        episodes: selectedPodcast.episodes,
        playing: true,
      });
    }
  };

  useEffect(() => {
    if (selectedPodcast.trackId) {
      togglePlay();
    }
  }, [selectedPodcast.playing]);

  if (!selectedPodcast.trackId) {
    return null;
  }

  return (
    <div className="w-full h-20 bg-stone-800 sticky bottom-0 flex text-sm items-center justify-between">
      <div className="flex gap-5 items-center w-96">
        <img src={`${selectedPodcast.inicialArtworkUrl160}`} className="h-20" />
        <div>
          <p className="text-white/70">
            {selectedPodcast.inicialTrackName?.length! > 40
              ? selectedPodcast.inicialTrackName?.slice(0, 40) + "..."
              : selectedPodcast.inicialTrackName}
          </p>
          <p className="text-white/30 text-xs">
            {selectedPodcast.artistName?.length! > 20
              ? selectedPodcast.artistName?.slice(0, 20) + "..."
              : selectedPodcast.artistName}
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div
          className="cursor-pointer hover:bg-gray-500 rounded-full"
          onClick={handleShuffle}
        >
          <ShuffleIcon fontSize="large" />
        </div>
        <div
          className="cursor-pointer hover:bg-gray-500 rounded-full"
          onClick={handlePrevious}
        >
          <SkipPreviousIcon fontSize="large" />
        </div>
        <div
          className="cursor-pointer hover:bg-white rounded-full"
          onClick={() =>
            setSelectedPodcast({
              ...selectedPodcast,
              playing: !selectedPodcast.playing,
            })
          }
        >
          {selectedPodcast.playing ? (
            <PauseCircleIcon sx={{ fontSize: 50, color: "#5C67DE" }} />
          ) : (
            <PlayCircleFilledIcon sx={{ fontSize: 50, color: "#5C67DE" }} />
          )}
        </div>
        <div
          className="cursor-pointer hover:bg-gray-500 rounded-full"
          onClick={handleNext}
        >
          <SkipNextIcon fontSize="large" />
        </div>
        <div
          onClick={replay}
          className="cursor-pointer hover:bg-gray-500 rounded-full"
        >
          <ReplayIcon fontSize="large" />
        </div>
      </div>
      <div className="flex gap-2 w-80 justify-center">
        {loading ? (
          "Loading audio..."
        ) : (
          <>
            <p className="text-white/30 text-xs">
              {formatDurationDisplay(currrentProgress)}
            </p>
            <AudioProgressBar
              duration={duration}
              buffered={buffered}
              currentProgress={currrentProgress}
              onChange={(e) => {
                setCurrrentProgress(e.currentTarget.valueAsNumber);
                audioRef.current!.currentTime = e.currentTarget.valueAsNumber;
              }}
            />
            <p className="text-white/30 text-xs">
              {formatDurationDisplay(duration)}
            </p>
          </>
        )}
      </div>
      <div className="flex gap-3 items-center pr-20">
        <VolumeUpOutlinedIcon />
        <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
      </div>
      <audio
        className="hidden"
        onCanPlay={(e) => {
          e.currentTarget.volume = volume;
          setDuration(e.currentTarget.duration);
          setLoading(false);
        }}
        onTimeUpdate={(e) => {
          setCurrrentProgress(e.currentTarget.currentTime);
          handleBufferProgress(e);
        }}
        onProgress={handleBufferProgress}
        ref={audioRef}
        src={`${selectedPodcast.inicialTrackAudio}`}
        autoPlay
      />
    </div>
  );
};

export default Player;
