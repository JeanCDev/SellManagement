class Bd{

    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }

    gravar(d) {
        let id = this.getProximoId();

        localStorage.setItem(id, JSON.stringify(d));

        localStorage.setItem('id', id);
    }
    
    recuperarClientes(){
        let clientes = [];
        
        let id = localStorage.getItem('id');
        
        for(let i =1; i <= id; i++){
            let cliente = JSON.parse(localStorage.getItem(i));
            
            if(cliente === null){
                continue
            }
            
            cliente.id = i;
            
            clientes.push(cliente);
        }
        return clientes
    }
    
    pesquisar(){
        let pesquisa = document.getElementById('pesquisa').value;
        let cliente = localStorage.getItem('id');
        
        if(cliente.nome == pesquisa){

            console.log(cliente)
        } return pesquisa;
    }
    
    remover(id){
        document.querySelector('#removed-alert').style.display = 'inline';
        
        localStorage.removeItem(id);
        
        setTimeout(()=>{
            
            document.querySelector('#removed-alert').style.display = 'none';
            
            location.reload(location);
            
        }, 5000);
        
    }
    
}