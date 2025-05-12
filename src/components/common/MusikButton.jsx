import React from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Ikon Play/Pause
import ReactPlayer from "react-player"; // Menggunakan ReactPlayer untuk memutar YouTube
import { useMusic } from "../music/music"; // Menggunakan MusicContext untuk kontrol musik

const MusicPlayer = () => {
  const { togglePlay, isPlaying, audioRef } = useMusic(); // Mengakses MusicContext untuk kontrol musik
  const videoUrl = "https://www.youtube.com/watch?v=w5fDKX3VjbU"; // URL video YouTube

  return (
    <div className="music-player music-icon">
      {/* Tombol untuk Play/Pause */}
      <button onClick={togglePlay} className="music-control">
        {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
      </button>

      {/* Gunakan ReactPlayer untuk memutar video dari YouTube */}
      <ReactPlayer
        ref={audioRef}
        url={videoUrl}
        playing={isPlaying} // Mengontrol apakah musik diputar atau tidak
        controls={true} // Menambahkan kontrol play/pause
        loop={true} // Memutar video secara loop
        width="0" // Menyembunyikan player (jika hanya ingin audio)
        height="0" // Menyembunyikan player (jika hanya ingin audio)
      />
    </div>
  );
};

export default MusicPlayer;
