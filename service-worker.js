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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","4570918a2349ed77adef50ef9fb74bc3"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","daa9cf002edf1d67f9c89683ec43faea"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f0bce3a20d08aa9f7295a4bfaeb13e80"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","44b805806794400ccaedf280edd644f8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c2037894b18ba933cec861fe48fd6f11"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","67d28a3d16d41a695aa4c42be6e8d8b8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","a1528170ab1748d13d723ebdcdc02f28"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","ae87ee6e09305712e708977d07768e26"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","1d6a474521efd785bd8ef8d1ba904190"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","6e930291b6ae54d0f39d96b3daf74440"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","d77acac5d5b23a19b8512bdb8db053af"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a700cd6f895ff8327c9248a97a68269b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","03370c9c354ec48cfbc8f43ca7e6e709"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","c78781fa5c384e688a2e8867c9c7445e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","011e6fd33d4a111ddcf973510a5ff807"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","c650472cb52237ea14e2d0fd4b672eb3"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","6a85fd2088be02d6e5cb08326e215387"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","46c53f367df18a659787737f532a884f"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","52bea058bc3a99892b6713baf0793bab"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","12068b94fbd90ea6c1f86b835837432b"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","5a67c6f8dbc9581953fc1d08a945dc1a"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","26c14d1ec9b2d039c74ef4551617d77f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","3432ed2f6e79068cffd04a0d844b2a7a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","c8b5b368df415a826b060fe734c44813"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","d056942971c5cf7205532e588dd548dd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","53cb90a0623283da3e1c487f3d024f7b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","6ddff22f01960652dd22a5be11a5b5d3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","ff3c6de2f452c6e28afad1d9a092eea0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","cb26121b1a84546344fb6850c078c87a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","5cfa056f69c9e0b9161392715e04dc48"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","39959daeef5c2d30a3d8868106c90672"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","835fad5c41505934302b1eb0e1e0f82a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","eee57c649eecdc7182f628a9cd656a14"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","a0d86d7e48d2c44a45562b89c49bf2fc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","67878c4929edace748f65f083d3238e4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","f75830837a3a7c6d448a03d20c169ea9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","f0dd04bed6bfc02b2b46ac72cb09ad92"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","18e177768df05d538b4dfc8accd54887"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","aa081afdadbe7ef8c8388943c7d58397"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","2683d3b675f8e3367b5592cde52a24dd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","d4b5388b7ce821fad95de2f290d5b6d7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","5de9d315bdf7dc7c8b5f3d1bf3fb8bc0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","3c2865bd2027721d2dce7b997ef95bf4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","1037e5b54cebd8b8f906f2d044bbd2f6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","0981b6ebd131d696e6ab6e2185bd7800"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","aec1bec14a4925670913438ce348c56c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","2f31c05ceab311eeec12cb3e9de31be7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","0bf7ad4f83624678d094b834d68a32c2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","09b05bf30c8b21449354b6b1712d59fa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","40d2a4e9dfc59d0509e9837d18394dba"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","d139fe6509e632110f2cd7c3ecf5fa65"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","81667edfdc88f5d515dd7c5102ebf171"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","61b7fa033174fb8e3912ac3702b2407c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","e1c989c532a3c112cbcb6ca2ecb10c91"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","183cbd46a47188c6c2ae8b7e5ac5fb96"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","88c78c66701859ba2f0b6296c65882ff"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","0791f8c61b6e2c3934ff038bff9c5599"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","77bfb0f597dc485777f2605f32bef8a4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","3252700c3409c16407d4bbb77c146f09"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","8f36d9b0fa552b787fa526e9d4129764"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","ab463d261f7292d49773c5a553a55c16"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","274e532e3a56d11245e0481f92ab0840"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","2c26a0e880cc8a5cbb0f4911a2145161"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","02b64ae3a6fd5727a9b06d7dd886321a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","e2a1e86982fe9a2fbb8a753022ae2215"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","be69d3208c51bff722cd991a12eebf67"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","45da7dff4fec85f5df0fbf0cae848afb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","b6774c45979fcf29da7241b9bd5bf2a0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","01f9a83f97e48a945f583925770b555f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","4ca32ce21c5c9c29bec9aba95c98e48d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","f401c79faa7886f16ff75de23375f083"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","b01c37a7e2850aee97f970563695b0c8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","67beb7f6c5770634eafd73faa2b44aac"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","aa691e1dc48c3ff7402dfe5110a3ae60"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","e9222e31bce7dfa69e8fc130229efe5f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","9a51f81b25b3494d74e6f334ff872aed"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","8e836ae59bcf52282c4958548c1a099f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","e92f14d273c3d5346d7fdcc7431a82f2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","e3d0943648ce5a3ec5e73a9a1c3d22bd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","5f0f02ff73f49cfb0e54339ed97419c7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","93917d3dde188401311f61188bcd6fa4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","acd8b08f0e7a9064ec54b8d8ef978b66"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","eb0ea65f56521bac31f4e42289e32e56"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","cff77699a9525cb63ba49aa2bf95fd0d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","dfa7d6d404c20b2db69d1b11f0b62c91"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","e6a39c5fe898121b1bd2248e4325d034"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","d3be9ecb83e2f44f6546a201019c66e9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","194b4eaa9c2a4b16cc4d7b4f0ebe8cdf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","cc3b9509c72bf7fd280b609583582ffc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","dc35cc92ee6344944fc877888e2f1fde"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","fa1d084b0e5bdb18e3e2661d5f344fbe"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","3c446ccc16d04387b6d4edb24c7947a3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","96c3d3e73b03a6502c98e9bbadf829e5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","c37131c79d965a0ad15bcff69e178feb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","a31fc9ed188823156f856687f5991d9c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","ea6eefd72b408ee1857f569d6e930849"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","1dd983fb0c5b4cb0cadbb8d8e654e930"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","e37ab35551afd1d78a078df0ac445199"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","e54863dbc5eb5989592d18d0be910336"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","3d678930bb6a1f6f0530170c2e0ce3c2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","1b48906cc1ea6bafac3068e5fa9f3f07"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","1885ab4ddb6f5678baa085c957ccf155"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","f4825640472c51fcefff631e1b040fd4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","15b67b9dd840f85f754a0fb82d59d52e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","e9748bf636a182ede121dcd88f3717ec"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","c0c3e286f298564f58e4106e5f13fbba"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","3b447485f89c8e1be0c77c8e7523d5f2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","348a61e6e692829ae1fe79b60467b47b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","b8d61b6fd33c483c6daa0ec85023781e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","aece2def218cf7ac0a53554417395080"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","47f567e4481929e9fe405eeea244d697"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","c2f468dfdb2b6c13b288f86d4d34c79e"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","8eb8b9b98982fa0ce065870e0a241c88"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","8225a59be4fd180e4905c3cc01033016"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","354dc7115bfa3dda9ad46fd4e620efd2"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","e1ccc54e3d484cdfdeeb880366e11878"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","c7fbc0ebc373a6b02bb760c0a713eaae"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","f0b4aa5fbc17dd724b1a54d6b20c366a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","7981af2866feef6d7d15bbc68f598e0f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","1a7f85518cf3ffe4aa9e091937f56007"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","2a4b313fba021771f095ab68a1ff83dd"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","d5379639b5917b4e2104b31f25d867c5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","b2b85ec5bf1feb326f6ca3792835464e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","6becc9aba01abf6586bd0b49c2d90b4f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","3910a6df1165c5b24ba1e864ccca1431"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","6ce5037f5a3706874596bdc45e064177"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","9eec08273d0303c42a5f9e995f61ff4d"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","faf7e399260161393465240477154eb3"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","f375a7367dffb66f86cbbbc73225615e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","faa5940bac3765935bd4d18e1d32c176"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","049724df5bfb70980ff39b0fbd2f593a"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","a5ab71673f9c1e88fc4954ceef8d990f"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","2da4fb998060fb1ec4a59fdc4e57bedf"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","cbc57c0ea315e57c9a14bb8b87517ff0"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","088faf3c0aab53aac05390b7b91b998f"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","a3aa5cd06c1846e5b921bb8a899a31f5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","77cd5a9fbc452cbd5ddf6919a2839992"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","1326dac21db9902d0d7601de712e9475"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","b26c9c7c5d868c3ad61a0f19ba688d4a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","b2f071d92b9b76c940b77d6a9f6a0b70"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","655804e4e6fd1c90c75222a6dc06e843"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","9af6516e5ffb74756fa9e3efb25e38c3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","a76ad2d5bdba6a09a3a7653fd0b1c71d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","19190469fa6fee49452ba6e259bdac36"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","469542d2138732ab006b710701a6344a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","67f0ff3a78a9f8a3d8f1f732cb6ee79a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","21609714499d05807bcd9c4fcb4c9759"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","083e7341e6a62833a9d5a05154ab4324"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","cbb55e3ac624dbcaeb7d21ac82858ff3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","3a4f20d9f65933136da033310ade91e8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","c6d1ed2a277f1701a6056a348ac42175"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","9e588c038325bef760718a3204c64474"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","76429555218f787a2cbf03560533d6fe"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","2f56308318e937a91aadd903d7fbcfff"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","2d6e7b92050be1556ca13d06c0239dcb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","63af30f02452b65387fd7b6cd9ba2287"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","d7097d5e9342151b09355c530a52f17b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","2326273ed414c402f419728d24e0ae39"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","a4d41fb7bd51164597136ca3676780b2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","969eb1c5cf0f283f572360a6f529a161"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","05b93bed866904ea4dad6286ed67df1c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","892462d4628a48c6eb084272ef18aeaf"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







