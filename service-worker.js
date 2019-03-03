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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","2333cb4921e8decf8792459eb0d5ccc3"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","3eb179fead730ca751be6dbca058cb76"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","00962cecb86843e85af6cc9ae4eec50f"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","9e79bef5ac5dd0ad011911b210a77e08"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","2c5274f45736fdcf0eac0384860ed63f"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","8b949d606e3b1d4ed45baae2c09183e5"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","a7f3e5e15b2b585076a49c64cdff72ae"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","a0cec01b91881ef867623296927810b6"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","23264d48bbe420ba54869df29a28e3e9"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","0870c4d5fb624479f97f26296210794c"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","9b4590ac3d40f6ba5ad1bff43dbeca16"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","0f426912d3403bbc5237c7f58dfda8ac"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","f11679cf12fd67ff55fe2f744e2ecd39"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8b1c25c9804580eb6bb49d44c65a3e1f"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","52d555689b3c8e135a43b091d82b0033"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","f81d0c26182da6fe4ce971fcc2b5e5c5"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","f9ce9dbf1f374a255e47037892b391f2"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","0fc8f9ab9f2cb0c21ff57115ea27c255"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","e8ccad5b9df83bbc3434a457eb080ba7"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","4988620ef6684a0060bac011d99f42b9"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","2c2e0ae9d4249de47b7f91fe4cddd2d0"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","f1e50433cacae086359221e5a57e28f0"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","543a8298f5e0b29b765958bca08bda56"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","0e74f568bd7435aa11def59c0f6c564c"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","d00dc6a7fe781401ff0217af7dac6be4"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","5534f96d5eccf39f0d20b31147cde1ad"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","371f1146841105e535aecd5955aca38c"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","4aae1ce73a4176c44dfa8f7061a690b4"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","a4ad323260124b5715c4eb1bcbef5490"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","5fc548004b46d328894436c04a309646"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","a87c40f5eb8194aa5844e313a79566fe"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","6f962fb9106da9360a815bd4f945735e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","17df790156eee31ae9246da4690789d4"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","7a1c4be23c9172947eb607eed9d5d222"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","42070636f3a18468bef5495c991e385c"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","fd95523c5dab90e9ed30472cdae96f17"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","c13836f47f48f67308dc2a210cb46091"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","43f37f3fe17275a8ff84ef351b852daa"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","b7883636bcd32ed560409570f81ffb28"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","17b0801a8ceef527219ce96a0a4e231a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","9bcfadb2f21110e63ca888fb99744635"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","79ceff14c228d06503709dbea1d523d1"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","8e0345c8d5e477d2c1623ab4296309ea"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","9c506cec83aaca2713e9208fe8441666"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","bbbc9954ccf21e9b3b324f72635011c5"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","5ec9c819b930f117349cd733d09deedc"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","bddeaf1c454f0f4174778405fcac7e12"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","613c439c0e4bd377a42f84400d9b3ca1"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","87bddd8fe87d87f48d1dc29f5f93677f"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","c863da6f96e11347c534681e171e0e82"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","87214f50e22e9361fee9129b4e1b010b"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","80a2dddde63014c6070c2c740fac1d64"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","aab27d66a92b100d04a13e3906b223c2"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","17557339f784b83e90691cee23af7272"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","4d09076b06bc67c7ae777caf6463cb61"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","cfe0f1cfa45f5a630e208b61c1f87174"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","90403dfb4ad5522f8f3d2349e4eddaad"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","635dc7eb6036ce9b63bbe9a71c1829bf"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","88ddad3e586a06b01a4490f12c71d35a"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","8539ece5f7e6b6c13c520ee5e2661f18"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","800ad7e887285615d68277d0c1cd71f8"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","b6eec51949b99b95e6adf07e08144b12"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","1c5b4ba8d8fe8a263daa271b2f11509c"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","f4d66943416d160af3b8be73b5659372"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","3b6c0d47d820f785e3ec0ef9265fb32d"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","00336b2b7aef61a3ef8e6d0928204964"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","87ec69edf2f54a0951fcf716a4343570"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","b2c9f178c5a92a10c4b4f1ec93cdb341"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","12b470fa7812f979212c1feecc267d83"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","7fcbe4cbde8fdeac0f0e21b39d526967"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","913c955234302bd6b111572a18a8de62"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","5d6fe3883867de194fcbc363009803b6"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","9f66bf54e7ba59fd63f5eefe5a3c0b50"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","7eac54fde5149a08bf93c519dfad4c7a"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","18f907c71381779e0b8408e398f5d17d"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","2f10cac84c3893774d2ab529b4d33050"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","fe82ddf1b3d8acd1af5b1cd54f6fc667"],["C:/lmislm.github.io/public/about/index.html","842ae15de3c488454fadd607281f6071"],["C:/lmislm.github.io/public/archives/2016/01/index.html","00576b046f072e5ddc48c8bdd89ca157"],["C:/lmislm.github.io/public/archives/2016/03/index.html","378bd5157e980d7097f91c1df0948471"],["C:/lmislm.github.io/public/archives/2016/index.html","4ffcc20c65f7a7dfada8cedeee092bcb"],["C:/lmislm.github.io/public/archives/2017/01/index.html","983bf0719fe202a3d7cec36721d853ae"],["C:/lmislm.github.io/public/archives/2017/03/index.html","34955259b032aad9f84d0d6e8b518711"],["C:/lmislm.github.io/public/archives/2017/04/index.html","4b207a7ef7bc872e9fc4432d758951b8"],["C:/lmislm.github.io/public/archives/2017/05/index.html","f7cec043585190e8e85a24bc76ea682d"],["C:/lmislm.github.io/public/archives/2017/07/index.html","4a3e085e30664a2e69036daab7654d08"],["C:/lmislm.github.io/public/archives/2017/index.html","b086919400089fceec6d27f11f1d78dd"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","32286e809ad467c2047e30d36b38f703"],["C:/lmislm.github.io/public/archives/2018/01/index.html","3143acd03c19a239043911c906790d8d"],["C:/lmislm.github.io/public/archives/2018/03/index.html","e46af8d9dc6ac880fd7c68cf5dfa3191"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c784a6ba0bfc6aa92bba7b35c1852cb4"],["C:/lmislm.github.io/public/archives/2018/index.html","0b258cef2c1cfd12332e2804e56297c7"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a8d0dd012555e9a4bfe59f6e70240129"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","2866af22fb08305242ee0460b67cf45d"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","358ec08502d03f1f4385420f78906851"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","a00824566694acbf685aa35562bf1876"],["C:/lmislm.github.io/public/archives/2019/02/index.html","c150fa805d1335668b8aeeb9c05b8b6b"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","652a7d5cbbe04614733c14630a7b36d1"],["C:/lmislm.github.io/public/archives/2019/03/index.html","a25e0f2296b2ffea9b7ce406ce6cf581"],["C:/lmislm.github.io/public/archives/2019/index.html","bdfbb4de4a3dcafac96ada32e5aad100"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","d49583df0e4c029f2cabab486959a2a9"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","86043f974cd4bd87bee2d135011d8730"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","07a11622f68249b25aee349fbfdfa837"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","ecf69915d634c8ef189adf3712c63519"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","a5294f3f8c2d176e80358ee76da9235e"],["C:/lmislm.github.io/public/archives/index.html","a97c95cb0ba272f081a1ca862f3885cb"],["C:/lmislm.github.io/public/archives/page/2/index.html","fff9e39ebd05a5135560dda6b914982d"],["C:/lmislm.github.io/public/archives/page/3/index.html","a6ac59b56a451ea621c05427570ca9ea"],["C:/lmislm.github.io/public/archives/page/4/index.html","53edc93bba8f77824897485d024bc2f5"],["C:/lmislm.github.io/public/archives/page/5/index.html","a320bd5ffa43951d5cd6af47c7d1e770"],["C:/lmislm.github.io/public/archives/page/6/index.html","700ea273e25390ec4f46071238a0805c"],["C:/lmislm.github.io/public/archives/page/7/index.html","e53d87b2644c3a31288684204f82a938"],["C:/lmislm.github.io/public/archives/page/8/index.html","12643ebe372f12bec764cf19ea447fde"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","38dbc9393200ada3ae969f8b8feab8dc"],["C:/lmislm.github.io/public/categories/index.html","fcea9d2a8f63ff5fafd0971e0768da73"],["C:/lmislm.github.io/public/categories/学习/index.html","a44ef0b11b8c541fd9da818e9ef21508"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","1441ed5d6b6a26d8dacfa7bef818da54"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","0b7299ede04dc5ff5e7d211691420520"],["C:/lmislm.github.io/public/categories/工作/index.html","93b6bc5c6835d818f7186cd9449744af"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","c3ee865b8d1b97f41ff6e84beb7727c8"],["C:/lmislm.github.io/public/categories/技术/index.html","747366dea84694796c0f667629c46c56"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","3206346b3c347f13c2397750e2d03244"],["C:/lmislm.github.io/public/categories/日常操作/index.html","523a86f57c85842c9f1aff960a2bc46a"],["C:/lmislm.github.io/public/categories/生活/index.html","3e15fb22bfcbf2ad1ec26de1cfc98d38"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","79b6fe1d76709a1b7559abe736071d4f"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","f3e6850b10cb50b99648074ead0bc334"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","d0d3f503b898b2ba8155476be80ba1ae"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","5a004375c9e76b884f2255ba8ae58fbc"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","705315b456b27bd3f3392c3f7c6bcb4b"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f8c7fa63293e7bdc5cc5f4d90fd3c835"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","2452b006faa9f1ded02fd52e74a41d0f"],["C:/lmislm.github.io/public/page/3/index.html","78f3ed263820617b0519bd3d3c1e2442"],["C:/lmislm.github.io/public/page/4/index.html","0aeb83b1798213a2a4338307a888d8d9"],["C:/lmislm.github.io/public/page/5/index.html","39232ad0f4315931a41d81ae2fdbf7e1"],["C:/lmislm.github.io/public/page/6/index.html","bbec4528e58380f22af594f4865ca587"],["C:/lmislm.github.io/public/page/7/index.html","9b45ff5ac714d55035568f28931c9069"],["C:/lmislm.github.io/public/page/8/index.html","dfef21c9372d1fcdb5b4f91e3c3cddc5"],["C:/lmislm.github.io/public/tags/Interview/index.html","b72d7f7ca70bc68c77c52b28c378bd39"],["C:/lmislm.github.io/public/tags/JS/index.html","28e5ce0dffeb8c4be12d59789c6e5671"],["C:/lmislm.github.io/public/tags/acm/index.html","f8bda718cc9498d232403754defdda41"],["C:/lmislm.github.io/public/tags/c/index.html","3bae8862ae8f52f133c3fe02b4e6f2ed"],["C:/lmislm.github.io/public/tags/codewars/index.html","98829f50b4ecb3d042cbe9626cc7ffc7"],["C:/lmislm.github.io/public/tags/css/index.html","165de4e6fe4352b85d7628b8a008077a"],["C:/lmislm.github.io/public/tags/git/index.html","3a4be282041bd651066645f53d7bf71a"],["C:/lmislm.github.io/public/tags/hexo/index.html","5451bec6cf0004f1b870b1a4bf0877e5"],["C:/lmislm.github.io/public/tags/index.html","6c11c90d1746a5de4978309d81de8d07"],["C:/lmislm.github.io/public/tags/markdown/index.html","3b5d90f12c0b7cc90b8d7d14af8191f2"],["C:/lmislm.github.io/public/tags/poj/index.html","cd3106989df0eb565608075d9b33e127"],["C:/lmislm.github.io/public/tags/shell/index.html","9a58ecaeae00729ae6d6f7dd8f6bb979"],["C:/lmislm.github.io/public/tags/vue/index.html","dcdf6f1bfba7156034c08357faaeba9e"],["C:/lmislm.github.io/public/tags/前端/index.html","8a634503ee98084aec262603f137106f"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","5c7dea0fcb67b8e2df15dc6b2183b33a"],["C:/lmislm.github.io/public/tags/小技巧/index.html","a5b9e4ccbbdb79196af1327bb5f3bcd4"],["C:/lmislm.github.io/public/tags/展示/index.html","b3c7af952cd80efc36481d8927015c87"],["C:/lmislm.github.io/public/tags/工具/index.html","55c9da0990eee97cd58ef4116db46b10"],["C:/lmislm.github.io/public/tags/感悟/index.html","4bebdd01cd17e0f9b82ef339357c1cd5"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","4bb3a09228b8ad80eb6c07f9a64d9930"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","75a45cbd8559acfc459895aeb2bba061"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","4d78e6a7f153501bc1c0aa87e6f941ed"],["C:/lmislm.github.io/public/tags/练习/index.html","e88ca254f9daeb8a1cf531f9b592c974"],["C:/lmislm.github.io/public/tags/编程/index.html","f59d286ae6631297ab67f02dd648bf32"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","a9d13eade7d004925b06fd3fb749d107"],["C:/lmislm.github.io/public/tags/运维/index.html","163f99e88210858724fac7c3df2b809e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







