import style from "@/componentes/SecaoProdutos/list.module.css"

export default function Lista() {
    return (
        <section className={style.container}>
            <p>Todos os nossos produtos incluem:</p>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </section>
    )
}