AOS.init();

const dataDoEvento = new Date("Dec 15, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual =  agora.getTime();

    const dataAteEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    

    const diasAteOEvento = Math.floor(dataAteEvento / diasEmMs);
    const horasAteOEvento = Math.floor((dataAteEvento % diasEmMs) / horasEmMs);
    const nimutosAteOEvento = Math.floor((dataAteEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((dataAteEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `começa em ${diasAteOEvento}d ${horasAteOEvento}h ${nimutosAteOEvento}m ${segundosAteOEvento}s`;

    if (dataAteEvento < 0) {
        document.getElementById('contador').innerHTML = 'Evento expirado!';
    }
},1000);