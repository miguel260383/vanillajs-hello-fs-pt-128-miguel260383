const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];

const dominio = [['the', 'our'],['great', 'big'],['jogger', 'racoon'],[".com"]]

for (let i = 0; i < dominio[0].length; i++) {
    for (let j = 0; j < dominio[1].length; j++) {
        for (let k = 0; k < dominio[2].length; k++) {
            for (let l = 0; l < dominio[3].length; l++) {

            console.log(dominio[0][i] + dominio[1][j] + dominio[2][k] + dominio[3][l]);
            }
        }
    }
}