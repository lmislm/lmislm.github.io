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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","3ce163bc427b322250cbfcf08b333b2b"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","f92387386bbe9f3d4e55fb0cf4e205cb"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","9dc4dc0d6925205cd40f682a6054a339"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","6985c5ca64a32cf91890e6200eccc629"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","20378469460e78c0c675b3239b9df7fd"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","80d22f6e0cacd5f945074a4fa967e878"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","0f53da2784fa13fe13efb1fc906a176f"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","e0c24b2bcd886ac440e20009327e7d9f"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","ac66f891aaa7600291e48a49bdc150f5"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","fde4f44c3b2142f96146d793082b1460"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","12d8267549ab6ccce7c55d70606ac0c6"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","61794e20051a0b2d4e9863e630a58232"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","8b4774772437509c2fbf96d3397b83e3"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","65c509d53a678eba6163e1905e4c7d7d"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","f2966de70201ebf88d2271d27928914d"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","c5c8f7d1fc847fd2c9fe51b83653ec21"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","33c7b6d16bb5296deccaf7acd19edcd6"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","95ca7978fbeaecbebe13b4526cf5af5c"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","f6401b1b47519e5923cab1105392ff50"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","c19abc964fb5f7ca70c93b2d4c1e38f6"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","9cd6d64567b7ae62a72f4b91fe9f9279"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","12c16602b336e3c5ae1e438b06d67072"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","4401eff27efcbd46cc81ee569490aa02"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","0b6cbdcd2c1065545aba617d67b45a65"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","9fd4c8ed3549e2658c58673982104ee9"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","35148e78fb2f92bdacf415d37fec6dd2"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","10e236207676ba3ad488cb588eb8f55a"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","5fd15e8b002caf88e82864526139e192"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c40e8e0bac83f9942f8c771c1d16fbee"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","972c1a1f49581b61ea3d5f9031523d26"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","1c37ecc9f9630a4f459f36ea793f3898"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","a872a6c7fd3b4db52c1eb653cf5bd750"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","36ff6ee6e5fc48a11a559045993093ff"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a73143eb317113d4d56033751eee8f36"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","9db48aac62e69c38cc5fcf11929ac289"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","5aae1dc25ec9a97391d265a2eefe7b5b"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","b18389863d9d7139dd136f0a0a89877a"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","016175fd4c294821fe8d158ed5c68d95"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","3bd84c503c5d92810005a7c792055147"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","51c46855238fc4e7f9b37d1b9832345f"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","108ad1aeb435afe016715f1ab170f9d6"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","ed66fec91ce5b7f1b76fa7d29c040fec"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","d9cf43a7cf8487d7fca6668e70dd7626"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","279f2306e323a3244837bbf69045e66f"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","84fcb23051406ea5a763ffed358e5bc9"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","933e6b964a272880c66196a278665a03"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","c49c3f90f48d3c6ee8cf6e3509ec9f7f"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","33b47578601742c02fcc62b713e77e13"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","69ec8269f0396397d3b54920e63e6b85"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f14f419969824c409a4ff7022ab51ed7"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","42853984b77afca3380a3522a06ba498"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","19f4242eb1571df53483c13922292718"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","74255fd94e1aff84e580a164f413708f"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","ff6841b41243ad85d70bb6da847f9a86"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","b9c0c10e274f76fd2e16069121cceb2a"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","2e5087d0a9c4ff952926efb8526eb893"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","b816eda4209ae9cdb90816f89d89cc54"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","c5398cc35cfec03b654c448b871c8258"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","42c176b56b0d6e4421267d41f2ac47b2"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","73523a526d2ee3e47a72b8c841184df4"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","0bc8da031744a2b13cb4675991e42c14"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","9e0c27fd7bca28ced35b774467b1c65f"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","ab4de68f50cc1dd1f3874ca6ee07aafa"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","e3a485d8dedb38ca039a5dfb01ba5cee"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","4f7ffdaedb12c4942ea9bcb381a2eb26"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","bea009673585942d8146db3dd7a8c156"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","012a8edc4ffbcd7b5cb8109711e000d0"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","b999677fd0226a258b77885755d68708"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","a439bc93f5029c168b15156482d7a7b9"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","0442f9a5783c4cc984268ba0758bd83b"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","f7b5c93763a420037527ea809e158906"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","3c34cdc1e7bdea926627fe63adc2285f"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","5b7d21b2be0b40fee4120ea102c513ea"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","e0da78dd099fd7f5e7cfc9ac7bb018ea"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","374d949d7576fe3da9a466933231b693"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","0a9b35556effa76c74661f6aee79699e"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","f90e0ad7f195ec9a92217232d02d72fd"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","9e8eb212454efb74371b4a3bfef310c5"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","109235278eb2d91539e5132fe9835dae"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","a4e32beb8492ea964d1fbd6caa34ebbe"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","aca154ced01efcf59fd1df9a44c4ff70"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","4c2825b4d247d3ab6a53b0f9f4b30f2b"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","72bd2374a6ca434c4059f82440083745"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","4b49eae896049b244a430ac93450ab68"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","5f5556f150990588faddb7e4005639be"],["C:/lmislm.github.io/public/about/index.html","b0841487d5abc60b9fb3c6ac55138226"],["C:/lmislm.github.io/public/archives/2016/01/index.html","6103cd7c1d186f1280eacb767c821b41"],["C:/lmislm.github.io/public/archives/2016/03/index.html","51f734a810a0496aac388902d1296795"],["C:/lmislm.github.io/public/archives/2016/index.html","31a9fea552c12b6b6584440620e1862a"],["C:/lmislm.github.io/public/archives/2017/01/index.html","6613518f534bdb149771d22b7ca033b3"],["C:/lmislm.github.io/public/archives/2017/03/index.html","2cd6be7867e93f257196aafeb7c3c92c"],["C:/lmislm.github.io/public/archives/2017/04/index.html","d60ebf88d07061acc3e87cf930919d29"],["C:/lmislm.github.io/public/archives/2017/05/index.html","56c2f4a4dae6f8d489e5dd0006ffe6ea"],["C:/lmislm.github.io/public/archives/2017/07/index.html","c3234af378cade05da82c41ad8ae91fe"],["C:/lmislm.github.io/public/archives/2017/index.html","bec639e5762490bc05cbc7666c6f6e79"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","d21741f83b37cd2a8ce126ffe74b7a99"],["C:/lmislm.github.io/public/archives/2018/01/index.html","a23fee738e4572b449f69a2130f2721b"],["C:/lmislm.github.io/public/archives/2018/03/index.html","32fed7b880e3c79878271227f018767c"],["C:/lmislm.github.io/public/archives/2018/12/index.html","6cec74f98ef9d99ff810d82dbd98eefd"],["C:/lmislm.github.io/public/archives/2018/index.html","5932106e0934ae39075d0d5fb7e385e2"],["C:/lmislm.github.io/public/archives/2019/01/index.html","c41aed3eed3aa02defc248b33c73cd1b"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","1011e54ae293ddb63ad6f175a571bfb9"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","29d8e4917b7655bb6e813771a3d5e91d"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","429896abfbf724cfbb3395c06bb06f9c"],["C:/lmislm.github.io/public/archives/2019/02/index.html","ff74ce8a3d810feb3c2438c0e6de4e40"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","28c3aac677db161301c8c1f34ac51cd1"],["C:/lmislm.github.io/public/archives/2019/03/index.html","4fc24de7d9fad615a7d8859e90685d0d"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","677f180949a75278f1bd487f688fd0e7"],["C:/lmislm.github.io/public/archives/2019/index.html","588e86b65a958fdad8063c295278dc18"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","da8c72f2dd4e1080667ae56f07abfd69"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","823220dc459e80f935a98a5f9d8659d5"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","d68e7ccaa263c3419fe4341ee269690a"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","5edbe34f8098173343abc1ec5df8eb13"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","a7e1528f63af8d2aa89dbc3c351f9129"],["C:/lmislm.github.io/public/archives/index.html","6e16e6e128022dff9d5abdd9c4535c1c"],["C:/lmislm.github.io/public/archives/page/2/index.html","bde548c8a5ac3c12aa5772a9ebfa87ae"],["C:/lmislm.github.io/public/archives/page/3/index.html","b2896685ed4842bafbe8cf0d65f75df1"],["C:/lmislm.github.io/public/archives/page/4/index.html","0f646f48d6a550470bfd78f065e7ada0"],["C:/lmislm.github.io/public/archives/page/5/index.html","57d7215be4050de87750cf837905940d"],["C:/lmislm.github.io/public/archives/page/6/index.html","ee8e4796361ea5fb61a73af3f4f5bca1"],["C:/lmislm.github.io/public/archives/page/7/index.html","3da305cca8f779903ccad8525882588f"],["C:/lmislm.github.io/public/archives/page/8/index.html","292b335367c3ad2b570007ecc7ab9d57"],["C:/lmislm.github.io/public/archives/page/9/index.html","84c1f222c8cceb5f7336c8a16e51a023"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","824b2ad83e34c039e50407383a966a72"],["C:/lmislm.github.io/public/categories/index.html","98ec0aee8e6a203c6a956f3a600b130e"],["C:/lmislm.github.io/public/categories/学习/index.html","5f9671c5b25001eb4890261b2059a6c1"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","2ef95d5d0c7da293e5aaf876c90d4de8"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","65cfb7088915c2e10df23c41cb14db01"],["C:/lmislm.github.io/public/categories/工作/index.html","c59fb914a6a5b0300bd3dea93d6cc6fb"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","03bd2ed86aea6dd2214f678ee901b6a9"],["C:/lmislm.github.io/public/categories/技术/index.html","9fe140528b854df7142539dc138cca26"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","3d912b192498260d662ef1107ccd1699"],["C:/lmislm.github.io/public/categories/日常操作/index.html","153a549cbfdb52e7d5fa59c81ed5f82b"],["C:/lmislm.github.io/public/categories/生活/index.html","793b7d9751c91e3aec365e46acc4972f"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","867f61ad22a832240b54a2a2d1bd3a79"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","3755ba68b322857d38b61a54e96eedfc"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","510b075ae1c00c55720c8c5acdb359ac"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","c1fa785ec861ff4a6b7acd88358c773f"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","76f5baaa4d40891c0f7ac741d3e5f936"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","0b521fa9d0717e4d28cfa604026a4107"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","d8af8b803e19321132ccc57a9e3bae97"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","d240a1c738386e08b8fc74526b6d3db4"],["C:/lmislm.github.io/public/page/3/index.html","aaa5f77e18c62e87198f1bddfff73852"],["C:/lmislm.github.io/public/page/4/index.html","da449dedb89734525cad85e00ed43d9d"],["C:/lmislm.github.io/public/page/5/index.html","11ebd8f5cd027ac1cef8a8f01176ccf5"],["C:/lmislm.github.io/public/page/6/index.html","efc3972ef18cf97607f5914beaadc215"],["C:/lmislm.github.io/public/page/7/index.html","e49f08accc2fa1cb622256516b17def5"],["C:/lmislm.github.io/public/page/8/index.html","f747eb3793c9df1c242d64c460dbe1a7"],["C:/lmislm.github.io/public/page/9/index.html","25d7c35dbdd0b09450e14d4ee0e630ab"],["C:/lmislm.github.io/public/tags/Interview/index.html","2824719495ee21273eb9fb6dadff3b0b"],["C:/lmislm.github.io/public/tags/JS/index.html","0e2c47a86812172731e7556276700192"],["C:/lmislm.github.io/public/tags/acm/index.html","0ca39c2b74ca3d30e4b404b09328604b"],["C:/lmislm.github.io/public/tags/c/index.html","ce1bb2e476c329dc32ab21a8dec5c4e0"],["C:/lmislm.github.io/public/tags/codewars/index.html","ecfc31a13b80a87dae57e36e5f7b83ad"],["C:/lmislm.github.io/public/tags/css/index.html","df25434a684c260adafe2368fa749d9a"],["C:/lmislm.github.io/public/tags/git/index.html","dce12322b41cdb84d9d8941f0c425c5d"],["C:/lmislm.github.io/public/tags/hexo/index.html","1d61b3992c471634b4c0c835b2774acd"],["C:/lmislm.github.io/public/tags/index.html","fe0bd912754b48b904ecf7c21c27aaa0"],["C:/lmislm.github.io/public/tags/markdown/index.html","5bef8de229f6a85e58d6839cd9f1bfc7"],["C:/lmislm.github.io/public/tags/poj/index.html","ccb1debf709b94f4fbd64eeab9288270"],["C:/lmislm.github.io/public/tags/shell/index.html","63a33af91c9b4ac75b1af6868134add8"],["C:/lmislm.github.io/public/tags/vue/index.html","56f18479f1492dd3ba4eb5aeecba0f68"],["C:/lmislm.github.io/public/tags/前端/index.html","477389b5980c617f0d6177f4d9a6b723"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","46f5bfd75a4464df254fcb6ab9cdc5f8"],["C:/lmislm.github.io/public/tags/小技巧/index.html","28af8ff9127952925d59569f430762cf"],["C:/lmislm.github.io/public/tags/展示/index.html","7e1ddf67079d7ade64c1e4d988dfc502"],["C:/lmislm.github.io/public/tags/工具/index.html","1b15e6ddd68c6c904b31e34f39ed95f6"],["C:/lmislm.github.io/public/tags/感悟/index.html","f866e25ff7e621ee1ef9387473e7cd6b"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","e8fdfe577d185d61ed00f632b7a0bb4b"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","133efe337790e466ecb19af1a9c3573a"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","1991e2eea166c8e512d473282bf6162d"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","3986eef70053809bf2a1a127b5da01e0"],["C:/lmislm.github.io/public/tags/练习/index.html","41a9b636d72aa66e760d14d01534bd08"],["C:/lmislm.github.io/public/tags/编程/index.html","7145d07faddee71b7d1ac9b63b751dfb"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","f9cceb502adfedef2f87b9718b6a3d6e"],["C:/lmislm.github.io/public/tags/运维/index.html","08836c7297c5577a02b674951b27a45a"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







