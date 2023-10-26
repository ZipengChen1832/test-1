import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Characters } from "@/Components";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Characters selectedEpisode={""} episodeCharacters={[]}/>
  )
}
