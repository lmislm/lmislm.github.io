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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","fcc08eb2a460838ec45a28c4d389d1dc"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","47b8392a12300a357f8b08b7497b520c"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","e6a46644bcaed47ee4e070d526c44bc5"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","41e67799772fd3897e53ab457c9a7fc6"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","1fd8d79cd9fc707c404b1c558abe1a53"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","6913a2caa4513a0032ee02b90f4bb02d"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b2e2e281d54d48502af47838593e636e"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c1fa2df5d5051b997f469e88ac1c04d3"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","d61262143bfa65e38ac546f90e9b7045"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","3c01222935e23ebc50e0f9e8fe457339"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","706ea7fe14b88105edd1575819ef9462"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","fa29658145af909f350d12a9e70c5d69"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","60259a14a6884b96690fe0c11c07a8d7"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","cf8ea77ee38dc29bb5f03dbdeba48671"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","d8efe70e192fc60da92e0c3fbf98eaa0"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","9eb989bf484a5533ef95fbc9b2f9747f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","d6ed1228ae2ce6abde8899ab73a6ac99"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f4c74f666f880c47d6f9e716ab01b8cc"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","b9c6baeebfb93ad4ee9a7cf6b84fa14d"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","6cc4783c2b53863e58ef8fd451f4ce42"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","df337d31ae0739b0ae5090ebcc3cf796"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","0f234900a9f4ad47dd8c17ec0958b437"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","e8c3cf67829b9f88bfd13f1a31357cea"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","16fc15138412443e4836b710680d3f9d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","9b640cae708f536e4a6baebf7d300c6c"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","a1f90f2ec2e3045cb5fd5545bb5b9533"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d03a01a1189dcb4429bb5b0cb5072509"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","dc2790c207460ee19798b743673fff85"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","07581cea14b6e31f83befe51aeec338f"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","e5db9ad9975eb4ec2f10cad900692785"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","5be8648c0a57bd891239e4dce71de0b6"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","91502a748b9af7491dd4f81654f96196"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","8cd775b2a3c251b5d31cc8790e69d1db"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","e450b9e151b872e7606df437f5d697c8"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","14547f60bf92bbea9e00371c5be068fb"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","7b18e702ef9efbaa370107a27add23b9"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","d1011dbd8bc44c737df4a5d5467b2f0e"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","58194856cd16bb3ccab0386547bb82f7"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","d52431740e4f9e7fff0bd4ed74b7e8f0"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","7135f27277e86c75f69f5432f3152a69"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","32ed338af5ba2c795bf4d6774c507d20"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","8cbceded41f64d18ab4db4f03b45ce72"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","eb00c9e4ed933a2f49a62d17f90c9935"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","5ef63d2df33d5cfd983417d153154d55"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","7b28d5b36660a1d9d38fa4aa7a34fb35"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","b67f2693e22023cf3f71e2a21832ff07"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","057cc1b44f63b2ab5f37fc3d532a1134"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","e99e14aa014269ade79054f6df527a7d"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","c76d0e855c1c8351c04c4be97e20aef9"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","136c60f7bbd105a7a758fc9fc8f6a383"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","4c641d40b545d4db4f707f53b6fc335c"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","5ccab78cc4479870fdbf137267b7f339"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","d0b373a83dc97d6c6f842471eb1d9c60"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","727d3863baeab1c76ef7c33bf0418f95"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","2fdf320067ba6d0ed60fa7f0713f34e1"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","6e54ec80c8440fa88559ae11ae58bafe"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","6febc66a0de0e5ecf3db5dd11d120961"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","a9f432c34c97e07a3d01767ef1e39941"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","beadc51a007e8453af31bf49d4e30b02"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","bf022c4f61aad631bf2d2d6cf431237a"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","14b2bf30b007835e6ceb052c754afaaa"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","aecc419828f5a370022d6d07843fbd12"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","298feb057dab6b3f41b90f1c4a4098c9"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","1328f0b05f8295511433e1972659df09"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","f9939d294b1fd35158c04eab5a206f74"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","8e405e61dd6a839aea6e5ffbc429f5ea"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","cc92643a0da25b68c4e6019e8fa2dc0d"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","bf10bc6824364f61f84f63de6d80a9b7"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","32b99dc82f70be2e27659d7c7b8f0250"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","3ad5db600d0e1a904ded52edbb99a7a4"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","2ef4ad1c3df69330fee8aaa57803cd25"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","d2728f1d965e5cc7aeaf26b5870a500f"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","b55090e97b8b01464248d3a0d39f29db"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","48d510738dcfb9f378f73fb22216d5f0"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","54bf88550f1e2c43385c2a473fdef0a0"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","5539f57f272592061ff40684816c523d"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","68258c7bcb4ecef1f288c40098f2beaf"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","e08713ecd0bc1f681da7ae736ea9764a"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","cf862682e4c5e4e43787970859570e80"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","3edaa29d85110c3074b36a50f08a24de"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","3e0ab9869911e447ce7d6f6b1cc8841e"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","76e079b566c1b920ee54f0a11b51c1b3"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","bbb779ba064de53a7d11059e1052a3d3"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","1e811529101b44dcca5c5da06be5d998"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","040dd551b09ba8d1a8de35bc8cd6fa73"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","e41adf2945454010ad2660be86931890"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","cf2b60790e7e7518a7938be4c1052286"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","514e312505dd52cb4d3dcb4664d41ecc"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","f72aa5a8f8c8e618c1894c4078fa02bf"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","414ad139d9e1fd47ac45b52331e0df9f"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","9807d3eb7930546a3ab482410c240630"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","76cb6784138124c1e5eacd7889d556c7"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","6d31073b4ab4b5697297524fa5755ec8"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","4444e38941c7e879239be494aaa4da0d"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","6772f02cfb594cc98d28183687fc67cc"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","084e8d04164e58d338a3545e51b24a58"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","0e0a4eedd42b260ede3a0a9b079fb5cb"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","84ab2dc39c4eda1af06c129eba6ce7b8"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","124743aedbbb2d62a734f4256ae41f5f"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","9d87f841347778695e0e153256a17787"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","cb32e886d2b1a82369232446deb56d04"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","6f4666d034fa4a29780f0df74a34cf94"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","ccdf5eb9c262bd9a788bf6b429bd6376"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","fa73df237c6ce77a1aab02be810f8b82"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","5aa004404da6f1da107c7488d643b7a7"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","f5835253c801520ee0b302727442f1e2"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","c5a53a7ac72be42717369cc2bf927522"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","301a7bd79ef8dc4cc6fb4d27b2ab3c85"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","4eddb335a760fd5fc38a812544344eb5"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","0474ef71fa261660440830cb9ad09b4c"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","eb2e48533212534b6309b45ab8f39adc"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","eb74d8632b9d6681e06ae58d93b6e9a8"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","59b8f0cb3b34411332c9b53094026be9"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","2d4f9aa7482d8f51e00b39d189d3389f"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","7a09f14d207c180c8d2c51f686f7cf14"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","5ec7c0f10a1b7488cb527c7aac7e2bac"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","173eede6355cc00306ecb5e6303caa04"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","31abf64b54fea8cf1a1bf7269054b285"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","7c227d87492b39e21d73dc09ee384a51"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","7b81ef007bfa84862636b9dc999add7c"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","f0685148aae939be63df530b3195e898"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","6ef761d63c459948591eb3393860ed69"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","55712eefa0db857523f7bc2900e0e0e9"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","ac1bc5c7b32080a155c9179f3524e2c5"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","9b4df3f59c96ffdcd16886eb28a6ee89"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","af42a99dfc6f5c3618bee82e7e9beb17"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","1f0fb3cfc686be216c030d8efc5ea450"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","3800449df64591efc76bfb1b6cf29415"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","0e823eaaebd38a07e06b1a89c488cae6"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","00215ab11540230a0c2c16b0ce247d5a"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","bfcd1c73486cfa9a924dbafcc686c235"],["C:/lmislm.github.io/public/about/index.html","e9d6f87446f525f74175829dbbe52861"],["C:/lmislm.github.io/public/archives/2016/01/index.html","3e51b9d0c6eba9c6e50b32959b090692"],["C:/lmislm.github.io/public/archives/2016/03/index.html","aabca3eeb75bf46f060d776e0aebb59c"],["C:/lmislm.github.io/public/archives/2016/index.html","59344c0eb8f0ae713c3a9da38cbcda7f"],["C:/lmislm.github.io/public/archives/2017/01/index.html","0f2a42b7db6aa944a91ab180650e2360"],["C:/lmislm.github.io/public/archives/2017/03/index.html","0a09838c5d4123a43627a2ce24625704"],["C:/lmislm.github.io/public/archives/2017/04/index.html","fedb28b6aaa526454952cbac6b78a995"],["C:/lmislm.github.io/public/archives/2017/05/index.html","3900f2fa3b9b9661c24b2fb9cc5649b5"],["C:/lmislm.github.io/public/archives/2017/07/index.html","09e702b73941034ae61294551e080dd3"],["C:/lmislm.github.io/public/archives/2017/index.html","dcd714cdd4dab078485b1bccc2d8ba04"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","2b9ccaae1ce3391929e74dde55a57a37"],["C:/lmislm.github.io/public/archives/2018/01/index.html","840376963c271a5d4a63baf286e792dd"],["C:/lmislm.github.io/public/archives/2018/03/index.html","15bb8d38af2c166d88e8a85896aea780"],["C:/lmislm.github.io/public/archives/2018/12/index.html","90cea6b31870aa9439b8a4d55e4161f8"],["C:/lmislm.github.io/public/archives/2018/index.html","aa5e76ccdf79531cd3ddb921b7c84024"],["C:/lmislm.github.io/public/archives/2019/01/index.html","7c8a22d51b4b87dbda578ee25b5b5490"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","b2502732f6f89c4c030905726142c785"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","32d7a97af6b3c23d30ce025491f25b9b"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","8c34b24b3b978f66f7af1beb4456211e"],["C:/lmislm.github.io/public/archives/2019/02/index.html","a92b742f3559473755d16f56243634dd"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","99df984a7a159af678aeb06e2d184d82"],["C:/lmislm.github.io/public/archives/2019/03/index.html","4997542c1450a5c9255928088f68217f"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","7c0c6c362fbf37ee298875c58888d7d8"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","c0e6da53a565c4747786094cb02a8938"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","c0bba571a2de82a5be0c4629ffb6c044"],["C:/lmislm.github.io/public/archives/2019/04/index.html","a0cf2d3487bcb7e83f0bc946ec76766e"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","45dac78c170588fa28802a5a341809a1"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","abd725e0f0a815b37c42c502542d7471"],["C:/lmislm.github.io/public/archives/2019/index.html","04af6fc8343b127a1ff0e5cb8c8ce178"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","4a50bfaa5661e6c434d88c9a27cced83"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","2cc4499d4200b584e4d9e70a070d92f2"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","4ca4a295e16fc312b20481ddf63b0b74"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","0a48f875e6b58169a1646820803490a4"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","3dab5af6aeb912c77e59bc2e5049944e"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","011d3b92ada241593411d13c738da3fe"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","489d40aadcfc904eae964e6dc0a29943"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","4ae4d82631f23c492fc6569c08e1dcfb"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","f6822cc0fdf5f1f491231ccd8d59c87e"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","67af7dcd4e250bd829103190a83e2e3c"],["C:/lmislm.github.io/public/archives/index.html","681ba06c7f6ec4673bf7fa8de57f0dde"],["C:/lmislm.github.io/public/archives/page/10/index.html","aed4aa2d715653afcb38208c08b17c45"],["C:/lmislm.github.io/public/archives/page/11/index.html","52b3baa5bcff8b735b0bef99cf5d4176"],["C:/lmislm.github.io/public/archives/page/12/index.html","cbb9f7b66cf6aee599287da00cd0f23d"],["C:/lmislm.github.io/public/archives/page/13/index.html","9049e823698db1279d05268e51c6d51d"],["C:/lmislm.github.io/public/archives/page/14/index.html","0d5519ca7b963ea9f8e7193cad51d26b"],["C:/lmislm.github.io/public/archives/page/2/index.html","767ca38a6427cf836f36636d9ef09e96"],["C:/lmislm.github.io/public/archives/page/3/index.html","5902fd0fea8c6f7a6aaf402783e143ec"],["C:/lmislm.github.io/public/archives/page/4/index.html","8b6017e98074ffbb663cfdb84f96c4cc"],["C:/lmislm.github.io/public/archives/page/5/index.html","25c6612a309167fb8d24ea58364706ee"],["C:/lmislm.github.io/public/archives/page/6/index.html","20a750decd4f170578bd3c52600edb2b"],["C:/lmislm.github.io/public/archives/page/7/index.html","028b754ab3e14b77972dec867a4d4526"],["C:/lmislm.github.io/public/archives/page/8/index.html","c0a64809652fd8d4372309040ec1dbfe"],["C:/lmislm.github.io/public/archives/page/9/index.html","9e412f8dd61abce85e6c7f5c26dcac3f"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","cbc99d19d57e798da3b3e3925ef0fd6e"],["C:/lmislm.github.io/public/categories/index.html","7c9241c514edcad62232b87f5a41a1e7"],["C:/lmislm.github.io/public/categories/xx/index.html","81ba14a6fb918f8469417a40b555375e"],["C:/lmislm.github.io/public/categories/学习/index.html","4fafd789ec78a3a60bfe3a32560ec51f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","1125c5185dea03ef8a925a1d63c8ec1b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","b3d105323aec1134c0334624a4fcdb1a"],["C:/lmislm.github.io/public/categories/工作/index.html","657d99e5b72e3a06813f29afdb263313"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","9b6db7ef89db6e28d9875456bf9e124a"],["C:/lmislm.github.io/public/categories/技术/index.html","eba0e37546dc64944a31b7f2e1bc253b"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","13814957d6431d09458635147f38d455"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","766e43be2525a930e94e91c5b6b8766d"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","0e8c39b0c588d02a602e579ab12634c1"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","adb0c83759b94f4adc8813193672f562"],["C:/lmislm.github.io/public/categories/日常操作/index.html","077d9465932eca7497cdae906a6690eb"],["C:/lmislm.github.io/public/categories/生活/index.html","ae1b0adfbcf6ff0795c8bcefffc25178"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","57d4e012acec53c971d42992afecf597"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4df3aefa0b077621ce403093bbfb02bd"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","c7989b2f019e1eff3e05fa3e132888af"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","a8092a7373ca9f02fe0badb397901d48"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","09486d8305a0afcbfb40f70db10b23db"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","2ec933f9d7854a5ebc74eefb8bd47e28"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","bbd36d1478481028c54370d3dee44223"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","caad60d37efdd66ba2dba317ee6c1f69"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","46291ecc5a5f4ffc3425a0b037473847"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","adbac717ce983283ba8fd7ce5af01cd5"],["C:/lmislm.github.io/public/page/11/index.html","9e2dabb89e78201308796adca342346f"],["C:/lmislm.github.io/public/page/12/index.html","af20f3edadb6a96616d1e41973f25871"],["C:/lmislm.github.io/public/page/13/index.html","eb22e357324f18e5895fcb8f41d0f8c9"],["C:/lmislm.github.io/public/page/14/index.html","9a7e5cd1748851b86685010b4f95f2ee"],["C:/lmislm.github.io/public/page/2/index.html","2b685436e68240f485293204f8ad05b6"],["C:/lmislm.github.io/public/page/3/index.html","a881bcf2ffaada6d8b4dc24c891e13aa"],["C:/lmislm.github.io/public/page/4/index.html","a2aa25857e29dee5a3304eee489c52fb"],["C:/lmislm.github.io/public/page/5/index.html","d814a62fb0f9890b1c6fff0f62b65057"],["C:/lmislm.github.io/public/page/6/index.html","61b7bc241cb91bda9e4a7f3e3b8037c0"],["C:/lmislm.github.io/public/page/7/index.html","193c7377a7601ae5bc37e773c0b83a00"],["C:/lmislm.github.io/public/page/8/index.html","9779028705a6692b103541859435ba3f"],["C:/lmislm.github.io/public/page/9/index.html","b78cfa05adbd8c17ea0431b12cddfd15"],["C:/lmislm.github.io/public/tags/Interview/index.html","09fd51389ff853a0d7434828caee55ff"],["C:/lmislm.github.io/public/tags/JS/index.html","9d5c797607caf366076e8222a8170fbd"],["C:/lmislm.github.io/public/tags/acm/index.html","0c937d84f537123d592517a274fc74a4"],["C:/lmislm.github.io/public/tags/c/index.html","e72ea9221fe54ce0be433b366fddef11"],["C:/lmislm.github.io/public/tags/codewars/index.html","5e840cf7482f6f211d8002ced5af2f20"],["C:/lmislm.github.io/public/tags/css/index.html","e60b0c4bb6193d2d8170e28cf4e5e619"],["C:/lmislm.github.io/public/tags/git/index.html","47da7ac8269282d80dc7dfda7799f260"],["C:/lmislm.github.io/public/tags/hexo/index.html","2a343bdefc888082e38f51864fdfe957"],["C:/lmislm.github.io/public/tags/index.html","68feb89cbb8fe3db6450b6578344f243"],["C:/lmislm.github.io/public/tags/markdown/index.html","37bdd24a544149f58979353d747bc339"],["C:/lmislm.github.io/public/tags/poj/index.html","643b1a04a8448ce76c4f10ba59174a86"],["C:/lmislm.github.io/public/tags/shell/index.html","0d3ac669d722de981493ba011d54cead"],["C:/lmislm.github.io/public/tags/vue/index.html","773f74e33ffa9d79cf30337bb5d144ff"],["C:/lmislm.github.io/public/tags/xx/index.html","c4ba2df64947e983a16e118268456014"],["C:/lmislm.github.io/public/tags/前端/index.html","0cd35f360ad6197228d58c6bd4f0a698"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","b336d0fc5d7592422b23bbbd2e1bce7e"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","1cf9749e5773e5bf50bb21cebd17737b"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","183c9b1a072cb2a3882306d72807bfeb"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","ed207adb952dcccb042021dc6602e145"],["C:/lmislm.github.io/public/tags/小技巧/index.html","2c9227fb9ab7552a93b8b75c05abb32d"],["C:/lmislm.github.io/public/tags/展示/index.html","4e1b6b9c6c5389692a7dd40f747b8b68"],["C:/lmislm.github.io/public/tags/工具/index.html","7b15e3a18c3845abbfdedf204349e660"],["C:/lmislm.github.io/public/tags/感悟/index.html","073f98f3070265ee34e46bb56be492a6"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","c51e7bd84233204eb150c302c7fd7313"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","ba30f9988b6a002158c0138662bfc05d"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","9b09944cc1b1b714300b089508d54aa3"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","c29c9585a0873ad618bf13db4bb8a705"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","0340827fe112d2348ad12434c7bd7c94"],["C:/lmislm.github.io/public/tags/练习/index.html","5d9ab6a0ca7a4e0aa6e26ef7ef08d1a8"],["C:/lmislm.github.io/public/tags/编程/index.html","a93d901aead26815df3ee5b129d39861"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","b3ad241e2f86e50330eec2116458eba7"],["C:/lmislm.github.io/public/tags/运维/index.html","4a3c0d2d26825b7d2828fce2ef77183e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







