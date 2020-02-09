import React, { Component } from 'react';

class MainNav extends Component {
    render() {
        return (
            <div className="col-12 col-md-3 col-xl-2 fd-sidebar">
                <form className="fd-search d-flex align-items-center">
                    <input id="fd-sidebar-navigation__search-autocomplete" className="form-control form-control-sm" type="text" placeholder="Search..." data-url="assets/include/ajax/autocomplete-data-for-documentation-search.json" />
                    <button className="btn btn-link fd-search-docs-toggle d-md-none p-0 ml-3" type="button"
                        data-toggle="collapse"
                        data-target="#navside-accordion"
                        aria-controls="navside-accordion"
                        aria-expanded="false"
                        aria-label="Toggle docs navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
                            <title>Menu</title>
                            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22" />
                        </svg>
                    </button>
                </form>
                <nav id="navside-accordion" className="fd-navside collapse">
                    <div className="fd-navside__block">
                        <a className="fd-navside__title collapsed" data-toggle="collapse" data-target="#getting-started" aria-expanded="true" aria-controls="getting-started" href="javascript:;">Getting started</a>

                        <ul id="getting-started" className="fd-navside__links collapse show" data-parent="#navside-accordion">
                            <li><a className="active" href="index.html">Introduction</a></li>
                            <li><a href="getting-started/file-structures.html">File structures</a></li>
                            <li><a href="getting-started/gulp.html">Gulp</a></li>
                            <li><a href="getting-started/credits.html">Credits</a></li>
                            <li><a href="getting-started/update.html">Update</a></li>
                            <li><a href="getting-started/changelog.html">Changelog</a></li>
                        </ul>
                    </div>
                    <div className="fd-navside__block">
                        <a className="fd-navside__title" data-toggle="collapse" data-target="#components" aria-expanded="true" aria-controls="components" href="javascript:;">Components</a>

                        <ul id="components" className="fd-navside__links collapse" data-parent="#navside-accordion">
                            <li><a href="components/typography.html">Typography</a></li>
                            <li><a href="components/alerts.html">Alerts</a></li>
                            <li><a href="components/animations.html">Animations</a></li>
                            <li><a href="components/avatars.html">Avatars</a></li>
                            <li><a href="components/badge.html">Badge</a></li>
                            <li><a href="components/bg-video.html">Background Video</a></li>
                            <li><a href="components/buttons.html">Buttons</a></li>
                            <li><a href="components/cards.html">Cards</a></li>
                            <li><a href="components/collapse.html">Collapse</a></li>
                            <li><a href="components/countdown.html">Countdown</a></li>
                            <li><a href="components/counters.html">Counters</a></li>
                            <li><a href="components/cubeportfolio.html">Cubeportfolio</a></li>
                            <li><a href="components/dividers.html">Dividers</a></li>
                            <li><a href="components/unfold.html">Unfold (Dropdown and others)</a></li>
                            <li><a href="components/fancybox.html">Fancybox</a></li>
                            <li><a href="components/forms.html">Forms</a></li>
                            <li><a href="components/input-group.html">Input Groups</a></li>
                            <li><a href="components/google-map.html">Google Map</a></li>
                            <li><a href="components/go-to.html">Go to</a></li>
                            <li><a href="components/headers.html">Headers</a></li>
                            <li><a href="components/header-mega-menu.html">Header Mega Menu</a></li>
                            <li><a href="components/header-searches.html">Header Searches</a></li>
                            <li><a href="components/header-shopping-carts.html">Header Shopping Carts</a></li>
                            <li><a href="components/icons.html">Icons</a></li>
                            <li><a href="components/icon-collections.html">Icon collections</a></li>
                            <li><a href="components/labels.html">Label</a></li>
                            <li><a href="components/list-group.html">List group</a></li>
                            <li><a href="components/malihu-scrollbar.html">Malihu Scrollbar</a></li>
                            <li><a href="components/modal-window.html">Modal Window</a></li>
                            <li><a href="components/pagination.html">Pagination</a></li>
                            <li><a href="components/parallax.html">Parallax</a></li>
                            <li><a href="components/progress.html">Progress</a></li>
                            <li><a href="components/scroll-nav.html">Scroll Nav</a></li>
                            <li><a href="components/show-animation.html">Show Animation</a></li>
                            <li><a href="components/skippy.html">Skippy</a></li>
                            <li><a href="components/slick-carousel.html">Slick Carousel</a></li>
                            <li><a href="components/social-apis.html">Social APIs</a></li>
                            <li><a href="components/step-form.html">Step Form</a></li>
                            <li><a href="components/sticky-block.html">Sticky Block</a></li>
                            <li><a href="components/sticky-footer.html">Sticky Footer</a></li>
                            <li><a href="components/tables.html">Tables</a></li>
                            <li><a href="components/tabs.html">Tabs</a></li>
                            <li><a href="components/typedjs.html">Typedjs</a></li>
                            <li><a href="components/validation.html">Validation</a></li>
                            <li><a href="components/video-player.html">Video Player</a></li>
                        </ul>
                    </div>

                    <div className="fd-navside__block">
                        <a className="fd-navside__title" data-toggle="collapse" data-target="#utilities" aria-expanded="true" aria-controls="utilities" href="javascript:;">Utilities</a>

                        <ul id="utilities" className="fd-navside__links collapse" data-parent="#navside-accordion">
                            <li><a href="utilities/borders.html">Borders</a></li>
                            <li><a href="utilities/colors.html">Colors</a></li>
                            <li><a href="utilities/content-alignments.html">Content Alignments (with Position)</a></li>
                            <li><a href="utilities/position.html">Position</a></li>
                            <li><a href="utilities/sizing.html">Sizing</a></li>
                            <li><a href="utilities/shadows.html">Shadows</a></li>
                            <li><a href="utilities/spacing.html">Spacing</a></li>
                            <li><a href="utilities/others.html">Others</a></li>
                        </ul>
                    </div>

                    <div className="fd-navside__block">
                        <a className="fd-navside__title" data-toggle="collapse" data-target="#customization" aria-expanded="true" aria-controls="customization" href="javascript:;">Customization</a>

                        <ul id="customization" className="fd-navside__links collapse" data-parent="#navside-accordion">
                            <li><a href="customization/css.html">CSS</a></li>
                            <li><a href="customization/sass.html">SASS</a></li>
                            <li><a href="customization/bootstrap-sass.html">Bootstrap SASS</a></li>
                            <li><a href="customization/js.html">JS</a></li>
                            <li><a href="customization/typography.html">Typography</a></li>
                            <li><a href="customization/colors.html">Colors</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default MainNav;