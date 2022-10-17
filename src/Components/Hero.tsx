import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../Css/Hero.css'

export default function Hero() {

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
          loop: true,
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
        <section ref={sliderRef} className="keen-slider hero">
            <div className="keen-slider__slide number-slide1 Pawel Czerwinski">
              <div className="text-1"> 
              <p className="pre-title"> <strong> Segurança do Trabalho </strong></p>
                <h1><strong>S4 Cursos e Treinamentos</strong></h1>
                <h3>Encontre a <strong>segurança</strong> que você precisa no seu negócio.</h3>
              </div>
            </div>
            <div className="keen-slider__slide number-slide2">
              <div className="bg-2">
                <img src="./logos/S4_Marca3.png" className="logo"/>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
                {/* COLOCAR SERVICOS */}
                <div className="neumorphism">
                  <h1> Consultorias </h1>
                  <div className="paragraph-div"> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias provident magnam voluptate sunt quia impedit recusandae! Aut culpa laudantium atque amet cupiditate ducimus quasi est, odio facilis, quas molestiae?</p>
                  </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide4 Jr-Korpa">
              <div className="bg-4">
                <img src="/aditional/S4 EC.png"/>
                <div className="text-2">
                  <h1>Trabalhe com Confiança</h1>
                  <h1><strong>Invista em Segurança!</strong></h1>
                </div>
              </div>
            </div>

        </section>
    )
}