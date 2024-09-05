paceOptions = {
    ajax: true, //Checks AJAX request
    document: true, // Document is ready
}

Pace.on('pace-done', () => {

    gsap.timeline()
        .add('p')
        .to('.pace', {
            transform: 'scale(10, 1)',
            duration: 4
        }, '+=.2')
        .to('.pace', {
            duration: 1,
            height: '100%'
    }, '-=2.5')
})