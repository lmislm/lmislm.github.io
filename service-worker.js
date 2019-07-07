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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","d24e86bedde9a7e55dd9c2f3b5261d6d"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","721865c58833bff561ab995299d1f50f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","da9e700fcdd2fe452434fcb695ff7918"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","901825431e800d996f884ffee9f9c99e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","55583834c1ef47bfacb089a183029116"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","70712cebee981387cf1ea17b6dfd6534"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","44ca21b1cb7984b4ae8143534be6a47e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","0c2c0e8b5071ae5a15b48a9f88b7a528"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","2c00880fd1c414fd34ce1cdd58b3da15"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","3a4223000be97a393a802e71c4ea80fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","2b43b851db24e38e2457d80056f83b50"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a95d6baf852459d83a588a71a9925330"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","729384164ac38e02122543760795ff3f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","c02ef28aafd2c08fdab000975d65ba3b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","35283aefb3398a956e2b47a78f874826"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","4840c53debee96c03837992d1e05d832"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","440266fb83ec1bd7daea5765b1a1748e"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","2050f3235ea89069ab109163827027fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","b26c032dd65d4e26f015cb9681a9b665"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","f98abc8661e81fd60b6f1fe9fd355fd4"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","eef8c7a523d83dca1d332c79884e1a98"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","8eda70e3e20b1c14dd45f6a58e732854"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","cc3eb00d77fe68e7f1359742c7e583d5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","709e2d9242967d972847227c24a89855"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","b1f916e8da437d6ff604a1d3c8728dc6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","da7b0815cff5b0f049e921f9346d1d9d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","e84dd1fded05fc48040aafcab1896780"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","f78c556ad1d05253ac7fe0f0e0916e59"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","2ec1c4039402be6ac7e8784a355b799d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","1f146be8a9c7def6c5a00f7550ca9dec"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","f714a16982c9dd2f4925892cc0049e97"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","9f398b84826020b5c72485b195dbf9b4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","8f8d54c1d242cc4762f4ee2dc7b8b8fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","fc3a40e0c8cc40ac4870873201785926"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","4447f2bfbe125729a32839248b2c40cb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","9850086a041efb518704be40c450da0a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","64d386a8378e8891162a6763eaf7492d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","dd8b7289f3c14fce85563c751719b680"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","639beaafc28eb09c2e1ba9e90c57cb59"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","dc4a08cd8c23ae37cd7faceb1cab1c91"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","34b9b543eb0470616bb6299adb3ef9ad"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b5a7033f74e82cdaf7e2edf6f8198d38"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","aeccc54f1ebe309f3b5a89c483fdbfbe"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","8cb6ed8491c58e090895abb138aced66"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","b84de484deb2a08ff5b2d92ea887876e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","2a199b5da5f8d5f9f5ce2048f63455c4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","6ab611bd3e28aab97154872516f95bb1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","b69efb661128eeae96d10766f77820e3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","06ca820ee85133b1637c16b32fcfa123"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","a8f554f6629f3d38c4535820e1f85bdf"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","64eed325e0c7b2c48db716f1f3ab7f40"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","922377c30d71f6c018bb431fdc471508"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","1c55b1b77c3238dfb2f5c0d7c522dc6e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","4b0548ecece6d78522b062c48b0d519f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","1788d773b53bb82dda3168d82b3b84f6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","33cdef0fa76042c7954d499be6355d0d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","24c5f1338409ad2bb67e6bce3892f55d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","dfd1bb7f1097f57a4f36a11245b53bd9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","c90f58b0ff86625ab375c8c298914820"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","f3989f0dc3da1d66d427d1983eb76c80"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","c749a1c43ae4bab8731a16730d3fbfbd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","146110a86bea2b659e257c7c21b3013d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","81f460373f09f54993e1e27b88db904c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","e015e5211281aff81b7fb548446f19c4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","8543054d1b2dbfb92b0bd6cb4b88bf13"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","61a8ae49fde738d7dd39648afe36ab41"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","2f5cce024fe66747f46a3325deff034e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","87c2ec531321df2514f1686ec627393a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","1335a1127d53fdc4c001b0d2d6eb28fe"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","39968eb3fb5eb3ae406421b92f5bcfa9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","b1721aad99ac44e3dc174e2835ea2321"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","49ddcc4096baf75f2faa424d3a96c041"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","1d73fc35e6cecbfdc7f09526987bb744"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","de7d08b08263b62f224227ad71130e10"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","c48d9a76f8b13166beaafa9acde6dac3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","c06a921444c9af442bb1a6533be361ba"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","1194cf7fa90bf2454a0d3c80ecf67149"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","719666f7b1fd79bbae7426f0091f874e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","d1239c5a16896bb3314ab02a7eba235e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","fe6477c994d0491a89cc1fb933e999c5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/02/2019-07-02/index.html","e5bfa4c4ec4e9c6f943fa1e1143946c1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/03/2019-07-03/index.html","4d5b4df234bebc386403a7eac5c3f27a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/04/2019-07-04/index.html","cef363eb9cdeb606b0b1b8f817e8202c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/05/2019-07-05/index.html","89e36e5c3dd50b066b5c75d7eeae0929"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/06/2019-07-06/index.html","866dec3d6d2b3d072d8daed934a3934e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/07/2019-07-07/index.html","27f58794c5079e477ddf2141f4716520"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","237f9fe8c4ee3b6d26bd8febf6bef44b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","19940ef4bf114a2f298c8c15b76a3547"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","dd6ec7cc5810d0a2d33709a3b80d5fa0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","eededab929c4f7d9547c4fb0e405edcf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","61a39bcf2d9f26a58e5868bdc308afd0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","874b13fe7d9bb9e6cf65221e98b742cf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","96e9abfe4247b2a1bff4b8327b92e64d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","1f1331330db75e0b28716c9076015c6c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","f821eefd788ee1775ccd13972771a44f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","4cc9b2aec786f66ca79667f6f092a67d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","37f6720e12999ab74af96caf2bd30a90"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","2cc3cc82dd19d7718114b1ac76ba7718"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","031f4798f1de3512b3f94107d2f2b8fc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","bf92d865749d0ca281020efae5906116"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","3716b8ef1308746b511483cee440b396"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","729a10bc007b186d956d702aafeaf519"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","6bf1d0ebbda4ec2ec63cc016af9a884b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","12f90a38c4fa4ee8877b1d08c824e482"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","36066d250ca024f960d22e687a448ab9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","0a4eb3d768704db521e854689181b45e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","432e0a8193a2d16988ad288acd3c48f4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","146073ff266b413ed0a76501da992890"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","c850bbae9331a00feeed216c0a9828ca"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","6ce92b46dafbd6afccd9f0e78d670344"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","63c77cba2abb0335723ccba42ec25c24"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","a558bef621b32216a4ff2100f43159c6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","67d001b51e9d4ed2049d52f5c91ce71d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","b78e9117cf81c9cfc99dbf6deafe1957"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","70f89eb9cc192b3695ec555378aced5b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","dc55b26ed8942d8cea10b48de476ac58"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/7/index.html","3b90d1b5b25b48e7cfbc9c16eaee80e0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","7978453181ea39c3ebf20cabdc5fc15a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","b4e637c6d589c032bfceb8a17c3fe84f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","2108c033df3a0fa29d26e2d004736f66"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","64321af774b25f09b22336dd87cfcd3b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","80e40fb322476fb0da07af8d626c3cd7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","5286c0fd4f3afb133f8b730d19dd2956"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","83d227dd03b6566356d108edb5b877ef"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","275f6bb3713b1cd6e49eaad2f99b11d0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/9/index.html","a0f2bd037c654c4c75431420999f46cb"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","58318592c529b40c43b1a3aec8696ee9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","0974746eadeae4408c866158a79ad095"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","8de3310d4b0c5d7e56377893fca0a352"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","50b485b22ad60250ab4feb7afe25496f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","0a86855a42df41428000410f92bb094b"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","171fee648159a2549b0d304290b7148b"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","37e50a27eda2100aca7132c11270ce7f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","fb94311a6097a10768b22efc7906fbe0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","4eb33c376e4013bcfcf8e447a204aa76"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","4e752d5d31fcf334852facd6c0c23a38"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/4/index.html","33e8e0da1f83e861b8dd17b21c853eda"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","472e8a04970fa8bb158725a66b7271cf"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","6cfb0cda0d585602a06e77b8c214b413"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","a0e4eb1417a733484f35e7b9c4559246"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","3c5518c1aadd9ea51c2060ae559aec04"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","fb9c68df9d35cef500a77acc4a3ff61d"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","a98b333aac2c9b040164f5f5aa24c0c6"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","5434201edf51818f16e2b17580661aeb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","3b570ce876b76e1995356fce14d77009"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","715f4325106eda20937e20020b776f83"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","ac272b2777388ef17415355a594ba9fb"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","23d99a820566363027d0a38b96761a5c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","33ea414c2e437443c824fee12ac42e13"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","8be275b7a6a9efada21a634dba4eed35"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","e17954bf3e6d230142bd68b1541881c1"],["C:/Users/10421/Documents/lmislm.github.io/public/page/9/index.html","30c7f7cb2ce65ed71498318bf23e7ff9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","95668d7467c0ffcfe32d8ac08e0598ce"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","2f2e6ea0edcadfe2eb6cb3309afd4e7a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","235634252bbe3c63fa17b2c65884dc38"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","f09c12302475d59bcdba320a6e83d6e1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","2b0a757758e91ac32921a1295910b620"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","9e48bf988e3c803630e639abf03615fd"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","42007204a7e9317290148cba16ce3683"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","5e4e8c377317160f5e53713ed1d5a90c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","a14fdbf9cc0a41047685c6639b363a1b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/js/index.html","75fd7a304a60312d55bdb94c0bfbc267"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","b68de0be552003cabc1d9688e900adf7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","e06a8084e43cd1ac5fd26dc30fdce01c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","60b0f568ade03ff260609a8cb8dbecc6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","45d666a23cf016e07109ea1cd7cae502"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","c743398539878e07af4e00b092c0f6a4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","8dd035443240731fae38b1e0c471277d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/3/index.html","92f5e803a415831a4c93d6a2d4d7545d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","f921014ddc683fc5fc956ca91f378d04"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","f40a9374545788803123d476dcda3452"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","09ebbe04cb875fbfb80cacf056b9f2f6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","7fcf9a6cf832e2f120c8615aaba56a91"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","0d10672aa56737d7a1fb8c7696c4f3ef"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","9919e5bd426849fdff4eab6973492594"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","1394e6dc0bf0ae47ec8d2875f4e1c0e0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","eb39e37db3a38e12a1f8f90ccfb083a3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","5b85d9b0cf924547f965748cffc41a6c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","2fae726594d5cfeae3703c54b6671711"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







