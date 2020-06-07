let bd = new Bd();

function adicionarCliente(){
    
    let nome = document.getElementById('nome-cliente').value;
    let valor = document.getElementById('valor-inicial').value;
    let alert = document.querySelector('#alerta');
    
    let cliente = new Cliente(nome, valor);
    
    bd.gravar(cliente);
    $('#modal').modal('hide');

    if(nome == ''|| valor == ''){
        document.querySelector('#alert-error').style.display = 'inline';
        
        setTimeout(function(){
            document.querySelector('#alert-error').style.display = 'none';
        }, 5000);
            
    } else{
        
        document.querySelector('#alert-success').style.display = 'inline';
        
        this.onSubmit();
        
        this.carregaClientes();
        
        setTimeout(function(){
            
            document.querySelector('#alert-success').style.display = 'none';
            
        }, 5000);
    }
    
    console.log(cliente);
    
}

function carregaClientes(clientes=[]){
    if(clientes == 0){
        clientes = bd.recuperarClientes()
    }
    
    let listaClientes = document.getElementById('lista-clientes');
    listaClientes.innerHTML = '';
    
    clientes.forEach(function(d){
        let linha = listaClientes.insertRow();
        
        linha.insertCell(0).innerHTML = d.nome;
        linha.insertCell(1).innerHTML = d.divida;
        
        let btnAdicionar = document.createElement("button");
        btnAdicionar.className = 'botao-valor';
        btnAdicionar.innerHTML ='<i class="fas fa-arrow-alt-circle-up"></i>';
        btnAdicionar.onclick = function(){
            let id = this.id.replace('id_cliente_', '');
            
            for(let i = 1; i <= id; i++){
                let cliente = JSON.parse(localStorage.getItem(i));
            
                if(cliente === null){
                    continue
                }
        
                this.editarUsuario()
            }
        }
        linha.insertCell(2).append(btnAdicionar)
        
        let btnRemover = document.createElement("button");
        btnRemover.className = 'botao-remover';
        btnRemover.innerHTML ='<i class="fas fa-arrow-alt-circle-down"></i>';
        btnRemover.onclick = function(){
            parseInt(d.divida)-1;
        }
        linha.insertCell(3).append(btnRemover)
        
        let btn = document.createElement("button");
        btn.className = 'btn btn-danger';
        btn.innerHTML = '<i class="fas fa-times"></i>';
        btn.id = 'id_cliente_' + d.id;
        btn.onclick = function(){
            //remover cliente
            let id = this.id.replace('id_cliente_', '');
            console.log(id);
            bd.remover(id);
        }
        linha.insertCell(4).append(btn)
        
        //console.log(clientes)
    });

}

function onSubmit(){
        
        document.querySelector('[type=submit]').addEventListener('submit', e=>{
            
            e.preventDefault();
            
        });   
        
    }

function editarUsuario(){
    let clientes = bd.recuperarClientes();
    
    clientes.forEach(function(d){
        console.log(d.id)
    })
}
editarUsuario()