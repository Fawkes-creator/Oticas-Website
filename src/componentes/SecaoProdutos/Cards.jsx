import Image from "next/image";
import style from "@/componentes/SecaoProdutos/cards.module.css"
import Oculos_01 from "../../../public/oculos01.png"
import Oculos_02 from "../../../public/oculos02.png"
import Oculos_03 from "../../../public/oculos03.png"
import Oculos_04 from "../../../public/oculos04.png"



export default function Cards() {
    return (
        <section className={style.agrupamento}>
            <div className={style.div}>
                <h3>Óculos de grau</h3>
                <Image src={Oculos_01} alt={""} className={style.image1}/>
                <h4>R$ 500,00</h4>
            </div>

                <div className={style.div}>
                    <h3>Óculos transition</h3>
                    <Image src={Oculos_02} alt={""} className={style.image2}/>
                    <h4>R$ 750,00</h4>
                </div>

                    <div className={style.div}>
                        <h3>Óculos de sol</h3>
                        <Image src={Oculos_03} alt={""} className={style.image3}/>
                        <h4>R$ 700,00</h4>
                    </div>

                        <div className={style.div}>
                            <h3>Óculos infantil</h3>
                            <Image src={Oculos_04} alt={""} className={style.image4}/>
                            <h4>R$ 500,00</h4>
                        </div>
        </section>
    )
}