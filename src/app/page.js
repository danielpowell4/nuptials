import styles from './page.module.css'
import Countdown from '@/components/Countdown'



export default function Home() {
  return (
    <main className={styles.main}>
      <Countdown title="Count down" until={new Date("2024-09-07T23:00:00.000Z")} />
      <Countdown title="Count up" until={new Date("2014-05-01T25:00:00.000Z")} />
    </main>
  )
}
