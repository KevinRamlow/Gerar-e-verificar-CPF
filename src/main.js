import {CreateCpf} from './modules/CreateCpf'
import {ValidateCpf} from './modules/ValidateCpf'
import './assets/css/style.css'

const newCpf = document.querySelector('.newCpf')
newCpf.addEventListener('click', function (){
    const create = new CreateCpf
    const createdCpf = document.querySelector('.createdCpf')
    createdCpf.innerHTML = create.createNewCpf()
})

const verifyCpf = document.querySelector('.verifyCpf')
verifyCpf.addEventListener('click', function (){
   const cpftext = document.querySelector('.cpf').value 
   const cpf = new ValidateCpf(cpftext)
   const verify = cpf.verifyCpf()

   const verifiedCpf = document.querySelector('.verifiedCpf')
   
   if (verify){
    verifiedCpf.style.color = 'green'
    verifiedCpf.innerHTML = 'CPF VÁLIDO'
   } else {
    verifiedCpf.style.color = 'red'
    verifiedCpf.innerHTML = 'CPF INVÁLIDO'
   }
})