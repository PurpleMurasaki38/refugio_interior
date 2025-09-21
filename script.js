// Content for each chapter — each item is a full block (string)
const capitulos = {
  1: [
`Auto Ajuda
Não diga que você não consegue.
Não tema leviatã, pois ele será um lanche.
Não tema o número da besta.
Não tenha medo de não haver redenção.
Não durma com medo.
Não tenha medo da morte.
Não se corrompa.
Não esconda seus pecados da confissão.
Não espere, seu tempo é agora.
Não demore, Deus está chamando.
Tenha fé que verás o além do rio azul.
Imagine o Senhor, se apaixone por suas palavras.
O Espírito Santo me alimenta com pão e manteiga.
Pode parecer misticismo, e de fato acredito na Kabbalah.`
  ],
  2: [
`Terapia com o Altíssimo
Pense agora num belo riacho azul enquanto conversamos.
Você vai desistir? Porque desistir, quando eu te acho tão lindo?
Te coloquei de pé! Cada passo, eu te ensinei.
Te amei, mesmo quando me rejeitou. E ainda amo!
Ofanins, serafins, querubins... Quero te levar a este lugar.
Na cidade celestial não há dor, nem pranto, nem noite.
Cristal e ouro! Além do Rio Azul! Me leva, Jesus!`
  ],
  3: [
`Forte Mudança
Desperte agora, pois o Espírito clama no silêncio.
Não adie tua conversão, o tempo urge, amado.
Quantas auroras esperarás, ó alma inquieta e sedenta?
Católicos, evangélicos — todos filhos da Promessa Eterna.
Mesmo na morte, confia: teu lar é o céu.
A besta ruge, mas Cristo é nossa vitória.
Fortalece os meus irmãos na fé viva e santa.
Em nome de Jesus, que seja feita a Tua vontade.`
  ],
  4: [
`Salmos Poderosos
Salmo 91: Aquele que habita no Altíssimo, em paz descansará.
Cobrir-me-á com penas, abrigo sob asas de luz.
Mil cairão ao lado, dez mil à direita.
Anjos te guardarão em todos os caminhos terrenos.
Salmo 23: O Senhor é meu Pastor, nada me faltará.
Mesmo no vale da morte, temor não existirá.
Bondade e misericórdia seguirão, até o fim terreno.
Salmo 71: És minha esperança desde a juventude eterna.
Salmo 70: Apressa-te, ó Deus, vem livrar-me com tua força.`
  ],
  5: [
`Descanse em Paz
Mãe, eu te faço essa homenagem... sempre te amei!
Senhora do meu coração!
Descanse com Deus, mãe!
Meu Deus, meu amor por ti fala mais que mil palavras!
Mãe, você sempre será minha melhor amiga!`
  ],
  6: [
`Refúgio Interior
Entra em teu quarto, fecha a porta e ora ao Pai em segredo.
O silêncio é a chave, e o coração é o altar.
Deixa a tempestade lá fora, dentro reina a paz.
Refúgio não é fuga, mas encontro com a eternidade.
No íntimo do ser, o Espírito constrói sua morada.`
  ],
  7: [
`Bíblia Santa
Este livro não é de pedra, mas de fogo.
Cada palavra arde, cada linha ilumina.
É alimento da alma, água para o sedento.
Mesmo quem tropeça nas sombras, encontra luz aqui.
A Bíblia é santa, não por tinta, mas por Verdade.`
  ],
  8: [
`Salmos Extras
Salmo 27: O Senhor é minha luz e minha salvação, a quem temerei?
Salmo 46: Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.
Salmo 121: Eleva os meus olhos para os montes, de onde virá o meu socorro? Do Senhor que fez o céu e a terra.
Salmo 150: Tudo o que respira louve ao Senhor! Aleluia!`
  ],
  9: [
`Orações do Rosário

Credo (Creio):
Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; ...

Pai-Nosso:
Pai nosso que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.

Ave-Maria:
Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.

Glória:
Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.

Salve Rainha:
Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.`
  ]
};

function criarCard(texto){
  const div = document.createElement('div');
  div.className = 'card';
  const h3 = document.createElement('h3');
  // take first line as title
  const firstLine = texto.split('\n')[0] || 'Capítulo';
  h3.textContent = firstLine;
  const p = document.createElement('pre');
  p.textContent = texto;
  p.className = 'footer-note';
  div.appendChild(h3);
  div.appendChild(p);
  return div;
}

function mostrarCapitulo(){
  const selecao = document.getElementById('capituloSelect').value;
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = '';
  if(!selecao){
    mostrarHome();
    return;
  }
  if(capitulos[selecao]){
    capitulos[selecao].forEach(texto => {
      conteudo.appendChild(criarCard(texto));
    });
  }
}

function mostrarHome(){
  const conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = '';
  const welcome = document.createElement('div');
  welcome.className = 'card welcome';
  welcome.innerHTML = '<h3>Bem‑vindo ao Refúgio</h3><p>Aqui você encontra seus textos, salmos e orações organizados. Escolha um capítulo no menu à esquerda.</p>';
  conteudo.appendChild(welcome);
}

function baixarTXT(){
  const selecao = document.getElementById('capituloSelect').value;
  if(!selecao){ alert('Escolha primeiro um capítulo para baixar.'); return; }
  const textos = capitulos[selecao];
  const nome = ('capitulo_' + selecao + '.txt');
  const blob = new Blob([textos.join('\n\n')], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = nome;
  document.body.appendChild(a); a.click();
  a.remove(); URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', mostrarHome);
