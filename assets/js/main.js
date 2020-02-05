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
      document.querySelector('#scroll-right-team tspan').innerHTML = 'Scroll to the Right';
    },
    reachEnd:() => {
      scrollRightArrow.style.transform = 'rotate(180deg)';
      document.querySelector('#scroll-right-team tspan').innerHTML = 'Scroll to the Left';
    }
  }
});


const ourProductRightArrow = document.querySelector('#ourproduct-button-slide')

const swiperOurProduct = new Swiper('.swiper-container-ourproduct', {
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 300,
  initialSlide:0,
  centeredSlides: true,
  on:{
    reachBeginning:() => {
      ourProductRightArrow.style.transform = 'rotate(0deg)';
    },
    reachEnd:() => {
      ourProductRightArrow.style.transform = 'rotate(180deg)';
    }
  }
});

ourProductRightArrow.addEventListener('click', () => {
  if(ourProductRightArrow.style.transform === 'rotate(180deg)'){
    swiperOurProduct.slidePrev();
  }else{
    swiperOurProduct.slideNext();
  }
})

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
  spaceBetween: 100,
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
  spaceBetween: 100,
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
  const teamMemberPic = document.querySelectorAll('.team-member .small-container > img:nth-child(1)')
  const teamMemberUnderlinePic = document.querySelectorAll('.team-member .small-container >img:nth-of-type(2)')
  const teamMemberMoreDesc = document.querySelectorAll('.team-member-more-description')
  const teamMemberMoreDescParagraph = document.querySelectorAll('.team-member-more-description p')
  const teamMemberMoreDescArrow = document.querySelectorAll('.team-member-more-description .team-member-description-arrow')
  const teamMemberName = document.querySelectorAll('.team-member-name')
  const teamMemberDesc = document.querySelectorAll('.team-member-description')
  const closeDescriptionButton = document.querySelectorAll('#close-description-button');
  const teamMemberDescContainer = document.querySelectorAll('.team-member-description-container')

  teamMemberPic.forEach((memberPic,index) => {
      teamMember[index].addEventListener('click', (event) => {
        if(swiper.activeIndex >= index){
          swiper.autoplay.stop();
          teamMemberDesc[index].style.left = '0%';
          teamMemberDesc[index].style.transform = 'translate(0%, 0)';
          teamMemberName[index].style.left = '0%';
          teamMemberName[index].style.transform = 'translate(0%, 0)';
          teamMemberUnderlinePic[index].style.left = '5.62vw';
          teamMemberPic[index].style.zIndex = '100';
          teamMemberUnderlinePic[index].style.opacity = '1';
          teamMemberUnderlinePic[index].style.zIndex = '100';
          teamMemberPic[index].style.cursor = 'auto';
          teamMemberMoreDescParagraph[index].style.width = '28vw';
          teamMemberMoreDescParagraph[index].style.opacity = '1';
          teamMemberMoreDescArrow[index].style.opacity = '1'; 
          teamMemberDescContainer[index].style.zIndex = '100';
          teamMemberDescContainer[index].style.left = '5.62vw';
          teamMemberDescContainer[index].style.transform = 'translate(0, 0)';
          teamMemberName[index].style.zIndex = '100';
          teamMemberMoreDesc[index].style.opacity = '1';
          teamMemberMoreDesc[index].style.zIndex = '80';
          teamMemberMoreDesc[index].style.top = '3.33vh';
          teamMemberMoreDesc[index].classList.add('paddingTop');
          teamMemberMoreDesc[index].style.left = '3.33vh';
          teamMemberMoreDesc[index].style.width = '35.57vw';
          teamMemberMoreDesc[index].style.maxHeight = '160vh';
          closeDescriptionButton[index].style.left = 'unset';
          closeDescriptionButton[index].style.top = '5.01vh';
          closeDescriptionButton[index].style.right = '3.65vw';
        }
        else{
          swiper.autoplay.stop();
          teamMemberDesc[index].style.left = '0%';
          teamMemberDesc[index].style.transform = 'translate(0%, 0)';
          teamMemberName[index].style.left = '0%';
          teamMemberName[index].style.transform = 'translate(0%, 0)';
          teamMemberDescContainer[index].style.left = '0%';
          teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
          teamMemberUnderlinePic[index].style.left = '-18.23vw';
          teamMemberPic[index].style.zIndex = '100';
          teamMemberUnderlinePic[index].style.opacity = '1';
          teamMemberUnderlinePic[index].style.zIndex = '100';
          teamMemberPic[index].style.cursor = 'auto';
          teamMemberMoreDescParagraph[index].style.width = '28vw';
          teamMemberMoreDescParagraph[index].style.opacity = '1';
          teamMemberMoreDescArrow[index].style.opacity = '1';
          teamMemberDesc[index].style.left = '-18.23vw';
          teamMemberDescContainer[index].style.zIndex = '100';
          teamMemberName[index].style.left = '-18.23vw';
          teamMemberName[index].style.zIndex = '100';
          teamMemberMoreDesc[index].style.opacity = '1';
          teamMemberMoreDesc[index].style.zIndex = '80';
          teamMemberMoreDesc[index].style.top = '3.33vh';
          teamMemberMoreDesc[index].classList.add('paddingTop');
          teamMemberMoreDesc[index].style.left = '-22.25vw';
          teamMemberMoreDesc[index].style.width = '35.57vw';
          teamMemberMoreDesc[index].style.maxHeight = '160vh';
          closeDescriptionButton[index].style.right = 'unset';
          closeDescriptionButton[index].style.top = '5.01vh';
          closeDescriptionButton[index].style.left = '3.65vw';
        }
      }, true)
    document.body.addEventListener('click', () => {
      swiper.autoplay.start();
      teamMemberDescContainer[index].style.left = '0%';
        teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
      teamMemberUnderlinePic[index].style.left = '2.5vw';
      teamMemberPic[index].style.zIndex = '70';
      teamMemberUnderlinePic[index].style.opacity = '0';
      teamMemberUnderlinePic[index].style.zIndex = '70';
      teamMemberPic[index].style.cursor = 'pointer';
      teamMemberMoreDescParagraph[index].style.opacity = '0';
      teamMemberMoreDescArrow[index].style.opacity = '0';
      teamMemberDesc[index].style.left = '0vw';
      teamMemberDescContainer[index].style.zIndex = '70';
      teamMemberName[index].style.left = '0vw';
      teamMemberName[index].style.zIndex = '70';
      teamMemberMoreDesc[index].style.opacity = '0';
      teamMemberMoreDesc[index].style.zIndex = '60';
      teamMemberMoreDesc[index].style.top = '0vh';
      teamMemberMoreDesc[index].classList.remove('paddingTop');
      teamMemberMoreDesc[index].style.left = '0vh';
      teamMemberMoreDesc[index].style.width = '15.8vw';
      return teamMemberMoreDesc[index].style.maxHeight = '';
    }, true)
    closeDescriptionButton[index].addEventListener('click', () => {
      swiper.autoplay.start();
      teamMemberDescContainer[index].style.left = '0%';
        teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
      teamMemberUnderlinePic[index].style.left = '2.5vw';
      teamMemberPic[index].style.zIndex = '70';
      teamMemberUnderlinePic[index].style.opacity = '0';
      teamMemberUnderlinePic[index].style.zIndex = '70';
      teamMemberPic[index].style.cursor = 'pointer';
      teamMemberMoreDescParagraph[index].style.opacity = '0';
      teamMemberMoreDescArrow[index].style.opacity = '0';
      teamMemberDesc[index].style.left = '0vw';
      teamMemberDescContainer[index].style.zIndex = '70';
      teamMemberName[index].style.left = '0vw';
      teamMemberName[index].style.zIndex = '70';
      teamMemberMoreDesc[index].style.opacity = '0';
      teamMemberMoreDesc[index].style.zIndex = '60';
      teamMemberMoreDesc[index].style.top = '0vh';
      teamMemberMoreDesc[index].classList.remove('paddingTop');
      teamMemberMoreDesc[index].style.left = '0vh';
      teamMemberMoreDesc[index].style.width = '15.8vw';
      return teamMemberMoreDesc[index].style.maxHeight = '';
    }, false)
    teamMember[index].addEventListener('mouseover', () => {
        if(teamMemberPic[index].style.zIndex === '100'){
          return
        }
        teamMemberDescContainer[index].style.left = '50%';
        teamMemberDescContainer[index].style.transform = 'translate(-50%, 0)';
    })
    teamMember[index].addEventListener('mouseout', () => {
        if(teamMemberDescContainer[index].style.left === '5.62vw'){
          return
        }
        teamMemberDescContainer[index].style.left = '0%';
        teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
    })
  })
}

swiper.on('slideChange', () => {
  if(window.outerWidth >= 1200){
    const teamMember = document.querySelectorAll('.team-member')
    const teamMemberPic = document.querySelectorAll('.team-member .small-container > img:nth-child(1)')
    const teamMemberUnderlinePic = document.querySelectorAll('.team-member .small-container >img:nth-of-type(2)')
    const teamMemberMoreDesc = document.querySelectorAll('.team-member-more-description')
    const teamMemberMoreDescParagraph = document.querySelectorAll('.team-member-more-description p')
    const teamMemberMoreDescArrow = document.querySelectorAll('.team-member-more-description .team-member-description-arrow')
    const teamMemberName = document.querySelectorAll('.team-member-name')
    const teamMemberDesc = document.querySelectorAll('.team-member-description')
    const closeDescriptionButton = document.querySelectorAll('#close-description-button');
    const teamMemberDescContainer = document.querySelectorAll('.team-member-description-container')

    teamMemberPic.forEach((memberPic,index) => {
      teamMember[index].addEventListener('click', (event) => {
        if(swiper.activeIndex >= index){
          swiper.autoplay.stop();
          teamMemberDesc[index].style.left = '0%';
          teamMemberDesc[index].style.transform = 'translate(0%, 0)';
          teamMemberName[index].style.left = '0%';
          teamMemberName[index].style.transform = 'translate(0%, 0)';
          teamMemberDescContainer[index].style.left = '0%';
          teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
          teamMemberUnderlinePic[index].style.left = '5.62vw';
          teamMemberPic[index].style.zIndex = '100';
          teamMemberUnderlinePic[index].style.opacity = '1';
          teamMemberUnderlinePic[index].style.zIndex = '100';
          teamMemberPic[index].style.cursor = 'auto';
          teamMemberMoreDescParagraph[index].style.width = '28vw';
          teamMemberMoreDescParagraph[index].style.opacity = '1';
          teamMemberMoreDescArrow[index].style.opacity = '1'; 
          teamMemberDescContainer[index].style.zIndex = '100';
          teamMemberDescContainer[index].style.left = '5.62vw';
          teamMemberDescContainer[index].style.transform = 'translate(0, 0)';
          teamMemberName[index].style.zIndex = '100';
          teamMemberMoreDesc[index].style.opacity = '1';
          teamMemberMoreDesc[index].style.zIndex = '80';
          teamMemberMoreDesc[index].style.top = '3.33vh';
          teamMemberMoreDesc[index].classList.add('paddingTop');
          teamMemberMoreDesc[index].style.left = '3.33vh';
          teamMemberMoreDesc[index].style.width = '35.57vw';
          teamMemberMoreDesc[index].style.maxHeight = '160vh';
          closeDescriptionButton[index].style.left = 'unset';
          closeDescriptionButton[index].style.top = '5.01vh';
          closeDescriptionButton[index].style.right = '3.65vw';
        }
        else{
          swiper.autoplay.stop();
          teamMemberDesc[index].style.left = '0%';
          teamMemberDesc[index].style.transform = 'translate(0%, 0)';
          teamMemberName[index].style.left = '0%';
          teamMemberName[index].style.transform = 'translate(0%, 0)';
          teamMemberDescContainer[index].style.left = '0%';
          teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
          teamMemberUnderlinePic[index].style.left = '-18.23vw';
          teamMemberPic[index].style.zIndex = '100';
          teamMemberUnderlinePic[index].style.opacity = '1';
          teamMemberUnderlinePic[index].style.zIndex = '100';
          teamMemberPic[index].style.cursor = 'auto';
          teamMemberMoreDescParagraph[index].style.width = '28vw';
          teamMemberMoreDescParagraph[index].style.opacity = '1';
          teamMemberMoreDescArrow[index].style.opacity = '1';
          teamMemberDesc[index].style.left = '-18.23vw';
          teamMemberDescContainer[index].style.zIndex = '100';
          teamMemberName[index].style.left = '-18.23vw';
          teamMemberName[index].style.zIndex = '100';
          teamMemberMoreDesc[index].style.opacity = '1';
          teamMemberMoreDesc[index].style.zIndex = '80';
          teamMemberMoreDesc[index].style.top = '3.33vh';
          teamMemberMoreDesc[index].classList.add('paddingTop');
          teamMemberMoreDesc[index].style.left = '-22.25vw';
          teamMemberMoreDesc[index].style.width = '35.57vw';
          teamMemberMoreDesc[index].style.maxHeight = '160vh';
          closeDescriptionButton[index].style.right = 'unset';
          closeDescriptionButton[index].style.top = '5.01vh';
          closeDescriptionButton[index].style.left = '3.65vw';
        }
      }, true)
    document.body.addEventListener('click', () => {
      swiper.autoplay.start();
      teamMemberDescContainer[index].style.left = '0%';
        teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
      teamMemberUnderlinePic[index].style.left = '2.5vw';
      teamMemberPic[index].style.zIndex = '70';
      teamMemberUnderlinePic[index].style.opacity = '0';
      teamMemberUnderlinePic[index].style.zIndex = '70';
      teamMemberPic[index].style.cursor = 'pointer';
      teamMemberMoreDescParagraph[index].style.opacity = '0';
      teamMemberMoreDescArrow[index].style.opacity = '0';
      teamMemberDesc[index].style.left = '0vw';
      teamMemberDescContainer[index].style.zIndex = '70';
      teamMemberName[index].style.left = '0vw';
      teamMemberName[index].style.zIndex = '70';
      teamMemberMoreDesc[index].style.opacity = '0';
      teamMemberMoreDesc[index].style.zIndex = '60';
      teamMemberMoreDesc[index].style.top = '0vh';
      teamMemberMoreDesc[index].classList.remove('paddingTop');
      teamMemberMoreDesc[index].style.left = '0vh';
      teamMemberMoreDesc[index].style.width = '15.8vw';
      return teamMemberMoreDesc[index].style.maxHeight = '';
    }, true)
    closeDescriptionButton[index].addEventListener('click', () => {
      swiper.autoplay.start();
      teamMemberDescContainer[index].style.left = '0%';
        teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
      teamMemberUnderlinePic[index].style.left = '2.5vw';
      teamMemberPic[index].style.zIndex = '70';
      teamMemberUnderlinePic[index].style.opacity = '0';
      teamMemberUnderlinePic[index].style.zIndex = '70';
      teamMemberPic[index].style.cursor = 'pointer';
      teamMemberMoreDescParagraph[index].style.opacity = '0';
      teamMemberMoreDescArrow[index].style.opacity = '0';
      teamMemberDesc[index].style.left = '0vw';
      teamMemberDescContainer[index].style.zIndex = '70';
      teamMemberName[index].style.left = '0vw';
      teamMemberName[index].style.zIndex = '70';
      teamMemberMoreDesc[index].style.opacity = '0';
      teamMemberMoreDesc[index].style.zIndex = '60';
      teamMemberMoreDesc[index].style.top = '0vh';
      teamMemberMoreDesc[index].classList.remove('paddingTop');
      teamMemberMoreDesc[index].style.left = '0vh';
      teamMemberMoreDesc[index].style.width = '15.8vw';
      return teamMemberMoreDesc[index].style.maxHeight = '';
    }, false)
      teamMember[index].addEventListener('mouseover', () => {
        if(teamMemberPic[index].style.zIndex === '100'){
          return
        }
        teamMemberDescContainer[index].style.left = '50%';
        teamMemberDescContainer[index].style.transform = 'translate(-50%, 0)';
    })
    teamMember[index].addEventListener('mouseout', () => {
        if(teamMemberDescContainer[index].style.left === '5.62vw'){
          return
        }
        teamMemberDescContainer[index].style.left = '0%';
        teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
    })
    })
  }
  
})


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
    swiper.autoplay.stop();
    teamMember[index].addEventListener('click', () => {
      teamMemberDesc[index].style.left = '10%';
      teamMemberName[index].style.left = '10%';
      teamMemberUnderlinePic[index].style.opacity = '1';
      teamMemberUnderlinePic[index].style.left = '10%';
      teamMemberMoreDescParagraph[index].style.opacity = '1';
      teamMemberMoreDescArrow[index].style.opacity = '1';
      teamMemberMoreDesc[index].style.opacity = '1';
      teamMemberMoreDesc[index].classList.add('paddingTopMobile');
      teamMemberMoreDesc[index].style.marginTop = '18.52vh';
      teamMemberMoreDesc[index].style.width = '100%';
      teamMemberMoreDesc[index].style.maxHeight = '120vh';
    }, 'false')
    document.body.addEventListener('click', () => {
      swiper.autoplay.start();
      teamMemberUnderlinePic[index].style.left = '0';
      teamMemberUnderlinePic[index].style.opacity = '0';
      teamMemberPic[index].style.cursor = 'pointer';
      teamMemberMoreDescParagraph[index].style.opacity = '0';
      teamMemberMoreDescArrow[index].style.opacity = '0';
      teamMemberDesc[index].style.left = '0vw';
      teamMemberName[index].style.left = '0vw';
      teamMemberMoreDesc[index].classList.remove('paddingTopMobile');
      teamMemberMoreDesc[index].style.marginTop = '8vh';
      teamMemberMoreDesc[index].style.opacity = '0';
      return teamMemberMoreDesc[index].style.maxHeight = '0vh';
    }, true)
    })
}





const sectionCircle = document.querySelector('#section-circle')
const followUsImage = document.querySelector('.social-links > svg')


const callbackHero = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-342px)'
      followUsImage.style.opacity = '1'
    }else if(!entry.isIntersecting){
      followUsImage.style.opacity = '0'
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
      sectionCircle.style.transform = 'translateY(-170px)'
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

const callbackAbout2 = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-156px)'
    }
  })
}

const about2 = document.querySelector('#about-2');


window.addEventListener('load', (event) => {
  let observerAbout2;

  observerAbout2 = new IntersectionObserver(callbackAbout2, options);
  observerAbout2.observe(about2);
})

//


// const callbackStatechannels = (entries, observer) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       sectionCircle.style.transform = 'translateY(-97px)'
//     }
//   })
// }

// const statechannels = document.querySelector('#statechannels-main');


// window.addEventListener('load', (event) => {
//   let observerStatechannels;

//   observerStatechannels = new IntersectionObserver(callbackStatechannels, options);
//   observerStatechannels.observe(statechannels);
// })

//

const productIllustration = document.querySelector('#ourproduct-illustration')

const callbackProductSection = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-142px)'
      productIllustration.style.animationName = 'circleSplice'
    }else if(!entry.isIntersecting){
      productIllustration.style.animationName = ''
    }
  })
}

const productSection = document.querySelector('#product-section');


window.addEventListener('load', (event) => {
  let observerProduct;

  observerProduct = new IntersectionObserver(callbackProductSection, options);
  observerProduct.observe(productSection);
})

//


const callbackWhyUse = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-128px)'
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


const callbackBigIllustration = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-114px)'
    }
  })
}

const bigIllustration = document.querySelector('#big-illustration');


window.addEventListener('load', (event) => {
  let observerBigIllustration;

  observerBigIllustration = new IntersectionObserver(callbackBigIllustration, options);
  observerBigIllustration.observe(bigIllustration);
})

//

const callbackTechnology = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-100px)'
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

const callbackAcademic = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-86px)'
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

const callbackCallToAction = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-72px)'
    }
  })
}

const action = document.querySelector('#call-to-action');


window.addEventListener('load', (event) => {
  let observerCallToAction;

  observerCallToAction = new IntersectionObserver(callbackCallToAction , options);
  observerCallToAction.observe(action);
})

//

const callbackTeam = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      sectionCircle.style.transform = 'translateY(-58px)'
      swiper.slideTo(0);
      swiper.autoplay.start()
    }else if(!entry.isIntersecting){
      swiper.autoplay.stop()
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
      sectionCircle.style.transform = 'translateY(-44px)'
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
      sectionCircle.style.transform = 'translateY(-58px)'
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
      sectionCircle.style.transform = 'translateY(-30px)'
    }
  })
}

const contactus = document.querySelector('#contactus-text');


window.addEventListener('load', (event) => {
  let observerContactUs;

  observerContactUs = new IntersectionObserver(callbackContactUs, options);
  observerContactUs.observe(contactus);
})

const callbackWhyUseSlider = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      swiperWhyUse.slideTo(0);
      swiperWhyUse.autoplay.start();
    }else if(!entry.isIntersecting){
      swiperWhyUse.autoplay.stop();
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
