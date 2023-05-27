import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styles from './ModalVideo.module.css';
import { BsPlayCircle } from 'react-icons/bs';
import 'react-modal-video/css/modal-video.css';

const ModalVideoInternal = dynamic(import('react-modal-video'), {
  ssr: false
});

interface IModalVideoProps {
  channel?: any;
  videoId: string;
  iconSize?: string;
}

const ModalVideo: React.FC<IModalVideoProps> = ({
  channel,
  videoId,
  iconSize = '1em'
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={styles.icon} onClick={() => setOpen(true)}>
        <BsPlayCircle size={iconSize} />
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
