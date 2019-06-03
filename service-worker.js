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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","436e2dd403b657478d740e34fe652366"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","eddbc318b1902728039ded4b5fd4d67a"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","7d680a762368e92d0af32b3788713529"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","4e6cd383232f4a4f6ffd573b3e901e5c"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","b86795af57beaa5eb6f8a2f7b4926de3"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","a78d66bf2e967476368770462b368dc4"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","54418d66c7712fd6661b30de0b61a3b1"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","74498784f719d570f4adb08e2c540c5a"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","b87f2114ca641ce39ba90b87884ceb84"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","9c077754a75c3b03614c0e843ba17a20"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","6bc3ce55c8af2b847d2aa5b9708c8e54"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","c8fbb18fbb4e76a0bac2909bb96f2109"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4c217f63f5e2353a0b560cad6f6b0163"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","faa510a21b15b0a5a8430fc63c258e00"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","3c586916337ec6f2922d2485732e80d7"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","940a20d9ec0b7ffc99e22c1c5c782f48"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","a824b319f3f4338264903e3e3a6fb3c5"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c41a371fb4417447a0414653efeeea81"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","11f9fda487712063ab87ecf937f8aacf"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","d3405c5d619f790cde959d922d8fc412"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","58dc906afde29c969b3d9c5ed83a18e9"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","8178b25a52540316ee33f204990c6d1e"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","6dc9aba8764d1d5f410e8b09966a0c27"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","ab0fbd8161f07806afd06b30c68c2c2c"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","146e845699fa656ccd1d4f613f24967d"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ba97ba5787434fddaa03d6e5bcf99c74"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","80cb0c77638d6bfb82e6edeb8d48f89a"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","c348be25cfaea18964d108d8ddc6594b"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","44e56f8248d98b82144f66daeba9f218"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","3e3d3cf2cc33f311a0e31f3914fd4804"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","bf4d14cbb7146b10fdff20043b7634f7"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","04d7a328e0ec48bc7e060d7241f72422"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","ec8567822b401b7fc0af3b7fb55a9938"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","9f3fda0c9c0d6f665fd4c0865646e848"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","177a4ea6d5defeec9f61cddc63d4ff71"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","a09f510fa40d03f468a4feeca79ac821"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","37e3fbe47d8e08fdcb1966fa47956023"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","77f0664386580c4d27220b2484838abf"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","34930895b98df270b9013b12a65bdcab"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","59495bb3403fe58c967c13f31e85e01e"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","f49ed5ce6f54ac9d941d3ed974745817"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","c5db64235a0329eccbd8e36a5909def2"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","a23ab83367ece0fad44c12c076d3a19d"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","8e7faeac36ba62ab163b6ecbb6481920"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","d6efd29aa9d3de3023a923b2944da311"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","1f21c2a341d43affc48bd6566da8d9b7"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","3c453ea6faa12c526ac833d2995ceb06"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","e0a5adaedb51b4146cd4419645731e84"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","d62df5a2b1fefcb0ed2255dc111bfc1a"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","852c2d2f1be09ae1584d72662e3943aa"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","faf2ce33e14d92176f2ee3af047bd64f"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","1e8d5da2ea9f8567ee359cd4b15f9365"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","8a4b8ed3a271d2c4ee6f4ee901d0dd20"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","1b058136e189a607fbb7343dfa394a2f"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","50d25e8a984c4c6871ade44adb0666cf"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","d48c954cb45b1a0f531ccb6b8b5fffe2"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","790847bbcdec44038c7477193d97a1aa"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","8a86647c99edec784cd3ad875057d659"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","66d4b79db1f2176c4866f0ff860dc0e3"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","c3de0d89312f2e2becc76325a8451971"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","69b46c43eee7f80682d244616d637ef0"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","38df21eda5d3454d2aa8d5c850cafa12"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","bb2b8804dfe57b0a2cf7296b2c46c33e"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","806deb3693e3c7605db7b10ec6e89295"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","35c21d96c24f9271cfd2d710e765fa76"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","82101755ac3de46ee8430fb807f68b78"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","c6df4eadbb90d24085faa4409743dc10"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","adaea5f8eef5e1f06a0d5ad5920815e5"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","1d7ee5636c5878abc0e25318d21c4506"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","5bb4e4b87f4a2e61937a916c5c060292"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","24662ab468e95dcccf0b7811298d4af0"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","2c3743873b1905cbe25671b03ed83fad"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","c8b0fd1992d2299bce5b6deda3a4014a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","1739b3792a99fee22e9b72e554dad87a"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","63e46cedcc998f2734c366709c9a5f97"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","d352f926dcf18d24f5c4831224cf347a"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","1a1cd97fc54ab69fad66f5c60591fadd"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","129532aec3304143cf8c4be92b7ad513"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","7d99772a455b30e8e85f7ad9deceb1d4"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","140ab36057f7a231d45305c89716b50d"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","31250fe27845202d65b6e5153869ccbf"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","d3541be0eb3b55a1b26b1b6b12332254"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","1f1f47f4a87b1f6105f7d084c8eea0d8"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","544d7e06a6d5fc29a7aee184a46d8114"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","1dcdee53143a6eb0e7521e29bb9fce31"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","8862b7d1a8520940bf4be13978fa1c9d"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","9a4dbca432e49ec3741c595c0c017228"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","850f7737ed38cda95a3f043b5a138a91"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","6023d411a60e0ab72b15cdd4204d8ffe"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","db43ec9eca12ee1a479e2c4e845b3ede"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","0f61d74678ae3c6bd425db5b5a0fbf2f"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","14cb017ac98e7318b638bea53635eaa1"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","03b78b29c90965609cbfc61533556ec2"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","dc29a2b2facbb32f3f7e9268dbd9187d"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","e9314cde3eb3b3cf4014a1dbadf3bcf5"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","d0225e9156020dac6361a444236e4d09"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","bd13481a36cf9e593649d9ab75c856f5"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","48f4c08b9339b16ef76d141ff918566e"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","2d83e1b2bf9adb44ee50930e91fb9620"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","9548729384ed6c16afd4b8b0aa2f9770"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","a8fb4f8f3b706b202121bb3c64a2a687"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","01d5278aff125a0467639321ba55ad44"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","c30138e9c87ce6b406d5869b5e2cb8d6"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","04ea558cc0a85303d36df2d3cf363c63"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","45fc94e5cf4ca82db4612bff531c076f"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","891293ba3d438365267415401793c1e7"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","a7e6289376261b3115bcf563983a7905"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","0d09ed823bca02dc3553b88f420dee3c"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","ca047ade3f11fcb6f340a264fa1370fd"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","09272fc7eeec21169f5355377588ec5f"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","b0db65dd68de441f69547ccf1da2b2f2"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","5c15b14ef726569c46f42dfad5bdf831"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","1d825353a3008c8d026bf9ba4d02a9b7"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","f328e5272891b5c56ff2583414916c5c"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","3df30455fc6d301ec06ad777b000c910"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","bdbdd17deec2652ee528d7e566a3f2a5"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","c6857472476963003faebdb7e1c0ebb6"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","5e03def6aa4bbdb659d6ec4ed194b343"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","b6e88802bf2dd23a8d475af9a947a000"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","47767f83a84d31db41bd9284a8b977cc"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","9f0becafe980039f549a2837ec9a1422"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","3a70b67b47842584651ae75e37b4a775"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","780b144498b6864c3125593f5da009eb"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","1e904eb8ae7bfe779b75626dbf052047"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","b82cb2e586928ff4a3d0b5da8693d0d4"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","dcfdb186548898df9c2728c0715d8700"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","e2daf6a98aefa808020df7e6bf9ef649"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","4d68d27ed4f0dd4f290255ce383021f7"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","c43c723cd0b6d664bda668aba92313e4"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","9a89f14779cb5b63fb022ea1e62e66e0"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","8d49bc0c85be5a5f77c03a75146cfc60"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","b8f6451d2271f932a5c3847046f2d2c1"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","1295d37faaad75f897332eee77b74378"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","9b2a66cfedb76f1221a689531f3af70f"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","908784e1bcb939278d803c8c60197afb"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","92c7e6445ce3d43b92e387a908165da4"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","46905b8c33f7697bf819fcb0736c9b77"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","57ef2718a25e1cbdec590075c666c88f"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","d7deb8c08338dcb50698cdf6daed4fc4"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","f72a940c519c3d7bb7574d457ec4b54d"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","4cc740ec03cebf7efb030a2be72c3e00"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","ac3327dc4e4b3f15a9209ae22bf35486"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","73bb60a390c60eef1034712fb818af48"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","120d3d7ddd76b889bc791e79df762e1e"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","fe3afcb3a5509d1fed50ee7f730294c2"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","397a9e643bfdeb807d518ad04b4c9a0e"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","beb4f1696d3828485b0d8ad42ca69ce7"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","2d9f245bc1958fc556f0cd3b551262e0"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","44c4a28e03a3141ec42a7aafb292dd39"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","ad1a3a4697fdb5511a21d3b2d1024a60"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","66e471cf5b206ed3f06a31c4eca5e060"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","576d0ebbc02389ba0ec6b56bee79e1bb"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","d73296c69ce1cf1499bf52720c2398ee"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","da10dcc2e82f96f909dbce9c3b3771d4"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","376db8758fa8d73bce0b77ce6c1adb66"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","a731bc14cf3351912ab5d245aacb5fd9"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","5e88dbc184f75229a6a95bb3d96346a0"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","4332ddb7ee2e055f6747de20a693d49c"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","33d144d100ead15472b46232ad1e44b6"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","e06cfb3a2ddb998ae16670ba7a1e8754"],["C:/lmislm.github.io/public/2019/05/27/2019-05-27/index.html","583aac40cdf4493a6a61574bb31a1d9a"],["C:/lmislm.github.io/public/2019/05/28/2019-05-28/index.html","eb80e1d71c9b9a5bf32cc8aaf2a1f5ae"],["C:/lmislm.github.io/public/2019/05/29/2019-05-29/index.html","8bd37e90a79a2493ad5ebca9e62f162e"],["C:/lmislm.github.io/public/2019/05/30/2019-05-30/index.html","f6715b28ff6fa22653fa3f306d9af3a7"],["C:/lmislm.github.io/public/2019/05/31/2019-05-31/index.html","3f74265e26492b1db1e505f9538071b8"],["C:/lmislm.github.io/public/2019/06/01/2019-06-01/index.html","9d28dce6917478c6d2a8c86f56615905"],["C:/lmislm.github.io/public/2019/06/02/2019-06-02/index.html","81f30a75eeefaabf49d82f7592e3fd22"],["C:/lmislm.github.io/public/2019/06/03/2019-06-03/index.html","1675ba4640a648c6d5141d775d520978"],["C:/lmislm.github.io/public/about/index.html","2ab2cbfaa294f15fc7a9d07155544a10"],["C:/lmislm.github.io/public/archives/2016/01/index.html","60808b755199f23cb570b0e6da41626c"],["C:/lmislm.github.io/public/archives/2016/03/index.html","2038aaad572479953d2504b972550aef"],["C:/lmislm.github.io/public/archives/2016/index.html","2866543f6de31d28e175359825c35843"],["C:/lmislm.github.io/public/archives/2017/01/index.html","91fa5fa1df0fb701a44c31962618bdb6"],["C:/lmislm.github.io/public/archives/2017/03/index.html","68eb90c5775dc299197652b1113e1bcd"],["C:/lmislm.github.io/public/archives/2017/04/index.html","44a1a9dfd05bd5e76ee89271b786a4f0"],["C:/lmislm.github.io/public/archives/2017/05/index.html","d179cb6fdac36a288d6828a85a0eb945"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b076148d994eefc0b335576c5d2bc6d6"],["C:/lmislm.github.io/public/archives/2017/index.html","82eec8092c7c0211e642dd686614bedb"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","f554d5586fac223c77b5b9d101dd7a83"],["C:/lmislm.github.io/public/archives/2018/01/index.html","3e769b729010af13d96f7308bdfd27eb"],["C:/lmislm.github.io/public/archives/2018/03/index.html","4262546f496bf2f605d9086133ec2b99"],["C:/lmislm.github.io/public/archives/2018/12/index.html","320ab06f17e4f1ce96655ae8d1bd82b6"],["C:/lmislm.github.io/public/archives/2018/index.html","fe8f912e8f41ca74e7a8d31d3c925bce"],["C:/lmislm.github.io/public/archives/2019/01/index.html","4fd05ba91adc3ff8c49ee152c8397a1f"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","83b8774a0e2eef7097d52960dd73ff12"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","6e45b50a2f6c22004f0c47afd3707537"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","6606d7c8a2364cf58ce096f4886e1c52"],["C:/lmislm.github.io/public/archives/2019/02/index.html","2baea2fad9742f988696ead209eff7b3"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","16f6da122f8b1f8923700751bee5faeb"],["C:/lmislm.github.io/public/archives/2019/03/index.html","536ade93c38a3390c50075d6a816fd98"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","aaeb216b7282c27d83d6cf2168219252"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","68d4ad240fdd20b225dc46eff094e3bf"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","69e9a82e82f8a907eb3b37ca04a253a4"],["C:/lmislm.github.io/public/archives/2019/04/index.html","aa0f739956ae03b9ba172942f8e5c671"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","6d0d26ce34a6721c39c4ca2c22ad42a5"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","944fdfa410a9697b75e8ffb1f810ab4b"],["C:/lmislm.github.io/public/archives/2019/05/index.html","f864233db256fad07373fda7c66dd63c"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","55753df13a0000556c26a1d6a1f52a9f"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","1a8a1dea14028462177f1f093d0211b8"],["C:/lmislm.github.io/public/archives/2019/05/page/4/index.html","1ec19d2bd0fe391d8fa937de1dad0122"],["C:/lmislm.github.io/public/archives/2019/06/index.html","b448cbb008af6f2135aacafab35ccd41"],["C:/lmislm.github.io/public/archives/2019/index.html","b444081fddf16a59fb1490d90cf41fa9"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","3f146346bab9a16f4ef5c737bb179495"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","b35b70e34bebdb941aad95a6eb9352d1"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","449b9783c9da466644b4dfd83e08891d"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","c4794aa9bd52e9ce43e825ed7d98a7a0"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","fff623a34eccc4905ca18e8b5395ee0d"],["C:/lmislm.github.io/public/archives/2019/page/15/index.html","aec30d82c9f8a07ba69415a07f5ef300"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","22c042f111b19de2c588d190f4964c27"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","350c5ecf6e284e519ef4f87eb3b8a5a6"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","8ccdeadee3d9e8a0c09d7ca38f70f141"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","785011548730520809e2a33398b4206a"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","65d272ba13c7d2874d2d4dae7aabb72a"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","857b44f1f55853a6d1c636cfe605065e"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","cbc7c19cbd00353ff6609b1dca1bb3b3"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","c472b4b294ec45d042abbb852fbf64cc"],["C:/lmislm.github.io/public/archives/index.html","79431e749a05a33ceda5f198bc93f3e4"],["C:/lmislm.github.io/public/archives/page/10/index.html","5c7b85ff4dc3bceeeda48bafe9881f65"],["C:/lmislm.github.io/public/archives/page/11/index.html","5435493673cef0131413214ee805e84b"],["C:/lmislm.github.io/public/archives/page/12/index.html","f65296871338eb81c89c08eaa12fbb17"],["C:/lmislm.github.io/public/archives/page/13/index.html","caac8ece3693b324fefaff928cdf3cf1"],["C:/lmislm.github.io/public/archives/page/14/index.html","7f1931fc6ab880998a9f3131734429fe"],["C:/lmislm.github.io/public/archives/page/15/index.html","7be77e5e4e3f65d0f0e63e837774a75d"],["C:/lmislm.github.io/public/archives/page/16/index.html","9e3e88409ca49620b57b89f3477fa122"],["C:/lmislm.github.io/public/archives/page/17/index.html","6f8311adf423851ef3ab6f6de6bae0eb"],["C:/lmislm.github.io/public/archives/page/2/index.html","9804d398511127b43f64b05a9056f9e1"],["C:/lmislm.github.io/public/archives/page/3/index.html","422b4fab588b489de7e733acdb649969"],["C:/lmislm.github.io/public/archives/page/4/index.html","d3a1642a6e2939a73f691d0c41d93263"],["C:/lmislm.github.io/public/archives/page/5/index.html","d41dfc06dddf886b6b09b2afbc3a9cd9"],["C:/lmislm.github.io/public/archives/page/6/index.html","daeb5273a2b0913bd62d5bac3b8ad1d2"],["C:/lmislm.github.io/public/archives/page/7/index.html","cde42954407158528a74a140cee605f3"],["C:/lmislm.github.io/public/archives/page/8/index.html","1fc8d249bc3d8e368813940fa8ad158f"],["C:/lmislm.github.io/public/archives/page/9/index.html","441e6172faf7625d20b9d88ed2c7d223"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","061cd319d88d207c973fe1fb42893ed3"],["C:/lmislm.github.io/public/categories/index.html","21b8eea1945ce33476644bb15c29f7db"],["C:/lmislm.github.io/public/categories/xx/index.html","d133e1bfe7a3dca2626cdc1992e90cc1"],["C:/lmislm.github.io/public/categories/学习/index.html","9a8d011f5328e083b69e494fbf30cf05"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","8a70e0d62f3463801dd271bb6a3bfe8d"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","792493709ae906c7507d2824f784f529"],["C:/lmislm.github.io/public/categories/工作/index.html","5fc6267bdcd40ae2ee1230237c7a0bbb"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","2b7142f1fc8f242c18b8e0b78c79884c"],["C:/lmislm.github.io/public/categories/技术/index.html","f257017560b643c8d545ab80360ace98"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","24989f73ede3b5bf7e31adc165f75d87"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","3ca2c706e45edf7b428db9527e04a269"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","845afa4cdab0eb4ec81059d9bf4cc305"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","6f633f36ea5e020f4884af3fa828b2bd"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","5a7846d696659340522fefbd581a013e"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","999f2376670e929c918809b8e9ffe5e9"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","29ad1d14184e5db93207487bab3c8870"],["C:/lmislm.github.io/public/categories/技术/page/9/index.html","771fe85ec65be374d453e7dd4b4a1c1e"],["C:/lmislm.github.io/public/categories/日常操作/index.html","3e0883b4eae8deca4f762c3c04ac4dba"],["C:/lmislm.github.io/public/categories/生活/index.html","648e842059826e8dd0bded2221ad567c"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","2ecef7811ba13d31c58b292e5c14f4d5"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","88000d345be5f3a57b6ff49a44af5f84"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","ff7395a037961dd8932289b9e6740029"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","5234c0b6f78c8c013289c093e2579d2d"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","e6c0d032086c0f252318bd8764321dce"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","e5fa9544e317e44cf3e2c6b99a4d02e4"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d587fb6a88f9343a47942e28a8bedbde"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","d9e54af16f1050f5f547f77142ee1259"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","aa81e462a75cd2a8a31e9a630949e4cf"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","92e9c692277e04cd22ee0f50935b2761"],["C:/lmislm.github.io/public/page/11/index.html","5416c4533be04869c0a0c558b35e4632"],["C:/lmislm.github.io/public/page/12/index.html","ac1d2b7df636ac917c2ed50b03c5aacf"],["C:/lmislm.github.io/public/page/13/index.html","46b55a1fcaf6d4a36e233a93d6a65af1"],["C:/lmislm.github.io/public/page/14/index.html","611dfbad27c80ad1efb60d041616927c"],["C:/lmislm.github.io/public/page/15/index.html","7e42f43fc330bb72cbeaef564d35918d"],["C:/lmislm.github.io/public/page/16/index.html","efc39c0079491ce71aa8a3e5f65950be"],["C:/lmislm.github.io/public/page/17/index.html","90de55d907e76186f435abbf62901a4f"],["C:/lmislm.github.io/public/page/2/index.html","0d00af92f2179494eccd05e6d8d7a040"],["C:/lmislm.github.io/public/page/3/index.html","c5dc7c042a9e74336c0acb5a16823228"],["C:/lmislm.github.io/public/page/4/index.html","443c5599e5c30303e8e03045ff8c01c8"],["C:/lmislm.github.io/public/page/5/index.html","cd7dea40b817e03247d819cff292906d"],["C:/lmislm.github.io/public/page/6/index.html","fd2318916f495ccda50b4e3651153714"],["C:/lmislm.github.io/public/page/7/index.html","e99de96ac0930e25ad00724ed2e171cc"],["C:/lmislm.github.io/public/page/8/index.html","7430c1ca7ed3c9ed99d8788e922fdc47"],["C:/lmislm.github.io/public/page/9/index.html","f5b137a7b57f5cd85914220e4efb28ab"],["C:/lmislm.github.io/public/tags/Interview/index.html","4625fdf5e2d511be5d161f009baebbcb"],["C:/lmislm.github.io/public/tags/JS/index.html","56b05aa69c161cf78e0cfd265be93662"],["C:/lmislm.github.io/public/tags/acm/index.html","0133b0ebd4edc044e01ca361fc95b784"],["C:/lmislm.github.io/public/tags/acm/page/2/index.html","801f2e40a3b55b68d2a1c7dac4d1c6a0"],["C:/lmislm.github.io/public/tags/c/index.html","2ea6711d515cd0014739dbc0b6f12a13"],["C:/lmislm.github.io/public/tags/codewars/index.html","f1c02f6b2d88abebd8d57ba28d644b37"],["C:/lmislm.github.io/public/tags/css/index.html","355ddfb8af3da5b9158f6bf1838e0deb"],["C:/lmislm.github.io/public/tags/git/index.html","6062ef576459a45b27f4890f6a2ac600"],["C:/lmislm.github.io/public/tags/hexo/index.html","d4d9c1095b48c2fdeaf8785e6e112cf8"],["C:/lmislm.github.io/public/tags/index.html","24be29bc5984c77c26305ff27eb31075"],["C:/lmislm.github.io/public/tags/markdown/index.html","050457484429a6d1e74df084a5aca4bc"],["C:/lmislm.github.io/public/tags/poj/index.html","cc2594a433786c1d22d7691ce5f04a8d"],["C:/lmislm.github.io/public/tags/shell/index.html","fdff58b1faba9403014c6c4c4b330f9a"],["C:/lmislm.github.io/public/tags/vue/index.html","796e00a20cd3bdc009f035db57cb333f"],["C:/lmislm.github.io/public/tags/xx/index.html","a9929c14efcf4fe12bfc31207efd3b37"],["C:/lmislm.github.io/public/tags/前端/index.html","61246c8f1addad71255825ea9c07bab0"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","57d0ab7d5613d99e922fe30b95f374fb"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","c8fe1a074017c955a94654270112e0bc"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","cac3ce4bb162e0127cfca712574b62ff"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","174b9c1792ada404de007c53eb61982b"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","934834d525440727aaa41b0456530a73"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","117353b2a3d516bc64288ac18807f2e7"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","2ef33bddd024833210aa718cf6866f5f"],["C:/lmislm.github.io/public/tags/小技巧/index.html","b0619905677d8029b6956716369183de"],["C:/lmislm.github.io/public/tags/展示/index.html","821ff4d4d38d220cb06c62a0f801706a"],["C:/lmislm.github.io/public/tags/工具/index.html","0ee369e7355ad66206b7450f2ef6fc45"],["C:/lmislm.github.io/public/tags/感悟/index.html","b67032622dd40271f5e213317a66e4df"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","9a0f631980166ea4661ef2f3898e6b95"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","37a9fc08b237ef2989007b3ede8df7a3"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","b8e35a2d0245316aceb4b3480be6369f"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","e17cbfd293ad1618114dc115a2e7bf56"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","571dd8805ef9febd3508cc8b954985ff"],["C:/lmislm.github.io/public/tags/练习/index.html","8a67a2748ad297a6e0cda114c4609dd7"],["C:/lmislm.github.io/public/tags/编程/index.html","d54bbf4abfa6db6c8f1e9e09ce13a5f8"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","227a5071304f22c3798233709e76965b"],["C:/lmislm.github.io/public/tags/运维/index.html","ccf06596d270fa23a0915aaa6f5e7f16"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







