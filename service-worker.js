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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","9496395812069e4c57fe0f198ce590a0"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","3233b4277a68d246d81c4b20efb83fb1"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","c52cc8549fd87da032044ef232ab3d5c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","112fe710493bc4fa25a30eb31e12db9a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ced39f76403bfbdb65065cf31bfcb9cb"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","0ff4a23d0e12ac2aad5f8a5c69f572bc"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","329c0bd3d492cd8cd4ffc6ae4a23eadd"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","8846a7c4e731ce1dc437df06802ad632"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","3e7dd02c73eb119c57c329c0efca9a46"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","440fe21b1bd7e4a84670af75532901d6"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","96bc96c94240d746e67cf2e70df4e6f2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","da40ed75f7c25dcf0b668ca9e2224c9a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","f8fda85f4b576d4f3b29f724c209b4a0"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","ce13ebb13ff9e336c592678ed84c13fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","fdfaf45c79d1475e5a8b4b479b0537fb"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","e01a0939966748679190237960a94e35"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","1e087de29fe3813404935ef232123a78"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","9f9f9d04d7bf01a71371c9352b45ebe1"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","a82e8932d9db6420902174234b5d93ef"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","6a38d4dbddf3a00bce94603d18e7dff9"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","d7e0eb792f111854f8c89a17832499ad"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","3429916982aeb0955aa209973e438255"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","fb1e069222cf30a4f43dfa50600c528c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","61551432c642367429d080943c2e8fcb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","44e15f6fb996225deeafe80d3c31a6aa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","f4a26da2a29e1a8d72799bcf23464a27"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","120588c10576a29c6030035fd6cbe786"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","b2a9202899f6b1e289a5473443ae8891"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","a94fb09f23f88275631e7dea0f60ab82"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","b367ea6dc83c99b57cb979f5ef302afb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","21542f5a22a1ddbe6fef71823ec66f1a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","346b06f226b8eef1002d595dbc6118e1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","c21a66242e9158d777621dd7dc82cd39"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","c679f502f5661f0736f165593702f888"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","3f14b0170f8b1bf673fabe978992da26"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","ce0014e26553f13d0c3fa66d7bcbe683"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","da7fbbd71e3fba4c8d1c15376b4c3161"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","6467458d3f74b46c5200c5a5b29abd65"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","efe562d8ad9d30785ae328bb697020ff"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","2991a4c6b733c9563e869e80d097b7ce"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","cd9274fe8ed85ac550c954db5a8d4ef7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","a0650f19240914e4ec0f7176cc72bcc5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","f832c3d8997b53b0ae2d3d2c2c2aee20"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","4ef3d43d478e613f6c25482765fefc87"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","c4e3bf290f697425b52998b4a07931af"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","e6f9096b914f80467d9b39d05f21c990"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a2a474fc976e1931d8ef64231039b1b3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","cf190b3d0f5905814b0bcbb8c81631d9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","26b22e29d65f05eec59255fac7b23d0b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","44f9901fb7a6f0c4c1b5cfcf33fa6c77"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","79844aab77a35675281a63a73648e95f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","d3aef0b54c77e731a42fffcca2969d89"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","2794f38490dda711ca571304a01f11c7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","76e3dde61619beb30bc246e9f7dda6d0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ea38e27988518577d0c8c220eec9c008"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","0c9d85a265719e5f02b4d5975836d1a8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","53a48ee90f6ced73f97d0356e6b91fa9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","ad25bfd2ad6f6c3de574a7b494bb952c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","06eacd337e6aad0c20ff24306a34681a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","c25137f1e5f57e2ae0158fb67242f793"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","576d32342788a4b58eb2a11f36d88aaa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","fdf9683d04011146bcc50183ee530ebf"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","e82e55f446cd93ba628fc2c4b5778dc8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","c85961892593de71eed548cf48dc2d58"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","ef4e91225ed996c4b7db4a82ae1d31be"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","238a4fc40fe12d7e73e53ffe68b722e6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","95ebbd73f84a0791b4b9edfe23dfec22"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","b87d9cb6a20be224cd895aaf415a221d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","d7e5955714c447872c745fec6e8a957f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","5695af7e693d3bc1497fd351438117af"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","b9ab871ff650ff1215eb01a658fa3547"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","7c52103e26f4f626605cfaf74525dfeb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","88eb16106d1cccdcd09e643d2a94bb2e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","91405626af9c49e5d67fc3d5b6c5aba6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","db399279a53e5d884b28ba0f1ff7191d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","a4248a5b753940cd3fd34f3d1c3d0c62"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","3108a1d26cbd1e0ccb28cfe8a7492864"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","ef11770c09cf2fe5a05bc1d7859bac60"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","44fc35989ae00f01c0816ddb2e007e1c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","8b4cdc7a7c24249817f8ae80b29346bd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/02/2019-07-02/index.html","ebce8e6b2cde6cb224c1141c53a47303"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/03/2019-07-03/index.html","3c12ae7ce5497ebabc3ed313284d7038"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/04/2019-07-04/index.html","e8976c6a9d988a8ba17eab328bc6daff"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/05/2019-07-05/index.html","265500ad6bda20c057857b00283ea5de"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/06/2019-07-06/index.html","c2eaa1f267ba5966bf66754794cc0a96"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/07/2019-07-07/index.html","58796ec918ceec0871c2171c8f29eaa1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/08/2019-07-08/index.html","8a018766370b9fb92fee2d2bf9cd6ccf"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","c5387c0885bb9118b0f3af24b5af1836"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","07442e810d7b4512b88707482a547f40"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","bdf8152cd48b7c424cccb72330c59806"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","f4e6c26d2ae5b923a4f636b04ed6c867"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","ef030e83251741db42990a6060e46049"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","b62aafd214930528c91e570c7fb1883a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","0e16b2c6be01afa158b9c32d07a95064"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","1d7bb8eb541d25d76691fc3b81218eae"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","6f4995149e245c42f1f57e5a68bc9393"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","7d4e4c88ec79e0c2cb6ce07d1576f4f5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","9d19dc6e57027a442e085cf970e09d78"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","b078c3e16da088add85b5281bbb09670"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","7a4e30a35c55e63de8501868abf449be"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","ccc565affd7eb58480a948e4ae76b9d3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","11dd50ba7d8dc5da5a03f048efaa4441"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","b1232450441ad7a69dc0021a33842e49"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","00b8a4767968fe2f932ba0f5d573ed4b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","a6414ff3adde7b7f9471f62984505a2a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","bf9febf953052d7030ea8986e7c9ae0c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","a9a4cdcd2a143b17c5a27fa4261e72d9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","2d700b81954665df8873eb71ef51e0d1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","3e61742be2d5aa69239e71e687435333"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","0f4048b93f2a3abc1c556ba5ee9c8ddc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","2140791050c53ee3fa45f5d955176fc6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","613efb9fada8766e838c8ec75a79a5c6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","9526c4238e42dd51371a5ce40f6d07aa"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","1785bbd5ad2571fdab89fe2c9f555092"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","c51d7a9d6c372805de321d35f0657b6f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","5ddfc790bb937a79971976343c1330a7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","1ff8c098d757d0a4f2734957b61673fc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/7/index.html","c98339d362de4512e571797c8fe86d70"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","95216ca42bbb614448f92c1111b43121"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","7217980a4a189ab5226cb4165965263b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","8e8b2475e2cbccd83d2fd92e6b0e98f5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","ca6e7a9d23f0c0b0c8122c2ed484ee46"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","e772a2d6d6e25365619b19527e778e6d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","437367406911b150fb659751c66f7186"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","19501584e2b051a4b6966331591a0ef5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","f2d72b488f691a86f39e0a1ff2b28052"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/9/index.html","57fd01dc903da603e61d4c2f4c30812d"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","3dd65b077aca708aeb9e7870bd1ede54"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","c5be9a485d3e08b8a0aed050a64dc0de"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","c6518277cbafd5f46434ad02dced9761"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","2c2b6283760de2fee822c41a3fe1948e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","f57c5a60679ca8b4202de15f9701ee20"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","346621bc46c7b1be7efe51dfec3cab46"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","4e9aede96b655a33599cc2ac77f237ab"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","2309ba3927a504127f94d56004131710"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","917d353b5cfd4927a2f0a50333e43dff"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","7bdf278a9dd0e935fe4043907afae504"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/4/index.html","83171b34d3f55fe84d7ec7abc88ff81d"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","c579c7a97fa0a94619b16cd3ee8b24cf"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","87638f2f7987e3459bf60ebde7833548"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","88981cc7f317d53ec1245a9df9a18b2e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","606c4dfb4df78f37958971a65d8b5e71"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","457389f1116f8aea3b37bc5bc5cf8896"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","836b4f12bd793aa90a1f9674c2d6a204"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","099ec7f702fb28646ba1af10f0680db5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","f71125c2ea670ce595ad880686a42b75"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","d2f602cd5e3c5b1e151d593689d3dc9a"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","d07e7123a4f6c38e68d80b5810f8025d"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","773d57aa71c2c523fee02db70b19df59"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","f000b449722d898ce50516f17940cbdc"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","c30d7b944b2065997271e0c010ebc848"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","75f5708c1636ecc66f45fcb9ad89ec96"],["C:/Users/10421/Documents/lmislm.github.io/public/page/9/index.html","f68f0b62e80b3bdadc67d44729750138"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","af612bf1f5d974c8756b77272626d152"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","2486457512f8209efab50454ae467a1d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","a1181671ce6c0a438f762277a2e45dc6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","bb1bd35f59611095dd27c934e54d4c7e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","8751a7518edfbab2ef3e7b4bcb6d995b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","0da0d0c9402e1fab33dde6c4f6c40355"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","217fb3a2fb965493ea7c658930056af5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","326ded3e78ea874f83452ac02c634a97"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","55a96ad17f3a360728618a691d49e301"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","007d08e306775c70cec847a076168ba3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","39cc8e8148fc16f80c1b0c05285b5fec"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","e982a36e4d326ec49c936de7e6264504"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","77b0acc2cde3c6f48529e7d438886382"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","f5a6d7157c27e88dd4d44ec79345d4f3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","b13958bc92d389d1a54e2667b933b5ef"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","f3d5b013671520f15f52d82c475befcf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/3/index.html","74447c7f2bffedd541cf0d26bc99b6c3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","4879bb01bad44c5dbb9df2f09033b8ed"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","1b4cc6222381ddd44776d4041446fa50"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","dc96d38111aab7b5d76d0299ce2a52b7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","7ad4774b583653a0e5f5905fb4b32043"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","b40a6c1b469671bfba339b308f825590"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","5a4068f8f25efb7ac0879fef65b5630b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","9e449b59f548c24ab0cb7ab0c270d74c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","69925543ff507f6c4925f419215ff3f7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","e31027fa0c83e0e115009de3d19f504a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","b8f34a450444a16e4d19bb6eb02f30d9"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







