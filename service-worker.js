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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","9a12039760c9d130acf420465d561fb7"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e79cb6d4b0987889da44432a64953f05"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","46f524b31c0af5635b27369b3f770d06"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","ccf6493fffed731af120331dd0645677"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","200e13a64f95a209ca6d47429ff46240"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","a0fbe1435ebc414a9007f6c1580d12e7"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","6b4059cdd217da8d7e1d02c961b2b7ba"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c64d6f4f5b492375b9dd591632a6a799"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","a369aea3f9ffd02001c74fc43d50da4a"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","5de2e6c6dc7a9d43d5cea9a672cb6751"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","478976c1a26e4f4f2551524d1976b7be"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","ceec92a58ee52cd6f1ced9287f8af0c9"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","bf83a4cc60ce856dccc3a4b4c9a667e8"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","3934b225c6a4965e483c828c07f79685"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","b3bb0188213c431d7585b1b1d23602e1"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","b8816afcae154f9c12adcacfcb26d7ae"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","9825497b7be37087a5b582106a97be46"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","183ecd27246a5543cb088add4aead5f7"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","88d0694f991eca58db091907673c7c51"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","5c6c78fe0d1c1a57a95c1fd21874af81"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","9b4cc6ece5eef756a42b73cffdd91ba5"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","7343ad45c7c17c58f7563e753f331f76"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ead910abbf0700504788f94ad98fbabf"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","86eab2e73cc135871857dd084b894d19"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","4799bd751224747b6a7a4151019dee14"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","c11f7ce5c22f494ba64919bb14bd67c1"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","dfb8837ebb16e00e22b013a760e25e83"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","949957924b6bdbb2366ae1f3c9de3156"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","5562288b8d09dbfc18bd4184d2ef64d8"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","abf0276aa9a140b77745f08532ad1ef2"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","6770c596740fb51918a2a960cb6656e9"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1660d02d890d8594f6ce98491f40b94e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","abc252d6a549025b45840479b3945f7b"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a3a5b205e1be5e175411c12323fa4bdf"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","da391e11d3fd9d060dba49c54cc66848"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","300ded8bfaa45c66289ad530512af819"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","52e0a5615144d13fd4a0e5f8b03ff041"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","01b4782c39308460453a9972b757ea2f"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","6be9faec6cb44e642c60c6cefa38cdf0"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","02c8e7db0af18c45aae619aec951c8e4"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","dc17cf20ec10b7ce379fe1c6b7a9f515"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","b1be6b22d5dc0d399e7910f91855dbab"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e0332892b4d582044f3c9717a598612f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","59e919340888d9309e68f7cc20ae2411"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","d2e0a631b2c34c9388799d06c2bcac8d"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","c12d6e64e1c30620ab4fee84e80ad924"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","ded30c1d5594783a6772a9bcfd66af99"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","c729573beff0c261eb278602b6633fd1"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","015e11b7ae9e44cb9eb66626b33e4ae4"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","9c02e2412861734fcf27861c67bbc1f7"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","bec34b4da4b894ecd55cf96b1dd5d917"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","ed729ae5f358c36da830cd9d12a99d1c"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","6694f1cbd8468f38febd44dfbba5da66"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","ad3ba8068eb74ebb7923da866eb2115c"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","10570f46a73d7a6dbef049558cb92397"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","dae5b5f2d0c6fb4cb668ae670d6840c1"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","81e3511dbad6ebf7575608a5abcc43c6"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","64f60e4a420200fc901bf86e7269699f"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","ae591140d957ca957c4af56432985ae5"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","ac5800520473f4db1bf904715433384b"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","1306aaeee686f8e707f90991cf9de604"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","aad3fb178a1f295e7ef33962d9e3619d"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","6bea2fd3b315c3de94e385993b174664"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","3aa8982b6a90b4a9f7b7f80e7e667f89"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","a3060bc45cb02c96da4ee254229f1261"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","d72dd3267fef6a0fa77112f9b8200f59"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","dc7f1f10eb3411448d29584b4fc44a7c"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","55ceb2cfa15998abac63c677a7475ef9"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","4078733a130c3de2ea99429e2cca2dd7"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","0ef5c1f443d763468666613d4ef2a9f2"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","4387518591a1a86464885486544c30bb"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","5301569a9efbff7e1684865832da43c8"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","f6c104418942c78887b000420a872c34"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","de48d35c39c8e67ec929b588416d5734"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","8827546744ed391b6b7337ec7a18e920"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","12f2c8bd7c48d2701b824c7831164afe"],["C:/lmislm.github.io/public/about/index.html","192032c5fc5c896c60b1f2a148645fcc"],["C:/lmislm.github.io/public/archives/2016/01/index.html","bba66ab25e8574dbddec1c1b4535fed3"],["C:/lmislm.github.io/public/archives/2016/03/index.html","b7a1185bd7abded4036de3561f2ef9fe"],["C:/lmislm.github.io/public/archives/2016/index.html","9f1776eee1d1c638dfbd491547d7b428"],["C:/lmislm.github.io/public/archives/2017/01/index.html","d0a434a85427ae794fa5d8134213810d"],["C:/lmislm.github.io/public/archives/2017/03/index.html","f0d06bdde67d8861df63a7dbffcc4201"],["C:/lmislm.github.io/public/archives/2017/04/index.html","ac35533a1ceb96ba0f64b87dda3329d1"],["C:/lmislm.github.io/public/archives/2017/05/index.html","642142c4988f117e45fa673ea7a8bcb9"],["C:/lmislm.github.io/public/archives/2017/07/index.html","72a74a8117f29df1a40123e56d0aab9d"],["C:/lmislm.github.io/public/archives/2017/index.html","814e6674d54845c2be14a604954d87ee"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","56e0780209d92963b7dde34a41c83a2e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","c478750515e64ba51a9f264d55883796"],["C:/lmislm.github.io/public/archives/2018/03/index.html","ed1410e3c7ebecfbf1fedfeecfd1e26b"],["C:/lmislm.github.io/public/archives/2018/12/index.html","0f9dcf707e12ae1c350cf2c07a728666"],["C:/lmislm.github.io/public/archives/2018/index.html","da4e0aae3745572cd0e362a2c56f401e"],["C:/lmislm.github.io/public/archives/2019/01/index.html","f4a5119948f1823974d85b5327aa4d98"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","616778725bc4f41eca814a4b6cfc251a"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","f14dbf8cff138b218f292ee2863779ae"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","e1b5602495684f5788487fd170619bfb"],["C:/lmislm.github.io/public/archives/2019/02/index.html","ada4a56d6317434aded6f56cc9c63ce7"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","d01cddc2473de456d0217c8341e9d0a7"],["C:/lmislm.github.io/public/archives/2019/03/index.html","5cab05059b27378b131c97df80096a81"],["C:/lmislm.github.io/public/archives/2019/index.html","b4faf9ff02e20a55f075db39738a7e12"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","d1e540e94e93493a1aaaf032df158dde"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","10326d826e0a756ea57e66a5bc89d644"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","3927130bf833702c51c67ad0e3300c22"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","5e7cf154c16745eff41fffeba3d6ef87"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","374a23d70bfda0d47de4060f8d7cb708"],["C:/lmislm.github.io/public/archives/index.html","3e517d01e1db01db53273639bf4786bc"],["C:/lmislm.github.io/public/archives/page/2/index.html","c57c12ca9611db9840a78bd8c2e6b90f"],["C:/lmislm.github.io/public/archives/page/3/index.html","1626992e80f3a6500236d98d97326822"],["C:/lmislm.github.io/public/archives/page/4/index.html","df0dcb76e6b4fea81e70b0c47888fbc7"],["C:/lmislm.github.io/public/archives/page/5/index.html","aabc2f89638e7033820b4daff7a48a6e"],["C:/lmislm.github.io/public/archives/page/6/index.html","4f97a9a3c709e881594ffbcb0b4d8be9"],["C:/lmislm.github.io/public/archives/page/7/index.html","14599885ff339af095abff647ccfd911"],["C:/lmislm.github.io/public/archives/page/8/index.html","eb47845b825b4cd16e8404e8217b0b32"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","84bdb21c815e58cc151cf8aa7ff621f7"],["C:/lmislm.github.io/public/categories/index.html","9bddfd7d98a29c94b9a98d344074ca79"],["C:/lmislm.github.io/public/categories/学习/index.html","b336dd0c9f6f23ea9d838ebf22a57429"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","1213ee73d68dffcedc4aff5dc64d6e64"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","7507fbf72444f890559e3994cc6a2358"],["C:/lmislm.github.io/public/categories/工作/index.html","8f1195689b1cbce7ef0dbe3964704e95"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","f9bd1062097e286230a558b306fe051a"],["C:/lmislm.github.io/public/categories/技术/index.html","9e8b65c9e42bffaa67422b41944167d8"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","f25f6afaa322a126abf91aff4c6ff37f"],["C:/lmislm.github.io/public/categories/日常操作/index.html","47b86cbc32521fee93cfd4ed8ae143a0"],["C:/lmislm.github.io/public/categories/生活/index.html","11503f69e194f88e646ae835ad63d152"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","a3ac6b5e81323b059d93a301aaaf8e7d"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4455ee075a7325d84ecb3e4b1b52d6b7"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","cdca33a599a43c2c5d49bf96322b25ee"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d4528efb76b9d4a6c9474a821bb604fc"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","39c513759caa3aa529e2c1936c681caa"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","4291e43bcb9c50c112de9323e019e0fe"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","7ebb43156a2bd67c044f63d13aee2f1d"],["C:/lmislm.github.io/public/page/3/index.html","298f1c447e960ad5d54e54ebb5929edc"],["C:/lmislm.github.io/public/page/4/index.html","494616331729ccd655e011f748369c90"],["C:/lmislm.github.io/public/page/5/index.html","d79aacd8bc0d3ea8fcc85ce051f3aad7"],["C:/lmislm.github.io/public/page/6/index.html","8b4cc8dd510bd97d58a5b2941f8f9433"],["C:/lmislm.github.io/public/page/7/index.html","0779431db06df093eab7ceedb1627a05"],["C:/lmislm.github.io/public/page/8/index.html","4b52b4ddd736cf2a494d9441dbbd428b"],["C:/lmislm.github.io/public/tags/Interview/index.html","83236f11df07bd6c2a68c56626fe83d5"],["C:/lmislm.github.io/public/tags/JS/index.html","f821fe8f1bd3f532dc4d18268de3d577"],["C:/lmislm.github.io/public/tags/acm/index.html","9ae887feec47eecf7f3c818bb93ef793"],["C:/lmislm.github.io/public/tags/c/index.html","243000a6e1756c4b614676f241759157"],["C:/lmislm.github.io/public/tags/codewars/index.html","cac8b4bc78808458034248e45851115f"],["C:/lmislm.github.io/public/tags/css/index.html","b70a4db92fa471f75f5253acae19698d"],["C:/lmislm.github.io/public/tags/git/index.html","590afb7efa35e759a9f80c3e8c013abb"],["C:/lmislm.github.io/public/tags/hexo/index.html","2ab13c65f8ccc74c73b57d9df8b48f44"],["C:/lmislm.github.io/public/tags/index.html","f16fdb68d04cfb2fd62e70aaa2b7c8f5"],["C:/lmislm.github.io/public/tags/markdown/index.html","9323495dc7fd8b1905e17e8c5f00e7ed"],["C:/lmislm.github.io/public/tags/poj/index.html","0b5bbddeea0e764ff1c4012f894a51ec"],["C:/lmislm.github.io/public/tags/shell/index.html","e097fa08fd9c27db1bfc3429ff84b904"],["C:/lmislm.github.io/public/tags/vue/index.html","092fcb993bdaf41e71a838c94671b4e2"],["C:/lmislm.github.io/public/tags/前端/index.html","18de4e4eac10cac2b631f30a9456dbb3"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","64c67584dffab93c623929140ab2309a"],["C:/lmislm.github.io/public/tags/小技巧/index.html","ba37f6252af703390f18b5fb4e8c6e25"],["C:/lmislm.github.io/public/tags/展示/index.html","ebacfca8d935c627f8024969a8bf1036"],["C:/lmislm.github.io/public/tags/工具/index.html","8187b5cebb533bd52aecdd3f6f81a618"],["C:/lmislm.github.io/public/tags/感悟/index.html","b12a99bc784a2c81c4f10cde33b0a652"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","070a4c9459f3abc76d4d3931832b6bfe"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","4951a3cffbb376d8237a3861444c59d0"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","519076c99ee7a78ebe239c6fc6128e84"],["C:/lmislm.github.io/public/tags/练习/index.html","c5365a635531f1b656d6797e4f648b53"],["C:/lmislm.github.io/public/tags/编程/index.html","308ed25931fa947c88e36e06f31e0d04"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","4f65804c17ea0c0454aabd2b18fec638"],["C:/lmislm.github.io/public/tags/运维/index.html","f6b84ff2b49c4d0b955b999ad83849d8"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







