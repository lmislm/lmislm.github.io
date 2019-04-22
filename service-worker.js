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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","36047aa8718e9548bbf31fc409bec0a4"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","259e293e51474b59c40a1cbf865ce2b8"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","7b5468a0a1165efa98a096233dc3dd85"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","017d52eae81d429eaa2793660a8e35af"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","590ea43bf3af3d4aa90a40a83b663700"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","450c9e5b37ddf3ce271468b401a8948f"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","c6d207c841978af6db9a769cfd00f48f"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","4aa906270cea5ac0e4981d15c9aa9486"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","431a7b3cc03a17ecad03e1d69e4c6210"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","9a13a475e31b2ef7528cdb26d207b1cc"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","140582dd358a092d826f8df270248a88"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","e9d6fe37b18e9c2e47ea3027f5f5cb7d"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","c35a3f49d58b2d47350a85c82e6c8e91"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","964bdf0c5570a0c6dc9d386bd427745b"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","5a03e0a377b83e47555d7ffd4c9c2640"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","c54161c12c216dc258d6a14604c2d32e"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","f82fc6d4b19b0acbc61e06222bb91d34"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","0c1dbc3047d722b6a1ee4d87598d465c"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","33abfc82d572c7d61cd8ac67a081db5b"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","55a548c590bc74cfe6ded3d9715eb317"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","2deec469cb5e1cd90de2330b9577a121"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","7461e9a31adcd332480dc224025b07f0"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","a7699529b6aaadf396c1a6be4b8b5aa2"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","4b31afe1a7b1265878f7e23f7e6abf16"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","695b5a73659ebb6782ab807d917a2faa"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","a0152a1ba50ce231c5c917a0c5638e22"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f58d43a1eee0c3dbc6b74be2254db12c"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","c7e731c7e2d034807a280155e534a431"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","8c5a2a3af0a7c88d339f7147678d4dbf"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","972c4498268db3fc6e2d89abd559a7c3"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","54362ee920625f4179502443aeed6865"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","3524f3b211f64ec388ead14a02a8ca69"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","a3cce27399a65b355f7df5b8bbe9f369"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","9b0fe8c3bf80eebcf42191290d4b7172"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","0b9a305205b263724092603719d35c9d"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","ad615aa7ca10a493a4c42417a5dc8fbd"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","ba864ff4826e88bba08f3a93e3c5a597"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","82139701cae94c3e989fc43071fd8456"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","f8ed455f95ac0b5f25f2b3115eb8f0d6"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","ae76877b7c6c5cfca678c5e4d6f42318"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a8904e5f46b0519a8316a461e541e492"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2aad19ceec02ec4943feedb131b755a2"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","33d4f00c02d6447e7c8e180ab7f598ea"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","6cba6310020cab01504056993cd7eae0"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","ea81fb2c0ca78378f11c35a742f45da4"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","df794ae5ef604a2a0ac18636b12028a5"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","fc07bb74856b3d5bf39f0e477bcb4655"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","2c73b3c8d1480e89536f77110ee75218"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","d605e0bb175b1a329db1f969f1186811"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","5e8335a93d3ca5c087dfabd806e921f4"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","f160dfee3498660af6058440a04d28eb"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","9f0c36a34e04d9ac8f11e1ff2cb8471d"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","bb37c27d19d117c839895e852ae4f887"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","62d473691bd0aa07a10fcefa43348516"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","090891d97ee214fba355f98a31d036f3"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","0cbcfe85a0b67a7734092d03a4b51f84"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","0e0795407c86899db4c864f8beefe07f"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","651da55a54ba072757fdae72a06902ed"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","4352391842123f9e6b7822f9e6b3b392"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","a90b5805fad256fc37965810ebc50431"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","f34853778800635c1232e3e12bed8840"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","bb6bc92130f1e9e6947821c973471122"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","f7f2ee168a2e201d77e3cd5e0cb3e743"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","f3beeb40117fe182ddfc163e6e4e404e"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","d638a0eac42ec48b4b51ac1f0daf5be4"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","babf305fe39ea6c030a604f0a56887ca"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","b39d6d3ead376238c98e883851aad149"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","06cb1907fedd857b8bfd663034257e5c"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","03d0d1353885db7158afc011ed9bbe51"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","f6fa67c681ed4c6e408d7e0ca7a47528"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","82450a9813e5cc1355bf4f20ed872f62"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","1a9d4ac7dbf8e083833663b8e33e5880"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","775578d83ae709cd5839be057ef34033"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","dc570901f00b0b70c579e6c948904c32"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","8a1d206b021aa5a15a85e5c854a7d1b6"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","934af876ff31ce19882b5bf9b5c70266"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","6456555ca1633269fd9e93f5ef1ab31a"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","5794552188c99eec6d25961b67259001"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","3bea65350fd9d80071d93ce6a1c070dc"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","a07a2d598279c604404f1a14d85f5a34"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","0b9a7f325208dfd203a5f2f584bf45f7"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","b44e1bf6708cdd313644d7424bbe7ebf"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","5f189134eef7003206504adf8d631f7a"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","54123d3ba57ed2cbd77b56e8293b5efa"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","c0f94b16c76bba6cab4479648dff3ee6"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","f0ee6659956d5c6524e41064de405bd5"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","b61872aa2aeff5c26312fa08e8145891"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","705beb629a00219f17f18cb9138477a1"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","b24f054e6443a29a12ef86503bb5dd3d"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","9c8b9ff7adf36d300764a3d80b40602e"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","6616dd40b4f76b522d3a456d85c962c6"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","961fdd2707507326cebec97a03153dcb"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","3e01b25a202782b2611c3f917cfbd461"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","e13cfaecd55d135938f69b2fc2a65b9a"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","fc4a5bd2a15220e1a4453f031076a37b"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","07735bda52b165a5932ecfda237bbd2f"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","0cb2db2c9118a7f62546c61e2a2c7874"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","98cf23c488acdced58e49952fc649e44"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","eda7c95119f13846180a73f6e5ff7036"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","ce3e10e889e3cf8ca8262cab486a70dd"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","5f7bda4e56471e933b8c3dd62c7b1e45"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","44bc7a82287091f60bd376e5c6ab49ed"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","646392534dd90ab525b790a898aa691e"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","b90597bab781a5d14947ed8e4e34ea3e"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","a09fe3ad90bbfe14df99e7853c6bf2a8"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","d076a5a5f9041f1b30dd810447f55836"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","2515243f1d4eccb936f03153d70f3b1c"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","52f285f2df9f42ecf3550e08f29e0ebc"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","597a2e3cacdc35d184d561dc8a2e6fd9"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","4f990b2096dc93bcf04f4a1b7b390a6d"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","c9d903ce572de75c27baab8c064f2039"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","4850d9be5f4ef665fb71f7407fd8cce3"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","11c786d4708a65ed002d05b25465edbb"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","723ab0b96e22c0a3c38d34935f0d195d"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","adea6b0cfdbaf7050974380e4fc3028f"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","f8452e6c20ec3de39304766c7c56b9fd"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","b168cf7d402605af65e5f22fd157d6be"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","ed03c22933ab756da2491b4196e59094"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","1d6200caf8819e86039e9e8cc1698b04"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","42aaf3e964447b2deff38750b4d2d2b8"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","517b554fdc3b5464f93b3cfd971f6c18"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","f584135c010edcd511d115faccdf8f3f"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","efeb999eec80533134c807bf50a4d360"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","7c8546d4f0a3dd89aeeab07fbd703208"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","8edfd4039cae0aa93674e6ec5d901bd9"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","5a68f3b1d3917f501c46b022dcfef1b1"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","874d626dbf5e1a9bc8376bec164eeef2"],["C:/lmislm.github.io/public/about/index.html","f61afa1612822380f92d381e783bf103"],["C:/lmislm.github.io/public/archives/2016/01/index.html","4e0edd72f4e667c5c64826fa2d9e7925"],["C:/lmislm.github.io/public/archives/2016/03/index.html","9450de3bd00e0518a4dbe8f658c96ff3"],["C:/lmislm.github.io/public/archives/2016/index.html","79f2e2e58856b86278708a087b61d3a7"],["C:/lmislm.github.io/public/archives/2017/01/index.html","58617aa549fbbfaa116104e707e0301e"],["C:/lmislm.github.io/public/archives/2017/03/index.html","1b266682084f464579f41c29a38ce71a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","a94447ef01db9df3f94dd4693cd02292"],["C:/lmislm.github.io/public/archives/2017/05/index.html","1fbd36f27ead7ec4dd80f02dd05ea81e"],["C:/lmislm.github.io/public/archives/2017/07/index.html","85885e589b28388f3f163e1fc8ba2158"],["C:/lmislm.github.io/public/archives/2017/index.html","f4540d4f1ca1d7d653e89ddab4407a93"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","6e846b7ec0f8513213bef0fd4ad9c320"],["C:/lmislm.github.io/public/archives/2018/01/index.html","d7c1e61b4d7b8aa4df5519945c090958"],["C:/lmislm.github.io/public/archives/2018/03/index.html","1025588a7dd77845a2c9d28736dab4dc"],["C:/lmislm.github.io/public/archives/2018/12/index.html","4fec855d31cfb022f2ce342cf2ec0524"],["C:/lmislm.github.io/public/archives/2018/index.html","d9393cf5a8c0812dbc709ac5c0af4bce"],["C:/lmislm.github.io/public/archives/2019/01/index.html","4dbe17cfff25d5b55bb7d54fc7bba906"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","8d6b417e5b39fe4fe7ec4c43c9e6560a"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","ab808ef45081820eb5d38a16b4393f3c"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","f4da59478576ad05d84aa76e9339f21f"],["C:/lmislm.github.io/public/archives/2019/02/index.html","59ea5a256b2f02e669c30baefc7e2280"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","8db62adc57b1180132e74f8b8c382a19"],["C:/lmislm.github.io/public/archives/2019/03/index.html","1faec2fa847de603db49ab7ac5ca1d2e"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","57367295da55a63091f2e4571c4d546f"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","9f4a18abcaa5750820d74f1eca7a3b93"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","9732161e9d1f0ec19386b62107538529"],["C:/lmislm.github.io/public/archives/2019/04/index.html","6e166911d541f3cb7a40560d8115fae2"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","f585ea745f678208c39f1e750353a981"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","1c9c272bd6c7a585ae35747eb82b0585"],["C:/lmislm.github.io/public/archives/2019/index.html","326838324fcfd1f0a1cb8c40202ffc66"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","6f9ce16bb5ed9a9757494f311f4a9ec2"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","446c3cc9b16d122a9e5fd07bf55a0ce8"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","c40255c89ace8d41e9f9182744ea7208"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","7836d6c2d1699bf2c4f6826a64083169"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","18a70e6626d9a94c56b19c523ef5b35e"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","1215d9bd468660c90f89ad80578836ab"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","8f2e0536c5658b0e8dccb47331c76a4f"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","99b19ccb6870ddbc888b1985f1c4cb49"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","12906779df3636a05c41153f77a12f51"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","a3655b36da6549235466baca0b0c6552"],["C:/lmislm.github.io/public/archives/index.html","c3ce1c741c5b8071d24609361cfdec2a"],["C:/lmislm.github.io/public/archives/page/10/index.html","cadd5134294c182a7eece7c9688c8ccb"],["C:/lmislm.github.io/public/archives/page/11/index.html","6edb379606a276b774cdd3b06fb0e3db"],["C:/lmislm.github.io/public/archives/page/12/index.html","b732c5525a6d636430864626a42798aa"],["C:/lmislm.github.io/public/archives/page/13/index.html","2dbe6a5ab5e077e7662be222d2cefbf3"],["C:/lmislm.github.io/public/archives/page/2/index.html","d4f0b0719ac6a16591600bbbb7111aa9"],["C:/lmislm.github.io/public/archives/page/3/index.html","b450538e5f78b720537863a336946f82"],["C:/lmislm.github.io/public/archives/page/4/index.html","3f38e52bb9331428c42e5b12d52af111"],["C:/lmislm.github.io/public/archives/page/5/index.html","fb192fdc0c280617aff01f858a77e2b8"],["C:/lmislm.github.io/public/archives/page/6/index.html","3972bd7c7fd0ea4af24fe45641a39841"],["C:/lmislm.github.io/public/archives/page/7/index.html","7486ce5dc6cb2bc18d1cb8a93eeff6f5"],["C:/lmislm.github.io/public/archives/page/8/index.html","08b36cdea544747be1f55267ccf1347f"],["C:/lmislm.github.io/public/archives/page/9/index.html","1b0032402cd650ebd01212943fb486d3"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","35b18feaca63bbbecd818334a294e675"],["C:/lmislm.github.io/public/categories/index.html","ec47a0dfe852cb9bcc0052b25c28b7d2"],["C:/lmislm.github.io/public/categories/xx/index.html","5076d77fb0b08bef4f69798c499782ab"],["C:/lmislm.github.io/public/categories/学习/index.html","73e34909a3bdf5a5a115bd2725bc8d00"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","e4ccdd65fbf3c30c2fd40ad4ba72b1dc"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","16caba37df5eeabe454da24e51f4e8df"],["C:/lmislm.github.io/public/categories/工作/index.html","59ee70137b35b04354484f8ff3af9cd8"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","441cc1041b85b695aac2a1a038205cee"],["C:/lmislm.github.io/public/categories/技术/index.html","6295bb973f659cc19344254b57b0bbe7"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","ed9d854fc8e626185b269effdaf37f02"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","047cce4e0862506e445f67fbcde3e537"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","da84f8ef47ac53e455c41261c0c4da26"],["C:/lmislm.github.io/public/categories/日常操作/index.html","92b8c8c1541c82e1afdeb29be590d0a3"],["C:/lmislm.github.io/public/categories/生活/index.html","47e2d4d9aa95009d1561d3c094048765"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","3664c5a4974f5500b67019be08df66ca"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","c49c61a2ddef956841d833cad3bde12f"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","cdfde193bc77ada1947e7ae32eb9dafd"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","20560a474b515415287758df3713e9e7"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","1f2d6183195193a27dd6d639503c4d2d"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","f5822bbdf3fb30e3929dda3b8ea7f347"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","a05f299fcfe46b1e43d0c5c90abf7c09"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","d919d86d8b5ae2b9f67d41eb1fcbb584"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","76fb7ae2faeb2ee1cf65fa2c49d3cb20"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","f209413d68a5007d7a51ae79a5cf90da"],["C:/lmislm.github.io/public/page/11/index.html","2619fc8aba7deafe8bd4cc736cf0252c"],["C:/lmislm.github.io/public/page/12/index.html","7727a3d93716ed20244a1d66109b7e1d"],["C:/lmislm.github.io/public/page/13/index.html","e1c6fba242dc28c50d1b23849a6457c1"],["C:/lmislm.github.io/public/page/2/index.html","f66712f618bba73970debc9b01b75d93"],["C:/lmislm.github.io/public/page/3/index.html","860a09f941fcecd1ea5bea9a6cdb2c46"],["C:/lmislm.github.io/public/page/4/index.html","c117a4b04f5a579a1da9b46cf6a52183"],["C:/lmislm.github.io/public/page/5/index.html","a4e89f17ffc4306d4db1295be3ad3cad"],["C:/lmislm.github.io/public/page/6/index.html","4f19b12b438565a8d87ebf8038d79fac"],["C:/lmislm.github.io/public/page/7/index.html","16fafdd94a80aebfe9b3df69967e6b99"],["C:/lmislm.github.io/public/page/8/index.html","ff56ac9e11e8852ec5b5c9974169ec06"],["C:/lmislm.github.io/public/page/9/index.html","6ca6c6d3dd7054655c729373f75710a1"],["C:/lmislm.github.io/public/tags/Interview/index.html","ada48f011083d6b865ebc947a05b715e"],["C:/lmislm.github.io/public/tags/JS/index.html","d2cdff0a4257953523485051f9823991"],["C:/lmislm.github.io/public/tags/acm/index.html","e1e8582df9f8732ace2303bab68c1142"],["C:/lmislm.github.io/public/tags/c/index.html","1d8636b2cffae4c4216973bf956cb7b2"],["C:/lmislm.github.io/public/tags/codewars/index.html","fc0061df9678bd496dbde410de3423e4"],["C:/lmislm.github.io/public/tags/css/index.html","16b04aa130486c1d942758ab213df571"],["C:/lmislm.github.io/public/tags/git/index.html","c9a218c7f8b30eaf841c8b8016ae2239"],["C:/lmislm.github.io/public/tags/hexo/index.html","a189650094185a12c4e742ae241eed21"],["C:/lmislm.github.io/public/tags/index.html","6edbaa0168926e11c2898a24d95d2c15"],["C:/lmislm.github.io/public/tags/markdown/index.html","b3e218a18813f823cbc2c2b248f39a0e"],["C:/lmislm.github.io/public/tags/poj/index.html","4770764ad9c9488df12a5702c5c64f0c"],["C:/lmislm.github.io/public/tags/shell/index.html","32bfa021bdfe1bfbee3b6d9b154e624a"],["C:/lmislm.github.io/public/tags/vue/index.html","a9259eaa57670bb79b0fe8f6b9cacc58"],["C:/lmislm.github.io/public/tags/xx/index.html","79677530a4c84a7142d8a81a284afbf7"],["C:/lmislm.github.io/public/tags/前端/index.html","a395cdbe6ec7df91067a82cb6500e2c4"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","bdd914f8a7f51a2ca23d0c0006c782e6"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","d33d19ce9e4d68e337ba05025caaee25"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","abf7ef98021729689e00017178538e61"],["C:/lmislm.github.io/public/tags/小技巧/index.html","09383b59456184973443393b8de5d4bc"],["C:/lmislm.github.io/public/tags/展示/index.html","dd74fcc5057688699afcf592089b83da"],["C:/lmislm.github.io/public/tags/工具/index.html","3f8bc68db540effaf8174b0d50add976"],["C:/lmislm.github.io/public/tags/感悟/index.html","e45bbac99b69dfbe9d735d3900ba9575"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","ceead14df9bb559152b39ed83809e80b"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","f771c5cc12639961c524498ac17ef621"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","2e14a0c1fc391fd9ee16da71427125ab"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","7d6453669496fec3ea3a54c49a18c3d8"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","3f367e3f11ac03b68ef468ce6c719803"],["C:/lmislm.github.io/public/tags/练习/index.html","9d597a2f46a5046d99ed31c672fc703a"],["C:/lmislm.github.io/public/tags/编程/index.html","162285535c5b678afdb80f71d0873ed8"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","8d3f127e1e0224cdbaefc47b63130f01"],["C:/lmislm.github.io/public/tags/运维/index.html","30c068b47aad4dd3b9a6e98599828a78"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







