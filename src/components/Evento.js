import Button from "./evento/Button";

function Evento(){

    function primeiroEvento(){
        console.log('ativando primeiro evento');
    }

    function segundoEvento(){
        console.log('ativando segundo evento');
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={primeiroEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}

export default Evento