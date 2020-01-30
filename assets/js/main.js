const scrollRight = document.querySelector('#scroll-right-team');
const scrollRightArrow = document.querySelector('#scroll-right-team img');

const swiper = new Swiper('.swiper-container', {
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 110,
  initialSlide:0,
  centeredSlides: true,
  breakpoints:{
    1200:{
      slidesPerView: 3,
      initialSlide:1,
    }
  },
  on:{
    reachBeginning:() => {
      scrollRightArrow.style.transform = 'rotate(0deg)';
    },
    reachEnd:() => {
      scrollRightArrow.style.transform = 'rotate(180deg)';
    }
  }
});

scrollRight.addEventListener('click', () => {
  if(scrollRightArrow.style.transform === 'rotate(180deg)'){
    swiper.slidePrev();
  }else{
    swiper.slideNext();
  }
})

const whyUseScrollRight = document.querySelector('#whyuse-scroll-right img');

const swiperWhyUse = new Swiper('.swiper-container-whyuse', {
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay:{
    delay:7500
    },
  pagination: {
    el: '.swiper-pagination-whyuse',
    clickable: true,
  },
  on:{
    reachBeginning:() => {
      whyUseScrollRight.style.transform = 'rotate(0deg)';
    },
    reachEnd:() => {
      whyUseScrollRight.style.transform = 'rotate(180deg)';
    }
  }
});

whyUseScrollRight.addEventListener('click', () => {
  if(whyUseScrollRight.style.transform === 'rotate(180deg)'){
    swiperWhyUse.slidePrev();
  }else{
    swiperWhyUse.slideNext();
  }
})


const academicScrollRight = document.querySelector('#academic-scroll-right');
const academicScrollRightArrow = document.querySelector('#academic-scroll-right img');

const swiperAcademic = new Swiper('.swiper-container-academic', {
  grabCursor:false,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  on:{
    reachBeginning:() => {
      academicScrollRightArrow.style.transform = 'rotate(0deg)';
    },
    reachEnd:() => {
      academicScrollRightArrow.style.transform = 'rotate(180deg)';
    }
  }
});

academicScrollRight.addEventListener('click', () => {
  if(academicScrollRightArrow.style.transform === 'rotate(180deg)'){
    swiperAcademic.slidePrev();
  }else{
    swiperAcademic.slideNext();
  }
})

lax.setup({
  breakpoints: { small: 0, medium: 767, large:1200 }
}
) // init

const updateLax = () => {
  lax.update(window.scrollY)
  window.requestAnimationFrame(updateLax)
}

window.requestAnimationFrame(updateLax)

sal({
  threshold: 0.25,
  once: true,
});

const impressumPopup = document.getElementById('impressum-popup')
const impressumButton = document.getElementById('impressum')
const closeImpressumButton = document.getElementById('close-impressum-button')
const body = document.querySelector('body')

impressumButton.addEventListener('click', () => {
  impressumPopup.style.opacity = 1; 
  impressumPopup.style.zIndex = 100;  
  body.style.overflow = 'hidden'; 
})

closeImpressumButton.addEventListener('click', () => {
  impressumPopup.style.opacity = 0; 
  impressumPopup.style.zIndex = -10;  
  body.style.overflow = 'auto';
})

const menuButton = document.getElementById('menu')
const menuMobileLinks = document.querySelectorAll('#mobile-menu ul li a')
const menuMobile = document.getElementById('mobile-menu')

menuButton.addEventListener('click', () => {
  if(menuMobile.style.display === 'none'){
    menuMobile.style.display = 'block'; 
    return setTimeout(()=>{menuMobile.style.opacity = 1;},0)
  }else if(menuMobile.style.display === 'block'){
    menuMobile.style.opacity = 0;
    return setTimeout(()=>{menuMobile.style.display = 'none';},500)
  }
  menuMobile.style.display = 'block';
  setTimeout(()=>{menuMobile.style.opacity = 1;},0)
})

menuMobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuMobile.style.opacity = 0;
    return setTimeout(()=>{menuMobile.style.display = 'none';},500)
  })
})

if(window.outerWidth >= 1200){
  const teamMember = document.querySelectorAll('.team-member')
  const teamMemberPic = document.querySelectorAll('.team-member > img:nth-child(1)')
  const teamMemberUnderlinePic = document.querySelectorAll('.team-member >img:nth-of-type(2)')
  const teamMemberMoreDesc = document.querySelectorAll('.team-member-more-description')
  const teamMemberMoreDescParagraph = document.querySelectorAll('.team-member-more-description p')
  const teamMemberMoreDescArrow = document.querySelectorAll('.team-member-more-description .team-member-description-arrow')
  const teamMemberName = document.querySelectorAll('.team-member-name')
  const teamMemberDesc = document.querySelectorAll('.team-member-description')
  teamMemberPic.forEach((memberPic,index) => {
    memberPic.addEventListener('click', () => {
      teamMemberUnderlinePic[index].style.marginLeft = '5.62vw';
      teamMemberUnderlinePic[index].style.opacity = '1';
      teamMemberPic[index].style.cursor = 'auto';
      teamMemberMoreDescParagraph[index].style.opacity = '1';
      teamMemberMoreDescArrow[index].style.opacity = '1';
      teamMemberDesc[index].style.marginLeft = '5.62vw';
      teamMemberName[index].style.marginLeft = '5.62vw';
      teamMemberMoreDesc[index].style.opacity = '1';
      teamMemberMoreDesc[index].style.top = '3.33vh';
      teamMemberMoreDesc[index].style.left = '3.33vh';
      teamMemberMoreDesc[index].style.width = '22.55vw';
      teamMemberMoreDesc[index].style.maxHeight = '114vh';
      teamMemberMoreDescArrow[index].addEventListener('click', () => {
        teamMemberUnderlinePic[index].style.marginLeft = '2.5vw';
        teamMemberUnderlinePic[index].style.opacity = '0';
        teamMemberPic[index].style.cursor = 'pointer';
        teamMemberMoreDescParagraph[index].style.opacity = '0';
        teamMemberMoreDescArrow[index].style.opacity = '0';
        teamMemberDesc[index].style.marginLeft = '0vw';
        teamMemberName[index].style.marginLeft = '0vw';
        teamMemberMoreDesc[index].style.opacity = '0';
        teamMemberMoreDesc[index].style.top = '0vh';
        teamMemberMoreDesc[index].style.left = '0vh';
        teamMemberMoreDesc[index].style.width = '15.8vw';
        return teamMemberMoreDesc[index].style.maxHeight = '20vh';
      })
    })
    teamMember[index].addEventListener('mouseover', () => {
      if(teamMemberDesc[index].style.marginLeft !== '5.62vw'){
        teamMemberDesc[index].style.marginLeft = '2.5vw';
        teamMemberName[index].style.marginLeft = '2.5vw';
      }
    })
    teamMember[index].addEventListener('mouseout', () => {
      if(teamMemberDesc[index].style.marginLeft !== '5.62vw'){
        teamMemberDesc[index].style.marginLeft = '0vw';
        teamMemberName[index].style.marginLeft = '0vw';
      }
    })
  })
}

if(window.outerWidth < '1200'){
  const teamMember = document.querySelectorAll('.team-member')
  const teamMemberPic = document.querySelectorAll('.team-member > img:nth-child(1)')
  const teamMemberUnderlinePic = document.querySelectorAll('.team-member >img:nth-of-type(2)')
  const teamMemberMoreDesc = document.querySelectorAll('.team-member-more-description')
  const teamMemberMoreDescParagraph = document.querySelectorAll('.team-member-more-description p')
  const teamMemberMoreDescArrow = document.querySelectorAll('.team-member-more-description .team-member-description-arrow')
  const teamMemberName = document.querySelectorAll('.team-member-name')
  const teamMemberDesc = document.querySelectorAll('.team-member-description')
  teamMemberPic.forEach((memberPic,index) =>{
    teamMember[index].addEventListener('click', () => {
      teamMemberDesc[index].style.marginLeft = '2.5vw';
      teamMemberName[index].style.marginLeft = '2.5vw';
      teamMemberUnderlinePic[index].style.opacity = '1';
      teamMemberUnderlinePic[index].style.marginLeft = '2.5vw';
      teamMemberMoreDescParagraph[index].style.opacity = '1';
      teamMemberMoreDescArrow[index].style.opacity = '1';
      teamMemberMoreDesc[index].style.opacity = '1';
      teamMemberMoreDesc[index].style.marginTop = '18.52vh';
      teamMemberMoreDesc[index].style.width = '100%';
      teamMemberMoreDesc[index].style.maxHeight = '85.2vh';
    }, 'false')
      teamMemberMoreDescArrow[index].addEventListener('click', () => {
        teamMemberUnderlinePic[index].style.marginLeft = '0';
        teamMemberUnderlinePic[index].style.opacity = '0';
        teamMemberPic[index].style.cursor = 'pointer';
        teamMemberMoreDescParagraph[index].style.opacity = '0';
        teamMemberMoreDescArrow[index].style.opacity = '0';
        teamMemberDesc[index].style.marginLeft = '0vw';
        teamMemberName[index].style.marginLeft = '0vw';
        teamMemberMoreDesc[index].style.marginTop = '8vh';
        teamMemberMoreDesc[index].style.opacity = '0';
        return teamMemberMoreDesc[index].style.maxHeight = '0vh';
      })
    })
}





const sectionCircle = document.querySelector('#section-circle')
const followUsImage = document.querySelector('.social-links > img')


const callbackHero = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-310px)'
      followUsImage.style.opacity = '1'
    }
  })
}

const hero = document.querySelector('#hero-text');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

window.addEventListener('load', (event) => {
  let observerAbout;

  observerAbout = new IntersectionObserver(callbackHero, options);
  observerAbout.observe(hero);
})

//

const callbackAbout = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-125px)'
      followUsImage.style.opacity = '0'
    }
  })
}

const about = document.querySelector('#about');


window.addEventListener('load', (event) => {
  let observerAbout;

  observerAbout = new IntersectionObserver(callbackAbout, options);
  observerAbout.observe(about);
})

//

const callbackTechnology = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-111px)'
    }
  })
}

const technology = document.querySelector('#ourtechnology-text');


window.addEventListener('load', (event) => {
  let observerTechnology;

  observerTechnology = new IntersectionObserver(callbackTechnology, options);
  observerTechnology.observe(technology);
})

//

const callbackStatechannels = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-97px)'
    }
  })
}

const statechannels = document.querySelector('#statechannels-main');


window.addEventListener('load', (event) => {
  let observerStatechannels;

  observerStatechannels = new IntersectionObserver(callbackStatechannels, options);
  observerStatechannels.observe(statechannels);
})

//

const callbackAcademic = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-83px)'
    }
  })
}

const academic = document.querySelector('#academic-main');


window.addEventListener('load', (event) => {
  let observerAcademic;

  observerAcademic = new IntersectionObserver(callbackAcademic , options);
  observerAcademic.observe(academic);
})

//

const callbackProduct = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-69px)'
    }
  })
}

const product = document.querySelector('#product');


window.addEventListener('load', (event) => {
  let observerProduct;

  observerProduct = new IntersectionObserver(callbackProduct, options);
  observerProduct.observe(product);
})

//

const callbackWhyUse = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-55px)'
    }
  })
}

const whyuse = document.querySelector('#whyuse-main');


window.addEventListener('load', (event) => {
  let observerWhyUse;

  observerWhyUse = new IntersectionObserver(callbackWhyUse, options);
  observerWhyUse.observe(whyuse);
})

//

const callbackTeam = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-41px)'
    }
  })
}

const team = document.querySelector('#team-main');


window.addEventListener('load', (event) => {
  let observerTeam;

  observerTeam = new IntersectionObserver(callbackTeam, options);
  observerTeam.observe(team);
})

//

const callbackCareer = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-27px)'
    }
  })
}

const career = document.querySelector('#career');


window.addEventListener('load', (event) => {
  let observerCareer;

  observerCareer = new IntersectionObserver(callbackCareer, options);
  observerCareer.observe(career);
})

//

const callbackPartners = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-13px)'
    }
  })
}

const partners = document.querySelector('#partners');


window.addEventListener('load', (event) => {
  let observerPartners;

  observerPartners = new IntersectionObserver(callbackPartners, options);
  observerPartners.observe(partners);
})

//

const callbackContactUs = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(1px)'
    }
  })
}

const contactus = document.querySelector('#contactus');


window.addEventListener('load', (event) => {
  let observerContactUs;

  observerContactUs = new IntersectionObserver(callbackContactUs, options);
  observerContactUs.observe(contactus);
})

//

const callbackFooter = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(15px)'
    }
  })
}

const footer = document.querySelector('#footer-container');


window.addEventListener('load', (event) => {
  let observerFooter;

  observerFooter = new IntersectionObserver(callbackFooter, options);
  observerFooter.observe(footer);
})

//

const callbackWhyUseSlider = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      swiperWhyUse.slideTo(0);
    }
  })
}

const swiperSection = document.querySelector('#whyuse-slider');


window.addEventListener('load', (event) => {
  let observerWhyUseSlider;

  observerWhyUseSlider = new IntersectionObserver(callbackWhyUseSlider, options);
  observerWhyUseSlider.observe(swiperSection);
})



Pace.on('done', ()=>{
  setTimeout(() => {
    document.querySelector('#logo-loading').style.display='none';
    document.querySelector('#no-overflow-wrapper').style.visibility = 'visible';
    document.querySelector('nav').style.visibility = 'visible';
    document.querySelector('.social-links').style.visibility = 'visible';
    document.querySelector('.scroll-sign').style.visibility = 'visible';
    document.querySelector('#section-circle').style.visibility = 'visible';
  }, 100)
})
