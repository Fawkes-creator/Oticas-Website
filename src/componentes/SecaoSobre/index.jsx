import style from "@/componentes/SecaoSobre/style.module.css"

export default function SecaoSobre() {
    return(
        <div className={style.container_texto}>
        <h2>QUEM SOMOS NÓS?</h2>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de janeiro, a Óticas vida iniciou
            suas atividades focada no atendimento ao público de renda mais baixa, sempre
            com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
        </p>
        </div>
    )
}