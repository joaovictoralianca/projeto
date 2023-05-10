function toggleMode(){
    const html = document.documentElement /* Acessando o html atraves do document */
    
/* Modo mais simplificado com o modo toggle*/
    html.classList.toggle('light') /* se no html na lista de classes tiver a classe ('light') o toggle remove, pelo contrario se não tiver ele adiciona */

//   if(html.classList.contains('light')) {  /*(SE CONTÊM) se dentro do html na lista de classes contêm ('light')*/
//    html.classList.remove('light')   /*se conter a classe light na lista de classes o remove lhe removêra.*/ 
//}  
// else { 
//    html.classList.add('light') /*(SE NÃO CONTÊM) o light será adicionado. */

//}

// pegar a tag img
const img = document.querySelector('#profile img')

//substituira imagem

if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light 
    img.setAttribute('src', 'imagens/avatar.png')
} else {

// se tiver light mode, manter a imagem normal
img.setAttribute('src', 'imagens/avatar-light.png')
}



}


