import React, { useState } from 'react';
import 'react-modal-video/css/modal-video.css';
import dynamic from 'next/dynamic';

const ModalVideoInternal = dynamic(import('react-modal-video'), {
  ssr: false
});

interface IModalVideoProps {
  channel?: any;
  videoId: string;
}

const ModalVideo: React.FC<IModalVideoProps> = ({ channel, videoId }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="box-image">
        <a
          className="popup-youtube btn-play-video btn-play-middle"
          onClick={() => setOpen(true)}
        ></a>
        <img
          className="img-responsive bdrd-16"
          src="../assets/imgs/hittpr/blog-klitchko-1.jpg"
          alt="Hittpr"
        />
      </div>

      <ModalVideoInternal
        channel={channel}
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
        youtube={{ autoplay: 1 }}
        ratio="16:9"
        allowFullScreen={true}
        animationSpeed={300}
        aria={{
          openMessage: 'You just opened the modal video',
          dismissBtnMessage: 'Close the modal by clicking here'
        }}
        classNames={{
          modalVideoEffect: 'modal-video-effect',
          modalVideo: 'modal-video',
          modalVideoClose: 'modal-video-close',
          modalVideoBody: 'modal-video-body',
          modalVideoInner: 'modal-video-inner',
          modalVideoIframeWrap: 'modal-video-movie-wrap',
          modalVideoCloseBtn: 'modal-video-close-btn'
        }}
      />
    </>
  );
};

export default ModalVideo;
