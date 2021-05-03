function humanReadable(seconds) {
    return `${('0'+Math.floor(seconds/3600)).slice(-2)}:${('0'+Math.floor(seconds/60)%60).slice(-2)}:${('0'+seconds % 60).slice(-2)}`;
}
