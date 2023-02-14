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
                  <h2> Consultorias </h2>
                  <div className="paragraph-div"> 
                    <p>
                      Oferecemos consultorias para gerenciamento de riscos para espaços confinados, capacitação para supervisores, vigias, trabalhadores e equipes de resgate. Bem como planos de resgate conforme prevê texto da NR33 - <strong>Segurança e Saúde no Trabalho em Espaço Confinado</strong> (33.5.20 Preparação para Emergências). 
                    </p>
                    <span> 
                      Publicado na Portaria MTP Nº1650 de 15 de Junho de 2022 - DOU 24/06/2022, edição 118 seção 1, pg.94.
                    </span>
                  </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide4 Jr-Korpa">
              <div className="bg-4">
                <img src="/aditional/S4 EC.png"/>
                <div className="text-2">
                  <h2>Trabalhe com Confiança</h2>
                  <h2><strong>Invista em Segurança!</strong></h2>
                </div>
              </div>
            </div>

        </section>
    )
}