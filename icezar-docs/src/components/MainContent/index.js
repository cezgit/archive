import React, { Component } from 'react'

import PrismCode from "react-prism"

class MainContent extends Component {
    render() {
        return (
            <main className="col-12 col-md-9 col-xl-8 pl-md-5 fd-content space-3" role="main">
                <div className="mb-9">
                    <h1 className="font-weight-medium">Introduction</h1>
                    <p className="lead font-weight-normal">Get started with Space, Responsive Website Template for building responsive, mobile-first sites, with Bootstrap and a template starter page.</p>
                </div>

                <div id="quick-start" className="mb-5">
                    <h2 className="h4">Quick start <a className="anchorjs-link" href="#quick-start" aria-label="Anchor" data-anchorjs-icon="#"></a></h2>
                </div>

                <div id="css" className="mb-9">
                    <h2 className="h4">CSS <a className="anchorjs-link" href="#css" aria-label="Anchor" data-anchorjs-icon="#"></a></h2>
                    <p>Copy-paste the <strong className="text-dark">Bootstrap</strong>, <strong className="text-dark">FontAwesome</strong> and then <strong className="text-dark">Space</strong> stylesheets <code className="highlighter-rouge">&lt;link&gt;</code> into your <code className="highlighter-rouge">&lt;head&gt;</code> before all other stylesheets to load our CSS.</p>

                    <pre>
                        <code className="language-html" data-lang="html">
                            &lt;!-- CSS Global Compulsory --&gt;
                            &lt;link rel="stylesheet" href="../../assets/vendor/bootstrap/css/bootstrap.css"&gt;
              
                            &lt;!-- CSS Implementing Plugins --&gt;
                            &lt;link rel="stylesheet" href="../../assets/vendor/font-awesome/css/fontawesome-all.min.css"&gt;
              
                            &lt;!-- CSS Space Template --&gt;
                            &lt;link rel="stylesheet" href="../../assets/css/theme.css"&gt;
            </code>
                    </pre>
                </div>

                <div id="js" className="mb-9">
                    <h2 className="h4">JS <a className="anchorjs-link" href="#js" aria-label="Anchor" data-anchorjs-icon="#"></a></h2>
                    <p>Many of Bootstrap's (since Space runs on Bootstrap) components require the use of JavaScript to function. Specifically, they require <a href="https://jquery.com">jQuery</a>, <a href="https://popper.js.org/">Popper.js</a>, Bootstrap JavaScript and our own JavaScript plugins. Place the following <code className="highlighter-rouge">&lt;script&gt;</code>s near the end of your pages, right before the closing <code className="highlighter-rouge">&lt;/body&gt;</code> tag, to enable them. jQuery must come first, then Popper.js, Bootstrap's JavaScript, and then our plugins.</p>

                    <p>Bootstrap and Space use <a href="https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/">jQuery's slim build</a>, but the full version is also supported.</p>

                    <p>All Space plugins start with <code className="highlighter-rouge">hs.</code> prefix.</p>

                    <pre>
                        <PrismCode> className="language-html" data-lang="html">
                            &lt;!-- JS Global Compulsory --&gt;
                            &lt;script src="../../assets/vendor/jquery/dist/jquery.min.js"&gt;&lt;/script&gt;
                            &lt;script src="../../assets/vendor/popper.js/dist/umd/popper.min.js"&gt;&lt;/script&gt;
                            &lt;script src="../../assets/vendor/bootstrap/bootstrap.min.js"&gt;&lt;/script&gt;
              
                            &lt;!-- JS Space --&gt;
                            &lt;script src="../../assets/js/hs.core.js"&gt;&lt;/script&gt;
                        </PrismCode>
                    </pre>
                </div>

                <div id="starter-template" className="mb-9">
                    <h2 className="h4">Starter template <a className="anchorjs-link" href="#starter-template" aria-label="Anchor" data-anchorjs-icon="#"></a></h2>
                    <p>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:</p>

                    <pre>
                        <code className="language-html" data-lang="html">
                            &lt;!doctype html&gt;
                            &lt;html lang="en"&gt;
                            &lt;head&gt;
                              &lt;!-- Title --&gt;
                              &lt;title&gt;Hello, world!&lt;/title&gt;
              
                              &lt;!-- Favicon --&gt;
                              &lt;link rel="shortcut icon" href="favicon.ico"&gt;
              
                              &lt;!-- Required meta tags --&gt;
                              &lt;meta charset="utf-8"&gt;
                              &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
              
                              &lt;!-- CSS Global Compulsory --&gt;
                              &lt;link rel="stylesheet" href="../../assets/vendor/bootstrap/css/bootstrap.css"&gt;
              
                              &lt;!-- CSS Implementing Plugins --&gt;
                              &lt;link rel="stylesheet" href="../../assets/vendor/font-awesome/css/fontawesome-all.min.css"&gt;
              
                              &lt;!-- CSS Space Template --&gt;
                              &lt;link rel="stylesheet" href="../../assets/css/theme.css"&gt;
                            &lt;/head&gt;
              
                            &lt;body&gt;
                              &lt;h1&gt;Hello, world!&lt;/h1&gt;
              
                              &lt;!-- JS Global Compulsory --&gt;
                              &lt;script src="../../assets/vendor/jquery/dist/jquery.min.js"&gt;&lt;/script&gt;
                              &lt;script src="../../assets/vendor/popper.js/dist/umd/popper.min.js"&gt;&lt;/script&gt;
                              &lt;script src="../../assets/vendor/bootstrap/bootstrap.min.js"&gt;&lt;/script&gt;
              
                              &lt;!-- JS Space --&gt;
                              &lt;script src="../../assets/js/hs.core.js"&gt;&lt;/script&gt;
                            &lt;/body&gt;
                            &lt;/html&gt;
            </code>
                    </pre>

                    <p>That's all you need for overall page requirements. Visit the <a href="https://getbootstrap.com/docs/4.1/layout/overview/">Bootstrap's Layout docs</a> our official examples to start laying out your site's content and components.</p>
                </div>

                <div id="important-globals" className="mb-9">
                    <h2 className="h4">Important globals <a className="anchorjs-link" href="#important-globals" aria-label="Anchor" data-anchorjs-icon="#"></a></h2>
                    <p>Space employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the <em>normalization</em> of cross browser styles. Let's dive in.</p>
                </div>

                <div id="html5-doctype" className="mb-9">
                    <h2 className="h4">HTML5 doctype <a className="anchorjs-link" href="#html5-doctype" aria-label="Anchor" data-anchorjs-icon="#"></a></h2>
                    <p>Space requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.</p>

                    <pre>
                        <code className="language-html" data-lang="html">
                            &lt;!doctype html&gt;
                            &lt;html lang="en"&gt;
                              ...
                            &lt;/html&gt;
            </code>
                    </pre>
                </div>

                <div id="responsive-meta-tag" className="mb-9">
                    <h2 className="h4">Responsive meta tag <a className="anchorjs-link" href="#responsive-meta-tag" aria-label="Anchor" data-anchorjs-icon="#"></a></h2>
                    <p>Space is developed <em>mobile first</em>, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, <strong className="text-dark">add the responsive viewport meta tag</strong> to your <code className="highlighter-rouge">&lt;head&gt;</code>.</p>

                    <pre>
                        <code className="language-html" data-lang="html">
                            &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
            </code>
                    </pre>

                    <p>You can see an example of this in action in the <a href="#starter-template">starter template</a>.</p>
                </div>
            </main>
        );
    }
}

export default MainContent;