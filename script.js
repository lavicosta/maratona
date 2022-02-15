const Modal = {
    open(){
        //abrir modal
        //adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList.add('active')
    },
    close(){
        //fechar modal
        //remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
    // tbm pode ser feito através da funcao toogle
}


const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
},
{
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021'
},
{
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
}
]


const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    total() {
        //entradas - saídas
    }
}

//substituicao das transacoes do html
const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction
    },
    innerHTMLTransaction() {
        const html = `
        <td class="description">Internet</td>
        <td class="expense">- R$ 200,00</td>
        <td class="date">23/01/2021</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover transação">
        </td>

        `

        return html
    }
}

DOM.addTransaction(transaction[0])
