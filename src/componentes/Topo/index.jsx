import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import style from "@/componentes/Topo/style.module.css"

export default function Topo() {
    return (
        < div className={style.container_topo}>
        <Image src={Logo} alt={""} className={style.logo}/>
                <section className={style.container_links}>
                    <Link href={""} className={style.links}>PRODUTOS</Link>
                    <Link href={""} className={style.links}>SOBRE</Link>
                    <Link href={""} className={style.links}>CONTATO</Link>
                </section>
        </div>

    )
}