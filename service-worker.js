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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","82d27883755010cc7bdba7c0a5479116"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e3ebe8baff5b152704bde38d4099f320"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","eaea451a6d3e724aa36af47f78f644b9"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","ab80584fa7da1a74452369c67b9dd1a0"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","85e18a324e86e10bc6593b368046296d"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","265793bd4d8c703649cd5f7c1a13fc11"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","ce4c8b717202503c307f1055c44869c6"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","5752db477c1708a3e44383340127ce88"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","84a71c546ec19d3faac0a27093eff93a"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","da011259f6b501d8187d4ac2486892ca"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","041c9412aee7563af679eda54402fb44"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","57e3c68dfae5153697cdf984df7d01ee"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","3bcf8bfc6fd691058b90cde884d3f9fe"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","aeb6fe764f7d78d3eb78576daf58e98f"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","8f7d0ef9fb20dcb569b1f04d67e333bc"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","cf5451de65c0821826c81031e1ce064c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","e7a10884c5c907069fa73926352c71a1"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","1ada250a543722799918e430919dd035"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","4e1659f33ff36cddf2a399ec58a51e28"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","33cb455a230574f5ca5bf36fdfc8898d"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","97f651a872778bb65466b8eabc80c7b8"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","db6efe0714ef03b5c663e62deb21a5fb"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","44cc31f0aef2efff52fc6c41376eecf7"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","e722d749124da4defe5f9a5049f63a5d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","5c33f07f4986d85f0ebbe0cdaab1cb53"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","9afb10289f15f731902dfc0bb0777e0e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f21501a0c638f67263416ba3eb899b0a"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","089e30eed079e2adf726fdd161af1cee"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","26ee5806e47948a5f909c1322fa4cb77"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","c0f2d0c03a6e7490b4c97be8a991748b"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","faa71a251e41a1ece0b92fd24c8e0385"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","f0a169d0bb9be087d7d1916045c542b9"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","75710fa1bae7d3f360ba239232efe966"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","6ec2218b2744bff36323785b0b3b9a69"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","d1648b56ef2b2d2ad1893854ac775781"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","d324ed0ab7f921d1a89a7e72403c23b7"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","79b639ebc71f4e0e5fcb5971565e681f"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","c5cd90ed117404d0c8d175c0a7de2917"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","a7aa2e504712e83a73403cea6f859183"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","7b099eb89cbd24351622b0c14840019d"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","497531b666cdb97731edadbf780f7c69"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","ffde69dae796d3dd27ed8937d01cafe6"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","ff6c27b1d7eb42873698550748d7e0c9"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","5de6c1393f4350e4eb77e2c6d1444706"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","ba18151d4c47dd28e53fabfeea07978e"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","907b175168b7153ed821780dd839cbf0"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","92310a912db42fe2e578f96087760ed3"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","f0084ac9f8e569b45206283ab1d49770"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","2a714bcce5efb26e35757820d237f8e6"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","d514550c87bf29e1fd3d5efd446f565c"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","e20dbea68b0a10f4d5aa5477b8e4c99d"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","029c1c7f7954ba323a0222f15e328e2d"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","f60e747ac8661145fec946aaa9683bdf"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","548f05a92892e5743be7b98917c8d537"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","ba6c72b9e98be4ecce0d89517a6d4925"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","bcc651af901f32c2de963e00967352e3"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","fb7f9fa032f0df7cb43fa7a3dca60fbf"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","1631f32d810591cafa2e82c4823841f7"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","9bcda781388446276c77c97c5305e601"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","6dff1ef7b05721f6128dbf8835097c0d"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","5cbb8e822b22f3358071daa4ac4ff617"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","ba0884237e59dbaf1a5c2c57b5f739b0"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","7531f83db4ee00fdb5e96109e38eb3a2"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","f5d279051c2a706e36c922ca87c3d08d"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","6aaa03f45094acfa4e96b05c5dff91b4"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","8fbcf0c386fdfb2f4b6e848cab4b0ad7"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","016a1ccdb55603a3ca412ec288b3b3fa"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","f0681cd7b8d184d1e6b817aada2b2ea1"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","55930a0bc785f22d7367c3fa244e4331"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","6f7b10ae943dde6a05ba8dbe6fad9d36"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","30b8c00746ac22d269a772b0f7f64559"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","7db8c01b8675cee6e20ff6dc2dd04e1e"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","a532cc7f8ddbf1ba410249c076e48fa2"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","42842e94c758be969df06fec1d14185b"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","61df5f67a115ffb555e794419276383a"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","5b52f534f190c9b1379f5a6b3488fa8c"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","0047119a5c7139c2c1fa33814ffbc546"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","401c5be510b59998d4dc247e74b26b29"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","60d457773e87ea06130eb04c9b82bac0"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","c363b17d31bbeb11a893200cf339f69a"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","5feb8a171196231155127831f8ee9537"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","75dcb0de1a313c21d3122ee033069900"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","09aa147dd2f90b1ed1345692ddf0309c"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","8ff258d41123f6cc082592f144217411"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","351c8dd4a053b62d345cda12560f6f76"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","0e1858ef84b35312acd3e92c61805590"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","26611846f7dd79607781b436270b7713"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","f80080dbb896ce8c335b54845b4ed086"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","29dcd5114168054949ab18b10a763b7c"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","19188f46757012aa065439ea90271963"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","e15d88145e195b1c5b50f87d54b30061"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","6a13c8892459a0c9f0b3a2df24c6df46"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","3db4fce55aa74caaa1292a6c4a06b3d9"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","a2116f08078449ccedbce10afe5c5cca"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","ebc22633c00c7cd296897a336af0efbc"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","5647ae08f813b6a74876585dd24bfd1e"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","038be8eadb0e1a2b3890a5d636eec457"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","b4afa77330637941688fd9b4c95cc8c7"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","e07f7dd8280d87d39d0123784a372216"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","1fadfc84e2d032b79da49428b7fdd89e"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","838e6eee6ccd53cf040ac8cb9b923cd3"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","7a753a45b196e7d0e0dd1f406dc7d045"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","976ff203769a5223b4c239e47233f818"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","499414082174b7b95a64df7e492a4c78"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","530495127c468305f7d3a47112647cf3"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","f3f3e3ecdf4261d036613044b221c47e"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","b1925a369177f34005ab9ca1097549fb"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","b80853eb6ecd314d55ea3e537a5c055c"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","135d3fff528fdb92b0121d7da848085a"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","a6d3f01d543db907f942cb561aef151f"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","51d7a2b7dc9ac9a16e4aad587831f888"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","f65bbf3e47690b2445d97d5e2180fc9d"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","6c84d25b549130c6f8eef3c772ea5215"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","c463a2cb4e0af4e2cf0129167b14ab93"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","6703227eb6db5d80d29e275906efab78"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","62a99c5ccbd6f1eff13b82894a89f1e7"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","05a042cfd9140973f81fde3ed35fb3ec"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","8afd8df88b2341f0b0386489b295b15a"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","64a46f1df337a3fc5fe734da3441ddb9"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","d3645099d3bd9ed3358a5ca751320d91"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","e5c57878b0fd2961c522b753e078e93b"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","5e3f7a6f0637775a1dc79eca28d00f70"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","c3b327bb65acf95616752568f30990d8"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","3fa9a3c75c0b974a82341318a856fd69"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","c87728f68bed2067864ac20aa0bd5e3e"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","650f83c819a9224c3b77deeb3b08f39f"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","ce81add08738c278354677422fe6864b"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","4e10f38a84cf5f485ea8e2bda4b03924"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","f52e348a1d32f21cdf5516231f1d01d1"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","a442ce04b33f8ab6d31a23cdbbb96277"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","2e298395394c5dd33b0ed86faa0de7d6"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","f65c7b03cebc2ef3bc8f75991235439b"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","7e737e5ad278c6b8b2a9e518cfb2cfee"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","4505e4092f436538559349c0fb44944f"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","35424fb82d1df11e93bac67fcd0a64de"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","f87f34f53c9d9303c02c3a9eef270172"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","d49446f209a20dcad88e00a5a071d4b6"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","12a42cf7887a247ea34c9e8477c2dcc4"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","8d1baa2a4b3de6c8a0d68463e71c3f14"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","147294573223b9f4d27dd36679e1fd90"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","c7a42a532771842f5f2710c239dbd487"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","3a4215d9fd5e380496dd76557bb8505e"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","8fc658f3af680ecc30e369d6cb418c12"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","fa13bc53c362c29cf2d8c549e6cce084"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","0afc117b0bd4fdbe54d42262dc386276"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","edd1bb5079817aa96fdbabe51be34f95"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","4a27f59307039a29804835733040c2ee"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","03744f7c9cba9d6eeaa38ce5e777c8b7"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","f8efd3d30cc68034c995110ff5ddea13"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","78cf594df7011c4418140aa8a03f6e5c"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","024920c9b873381ba5d47bb21cc5a8aa"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","2be9d982221526ac494ffd9e1ff83c1f"],["C:/lmislm.github.io/public/about/index.html","317315240f2bb3c28d3f5efd08d84056"],["C:/lmislm.github.io/public/archives/2016/01/index.html","0fdfbc1001fde937f59aa7a6c6b9dda7"],["C:/lmislm.github.io/public/archives/2016/03/index.html","90706dcd19ac335d6fca7737b0ad926f"],["C:/lmislm.github.io/public/archives/2016/index.html","c4a19f323f396226b2b09f78d21618ee"],["C:/lmislm.github.io/public/archives/2017/01/index.html","17a3e049d59677517ffad66f571f6633"],["C:/lmislm.github.io/public/archives/2017/03/index.html","45b6d4508dfb354bb8ae9398f01e185f"],["C:/lmislm.github.io/public/archives/2017/04/index.html","a59562a6313687e6e8128dae599b4832"],["C:/lmislm.github.io/public/archives/2017/05/index.html","276156499d1f0f575bf1af064d8a961f"],["C:/lmislm.github.io/public/archives/2017/07/index.html","04a2c2d51c5d6c420e0183219977344b"],["C:/lmislm.github.io/public/archives/2017/index.html","ec938fcafd289355df150559ad352c4c"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","76fb04bb4c922ec83f7f21763085400a"],["C:/lmislm.github.io/public/archives/2018/01/index.html","62190bd4117c96ebb986d1856bbd3d73"],["C:/lmislm.github.io/public/archives/2018/03/index.html","d7340597f0bc23cb398a2ecd103b361d"],["C:/lmislm.github.io/public/archives/2018/12/index.html","2c489e5cb8f87bd3f9cc4097938d0578"],["C:/lmislm.github.io/public/archives/2018/index.html","30367a25835fbbf127b523a9cfe5331d"],["C:/lmislm.github.io/public/archives/2019/01/index.html","df8594f7d7b032d6d4662bdc2544c68b"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","ac4788e5ca5abe8d4eca0d284b807e5a"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","5d58958fccf6c6b2ebe2e00c7afc2b08"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","405a9ed30fb3727603b0679d78e853c2"],["C:/lmislm.github.io/public/archives/2019/02/index.html","24547a39e14c115c9761926b427a4ce9"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","a25f6032840245e4aa8d45117e982252"],["C:/lmislm.github.io/public/archives/2019/03/index.html","f6c450072e27ac2f8eaf0b9072a8d1f9"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","da94c7d8e2d6c2e55f7fe7083487f57e"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","5db72c0f74eb08c464a49624fb2386d5"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","e0b1bc717126b0dd862236a07911af0b"],["C:/lmislm.github.io/public/archives/2019/04/index.html","a4d2c86ec555eac0069c209b9702c88d"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","5bb567ab6fdf6b4f700018686e081ed4"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","c1952cb6a5f5309308425f9140c0c939"],["C:/lmislm.github.io/public/archives/2019/05/index.html","7b30aefaac9c7837785fbf3ee283ba42"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","1efe6b735fded552937aa0e19d0aad4c"],["C:/lmislm.github.io/public/archives/2019/index.html","bd1e769d924028e28f219cba29641b41"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","6351bf273600f8b361305db4b5feadbf"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","783aef7b317baef7b0baad71b7fb4f74"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","073e7c39012c06ee9abd9ca1b6974381"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","b20dd70dfafaebfccbf9e4fb00fce00e"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","977f7ff732dcaf84826f2544e79bbe47"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","edf10bea3d0ec40df212d3b0bf60ef0b"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","1cde7d28635c9c2763118578e4e93307"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","9ba792e994ec37a10f7b940a33cb2f75"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","cf8dce83e8a4264b8bbddb4a52e21c7b"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","a0d2277d444bc01a554994ac650fef1c"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","328efb2cc530bcd47dd88f23498b3992"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","4341c1c482adffe7743be6fb37502110"],["C:/lmislm.github.io/public/archives/index.html","8ce5419ba5fe13524e88bd7c648e4d97"],["C:/lmislm.github.io/public/archives/page/10/index.html","79ce3a0b856fd68ec934daab011c9e2f"],["C:/lmislm.github.io/public/archives/page/11/index.html","d2975fcf9819cbbcfe6b98d3e64d4bae"],["C:/lmislm.github.io/public/archives/page/12/index.html","7616003c7a75e0bae012df9a40fb2331"],["C:/lmislm.github.io/public/archives/page/13/index.html","9dc9fd39659a17fcfb78309773343ed0"],["C:/lmislm.github.io/public/archives/page/14/index.html","da3125974087271507a182f01c1fa537"],["C:/lmislm.github.io/public/archives/page/15/index.html","36fb0cee234f4e9a957ba8e740985915"],["C:/lmislm.github.io/public/archives/page/16/index.html","1aa69dfd57864977a9583f0f27fd3732"],["C:/lmislm.github.io/public/archives/page/2/index.html","807ea7957a660369da44ff98d3796a36"],["C:/lmislm.github.io/public/archives/page/3/index.html","dd346a702b1055d3eecd5a04173f7458"],["C:/lmislm.github.io/public/archives/page/4/index.html","4292f0a2cde629fb31728553f28af22d"],["C:/lmislm.github.io/public/archives/page/5/index.html","b6cf3abda25eccb93e7c717bcf10c40f"],["C:/lmislm.github.io/public/archives/page/6/index.html","4dd0784d6f4043e03c936db3be4e7fe1"],["C:/lmislm.github.io/public/archives/page/7/index.html","b7a27c55dc6f08c4770ea01f5c35e6a8"],["C:/lmislm.github.io/public/archives/page/8/index.html","3846767c9edcd87ed1f257dd55749fa8"],["C:/lmislm.github.io/public/archives/page/9/index.html","19beed66608c36b24cf696c694001f86"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","1980d6e4a182d63e7e5ac0c06ebe0316"],["C:/lmislm.github.io/public/categories/index.html","c4c081ed4501a150f75b51ff0465def9"],["C:/lmislm.github.io/public/categories/xx/index.html","e24307df9abdb0c79b8c4e3236af85ee"],["C:/lmislm.github.io/public/categories/学习/index.html","ca44882ebd06af28e871359339a74ded"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","765425c0ed2fa041e43e3059f09a4b7e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","c4c4d118d311e5e74bbb46086c7fa1cb"],["C:/lmislm.github.io/public/categories/工作/index.html","fbe3004cbeb1441d2dcb2bc753aa193f"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","59d54c567cabbd19afb8fe4ad2916e74"],["C:/lmislm.github.io/public/categories/技术/index.html","c3e0f9b9c1cb155e707c70ca18ef2c90"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","23b1260901661440a0ada73b19c8328a"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","34d36b015b6b4269da55f389a7d91ad6"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","f3fb11f236da5e0f0f9a0208c75c01dd"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","12b81d18ec00e3fd2e72bc67d66d2f76"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","79dde89ccdf98fa88f89c2615c5d459a"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","7529571da0e46decbc08f851ceabd295"],["C:/lmislm.github.io/public/categories/日常操作/index.html","471cd4e02ae58028a6055d4ccccea74d"],["C:/lmislm.github.io/public/categories/生活/index.html","003e45476a506887bba05611a4ffbe00"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","9fc18eed1c286bbcaf09be3f4c7c0890"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","7ff21d8a574b82801f71d4fd77b8e9b9"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","076ad5a8daf151c929bfcdef04bcd3c0"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","250dd1f53158919ab3e5931494982195"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","5c83c35eee0b3a69ce99343e3fd65e19"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","fa69b8ba881eb83cf3f9409019b2bf41"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","b4c70fc66cbae597b59681aabb42075c"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","66badfcd4ec0ab19881b129c1a378684"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","d7decafbb69fba203c4ba6c6368b85f1"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","5633bf1fdf7bcc8616aee5829c7cdcd7"],["C:/lmislm.github.io/public/page/11/index.html","5e628b05c049027007817f00fa566c05"],["C:/lmislm.github.io/public/page/12/index.html","3ce291578ba0bb312c82e7bfa409f83f"],["C:/lmislm.github.io/public/page/13/index.html","a2c1e176eefe2a882a162c75e7ce0a7a"],["C:/lmislm.github.io/public/page/14/index.html","4ba53ab1e7414cc785471c9099a3274c"],["C:/lmislm.github.io/public/page/15/index.html","2fcb0136ba8877f588647a9fefa30579"],["C:/lmislm.github.io/public/page/16/index.html","1baa9503695bf33ba501cbbe135f4b04"],["C:/lmislm.github.io/public/page/2/index.html","bf870f2a15fb9ebcf07e4ba438d6948c"],["C:/lmislm.github.io/public/page/3/index.html","8d30a0f3e77c6b12d35b198b90440b90"],["C:/lmislm.github.io/public/page/4/index.html","7317b3ad49eb25cdc96fb7cb1c51a643"],["C:/lmislm.github.io/public/page/5/index.html","2ba9248be6ef3f49eb45b929789a9f3b"],["C:/lmislm.github.io/public/page/6/index.html","b99816679098b47145c89321055bd7d5"],["C:/lmislm.github.io/public/page/7/index.html","c9c2562defa0076c122f6aab2ce9e573"],["C:/lmislm.github.io/public/page/8/index.html","f31174ff2808674f3644e47fa4f5be2b"],["C:/lmislm.github.io/public/page/9/index.html","d15b0c695c766114caf67a8ee805a9d6"],["C:/lmislm.github.io/public/tags/Interview/index.html","c7c5d0f4a488786059e9c42238c51a14"],["C:/lmislm.github.io/public/tags/JS/index.html","4d694166c7f1c870316077e2a5727215"],["C:/lmislm.github.io/public/tags/acm/index.html","be1504b7e7126e862a4a144cd4bfc209"],["C:/lmislm.github.io/public/tags/c/index.html","9fb8c326c65503b0c22c958736f1711d"],["C:/lmislm.github.io/public/tags/codewars/index.html","8969590c61801980b9beefa0f2517d9f"],["C:/lmislm.github.io/public/tags/css/index.html","796c1434bc658d68f52ba1bcd3d53ab9"],["C:/lmislm.github.io/public/tags/git/index.html","56131eb4ce76c0b88d8c769504995309"],["C:/lmislm.github.io/public/tags/hexo/index.html","e1c9c7e330f3a5d1598103a7da6910fa"],["C:/lmislm.github.io/public/tags/index.html","6e7d50274221c6124c2628d73d98a048"],["C:/lmislm.github.io/public/tags/markdown/index.html","ace3326bba81f45e1b4a553c8472b2d2"],["C:/lmislm.github.io/public/tags/poj/index.html","4c27599041bdf137e4260bab820e81b5"],["C:/lmislm.github.io/public/tags/shell/index.html","81398867f505ce24e91d08e2eb03adfb"],["C:/lmislm.github.io/public/tags/vue/index.html","b79784729253b4474a04c0405322556d"],["C:/lmislm.github.io/public/tags/xx/index.html","5c981fd9d47631851653871d44a0b613"],["C:/lmislm.github.io/public/tags/前端/index.html","15640113ecfe2f997a916a26f15881d0"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","55ad3ea7e71bdf87ce2fffaaeb05a911"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","f0967e9c232cf03020d7b095e2b5aecd"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","993eecd8a46ee49cf9b1eac7634d21be"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","0c98ea4fdcc2a274892dd8df472fb052"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","7ce6d2cfed52ebfbbeb1ebc5ad55d21c"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","881e398307a062c85921d4c34244f686"],["C:/lmislm.github.io/public/tags/小技巧/index.html","f85ebcac34f078e0ef9b94d6d06f7e6b"],["C:/lmislm.github.io/public/tags/展示/index.html","03bb2b1f38be8a7583a368753df69607"],["C:/lmislm.github.io/public/tags/工具/index.html","25a3d033e197534d55ed3e499cb8ba8c"],["C:/lmislm.github.io/public/tags/感悟/index.html","22d8d1477b9ecb6b32d4e91822257df1"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","ee6218de7ee6af424996cb8ce726b77e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","26c8ea7e51251ac0f63ec58060f66710"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","c809bd73f3b95eca0d3353095e1158c4"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","ccad300a6906873f386427e82824c685"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","833a979f681426bd00091f8a65a0f099"],["C:/lmislm.github.io/public/tags/练习/index.html","6a7c14282a0b96514f7e762ee6ef51fb"],["C:/lmislm.github.io/public/tags/编程/index.html","f2543735e3660b30cb3277f8534e0879"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","51ea9522389d5116e37dd5e85d9d17f5"],["C:/lmislm.github.io/public/tags/运维/index.html","d391ce9e88baeef89fb3477e0e46878a"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







