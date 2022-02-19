var animation = bodymovin.loadAnimation({
    container: document.getElementById('sword_animation-right'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animations/swords.json'
    
  })

  var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('sword_animation-left'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animations/swords.json'
  })

  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('close_button_animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animations/close.json'
  })



  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById("fire"),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'Animations/Fire2.json',
  })

