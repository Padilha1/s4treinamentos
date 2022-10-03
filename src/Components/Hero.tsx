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
        <section ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <div className="text-1">
                {/* mudar !!!!!!!!!!!!!!! colocar nome dos serviços */}
                <h1><strong>S4 Cursos e Treinamentos</strong></h1>
                <h3>Encontre a <strong>segurança</strong> que você precisa no seu negócio.</h3>
              </div>
            </div>
            <div className="keen-slider__slide number-slide2">
              <div className="bg-2">
                <img src="../public/logos/S4_Marca3.png" className="logo"/>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
              <div>
                {/* COLOCAR SERVICOS */}
                <span>Oferecemos Cursos, <br></br>Serviços e <br></br>Consultorias</span>
              </div>
            </div>
            <div className="keen-slider__slide number-slide4">
              <div className="bg-4">
                <img src="../public/aditional/S4 EC.png"/>
                <div className="text-2">
                  <h1>Trabalhe com Confiança</h1>
                  <h1><strong>Invista em Segurança!</strong></h1>
                </div>
              </div>
            </div>

        </section>
    )
}