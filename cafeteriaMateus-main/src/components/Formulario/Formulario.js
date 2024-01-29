import CampoTexto from "../CampoTexto/CampoTexto";

const Formulario = ()=>{
    return(
        <section>
            <form>
                <CampoTexto label='Nome' placeholder={'digite seu nome'}/>
                <CampoTexto label='E-mail' placeholder={'digite seu E-mail'}/>
                <CampoTexto label='Senha' placeholder={'digite sua senha'}/>
            </form>
        </section>
    )
}
export default Formulario