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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","6db6dc28403b49bca97816ef4a35e536"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e903a33c5bd86e815797b5208c568576"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","7231e448dea3f35f88941be7aef9e697"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","1429eea9115fd8d8c54736b523e0ff4a"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","44315c9144e48fd5f3ee2012c7e3c1da"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","2dc9712dab315efa9d0f48df00815f74"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","a8e2d1144858daed9b228bd446600056"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","42ea337351bcc51ae5ce00f9c74e836f"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","a434159ce0d18add08625f7912f5cc12"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","58749d9ab75bbb94799059f69e7af5d2"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","6d212da0582588d948379e8099ebe0f4"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","1730ce14ecac9c1ca255282d51ddad32"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","740c6389c847227b1e4f59ccdb2e27ad"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","ffe9f18a6b2f49b44041db5f113eb1fa"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","76072efbbc4ec6c52c9262a599b9aa82"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","9be96d68f69c8ee674bbceb81ec83908"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","7c9219829f31dd326f92d383bfffb38a"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f2375968154b1ab2b9bf70f14c936898"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","60d8c7878d4663dae2335a9e0586e4bc"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0904ab59d5f6f9058cc482b94c7eeb8d"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","707291419b03c38691f920021e259536"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","222933f7ee0a78f41a785386e2e35958"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ef1138ac14f4c0fa79472280a24c9ca9"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","c80351187790f4f99b19abd7331e5731"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","ab0d3a4ad9bd0c737ff50b4ffef207c5"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","73d4d4d42d615a10afcd3c643a7d74da"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","89ea3536a8c94fd477296be3a08fb19e"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","ea1f6045a6b5e1ce1e90eb2f7ea2ea96"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","3849467f6614c40a800e7d874878747b"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","bdacf64e0720a00a57063fbc34eeb15a"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","67d60e5d6da8d19dff2b43f62715e79d"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","f1e096384f017b761bdbdcea24b0c6c8"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","04fe0a08882ce42a5de83565fb0ebaec"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a01016fc4f3c05057fa601835a4ae130"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","719fbf487ffa343a98ad134cf45edd1d"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","e14c28fb033cb307b06da22ac37be04d"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","7baa0b47417f404329de341624dbc3bf"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","eeedb620c3f27836853c004bb3b7f384"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","aa5f85e73670e1424805e7a5a29749c6"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","58d4c68401612f1d9a4374e9de786681"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","f4f460a36712588d7ea895a026237a4a"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","6ab9efbbe997497ddc74abda630d1482"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","ad6db85b17aee5c744c78f3e62749500"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","5a842c47a1e4c8c469c303f0efe9608a"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","088f0fb939bebb7c4fc244ae409c1172"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","bb1656ca68180fcc451b9d3eabe71323"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","06540a2e60d2972909b6782a1a96d571"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","fa3a9102009057958e1b859cc4ddd975"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","1270fed421a7d6584f2e38a14b040295"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","7a24abf5aa5a0c45e6f91f40859c0d5b"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","52c3a96f66f4b92a6175552fb293a7a8"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","a540de8dabf6b8fa9edf9f6714feebf6"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","e0ffc8cead76742ad7ec94d5c4c0edf1"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","6409a85b4fd9db06f38ba28415ad2bb3"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","6b94e85109216aa060101eb6a9fe4f94"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","bc0fd35bfee8413e00c16b2812ec9d84"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","22d17ae970d1c0b8fc33e1d1d09448b4"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","63886edaf101081e1ee41863d2a7f19c"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","68b0c9d0bf82f3a1bbc80ebe13cbde3f"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","aa9c66a2747995bfac2556c017d66c81"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","36833b23dfe706c59264a058274e4110"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","48b66b5787a8c89522d0b6d209023092"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","8f3123207974a6ba5ac285d3379eed36"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","893638d014e091cb51fde84159492c7b"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","ce90c9495561a8153481e43ca7517e4e"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","f2c66c62ee772176203ba90722b2e451"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","4fecf1a1f3d8e8f36b26fd15f1d167ae"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","0b8d54d7fd829bcdc0750829e4985aa7"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","0e3826a53590d868a36170ef81479530"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","5b3434a79e9511b6a29cff154bc06214"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","277b9b42f07d486364b4ad5f78f96230"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","cbf39eecde33ba5330d04f7c40b8efbc"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","730571dfdcaa067bd8b0383e6ed13c46"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","536882828c27d3f03f91dfc0847e6ea4"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","e9914e65c0e4518771551f721d50acd9"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","fc31276cb9b757622bbb9676073ff789"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","9a38c36606d2dbcaa0b032616fb29d2b"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","0590bd734ad6abd4493bd5733861f26f"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","d1d40bda5ba9610fbbb238dcd687ab31"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","b3a5e962f5d4f5546db5d06620386cac"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","6a612397f37b753bd5af4ebacb8df426"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","29a355278ea326265eab9035c7f26c49"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","c797198adec709b320894d177df6b438"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","481ae5fe044540485bac917fe97e7c2d"],["C:/lmislm.github.io/public/about/index.html","3d02d27c0e997933c8b302e31deeec2b"],["C:/lmislm.github.io/public/archives/2016/01/index.html","50bcafa34c4e3facfed3a8facecb5fc2"],["C:/lmislm.github.io/public/archives/2016/03/index.html","f603d180de08a5201a3a66eebf4c2eb2"],["C:/lmislm.github.io/public/archives/2016/index.html","0d31f60ab18c11d48acc7ba8d0c8631f"],["C:/lmislm.github.io/public/archives/2017/01/index.html","64ff9f2cb90a0d0e0f5bd3358a4e7bff"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b5eb89abba83512f7e45d869c147a7b2"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1fe44898f42861d2463a57822870ecd9"],["C:/lmislm.github.io/public/archives/2017/05/index.html","d1755f2db6b223c47f715f13f90c11d8"],["C:/lmislm.github.io/public/archives/2017/07/index.html","6754a0ad08a5e580e51265a9b8bba829"],["C:/lmislm.github.io/public/archives/2017/index.html","4d1c17bf7622503c1290933ff1c54a2e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","e70ebdd65df428c5f5aaa50a6cef2d1e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","9a27f4d4455d09fb9cd9193956f0d25f"],["C:/lmislm.github.io/public/archives/2018/03/index.html","1a4891fb410c45361a0d206ea7cdd929"],["C:/lmislm.github.io/public/archives/2018/12/index.html","35b71d57768a384f1b855b80e1a90b20"],["C:/lmislm.github.io/public/archives/2018/index.html","45c36ab2b5cbd4537913b53c19e7d01a"],["C:/lmislm.github.io/public/archives/2019/01/index.html","e9e457ec9576f8e9d3c800a4e2453e99"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","ca4e503493fe48487ca48f449cb8b868"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","131df274fe8f796bd8b3272bb8b91993"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","6221567bcf9ee7fe7f10efd5d959e53e"],["C:/lmislm.github.io/public/archives/2019/02/index.html","21c52e65edcaef5385a801b0c647cb4f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","312ed41e0d7ff533ceff8181d6f19de6"],["C:/lmislm.github.io/public/archives/2019/03/index.html","5d7fd74781c93edaffb67048bf1250b3"],["C:/lmislm.github.io/public/archives/2019/index.html","ebd2a9935a373b31c7ec3f641789ddff"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","9879972758901d59ad27ead6020ea5f8"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","4394302d2e1a363d25cdb3163822f624"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","85d854f3959a79e2d603814b217713cf"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","b1da5add45a0d66695d7d09b30f8ac20"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","df74ca54e240896fb5048cbdd55da4b0"],["C:/lmislm.github.io/public/archives/index.html","5c49ba636f933e94841b89bb50eac6d1"],["C:/lmislm.github.io/public/archives/page/2/index.html","b9409085b30074fd36b65b8645b980f9"],["C:/lmislm.github.io/public/archives/page/3/index.html","1565d099e5e8a81a1ba0216f264bac92"],["C:/lmislm.github.io/public/archives/page/4/index.html","84f1efaf101b5bdad9eafe57d98449e8"],["C:/lmislm.github.io/public/archives/page/5/index.html","f7439fdc1a9ed40f5130a55b7eb81305"],["C:/lmislm.github.io/public/archives/page/6/index.html","48be37a5612b416810c3b32e6ca496f8"],["C:/lmislm.github.io/public/archives/page/7/index.html","ba3a7c28779bc0d499d63e55cb73246f"],["C:/lmislm.github.io/public/archives/page/8/index.html","29236cca92cfb3122e3f7cc3543e6236"],["C:/lmislm.github.io/public/archives/page/9/index.html","4f9eb023ca3ffac13fbf2dadeb24771e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","259ce1139790036247a0db4ab02507f4"],["C:/lmislm.github.io/public/categories/index.html","dec21d07eb267df0f2866e25dc9d59e9"],["C:/lmislm.github.io/public/categories/学习/index.html","3bd5f3c646b39954dcfdc2197be5a81e"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","62f96dec8cd0a5d2c639e571026bfc7c"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","29b20d36bfd2e1bf33b4f8c94de7933e"],["C:/lmislm.github.io/public/categories/工作/index.html","c68565360d8da060261ecae05845dcb5"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","690787a32aa9a55ce7daae9fa58481a4"],["C:/lmislm.github.io/public/categories/技术/index.html","b7d9e8354cf4a21b3c09a20d4f1bcc03"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","134ab43394a8b8cfe75019bba3e994d7"],["C:/lmislm.github.io/public/categories/日常操作/index.html","34e516fdc120cceffeb21f18f7e2e840"],["C:/lmislm.github.io/public/categories/生活/index.html","e5726f83938217645787f6e1ef08e384"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","9203c21c1a02306274ebea8337a0ee99"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","ce8ff9fb360dd6ee10a42536045aabb2"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","c102dae8af44180ce7a5ba6c40921c09"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","d61cb0dff96e58db64de7fd04b7b2c77"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","0ed8e47086f90784a2f400cab3b9aad9"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","d244692f5033a980c1a12f3fb5d7dc04"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","7ab65046fef6f6fcead1fc402b574202"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","162bc880b869b8f0e878761ac8d5d766"],["C:/lmislm.github.io/public/page/3/index.html","a506940dc072f2854c98cf4477eabdd5"],["C:/lmislm.github.io/public/page/4/index.html","89057269304d7e01e8b6d79889a67e27"],["C:/lmislm.github.io/public/page/5/index.html","321406cff9dd2ce4060e1e7fc3141cb9"],["C:/lmislm.github.io/public/page/6/index.html","7511fc73c3be3183b7b09fd5f220927d"],["C:/lmislm.github.io/public/page/7/index.html","112a5d20ad2aa44d8b9dee1ec9ccafb6"],["C:/lmislm.github.io/public/page/8/index.html","3b8480b53001823b7da66aeac44fb75c"],["C:/lmislm.github.io/public/page/9/index.html","65a79c961a1550d1a49f7ff098cfbdf7"],["C:/lmislm.github.io/public/tags/Interview/index.html","0d3c5af62be2dae311b8ebb9bb7d2c6d"],["C:/lmislm.github.io/public/tags/JS/index.html","a1978fccf6d9c6220d7e918d1d407a04"],["C:/lmislm.github.io/public/tags/acm/index.html","4720e25b8c6b1e8bd7af56d10fbd0bdb"],["C:/lmislm.github.io/public/tags/c/index.html","dc79ca7cc284fdce2baf5866157566ec"],["C:/lmislm.github.io/public/tags/codewars/index.html","a99abfa815538d3f47f3b349110c9cf0"],["C:/lmislm.github.io/public/tags/css/index.html","3252b6a1f1db7f45462e63d9190d63ca"],["C:/lmislm.github.io/public/tags/git/index.html","f92abc5b6c6e227f109e75a0d0dbf5bf"],["C:/lmislm.github.io/public/tags/hexo/index.html","d2c02c4f887fcefdbd3df26d781d4ac7"],["C:/lmislm.github.io/public/tags/index.html","0ea8f6869814757d9b37c8f932463224"],["C:/lmislm.github.io/public/tags/markdown/index.html","c54ed7acaf5776053d5355522a9ee68f"],["C:/lmislm.github.io/public/tags/poj/index.html","c53bd21896031e40c2fb5ee3f9a6ccb4"],["C:/lmislm.github.io/public/tags/shell/index.html","c3e6a7abc9045bb3c9d677a3678db04d"],["C:/lmislm.github.io/public/tags/vue/index.html","e002278ff3ed2eb551e593cd7e2e8260"],["C:/lmislm.github.io/public/tags/前端/index.html","38586294f500d706c373f4eb0d93110a"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","ee274ff7c60212fbe486e425c2c8f3de"],["C:/lmislm.github.io/public/tags/小技巧/index.html","b87eeb023005de0ade86027d3bcc868f"],["C:/lmislm.github.io/public/tags/展示/index.html","8d810ea12cb6f690e917e5d9a48fd62c"],["C:/lmislm.github.io/public/tags/工具/index.html","94a50b819b69c850c635e60c507b5102"],["C:/lmislm.github.io/public/tags/感悟/index.html","f3918e04b555ac2da32635882382aef1"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","f8ce9ca1cf0d29e55944ba86df5ceafb"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","1e4f6a2914cb1d3fdf1381ee23d43dd5"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","9a2ea5c34dbe9d22adc029fed4d1515b"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","cf813b7e632d1b35ff11bbb6e16fac07"],["C:/lmislm.github.io/public/tags/练习/index.html","39e0ade042c362489b14dc005a5b5a0f"],["C:/lmislm.github.io/public/tags/编程/index.html","dbb662289db724296e67987c7243ecb6"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","24ca0b2fb11b40c16c195f6dd3c479a3"],["C:/lmislm.github.io/public/tags/运维/index.html","c00ad63de1ad72e790c8a3240e7bda2b"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







