(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss":
  /*!******************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles/index.scss ***!
    \******************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsSrcStylesIndexScss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, ".app-layout {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100%;\n  background-color: #000000;\n  font-family: \"Ubuntu\", Arial, sans-serif;\n}\n.app-layout__page {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.app-layout__content-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n.app-layout__content-wrapper--no-extend {\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n}\n.app-layout__content {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  padding: 5px 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  max-width: 1000px;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n}\n@media (min-width: 992px) {\n  .app-layout__content {\n    padding: 10px 20px;\n  }\n}\n.app-layout__content_footer {\n  -ms-flex-item-align: baseline;\n      align-self: baseline;\n}\n.app-layout__header {\n  z-index: 1000;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  position: -webkit-sticky;\n  position: sticky;\n}\n.app-layout__main {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background-size: 1920px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n.app-layout__footer {\n  background-color: #000000;\n  color: #E9F1F7;\n}\n.burger {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: stretch;\n      justify-content: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n.burger__center {\n  cursor: pointer;\n  position: relative;\n  margin: 8px;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n.burger__line {\n  position: absolute;\n  border-radius: 1px;\n  height: 2px;\n  left: 0;\n  right: 0;\n  background: #D7D7D7;\n  top: 50%;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n  opacity: 1;\n}\n.burger__line:nth-child(1) {\n  -ms-transform: translateY(calc(-50% - 8px));\n      transform: translateY(calc(-50% - 8px));\n}\n.burger__line:nth-child(2) {\n  -ms-transform: translateY(calc(-50%));\n      transform: translateY(calc(-50%));\n}\n.burger__line:nth-child(3) {\n  -ms-transform: translateY(calc(-50% + 8px));\n      transform: translateY(calc(-50% + 8px));\n}\n.burger--opened .burger__line:nth-child(1) {\n  -ms-transform: rotate(-45deg) scale(1.3);\n      transform: rotate(-45deg) scale(1.3);\n}\n.burger--opened .burger__line:nth-child(2) {\n  opacity: 0;\n}\n.burger--opened .burger__line:nth-child(3) {\n  -ms-transform: rotate(45deg) scale(1.3);\n      transform: rotate(45deg) scale(1.3);\n}\n.footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.footer__github {\n  width: 128px;\n}\n.fragment {\n  position: relative;\n  top: -70px;\n  width: 0;\n  height: 0;\n}\n.header-menu {\n  list-style-type: none;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.header-menu__entry {\n  overflow: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  -ms-flex-pack: stretch;\n      justify-content: stretch;\n}\n.header-menu__entry--active .header-menu__link:link, .header-menu__entry--active .header-menu__link:active, .header-menu__entry--active .header-menu__link:visited {\n  color: #98CE00;\n}\n.header-menu__link {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 5px 20px;\n  font-size: 20px;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  text-align: center;\n  display: block;\n  transition: color 0.3s linear;\n}\n@media (min-width: 767px) {\n  .header-menu__link {\n    font-size: 30px;\n  }\n}\n.header-menu__link:link, .header-menu__link:active, .header-menu__link:visited {\n  color: #E9F1F7;\n}\n.header-menu__link:hover {\n  color: #F96900;\n}\n.header {\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px;\n  color: #000000;\n}\n@media (min-width: 767px) {\n  .header {\n    padding: 10px;\n  }\n}\n.header__content {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.header__menu {\n  margin-left: auto;\n  margin-right: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n.header__burger-wrapper {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  right: 0;\n  top: -4px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: stretch;\n      justify-content: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n.header__github {\n  position: absolute;\n  left: 0;\n  top: -4px;\n}\n.header__github-img {\n  height: 40px;\n  width: 40px;\n}\n.main-img {\n  width: 100%;\n  height: 150px;\n  background-image: url(/assets/images/main.png);\n  background-size: auto 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n@media (min-width: 767px) {\n  .main-img {\n    height: 200px;\n  }\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .main-img {\n    background-image: url(/assets/images/main@2x.png);\n  }\n}\n.main-message {\n  min-height: 500px;\n  background-color: rgba(0, 0, 0, 0.85);\n  width: 100%;\n  color: #E9F1F7;\n}\n.main-message__text {\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n}\n.main-project {\n  --hover-time: 0.3s;\n  --hover-func: linear;\n  background-color: #1E212B;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  transition: transform 0.3s linear;\n}\n.main-project__overlay {\n  position: absolute;\n  inset: 0;\n  transition: opacity 0.3s linear;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  pointer-events: none;\n  opacity: 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 20%);\n}\n.main-project__overlay-link {\n  margin: auto auto 10px;\n  padding: 10px 20px;\n  background-color: rgba(0, 0, 0, 0.85);\n  border-radius: 5px;\n  font-weight: bold;\n  border: 1px solid #D7D7D7;\n  text-transform: uppercase;\n  pointer-events: auto;\n  position: relative;\n}\n.main-project__overlay-link, .main-project__overlay-link:link, .main-project__overlay-link:visited {\n  text-decoration: none;\n  color: #98CE00;\n}\n.main-project__overlay-link::after {\n  z-index: 10;\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: opacity 0.3s linear;\n}\n.main-project__overlay-link:hover::after {\n  opacity: 1;\n}\n.main-project__overlay-title {\n  margin: 0 auto auto;\n  padding: 10px 20px;\n  font-weight: bold;\n  color: #FBB02D;\n}\n.main-project__link {\n  cursor: pointer;\n}\n.main-project__img {\n  display: block;\n  width: 100%;\n}\n.main-project__title {\n  font-size: 2rem;\n  color: #98CE00;\n}\n.main-project__tech-list {\n  padding-left: 0;\n  list-style-type: none;\n  display: -ms-flexbox;\n  display: flex;\n}\n.main-project__tech-list-item {\n  padding-left: 5px;\n}\n.main-project__visit-link {\n  font-size: 2rem;\n}\n.main-project__visit-link, .main-project__visit-link:link, .main-project__visit-link:visited {\n  color: #98CE00;\n}\n.main-project::after {\n  transition: opacity var(--hover-time) var(--hover-func);\n  z-index: 10;\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.5);\n  opacity: 0;\n}\n.main-project:hover {\n  -ms-transform: scale(1.02);\n      transform: scale(1.02);\n}\n.main-project:hover::after {\n  opacity: 1;\n}\n.main-project:hover .main-project__overlay {\n  opacity: 1;\n}\n.main-projects {\n  --offset: 10px;\n  --perline: 1;\n}\n@media (min-width: 767px) {\n  .main-projects {\n    --perline: 2;\n  }\n}\n.main-projects__items {\n  list-style-type: none;\n  padding-left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  margin: calc(-1 * var(--offset));\n}\n.main-projects__item {\n  -ms-flex: 0 0 calc(100%/var(--perline) - 2 * var(--offset));\n      flex: 0 0 calc(100%/var(--perline) - 2 * var(--offset));\n  padding: var(--offset);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n}\n.main-title {\n  padding: 20px 20px;\n  font-size: 12px;\n  color: #e0e0e0;\n}\n@media (min-width: 767px) {\n  .main-title {\n    padding: 30px 30px;\n    font-size: 15px;\n  }\n}\n@media (min-width: 992px) {\n  .main-title {\n    padding: 50px 40px;\n    font-size: 17px;\n  }\n}\n.main-title__text {\n  text-align: center;\n}\n.main-title__text--primary {\n  margin: 10px 0 5px;\n}\n.main-title__text--secondary {\n  margin: 10px 0 5px;\n}\n.not-found {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n.page-main__projects-line {\n  margin-top: 20px;\n}\n@media (min-width: 767px) {\n  .page-main__projects-line {\n    margin-top: 30px;\n  }\n}\n@media (min-width: 992px) {\n  .page-main__projects-line {\n    margin-top: 40px;\n  }\n}\n@media (min-width: 1200px) {\n  .page-main__projects-line {\n    margin-top: 70px;\n  }\n}\n.page-main__projects-line a {\n  text-transform: uppercase;\n}\n.project-about__visit-wrapper {\n  margin: 20px 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.project-about__visit-btn {\n  -ms-flex-preferred-size: 200px;\n      flex-basis: 200px;\n  padding: 10px 20px;\n  background-color: rgba(0, 0, 0, 0.85);\n  border-radius: 5px;\n  font-weight: bold;\n  border: 1px solid #D7D7D7;\n  text-transform: uppercase;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n}\n.project-about__visit-btn, .project-about__visit-btn:link, .project-about__visit-btn:visited {\n  text-decoration: none;\n  color: #98CE00;\n}\n.project-about__visit-btn::after {\n  z-index: 10;\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: opacity 0.3s linear;\n}\n.tech-list {\n  --perline: 4;\n}\n.tech-list__items {\n  padding-left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.tech-list__item {\n  list-style-type: none;\n  -ms-flex-preferred-size: calc(100%/var(--perline));\n      flex-basis: calc(100%/var(--perline));\n}\n@media (min-width: 767px) {\n  .tech-list {\n    --perline: 7;\n  }\n}\n.tech-logo {\n  position: relative;\n  padding-top: 100%;\n  width: 100%;\n}\n.tech-logo__img-wrapper {\n  position: absolute;\n  inset: 0;\n  -ms-transform: scale(0.9);\n      transform: scale(0.9);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.tech-logo__img {\n  width: 100%;\n  height: auto;\n}\n.tech-logo__img--angular {\n  -ms-transform: scale(1.1);\n      transform: scale(1.1);\n}\n.tech-logo__img--webpack {\n  -ms-transform: scale(1.3);\n      transform: scale(1.3);\n}\n.tech-logo__img--ngrx {\n  -ms-transform: scale(0.95);\n      transform: scale(0.95);\n}\n.tech-logo__img--nodejs {\n  -ms-transform: scale(0.8);\n      transform: scale(0.8);\n}\n.tech-logo__img--typescript {\n  -ms-transform: scale(0.9);\n      transform: scale(0.9);\n}\n.tech-logo__img--babel {\n  -ms-transform: scale(0.9);\n      transform: scale(0.9);\n}\n.tech-logo__img--gulp {\n  -ms-transform: scale(0.9);\n      transform: scale(0.9);\n}\n.text-page {\n  background-color: #101010;\n  color: #e0e0e0;\n  padding: 20px;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  --radius: 10px;\n  border-radius: var(--radius);\n}\n.text-page--theme--green {\n  position: relative;\n}\n.text-page--theme--green::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  border-radius: var(--radius);\n  box-shadow: 0 0 5px #98CE00;\n  border: 1px solid #98CE00;\n  opacity: 1;\n}\n.text-page--theme--green.inview::after {\n  transition: opacity 1s ease-in;\n}\n.text-page--theme--green.inview--not::after {\n  opacity: 0;\n}\n.text-page--theme--orange {\n  position: relative;\n}\n.text-page--theme--orange::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  border-radius: var(--radius);\n  box-shadow: 0 0 5px #FBB02D;\n  border: 1px solid #FBB02D;\n  opacity: 1;\n}\n.text-page--theme--orange.inview::after {\n  transition: opacity 1s ease-in;\n}\n.text-page--theme--orange.inview--not::after {\n  opacity: 0;\n}\n.text-page--theme--white {\n  position: relative;\n}\n.text-page--theme--white::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  border-radius: var(--radius);\n  box-shadow: 0 0 5px #e0e0e0;\n  border: 1px solid #e0e0e0;\n  opacity: 1;\n}\n.text-page--theme--white.inview::after {\n  transition: opacity 1s ease-in;\n}\n.text-page--theme--white.inview--not::after {\n  opacity: 0;\n}\n.text-page__title {\n  text-align: center;\n  font-size: 30px;\n}\n@media (min-width: 767px) {\n  .text-page__title {\n    font-size: 37px;\n  }\n}\n@media (min-width: 992px) {\n  .text-page__title {\n    font-size: 47px;\n  }\n}\n.text-page--less-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.text-page__li::marker {\n  color: #98CE00;\n}\n.text-page__a:link, .text-page__a:visited {\n  color: #98CE00;\n}\n.text-page__p {\n  font-size: 1.2rem;\n}\n.text-page__p--center {\n  text-align: center;\n}\n.text-page__img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.unfold {\n  position: relative;\n  opacity: 1;\n  transition: opacity 0.5s ease-in, transform 0.5s ease-in;\n  -ms-transform: translate(0, 0);\n      transform: translate(0, 0);\n}\n.unfold--hidden {\n  opacity: 0;\n}\nhtml {\n  height: 100%;\n  overflow-x: hidden;\n}\n.body {\n  background: #000000;\n  margin: 0;\n  padding: 0;\n  min-height: 100%;\n  height: 100%;\n  overflow-x: hidden;\n}", "", {
      "version": 3,
      "sources": ["C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\app-layout.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\special\\colors.scss", "index.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\special\\mixins.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\burger.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\footer.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\fragment.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\header-menu.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\header.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\main-img.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\main-message.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\main-project.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\main-projects.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\main-title.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\not-found.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\page-main.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\project-about.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\tech-list.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\tech-logo.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\text-page.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\unfold.scss", "C:\\Users\\mds3d\\repos\\portfolio-src/src\\styles\\index.scss"],
      "names": [],
      "mappings": "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",
      "file": "index.scss",
      "sourcesContent": [".app-layout {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100%;\r\n    background-color: $col-black;\r\n    font-family: 'Ubuntu', Arial, sans-serif;\r\n\r\n    &__page {\r\n        flex-grow: 1;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    &__content-wrapper {\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-grow: 1;\r\n\r\n        &--no-extend {\r\n            flex-grow: 0;\r\n        }\r\n    }\r\n\r\n    &__content {\r\n        flex-grow: 1;\r\n        padding: 5px 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        max-width: 1000px;\r\n        align-self: stretch;\r\n\r\n        @include respond-to('medium') {\r\n            padding: 10px 20px;\r\n        }\r\n\r\n        &_footer {\r\n            align-self: baseline;\r\n        }\r\n    }\r\n\r\n    &__header {\r\n        z-index: 1000;\r\n        top: 0;\r\n        background-color: rgba(0,0,0,0.9);\r\n        position: sticky;\r\n    }\r\n\r\n    &__main {\r\n        flex-grow: 1;\r\n        display: flex;\r\n        flex-direction: column;\r\n        // background-image: url(/assets/images/digitization.jpg);\r\n        // background: rgba(100, 100, 100, 1);\r\n        background-size: 1920px;\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n        background-attachment: fixed;\r\n    }\r\n\r\n    &__footer {\r\n        background-color: $col-black;\r\n        color: $col-white;\r\n    }\r\n}\r\n", "// $col-white: #FFFFFF;\r\n// $col-blue: #1282A2;\r\n// $col-black: #1E212B;\r\n$col-green: #98CE00;\r\n$col-ddgreen: #000500;\r\n// $col-red: #CF5C36;\r\n$col-white: #E9F1F7;\r\n$col-dwhite: #e0e0e0;\r\n$col-black: #000000;\r\n$col-lblack: #1E212B;\r\n$col-dblue: #1b0075;\r\n$col-ddblue: #090026;\r\n$col-orange: #FBB02D;\r\n$col-llblue: #BFD1E5;\r\n$col-blue: #006992;\r\n$col-ddblue: #00010C;\r\n$col-ghostwhite: #F0EFF4;\r\n$col-blazeoragne: #F96900;\r\n$col-barelywhite: #D7D7D7;\r\n$col-grey: #101010;\r\n$col-lgrey: #E7ECEF;\r\n$col-dgrey: #788585;\r\n$col-heligrey: #A69CAC;\r\n", ".app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background-color: #000000;\n  font-family: \"Ubuntu\", Arial, sans-serif;\n}\n.app-layout__page {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.app-layout__content-wrapper {\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n}\n.app-layout__content-wrapper--no-extend {\n  flex-grow: 0;\n}\n.app-layout__content {\n  flex-grow: 1;\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: column;\n  max-width: 1000px;\n  align-self: stretch;\n}\n@media (min-width: 992px) {\n  .app-layout__content {\n    padding: 10px 20px;\n  }\n}\n.app-layout__content_footer {\n  align-self: baseline;\n}\n.app-layout__header {\n  z-index: 1000;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  position: sticky;\n}\n.app-layout__main {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  background-size: 1920px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n.app-layout__footer {\n  background-color: #000000;\n  color: #E9F1F7;\n}\n\n.burger {\n  flex-grow: 1;\n  display: flex;\n  justify-content: stretch;\n  align-items: stretch;\n}\n.burger__center {\n  cursor: pointer;\n  position: relative;\n  margin: 8px;\n  flex-grow: 1;\n}\n.burger__line {\n  position: absolute;\n  border-radius: 1px;\n  height: 2px;\n  left: 0;\n  right: 0;\n  background: #D7D7D7;\n  top: 50%;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n  opacity: 1;\n}\n.burger__line:nth-child(1) {\n  transform: translateY(calc(-50% - 8px));\n}\n.burger__line:nth-child(2) {\n  transform: translateY(calc(-50%));\n}\n.burger__line:nth-child(3) {\n  transform: translateY(calc(-50% + 8px));\n}\n.burger--opened .burger__line:nth-child(1) {\n  transform: rotate(-45deg) scale(1.3);\n}\n.burger--opened .burger__line:nth-child(2) {\n  opacity: 0;\n}\n.burger--opened .burger__line:nth-child(3) {\n  transform: rotate(45deg) scale(1.3);\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n}\n.footer__github {\n  width: 128px;\n}\n\n.fragment {\n  position: relative;\n  top: -70px;\n  width: 0;\n  height: 0;\n}\n\n.header-menu {\n  list-style-type: none;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex-wrap: wrap;\n}\n.header-menu__entry {\n  overflow: hidden;\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n}\n.header-menu__entry--active .header-menu__link:link, .header-menu__entry--active .header-menu__link:active, .header-menu__entry--active .header-menu__link:visited {\n  color: #98CE00;\n}\n.header-menu__link {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 5px 20px;\n  font-size: 20px;\n  flex-grow: 1;\n  text-align: center;\n  display: block;\n  transition: color 0.3s linear;\n}\n@media (min-width: 767px) {\n  .header-menu__link {\n    font-size: 30px;\n  }\n}\n.header-menu__link:link, .header-menu__link:active, .header-menu__link:visited {\n  color: #E9F1F7;\n}\n.header-menu__link:hover {\n  color: #F96900;\n}\n\n.header {\n  display: flex;\n  padding: 5px;\n  color: #000000;\n}\n@media (min-width: 767px) {\n  .header {\n    padding: 10px;\n  }\n}\n.header__content {\n  flex-grow: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.header__menu {\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  align-items: stretch;\n}\n.header__burger-wrapper {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  right: 0;\n  top: -4px;\n  display: flex;\n  justify-content: stretch;\n  align-items: stretch;\n}\n.header__github {\n  position: absolute;\n  left: 0;\n  top: -4px;\n}\n.header__github-img {\n  height: 40px;\n  width: 40px;\n}\n\n.main-img {\n  width: 100%;\n  height: 150px;\n  background-image: url(/assets/images/main.png);\n  background-size: auto 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n@media (min-width: 767px) {\n  .main-img {\n    height: 200px;\n  }\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .main-img {\n    background-image: url(/assets/images/main@2x.png);\n  }\n}\n\n.main-message {\n  min-height: 500px;\n  background-color: rgba(0, 0, 0, 0.85);\n  width: 100%;\n  color: #E9F1F7;\n}\n.main-message__text {\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n}\n\n.main-project {\n  --hover-time: 0.3s;\n  --hover-func: linear;\n  background-color: #1E212B;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  user-select: none;\n  position: relative;\n  transition: transform 0.3s linear;\n}\n.main-project__overlay {\n  position: absolute;\n  inset: 0;\n  transition: opacity 0.3s linear;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  opacity: 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 20%);\n}\n.main-project__overlay-link {\n  margin: auto auto 10px;\n  padding: 10px 20px;\n  background-color: rgba(0, 0, 0, 0.85);\n  border-radius: 5px;\n  font-weight: bold;\n  border: 1px solid #D7D7D7;\n  text-transform: uppercase;\n  pointer-events: auto;\n  position: relative;\n}\n.main-project__overlay-link, .main-project__overlay-link:link, .main-project__overlay-link:visited {\n  text-decoration: none;\n  color: #98CE00;\n}\n.main-project__overlay-link::after {\n  z-index: 10;\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: opacity 0.3s linear;\n}\n.main-project__overlay-link:hover::after {\n  opacity: 1;\n}\n.main-project__overlay-title {\n  margin: 0 auto auto;\n  padding: 10px 20px;\n  font-weight: bold;\n  color: #FBB02D;\n}\n.main-project__link {\n  cursor: pointer;\n}\n.main-project__img {\n  display: block;\n  width: 100%;\n}\n.main-project__title {\n  font-size: 2rem;\n  color: #98CE00;\n}\n.main-project__tech-list {\n  padding-left: 0;\n  list-style-type: none;\n  display: flex;\n}\n.main-project__tech-list-item {\n  padding-left: 5px;\n}\n.main-project__visit-link {\n  font-size: 2rem;\n}\n.main-project__visit-link, .main-project__visit-link:link, .main-project__visit-link:visited {\n  color: #98CE00;\n}\n.main-project::after {\n  transition: opacity var(--hover-time) var(--hover-func);\n  z-index: 10;\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.5);\n  opacity: 0;\n}\n.main-project:hover {\n  transform: scale(1.02);\n}\n.main-project:hover::after {\n  opacity: 1;\n}\n.main-project:hover .main-project__overlay {\n  opacity: 1;\n}\n\n.main-projects {\n  --offset: 10px;\n  --perline: 1;\n}\n@media (min-width: 767px) {\n  .main-projects {\n    --perline: 2;\n  }\n}\n.main-projects__items {\n  list-style-type: none;\n  padding-left: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: stretch;\n  margin: calc(-1 * var(--offset));\n}\n.main-projects__item {\n  flex: 0 0 calc(100%/var(--perline) - 2 * var(--offset));\n  padding: var(--offset);\n  display: flex;\n  align-items: stretch;\n}\n\n.main-title {\n  padding: 20px 20px;\n  font-size: 12px;\n  color: #e0e0e0;\n}\n@media (min-width: 767px) {\n  .main-title {\n    padding: 30px 30px;\n    font-size: 15px;\n  }\n}\n@media (min-width: 992px) {\n  .main-title {\n    padding: 50px 40px;\n    font-size: 17px;\n  }\n}\n.main-title__text {\n  text-align: center;\n}\n.main-title__text--primary {\n  margin: 10px 0 5px;\n}\n.main-title__text--secondary {\n  margin: 10px 0 5px;\n}\n\n.not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n}\n\n.page-main__projects-line {\n  margin-top: 20px;\n}\n@media (min-width: 767px) {\n  .page-main__projects-line {\n    margin-top: 30px;\n  }\n}\n@media (min-width: 992px) {\n  .page-main__projects-line {\n    margin-top: 40px;\n  }\n}\n@media (min-width: 1200px) {\n  .page-main__projects-line {\n    margin-top: 70px;\n  }\n}\n.page-main__projects-line a {\n  text-transform: uppercase;\n}\n\n.project-about__visit-wrapper {\n  margin: 20px 10px;\n  display: flex;\n  justify-content: center;\n}\n.project-about__visit-btn {\n  flex-basis: 200px;\n  padding: 10px 20px;\n  background-color: rgba(0, 0, 0, 0.85);\n  border-radius: 5px;\n  font-weight: bold;\n  border: 1px solid #D7D7D7;\n  text-transform: uppercase;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n}\n.project-about__visit-btn, .project-about__visit-btn:link, .project-about__visit-btn:visited {\n  text-decoration: none;\n  color: #98CE00;\n}\n.project-about__visit-btn::after {\n  z-index: 10;\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: opacity 0.3s linear;\n}\n\n.tech-list {\n  --perline: 4;\n}\n.tech-list__items {\n  padding-left: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.tech-list__item {\n  list-style-type: none;\n  flex-basis: calc(100%/var(--perline));\n}\n@media (min-width: 767px) {\n  .tech-list {\n    --perline: 7;\n  }\n}\n\n.tech-logo {\n  position: relative;\n  padding-top: 100%;\n  width: 100%;\n}\n.tech-logo__img-wrapper {\n  position: absolute;\n  inset: 0;\n  transform: scale(0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.tech-logo__img {\n  width: 100%;\n  height: auto;\n}\n.tech-logo__img--angular {\n  transform: scale(1.1);\n}\n.tech-logo__img--webpack {\n  transform: scale(1.3);\n}\n.tech-logo__img--ngrx {\n  transform: scale(0.95);\n}\n.tech-logo__img--nodejs {\n  transform: scale(0.8);\n}\n.tech-logo__img--typescript {\n  transform: scale(0.9);\n}\n.tech-logo__img--babel {\n  transform: scale(0.9);\n}\n.tech-logo__img--gulp {\n  transform: scale(0.9);\n}\n\n.text-page {\n  background-color: #101010;\n  color: #e0e0e0;\n  padding: 20px;\n  flex-grow: 1;\n  --radius: 10px;\n  border-radius: var(--radius);\n}\n.text-page--theme--green {\n  position: relative;\n}\n.text-page--theme--green::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  border-radius: var(--radius);\n  box-shadow: 0 0 5px #98CE00;\n  border: 1px solid #98CE00;\n  opacity: 1;\n}\n.text-page--theme--green.inview::after {\n  transition: opacity 1s ease-in;\n}\n.text-page--theme--green.inview--not::after {\n  opacity: 0;\n}\n.text-page--theme--orange {\n  position: relative;\n}\n.text-page--theme--orange::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  border-radius: var(--radius);\n  box-shadow: 0 0 5px #FBB02D;\n  border: 1px solid #FBB02D;\n  opacity: 1;\n}\n.text-page--theme--orange.inview::after {\n  transition: opacity 1s ease-in;\n}\n.text-page--theme--orange.inview--not::after {\n  opacity: 0;\n}\n.text-page--theme--white {\n  position: relative;\n}\n.text-page--theme--white::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  border-radius: var(--radius);\n  box-shadow: 0 0 5px #e0e0e0;\n  border: 1px solid #e0e0e0;\n  opacity: 1;\n}\n.text-page--theme--white.inview::after {\n  transition: opacity 1s ease-in;\n}\n.text-page--theme--white.inview--not::after {\n  opacity: 0;\n}\n.text-page__title {\n  text-align: center;\n  font-size: 30px;\n}\n@media (min-width: 767px) {\n  .text-page__title {\n    font-size: 37px;\n  }\n}\n@media (min-width: 992px) {\n  .text-page__title {\n    font-size: 47px;\n  }\n}\n.text-page--less-content {\n  display: flex;\n  flex-direction: column;\n}\n.text-page__li::marker {\n  color: #98CE00;\n}\n.text-page__a:link, .text-page__a:visited {\n  color: #98CE00;\n}\n.text-page__p {\n  font-size: 1.2rem;\n}\n.text-page__p--center {\n  text-align: center;\n}\n.text-page__img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.unfold {\n  position: relative;\n  opacity: 1;\n  transition: opacity 0.5s ease-in, transform 0.5s ease-in;\n  transform: translate(0, 0);\n}\n.unfold--hidden {\n  opacity: 0;\n}\n\nhtml {\n  height: 100%;\n  overflow-x: hidden;\n}\n\n.body {\n  background: #000000;\n  margin: 0;\n  padding: 0;\n  min-height: 100%;\n  height: 100%;\n  overflow-x: hidden;\n}", "$breakpoints: (\r\n    'small':  767px,\r\n    'medium': 992px,\r\n    'large':  1200px,\r\n) !default;\r\n\r\n/// Mixin to manage responsive breakpoints\r\n/// @author Hugo Giraudel\r\n/// @param {String} $breakpoint - Breakpoint name\r\n/// @require $breakpoints\r\n@mixin respond-to($breakpoint) {\r\n    // If the key exists in the map\r\n    @if map-has-key($breakpoints, $breakpoint) {\r\n        // Prints a media query based on the value\r\n        @media (min-width: map-get($breakpoints, $breakpoint)) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    // If the key doesn't exist in the map\r\n    @else {\r\n        @warn \"Unfortunately, no value could be retrieved from `#{$breakpoint}`. \"\r\n            + \"Available breakpoints are: #{map-keys($breakpoints)}.\";\r\n    }\r\n}\r\n\r\n@mixin retina() {\r\n    @media only screen and (-webkit-min-device-pixel-ratio: 2),\r\n        only screen and (min--moz-device-pixel-ratio: 2),\r\n        only screen and (-o-min-device-pixel-ratio: 2/1),\r\n        only screen and (min-device-pixel-ratio: 2),\r\n        only screen and (min-resolution: 192dpi),\r\n        only screen and (min-resolution: 2dppx) {\r\n        @content;\r\n    }\r\n}\r\n", ".burger {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: stretch;\r\n    align-items: stretch;\r\n\r\n    &__center {\r\n        cursor: pointer;\r\n        position: relative;\r\n        margin: 8px;\r\n        flex-grow: 1;\r\n    }\r\n\r\n    &__line {\r\n        position: absolute;\r\n        border-radius: 1px;\r\n        height: 2px;\r\n        left: 0;\r\n        right: 0;\r\n        background: $col-barelywhite;\r\n        top: 50%;\r\n        transition: transform 0.3s ease, opacity 0.3s ease;\r\n        opacity: 1;\r\n\r\n        &:nth-child(1) {\r\n            transform: translateY(calc(-50% - 8px));\r\n        }\r\n\r\n        &:nth-child(2) {\r\n            transform: translateY(calc(-50%));\r\n        }\r\n\r\n        &:nth-child(3) {\r\n            transform: translateY(calc(-50% + 8px));\r\n        }\r\n    }\r\n\r\n    &--opened {\r\n        .burger__line {\r\n            &:nth-child(1) {\r\n                transform: rotate(-45deg) scale(1.3);\r\n            }\r\n\r\n            &:nth-child(2) {\r\n                opacity: 0;\r\n            }\r\n\r\n            &:nth-child(3) {\r\n                transform: rotate(45deg) scale(1.3);\r\n            }\r\n        }\r\n    }\r\n}\r\n", ".footer {\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    &__github {\r\n        width: 128px;\r\n    }\r\n\r\n}\r\n", ".fragment {\r\n    position: relative;\r\n    top: -70px;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n", ".header-menu {\r\n    list-style-type: none;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    padding-left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    flex-wrap: wrap;\r\n\r\n    // &:not(.header-menu--mobile--open) {\r\n    //     .header-menu__entry:not(.header-menu__entry--active) {\r\n    //         height: 0;\r\n    //     }\r\n\r\n    //     @include respond-to('small') {\r\n    //         .header-menu__entry:not(.header-menu__entry--active) {\r\n    //             height: auto;\r\n    //         }\r\n    //     }\r\n    // }\r\n\r\n    // @include respond-to('small') {\r\n    //     flex-direction: row;\r\n    // }\r\n\r\n    &__entry {\r\n        overflow: hidden;\r\n        display: flex;\r\n        align-items: stretch;\r\n        justify-content: stretch;\r\n\r\n        &--active {\r\n            .header-menu__link {\r\n                &:link,&:active,&:visited {\r\n                    color: $col-green;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &__link {\r\n        display: flex;\r\n        align-items: center;\r\n        text-decoration: none;\r\n        text-transform: uppercase;\r\n        padding: 5px 20px;\r\n        font-size: 20px;\r\n        flex-grow: 1;\r\n        text-align: center;\r\n        display: block;\r\n        transition: color 0.3s linear;\r\n\r\n        @include respond-to('small') {\r\n            font-size: 30px;\r\n        }\r\n\r\n        &:link,&:active,&:visited {\r\n            color: $col-white;\r\n        }\r\n\r\n        &:hover {\r\n            color: $col-blazeoragne;\r\n        }\r\n    }\r\n}\r\n", ".header {\r\n    display: flex;\r\n    padding: 5px;\r\n    color: $col-black;\r\n\r\n    @include respond-to('small') {\r\n        padding: 10px;\r\n    }\r\n\r\n    &__content {\r\n        flex-grow: 1;\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    &__menu {\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        display: flex;\r\n        align-items: stretch;\r\n    }\r\n\r\n    &__burger-wrapper {\r\n        position: absolute;\r\n        width: 40px;\r\n        height: 40px;\r\n        right: 0;\r\n        top: -4px;\r\n        display: flex;\r\n        justify-content: stretch;\r\n        align-items: stretch;\r\n    }\r\n\r\n    &__github {\r\n        position: absolute;\r\n        left: 0;\r\n        top: -4px;\r\n    }\r\n\r\n    &__github-img {\r\n        height: 40px;\r\n        width: 40px;\r\n    }\r\n}\r\n", ".main-img {\r\n    width: 100%;\r\n    height: 150px;\r\n\r\n    background-image: url(/assets/images/main.png);\r\n    background-size: auto 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n\r\n    @include respond-to('small') {\r\n        height: 200px;\r\n    }\r\n\r\n    @include retina() {\r\n        background-image: url(/assets/images/main@2x.png);\r\n    }\r\n}\r\n", ".main-message {\r\n    min-height: 500px;\r\n    background-color: rgba(0, 0, 0, 0.85);\r\n    width: 100%;\r\n    color: $col-white;\r\n\r\n    &__text {\r\n        font-size: 27px;\r\n        line-height: 32px;\r\n        text-align: center;\r\n    }\r\n}\r\n", ".main-project {\r\n\r\n    --hover-time: 0.3s;\r\n    --hover-func: linear;\r\n\r\n    background-color: $col-lblack;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    // border: 1px solid $col-green;\r\n    // border-radius: 10px;\r\n    // padding: 20px;\r\n    user-select: none;\r\n    position: relative;\r\n    transition: transform 0.3s linear;\r\n\r\n    &__overlay {\r\n        position: absolute;\r\n        inset: 0;\r\n        transition: opacity 0.3s linear;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        pointer-events: none;\r\n        opacity: 0;\r\n        background:\r\n            // linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 20%),\r\n            linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 20%);\r\n    }\r\n\r\n    &__overlay-link {\r\n        margin: auto auto 10px;\r\n        padding: 10px 20px;\r\n        background-color: rgba($col-black, 0.85);\r\n        border-radius: 5px;\r\n        font-weight: bold;\r\n        border: 1px solid $col-barelywhite;\r\n        text-transform: uppercase;\r\n        pointer-events: auto;\r\n        position: relative;\r\n\r\n        &, &:link, &:visited {\r\n            text-decoration: none;\r\n            color: $col-green;\r\n        }\r\n\r\n        &::after {\r\n            z-index: 10;\r\n            pointer-events: none;\r\n            content: \"\";\r\n            position: absolute;\r\n            inset: 0;\r\n            // box-shadow: 0 0 50px rgba($col-black, 0.5);\r\n            opacity: 0;\r\n            transition: opacity 0.3s linear;\r\n        }\r\n\r\n        &:hover {\r\n            &::after {\r\n                opacity: 1;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__overlay-title {\r\n        // text-shadow: 0 0 10px black;\r\n        margin: 0 auto auto;\r\n        padding: 10px 20px;\r\n        font-weight: bold;\r\n        color: $col-orange;\r\n    }\r\n\r\n    &__link {\r\n        cursor: pointer;\r\n    }\r\n\r\n    &__img {\r\n        display: block;\r\n        width: 100%;\r\n    }\r\n\r\n    &__title {\r\n        font-size: 2rem;\r\n        color: $col-green;\r\n    }\r\n\r\n    &__tech-list {\r\n        padding-left: 0;\r\n        list-style-type: none;\r\n        display: flex;\r\n    }\r\n\r\n    &__tech-list-item {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    &__visit-link {\r\n        font-size: 2rem;\r\n\r\n        &, &:link, &:visited {\r\n            color: $col-green;\r\n        }\r\n    }\r\n\r\n    &::after {\r\n        transition: opacity var(--hover-time) var(--hover-func);\r\n        z-index: 10;\r\n        pointer-events: none;\r\n        content: \"\";\r\n        position: absolute;\r\n        inset: 0;\r\n        box-shadow: 0 0 50px 10px rgba($col-black, 0.5);\r\n        opacity: 0;\r\n    }\r\n\r\n    &:hover {\r\n        transform: scale(1.02);\r\n\r\n        &::after {\r\n            opacity: 1;\r\n        }\r\n\r\n        .main-project__overlay {\r\n            opacity: 1;\r\n        }\r\n    }\r\n\r\n}\r\n", ".main-projects {\r\n    --offset: 10px;\r\n    --perline: 1;\r\n\r\n    @include respond-to('small') {\r\n        --perline: 2;\r\n    }\r\n\r\n    &__items {\r\n        list-style-type: none;\r\n        padding-left: 0;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        align-items: stretch;\r\n        margin: calc(-1 * var(--offset));\r\n    }\r\n\r\n    &__item {\r\n        flex: 0 0 calc(100%/var(--perline) - 2 * var(--offset));\r\n        padding: var(--offset);\r\n        display: flex;\r\n        align-items: stretch;\r\n    }\r\n}\r\n", ".main-title {\r\n    padding: 20px 20px;\r\n    font-size: 12px;\r\n\r\n    @include respond-to('small') {\r\n        padding: 30px 30px;\r\n        font-size: 15px;\r\n    }\r\n\r\n    @include respond-to('medium') {\r\n        padding: 50px 40px;\r\n        font-size: 17px;\r\n    }\r\n\r\n    color: $col-dwhite;\r\n\r\n    &__text {\r\n        text-align: center;\r\n\r\n        &--primary {\r\n            margin: 10px 0 5px;\r\n        }\r\n\r\n        &--secondary {\r\n            margin: 10px 0 5px;\r\n        }\r\n    }\r\n\r\n}\r\n", ".not-found {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n}\r\n", ".page-main {\r\n    &__projects-line {\r\n        margin-top: 20px;\r\n\r\n        @include respond-to('small') {\r\n            margin-top: 30px;\r\n        }\r\n\r\n        @include respond-to('medium') {\r\n            margin-top: 40px;\r\n        }\r\n\r\n        @include respond-to('large') {\r\n            margin-top: 70px;\r\n        }\r\n\r\n        a {\r\n            text-transform: uppercase;\r\n        }\r\n    }\r\n}\r\n", ".project-about {\r\n\r\n    &__visit-wrapper {\r\n        margin: 20px 10px;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    &__visit-btn {\r\n        flex-basis: 200px;\r\n        padding: 10px 20px;\r\n        background-color: rgba($col-black, 0.85);\r\n        border-radius: 5px;\r\n        font-weight: bold;\r\n        border: 1px solid $col-barelywhite;\r\n        text-transform: uppercase;\r\n        pointer-events: auto;\r\n        position: relative;\r\n        text-align: center;\r\n\r\n        &, &:link, &:visited {\r\n            text-decoration: none;\r\n            color: $col-green;\r\n        }\r\n\r\n        &::after {\r\n            z-index: 10;\r\n            pointer-events: none;\r\n            content: \"\";\r\n            position: absolute;\r\n            inset: 0;\r\n            // box-shadow: 0 0 50px rgba($col-black, 0.5);\r\n            opacity: 0;\r\n            transition: opacity 0.3s linear;\r\n        }\r\n    }\r\n}\r\n", ".tech-list {\r\n    // --offset: 10px;\r\n    --perline: 4;\r\n\r\n    &__items {\r\n        padding-left: 0;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        align-items: center;\r\n        // margin: var(--offset);\r\n    }\r\n\r\n    &__item {\r\n        // margin: var(--offset);\r\n        list-style-type: none;\r\n        // flex-basis: calc(100%/7 - 2 * var(--offset));\r\n        flex-basis: calc(100%/var(--perline));\r\n    }\r\n\r\n    @include respond-to('small') {\r\n        --perline: 7;\r\n    }\r\n}\r\n", ".tech-logo {\r\n    position: relative;\r\n    padding-top: 100%;\r\n    width: 100%;\r\n\r\n    &__img-wrapper {\r\n        position: absolute;\r\n        inset: 0;\r\n        transform: scale(0.9);\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    &__img {\r\n        width: 100%;\r\n        height: auto;\r\n\r\n        &--angular {\r\n            transform: scale(1.1);\r\n        }\r\n\r\n        &--webpack {\r\n            transform: scale(1.3);\r\n        }\r\n\r\n        &--ngrx {\r\n            transform: scale(0.95);\r\n        }\r\n\r\n        &--nodejs {\r\n            transform: scale(0.8);\r\n        }\r\n\r\n        &--typescript {\r\n            transform: scale(0.9);\r\n        }\r\n\r\n        &--babel {\r\n            transform: scale(0.9);\r\n        }\r\n\r\n        &--gulp {\r\n            transform: scale(0.9);\r\n        }\r\n    }\r\n}\r\n", ".text-page {\r\n    background-color: $col-grey;\r\n    // background-color: rgba(240, 239, 244, 0.97);\r\n    color: $col-dwhite;\r\n    padding: 20px;\r\n    flex-grow: 1;\r\n    --radius: 10px;\r\n    border-radius: var(--radius);\r\n\r\n    &--theme {\r\n        &--green {\r\n            position: relative;\r\n\r\n            &::after {\r\n                content: \"\";\r\n                position: absolute;\r\n                inset: 0;\r\n                pointer-events: none;\r\n                border-radius: var(--radius);\r\n                box-shadow: 0 0 5px $col-green;\r\n                border: 1px solid $col-green;\r\n                opacity: 1;\r\n            }\r\n\r\n            &.inview {\r\n                &::after {\r\n                    transition: opacity 1s ease-in;\r\n                }\r\n            }\r\n\r\n            &.inview--not {\r\n                &::after {\r\n                    opacity: 0;\r\n                }\r\n            }\r\n        }\r\n\r\n        &--orange {\r\n            position: relative;\r\n\r\n            &::after {\r\n                content: \"\";\r\n                position: absolute;\r\n                inset: 0;\r\n                pointer-events: none;\r\n                border-radius: var(--radius);\r\n                box-shadow: 0 0 5px $col-orange;\r\n                border: 1px solid $col-orange;\r\n                opacity: 1;\r\n            }\r\n\r\n            &.inview {\r\n                &::after {\r\n                    transition: opacity 1s ease-in;\r\n                }\r\n            }\r\n\r\n            &.inview--not {\r\n                &::after {\r\n                    opacity: 0;\r\n                }\r\n            }\r\n        }\r\n\r\n        &--white {\r\n            position: relative;\r\n\r\n            &::after {\r\n                content: \"\";\r\n                position: absolute;\r\n                inset: 0;\r\n                pointer-events: none;\r\n                border-radius: var(--radius);\r\n                box-shadow: 0 0 5px $col-dwhite;\r\n                border: 1px solid $col-dwhite;\r\n                opacity: 1;\r\n            }\r\n\r\n            &.inview {\r\n                &::after {\r\n                    transition: opacity 1s ease-in;\r\n                }\r\n            }\r\n\r\n            &.inview--not {\r\n                &::after {\r\n                    opacity: 0;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        text-align: center;\r\n        font-size: 30px;\r\n\r\n        @include respond-to('small') {\r\n            font-size: 37px;\r\n        }\r\n\r\n        @include respond-to('medium') {\r\n            font-size: 47px;\r\n        }\r\n\r\n    }\r\n\r\n    &--less-content {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    &__li {\r\n        &::marker {\r\n            color: $col-green;\r\n        }\r\n    }\r\n\r\n    &__a {\r\n        &:link, &:visited {\r\n            color: $col-green;\r\n        }\r\n    }\r\n\r\n    &__p {\r\n        font-size: 1.2rem;\r\n\r\n        &--center {\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        display: block;\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n}\r\n", ".unfold {\r\n    position: relative;\r\n    opacity: 1;\r\n    transition: opacity 0.5s ease-in, transform 0.5s ease-in;\r\n    transform: translate(0, 0);\r\n\r\n    &--hidden {\r\n        opacity: 0;\r\n    }\r\n}\r\n", "@import 'special/colors.scss';\r\n@import 'special/mixins.scss';\r\n\r\n@import 'app-layout.scss';\r\n@import 'burger.scss';\r\n@import 'footer.scss';\r\n@import 'fragment.scss';\r\n@import 'header-menu.scss';\r\n@import 'header.scss';\r\n@import 'main-img.scss';\r\n@import 'main-message.scss';\r\n@import 'main-project.scss';\r\n@import 'main-projects.scss';\r\n@import 'main-title.scss';\r\n@import 'not-found.scss';\r\n@import 'page-main.scss';\r\n@import 'project-about.scss';\r\n@import 'tech-list.scss';\r\n@import 'tech-logo.scss';\r\n@import 'text-page.scss';\r\n@import 'unfold.scss';\r\n\r\nhtml {\r\n    height: 100%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.body {\r\n    background: $col-black;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100%;\r\n    height: 100%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles/index.scss":
  /*!*******************************!*\
    !*** ./src/styles/index.scss ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function srcStylesIndexScss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./index.scss */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!*************************************!*\
    !*** multi ./src/styles/index.scss ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\mds3d\repos\portfolio-src\src\styles\index.scss */
    "./src/styles/index.scss");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map