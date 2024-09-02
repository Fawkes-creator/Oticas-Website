import style from "@/componentes/SecaoContato/conjunto.module.css"


export default function Conjunto_Contato() {
    return(
        <section className={style.container_redes}>
        <div>
            <h4>Contato</h4>
            <p className={style.map}>Nova Iguaçu, RJ</p>
            <p className={style.tel}>(21) 9999-9999</p>
            <p className={style.email}>contato@oticavida.com</p>
        </div>

            <div>
                <h4>Nossas Redes Sociais</h4>
                <p className={style.fb}>/OticaVida</p>
                <p className={style.inst}>@oticavidarj</p>
                <p className={style.twt}>@oticavidarj</p>
            </div>

        </section>
    )
}