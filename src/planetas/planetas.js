const planets = document.querySelectorAll('.planet');
const infoBoxLeft = document.querySelector('.info-box-left');
const infoBoxRight = document.querySelector('.info-box-right');

const planetTexts = {
    planet1: textMercurio(),
    planet2: textVenus()   ,
    planet3: textTerra()   ,
    planet4: textMarte()   ,
    planet5: textJupiter() ,
    planet6: textSaturno() ,
    planet7: textUrano()   ,
    planet8: textNetuno()
};

const planetsGifs = {
    planet1: "planetas/gifs/mercurio.gif",
    planet2: "planetas/gifs/venus.gif"   ,
    planet3: "planetas/gifs/terra.gif"   ,
    planet4: "planetas/gifs/marte.gif"   ,
    planet5: "planetas/gifs/jupiter.gif" ,
    planet6: "planetas/gifs/saturno.gif" ,
    planet7: "planetas/gifs/urano.gif"   ,
    planet8: "planetas/gifs/netuno.gif"
};

planets.forEach(planet => {
    planet.addEventListener('click', (event) => {
        event.stopPropagation();
        const planetClass = planet.classList[1]; // Usa a classe do planeta para o nome
        const planetText = planetTexts[planetClass] || planetClass; // Usa o nome mapeado ou a classe
        const planetGif = planetsGifs[planetClass] || planetClass; // Usa o nome mapeado ou a classe
        
        console.log( planetGif )
        infoBoxLeft.innerHTML = planetText;
        infoBoxRight.innerHTML = `<img src="${planetGif}" alt="${planetClass} GIF" style="max-width: 100%; height: auto;">`;

        infoBoxLeft.style.fontFamily = 'Red hat display, sans-serif';

        infoBoxRight.style.fontFamily = 'Red hat display, sans-serif';

        infoBoxLeft.style.display = 'block';
        setTimeout(() => { infoBoxLeft.style.opacity = 1; }, 0);

        infoBoxRight.style.display = 'block';
        setTimeout(() => { infoBoxRight.style.opacity = 1; }, 0);
    });

});

document.addEventListener('click', (event) => {
    if (infoBoxLeft.style.display === 'block') {
        infoBoxLeft.style.display = 'none';
        infoBoxLeft.style.opacity = 0; // Para garantir que a opacidade seja zero ao esconder
    }

    if (infoBoxRight.style.display === 'block') {
        infoBoxRight.style.display = 'none';
        infoBoxRight.style.opacity = 0; // Para garantir que a opacidade seja zero ao esconder
    }
});

document.addEventListener('scroll', () => {
    if (infoBoxLeft.style.display === 'block') {
        infoBoxLeft.style.display = 'none';
        infoBoxLeft.style.opacity = 0; // Para garantir que a opacidade seja zero ao esconder
    }

    if (infoBoxRight.style.display === 'block') {
        infoBoxRight.style.display = 'none';
        infoBoxRight.style.opacity = 0; // Para garantir que a opacidade seja zero ao esconder
    }
});

function textMercurio() {
    return `Distância da Terra: A distância média entre Mercúrio e a Terra varia de aproximadamente 77,3 milhões de quilômetros a 222,5 milhões de quilômetros, dependendo das posições em suas órbitas. 
    <br>Formação: Mercúrio se formou há cerca de 4,6 bilhões de anos a partir de uma nuvem de gás e poeira cósmica. Foi intensamente bombardeado por cometas e asteroides durante sua formação.
    <br>Gravidade: A gravidade em Mercúrio é de aproximadamente 3,7 m/s², o que é cerca de 38% da gravidade da Terra.  
    <br>Tipo de atmosfera: Mercúrio possui uma atmosfera extremamente fina e instável, composta principalmente por hélio, hidrogênio, oxigênio, sódio, potássio e outros gases em menores quantidades.
    <br>Composição do planeta: Mercúrio tem uma crosta sólida de silicatos, um manto e um núcleo composto principalmente de ferro. Sua superfície contém elementos como potássio, sódio, oxigênio, hélio e dióxido de carbono.
    <br>Luas: Mercúrio não possui luas.
    <br>Tamanho do planeta: Mercúrio é o menor planeta do Sistema Solar, com um diâmetro de aproximadamente 4.879 quilômetros9.
    <br>Duração do dia: Um dia em Mercúrio (rotação completa) dura cerca de 59 dias terrestres.
    <br>Duração do ano: Um ano em Mercúrio (translação completa ao redor do Sol) dura cerca de 88 dias terrestres.
    <br>Nomeação: Mercúrio foi nomeado em homenagem ao deus romano do comércio e mensageiro dos deuses, conhecido por sua velocidade11.
    <br>Anéis: Mercúrio não possui anéis.
    <br>Órbita: Mercúrio tem uma órbita altamente excêntrica, variando de 46 milhões de quilômetros no periélio a 70 milhões de quilômetros no afélio.`
}

function textVenus() {
    return "Distância da Terra: A distância média entre Vênus e a Terra é de aproximadamente 41,4 milhões de quilômetros."
    + "<br>Formação: Vênus se formou há cerca de 4,5 bilhões de anos, a partir da nebulosa solar, assim como os outros planetas do Sistema Solar."
    + "<br>Gravidade: A gravidade em Vênus é de aproximadamente 8,87 m/s², que é cerca de 90% da gravidade da Terra."
    + "<br>Tipo de atmosfera: A atmosfera de Vênus é extremamente densa e composta principalmente de dióxido de carbono (96,5%) e nitrogênio (3,5%), com nuvens espessas de ácido sulfúrico."
    + "<br>Composição do planeta: Vênus é composto principalmente por rochas e metais. Seu núcleo é de ferro, coberto por um manto de silicato e uma crosta rochosa."
    + "<br>Luas: Vênus não possui luas."
    + "<br>Tamanho do planeta: O diâmetro de Vênus é de aproximadamente 12.104 km, e sua massa é de cerca de 4,8685 × 10²⁴ kg."
    + "<br>Duração do dia: Um dia em Vênus (tempo de rotação sobre seu eixo) dura cerca de 243 dias terrestres."
    + "<br>Duração do ano: Um ano em Vênus (tempo de translação ao redor do Sol) dura aproximadamente 225 dias terrestres."
    + "<br>Nomeação: Vênus recebeu seu nome em homenagem à deusa romana do amor e da beleza."
    + "<br>Anéis: Vênus não possui anéis."
    + "<br>Órbita e Rotação: Vênus tem uma órbita quase circular ao redor do Sol, com uma excentricidade muito baixa. Sua rotação é retrógrada, ou seja, gira no sentido contrário ao da maioria dos planetas do Sistema Solar."
}

function textTerra() {
    return `Distância da Terra ao Sol: A Terra está a uma distância média de aproximadamente 149,6 milhões de quilômetros do Sol.
    <br>Formação: A Terra se formou há cerca de 4,5 bilhões de anos a partir da nebulosa solar, uma nuvem de gás e poeira que colapsou sob sua própria gravidade. Durante sua formação, a Terra passou por um intenso bombardeio de asteroides e cometas, o que contribuiu para a formação de sua crosta e atmosfera.
    <br>Gravidade: A gravidade na superfície da Terra é de aproximadamente 9,8 m/s².
    <br>Tipo de Atmosfera: A atmosfera terrestre é composta principalmente por nitrogênio (78%) e oxigênio (21%), com traços de outros gases como argônio, dióxido de carbono e vapor de água. Esta composição é crucial para a manutenção da vida.
    <br>Composição do Planeta:
    <br>A Terra é composta por várias camadas:
    <br>Crosta: A camada mais externa, composta principalmente por silicatos.
    <br>Manto: Uma camada de rochas silicatadas semi-sólidas.
    <br>Núcleo Externo: Composto de ferro e níquel em estado líquido.
    <br>Núcleo Interno: Composto de ferro e níquel em estado sólido.
    <br>Luas: A Terra tem uma única lua natural, conhecida simplesmente como "Lua".
    <br>Tamanho do Planeta: O diâmetro da Terra é de aproximadamente 12.742 km, e sua circunferência é de cerca de 40.075 km.
    <br>Duração do Dia: Um dia na Terra (rotação completa sobre seu eixo) dura 24 horas.
    <br>Duração do Ano: Um ano na Terra (translação completa ao redor do Sol) dura cerca de 365,25 dias.
    <br>Nomeação: O nome "Terra" vem do latim "Terra", que significa "terra" ou "solo". Em inglês, é chamado de "Earth", derivado do inglês antigo "eorþe".
    <br>Anéis: A Terra não possui anéis.
    <br>Órbita e Rotação: A Terra orbita o Sol em uma trajetória elíptica, com uma excentricidade muito baixa, o que significa que sua órbita é quase circular. A Terra também possui uma inclinação axial de 23,5 graus, o que causa as estações do ano.`
}

function textMarte() {
    return `Distancia da Terra: distância média da Terra para Marte é de 225 milhões de quilômetros.
    <br>Formação: por meio de um processo de acreção. Esse processo consiste na acumulação gradual de matéria, como poeira, gás ou outros materiais, em torno de um objeto celeste, como um planeta ou uma estrela. A gravidade é a principal força que impulsiona esse processo.
    <br>Gravidade: 3,71 m/s²
    <br>Tipo de atmosfera: A atmosfera de Marte é rarefeita, empoeirada e composta principalmente por dióxido de carbono, sendo irrespirável.
    <br>Composição do planeta: Marte é formado por rocha sólida, embora o núcleo seja constituído por rocha e ferro fundido. Assim deverá ter um grande núcleo de Ferro.
    <br>Luas: possui dois pequenos satélites conhecidos, Fobos e Deimos, os quais acredita-se serem asteróides capturados. Ambos os satélites foram descobertos em 1877 por Asaph Hall, e receberam o nome em homenagem às figuras mitológicas Fobos (medo/fobia) e Deimos (terror/pavor) os quais, na mitologia grega, acompanhavam seu pai Ares, deus da guerra, nas batalhas. Ares era conhecido como Marte pelos romanos.
    <br>Tamanho do planeta: 6.779 km
    <br>Duração do dia: 1d 0h 37m
    <br>Duração do ano: 687 dias
    <br>Nomeação: recebeu o seu nome em homenagem a Marte, o deus romano da guerra, filho de Júpiter e Juno. Na mitologia grega, o deus Marte corresponde a Ares.
    <br>Anéis: Marte não tem anéis atualmente, mas estudos sugerem que já teve e que poderá ter novamente no futuro.
    <br>Órbita elíptica`
}

function textJupiter() {
    return `Distancia da Terra: varia entre 628 milhões de km e 928 milhões de km.
    <br>Formação: Júpiter passou a se formar a partir de um acúmulo de poeira cósmica que daria origem ao seu núcleo sólido.
    O núcleo, de grandes proporções, passou a atrair uma série de gases para o seu entorno, dando origem ao planeta gasoso. Apesar dos estudos e pesquisas realizadas sobre Júpiter, ainda se sabe pouco sobre o planeta, especialmente sobre o seu interior.
    <br>Gravidade: 24,79 m/s²
    <br>Tipo de atmosfera: composta, basicamente, por dois gases: 86% de hidrogênio e 14% de hélio. Há, de forma ínfima, a presença de metano, amoníaco, vapor d'água e sulfureto de hidrogênio.
    <br>Composição do planeta: composto principalmente por hidrogênio e hélio, com traços de outros elementos
    <br>Luas: possui 95 satélites confirmados, o segundo maior número "seguro" de satélites entre os oito planetas do Sistema Solar. Os quatro satélites mais massivos, os satélites de Galileu, foram descobertos em 1610 por Galileu Galilei, e foram os primeiros objetos descobertos pela humanidade em órbita de outro corpo que não a Terra ou o Sol.
    <br>Tamanho do planeta: é 300 vezes maior que a da Terra, e diâmetro de 140 mil quilômetros é cerca de 11 vezes o diâmetro da Terra.
    <br>Duração do dia: a cada 10 horas, ele completa um ciclo de dia e noite.
    <br>Duração do ano: 4.333 dias terrestres.
    <br>Nomeação: recebeu esse nome por ser o maior planeta do Sistema Solar e, de certa forma, o rei dos planetas. O nome vem do deus Júpiter, que na mitologia romana era o deus dos deuses, e filho de Saturno. Na mitologia grega, Júpiter é conhecido como Zeus.
    <br>Anéis: consiste principalmente de poeira.  É formado por quatro partes: a parte mais interna, o “anel halo”, é espessa e tem uma forma de toroide; afastando-se do planeta encontra-se a segunda parte, o “anel principal”, que é o mais visível e também muito estreito; continuando o afastamento, encontram-se os dois largos, espessos e ténues “anéis gossamer”, nomeados a partir da lua de cujo material eles são compostos, Adrasteia e Tebe.
    Órbita elíptica.`
}

function textSaturno() {
    return `Distancia da Terra: oscila entre 1195 e 1673 milhões de km.
    <br>Formação: é formado predominantemente por hidrogênio, hélio em menores proporções e uma quantidade muito pequena de metano. O seu núcleo, em contrapartida, é denso e solidificado, envolto por hidrogênio líquido metálico e hidrogênio líquido.
    <br>Gravidade: 10,44 m/s²
    <br>Tipo de atmosfera: é bastante densa, composta por nitrogênio e metano.
    <br>Composição do planeta: composto principalmente por hidrogênio e hélio, e com uma pequena quantidade de metano. A sua composição química é similar à de Júpiter. ​​
    <br>Luas: é o planeta do sistema solar com o maior número de luas ou satélites naturais, tendo o total de 145 luas, ele está na frente de Júpiter que é o segundo colocado com um total de 94 luas. O planeta também possui o satélite natural Titã, a única lua do sistema solar com uma atmosfera importante.
    <br>Tamanho do planeta: 116.460 km.
    <br>Duração do dia: 10h 34m.
    <br>Duração do ano: 29 anos, 167 dias e 6 horas terrestres.
    <br>Nomeação: foi nomeado em homenagem ao deus romano da agricultura, Saturno.
    <br>Anéis: são o mais extenso sistema de anéis de todos os planetas do Sistema Solar. Eles consistem em incontáveis pequenas partículas, cujo tamanho varia de micrômetros a metros, em órbita ao redor de Saturno. As partículas dos anéis são compostas quase totalmente de gelo de água, com um componente residual de material rochoso. Ainda não há um consenso quanto ao mecanismo da sua formação. Embora modelos teóricos tenham indicado que os anéis provavelmente se formaram no início da história do Sistema Solar, novos dados da sonda Cassini sugerem que eles se formaram relativamente tarde.
    Órbita elíptica.`
}

function textUrano() {
    return `Distancia da Terra: varia de aproximadamente 2,6 bilhões de quilômetros a cerca de 3,2 bilhões de quilômetros
    <br>Formação: Simulações recentes de migração planetária têm sugerido que ambos os gigantes de gelo se formaram mais perto do Sol do que suas atuais posições, e se moveram para o exterior mais tarde, uma hipótese detalhada pelo modelo de Nice.
    <br>Gravidade: 8,87 m/s²
    <br>Tipo de atmosfera: é composta por 83% de hidrogénio, 15% de hélio, 2% de metano e pequenas porções de acetileno e outros hidrocarbonetos.
    <br>Composição do planeta: Planeta gasoso. sua massa é formada por gases, principalmente hidrogênio e hélio.
    <br>Luas: possui 28 satélites naturais conhecidos. Sendo divididos em três grupos: treze satélites internos, cinco grandes satélites e dez satélites irregulares. Os satélites internos são pequenos corpos escuros que possuem propriedades e origem comuns com os anéis do planeta. Os cinco grandes satélites são massivos o suficiente para estarem em equilíbrio hidrostático, e quatro deles mostram sinais de atividade interna como formação de cânions e vulcanismo em suas superfícies.[3] O maior satélite desses cinco, Titânia, tem um diâmetro de 1 578 km e é o oitavo maior satélite no Sistema Solar. Os satélites irregulares de Urano são corpos capturados e têm órbitas elípticas e inclinadas a grandes distâncias do planeta.
    <br>Tamanho do planeta:​​ 50.724 km
    <br>Duração do dia: 17h 14m   
    <br>Duração do ano:84 anos terrestres.
    <br>Nomeação: foi nomeado em homenagem ao deus romano do céu, Urano.
    <br>Anéis: Acredita-se que os anéis de Urano são relativamente novos, de uma antiguidade não maior de 600 milhões de anos. Provavelmente originaram-se dos fragmentos da colisão de vários satélites que existiram em algum momento. Após a colisão ficaram decompostos em numerosas partículas que sobreviveram como anéis estreitos e opticamente densos em zonas estritamente confinadas de máxima estabilidade.​`
}

function textNetuno() {
    return `Distancia da Terra: varia de aproximadamente 4,3 bilhões de quilômetros a cerca de 4,5 bilhões de quilômetros
    <br>Formação: se formou a partir da fusão de planetesimais que estavam no disco protoplanetário que girava em torno do Sol primordial.
    <br>Gravidade: 11,15 m/s²
    <br>Tipo de atmosfera: A atmosfera do planeta Netuno é do tipo gasoso, sendo composta por: 80% de hidrogênio, 18% de hélio, 2% de metano.
    <br>Composição do planeta: é classificado como um gigante de gelo em função de sua composição, que é feita por gases como hélio, metano, hidrogênio e amônia, e da ausência de uma superfície sólida.
    <br>Luas: com 14 satélites naturais conhecidos. O maior é de longe Tritão, que compõe quase toda a massa do sistema, com as outras luas compreendendo juntas apenas cerca de 0,3%.
    <br>Tamanho do planeta: 49.244 km
    <br>Duração do dia: 16h 6m
    <br>Duração do ano: aproximadamente 165 anos terrestres.
    <br>Nomeação: foi nomeado Netuno, em homenagem ao deus romano dos mares.
    <br>Anéis: Os anéis de Netuno são um sistema de anéis planetários muito tênues e fracos, compostos principalmente de poeira​`
}