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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","aed1a841eae843a0c59d8bffe52355fa"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","934855eca1243f78005bd46bbdbd67d6"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","e967610ca1ac203f7624690078846a0d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","84e7f067de51f417e07693565fe2c84a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","2fb6eab786ec6a182ee9b2840f729b39"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","9ef6bfd4f93fd3f4eb82288dcf80d11a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","26f9c5ea1fab4da0077e4910f03c1daf"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","dfaad2ea2e93d5a65d4995b89ccfbdab"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","f539cac8fe7a0d799323fe7711302464"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","efe66a00c74510bbabcc16891f4a3d81"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","28f7545da5c4911e687252859d54cb0e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","8d88fbc73a5eaacf0dae26aac0b1c76f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","341d6af44ad9a812f3f4a9e6cdd4361b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","14f2bbe067bb296bb23c7acbc528292b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","79e26ddf72c228a8c5dbc46642b3a7bd"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","7e8dfd9bf5fc3fb5ff4c43b08e783c73"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","489b89cd0b281714c1d5ff096f3d10f7"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","bf3831e200b87cbf8c1a8f57f156238b"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","9b78723b2cd2fabf425001536884ecd4"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","acad110978751a25a6c36375becc55d5"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","3fa435785dad7ef2c661dcca7e373d71"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","83b8852dd1bb444b1586a8af43dc284e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f80445c8a528bdcfee6aca6bc83a879d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d8eb5785597d5f07b58df9231e804c5a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","50514ef249a7083e1311660a08373720"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","d9445321a6b1c8063a0ec0811d9eb36d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","0ceb5eb77e2f6f8554de297e743b6999"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","3b2bf93c18794f7a36f085c11d0365ec"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","a21d55890af2800bbf233ff7e15b9996"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","d40ae14cfb141a0529ef79f933aab2aa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","665312a12e809b9b3035ca096567d9db"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","3f32156e67fd691f0bec4a1529435e9a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","977452add95255b676ede85896c63af9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","e3bdfa28fb213636dc54457970cb49a7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","d86c126be8cd44a78fb0aac8abf2a3df"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","53d778786ae726c6b0a9ee2ebad57988"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","a80a4a347158f985064d5802990c1e76"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","32ae5dbc568c11ed360142c16d07ecfe"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2b30ff8be968e3026b429e1c71c551df"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","9c703a3dc384e21492a41d2082110079"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","d57622e080002f35149e3e5a8855df5a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","66dbb3172b9fd6aa897c1a2c105d6286"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","d65616cd49548630862706796256de3a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","2ac76d74f281b042732df16b34f4b0fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","d0db355787af74eaa8e915cdaf65e3e0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","147a60775929a16c4777c9c702e2e756"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","b5dfc865fbc903f06cd9250565ce9dd0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","2f549cd7a97f77136ff651d203b5ba03"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","91bfb548a656f32110d9fae52cb6fec9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","eb8a6cc464218803dac004c29024b1ed"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","4c5c614d1767602788d2f54da114eb36"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","c57f944f733f35e67a5089b68055be41"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","cbc342ff8947c93be1326a37daa5100a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","e320bdfa8ff33792ddf8b1bbd1579551"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ca825f6482af2194ec439941fe492ee1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","3ff4fd332e58f51c4ce175401cf690c9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","d6e603d0473ae8be678b5953c310f846"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","ec4a4e3c14c1c782ad139066025f831c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","8adc4399153d17ed75f41b4cd532e88e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","34ce254af8f44ab318887186b6bbe0f5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","13e60f9778179e6ce4bcb60b83278741"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","f60c20c8652d7847ea3230e7ceb31b47"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","b74e492e403e105f3ffa5c460e4c56d3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","5d96f0c60d8237dc447706eda24f6571"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","c1749990cebfe1cd7323880f4b9e6067"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","a665f721a974c273f4662886bf29b63a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","5601b5cef1ee42d7902c771fb308eaf2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","35646a51a2102c7dfd012e34f890c941"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","a2308974a41855854ef5e286d8f086d2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","d1c5d0a02857d7b87dbc171d96dc5cf1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","95b97b4aff333249bda3791e3690e4b0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","71ca6ddbb1d47663dd79db55a6e0d3ae"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","13db20de4b3c82903bb99dec0bb97d63"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","f049b45a93963bf291bf3f420930b767"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","32e4d4c35bdea020b5a1b5e20588ff03"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","c0b29333c1d5d699fd95bf014421f04c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","e92e4caad69d7e83c3af48e12456de38"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","090efbb5a2c765b7cf6f03f9b3d9d24e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","04c2c23483a2f5b3d4f3580621977434"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","3d316be5f3a0f037bc57e47cfb1310ac"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","baf0b5251e1a6f967e9d939787749b6c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","09da2e75fe3ee84924e0e323b0607ac7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","d5b1542eecfbc5a2562312cb067ef43b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","9b4a2b14f9fbf12c4700562c130d9ce8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","46715d295928746888f1b5654884675b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","a524bcfa3b71188acaca9898c3d1f9db"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","99b5f290b78ce0c1cd64b61f1a90142f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","03837fc98ba8d13c1f3b32c5b2c06d9d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","918e37d12f4fd77f2eb1c2b19512273a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","634f46553f065aedae57730c516894bb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","550058b8b2a1d059244ac6fe9d77f1e4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","773d6df0e1d95ffc8faf601e06ec7047"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","a882ce6faab4c1b0c1a99f1ee04b70c9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","349fc9fa767c4e5dfd1574b1ab15e5be"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","b33f9f0d211b2850cba6e0c1971ed670"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","040d104860b2c37eed354ca8f8fe202d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","edc03ef47f611b77e8f453506f1cae37"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","e369575e739abfaf47c64b728aa3df8a"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","5853673cc02dca1101ed47ad524bd0b3"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","5595c8492c22a9ca3a4ca8eae3ef1ca6"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","2e508e30b146e9d7725022c6b8d35748"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","f36b55234e10ba41285d4586b76dac83"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","51cefd86a80b95c26c0c0738cd5de1fe"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","b9f862edc952d50640d64c6c638772a7"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","b61411b58bebc40303ef06e6a3a2adf2"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","547ec137eeaf3ce22cb017df04cc0fe1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","5c10f36b3152e1612d910ecf45ab4a15"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","c96505b1f2ab67c33a3bbebae62c9892"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","e138e8a05a9607b46f579143a3947e80"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","4135f8e7312cd7cfc162d48c97e277f9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","3efe158040055d42004fa4d0c64db1e9"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","0daffba57fcd44433840205ec0f94e07"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","1b7b1cff1f672c16182741c15904baae"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","1f9c52e7a06f928caa9f1708ff2c18fe"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","ad0bc2bef7027ed4447d9ed259ab706c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","cbe4bc67522963283b5d06ab30c0be29"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","c68ae38f338e1965c1fcdedf73020070"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","8d30e65e58af7651515357013442d1af"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","d31cf1baac9c1b552c1b6525b2464405"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","f85937ae905c0e6647e228bb6515520c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","2b5347d199086a6ced87ae95cd2f525c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","9e8ddedb8c45c052ee993f6565dfbefa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","00e19bf7a863de4169c4345f25beb06e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","a4b259eba032c0878320f1f95badd3de"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","cc30e9b0923751d81ef51b27ab00a455"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","d87312fd5bf97e570ba70176d7611327"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","1c5741113f0b459c820ab17682284640"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","d419c9248638fcc88375ae9c216f1c84"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","73a7f8679b297488f9a6fcdef76811af"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","8b2f47f66934443cde59e8ebc7334048"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","d73996b0167c889ae366a5946956ff3d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","a6b47d61135f031f1263e9a832b421ad"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","f777016a86312f208d507081541934dc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","7cac05d143597acb321d6cd659fe17ef"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","201e3b3be4b8a370332c0e0783d90674"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","85541a7dae7b31495d3f007cef1e023b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","d9c2f31b90aebdf3e52ed649ad05dd71"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","f03cef90365ff82e30f9f21de4d95cb6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","aff1fb632ae9cb6e780383e72a4d160f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","c1f0dd93b1c20aa33eda80fd317193ce"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","872179ab9a63e2da98faf527ecdffecf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","3578924f7202d672f477bd6bc1ed56a5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","2a0a080ccf8cc02e8a2b493de09db38d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","9d307b3cc0f300dc9904ebd861fb3727"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







