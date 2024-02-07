const os = require('node:os');
////////// EXERCICIO AULA ///////////
/*
setInterval(() => {
    const { arch, platform, totalmem, freemem } = os
    const tRam = totalmem() / 1024 / 1024
    const fRam = freemem() / 1024 / 1024
    const usage = (fRam / tRam) * 100
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(tRam)}mb`,
        FreeRAM: `${parseInt(fRam)}mb`,        
        Usage: `${usage.toFixed(2)}%`
    }
    console.clear()
    console.table(stats)

    exports.stats = stats
}, 1000);*/


////////// PRATICA //////////
setInterval(() => {
    const { hostname, type, platform, machine, release, uptime } = os
    const host = hostname()
    const typeData = type()
    const plat = platform()
    const mac = machine()
    const rel = release()
    const up = uptime() / 60 / 60
       

    const data = {
        Hostname: host,
        'OS Type': typeData,
        Platform: plat,
        Architecture: mac,
        Version: rel,
        Uptime: `${parseInt(up.toFixed(2))} Hrs`
    }
    console.clear()
    console.table(data)

    exports.data = data
}, 1000);

