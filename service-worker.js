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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","c0994eab14a7f660084b8abd2cf54757"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","91f8a152b40f71fb25085526b389ef56"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","58bafcdc7ea90a1f0d450c92f64c488a"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","70e4a12cdb2db53318d923dba8dcb70a"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","14b6e723c5c766325713eb2e8ea9fbee"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","1f6322d86abac823a7f1411b09303a3f"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","15b08a546fb8449775f61bfcd1e7231d"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","081f21f4ef86a43f928a2e19e88b3205"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","92278c2c48d31ab12d37d4345e301c67"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f7fbf3b632889128326d5bdf62e218cf"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","566fdba7592b69f8b002112f90a2304e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","3d90aca95150189d27f495cb3d715b83"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","da3c527e71d7424907c2bbc1848ef753"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8728e58e56419592a53100814c505209"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","108acc8e75c666a69d5cb20a3b13c2b0"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","496e6b50bcb75b5a93c5a1dbb356b042"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","80903d64f266134b605e86f2d46a37b4"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","8485de2094157d341b723d3dbced9972"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","499dda1dc88cde7c47eb54d2fa80012d"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","8fe74bb78a7401a29c6512531977e75f"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","8433b4b7b7034b0f125bd8a5c74e808e"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","ec93b8a21a357cb07e5524216ea0251c"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","fdf6a3b48dc405406796de646f353377"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","2d9031f2ebc925db3340f7370ae994fc"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","9a1b6af27cd93b816ecd3de0e6f247a5"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","b26d851525e5b6a8a8dd2ee79fe338aa"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","8ed95b3989d8ec1f36bbdb980d753ead"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","fdb183e5f01617cc43edaa52b377c0c8"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","7da00baf2566e36f0148c4b90b31bf39"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","0feb839c8f847103642650d726c61a48"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","8cc66483b95d2806b2587a4575fc8336"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","93a18bed1886df00de0af5abcf37d9aa"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","ff2c4ec7baa173d05acaf81165538e60"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","79d8052b1178e77e6929122d2954475d"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","b54ee67ed63386252144762f125c40f8"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","63b6c444bc6e18b05b081f3be21dbcc5"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","c1a73b3c242a385922c5455647184a05"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","07e5ba3a9f17c517de231a6c7bb2125e"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","e9781cde49d7e79fc8e4bd24a7d17677"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","86f271bf840adbd8bd8a374f54683496"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","8b3d9de56cc97ea8931d87a26d914100"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","39472236d09d83be05ec2b3288cd96ee"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e568f300bc70b5a1b28a571267171264"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","2a9831e19d8a7d538aaf2593973536c6"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","afb4194e911c3ad004ff316e07312897"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","3407aac0d7fdf7e82d13bbfbeab849e5"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","68106154e8936cb07d74699ebf832421"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","8097aef718c0cae0edd4050a45954525"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","b9679c6f56fa5bbfd7401de4568e6f40"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","9299f0da1ecea928f849ac537d77a424"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","b156eb9f02285f972bd4ca26008a643a"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","b539581edded9b2ce4382add3007929b"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","4851466cb9b699f3c986fb5189dfd091"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","a45911f52d5382d0ce0c6790e087f7d0"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","eca1cbc025a5761bb2e9ec2f1993d70e"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","9e953a00b4946917e811c5e43c410126"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","d35ce8726a176d36d7d6636e792572d6"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","d7f05ab222096bc426fd898d4cc9fad2"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","29a4a174028684b18b976c9e3b79f2a5"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","d661595ab5a57ac8096be7c6cff24b4f"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","c31c4a79930973550ce7c1b9422cb350"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","addab1cc08d38ba58e6fdb6c351d62b1"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","aab8a86ce4b75bd914b4c3efdbb278f1"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","62718d5f892cc9dae0a7be8eb73f5e09"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","b08bb1e8449eefcaa7d76d9e28bae88d"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","52fb5707388d0034b948111b33c168b9"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","b78d451c4a3c0aa4c21853ae0c600b1a"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","6ee4634049eecad3c4499172a410afed"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","899d5de15f1094efbeb07f6e9b9f0a14"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","d66b8dedfc62c8ecc24a819e7d664304"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","e86873aca5c36acc532d2733f361dd30"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","9499d35c7f411a7b83858b089fc0cd65"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","14b6c8c078dc302d10e014b319efbbfd"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","86c25ba3e10342802a9182dd4a19569b"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","0e7f4f9a675eecc58c918fe575f118a1"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","f8d3b1e22a3e6035cd7dd7dba0dae1ab"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","db2ae0115abe690a65a71f65fcaf2e17"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","c274a8a1321b1b464032ce5ea1e8a3a3"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","428e745d5233916469a866eed24d3c2c"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","8168b8098cc1c387a84e3c401e5f8a25"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","5ad4b1583b281270bed7290304897e7e"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","4c91a220fa1e6d33e3e2dbf8bf761643"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","1d1e8be844e526060ac520f698abe104"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","36e12ac79b676225015407fd78ab1a06"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","f300328b5424f5e20155c9f6a7224aa5"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","0b1df17e8e92943294c72ad1ab21d507"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","f16b669870d6c51b9bcf7a5cd2a25ab3"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","e15807cc592860119b2cb8ece497d98e"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","0f116145e622b7b47c3c4c04d193ccbc"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","8c59fd97e3b24001e73415243fb08318"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","8b68f62b0335e153039a6150f0b9d5cb"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","3b68a4ac6c9e04f1c6f9e668968fee72"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","2f7d4bffd6754c01f5a8105f215eb7bb"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","391986247a86b0e2ee7cee12a881bfae"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","c3d5ee173aeac3f1597d60b1a89daeb8"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","dc9d1875ec4f3346c87f007abad8f1c3"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","c967853e13e9788f9c2c0e5f1709de18"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","ab38230f4cb935f9acc87e8242462aa1"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","a270be8d71352df9fa7b4c1b383dd674"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","3a6149813be8b223df2729847b6411d5"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","9a7eb2702a34693a06b45b4de42e197a"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","9a0d4594b48b30f39f8c7a1e027a6e93"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","81d002984380a53b7ce41c9745dba49c"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","06c5f8cd192bf0f5a51f719ab4d9c8a7"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","1a186038a25895e3f1b3f74cb5a7147d"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","cc4445c61a29e1a2b4c4bfa0188aea0a"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","d1bea51f23c08a9deba4f9a2d47ab65c"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","1b3d22f10332ecf0c29fedeee799568b"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","57822903789589865cfb7767d62c1e30"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","52645bf89f54957da22fe00897f0e26e"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","236e60c4672f3870a1f81e349d44fc1f"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","968c22427b6c85cb3e220ed1bcb87e8d"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","13a2c2cec34ac2652463857114eed36e"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","d740395887a3db661f8a13daded11cf4"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","1e5ef329278938cbc3cffde23b1c477b"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","d08864be812c726646bfe824dcec8505"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","4c6d64102bad35762fe9a3c5301d198b"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","d19fa59a2562a1bc9a23a4f4b5de494e"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","5bff7f0c674c26e9e164cdfba00e2566"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","6e93ef17b152e766b130382de88ca30e"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","a57a07eb1c0366284d634088f62f3bbf"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","a131a70cd4217f9e1ecfe7cc68a25623"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","f242e79aa355c06b9759669bf0adfc73"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","e941f1a558b2a14d88ec5364f11cf4cd"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","225570036144b2acdfd26d4cc60ebbb2"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","73f328edbdae98dd23b2d35a07bfbf03"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","d4fbc9bd380849ecbfd5f36f86e38976"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","3d655ebba411299d64ca977bda82af8d"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","9324f773bb1b4276d97e6040c0e82ab2"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","a331502ace59570091760079f92a7a03"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","0da6ec5659ebc09d9547d3ef60ac1403"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","76cc6b6a41fa46b069f3a4c7869f4659"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","252c9513ae331cf441aa4a6637f76f85"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","9828cb01126a02589de7b1f6d64c6c26"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","8800b04f0ea7f60c9bf6a64a8b766551"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","31986ca8bd0c08ae397766b6ebfd7890"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","3d635a9a84238f4d7187e6925551769b"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","41cd815e9db55a14dc927edc8cec34b6"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","0a109bfa272060b0bffd6d512910b37b"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","5855916a6bc2d72db93cd769d2c7cd4b"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","63adabb540af07ef75a0d0aa87db85be"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","c630a7d997dedc60d871b870d6f80ba0"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","d4ebf057c1dee8fc75d803f430f992e9"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","c526c262b961e2578f5f8b4683681f89"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","26ff9f951a39f61d88ec612b23753a2d"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","4c6f53811dc2554dcfd5ac47eaa7edb5"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","2dce8569dfc423fca4636e3062b117d2"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","df4d856cf6ef21f1f470bb4e1c6e1bb6"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","dc3f68950b9f0c8b532f1f844891b046"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","5a96b5472e5193b6aba9c207926bfaae"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","e846c5deed9bf4bc32d9b88c94291575"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","c28126e5382a819e9c156ec255638fd0"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","a210ba3b412b149249791c2aecba66e6"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","8271f6c33a7fbbbf81e921042894839d"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","2f490d1e54700c3a2c7b4ffc4e25b148"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","9d3ba30464a4e81cec0c06b0c09c89a0"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","1665851213681db5abfd02337a152e41"],["C:/lmislm.github.io/public/about/index.html","775cdbadd6c40bacf0875eda751793bb"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c2bbbd112cc33cd0f7799f604f1b7086"],["C:/lmislm.github.io/public/archives/2016/03/index.html","45866a61d205de32c4d37838ac8e2c32"],["C:/lmislm.github.io/public/archives/2016/index.html","32524d2b3c177b4dcff213b1b2b6b63b"],["C:/lmislm.github.io/public/archives/2017/01/index.html","dfef7c36806165d6b164256883f8f1b8"],["C:/lmislm.github.io/public/archives/2017/03/index.html","38890df3a220b909a1a1f31b1204db92"],["C:/lmislm.github.io/public/archives/2017/04/index.html","aa8aea374c89ab2fbb793d1c22066f95"],["C:/lmislm.github.io/public/archives/2017/05/index.html","8ad7f41a506cf5bb033c5b9c0e19a7bb"],["C:/lmislm.github.io/public/archives/2017/07/index.html","65e9f97897c99148395d5bb4314d3185"],["C:/lmislm.github.io/public/archives/2017/index.html","a1a936d8b10deadc4c4e6cd0947f10fb"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","896989794aac37817f5d962e207e1e85"],["C:/lmislm.github.io/public/archives/2018/01/index.html","b7b96cab8fa683e0d5cb5190023ad69b"],["C:/lmislm.github.io/public/archives/2018/03/index.html","943268656aacfd5df29444ac6c0e9322"],["C:/lmislm.github.io/public/archives/2018/12/index.html","ba402f152d85d5f902e17d51bdc5653b"],["C:/lmislm.github.io/public/archives/2018/index.html","fe892365fbc5288af3f39d826d002664"],["C:/lmislm.github.io/public/archives/2019/01/index.html","c063748a95682cf82f7810c1ce8101b6"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","14a9c6d09ddd74b9915a173e5918ab78"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","dbdfe3a6f7743ac56ede98fefb5f4c54"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","c8f3ffb8522dc6882bbfc7e357728a2b"],["C:/lmislm.github.io/public/archives/2019/02/index.html","44fc38c9b2b75ed8308a036231eaccab"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","2f63c92cdb936275c788cc06d67bee38"],["C:/lmislm.github.io/public/archives/2019/03/index.html","cab1f71ea8442e3e74de147d67d58a56"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","053fd6e46889646c1e428394d4147479"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","51ab91421d9ec7392a646984ca65be68"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","bd105fe5c5031103fbbbf55a664af0f7"],["C:/lmislm.github.io/public/archives/2019/04/index.html","ca004a5ba7cdc314a657f59118619d73"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","1d04e046234d2a9ecf70b2b18f39f197"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","d634250ec64e54546d9c814f2c98b268"],["C:/lmislm.github.io/public/archives/2019/05/index.html","5c1d6321fa50aea0c2896ad1137f3c61"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","d554d21a871bb5c05ba1dd38e98c4403"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","91c2d2f4f64234d8e88f7c6c3fd6a367"],["C:/lmislm.github.io/public/archives/2019/index.html","040701c713e8cddc5c8173845a82f4af"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","f467ff729285f24d8d13bbebfc85215d"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","bcea0ead3cb3202e6a5f59ce457fc691"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","146a3b73b731b927fde35e60825819a9"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","5b04cfc7b1d77c860426861a23942d26"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","375cc7d418ffe06969120036f1a68f71"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","0df4de4e8ecaa4121e7dee04d41e6e83"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","7f9f7abf27382b9fb2d184143dd94c82"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","1e00d90f4040c45ddef3d2ad0b69c7f1"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","caabc58bb3f82330b9f08bf41a1989a8"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","d7a13a4971d85e9a6da9b0ce66b15bd8"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","207a1ba01efe6434e7cf364a6d69372e"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","4e469c867ab80ed6f3e46ee4c34c27de"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","690f976cd4a6f7fe2ffdb9521afa298d"],["C:/lmislm.github.io/public/archives/index.html","7e77795cf0c992230673911fb1783fdb"],["C:/lmislm.github.io/public/archives/page/10/index.html","196d0ad547f2146651c3f4e74fdf18f7"],["C:/lmislm.github.io/public/archives/page/11/index.html","4ec4b121197357540d6e218571d9b8ae"],["C:/lmislm.github.io/public/archives/page/12/index.html","6764c6b01c4dc18f152208d68507b0ef"],["C:/lmislm.github.io/public/archives/page/13/index.html","05467f754169c211b8b746e41e8f537c"],["C:/lmislm.github.io/public/archives/page/14/index.html","aad22a51abc362466fae69be6a688990"],["C:/lmislm.github.io/public/archives/page/15/index.html","6557cb1dff391919f77087a33bccc80c"],["C:/lmislm.github.io/public/archives/page/16/index.html","92e2d14e2c50428986539bd9162e92ae"],["C:/lmislm.github.io/public/archives/page/2/index.html","7f8fc52e96cc02982bde5a262604d818"],["C:/lmislm.github.io/public/archives/page/3/index.html","03919f7a3d073424d47b184c0ab5d7b1"],["C:/lmislm.github.io/public/archives/page/4/index.html","a16d39d60a7a0a10ad8565d34eeef9a5"],["C:/lmislm.github.io/public/archives/page/5/index.html","9bc4815d8be1be0fe6845e5818745be7"],["C:/lmislm.github.io/public/archives/page/6/index.html","3c947a005da73dd5dbdb9c3278c09c3c"],["C:/lmislm.github.io/public/archives/page/7/index.html","c00d6c349f1329a595dd0c99c62d83d7"],["C:/lmislm.github.io/public/archives/page/8/index.html","dd9c93e5eb1ed4067d362bf1fd585ac6"],["C:/lmislm.github.io/public/archives/page/9/index.html","244239bde509667d228eabdbef021153"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","c8cae2c78fa19e7e5e2b118b2059e9e9"],["C:/lmislm.github.io/public/categories/index.html","03d55c387c66431c4a171a2f5a918eaf"],["C:/lmislm.github.io/public/categories/xx/index.html","9638782837d1fe9779211c0fd59d7c90"],["C:/lmislm.github.io/public/categories/学习/index.html","19c4169067c94c75e2de60447dcbf982"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","b7a94b83c19451988166f2e746da00ae"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","fe95ffa7abf39f8826fb7c28132e2d02"],["C:/lmislm.github.io/public/categories/工作/index.html","ec1ccd0d8ef68af17bc920b891bbe0d0"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","a2694c62a274d08f9ff2216a928dc347"],["C:/lmislm.github.io/public/categories/技术/index.html","f438eecd9ea8a14b0c95ea0010e18ed6"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","8e8b8a2e38bbc455b4dd563449977e21"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","647a60e9927aef857bc938064a816cc1"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","c60e3641aafa7832ce1c9bafe80f81a3"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","e11d5b9dbaac8967e51617dc707b93ba"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","6efa10e2e83f5ca1e880640ebdf92682"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","60b593f8ad2465b31312382e9f6403c4"],["C:/lmislm.github.io/public/categories/日常操作/index.html","7690b89a81d43db26c68f6ff72963f5d"],["C:/lmislm.github.io/public/categories/生活/index.html","b5d518c90093a89d00742b7a9c080efd"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","43a68ca8deb8b8e5823a81716e61a39c"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","0f48944c672adf529cb7d935978a16b3"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","3ba6c45c4170d4af271c41a77263f362"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","ebef2deaee4ba638cfa08c746192f24c"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","5b2f534b421e2a1cad8a2f4b60aad1be"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","a64a12e7002a11a90caa4bf5edc274b5"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","1f916db39dfb5a640b512543c039196e"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","b1f079de81a1c9af9104e4508b2bfb0c"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","edaeef77c15e73ecef8e42a2f5f28b30"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","fcc4beccb2697b1ce59f6fe37a039fdc"],["C:/lmislm.github.io/public/page/11/index.html","0e0ebee03d6e48fedb19f7f1676f68d3"],["C:/lmislm.github.io/public/page/12/index.html","2bb8f8ac55b34889faeb2aacfdb42428"],["C:/lmislm.github.io/public/page/13/index.html","b11f078f057c2435697a9b99cbab3944"],["C:/lmislm.github.io/public/page/14/index.html","66008aff611b356e983d4afcf4300117"],["C:/lmislm.github.io/public/page/15/index.html","05c52772b0d72f76a50ee01905ec2f9e"],["C:/lmislm.github.io/public/page/16/index.html","3443f97a1f0acfd9b5ac402f72a4dd48"],["C:/lmislm.github.io/public/page/2/index.html","a1d109fc784848623ad57d4df491a2b2"],["C:/lmislm.github.io/public/page/3/index.html","df7270749a6fdfac77c7284b66235996"],["C:/lmislm.github.io/public/page/4/index.html","5f0ba935cb4543ee4563ffd53db75e1c"],["C:/lmislm.github.io/public/page/5/index.html","81359d5004282cffb8f49303789bfdbd"],["C:/lmislm.github.io/public/page/6/index.html","f3046a65ccb9b39d6e9aecab03dd1084"],["C:/lmislm.github.io/public/page/7/index.html","ee7e75358064ad04b222cd7f18267ddd"],["C:/lmislm.github.io/public/page/8/index.html","f394e6e81e9fc27e5037525afe55e5c7"],["C:/lmislm.github.io/public/page/9/index.html","1e8ff196bff274e70fdaaf87026da5ab"],["C:/lmislm.github.io/public/tags/Interview/index.html","66496f8aecb506a2a8673d67693bf248"],["C:/lmislm.github.io/public/tags/JS/index.html","721fbde540a1657be52e2b41aa1b2a5d"],["C:/lmislm.github.io/public/tags/acm/index.html","ce1e0a777210c48c1d6222b3373f94ae"],["C:/lmislm.github.io/public/tags/c/index.html","cf2b1a2f39a322cfca53d1b697480c34"],["C:/lmislm.github.io/public/tags/codewars/index.html","c3c138b3c5aa3fc418631c3ebf14e7c6"],["C:/lmislm.github.io/public/tags/css/index.html","6bc1053c3f2c7357938c56a67fcf3ffe"],["C:/lmislm.github.io/public/tags/git/index.html","2f9a23a32f867aa3ce3aa85cfb8deed2"],["C:/lmislm.github.io/public/tags/hexo/index.html","829f3bc35600986d2f780dae638502d9"],["C:/lmislm.github.io/public/tags/index.html","b27e168dca708343e673d92195e857ce"],["C:/lmislm.github.io/public/tags/markdown/index.html","72849204d2e3b4aab22b0e66082d9b52"],["C:/lmislm.github.io/public/tags/poj/index.html","e47383f045273c0ae0ba4d4d890ea8e7"],["C:/lmislm.github.io/public/tags/shell/index.html","df7aa169577e141d5ea56d33dc229885"],["C:/lmislm.github.io/public/tags/vue/index.html","1b11a9c39bdd2fa1181262f6b3460b99"],["C:/lmislm.github.io/public/tags/xx/index.html","df36254094900468e6a9ba18c758ab61"],["C:/lmislm.github.io/public/tags/前端/index.html","994f896f0ce9b94b2457144dd59eb62f"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","25c3fd7fa660d8aa9f89b63680826373"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","73bc1ba826ba915bbe9099d62ad4bb86"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","78709d87505e8be8cee4dffbf358a9f3"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","2145408040ae34bf21b01bdde8a4aced"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","08f248af8f42f1ad46bdb380cd8b5a39"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","3c56aa2c737cbfe7d4dc1e8d26c3b8f6"],["C:/lmislm.github.io/public/tags/小技巧/index.html","c1c1c343e3ad1bcb91b79137f74eacb6"],["C:/lmislm.github.io/public/tags/展示/index.html","7c9b8a5673074c60b225733bdea1d543"],["C:/lmislm.github.io/public/tags/工具/index.html","6c3aae1b2da1b887cb0b36aa29cfa309"],["C:/lmislm.github.io/public/tags/感悟/index.html","920f79aae04a30a7f766f340556a0dd4"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","e337ca264f7902f93dbe77d473d2d1d6"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","1f887e391fc35e7a468ccccdea434833"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","44fa659fe84f0c1231cdc260630f850b"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","2950b8d127eb75fea38834a9ed8e77e4"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","4c7767b52a8a46ddc6333f28cc09c659"],["C:/lmislm.github.io/public/tags/练习/index.html","aa1a7bcad58fbb0e7fb11f93e9c0d385"],["C:/lmislm.github.io/public/tags/编程/index.html","18c06f22e5a92762737aaa87c2fa3279"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","cb7c2039d23fca159c6c84959f52d964"],["C:/lmislm.github.io/public/tags/运维/index.html","3c3b4266b02cf1b2e2f48b22c0a4cb21"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







