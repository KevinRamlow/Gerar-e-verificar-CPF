import {ValidateCpf} from './ValidateCpf'

export class CreateCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    format(cpf){
        return(
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
        
    }

    createNewCpf() {
        const cleanCpf = this.rand()
        
        const validator = new ValidateCpf(cleanCpf)
        const digitOne = validator.newDigit(cleanCpf)
        const digitTwo = validator.newDigit(cleanCpf + digitOne)
        const newCpf = cleanCpf + digitOne + digitTwo
        return this.format(newCpf)
    }
}