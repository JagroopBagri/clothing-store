import React from 'react';
import video from '../video/video3.mp4';
import backupPicture from '../images/backup-image.png';
import Header from '../components/Header';
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
    <div className="Home--Page">
      <Header></Header>
      {loadVideo()}
      <section className="season--container">
        <a className="season" href="/women">
          WF22 Collection
        </a>
        <a className="season" href="/men">
          MF22 Collection
        </a>
      </section>
    </div>
  );
}

export default Home;
