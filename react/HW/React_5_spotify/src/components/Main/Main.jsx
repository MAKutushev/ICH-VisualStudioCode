import { useState } from 'react'

import Apple from '../../assets/Apple.svg'
import AppleHover from '../../assets/AppleHover.svg'

import styles from './Main.module.css'

export default function Main() {
  const [imgSrc, setImgSrc] = useState(Apple)

  return (
    <section>
      <h1>LIFE IS WASTED ON THE LIVING</h1>
      <h4>
        Sign in
        <br /> with
      </h4>
      <div className={styles.links}>
        <a href=''>
          <img
            className={styles.chtototam}
            src={imgSrc}
            alt='Apple'
            onMouseOver={() => setImgSrc(AppleHover)}
            onMouseOut={() => setImgSrc(Apple)}
          />
        </a>
        <a className={styles.chtototam} href=''>
          <svg
            width='97'
            height='98'
            viewBox='0 0 97 98'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 30C0 13.4315 13.4315 0 30 0H67C83.5685 0 97 13.4315 97 30V68C97 84.5685 83.5685 98 67 98H30C13.4315 98 0 84.5685 0 68V30ZM83.0398 49.5465C83.0398 47.0126 82.8124 44.5762 82.3901 42.2372H48.7347V56.0599H67.9664C67.138 60.5267 64.6203 64.3114 60.8357 66.8453L60.8357 66.8452C57.6358 68.9893 53.5426 70.2562 48.7347 70.2562C39.4275 70.2562 31.5497 63.9702 28.7396 55.5239H28.7395C28.0248 53.3798 27.6187 51.0896 27.6187 48.7344C27.6187 46.3792 28.0248 44.0889 28.7395 41.9449V41.9447L28.7396 41.9449C31.5497 33.4985 39.4275 27.2125 48.7347 27.2125C53.9812 27.2125 58.6916 29.0155 62.395 32.5564L72.6443 22.3071C66.4557 16.5409 58.3668 12.9999 48.7347 12.9999C34.7658 12.9999 22.681 21.0077 16.8011 32.6864L16.8009 32.6864C14.2995 37.666 12.9979 43.1618 13.0001 48.7344C13.0001 54.5006 14.3807 59.9583 16.8009 64.7824L16.8011 64.7824C22.681 76.4611 34.7658 84.4688 48.7347 84.4688C58.383 84.4688 66.472 81.269 72.3844 75.8113L72.3845 75.8113C79.1415 69.5903 83.0398 60.4293 83.0398 49.5465Z'
              fill='#1ED760'
            />
          </svg>
        </a>
        <a className={styles.chtototam} href=''>
          <svg
            width='107'
            height='99'
            viewBox='0 0 107 99'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M30.5398 0C13.9712 0 0.539795 13.4315 0.539795 30V68.1158C0.539795 84.6843 13.9713 98.1158 30.5398 98.1158H76.4603C93.0288 98.1158 106.46 84.6843 106.46 68.1158V30C106.46 13.4315 93.0288 0 76.4602 0H30.5398ZM86.3795 16H75.1127L56.5819 37.3475L40.423 16H17L44.8704 52.4687L18.4825 82.7111H29.7492L50.2073 59.4363L67.9969 82.7111H90.8269L61.7705 44.3151L86.3795 16ZM77.3364 75.8917H71.1101L30.194 22.3746H37.0133L77.3364 75.8917Z'
              fill='#1ED760'
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
