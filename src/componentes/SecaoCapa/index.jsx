import style from "@/componentes/SecaoCapa/style.module.css"

export default function SecaoCapa() {
    return (
        <div className={style.container_capa}>
            <section className={style.container_texto}>
                <p>Preços baixos em</p>
                <h1>ÓCULOS DE GRAU E DE SOL</h1>
                <p>Você só encontra aqui</p>
            </section>
        </div>
    )
}