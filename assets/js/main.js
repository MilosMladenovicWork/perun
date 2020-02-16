"use strict";

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

var scrollRight = document.querySelector('#scroll-right-team');
var scrollRightArrow = document.querySelector('#scroll-right-team img');
var swiper = new Swiper('.swiper-container', {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 110,
  initialSlide: 0,
  centeredSlides: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      initialSlide: 1
    }
  },
  on: {
    reachBeginning: function reachBeginning() {
      scrollRightArrow.style.transform = 'rotate(0deg)';
      document.querySelector('#scroll-right-team tspan').innerHTML = 'To the Right';
    },
    reachEnd: function reachEnd() {
      scrollRightArrow.style.transform = 'rotate(180deg)';
      document.querySelector('#scroll-right-team tspan').innerHTML = 'To the Left';
    }
  }
});
var ourProductRightArrow = document.querySelector('#ourproduct-button-slide #right');
var ourProductLeftArrow = document.querySelector('#ourproduct-button-slide #left');
var swiperOurProduct = new Swiper('.swiper-container-ourproduct', {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 300,
  initialSlide: 0,
  pagination: {
    el: '.swiper-pagination-ourproduct',
    clickable:true
  },
  centeredSlides: true,
  on: {
    reachBeginning: function reachBeginning() {
      ourProductLeftArrow.style.opacity = '0';
    },
    reachEnd: function reachEnd() {
      ourProductRightArrow.style.opacity = '0';
    },
    fromEdge: function fromEdge() {
      ourProductLeftArrow.style.opacity = '1';
      ourProductRightArrow.style.opacity = '1';
    }
  }
});
ourProductRightArrow.addEventListener('click', function () {
    swiperOurProduct.slideNext();
});
ourProductLeftArrow.addEventListener('click', function () {
    swiperOurProduct.slidePrev();
});
scrollRight.addEventListener('click', function () {
  if (scrollRightArrow.style.transform === 'rotate(180deg)') {
    swiper.slidePrev();
  } else {
    swiper.slideNext();
  }
});
var whyUseScrollRight = document.querySelector('#whyuse-scroll-right img');
var swiperWhyUse = new Swiper('.swiper-container-whyuse', {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 100,
  centeredSlides: true,
  autoplay: {
    delay: 7500
  },
  pagination: {
    el: '.swiper-pagination-whyuse',
    clickable: true
  },
  on: {
    reachBeginning: function reachBeginning() {
      whyUseScrollRight.style.transform = 'rotate(0deg)';
    },
    reachEnd: function reachEnd() {
      whyUseScrollRight.style.transform = 'rotate(180deg)';
    }
  }
});
whyUseScrollRight.addEventListener('click', function () {
  if (whyUseScrollRight.style.transform === 'rotate(180deg)') {
    swiperWhyUse.slidePrev();
  } else {
    swiperWhyUse.slideNext();
  }
});
var academicScrollRight = document.querySelector('#academic-scroll-right');
var academicScrollRightArrow = document.querySelector('#academic-scroll-right img');
var swiperAcademic = new Swiper('.swiper-container-academic', {
  grabCursor: false,
  slidesPerView: 1,
  spaceBetween: 100,
  centeredSlides: true,
  on: {
    reachBeginning: function reachBeginning() {
      academicScrollRightArrow.style.transform = 'rotate(0deg)';
    },
    reachEnd: function reachEnd() {
      academicScrollRightArrow.style.transform = 'rotate(180deg)';
    }
  }
});
academicScrollRight.addEventListener('click', function () {
  if (academicScrollRightArrow.style.transform === 'rotate(180deg)') {
    swiperAcademic.slidePrev();
  } else {
    swiperAcademic.slideNext();
  }
});

if (!(/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent))) {
  // This is not internet explorer
  sal({
    threshold: 0.25,
    once: true
  });
}

var impressumPopup = document.getElementById('impressum-popup');
var impressumButton = document.getElementById('impressum');
var closeImpressumButton = document.getElementById('close-impressum-button');
var body = document.querySelector('body');
impressumButton.addEventListener('click', function () {
  impressumPopup.style.opacity = 1;
  impressumPopup.style.zIndex = 100;
  body.style.overflow = 'hidden';
});
closeImpressumButton.addEventListener('click', function () {
  impressumPopup.style.opacity = 0;
  impressumPopup.style.zIndex = -10;
  body.style.overflow = 'auto';
});
var menuButton = document.getElementById('menu');
var menuMobileLinks = document.querySelectorAll('#mobile-menu ul li a');
var menuMobile = document.getElementById('mobile-menu');
menuButton.addEventListener('click', function () {
  menuButton.setAttribute('src', './images/Close_Button.svg');

  if (menuMobile.style.display === 'none') {
    menuMobile.style.display = 'block';
    return setTimeout(function () {
      menuMobile.style.opacity = 1;
    }, 0);
  } else if (menuMobile.style.display === 'block') {
    menuMobile.style.opacity = 0;
    menuButton.setAttribute('src', './images/Menu.svg');
    return setTimeout(function () {
      menuMobile.style.display = 'none';
    }, 500);
  }

  menuMobile.style.display = 'block';
  setTimeout(function () {
    menuMobile.style.opacity = 1;
  }, 0);
});
menuMobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    menuButton.setAttribute('src', './images/Menu.svg');
    menuMobile.style.opacity = 0;
    return setTimeout(function () {
      menuMobile.style.display = 'none';
    }, 500);
  });
});

if (window.outerWidth >= 1200) {
  var teamMember = document.querySelectorAll('.team-member');
  var teamMemberPic = document.querySelectorAll('.team-member .small-container > img:nth-child(1)');
  var teamMemberUnderlinePic = document.querySelectorAll('.team-member .small-container >img:nth-of-type(2)');
  var teamMemberMoreDesc = document.querySelectorAll('.team-member-more-description');
  var teamMemberMoreDescParagraph = document.querySelectorAll('.team-member-more-description p');
  var teamMemberMoreDescArrow = document.querySelectorAll('.team-member-more-description .team-member-description-arrow');
  var teamMemberName = document.querySelectorAll('.team-member-name');
  var teamMemberDesc = document.querySelectorAll('.team-member-description');
  var closeDescriptionButton = document.querySelectorAll('#close-description-button');
  var teamMemberDescContainer = document.querySelectorAll('.team-member-description-container');
  teamMemberPic.forEach(function (memberPic, index) {
    teamMember[index].addEventListener('click', function (event) {
      if (swiper.activeIndex >= index) {
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
      } else {
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
    }, true);
    document.body.addEventListener('click', function () {
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
    }, true);
    closeDescriptionButton[index].addEventListener('click', function () {
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
    }, false);
    teamMember[index].addEventListener('mouseover', function () {
      if (teamMemberPic[index].style.zIndex === '100') {
        return;
      }

      teamMemberDescContainer[index].style.left = '50%';
      teamMemberDescContainer[index].style.transform = 'translate(-50%, 0)';
    });
    teamMember[index].addEventListener('mouseout', function () {
      if (teamMemberDescContainer[index].style.left === '5.62vw') {
        return;
      }

      teamMemberDescContainer[index].style.left = '0%';
      teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
    });
  });
}

swiper.on('slideChange', function () {
  if (window.outerWidth >= 1200) {
    var _teamMember = document.querySelectorAll('.team-member');

    var _teamMemberPic = document.querySelectorAll('.team-member .small-container > img:nth-child(1)');

    var _teamMemberUnderlinePic = document.querySelectorAll('.team-member .small-container >img:nth-of-type(2)');

    var _teamMemberMoreDesc = document.querySelectorAll('.team-member-more-description');

    var _teamMemberMoreDescParagraph = document.querySelectorAll('.team-member-more-description p');

    var _teamMemberMoreDescArrow = document.querySelectorAll('.team-member-more-description .team-member-description-arrow');

    var _teamMemberName = document.querySelectorAll('.team-member-name');

    var _teamMemberDesc = document.querySelectorAll('.team-member-description');

    var _closeDescriptionButton = document.querySelectorAll('#close-description-button');

    var _teamMemberDescContainer = document.querySelectorAll('.team-member-description-container');

    _teamMemberPic.forEach(function (memberPic, index) {
      _teamMember[index].addEventListener('click', function (event) {
        if (swiper.activeIndex >= index) {
          _teamMemberDesc[index].style.left = '0%';
          _teamMemberDesc[index].style.transform = 'translate(0%, 0)';
          _teamMemberName[index].style.left = '0%';
          _teamMemberName[index].style.transform = 'translate(0%, 0)';
          _teamMemberDescContainer[index].style.left = '0%';
          _teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
          _teamMemberUnderlinePic[index].style.left = '5.62vw';
          _teamMemberPic[index].style.zIndex = '100';
          _teamMemberUnderlinePic[index].style.opacity = '1';
          _teamMemberUnderlinePic[index].style.zIndex = '100';
          _teamMemberPic[index].style.cursor = 'auto';
          _teamMemberMoreDescParagraph[index].style.width = '28vw';
          _teamMemberMoreDescParagraph[index].style.opacity = '1';
          _teamMemberMoreDescArrow[index].style.opacity = '1';
          _teamMemberDescContainer[index].style.zIndex = '100';
          _teamMemberDescContainer[index].style.left = '5.62vw';
          _teamMemberDescContainer[index].style.transform = 'translate(0, 0)';
          _teamMemberName[index].style.zIndex = '100';
          _teamMemberMoreDesc[index].style.opacity = '1';
          _teamMemberMoreDesc[index].style.zIndex = '80';
          _teamMemberMoreDesc[index].style.top = '3.33vh';

          _teamMemberMoreDesc[index].classList.add('paddingTop');

          _teamMemberMoreDesc[index].style.left = '3.33vh';
          _teamMemberMoreDesc[index].style.width = '35.57vw';
          _teamMemberMoreDesc[index].style.maxHeight = '160vh';
          _closeDescriptionButton[index].style.left = 'unset';
          _closeDescriptionButton[index].style.top = '5.01vh';
          _closeDescriptionButton[index].style.right = '3.65vw';
        } else {
          _teamMemberDesc[index].style.left = '0%';
          _teamMemberDesc[index].style.transform = 'translate(0%, 0)';
          _teamMemberName[index].style.left = '0%';
          _teamMemberName[index].style.transform = 'translate(0%, 0)';
          _teamMemberDescContainer[index].style.left = '0%';
          _teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
          _teamMemberUnderlinePic[index].style.left = '-18.23vw';
          _teamMemberPic[index].style.zIndex = '100';
          _teamMemberUnderlinePic[index].style.opacity = '1';
          _teamMemberUnderlinePic[index].style.zIndex = '100';
          _teamMemberPic[index].style.cursor = 'auto';
          _teamMemberMoreDescParagraph[index].style.width = '28vw';
          _teamMemberMoreDescParagraph[index].style.opacity = '1';
          _teamMemberMoreDescArrow[index].style.opacity = '1';
          _teamMemberDesc[index].style.left = '-18.23vw';
          _teamMemberDescContainer[index].style.zIndex = '100';
          _teamMemberName[index].style.left = '-18.23vw';
          _teamMemberName[index].style.zIndex = '100';
          _teamMemberMoreDesc[index].style.opacity = '1';
          _teamMemberMoreDesc[index].style.zIndex = '80';
          _teamMemberMoreDesc[index].style.top = '3.33vh';

          _teamMemberMoreDesc[index].classList.add('paddingTop');

          _teamMemberMoreDesc[index].style.left = '-22.25vw';
          _teamMemberMoreDesc[index].style.width = '35.57vw';
          _teamMemberMoreDesc[index].style.maxHeight = '160vh';
          _closeDescriptionButton[index].style.right = 'unset';
          _closeDescriptionButton[index].style.top = '5.01vh';
          _closeDescriptionButton[index].style.left = '3.65vw';
        }
      }, true);

      document.body.addEventListener('click', function () {
        _teamMemberDescContainer[index].style.left = '0%';
        _teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
        _teamMemberUnderlinePic[index].style.left = '2.5vw';
        _teamMemberPic[index].style.zIndex = '70';
        _teamMemberUnderlinePic[index].style.opacity = '0';
        _teamMemberUnderlinePic[index].style.zIndex = '70';
        _teamMemberPic[index].style.cursor = 'pointer';
        _teamMemberMoreDescParagraph[index].style.opacity = '0';
        _teamMemberMoreDescArrow[index].style.opacity = '0';
        _teamMemberDesc[index].style.left = '0vw';
        _teamMemberDescContainer[index].style.zIndex = '70';
        _teamMemberName[index].style.left = '0vw';
        _teamMemberName[index].style.zIndex = '70';
        _teamMemberMoreDesc[index].style.opacity = '0';
        _teamMemberMoreDesc[index].style.zIndex = '60';
        _teamMemberMoreDesc[index].style.top = '0vh';

        _teamMemberMoreDesc[index].classList.remove('paddingTop');

        _teamMemberMoreDesc[index].style.left = '0vh';
        _teamMemberMoreDesc[index].style.width = '15.8vw';
        return _teamMemberMoreDesc[index].style.maxHeight = '';
      }, true);

      _closeDescriptionButton[index].addEventListener('click', function () {
        _teamMemberDescContainer[index].style.left = '0%';
        _teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
        _teamMemberUnderlinePic[index].style.left = '2.5vw';
        _teamMemberPic[index].style.zIndex = '70';
        _teamMemberUnderlinePic[index].style.opacity = '0';
        _teamMemberUnderlinePic[index].style.zIndex = '70';
        _teamMemberPic[index].style.cursor = 'pointer';
        _teamMemberMoreDescParagraph[index].style.opacity = '0';
        _teamMemberMoreDescArrow[index].style.opacity = '0';
        _teamMemberDesc[index].style.left = '0vw';
        _teamMemberDescContainer[index].style.zIndex = '70';
        _teamMemberName[index].style.left = '0vw';
        _teamMemberName[index].style.zIndex = '70';
        _teamMemberMoreDesc[index].style.opacity = '0';
        _teamMemberMoreDesc[index].style.zIndex = '60';
        _teamMemberMoreDesc[index].style.top = '0vh';

        _teamMemberMoreDesc[index].classList.remove('paddingTop');

        _teamMemberMoreDesc[index].style.left = '0vh';
        _teamMemberMoreDesc[index].style.width = '15.8vw';
        return _teamMemberMoreDesc[index].style.maxHeight = '';
      }, false);

      _teamMember[index].addEventListener('mouseover', function () {
        if (_teamMemberPic[index].style.zIndex === '100') {
          return;
        }

        _teamMemberDescContainer[index].style.left = '50%';
        _teamMemberDescContainer[index].style.transform = 'translate(-50%, 0)';
      });

      _teamMember[index].addEventListener('mouseout', function () {
        if (_teamMemberDescContainer[index].style.left === '5.62vw') {
          return;
        }

        _teamMemberDescContainer[index].style.left = '0%';
        _teamMemberDescContainer[index].style.transform = 'translate(0%, 0)';
      });
    });
  }
});

if (window.outerWidth < '1200' && window.outerWidth > '767') {
  var _teamMember2 = document.querySelectorAll('.team-member');

  var _teamMemberPic2 = document.querySelectorAll('.team-member .small-container > img:nth-child(1)');

  var _teamMemberUnderlinePic2 = document.querySelectorAll('.team-member .small-container >img:nth-of-type(2)');

  var _teamMemberMoreDesc2 = document.querySelectorAll('.team-member-more-description');

  var _teamMemberMoreDescParagraph2 = document.querySelectorAll('.team-member-more-description p');

  var _teamMemberMoreDescArrow2 = document.querySelectorAll('.team-member-more-description .team-member-description-arrow');

  var _teamMemberName2 = document.querySelectorAll('.team-member-name');

  var _teamMemberDesc2 = document.querySelectorAll('.team-member-description');

  var _closeDescriptionButton2 = document.querySelectorAll('#close-description-button');

  var _teamMemberDescContainer2 = document.querySelectorAll('.team-member-description-container');

  _teamMemberPic2.forEach(function (memberPic, index) {
    _teamMember2[index].addEventListener('click', function () {
      _teamMemberDesc2[index].style.left = '0%';
      _teamMemberDesc2[index].style.transform = 'translate(0%, 0)';
      _teamMemberName2[index].style.left = '0%';
      _teamMemberName2[index].style.transform = 'translate(0%, 0)';
      _teamMemberDescContainer2[index].style.left = '0%';
      _teamMemberDescContainer2[index].style.transform = 'translate(0%, 0)';
      _teamMemberUnderlinePic2[index].style.left = '5.62vw';
      _teamMemberPic2[index].style.zIndex = '100';
      _teamMemberUnderlinePic2[index].style.opacity = '1';
      _teamMemberUnderlinePic2[index].style.zIndex = '100';
      _teamMemberPic2[index].style.cursor = 'auto';
      _teamMemberMoreDescParagraph2[index].style.opacity = '1';
      _teamMemberMoreDescArrow2[index].style.opacity = '1';
      _teamMemberDescContainer2[index].style.zIndex = '100';
      _teamMemberDescContainer2[index].style.left = '5.62vw';
      _teamMemberDescContainer2[index].style.transform = 'translate(0, 0)';
      _teamMemberName2[index].style.zIndex = '100';
      _teamMemberMoreDesc2[index].style.opacity = '1';
      _teamMemberMoreDesc2[index].style.zIndex = '80';
      _teamMemberMoreDesc2[index].style.top = '3.33vw';

      _teamMemberMoreDesc2[index].classList.add('paddingTopTablet');

      _teamMemberMoreDesc2[index].style.left = '3.33vw';
      _teamMemberMoreDesc2[index].style.width = '50vw';
      _teamMemberMoreDesc2[index].style.maxHeight = '160vh';
      _closeDescriptionButton2[index].style.left = 'unset';
      _closeDescriptionButton2[index].style.top = '5.01vh';
      _closeDescriptionButton2[index].style.right = '3.65vw';
    }, 'false');

    document.body.addEventListener('click', function () {
      _teamMemberDescContainer2[index].style.left = '0%';
      _teamMemberDescContainer2[index].style.transform = 'translate(0%, 0)';
      _teamMemberUnderlinePic2[index].style.left = '2.5vw';
      _teamMemberPic2[index].style.zIndex = '70';
      _teamMemberUnderlinePic2[index].style.opacity = '0';
      _teamMemberUnderlinePic2[index].style.zIndex = '70';
      _teamMemberPic2[index].style.cursor = 'pointer';
      _teamMemberMoreDescParagraph2[index].style.opacity = '0';
      _teamMemberMoreDescArrow2[index].style.opacity = '0';
      _teamMemberDesc2[index].style.left = '0vw';
      _teamMemberDescContainer2[index].style.zIndex = '70';
      _teamMemberName2[index].style.left = '0vw';
      _teamMemberName2[index].style.zIndex = '70';
      _teamMemberMoreDesc2[index].style.opacity = '0';
      _teamMemberMoreDesc2[index].style.zIndex = '60';
      _teamMemberMoreDesc2[index].style.top = '0vh';

      _teamMemberMoreDesc2[index].classList.remove('paddingTopTablet');

      _teamMemberMoreDesc2[index].style.left = '0vh';
      _teamMemberMoreDesc2[index].style.width = '32.5vw';
      return _teamMemberMoreDesc2[index].style.maxHeight = '';
    }, true);

    _closeDescriptionButton2[index].addEventListener('click', function () {
      _teamMemberDescContainer2[index].style.left = '0%';
      _teamMemberDescContainer2[index].style.transform = 'translate(0%, 0)';
      _teamMemberUnderlinePic2[index].style.left = '2.5vw';
      _teamMemberPic2[index].style.zIndex = '70';
      _teamMemberUnderlinePic2[index].style.opacity = '0';
      _teamMemberUnderlinePic2[index].style.zIndex = '70';
      _teamMemberPic2[index].style.cursor = 'pointer';
      _teamMemberMoreDescParagraph2[index].style.opacity = '0';
      _teamMemberMoreDescArrow2[index].style.opacity = '0';
      _teamMemberDesc2[index].style.left = '0vw';
      _teamMemberDescContainer2[index].style.zIndex = '70';
      _teamMemberName2[index].style.left = '0vw';
      _teamMemberName2[index].style.zIndex = '70';
      _teamMemberMoreDesc2[index].style.opacity = '0';
      _teamMemberMoreDesc2[index].style.zIndex = '60';
      _teamMemberMoreDesc2[index].style.top = '0vh';

      _teamMemberMoreDesc2[index].classList.remove('paddingTopTablet');

      _teamMemberMoreDesc2[index].style.left = '0vh';
      _teamMemberMoreDesc2[index].style.width = '32.5vw';
      return _teamMemberMoreDesc2[index].style.maxHeight = '';
    }, false);
  });
}

if (window.outerWidth <= '767') {
  var _teamMember3 = document.querySelectorAll('.team-member');

  var _teamMemberPic3 = document.querySelectorAll('.team-member .small-container > img:nth-child(1)');

  var _teamMemberUnderlinePic3 = document.querySelectorAll('.team-member .small-container >img:nth-of-type(2)');

  var _teamMemberMoreDesc3 = document.querySelectorAll('.team-member-more-description');

  var _teamMemberMoreDescParagraph3 = document.querySelectorAll('.team-member-more-description p');

  var _teamMemberMoreDescArrow3 = document.querySelectorAll('.team-member-more-description .team-member-description-arrow');

  var _teamMemberName3 = document.querySelectorAll('.team-member-name');

  var _teamMemberDesc3 = document.querySelectorAll('.team-member-description');

  var _closeDescriptionButton3 = document.querySelectorAll('#close-description-button');

  var _teamMemberDescContainer3 = document.querySelectorAll('.team-member-description-container');

  _teamMemberPic3.forEach(function (memberPic, index) {
    _teamMember3[index].addEventListener('click', function () {
      // teamMemberDesc[index].style.left = '10%';
      // teamMemberName[index].style.left = '10%';
      // teamMemberUnderlinePic[index].style.opacity = '1';
      // teamMemberUnderlinePic[index].style.left = '10%';
      // teamMemberMoreDescParagraph[index].style.opacity = '1';
      // teamMemberMoreDescArrow[index].style.opacity = '1';
      // teamMemberMoreDesc[index].style.opacity = '1';
      // teamMemberMoreDesc[index].classList.add('paddingTopMobile');
      // teamMemberMoreDesc[index].style.marginTop = '18.52vh';
      // teamMemberMoreDesc[index].style.width = '100%';
      // teamMemberMoreDesc[index].style.maxHeight = '120vh';
      _teamMemberDesc3[index].style.left = '0%';
      _teamMemberDesc3[index].style.transform = 'translate(0%, 0)';
      _teamMemberName3[index].style.left = '0%';
      _teamMemberName3[index].style.transform = 'translate(0%, 0)';
      _teamMemberDescContainer3[index].style.left = '0%';
      _teamMemberDescContainer3[index].style.transform = 'translate(0%, 0)';
      _teamMemberUnderlinePic3[index].style.left = '5.62vw';
      _teamMemberPic3[index].style.zIndex = '100';
      _teamMemberUnderlinePic3[index].style.opacity = '1';
      _teamMemberUnderlinePic3[index].style.zIndex = '100';
      _teamMemberPic3[index].style.cursor = 'auto';
      _teamMemberMoreDescParagraph3[index].style.width = '80%';
      _teamMemberMoreDescParagraph3[index].style.opacity = '1';
      _teamMemberMoreDescArrow3[index].style.opacity = '1';
      _teamMemberDescContainer3[index].style.zIndex = '100';
      _teamMemberDescContainer3[index].style.left = '5.62vw';
      _teamMemberDescContainer3[index].style.transform = 'translate(0, 0)';
      _teamMemberName3[index].style.zIndex = '100';
      _teamMemberMoreDesc3[index].style.opacity = '1';
      _teamMemberMoreDesc3[index].style.zIndex = '80';
      _teamMemberMoreDesc3[index].style.top = '3.33vh';

      _teamMemberMoreDesc3[index].classList.add('paddingTopMobile');

      _teamMemberMoreDesc3[index].style.left = '0';
      _teamMemberMoreDesc3[index].style.width = '100%';
      _teamMemberMoreDesc3[index].style.maxHeight = '160vh';
      _closeDescriptionButton3[index].style.left = 'unset';
      _closeDescriptionButton3[index].style.top = '5.01vh';
      _closeDescriptionButton3[index].style.right = '3.65vw';
      console.log('hey');
    }, 'false');

    document.body.addEventListener('click', function () {
      // teamMemberUnderlinePic[index].style.left = '0';
      // teamMemberUnderlinePic[index].style.opacity = '0';
      // teamMemberPic[index].style.cursor = 'pointer';
      // teamMemberMoreDescParagraph[index].style.opacity = '0';
      // teamMemberMoreDescArrow[index].style.opacity = '0';
      // teamMemberDesc[index].style.left = '0vw';
      // teamMemberName[index].style.left = '0vw';
      // teamMemberMoreDesc[index].classList.remove('paddingTopMobile');
      // teamMemberMoreDesc[index].style.marginTop = '8vh';
      // teamMemberMoreDesc[index].style.opacity = '0';
      // return teamMemberMoreDesc[index].style.maxHeight = '0vh';
      _teamMemberDescContainer3[index].style.left = '0%';
      _teamMemberDescContainer3[index].style.transform = 'translate(0%, 0)';
      _teamMemberUnderlinePic3[index].style.left = '2.5vw';
      _teamMemberPic3[index].style.zIndex = '70';
      _teamMemberUnderlinePic3[index].style.opacity = '0';
      _teamMemberUnderlinePic3[index].style.zIndex = '70';
      _teamMemberPic3[index].style.cursor = 'pointer';
      _teamMemberMoreDescParagraph3[index].style.opacity = '0';
      _teamMemberMoreDescArrow3[index].style.opacity = '0';
      _teamMemberDesc3[index].style.left = '0vw';
      _teamMemberDescContainer3[index].style.zIndex = '70';
      _teamMemberName3[index].style.left = '0vw';
      _teamMemberName3[index].style.zIndex = '70';
      _teamMemberMoreDesc3[index].style.opacity = '0';
      _teamMemberMoreDesc3[index].style.zIndex = '60';
      _teamMemberMoreDesc3[index].style.top = '0vh';

      _teamMemberMoreDesc3[index].classList.remove('paddingTopMobile');

      _teamMemberMoreDesc3[index].style.left = '0vh';
      _teamMemberMoreDesc3[index].style.width = '100%';
      return _teamMemberMoreDesc3[index].style.maxHeight = '';
    }, true);
  });
}

var sectionCircle = document.querySelector('#section-circle');
var followUsImage = document.querySelector('.social-links > svg');

var callbackHero = function callbackHero(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      sectionCircle.style.transform = 'translateY(-342px)';
      followUsImage.style.opacity = '1';
    } else if (!entry.isIntersecting) {
      followUsImage.style.opacity = '0';
    }
  });
};

var hero = document.querySelector('#hero-main');

var rootMargDimens = - window.outerHeight / 2.6 + 'px'

console.log(rootMargDimens)

var options = {
  root: null,
  rootMargin: rootMargDimens,
  threshold: [0]
};
window.addEventListener('load', function (event) {
  var observerAbout;
  observerAbout = new IntersectionObserver(callbackHero, options);
  observerAbout.observe(hero);
}); //

var callbackAbout = function callbackAbout(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      sectionCircle.style.transform = 'translateY(-170px)';
      followUsImage.style.opacity = '0';
    }
  });
};

var about = document.querySelector('#about-text h2');
window.addEventListener('load', function (event) {
  var observerAbout;
  observerAbout = new IntersectionObserver(callbackAbout, options);
  observerAbout.observe(about);
}); //

var callbackAbout2 = function callbackAbout2(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      sectionCircle.style.transform = 'translateY(-156px)';
    }
  });
};

var about2 = document.querySelector('#about-2 #product-list');
window.addEventListener('load', function (event) {
  var observerAbout2;
  observerAbout2 = new IntersectionObserver(callbackAbout2, options);
  observerAbout2.observe(about2);
}); //

var callbackAboutAll = function callbackAboutAll(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      console.log(entry)

      document.querySelectorAll('nav ul li a img').forEach(function(section){
        section.classList.remove('active')
      });
      document.querySelectorAll('nav ul li a img')[0].classList.add('active');
      
      console.log('about')
    } else if(!entry.isIntersecting){
      document.querySelectorAll('nav ul li a img')[0].classList.remove('active');
    }
  });
};

var aboutAll = document.querySelector('#about-all');
window.addEventListener('load', function (event) {
  var observerAboutAll;
  observerAboutAll = new IntersectionObserver(callbackAboutAll, options);
  observerAboutAll.observe(aboutAll);
}); //

var callbackWhyuseAll = function callbackWhyuseAll(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {

      document.querySelectorAll('nav ul li a img').forEach(function(section){
        section.classList.remove('active')
      });
      document.querySelectorAll('nav ul li a img')[1].classList.add('active');
    } else if(!entry.isIntersecting){
      document.querySelectorAll('nav ul li a img')[1].classList.remove('active');
    }
  });
};

var whyuseAll = document.querySelector('#whyuse-all');
window.addEventListener('load', function (event) {
  var observerWhyuseAll;
  observerWhyuseAll = new IntersectionObserver(callbackWhyuseAll, options);
  observerWhyuseAll.observe(whyuseAll);
}); //

var callbackTechAll = function callbackTechAll(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {

      document.querySelectorAll('nav ul li a img').forEach(function(section){
        section.classList.remove('active')
      });
      document.querySelectorAll('nav ul li a img')[2].classList.add('active');
    } else if(!entry.isIntersecting){
      document.querySelectorAll('nav ul li a img')[2].classList.remove('active');
    }
  });
};

var techAll = document.querySelector('#technology-all');
window.addEventListener('load', function (event) {
  var observerTechAll;
  observerTechAll = new IntersectionObserver(callbackTechAll, options);
  observerTechAll.observe(techAll);
}); //
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

var productIllustration = document.querySelector('#ourproduct-illustration');

var callbackProductSection = function callbackProductSection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      sectionCircle.style.transform = 'translateY(-142px)';
      productIllustration.style.animationName = 'rotate';
    } else if (!entry.isIntersecting) {
      productIllustration.style.animationName = '';
      productIllustration.style.animationName = '';
    }
  });
};

var productSection = document.querySelector('#product-section');
window.addEventListener('load', function (event) {
  var observerProduct;
  observerProduct = new IntersectionObserver(callbackProductSection, options);
  observerProduct.observe(productSection);
}); //

var callbackWhyUse = function callbackWhyUse(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      sectionCircle.style.transform = 'translateY(-128px)';
    }
  });
};

var whyuse = document.querySelector('#whyuse-slider');
window.addEventListener('load', function (event) {
  var observerWhyUse;
  observerWhyUse = new IntersectionObserver(callbackWhyUse, options);
  observerWhyUse.observe(whyuse);
}); //

var callbackBigIllustration = function callbackBigIllustration(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      sectionCircle.style.transform = 'translateY(-114px)';
    }
  });
};

var bigIllustration = document.querySelector('#big-illustration');
window.addEventListener('load', function (event) {
  var observerBigIllustration;
  observerBigIllustration = new IntersectionObserver(callbackBigIllustration, options);
  observerBigIllustration.observe(bigIllustration);
}); //

var callbackTechnology = function callbackTechnology(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      console.log(entry)
      sectionCircle.style.transform = 'translateY(-100px)';
    }
  });
};

var technology = document.querySelector('#technology main');
window.addEventListener('load', function (event) {
  var observerTechnology;
  observerTechnology = new IntersectionObserver(callbackTechnology, options);
  observerTechnology.observe(technology);
}); //

var callbackAcademic = function callbackAcademic(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      sectionCircle.style.transform = 'translateY(-86px)';
    }
  });
};

var academic = document.querySelector('#academic-main');
window.addEventListener('load', function (event) {
  var observerAcademic;
  observerAcademic = new IntersectionObserver(callbackAcademic, options);
  observerAcademic.observe(academic);
}); //

var callbackCallToAction = function callbackCallToAction(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      sectionCircle.style.transform = 'translateY(-72px)';
    }
  });
};

var action = document.querySelector('#call-to-action');
window.addEventListener('load', function (event) {
  var observerCallToAction;
  observerCallToAction = new IntersectionObserver(callbackCallToAction, options);
  observerCallToAction.observe(action);
}); //

var callbackTeam = function callbackTeam(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      sectionCircle.style.transform = 'translateY(-58px)';

      document.querySelectorAll('nav ul li a img').forEach(function(section){
        section.classList.remove('active')
      });
      document.querySelectorAll('nav ul li a img')[4].classList.add('active');
    } else if(!entry.isIntersecting){
      document.querySelectorAll('nav ul li a img')[4].classList.remove('active');
    }
  });
};

var team = document.querySelector('#team-members');
window.addEventListener('load', function (event) {
  var observerTeam;
  observerTeam = new IntersectionObserver(callbackTeam, options);
  observerTeam.observe(team);
}); //

var callbackCareer = function callbackCareer(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {

      document.querySelectorAll('nav ul li a img').forEach(function(section){
        section.classList.remove('active')
      });
      sectionCircle.style.transform = 'translateY(-44px)';
      
      document.querySelector('nav ul li:last-of-type a').classList.remove('active-button')
      document.querySelectorAll('nav ul li a img')[5].classList.add('active');
    }else if(!entry.isIntersecting){
      document.querySelectorAll('nav ul li a img')[5].classList.remove('active');
    }
  });
};

var career = document.querySelector('#career');
window.addEventListener('load', function (event) {
  var observerCareer;
  observerCareer = new IntersectionObserver(callbackCareer, options);
  observerCareer.observe(career);
}); //

var callbackPartners = function callbackPartners(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {

      document.querySelectorAll('nav ul li a img').forEach(function(section){
        section.classList.remove('active')
      });
      document.querySelectorAll('nav ul li a img').forEach(function(section){
        section.classList.remove('active')
      });
      sectionCircle.style.transform = 'translateY(-58px)';
      document.querySelectorAll('nav ul li a img')[3].classList.add('active');
    } else if(!entry.isIntersecting){
      document.querySelectorAll('nav ul li a img')[3].classList.remove('active');
    }
  });
};

var partners = document.querySelector('#partners');
window.addEventListener('load', function (event) {
  var observerPartners;
  observerPartners = new IntersectionObserver(callbackPartners, options);
  observerPartners.observe(partners);
}); //

var callbackContactUs = function callbackContactUs(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {

      document.querySelectorAll('nav ul li a img').forEach(function(section){
        section.classList.remove('active')
      });
      sectionCircle.style.transform = 'translateY(-30px)';
      document.querySelector('nav ul li:last-of-type a').classList.add('active-button')
    } else if(!entry.isIntersecting){
      document.querySelector('nav ul li:last-of-type a').classList.remove('active-button')
    }
  });
};

var contactus = document.querySelector('#contactus');
window.addEventListener('load', function (event) {
  var observerContactUs;
  observerContactUs = new IntersectionObserver(callbackContactUs, options);
  observerContactUs.observe(contactus);
});

var callbackWhyUseSlider = function callbackWhyUseSlider(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      swiperWhyUse.slideTo(0);
      swiperWhyUse.autoplay.start();
    } else if (!entry.isIntersecting) {
      swiperWhyUse.autoplay.stop();
    }
  });
};

var swiperSection = document.querySelector('#whyuse-slider');
window.addEventListener('load', function (event) {
  var observerWhyUseSlider;
  observerWhyUseSlider = new IntersectionObserver(callbackWhyUseSlider, options);
  observerWhyUseSlider.observe(swiperSection);
});
var firstIllustration = document.querySelector('#hero-illustration img');
var secondIllustration = document.querySelector('#big-illustration img:first-child');

const formButton = document.querySelector('#form-button')
formButton.addEventListener('click', (e) => {
  e.preventDefault();
})

var teamMembers = document.querySelector('#team-members');
Pace.on('done', function () {
  setTimeout(function () {
    document.querySelector('#logo-loading').style.display = 'none';
    document.querySelector('#loading-text').style.display = 'none';
    document.querySelector('#no-overflow-wrapper').style.visibility = 'visible';
    document.querySelector('nav').style.visibility = 'visible';
    document.querySelector('.social-links').style.visibility = 'visible';
    document.querySelector('.scroll-sign').style.visibility = 'visible';
    document.querySelector('#section-circle').style.visibility = 'visible';
  }, 100);
});