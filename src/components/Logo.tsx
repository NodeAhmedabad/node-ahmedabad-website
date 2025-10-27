'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import nodeN from '@/assets/node/n.webp'
import nodeO from '@/assets/node/o.webp'
import nodeD from '@/assets/node/d.webp'
import nodeE from '@/assets/node/e.webp'

import ahmedabadA from '@/assets/ahmedabad/a.webp'
import ahmedabadH from '@/assets/ahmedabad/h.webp'
import ahmedabadM from '@/assets/ahmedabad/m.webp'
import ahmedabadE from '@/assets/ahmedabad/e.webp'
import ahmedabadD from '@/assets/ahmedabad/d.webp'
import ahmedabadB from '@/assets/ahmedabad/b.webp'

import bannerBg from '@/assets/bg.webp'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Logo = () => {
  const bannerBgRef = useRef<HTMLImageElement>(null)

  const node = [
    <Image
      key='n'
      src={nodeN}
      alt='Node.js'
      className='node-img'
      style={{
        margin: '0 10px',
        width: '100px',
        opacity: 0,
      }}
    />,
    <Image
      key='o'
      src={nodeO}
      alt='Node.js'
      className='node-img'
      style={{
        transform: 'translateY(10px)',
        margin: '0 10px',
        width: '100px',
        opacity: 0,
      }}
    />,
    <Image
      key='d'
      src={nodeD}
      alt='Node.js'
      className='node-img'
      style={{
        transform: 'translateY(10px)',
        margin: '0 10px',
        width: '100px',
        opacity: 0,
      }}
    />,
    <Image
      key='e'
      src={nodeE}
      alt='Node.js'
      className='node-img'
      style={{
        transform: 'translateY(10px)',
        margin: '0 10px',
        width: '100px',
        opacity: 0,
      }}
    />,
  ]

  const ahmedabad = [
    <Image
      key='A'
      src={ahmedabadA}
      alt='Ahmedabad'
      className='ahmedabad-img'
      style={{
        transform: 'translateY(300px)',
        flexBasis: 'fit-content',
      }}
    />,
    <Image
      key='H'
      src={ahmedabadH}
      alt='Ahmedabad'
      className='ahmedabad-img'
      style={{
        transform: 'translateY(300px)',
        flexBasis: 'fit-content',
      }}
    />,
    <Image
      key='M'
      src={ahmedabadM}
      alt='Ahmedabad'
      className='ahmedabad-img'
      style={{
        transform: 'translateY(300px)',
        flexBasis: 'fit-content',
        minWidth: 'fit-content',
      }}
    />,
    <Image
      key='E'
      src={ahmedabadE}
      alt='Ahmedabad'
      className='ahmedabad-img'
      style={{
        transform: 'translateY(300px)',
        flexBasis: 'fit-content',
      }}
    />,
    <Image
      key='D'
      src={ahmedabadD}
      alt='Ahmedabad'
      className='ahmedabad-img'
      style={{
        transform: 'translateY(300px)',
        flexBasis: 'fit-content',
      }}
    />,

    <Image
      key='A'
      src={ahmedabadA}
      alt='Ahmedabad'
      className='ahmedabad-img'
      style={{
        transform: 'translateY(300px)',
        flexBasis: 'fit-content',
      }}
    />,
    <Image
      key='B'
      src={ahmedabadB}
      alt='Ahmedabad'
      className='ahmedabad-img'
      style={{
        transform: 'translateY(300px)',
        flexBasis: 'fit-content',
      }}
    />,
    <Image
      key='A'
      src={ahmedabadA}
      alt='Ahmedabad'
      className='ahmedabad-img'
      style={{
        transform: 'translateY(300px)',
        flexBasis: 'fit-content',
      }}
    />,
    <Image
      key='D'
      src={ahmedabadD}
      alt='Ahmedabad'
      className='ahmedabad-img'
      style={{
        transform: 'translateY(300px)',
        flexBasis: 'fit-content',
      }}
    />,
  ]

  const animateSlideUp = () => {
    const images = document.querySelectorAll('.ahmedabad-img')
    const tl = gsap.timeline({
      delay: 0.5,
    })
    for (const img of Array.from(images)) {
      const y = Number(img.getAttribute('height')) * 2
      console.log('height:', y)
      tl.fromTo(
        img,
        {
          y,
        },
        {
          y: 0,
          delay: 0.5,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=1.1'
      )
    }
  }

  const animateBannerReveal = () => {
    gsap.fromTo(
      bannerBgRef.current,
      {
        clipPath: 'inset(0% 0% 100% 0%)',
      },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
        ease: 'power2.out',
        delay: 0.5,
        onComplete: () => {
          animateSlideUp()
        },
      }
    )
  }

  const animateFadeIn = () => {
    const images = document.querySelectorAll('.node-img')
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        console.log('tl complete')
        animateBannerReveal()
      },
    })
    for (const img of Array.from(images)) {
      tl.fromTo(
        img,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.5,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=1'
      )
    }
  }

  useGSAP(() => {
    animateFadeIn()
  })

  return (
    <>
      <div
        className='flex flex-col items-center'
        style={{
          rowGap: '1.2rem',
        }}
      >
        <div
          className='flex space-x-1 px-7 -ms-3 md:ms-0 justify-center items-center'
          style={{ alignItems: 'end' }}
        >
          {node.map((n) => (
            <span
              key={n.key}
              style={{
                clipPath: 'inset(-10px)',
              }}
            >
              {n}
            </span>
          ))}
        </div>
        <div className='relative w-full'>
          <Image
            ref={bannerBgRef}
            src={bannerBg}
            alt='Ahmedabad-Banner'
            layout='fill'
            objectFit='cover'
            className='px-3'
            style={{
              clipPath: 'inset(0% 0% 100% 0%)',
            }}
          />
          <div className='flex gap-x-1 scale-75 md:scale-100 left-[3px] top-[4px] absolute md:left-[72px] md:top-[12px]'>
            {ahmedabad.map((a, index) => (
              <div
                key={a.key}
                style={{
                  clipPath: 'inset(-10px)',
                  width: '40px', // Fixed width for the container
                  height: '40px', // Fixed height for the container
                  display: 'flex', // Center the image
                  justifyContent: 'center', // Horizontally center image
                  alignItems: 'center', // Vertically center image
                  margin: index === 2 ? '5px 7px' : '0 0px',
                  transform: index === 2 ? 'translateX(2px)' : 'translateX(0)',
                }}
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Logo
