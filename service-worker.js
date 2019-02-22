/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","cee7b907df32eceea722c055c1d52cbd"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e65e6991e88cc6c1f498e5d606abbf88"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","835d287fbd362c3b57a52e0cdc33dce0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","8467a1dab21f218077bf92e7189cb3a9"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","5529acefce4975694971ae6fd540422b"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","a7d8025c603afa9077925a947b115308"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","676bd796090c719dba4ab8b037340742"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","8a3de0b0b14d71e1d05553d6dc421081"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","683b8f8db7e9b980ba41789a128d3c1d"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","a3be32adb7a5a17dcc6fea43303b4420"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","88f386d18aefa2d926a18b9380a2975a"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b06f2b825fd7534f0d3ab0a79405a5e0"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9299b7292b8c721074e74aea37537064"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9c369d1b8651604c92c7870d23ea3e19"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","a424838f012241cf12c0f5230a58586a"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","3c0c79a34c45478b9297a8ac003b41c7"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","47137ff2b014728e28195df671f5b4aa"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","bc9433759080d7850c4e1007a1eba5fe"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","5934515bdb632b52c49c4e5be83cb58d"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","893533e73fab75b4bc77c974402f9b7c"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","b2f2d34201e21bb4698fb30f746ad059"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","a313b8f5a970e117a970f4e2d7b33643"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","a01134edda73ad82efa4144fef48d018"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","dac9164262be41206b51929683274249"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","5dd37d57161862e0296c82b644fccac7"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","7c6025003fbc1d8acb8ef430ead1118d"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","66b4a067486c2648ecdb8598c532c353"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","ad25643d1467d2024b95a84891f2e37f"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","621fe20fe83f5c5926c2b8d5f92a08b9"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","1e8e4dd3b22039e5698e3a45396b76ee"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","2a99c548416295e2d6458b85974301cd"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","908b5374d38333fd3c4da352a60af52d"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","de21820eb83692d06cab035ffc71688e"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","d01e26b7c7f7bebce37f4c877ad06347"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","e995c5cc9c8ff47ce775cf6c664921e3"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","5a6a8c8818050016e96b90a50b619fe3"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","3479a2dab7cbff8a47b348cd88e7934d"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","0cbf9f1d3fb114b9e12bb7dd6283e90d"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","f306ccfe243325e3b3c0f55e180ca3e8"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","3d6cf4987732865209a1b7651c7d41c8"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","ddeebff7cc635f859d77e501eee5053c"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","7d4067b93d36a69641f77e7e632c1d6d"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","205a61593f780b0d02620c7e59f4be58"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","c4e5454d7f26a5a5c65524d14b4ba318"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b1c749d3c46f9ad777fffb8a57b93c7c"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","2c5a656a0ec7cea1a33dfbfe1bc8fe19"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","1dd9d2fc22a0d97f069e6e73f9f4d3be"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","946576b84be84961a95f9c261c235d79"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","9bce1cebb476da4c1b66e8745814d44d"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","baea9e991fe5b5162b7cb6e8cde96d4b"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","126e6a824d7a86afe8579e0ed78939f3"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","0c47b0d1b151e97678431da55a3a6f18"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","a465328187e12ffef8524c567e54b914"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e76b487e20846c5824e93a526d2ea648"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","0a4d5c3c14209e8a0eae0459de263e8b"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","431623ad8ab1475e1c50ec9d8553baf0"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","db1fed2e5ce6f50d466103e591850e22"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","81f535436be41b45084e4094d8e139f7"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","d19be56683d7e0f77b044e1926b1f50d"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","c40315625efd1df6d4a4f82580637db6"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","240625c51fe3f8b56841a87b251303b9"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","fffb388cf8b5755b0a2920d4834d6ccd"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","fb10bab026d6d675107436e25822ca1a"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","917d619bca913079ae43f6583a82559f"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","cd87006253564f38c1851888a4ffa88e"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","e75a789c0ddf1dc127fae78ddf81f011"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","25a0bb7d5c2031f413c5fb9da84f0efe"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","5c35b730e6267a64379b4cfda647381f"],["C:/lmislm.github.io/public/about/index.html","63f1480402242766170a515cecdcb641"],["C:/lmislm.github.io/public/archives/2016/01/index.html","fe865044149f0f85bad24bae5c6f52b0"],["C:/lmislm.github.io/public/archives/2016/03/index.html","b75b510d0c238367a75e08c34eeefcbf"],["C:/lmislm.github.io/public/archives/2016/index.html","beb6a1925b7c1b66cf8c4631208cee0c"],["C:/lmislm.github.io/public/archives/2017/01/index.html","8b8dc275afe6bf124a24feb625e188a1"],["C:/lmislm.github.io/public/archives/2017/03/index.html","af3a7f2d28ceb603ce3f46a6b2334159"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f5cf5e2ff984b951b31b15f182f44af5"],["C:/lmislm.github.io/public/archives/2017/05/index.html","47c94c9bc33902a89e3758492616d571"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b186cf7faf7e258e126ecaaee098768c"],["C:/lmislm.github.io/public/archives/2017/index.html","c376f3f3919c50c0e40e7dee5c143696"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9d2d40c7a390fab2c51e4993cd570557"],["C:/lmislm.github.io/public/archives/2018/01/index.html","abc656f20e9ae707ada9e48a17e5d6ff"],["C:/lmislm.github.io/public/archives/2018/03/index.html","414d313199c8047f32485b15d02ebbf6"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c620d3c7d6e2cc988c69d19a8897beb6"],["C:/lmislm.github.io/public/archives/2018/index.html","823ad8e72ed5324f08ebe7588422e946"],["C:/lmislm.github.io/public/archives/2019/01/index.html","dba39000d8c712a104ea34370f5d5e95"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","1bca5ff001a4ce38d5351ca1c3321409"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","d75b3229d481f669491711dd95a093de"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","42e74136c32093a4747ca60c6d6080ad"],["C:/lmislm.github.io/public/archives/2019/02/index.html","ffabd4ece0409e6bbaf889c56404949c"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","ab0f3b31a5ebecb2c66625990ce3fefd"],["C:/lmislm.github.io/public/archives/2019/index.html","7c9cf632e6d1d77540c4785a48d29aad"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","68a4ddf44664e745dd2c5bfbab568533"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","7a22f42d6547675fb76a04d3a6cc1a7e"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","d02fea2daebf7da49f093b5176d7fa1b"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","0480688a92b0c2089297caf2170aaf6e"],["C:/lmislm.github.io/public/archives/index.html","55de24b14e3c14eb06fa48d46c650b15"],["C:/lmislm.github.io/public/archives/page/2/index.html","50f1962c92bb41106bb8014362fadf91"],["C:/lmislm.github.io/public/archives/page/3/index.html","1fbb5e7673f1d5740536d89fe83ee21e"],["C:/lmislm.github.io/public/archives/page/4/index.html","4cc3e5b1121a47f3dbc586214804a067"],["C:/lmislm.github.io/public/archives/page/5/index.html","cfc3d8c7fb85537885392ec4e664958a"],["C:/lmislm.github.io/public/archives/page/6/index.html","91919ddead5070dfcccb3441693651bd"],["C:/lmislm.github.io/public/archives/page/7/index.html","03928f3749977ed6f68166d94adc2c48"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","65efe66a16d82bece98c6989471df197"],["C:/lmislm.github.io/public/categories/index.html","e01cc40fb3fda480fc9ad31414984573"],["C:/lmislm.github.io/public/categories/学习/index.html","330e2b4de717b87195dd9fc2bcaa81bf"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","a43368c5a866ff83fc3bae40b4646f3d"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","01f640319da88d1bdd0b0bf626f937f3"],["C:/lmislm.github.io/public/categories/工作/index.html","fa5f74c2c2139a87b6b90329f2d52085"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","6b7f441743e5dd42f2c4dd96164d0218"],["C:/lmislm.github.io/public/categories/技术/index.html","bc19ba532b8c6df4519a85231a0fbd35"],["C:/lmislm.github.io/public/categories/日常操作/index.html","bc252413199f00e3108a92a6488103a5"],["C:/lmislm.github.io/public/categories/生活/index.html","1956b2653167eb86f0b9c2df6742c453"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","008d3b4a0a0738d456d091bdbb98b492"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","265ddeef523e8702f418c1be8c808b1b"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","f3ef30ac3e534e39419ef0edefd7d658"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","f50ae20fe5741972585a1e5e3f7c309c"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","79f72b4ce1ed830fd3ccd26200074eab"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ad7a9cd49fc9b8b6ea8af388126e5e4c"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","84236ccada5af25c497b56b4e7166949"],["C:/lmislm.github.io/public/page/3/index.html","ddc9f652e9a845ec1788906e0a85f156"],["C:/lmislm.github.io/public/page/4/index.html","43b17cc170de257063c867ab7ec89d67"],["C:/lmislm.github.io/public/page/5/index.html","0c6cdf00bab9218c264abb747af542bc"],["C:/lmislm.github.io/public/page/6/index.html","78e41d070bbf39d8117bc9ddd1fc3c5c"],["C:/lmislm.github.io/public/page/7/index.html","4ee0ed78fbae81e22023786d12b6d084"],["C:/lmislm.github.io/public/tags/Interview/index.html","972ba5fad70ac4de00ad5775b4a23166"],["C:/lmislm.github.io/public/tags/JS/index.html","647a70c32c3d570acdd01a2d173c40d3"],["C:/lmislm.github.io/public/tags/acm/index.html","4997d7fd5d94048ad5724818cbe3f272"],["C:/lmislm.github.io/public/tags/c/index.html","216465d0af498da7969c55e9a4b1add1"],["C:/lmislm.github.io/public/tags/codewars/index.html","782da156e21ab87d1024c8fb207929ff"],["C:/lmislm.github.io/public/tags/css/index.html","b43e4e2db7ed2bf95858f230a19b64ea"],["C:/lmislm.github.io/public/tags/git/index.html","4abb29a3666b57045c09e70b05734cfd"],["C:/lmislm.github.io/public/tags/hexo/index.html","c9f0d9cc77a992785bff06f801d0ddb2"],["C:/lmislm.github.io/public/tags/index.html","e68012fb27a347610b13e73bef118de3"],["C:/lmislm.github.io/public/tags/markdown/index.html","5818a421f03663ad7dad5b6a2c730ab6"],["C:/lmislm.github.io/public/tags/poj/index.html","31761697803c16633608053e6de02d4e"],["C:/lmislm.github.io/public/tags/shell/index.html","f1e1cc221beed92f72e7a9ef025b56bb"],["C:/lmislm.github.io/public/tags/vue/index.html","c5058224f836036275278386c9c3489b"],["C:/lmislm.github.io/public/tags/前端/index.html","ba9b497fec059bc8aaf9bcd05695c90c"],["C:/lmislm.github.io/public/tags/小技巧/index.html","62d579925ec53564ca69951448aa5c7c"],["C:/lmislm.github.io/public/tags/展示/index.html","b916bf2213e3b7323a84c3f29eabe345"],["C:/lmislm.github.io/public/tags/工具/index.html","aec3f69d4b1d04eb94d8029dfb3e3d94"],["C:/lmislm.github.io/public/tags/感悟/index.html","bbd285f14e2c50f71a3bdae2d8565e77"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","a5d9d42d46689602e956ca3c3c741952"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","1299f1913ae4db0fa059c4ec1f175a4b"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","87ef8803cde574bdf7a731038e1fbe55"],["C:/lmislm.github.io/public/tags/练习/index.html","b86d6ac58d752ba562d7e04c5dcf67b1"],["C:/lmislm.github.io/public/tags/编程/index.html","1f0e58fb6bfdd2558c62cce4a9a1bbd8"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","6cf488a05f7161dac18bd5b9c233f886"],["C:/lmislm.github.io/public/tags/运维/index.html","da5bc0caec8f6adbf530aabdf1e9de24"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







