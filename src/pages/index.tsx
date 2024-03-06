import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imageWrapper}>
          <Image
            src="/profile.png"
            alt="Foto Claudio Orlandi"
            width={175}
            height={175}
            className="profile-image"
          />
        </div>
        <h1>Claudio Orlandi</h1>
        <p>@csorlandi</p>
      </header>
      <main className={styles.main}>
        <section>
          <Link href="https://www.linkedin.com/in/csorlandi" passHref>
            <a
              rel="noopener"
              className={styles.linkedinContainer}
              target="_blank"
            >
              Linkedin
            </a>
          </Link>
          <Link href="https://www.github.com/csorlandi" passHref>
            <a
              rel="noopener"
              className={styles.githubContainer}
              target="_blank"
            >
              Github
            </a>
          </Link>
          <Link href="https://www.twitter.com/csorlandi" passHref>
            <a
              rel="noopener"
              className={styles.twitterContainer}
              target="_blank"
            >
              Twitter
            </a>
          </Link>
          <Link href="https://www.youtube.com/csorlandi" passHref>
            <a
              rel="noopener"
              className={styles.youtubeContainer}
              target="_blank"
            >
              Youtube
            </a>
          </Link>
          <Link href="https://www.instagram.com/cs.orlandi" passHref>
            <a
              rel="noopener"
              className={styles.instagramContainer}
              target="_blank"
            >
              Instagram
            </a>
          </Link>
          <Link href="https://www.twitch.tv/csorlandi" passHref>
            <a
              rel="noopener"
              className={styles.twitchContainer}
              target="_blank"
            >
              Twitch
            </a>
          </Link>
        </section>
      </main>
    </>
  );
}

export default Home;
