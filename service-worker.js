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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","816a958dd6b67fcb04fb15df09fd1c11"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","5f14a1b30482cb78e08cb524aa149825"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","331bba5e8c8fed4d9cac1248fbafdde4"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","55b9f4c4c55d4003ff1f4f6b06058c61"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","1e506fc9ca460581737b8ea2435aba48"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","f7c2b4f0241ab8b538efc99ff6e54acf"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b42fad16ea4ed5af218a65dc9529e8c7"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","10678595a9b2c963353a42151d7c9e9b"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","3e3ba8b256cc8f541a55d3cbfdfc306b"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","9b9716e660058cab0acf5cbc6565e1bf"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","814476ba7dfa5e65cfa0148fc746cb55"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","29245064c4716abc3b1c969ba22d91c3"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","d123dd96b638c24e5d2bae3dfcec9722"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","94b5c0d6f76a3f6cfb585c249bae5a20"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","0bdc553a4111b3ce3fb023e446dc2230"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","ab0ca88183543c3e67a4576059ca47d9"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","40ef0e878e8eeac5dc2fdf3270e9903c"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c99cddf06eac62228c55f371fa2c49a2"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","ea68b691f22e9b9247a8a6457f1da99c"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","d5e7ab6a3f78bc7cafa6830ca15f4c82"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","9a459d326c373713f103004d86bef5ab"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","a4309c2eca8c55a8835c7810a92e6e84"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","741ff86c35b5b29063f1182942a7ae12"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","5a7c26788aaad3cc52321afde0439f05"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","96c6a69e3f45fc15e8c33e217a34e2ed"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","147abeac0581eced4dc7363de99ef3d9"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","00000ebe1116e1ec8a056c901c206a5f"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","48b7670ea28cb9bc7934b9e7e11ad747"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","36d6023a86e31ca0ef733910dbda0dee"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","15adc4814ab4b91fa419ffe6a30303ca"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","e1c1298af879436b6f468f98c3c2420c"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1ea621d47a07e9969f629cdebd201d80"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f68c7a9986160b96bd2c2ffbfb7b7681"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","00f3aaae53f7ae0e9c636528bda41b35"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","2d790d66f1681724a39b5f5249617e69"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","cc9dd4f9cc46e7ec79625f5007cafcaf"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","b895b1fab9f036f2f09e23759b0a8c34"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","b656a487089d39ec77c0e24ae257a42e"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","5791e0ee6c0a7bb4006527230b7e773c"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","22901c4e61de94fdcb99bac562cb8d8a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3dfdd78b441b92230cdc6ba8067f382b"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","ffdd3ebcda6c5c1502dffd47b64d99b3"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","7253ec8f8a77ae507cccb0c68cbb4f23"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","470b116443d89e16dec0c6ae561f678c"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","881a52bc6a8f1592a741b54e7d11bb17"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","0e1a22ce50374bd01eca2803c029ba8e"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","2408f4b7d3e3c123cb24811acfb6769c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","74a3cc25e08ba01aac83e3e75dc1d7b7"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","7b158264ed3a8714f3e4f63ad9edff42"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","6fbcb6904032268292e8b326e7fb8950"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","b54d9eaaccd5090b077deee929b8eded"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","ad54c0a1b40ee976260a1548e0b3f3ac"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","5e097243efcb8e15d07692dfa08c0934"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","39fe1c3bee83ef3a8da2fd6900bc0f90"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","cdce14f01a415f8f246f40b7d5e010f8"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","a16aa956f3322721ccb38dfb6dcbd750"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","9aaf99101f6dd5de05a12504f68c3679"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","dd64daee76765ca31a0001c94b8a7091"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","6134915379871d7de4436330afba4033"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","2fa3ebb91978a205c8d176d333f28860"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","856b8d3e89c8f4f480fa66e82646d632"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","0fc00af83538272e9ce020e9f8ba025d"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","f8d890a9b7bfb54c39de711d83bb2abf"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","bd3ec577d0be1c7c3b71bd3d28fb6c9b"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","77bbcbab60e8a0465012564a15a3415f"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","b1375e1eb2060d77de6ea149e4b2f7b1"],["C:/lmislm.github.io/public/about/index.html","82609458273917099951e4f61b08a1a3"],["C:/lmislm.github.io/public/archives/2016/01/index.html","3dd0d741d1ff4ccbc42bee1f0bc18496"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8458f650a76679c9a3f951bdca595f1f"],["C:/lmislm.github.io/public/archives/2016/index.html","9ee4f7534627cd510768b64d4b60700b"],["C:/lmislm.github.io/public/archives/2017/01/index.html","9dac6a4b07ad5de74e54af8ae111ce61"],["C:/lmislm.github.io/public/archives/2017/03/index.html","7cb2ffee142da4aadd3e9559a20a1fa0"],["C:/lmislm.github.io/public/archives/2017/04/index.html","a7f0dadf5a2e1bf222155a0ad4740908"],["C:/lmislm.github.io/public/archives/2017/05/index.html","b5d0c93c08700201b88aa42a42a5eb72"],["C:/lmislm.github.io/public/archives/2017/07/index.html","537f29ca2bdf090021ac9bc8a61d7752"],["C:/lmislm.github.io/public/archives/2017/index.html","ef25ebeea4d8021b620fdf1e06c1eabd"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","1e98d048db380a6cbaf53e4c62b29013"],["C:/lmislm.github.io/public/archives/2018/01/index.html","d8996d94d6f6d9860e9595869175d16d"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f195727ed2612c92207f88124804cbfa"],["C:/lmislm.github.io/public/archives/2018/12/index.html","5842f5f44d3ad73cc1abb5d2a6b826d3"],["C:/lmislm.github.io/public/archives/2018/index.html","0e49d2f9e57b9429c25c49e5b674f6aa"],["C:/lmislm.github.io/public/archives/2019/01/index.html","f1dba1ffac5316725efced9ca764b973"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","b11564cc4756145dc3c4bfb705090b0f"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","00b17f15b0b696a70e373e0ab03ad249"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","252a9c570ee81d4e4d97382d24408f2d"],["C:/lmislm.github.io/public/archives/2019/02/index.html","5669f778831759ace84d53ab9dc40b37"],["C:/lmislm.github.io/public/archives/2019/index.html","8523d7e823e8436689923a0923c98429"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a9c41fa2394f0bd113447fed9cdeb11b"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","263829dc446bedb88644a5602ef77acc"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","e626938125dffce298b3ee19ccb0f4b4"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","c7ed592f465ddb5ff8989060d9e389d0"],["C:/lmislm.github.io/public/archives/index.html","b48a4168f4a359f9ee86484d6a83dbd8"],["C:/lmislm.github.io/public/archives/page/2/index.html","d7b527c37ac54b355772516aea69e5e2"],["C:/lmislm.github.io/public/archives/page/3/index.html","d66f482d270890e5d6238ee2b57c2a83"],["C:/lmislm.github.io/public/archives/page/4/index.html","23cd8b9800676100ec0b0726a05adfe1"],["C:/lmislm.github.io/public/archives/page/5/index.html","2284394ce0655806990ca59ce92a89ca"],["C:/lmislm.github.io/public/archives/page/6/index.html","7c3425742ff631445c19676434020345"],["C:/lmislm.github.io/public/archives/page/7/index.html","f6d4b0c54dc9735b138be1d261e4d731"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","2adc38562be86f234da89f3b2bbd97c4"],["C:/lmislm.github.io/public/categories/index.html","8b471d97c6a2b0cc431384c5a1c17f86"],["C:/lmislm.github.io/public/categories/学习/index.html","5aec0207bc13b885b7b651d1b4f40983"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","b9132a00e607b2874ddcc90a5858efcb"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","7ffa0ad60925a4cc1d7af08f0a24e16b"],["C:/lmislm.github.io/public/categories/工作/index.html","1309f07ebb86a9bc91ca8bf681e88e0e"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","69a1c22ad9bd4140718eea209e0bdb68"],["C:/lmislm.github.io/public/categories/技术/index.html","591c9fe24166ab3a5b5e0581656592e8"],["C:/lmislm.github.io/public/categories/日常操作/index.html","7caf1bcbfbe9e16a378b0445ce2206ad"],["C:/lmislm.github.io/public/categories/生活/index.html","662d8a68bfcbc9b5ec668b1f85c1e229"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","c15d1733ee5c8df4cae5e52619f3bcc5"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","75206863e81d884724aff023565329e9"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","76b7698b25e558341de25c4dca54124d"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","8f14f3f64de23584bd65d213bb068c50"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","feef48e407bd4036506aac2aa5d8a839"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","921c9457d55ad6159a7fe146d404ffca"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","346c95824ba66d17b086ec433ee70821"],["C:/lmislm.github.io/public/page/3/index.html","c0e78b200ae3db881f77395c57f0ca98"],["C:/lmislm.github.io/public/page/4/index.html","42a233326a5c0a825ed665038afbb353"],["C:/lmislm.github.io/public/page/5/index.html","9cc9b4cec914dd518f7f4744307e412c"],["C:/lmislm.github.io/public/page/6/index.html","e21116825e94b416cf15441afd50d4cc"],["C:/lmislm.github.io/public/page/7/index.html","c4c62bcb3b88419fd8eea7893c527671"],["C:/lmislm.github.io/public/tags/Interview/index.html","bb119f22f908ec367b5ea81888e1153e"],["C:/lmislm.github.io/public/tags/JS/index.html","8dea00b683fbc5549670bccd8da5b5df"],["C:/lmislm.github.io/public/tags/acm/index.html","248ffb93d2448d046a220cddde58b3d3"],["C:/lmislm.github.io/public/tags/c/index.html","fce0d4d294262f908eaf9dc93f95076d"],["C:/lmislm.github.io/public/tags/codewars/index.html","f344ced53f8a4c1d14ce05837540712d"],["C:/lmislm.github.io/public/tags/css/index.html","0291a3ed019dd9a0b62e2b6994a1d203"],["C:/lmislm.github.io/public/tags/git/index.html","f651af4cee0491fe967c87031b4be833"],["C:/lmislm.github.io/public/tags/hexo/index.html","9390cdaf39d6da5a3c915b245afa4220"],["C:/lmislm.github.io/public/tags/index.html","bf5f577450654716c41f941bb36be8d3"],["C:/lmislm.github.io/public/tags/markdown/index.html","bcbfadca91bad342995c8e1d04618c9f"],["C:/lmislm.github.io/public/tags/poj/index.html","22c11a8cd8492fbcd5713ec4718f99b4"],["C:/lmislm.github.io/public/tags/shell/index.html","f3b627915f6baa4106035224a328ad45"],["C:/lmislm.github.io/public/tags/vue/index.html","b81aa4af9663f76dd0574a9006af3502"],["C:/lmislm.github.io/public/tags/前端/index.html","26e6b0d32331c7ba3b87f9910bb28fab"],["C:/lmislm.github.io/public/tags/小技巧/index.html","0852a3cdd99554dc722e2f1910b915ff"],["C:/lmislm.github.io/public/tags/展示/index.html","6f4b527d2a9dfbc06902f15029c34d5f"],["C:/lmislm.github.io/public/tags/工具/index.html","5e7b4ee888d04437ccb872378a248551"],["C:/lmislm.github.io/public/tags/感悟/index.html","eebf26bc30d89fda42040cd1a87cf289"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","6fbbce5b618d14e895aa96d964e27ebf"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","7bb03843c808f3bb0fd6c6b1e2376331"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","29b053ff3e4aacbdb2b9ad1dd466c41a"],["C:/lmislm.github.io/public/tags/练习/index.html","785d03d4d6194ad799f09409b4230616"],["C:/lmislm.github.io/public/tags/编程/index.html","dd934dcb9c14a292fced0d7dae89419f"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","1ba773b9e9475c500276c02f98a525cb"],["C:/lmislm.github.io/public/tags/运维/index.html","ae9d8cc243be84cd01e4fbc9cdbd9a89"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







