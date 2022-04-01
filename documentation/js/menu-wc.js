'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Climate_Right documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4def2e25ac51c236fa4c021ca6d293ae6afc7157d4dcdf5aedf497f7d283938e933bd63cc1fbb2741b246a33a9071609f9330c2323aadab36f76a0963cda1df9"' : 'data-target="#xs-components-links-module-AppModule-4def2e25ac51c236fa4c021ca6d293ae6afc7157d4dcdf5aedf497f7d283938e933bd63cc1fbb2741b246a33a9071609f9330c2323aadab36f76a0963cda1df9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4def2e25ac51c236fa4c021ca6d293ae6afc7157d4dcdf5aedf497f7d283938e933bd63cc1fbb2741b246a33a9071609f9330c2323aadab36f76a0963cda1df9"' :
                                            'id="xs-components-links-module-AppModule-4def2e25ac51c236fa4c021ca6d293ae6afc7157d4dcdf5aedf497f7d283938e933bd63cc1fbb2741b246a33a9071609f9330c2323aadab36f76a0963cda1df9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormPageModule.html" data-type="entity-link" >FormPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormPageModule-6f753f854ee4b6bd169435064e7b5e2e9b3880548039b0af3bae4d967af30dee791f7c9849215638d824a4ba8ebfaca95f52dff5a8cecd0e10fddf2a0c034a77"' : 'data-target="#xs-components-links-module-FormPageModule-6f753f854ee4b6bd169435064e7b5e2e9b3880548039b0af3bae4d967af30dee791f7c9849215638d824a4ba8ebfaca95f52dff5a8cecd0e10fddf2a0c034a77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormPageModule-6f753f854ee4b6bd169435064e7b5e2e9b3880548039b0af3bae4d967af30dee791f7c9849215638d824a4ba8ebfaca95f52dff5a8cecd0e10fddf2a0c034a77"' :
                                            'id="xs-components-links-module-FormPageModule-6f753f854ee4b6bd169435064e7b5e2e9b3880548039b0af3bae4d967af30dee791f7c9849215638d824a4ba8ebfaca95f52dff5a8cecd0e10fddf2a0c034a77"' }>
                                            <li class="link">
                                                <a href="components/FormPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormPageRoutingModule.html" data-type="entity-link" >FormPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-151c6aeba199139501870deeca9f0c419d95fae9139e355415367e2af35baa40b97c91d92ee3907b2efb6bef0e2f23e4af4c7b23f908cd99fac1d3346b4765c7"' : 'data-target="#xs-components-links-module-HomePageModule-151c6aeba199139501870deeca9f0c419d95fae9139e355415367e2af35baa40b97c91d92ee3907b2efb6bef0e2f23e4af4c7b23f908cd99fac1d3346b4765c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-151c6aeba199139501870deeca9f0c419d95fae9139e355415367e2af35baa40b97c91d92ee3907b2efb6bef0e2f23e4af4c7b23f908cd99fac1d3346b4765c7"' :
                                            'id="xs-components-links-module-HomePageModule-151c6aeba199139501870deeca9f0c419d95fae9139e355415367e2af35baa40b97c91d92ee3907b2efb6bef0e2f23e4af4c7b23f908cd99fac1d3346b4765c7"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});