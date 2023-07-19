import React, { useState } from 'react';
import useModal from '../hooks/use-modal';
import VideoModal from './common/modals/modal-video';

interface VideoItem {
  title: string;
  description?: string;
  videoID: string;
}

interface VideoListProps {
  readonly videos: VideoItem[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [activeVideoID, setActiveVideoID] = useState('');

  function handleVideoClick(videoID) {
    setActiveVideoID(videoID);
    setIsVideoOpen(true);
  }

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          {videos.map(video => {
            const { title, description, videoID } = video;
            return (
              <div key={videoID} className="cd-project-wrapper mb-40">
                <div className="pt-40 pb-40 pl-40 pr-40 d-flex flex-md-wrap justify-content-between align-items-center">
                  <div>
                    <h4>{title}</h4>
                    {description ? <p>{description}</p> : null}
                  </div>

                  <div className="tp-hero-paly-button tp-bp-hero-paly-button  z-index-1">
                    <button
                      onClick={() => handleVideoClick(videoID)}
                      className="popup-video"
                    >
                      <i className="far fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={activeVideoID}
      />
    </>
  );
};

export default VideoList;
