import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React from 'react'
import '../Css/Client.css'

export const Clients = () => {


    const [ref2] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 2.5, spacing: 8 },
    },
    [
        (slider) => {
            let timeout: ReturnType<typeof setTimeout>
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 8000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
        },
    ]

)

    return (
        <section className='Clients'>
            <h2> Nossos clientes</h2>
            < div className=' keen-slider' ref={ref2}>
                <div className="keen-slider__slide slide1">
                    <img src="../public/clients/Bunge.png" alt="" />
                </div>
                <div className="keen-slider__slide slide2">
                    <img src="../public/clients/CargillLogo.svg.png" alt="" />
                </div>
                <div className="keen-slider__slide slide3">
                    <img src="../public/clients/Logo_Coamo.png" alt="" />
                </div>
                <div className="keen-slider__slide slide4">
                    <img src="../public/clients/LouisDreyfus.png" alt="" />
                </div>
                <div className="keen-slider__slide slide5">
                    <img src="../public/clients/masisa.png" alt="" />
                </div>
                <div className="keen-slider__slide slide6">
                    <img src="../public/clients/transpetro.png" alt="" />
                </div>
            </div>
        </section>
    )
}
