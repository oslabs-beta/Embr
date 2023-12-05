import Image from 'next/image';
import styles from '../page.module.css';
import multer from 'multer';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import Display from '../components/display'


//Doshboard component
export default function Dashboard() {
  dotenv.config();

  //Configure AWS SDK with your credentials
  AWS.config.update({
    secretKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const s3 = new AWS.S3();

  //multer handler
  const upload = multer({dest: 'uploads/'});

  return (
    <main className={styles.dashboard}>
      <div className={styles.upload}>
        <p>
          <code className={styles.code}>Upload image </code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/upload.png"
              alt="Upload symbol"
              className={styles.vercelLogo}
              width={150}
              height={150}
              priority
            />
          <button className="selectButton">Select Image..</button>
          <button className="uploadButton">Upload Image</button>
          </a>
        </div>
      </div>

      <div className={styles.center}>
      </div>

      <div className={styles.grid}>
      <Display/>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Open <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Source <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Project <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>
      </div>
    </main>
  );
}
