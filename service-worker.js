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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","a9a97f30f37ca9581c03df19ad4b5a63"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","0b5fb445ffa3b2249323d52b54278b88"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","53e7ac7f4dc8ecf1a43091df8e05814c"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7dff7786de19e09552ffffcb00233d05"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","0f167d02c0292cbb5bbffa73042e17f5"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","3c264caa49cc75e8cc78b46405fbf5a5"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","d8e038f169896e005b37167b1982de27"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","e07cbb6ac55099ba77d2429a6c50e002"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","6cfdd8fa6bc567fa86d1eb6329b588a6"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","c790ea7d37413692455d96a238b4f468"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","331d537e710c95aa631e8bb714d6736f"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","133b92772c928f1a2c8adf03cafba945"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","005c10c9ebc6903c93fafc04460704ee"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8f8b6dc719c88bc6b5a6333b8bb93f27"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","64e58ff73e577b48a3036d127d1b13e8"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","92a85169395e4fe5ee623a11691c93aa"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","a1e2d4bfab5579717f1fcc6b53a4acdd"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c13cd540484b4e153fdff5dbf427cfac"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","28900388157c37840e2bd920eca036b4"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","b22616ec56ce281990be8d6bf3b53bce"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","886763f091a89b6c2d5157795b98bbd1"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","a0f3c19be983fd5aedb7039363f34133"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","da58eab1374069cbbb98b8476a1a8c16"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","739058ce5f145a383b7f11fa100c50fd"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","9d1fcd8502d2b668ff4c80933bf64b8c"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","9ea89e4dbdb443898e59988cb854e62e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f296305ca4fef653a6ed16c3728ed99d"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","ae9a6348512cb94d989a30749bd6480c"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0bd45af8ffe869f58c8ebea64e53083b"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","89a05d5b0b969bab35e515e03412100d"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","bbd81e993e086927fd050bd3886d973f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","38a6a812c899fef5cf6fee58ae29d477"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","ed262d1afffa14aa30930c380fc19bf9"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","0413768a851b5e5ee38be1527b7951e2"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","adce2d56087b3505eececcd232f90d83"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","415770e0394d6c294731efa29149ee91"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","b5e34a07695e4cc855198673cea8c08c"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","5de0806fbff37660abbabc0a5fbdcf29"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","698e099ab3479f60f51de262c2fdfdf9"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","c3da49c1ce262ad1523b1f58f51888c2"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","ebc2c10dd6a8e05e8f12c7e8c056b381"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","d23a11e22e63f109d5570cd58b6e9f44"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","01441fbd10b2277205eed69eff6d82ae"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","a6123c856228581275058422b1553902"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","508daa9ab796495bead94fcb72797aa4"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","8b797061dc7846f1997e301b61883a35"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","d66e49116759331a486f049fd3af4daf"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","01400c8ce15662fe3281535eb7c7b066"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","68f9991fb831a210f62e488bdb87066a"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","60a3f3cb2e1fcc418c7cdd362bada484"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","51cfa9257c0129728cae48893aad459a"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","834aae2c3435708dc61044c302248535"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","609ea43b06a4adf41b979788b55581fc"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","ebee22b2de710c603394bfa3b16ccabf"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","e1c1c0556a776cfaa495b058d20f764f"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","7088bff407abe749d2d9829acc1bea71"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","4e9b84a468b77fec82cb1677a3d17932"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","56ec4e4b50eec0eaf5cf39ce4d27b882"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","c511c0e7f29f87df283c80d0f0d89343"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","a890ecb7f70c5b967677e0ae0cb1fb39"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","f902a21aa6a72538f4a0c385101c1527"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","298016b59201110385e5971939a0f684"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","c9ddf57878143dc2b1a81d55f2aa40d7"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","83ab082c9d6827640925ea67b1d91e4c"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","62646e2c056c368dd1f71a927856ac2c"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","67ba5a1f35e60cc5ab78278e7e0583a1"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","61283450fec9be0d347b0cef2e6af5ee"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","5864ba69e725e1eb83f27eb52ca25dd9"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","583d6ca35f1ecdc83f50ea5283677677"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","4cbb0461e9c1f46745946aab1dcdd5df"],["C:/lmislm.github.io/public/about/index.html","bf1adccf9a9dc36f80cb11959372c698"],["C:/lmislm.github.io/public/archives/2016/01/index.html","f8932b7bdf8e793c43b44dcca8e3d6b3"],["C:/lmislm.github.io/public/archives/2016/03/index.html","73c97bfb9b8890ebdcaffc022441782a"],["C:/lmislm.github.io/public/archives/2016/index.html","689cda2d5614f354e418cb70f6d7adf2"],["C:/lmislm.github.io/public/archives/2017/01/index.html","a33192ce9f53d902c713cfb35bb631a5"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ff0a5bbd995c7f68e1cd196f6616f5d8"],["C:/lmislm.github.io/public/archives/2017/04/index.html","e8fa63458ad0f0a7bd6f099aae535078"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ce91f117d3ccacfc1f0f599f202ac13c"],["C:/lmislm.github.io/public/archives/2017/07/index.html","0c802765aa81313f1b8cf54538a26ef3"],["C:/lmislm.github.io/public/archives/2017/index.html","1d84758e3cbdf7d12be72e620b5b6f9b"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","74fd6ad89f5ef3398fbda0798579f281"],["C:/lmislm.github.io/public/archives/2018/01/index.html","121967da9b6cf5e16fa9af10b8090b64"],["C:/lmislm.github.io/public/archives/2018/03/index.html","85ee882cf1d5a57daa07e80869cc52eb"],["C:/lmislm.github.io/public/archives/2018/12/index.html","455bb09528d69d4626076323870fdf67"],["C:/lmislm.github.io/public/archives/2018/index.html","fd62c44705d713d602bb66c881fec94c"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a1a57f8b1ab1115822ceeb5e52e81f67"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","980cc92cfcc70a09879a6723ab0f758c"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","80f098e879acf7aac99c281175d8bea8"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","429195a2d8d3ddd9934fd3e89f0cd921"],["C:/lmislm.github.io/public/archives/2019/02/index.html","65546483dbac4391a2e8972c0cbde698"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","eee735c1cb5ea0eab88b651822f7a65e"],["C:/lmislm.github.io/public/archives/2019/index.html","6909dc9b51d8335a3594c6eb50e8afac"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","d3139ce135c1f12cb5fda7815603d049"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","c35730ebe471c602ff7e29e0d1df58d8"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","32651e4e65a667a2c3f89366fd428816"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","a763a843855e32a45c1ce9456ef35a7d"],["C:/lmislm.github.io/public/archives/index.html","f257dd1453f8752bf13c37ace2eae999"],["C:/lmislm.github.io/public/archives/page/2/index.html","9c4c8fd0c1ca6516fe7336dda023f24e"],["C:/lmislm.github.io/public/archives/page/3/index.html","506163f07a727c5ec37a3e4f12fa5987"],["C:/lmislm.github.io/public/archives/page/4/index.html","40f58c11992fc4ed20c6b349cebcf8d7"],["C:/lmislm.github.io/public/archives/page/5/index.html","cb77c5ba406239a6b7840c0234f5003f"],["C:/lmislm.github.io/public/archives/page/6/index.html","ee7046bbe5c5cd2bc474408b1f1d0015"],["C:/lmislm.github.io/public/archives/page/7/index.html","4702e2dd25343f0bb49126083f25a10b"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","f08790d1c7b9ed04a1872c8fa516ac4a"],["C:/lmislm.github.io/public/categories/index.html","90e4417ecbd8295c47c4764ae6a6be97"],["C:/lmislm.github.io/public/categories/学习/index.html","c523c5ff135fb7a5d3f53cb24b58957a"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","282677ee6210812e76981478635afc10"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","8c5f8e2050445ac62140d1276392b787"],["C:/lmislm.github.io/public/categories/工作/index.html","4d14fb59c94acd82bc17b47612b4f1e7"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","2c1d1b0a62d646c02ae3af60caa1cfe7"],["C:/lmislm.github.io/public/categories/技术/index.html","5857a0658729052baed37704800fcf34"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","8b9bcbf77fb40b8f15b988630ab1283b"],["C:/lmislm.github.io/public/categories/日常操作/index.html","7e8ee628e8c7986ee4580cc66f8f72e6"],["C:/lmislm.github.io/public/categories/生活/index.html","5a8a5c184bcb89a91006622bd699f8b2"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","0e776ba5687820a7e8794d8dde210c7d"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","bff15f4265cd0f16ee3886752f28bf5e"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","94bb24c2914a4a4f7825a0f61ec27247"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","77bec39b532116cc91cbcb360b6adec7"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","7b225dd7034f5eeb9ad8232c755d48d7"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","29191e946a35e8b2f4133a5877a113b2"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","367afa49cd9071d885b68e3517c8c4a3"],["C:/lmislm.github.io/public/page/3/index.html","9a0d820c96aa2d61471845a6260af8dc"],["C:/lmislm.github.io/public/page/4/index.html","e196f8a9ddf4a637805963e51da71b84"],["C:/lmislm.github.io/public/page/5/index.html","17a4efb764efc46a09b4ee41564c1219"],["C:/lmislm.github.io/public/page/6/index.html","ad8126324976951298a128be1d1b1e09"],["C:/lmislm.github.io/public/page/7/index.html","7e44b23539114e3676a35fb9408622f0"],["C:/lmislm.github.io/public/tags/Interview/index.html","6d82a7a106151bc9662f957b693bccf7"],["C:/lmislm.github.io/public/tags/JS/index.html","9069d02a027ded7c9bd6a599c87c93b8"],["C:/lmislm.github.io/public/tags/acm/index.html","b942d7360257490e10b294c2f3805e7a"],["C:/lmislm.github.io/public/tags/c/index.html","7517219604f48856e720529c6e461856"],["C:/lmislm.github.io/public/tags/codewars/index.html","4d78460f091ebd5e60999ae68a7036c8"],["C:/lmislm.github.io/public/tags/css/index.html","b0694d9d62543458c5378de55d472796"],["C:/lmislm.github.io/public/tags/git/index.html","1e925c7c673fe9dd68495281ab3d48b1"],["C:/lmislm.github.io/public/tags/hexo/index.html","6b2ed0975cb01812730d172fb22a7ffe"],["C:/lmislm.github.io/public/tags/index.html","974a2b7ecd31356a972372e4120e17a3"],["C:/lmislm.github.io/public/tags/markdown/index.html","bf0b05f86c6f62b2fb0b06eaa3743867"],["C:/lmislm.github.io/public/tags/poj/index.html","5a43440d07aabf68d2ef242b84392120"],["C:/lmislm.github.io/public/tags/shell/index.html","8b7797e8980fc411fa701815662cf163"],["C:/lmislm.github.io/public/tags/vue/index.html","5d1cb7e3a638f3a7b1c247f1f15cd965"],["C:/lmislm.github.io/public/tags/前端/index.html","f4a9206ab87331f23636ceb83e72688e"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","325f212af496c395f1b07d3f76b5d108"],["C:/lmislm.github.io/public/tags/小技巧/index.html","2a863d1760293238ef2469bc892ea765"],["C:/lmislm.github.io/public/tags/展示/index.html","de7d86d9bf0115aa29ba003e4bc08d6e"],["C:/lmislm.github.io/public/tags/工具/index.html","021445692c2d3d62d965483d7b3b1e4a"],["C:/lmislm.github.io/public/tags/感悟/index.html","1d65cb757cc5e74260b7c87e957a75e4"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","0eccfa6126a624c6912c9471cd538495"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","0141a194ce9529b989b31131173346df"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","96f7b27963ce1b2d9e2c13ef9db5fe55"],["C:/lmislm.github.io/public/tags/练习/index.html","69ada0f31e2730506792bef6fbf40c44"],["C:/lmislm.github.io/public/tags/编程/index.html","ba5f61384129296e4fdc264f738606bf"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e708165921679cabd5881cbe5782f7c7"],["C:/lmislm.github.io/public/tags/运维/index.html","2cc872a9af49c037f3037df620136a80"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







