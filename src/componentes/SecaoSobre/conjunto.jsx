import loja from "../../../public/loja.png";
import atendimento from "../../../public/atendimento.png";
import Image from "next/image";
import style from "@/componentes/SecaoSobre/conjunto.module.css"

export default function Conjunto_Sobre() {
    return(
        <section className={style.container_conteudo}>

            <div className={style.square}>
                <Image src={loja} alt={""} className={style.image}/>
            </div>

                <div className={style.square}>  
                    <h2>NOSSAS FILIAIS</h2>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>

                    <div className={style.square}>
                        <h2>ATENDIMENTO FLEXÍVEL</h2>
                        <p>A Nossa equipe é treinada para te atender</p>
                    </div>

                        <div className={style.square}>
                            <Image src={atendimento} alt={""} className={style.image}/>
                        </div>
            </section>
    )
}