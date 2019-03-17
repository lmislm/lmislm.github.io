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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","8e56869d0b7cb92d618d1ad527d7c66d"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","5f200ed135d6ca3f0b484e46a3ea59d4"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","45d930c66a17fc43d0fef454c80efe2c"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","63b125286e55d522898e4d2591001037"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","41fe84e07f14ca449c5884f696cf6cc6"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","360fb7110e0846fba19a91f7e9834278"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","c49f29f4153cafb2106ec0a0112c39b5"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","2f83bdb22cbce38ac4c33364b8ca8d78"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","080f344bfa947d628a3c359e81a7de66"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","c6b5adada8fa6a98d20a986a72277438"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e8f87ea384feec75a7a3aa14298544e0"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","043781a5b589948147069b9306f31b0a"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","1b2bcb99f061310ebd8690000f9ac3ad"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","00804a73ce84bfd18161087807f8fbc0"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","15da29772570a30be3c5abd209d15939"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","1f804a24b4d27cd8563b7628cfa86514"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","e5fa6f5e46a510847b278a7e56eca9fb"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","eb0888995239c1fe319e06ffd0c6895d"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","26007127579f9c185736538c3455a3fa"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","2665df98bc991177ed62ce3f319a7260"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","3af2cf03c89d4fde30887a9540481589"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","315caca4cae89dcadfd8045b7b675ea6"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b43051eb2924320ab5994fe08ab84951"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","a13ee96fa82409e1221f287f7ff1067c"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","93c277d2770791e12f679accaada37e9"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","7aa3a47fdf5fb0932e4476821bd0dfc6"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","c1b61bfcf82ae22370354ad66feb161f"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","53a6ef59786b397efaf21fc2aa6d97c8"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","eecb3713a1962cd8fdf8f5d6977406ba"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","9a32b7059d83732c0e1debf643f0d56b"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","7bbde2ed3474f6f1d0485d6d277fdb6f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","f54447fe3ee763a0bb012e03ae6c7556"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","719cf01d799db2488f08fb380e624455"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","083e7543642df470ca2cfb18e4797e69"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","bc23d152ea4589d60a7bc00c059e63d2"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","4bbd3647c7c83845992707cf4b32277e"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","76f5e014c70b83d7a19fd9d9d85bbeb2"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","c3674c483276d9f90efb8353e53dd4a0"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","1fabf316b6922a63035770c06cb39b06"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","5ff883556f3f1ef65d7fde09a1254191"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","cc708fc0827862aedf954592d2339128"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2a990caa464a979fa3f4c3f53b93293a"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","7d53e2dc3daccb4ac086b1455bf89cac"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","925c56f0ded6289e37decd44ecf06f98"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","51be46fd585f7a539635043a6fee4205"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","19d4087aeae6af8cfa3b07172725cc0a"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","f479cb53174374c3aec02bdda60fbe4b"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","21276546bcfb2c10a370ae23961bc175"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","f4cd46f80f5317ef36eceb05e3de9c07"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","9bef2727f957b98714f42580b13b65b1"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","069399069ae940d470debbd3d8aa7e71"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","7137658ed82edb42bc832ecb54d94ad0"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","709d49e89decccdd21194860a704707b"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","d13e3e145e203c7d6a94d5ae4b0d3458"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","8773b6232e16767c2e13e30ef0d9de97"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","10e56b6c7a1c398568a159d8a517ff33"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","b8a275be01980bede53c392de52cb90b"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","5605d95148589297aa44748a3773894a"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","849794f6a97d6406ad037a67ec2e4e2c"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","94aef9e0f1f9e3dd05161c031c49ccb5"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","d51fdcb1a92e3bf12a33a8d5a4733007"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","dd8a63418438940dc580ab0191253b69"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","2ed9230699d1953d3878be2ace19c309"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","e5e5fbacdd363efeb2a4685c2dd941f5"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","de02d6e048ce1207d04f6a39450f1969"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","fac90a303a63ef3af6aa36b6731fb293"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","2745223db972b6c8d003439d02e4bf3b"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","4faf35b9d589a4c9bb7f88f62cc0d4e2"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","8398118f8a1b4bc5213302c8125557b8"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","0c034e3f7bb71796c70af69803edd4e1"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","2fdcc49218d2608e13e57e6cace5f480"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","5fd487e461e46d846e63f3e720094521"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","41150ad9a927fffca44664a2efc0ffff"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","a9c090366f74239a66d71989ee8191b7"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","f800a12054cc752c674871bd3695ab01"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","73a2d3b9d69e8a4e210ffd53546a20e7"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","4fd99216082d5a4f26a15f9581fb66a5"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","a1e475f9addb100bd41b0191a021cfc8"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","9ee1a66783cf9939ae46f8bb8e9ad1f8"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","a2a21e5f62738f520fa722f9897f62de"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","79afdda2a22c54e139eb0eaba1147213"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","0a4ca5a11c1c3448bb605428c018bf5d"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","0f396e186e1a8dd714cab550b37c798b"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","f407d44cbc966eb7e7f0fd5e47f2ff69"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","0dccb16be74bb20e3d803ff42c51da91"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","3debb8d6f0582a6d637b4c56532b1c5f"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","18921b42e0e03ac17d425fc72fd30be4"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","567591d4e5c52c66fd21d69d51454b2a"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","bcc0892aba9f42b96e3d543ec6fa10ba"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","9314186f3ef4be79192a9a0561cb98ef"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","d228f62526b0a5131bd74cd3b846913a"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","6c8bade28ea4170663466b240c75bf32"],["C:/lmislm.github.io/public/about/index.html","9023d1f2c9009dbfc2cff80c4a9d5aac"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c26507295b8769987a8cc9f8c5a55316"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8baa60d6c05c5e73a4d81328415bde09"],["C:/lmislm.github.io/public/archives/2016/index.html","fff8dbb86b60a65f397ada36d3def8fa"],["C:/lmislm.github.io/public/archives/2017/01/index.html","1c0ed27c7563fc0681dd23b49f5aad97"],["C:/lmislm.github.io/public/archives/2017/03/index.html","1652e5d216260c04a65e31d4978ca48f"],["C:/lmislm.github.io/public/archives/2017/04/index.html","d5cd568bc259bfc9b565eae4760c4a79"],["C:/lmislm.github.io/public/archives/2017/05/index.html","68dca394d8a10ae15c2f4aa7ec753c5c"],["C:/lmislm.github.io/public/archives/2017/07/index.html","7581e88f2d935f417981faeda0060c89"],["C:/lmislm.github.io/public/archives/2017/index.html","cf3f89192445fb497271cd919338d283"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","5869fe7afc232303db41c4f08d349aa8"],["C:/lmislm.github.io/public/archives/2018/01/index.html","667f51333fbe305662be5a01984ed168"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f911c6b804fadb99ce2ef2510d703543"],["C:/lmislm.github.io/public/archives/2018/12/index.html","a4c142a50902f15c9de53fb58369624e"],["C:/lmislm.github.io/public/archives/2018/index.html","5e79a74fcba840d533b07ad7cbe82bde"],["C:/lmislm.github.io/public/archives/2019/01/index.html","360c8cad5999fa98b5d0f1d1f824fe77"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","1e038090e10f1e22a426f24ca7624691"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","97ea5e4ab6540e760a5473297b89cabf"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","352fc0643f5fb26abb5a2ac376fe16c8"],["C:/lmislm.github.io/public/archives/2019/02/index.html","3fb8630d11ce5114b1e186e8f2b6d434"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","93308550ab0fa50d0f44eac5fd9dea84"],["C:/lmislm.github.io/public/archives/2019/03/index.html","2ffbe316f2a0738d46e292fa7418961b"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","5cf6ec8e18034c5d2b1ec8c24cd33fa2"],["C:/lmislm.github.io/public/archives/2019/index.html","c45ac275e825538de714c29513595b5e"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","e91df3f732930855366423fbbd1feae3"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","b9561108eda1e9148d39a7091c2cb931"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","80fb71ed29532f3b57a76fde85b3abf2"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","82f970d2d23cdc12abc9bb9ec0488ce2"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","612cd24bdb392fbae0418337e1fba7a0"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","c44fde6d646ae8fd22d79577ca1d7d00"],["C:/lmislm.github.io/public/archives/index.html","458bca15717f8025411ea0ef2a90467a"],["C:/lmislm.github.io/public/archives/page/10/index.html","6a7b5beb448441f5904ca134ac9db7cf"],["C:/lmislm.github.io/public/archives/page/2/index.html","d960663403bb5a6c71903bae852eea9c"],["C:/lmislm.github.io/public/archives/page/3/index.html","cb5a62aa92e393f7114736d2c0e5ffdd"],["C:/lmislm.github.io/public/archives/page/4/index.html","d6511f86bf7f0ce8509f25486721e979"],["C:/lmislm.github.io/public/archives/page/5/index.html","29e6b1335e0385a15a32fb3188161c07"],["C:/lmislm.github.io/public/archives/page/6/index.html","ad0537a653ef3ae58e4a0ed8c51a6c0c"],["C:/lmislm.github.io/public/archives/page/7/index.html","faaf683c40b864757b5170d5ed6587ce"],["C:/lmislm.github.io/public/archives/page/8/index.html","ff6394b9a5af9a7edaa460ae4557946a"],["C:/lmislm.github.io/public/archives/page/9/index.html","9cda1bcea4fbb806bfdc5e1fbf2d7c2f"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","6ca14202e835f6f92e7f57439840e9e5"],["C:/lmislm.github.io/public/categories/index.html","d58d3050e47cdbbce0df40607bd381fa"],["C:/lmislm.github.io/public/categories/学习/index.html","c6bdcddb8c5c3b852b03ac302ec266fd"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","83054b2250d5ab5046ad34283a5a87fa"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","a52ede390119b647fbcaaa4a3239a9a4"],["C:/lmislm.github.io/public/categories/工作/index.html","cdb304153bba91b421c5420db598be73"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","1e73c7e4dff3863dddd81a1a71dcbeb7"],["C:/lmislm.github.io/public/categories/技术/index.html","faec09f811629af746fdd3b93515828b"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","c087f3867986fb889b5726c98ad7f2ce"],["C:/lmislm.github.io/public/categories/日常操作/index.html","146451ccf9978b6b18bbd8a56f0bc1d4"],["C:/lmislm.github.io/public/categories/生活/index.html","7a5a6da58e7d32046b59d44372087d0b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","9b561396795ef1d464982ec98b21986d"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","dcca6bb2925fe5a6a21f74d923631b0b"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","e9831e13cfdf85a2e630c9cfffcb24fb"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","7446ce3a652b735fb8dfefb61f41cebd"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","8fbb976963e5224c59d5f0ab40687198"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","576b0d08090dcdfd20f44f2789005880"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","bb931197cf45e6f0a7a04414044b2c4e"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","ee69aee6c338c344cc129699dee48634"],["C:/lmislm.github.io/public/page/2/index.html","8e488e1d1473e998c969ad90d2a4385f"],["C:/lmislm.github.io/public/page/3/index.html","5ddbe42cd955cb37915e12779b622a34"],["C:/lmislm.github.io/public/page/4/index.html","163694240243112ad13d7f662e05d081"],["C:/lmislm.github.io/public/page/5/index.html","ef0b3b5a3c42c5c746ca2ec0879b1186"],["C:/lmislm.github.io/public/page/6/index.html","c0e75011804eed36d22283e241158bc5"],["C:/lmislm.github.io/public/page/7/index.html","53bd4fe529b08fe9ff1a50b3c0194c41"],["C:/lmislm.github.io/public/page/8/index.html","8f117962088adca21e648daaa6dde4da"],["C:/lmislm.github.io/public/page/9/index.html","5f2760d6ae6fc6918c9f79389794a65d"],["C:/lmislm.github.io/public/tags/Interview/index.html","e99192d3c2abe5c5557eb603c9a36417"],["C:/lmislm.github.io/public/tags/JS/index.html","60f592b6e71ccea865a804220eeb466d"],["C:/lmislm.github.io/public/tags/acm/index.html","5c72510c27928bbe0e9689028a61aa2e"],["C:/lmislm.github.io/public/tags/c/index.html","3115afd5bc4eb5900faa60af523f9d51"],["C:/lmislm.github.io/public/tags/codewars/index.html","811423867cbebee6eb5a6caf8c574741"],["C:/lmislm.github.io/public/tags/css/index.html","6828a7a282606137bbc2cda742958764"],["C:/lmislm.github.io/public/tags/git/index.html","6ad034c32c6f593560f35989feda8b2c"],["C:/lmislm.github.io/public/tags/hexo/index.html","14bf9aaadaf07041a5a04bec7c7fe353"],["C:/lmislm.github.io/public/tags/index.html","f4ff88e0feab25c2d62524655ef318a1"],["C:/lmislm.github.io/public/tags/markdown/index.html","bfb6a116c685da6a5c89aead5183e607"],["C:/lmislm.github.io/public/tags/poj/index.html","c9e66fe9e1788fb9340be3fc3b6f23d4"],["C:/lmislm.github.io/public/tags/shell/index.html","0764f3425a3b57e4c1c523754f708724"],["C:/lmislm.github.io/public/tags/vue/index.html","f1d3f395bde41b8f124e75f4caa4f0d8"],["C:/lmislm.github.io/public/tags/前端/index.html","6c51b43877e2d7507cd81ff81bffcc9d"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","1ec4edc9d5e9e3157d33a7e90ff90ce7"],["C:/lmislm.github.io/public/tags/小技巧/index.html","7d4fc5d5e5aec5886be3dfc7ef2da012"],["C:/lmislm.github.io/public/tags/展示/index.html","3fda26b09a09ec4f0bcc1d6e083cea1f"],["C:/lmislm.github.io/public/tags/工具/index.html","acffec1910bc6f04284a8aecd6bc2f99"],["C:/lmislm.github.io/public/tags/感悟/index.html","b4c6c8628ee74a63c110573f8e565110"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","fed127e6354f536e3020313e024ec574"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","bae161d5626db451be4b74c453d93581"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","73a0605148d8c047b7ad42ee375a33a9"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","3aa4a6e2bc2ba0316917a01c77b98684"],["C:/lmislm.github.io/public/tags/练习/index.html","f4b536fafb57bf461ed896da7acab97f"],["C:/lmislm.github.io/public/tags/编程/index.html","cbd6cfbb919475b3b78d138f4e42ea72"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3ad37032743ceff8cc3201cb91e933b3"],["C:/lmislm.github.io/public/tags/运维/index.html","3287ffc98f3c7e8f74c796bb2fa9b925"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







