import React from 'react';
import video from '../video/blue-smoke.mp4';
import backupPicture from '../images/backup-image.png';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
function Home(props) {
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
      <Header
        cartNotif={props.cartNotif}
        cartQuantity={props.cartQuantity}
      ></Header>
      {loadVideo()}
      <section className="season--container">
        <Link className="season" to="/women">
          WF22 Collection
        </Link>
        <Link className="season" to="/men">
          MF22 Collection
        </Link>
      </section>
    </div>
  );
}

export default Home;
