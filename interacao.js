var logo = document.querySelector('.logo')
var discord = document.querySelector('.discord'),
    youtube = document.querySelector('.youtube'),
    facebook = document.querySelector('.facebook'),
    twitter = document.querySelector('.twitter'),
    instagram = document.querySelector('.instagram'),
    tiktok = document.querySelector('.tiktok')
var b1 = document.querySelector('.b1'),
    b2 = document.querySelector('.b2'),
    b3 = document.querySelector('.b3'),
    b4 = document.querySelector('.b4'),
    b5 = document.querySelector('.b5'),
    b6 = document.querySelector('.b6')
var hist = document.querySelector('.hist-button'),
    ch_button = document.querySelector('.ch-button'),
    as_button = document.querySelector('.as_button'),
    person_button = document.querySelector('.person-button'),
    conquis_button = document.querySelector('.conquis-button')
var home = document.querySelector('.home'),
    historia = document.querySelector('.historia'),
    ch = document.querySelector('.ch'),
    as = document.querySelector('.as'),
    person = document.querySelector('.person'),
    conquis = document.querySelector('.conquis')

logo.addEventListener('click', () => {
    window.open('https://www.hogwartslegacy.com/')
})

discord.addEventListener('click', () => {
    window.open('https://discord.com/invite/HogwartsLegacy')
})

youtube.addEventListener('click', () => {
    window.open('https://www.youtube.com/HogwartsLegacy')
})

facebook.addEventListener('click', () => {
    window.open('https://www.facebook.com/HogwartsLegacy')
})

twitter.addEventListener('click', () => {
    window.open('https://twitter.com/HogwartsLegacy')
})

instagram.addEventListener('click', () => {
    window.open('https://www.instagram.com/HogwartsLegacy/')
})

tiktok.addEventListener('click', () => {
    window.open('https://www.tiktok.com/@warnerbrosgames')
})

b1.addEventListener('click', () => {
    home.classList.add('home')
    home.classList.remove('nada6')

    historia.classList.add('nada1')
    historia.classList.remove('historia')

    ch.classList.add('nada2')
    ch.classList.remove('ch')

    as.classList.add('nada3')
    as.classList.remove('as')

    person.classList.add('nada4')
    person.classList.remove('person')

    conquis.classList.add('nada5')
    conquis.classList.remove('conquis')
})

b2.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.remove('nada1')
    historia.classList.add('historia')

    ch.classList.add('nada2')
    ch.classList.remove('ch')

    as.classList.add('nada3')
    as.classList.remove('as')

    person.classList.add('nada4')
    person.classList.remove('person')

    conquis.classList.add('nada5')
    conquis.classList.remove('conquis')
})

hist.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.remove('nada1')
    historia.classList.add('historia')

    ch.classList.add('nada2')
    ch.classList.remove('ch')

    as.classList.add('nada3')
    as.classList.remove('as')

    person.classList.add('nada4')
    person.classList.remove('person')

    conquis.classList.add('nada5')
    conquis.classList.remove('conquis')
})

b3.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.add('nada1')
    historia.classList.remove('historia')

    ch.classList.remove('nada2')
    ch.classList.add('ch')

    as.classList.add('nada3')
    as.classList.remove('as')

    person.classList.add('nada4')
    person.classList.remove('person')

    conquis.classList.add('nada5')
    conquis.classList.remove('conquis')
})

ch_button.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.add('nada1')
    historia.classList.remove('historia')

    ch.classList.remove('nada2')
    ch.classList.add('ch')

    as.classList.add('nada3')
    as.classList.remove('as')

    person.classList.add('nada4')
    person.classList.remove('person')

    conquis.classList.add('nada5')
    conquis.classList.remove('conquis')
})

b4.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.add('nada1')
    historia.classList.remove('historia')

    ch.classList.add('nada2')
    ch.classList.remove('ch')

    as.classList.add('nada3')
    as.classList.remove('as')

    person.classList.remove('nada4')
    person.classList.add('person')

    conquis.classList.add('nada5')
    conquis.classList.remove('conquis')
})

person_button.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.add('nada1')
    historia.classList.remove('historia')

    ch.classList.add('nada2')
    ch.classList.remove('ch')

    as.classList.add('nada3')
    as.classList.remove('as')

    person.classList.remove('nada4')
    person.classList.add('person')

    conquis.classList.add('nada5')
    conquis.classList.remove('conquis')
})

b5.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.add('nada1')
    historia.classList.remove('historia')

    ch.classList.add('nada2')
    ch.classList.remove('ch')

    as.classList.add('nada3')
    as.classList.remove('as')

    person.classList.add('nada4')
    person.classList.remove('person')

    conquis.classList.remove('nada5')
    conquis.classList.add('conquis')
})

conquis_button.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.add('nada1')
    historia.classList.remove('historia')

    ch.classList.add('nada2')
    ch.classList.remove('ch')

    as.classList.add('nada3')
    as.classList.remove('as')

    person.classList.add('nada4')
    person.classList.remove('person')

    conquis.classList.remove('nada5')
    conquis.classList.add('conquis')
})

b6.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.add('nada1')
    historia.classList.remove('historia')

    ch.classList.add('nada2')
    ch.classList.remove('ch')

    as.classList.remove('nada3')
    as.classList.add('as')

    person.classList.add('nada4')
    person.classList.remove('person')

    conquis.classList.add('nada5')
    conquis.classList.remove('conquis')
})

as_button.addEventListener('click', () => {
    home.classList.add('nada6')
    home.classList.remove('home')

    historia.classList.add('nada1')
    historia.classList.remove('historia')

    ch.classList.add('nada2')
    ch.classList.remove('ch')

    as.classList.remove('nada3')
    as.classList.add('as')

    person.classList.add('nada4')
    person.classList.remove('person')

    conquis.classList.add('nada5')
    conquis.classList.remove('conquis')
})