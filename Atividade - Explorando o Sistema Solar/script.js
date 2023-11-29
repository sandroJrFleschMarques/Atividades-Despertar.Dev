// axios.get('https://api.le-systeme-solaire.net/rest/bodies/').then(result => {
//     console.log(result.data.bodies);
// }).catch(err =>{
//     console.log(err);
// }).finally(()=> console.log('terminou'))

const corposCelestes = []
async function getBodies() {
    const result = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
    return result.data.bodies
}
getBodies().then((result) => {
    corposCelestes.push(...result)
    console.log(corposCelestes)
    console.log(planetasFiltro())
    encontrarTerra()
    const planetas = planetasFiltro()
    nTemLua(planetas)
    arrayNomes(planetas)
    tamanho(planetas)
    informacoes(planetas)
    massaMenores(planetas)
    luasEDensidade(planetas)
    // descoberta(corposCelestes)
    encontrandoAstro('La Terre')
    filtroGraus(corposCelestes)
    planetasSeparados(corposCelestes)
    ordComplex(corposCelestes)
    planetaOrbitado(corposCelestes)
    mediaMassaPlanetas(planetas)
    distanciaSaturnoPlutao(corposCelestes)
    planetasComLuas(planetas)
    desafioFinal(corposCelestes)
}).catch((err) => {
    console.log(err)
});
function planetasFiltro() {
    const result = corposCelestes.filter(planeta => planeta.isPlanet)
    return result
}
function encontrarTerra() {
    const result = corposCelestes.find(planeta => planeta.name === 'La Terre')
    console.log(result)
}

function nTemLua(n) {

    const somesome = n.some(nl => nl.moons === null)
    const aa = n.filter(x => x.moons === null)
    console.log(aa);
    let r = ''
    aa.forEach(indice => {
        r += (indice.name + '... ');
    });
    return console.log('Algum planeta no array filtrado não tem luas? ' + somesome), console.log('São eles: ' + r)

}
function arrayNomes(n) {

    const nomes = n.map(callback => {
        return callback.name
    })
    console.log(nomes);
}
function tamanho(n) {

    const nomes = n.map(callback => {
        return {
            nome: callback.name,
            tamanho: callback.equaRadius
        }
    })

    const ordem = nomes.sort(function (x, y) {
        return x.tamanho - y.tamanho
    })
    console.log(ordem);
}
function informacoes(n) {
    const nomes = n.map(callback => {
        return callback.name
    })
    console.log(nomes)
    const info = nomes.join()
    console.log(info, typeof info);

}

function massaMenores(n) {
    const massa = n.sort((a, b) => a.equaRadius - b.equaRadius)
    console.log(massa);
    let arr = []
    let soma = 0
    massa.forEach(o => {
        if (arr.length < 5) {
            arr.push(o)
            const exponenciacao = o.mass.massValue * Math.pow(10, o.mass.massExponent)
            soma += exponenciacao
        }
    })
    console.log('Soma das 5 menores massas', arr, soma);
}
function luasEDensidade(n) {
    let rr = n.forEach(call => {
        if (call.moons != null && call.moons.length > 2 && call.density > 1) {
            console.log('luas e densidade', call.name, call.density);
        }
    })
    console.log(rr);
}
function descoberta(n) {
    let des = n.map(call => {
        if (call.discoveryDate) {
            return call
        }
    })

    des.sort((a, b) => {
        const dateA = new Date(
            a.discoveryDate.split("/").reverse().join("-")
        );
        const dateB = new Date(
            b.discoveryDate.split("/").reverse().join("-")
        );

        return dateA - dateB;
    })
    for (let indice of des) {
        console.log(indice.name, indice.discoveryDate);
    }
}
function encontrandoAstro(nome) {
    const array = corposCelestes
    const find = array.find(callback => {
        return callback.name === nome
    })
    console.log(`Gravidade do astro ${find.name}: ${find.gravity}, Densidade: ${find.density}, Massa: ${find.mass.massValue}, Distancia: ${find.aphelion}, ${find.perihelion}`)
}

function filtroGraus(n) {
    const temp = 273.15
    const filtro = n.filter(call => {
        const calculo = call.avgTemp - temp
        return calculo >= 8 && calculo <= 30
    })
    console.log(filtro)
    //Resultado Deu só a Terra
}
let obj = {}
function planetasSeparados(n) {
    const separados = n.map(i => {
        if (obj[i.bodyType] === undefined) {
            obj[i.bodyType] = []
        }
        obj[i.bodyType].push(i)

    })
    console.log(obj);
}

function ordComplex(n) {

    for (let i in obj) {
        const ordem = obj[i].sort((a, b) => b.equaRadius - a.equaRadius)
        const ordemSlice = ordem.slice(0, 3)
        console.log(ordemSlice);

    }

}
function planetaOrbitado(n) {
    const orbitado = n.filter(call => {
        return call.aroundPlanet != null
    })
    orbitado.forEach(call => {
        console.log(call.name, call.aroundPlanet);
    })

}
function mediaMassaPlanetas(n) {
    const planetas = n.filter(call => call.bodyType === 'Planet')
    const soma = planetas.reduce((acc, currentValue) => {
        return acc + currentValue.mass.massValue * Math.pow(10, currentValue.mass.massExponent)
    }, 0)

    const media = soma / planetas.length
    console.log(media);
}
function distanciaSaturnoPlutao(n) {
    const aphelion = n.find(call => call.id === 'saturne').aphelion
    const perihelion = n.find(call => call.id === 'pluton').perihelion
    console.log(perihelion - aphelion);
}
function planetasComLuas(n) {
    n.forEach(call => {
        if (call.moons != null) console.log(call.name, call.moons.length);
    })
}
function desafioFinal(n) {
    const arrayPlanetas = n.filter(call => call.isPlanet)
    // arrayPlanetas.forEach(call => console.log(call.name))
    console.log(arrayPlanetas);
    const massas = arrayPlanetas.map(call => call.mass.massValue * Math.pow(10, call.mass.massExponent))
    // massas.push(1)
    massas.sort((a, b) => a - b)

    console.log(massas);
    let indice1 = 0
    let indice2 = 0
    let indice = Math.floor(massas.length / 2)

    if (massas.length % 2 === 0) {
        console.log('par');
        indice1 = (massas.length / 2) - 1
        indice2 = massas.length / 2
        const medianaPar = (massas[indice1] + massas[indice2]) / 2
        console.log(medianaPar);
        const nomeDeles = arrayPlanetas.filter(call => call.mass.massValue * Math.pow(10, call.mass.massExponent) >= massas[indice1] && call.mass.massValue * Math.pow(10, call.mass.massExponent) <= massas[indice2])
        console.log('planetas mais próximos da mediana:', nomeDeles);

    } else {
        console.log('impar');
        const medianaImpar = massas[Math.floor(massas.length / 2)]
        console.log(medianaImpar);
        const nomeDele = arrayPlanetas.filter(call => call.mass.massValue * Math.pow(10, call.mass.massExponent) === massas[indice])
        console.log('planeta mais próximo da mediana:', nomeDele);
    }

}