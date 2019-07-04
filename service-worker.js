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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","057d322036e1d7f393f9c0d4084e6db4"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","0ac3fbce723dcf6ef55068e2d113bdcc"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","06d2ffb5eca91f4ec431b05b37c818a7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","0ed1c4a1292f3c8a2b073341f4624bfc"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c6e5ab82811bfc7ec1ec6fb10e63dffa"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","7e8b7754b1d92c22e09f4d9da9f48439"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","22996ecb5cc31e903475edd2216326f8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","d3ae06a4ad91d3d6883ef67958f9b117"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","9b73a3f2a9ca0bb24bce0a7d78791f2e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","fefaae0410293b27b3a1dec10081f5b8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","086d1776f108c1a533b34416547fca5e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","84d5f5f1b9fcaa340481010df0268c9f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","49d654c832fdd179f7603f44cc935782"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","96edd49f9c8052350645beb0196f0e58"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","d828e9cd0e7a9eb190453096b9febc3f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","0d4c768bf935dc397263235812efa610"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","1fcb0c3845d06f8688fb3a5eb61df4da"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","bd75961800920202212196b494bee7bc"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","7e96604b60763b59ba86c89643874cfb"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","06f038a9edeca9d043e9e6a96799c9ca"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","3706300c5760ef44a7bf8c5ccb9d5fb5"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","693e728b2ceb418912c61f7025f7c2bc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d1973d4072dddbf68867f3f6c12719fb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","77e256ef97efb96dddd77db9338c515a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","19dd143203438d79b5cf1c75edabcb15"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","fd1d8686eae07a154529852e5372b51a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","f7ca12c06329806f8aa45d383f9a3522"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","38962d4e75a952c95c148a46e3830f86"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","8210f9ea4e95d336f8bc72be604786a9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","e0d9a40268b83dec378d8a60bac5b715"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","b2cc6515662928a13b146abb458f2f86"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","527dd2903204184808992eeff602f310"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","d490705c5ec753a5f30027972e37c407"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","547f9b957021218688a5a8f1c1716639"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","7af76c9b86b102bf2a5c2eabc18e11f0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","2db93398cded1680ac32376b6d83f7de"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1da2c8b21c5024bb408d85d3886f999b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","7e19e2be2d0b865976747382ee461085"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","aeeb074e4b0d5654cb394051da0ed097"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","8cdf96d2a0f3f8bc37e1d392055c63f8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","b997f1b76c558f710cbcde406a6cc948"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","152006ae3be89d73138be8391c10bece"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","cfa2220452afdfd5e731512fdd481b8a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6505d4fd4f297b8118eba89e5b0c3c2a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","466a31513d65976e514a57c543398821"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","194831e33cfb4be67dbab64f7a5e2a82"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","ee585abf39b1f3e2e6ee7ee1e0e7337d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","2834268691e41c936f08d6205edbe4da"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","0388efae1da1396d04cad5bc61db0a46"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","e78cf260ffe0a754d31af90a18ef77de"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","9dbb4222a3e3b448d986a7266f8cea4b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","3b03a9633ecfbdf4822bddbca30df4d5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","ccfb5103b4928ab622b7640bbd475b45"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","9657905f90b9cb9fdd922b545c2ee0c5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","1351e32598a530b2d565f84202b0500f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","1f05ee4053f8c37988549a8b1f2bd903"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","a25741ac42ffc42097c169be880c6d8e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","5f81174d614d785f5599b6316954412f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","3313143a02ed1e6993abcf43a51179cb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","f41722e3bcf949b89f6c66154b885b08"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","28c44bf7fd78c6bf16120c9d6cb15ace"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","86cd049c37424de473a64e326819be24"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","12ca373298852cd95551858fdf6c3707"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","cd7580b827e108ae90b8faa3007b8814"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","e1f4ed1fda16f440cfcc1eaf9cf14ccb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","7a801023faa18ba7b00804add36fba79"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","96c084cd1a8ee03a72cf244174bfb1f4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","483001c037daad1722a622a1fd9727c8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","8dd6cf9e6f605b987d555900f5f5499b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","56b696905a499332cf852f0f46858f41"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","c193e6f170ca5b9a31b2eb87856e02ef"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","5efdfaabf4554136e3415b9b079a7388"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","933cb1a039290859d0d2ba187ba87ec2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","c9abba82508391714e47c7b9fb6660d6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","08b3cb39a2bc67a3208cf5cd102b0e63"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","5717d363c1228e8872ac78ca4c45bca9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","1d41fcbe902572a384ae558fe127d4ce"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","73cf8df76f52f3d1eae307a55a4820c1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","3d9a4ffeb64fe3f40f4ec13b1ac94699"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","deea2fe89096c225b40806692af39788"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/02/2019-07-02/index.html","9c8551556a1f267f3cd6bc26e5f0afb4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/03/2019-07-03/index.html","f15077d46452f64a541390d332fe7dc8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/04/2019-07-04/index.html","ed2efe08b442f93df5f25b72e837ee8c"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","d9d681a5db9d5d30f080f2eff9b47513"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","197e03b97406280d067776cd0af552f8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","340c859a5c3945bc656eed406dd4b506"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","abd27baaac6bb0afcb73688c0b66eccc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","8366f5312171089e085d46bd0dca943a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","5eabc9699ace375a326a660c93dd763a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","37b7e1669b88badf026d74a0016560e0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","106dbc8a7d11d02e0e06cd702e6dfae1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","2d7c2a8cd95cd6dbaa58c7105cef74d4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","42cb92d884ade3f4ff85be045e0de2f8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","e751e2fe71fa5cf98c3fbb4b4d4ce21a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","74ff8cd78190601e5af589fddcf19b11"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","7cce64064fa28f6928cfd1aea8d6e808"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","eb80f96fc55c9a33305db7679aebf3bf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","26684609dd685b32753695d7798c0096"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","dfb619884e2d0f0844f7877d0c6a5561"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","98f6270ed5ac4cfce3a47be02884ad89"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","3de1e127f7306285c0799b144bf293be"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","543cb0acaca5c7bddeda1093a1c43cef"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","3306d59a5f396dd01531bc07ef0cbc1e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","f8419b25c61e25dfff7f7ce2b11416f4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","f4f18a0c01594a95c4e45eca99c261a9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","2ff2cea00fa6775243b98dfabfa22d05"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","004c4b562ffbed53fb147277fcc759ca"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","c04781cea0a85950553fb434d39f4a14"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","b4c62ebf644c25d40a947576d23d2fe1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","466b9f7d97c7f28117a3b94b8857b63f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","d4762e76f868d65adcd36b49b836b977"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","7b1eabcfb3647671576d5e1ab26c99c0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","cac64bbc61240c876ede8e6453382df7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/7/index.html","e2e2713ec367570b147382caa2f678be"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","f2ed8616747687c1eb9580f99ec623d0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","ac86e7c2dc44c78462e884247196a18a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","bcb0402b44a7608609430d5fd2389412"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","58e92e9aab4b02e14de428bc318a749c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","e2b64d03a2baf17cb6c2bafcaad4b777"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","f43318ebcbdc9ba73df72432f3bb977d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","39ff3fb6de31bbe3a4e52bf248057c9e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","ce5f7f2e56e2d5d3728b0cdb167abe3e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/9/index.html","7e1052b8d3c49b61ac88cec3660db816"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ba457c36f8ec9eafb06db4f9f1086374"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","486d13609d8df0085be94384d0de0359"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","1fbd95b309737a2663c7cd43d3080191"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","745194cc6d3f88bddd164e61402e3d1e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","baf2f8bd1e4e32e190afb2c43e21b2b9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","7a6b4458fc7058f777a3c596339993e3"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","16e1ded1ea38757c15e11826c9cce53f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","c23ba3753af22fa75030cc5af5d82ba9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","c3e0561e6cc0130b04e339c76fd16fa3"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","e6cf3907d2a682454aef3484e9526359"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","794dd7dec5934f92cd0faacc079a241c"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","3facb2f07a34816f34add87780703a44"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","de3554b39037f5fb4796b5ba77e46849"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","735561b05dd0a471187a83c56d16ee11"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","4049affafb7861d2b8715b3fdc4c7926"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","f2e9aab1ac97316c611756f073e72d05"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","d3625574213e95faadff0e5a3f77a0bb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","5cad64a92bcbfa07b8f66ebeb4278634"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","be51ce0bcb4a1701a953a79d2516c180"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","86961c445719b844380b536a53d4b61e"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","85717206de7ac210e22d0884f60a0f3b"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","6dee9e5d4726582cd569205dfbae0e71"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","413d0130c1ab3ae0f45e0d4929858134"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","74f8ba95b439b84b93b71d77bb73609a"],["C:/Users/10421/Documents/lmislm.github.io/public/page/9/index.html","afaba2f5a47b34726ff0cc4a21878c26"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","5c5a4137679cb45ac9ec73cee8dd4d40"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","42ad3e4c67b62d627e8773da5469c9c1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","776de84c7f60c59a2918ca575e411db6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","db41e0b082e85250eac3858cc7eaca6f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","c94417a4397de4c89a1060320c5cb7cc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","7fba983642ec577c025e9acc4ead8ffa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","77011c48192a695a7113d4f611c395e2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","926970c391863a9bfad5d403d4449357"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","5674e082d53921eb8753fc73731dd7aa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","5a947c2b952114d3f7232491f518e8dc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","581226c3766aae590a5544a15a46d1d5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","45f23c88e27880d9d0a9a0d78971a565"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","0143949dbbdfcd42787a9d075cdb3850"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","3b05f91aa5003e243323a92ee9d67e44"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","18c40fca6476ed6d9e2e78b9dfafc266"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","89e4a6e1ef870f0cca6d0347c5b2762e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","427a14660eee7655e6b2d0f5fba808a0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","88e93812f801d71fe1cc9dcb8b8afbfb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","4972df4845a552e0e4e2a8c5b7509267"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","8e4670c8064731ed28a91c172f1484ee"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","4c41937fa9f0ceb69251506020cbf727"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","f22728f948c5479b9e415def919647ae"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","33b4e9cba39ef2d1c3fdbb34cc4bc12a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","3f522aeead27ba6a89ae31451a25149f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","72b6c0755e68374903b7c1d5e9cefa86"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","53f2b4443ecc375cf7d959b605a47b73"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







