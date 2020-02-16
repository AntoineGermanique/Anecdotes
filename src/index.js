let videos = require('../assets/json/vido.json')
// fetch('assets/json/vido.json')
// .then(res=>res.json())
// .then(res=>videos=res)
// .catch(console.log)
const start = () => {
    document.querySelector('audio').play();
    document.querySelector('#intro-player').play();
    const trans1 = document.querySelector('#transition-player-1')
    const trans2 = document.querySelector('#transition-player-2')
    trans1.play()
    trans2.play()
    trans1.pause()
    trans2.pause()
    setTimeout(() => {
        document.querySelector('#intro-player').classList.add('hide')
        let playing = 'trans1'
        setInterval(() => {
            const video = Math.floor(Math.random() * videos.length) - 1
            if (playing === 'trans1') {
                trans1.pause()
                trans1.classList.add('hide')
                trans2.classList.remove('hide')
                trans2.setAttribute('src', `http://127.0.0.1:8080/assets/video/${videos[video]}`)
                trans2.play()
                playing = 'trans2';
            } else {
                trans2.pause()
                trans2.classList.add('hide')
                trans1.classList.remove('hide')
                trans1.setAttribute('src', `http://127.0.0.1:8080/assets/video/${videos[video]}`)
                trans1.play()
                playing = 'trans1';

            }
        }, 3000)
    }, 3000)
    videos
}

window.addEventListener('load', () =>
    document.querySelector('#play').addEventListener('click', start)
)