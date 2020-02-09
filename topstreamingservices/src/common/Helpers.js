import $ from 'jquery/src/jquery';
import _ from 'lodash';

const getInt = (val) => {
  if(val) {
    let result = parseInt(val, 10);
    return isNaN(result) ? 0 : result;
  }
  return 0;
}

const composeDevices = (services, devices) => {
  _.map(services, s => {
    let newDevices = [];
    s.devices.forEach(d => {
      if(typeof d === "string") {
        let device = _.find(devices, dev => d === dev.name)
        newDevices.push(!device ? {"name": d} : device);
      }
    });
    if(newDevices.length > 0) s.devices = newDevices;
  });
}

const composeFeatureTooltip = (services, features) => {
  _.map(services, s => {
    s.features.forEach(f => {
      let feature = _.find(features, feat => f.name === feat.name)
      if(feature) {
        if(f.description) {
          f.tooltip = feature.tooltip;
        }
        else {
          f.description = feature.tooltip;
        }
      }
    });
  });
}

const correctHeight = () => {
    var pageWrapper = $('#page-wrapper');
    var navbarHeight = $('nav.navbar-default').height();
    var wrapperHeight = pageWrapper.height();

    if (navbarHeight > wrapperHeight) {
        pageWrapper.css("min-height", navbarHeight + "px");
    }

    if (navbarHeight < wrapperHeight) {
        if (navbarHeight < $(window).height()) {
            pageWrapper.css("min-height", $(window).height() + "px");
        } else {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
    }

    if ($('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeight
  ) {
            pageWrapper.css("min-height", navbarHeight + "px");
        } else {
            pageWrapper.css("min-height", $(window).height() - 60 + "px");
        }
    }
}

const detectBody = () => {
    if ($(document).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
}

const smoothlyMenu = () => {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

export {
  getInt,
  composeDevices,
  composeFeatureTooltip,
  correctHeight,
  detectBody,
  smoothlyMenu
}
