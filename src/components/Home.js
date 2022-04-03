import React from 'react';
import video from '../video/video3.mp4';
import backupPicture from '../images/backup-image.png';
function Home() {
  const loadVideo = () => {
    if (window.innerWidth > 549) {
      return (
        <video
          width="100%"
          autoPlay
          muted
          loop
          id="video"
          poster={backupPicture}
        >
          <source src={video} type="video/mp4"></source>
        </video>
      );
    }
  };
  return (
    <>
      {loadVideo()}
      <section className="season--container">
        <button className="season">SS22 Collection</button>
        <button className="season">FW22 Collection</button>
      </section>
    </>
  );
}

export default Home;
