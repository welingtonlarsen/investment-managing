import { TBrokerageOrder } from "../hooks/useBrokerageNoteForm";

/*
TODO: 
- Enviar requesição para o backend usando AXIOS
- Ir para tela de erro caso a requisição falhe
- Ir para tela de relatórios caso sucesso, (alert de sucesso antes)
*/
export const useBrokerageNoteService = () => {
    function create(brokerageOrder: TBrokerageOrder) {
        console.log(brokerageOrder)
        alert('inside service')
    }
    
    return {create}
}

export default useBrokerageNoteService;