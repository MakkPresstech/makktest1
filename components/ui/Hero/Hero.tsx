import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
interface HeroProps {
  className?: string
  headline: string
  description: string
  imagepath: string
}

const Hero: FC<HeroProps> = ({ imagepath, headline, description }) => {
  return (
    <div className="bg-accent-0 border-t border-accent-2">
      <Container>
        <div className={s.root}>
          <img className={s.title} src={imagepath}/>
          <h2 className={s.title}>{headline}</h2>
          <div className={s.description}>
            <p>{description}</p>
            <Link href="/">
              <a className="flex items-center font-normal text-accent-9 pt-3 font-bold hover:underline cursor-pointer w-max-content">
                Read more
                <ArrowRight width="20" heigh="20" className="ml-1" />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
