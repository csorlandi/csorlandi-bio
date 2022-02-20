import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <header className={styles.header}>
      <Image
        src="https://github.com/csorlandi.png"
        alt="Foto Claudio Orlandi"
        width={125}
        height={125}
      />
      <h1>Claudio Orlandi</h1>
      <p>@csorlandi</p>
    </header>
  );
}

export default Home;
