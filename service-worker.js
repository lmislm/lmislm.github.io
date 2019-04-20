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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","321d38951918ac4444037a5aaf322f4c"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","3b735704cc040165897a062f2189079f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","85b7734cf23e70bed54d0603ffd58215"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","15e92e82fa8bb284b9a53b1883794f07"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","1406e7ea2d033a8d970cfac97841eb2f"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","e6ede9cc0a655a6fd472e9f69fce9851"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e275a459c68f57e27cdcce31be71a961"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","481d44646dba6ea7357a5c8911c5bfdf"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","b99b6b46e518c7ae13f05910ad94bd1c"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","ff683ed948ab696d46ca5871e0898895"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","3194109084c0d3e67e88b3c76fb1cf5d"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","8cfd7d07d5c67b47192c0a1cc1d2908b"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4a1438b8f622626c4f958204c4144729"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","f87a6ee43b3c3724afa6cdfbdb8c00b8"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","a493afa50b82ab747f64f07ded769f79"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","c9f2161589cfeebfc203a14b6107c326"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","a5c09048e4720c3a6bb6d777d8431eb5"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","d0ccb05ddc2e5b02dd631735331b3b3b"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","4c28cef371e4bf958046d038f6b8d431"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","d8aa40fd92c488cabf411a7a66e86137"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","0570e7f5847d8220b95f4da8ed291376"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","df1369463a23a557906f459b71b4f362"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","62c0d1b917401a90cc785af30f31556d"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","9f802301a26ea64b28386caeed784e41"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","44a8002c08fec415b891ff7c7c284f96"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d22be2200d4bf55dccc4775723024bd1"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","5618b1d7b97d2fd89252b7d0f911b7e1"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","632775f3aa7ed2f613770a07d6de2f37"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","cf927f7f310bb6c7668569be36326056"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","f757c62e6dd3faf97f50d9c82f0cbd4b"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","6a71bacc7cf03ed34e9c9e9b25b646d4"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","916e3b516bea2c9ffe723ef7b9845756"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","6bb9abca8c4dd1bc861827f9b03ad1f0"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","996e7f17bde8efdb8fa4f0489bb7daba"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","c73f9bf7deb19bcb2c530b235e781491"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","f6cd798ccaf61740c5fdf696f5a811eb"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","4edabc106e988b18186adb57e0d6aa60"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","40ba1a4d0a0e4ef4617a07c6a26f6dd8"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","16294963df484530ec968c691194d6a9"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","7c54444706306930692b7cf4577ae5ee"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","6d7b5fb69ed9a9e904c619f4fe41f38e"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","3d30662c691b0c1aeb006aa83f8bce3e"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","5386c37b939fd6751b359c7450dbb751"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","d5b5c78deba59cc8a48b38a223037f43"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","9207aed265043066b75433e2c92e2ff9"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","b03fb17c7596e0655d34bc80746f7e67"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","c68975f4606506481793cfb54d9d59aa"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","02ee752f4cf0149c9535c2e39a73fe1b"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","9520170546e94d82d5d843a609c3398d"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","bc63ca15af44d9d58204148ce5675e7e"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","7f0aff76fac945b3de561d009ed6731c"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","369434886d72de0a2966f9b80de30e4b"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","43b7c60fa41d474dbc428bacac7ed2ab"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","4a8ade75166e82ac761dc258155d4ea1"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","9135178420b8cb4766a2451b235ae3f4"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","72cfe408a84981acc92abcae051a9e40"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","54a97e2b00d0a877a71a8843982d8883"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","825c8c19b389136c4a7509c2f93c7191"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","612dbff9316e013266987840e7a099a1"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","44712dad401e92c0b55c010876564a6d"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","8c4f4a561f89a2b5071e6b6940d1df69"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","a5ec0e6857ef2c553c8e679c6a2c8f1a"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","4e9595b1bbe42a47a3d62fc07396ae90"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","3663dfe0263fdaaaa1c7a98684db297b"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","d957cca0c552b9dd0b2580cdbc274796"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","1a41a98a5a9eb83eee0ce66f84bc4e2d"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","ab63dbdc4fc26a6fe46d0a589423268f"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","77071353864a39ce33c9035a9d009ea7"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","8354cbe137733c91d67cdb7f805cbe5d"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","a35f99a6c45718f5d8b7a9c6fa8bd31b"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","7521b9a4f48e6b4775d05df1df66a932"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","fcb0fd87fb0fb78bc8eddc8eb3e73d4d"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","499e67917ae9dff97270ad47620428d2"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","b878af611e2bab3feedc837b86c2408f"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","759fdc3282d74dc2bde4165108c5eb77"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","85ff8d1e94424878786f9b52eecf8e69"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","33d7639f01f1364bf75b793ae2191d2c"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","e82a6f69ab91e0c4af5406b933256bfa"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","c236ff88c7caa1f3f32472c881bd1bb0"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","116351831ad9aa0faad43637f985f96b"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","e996fdb8d6444bba08632d43f239fdb0"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","468343294a982648d697d47b691cbdb9"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","5384735d1a3e55506068e8b2f758ff16"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","8e92bd7c18973667bb995f61ae622e29"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","58abcbad8fd49b69c7b06d6dfd8b0d56"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","3f6bab365ac20cc0438c101e51ac72ae"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","0e89fff00e6701528e34e4445870ff8c"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","2397273e81da49165693721a58c947a3"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","648de26b3e7736bd84023e7a838bb66a"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","250bdb53bfd7d4a4f787312efaef4f5f"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","1ba5b2a20825ca43e17575e6f011ca1c"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","58bdba934f65f640969075a82c1eb37e"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","87c1740b7c2ae8faf51745af34af25c7"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","21f4e68614ce7132ac2b83aceb512692"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","33322437eb67c51a1e335f70b3beb71d"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","db4727a2ae5ef1c97411ef78bc59f3ae"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","cc4d7f54ddc26a9f494049f92bdc9058"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","8162d6511b5db302bb871720f2204245"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","f52fc67c3e423cb635e8b3ec42d93f99"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","89db091394c230eb1dce914ceed2746b"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","78e5c6a6299f35636f4d1a059334baaa"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","746809cdb4171d3fab07eb077a244d86"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","976700fdb3a99d3928dfdb4e7c2e91c4"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","ca38152c36a4709c6606d8bbc23096f7"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","c74fac3ec8b78617cec0b4a327d18681"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","85275847384f3133903da6aa71771904"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","1ddfbc583465495917b52b6d6437c0e6"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","621dca4b5076ca4d5e245670f88a266a"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","13e7e5a13fd96f0affd913bedf79c76a"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","b3735ae608e3fb6ef3025695b39dd3da"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","c3e7c95c72c7b2f7151043f2de007a2d"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","4823794f419819434828b9ff799f9939"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","10aa6489f6dd261e0e469c64e37da9dc"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","753d4112264480e10a17b43b4ffe78b6"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","65cf48c345329389e4c84ec53b48fa8e"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","4cca4688e936322ebb48778b96609a0e"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","2ab9d17aba7c8f6597bba9d5ecb55ff5"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","1dc1a89ca54585148fd14e687b72d6e9"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","cc2f16107c8e8d93b9b218e0930ab6d5"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","e7fa6e905daa09c59c0c88fc90be7779"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","23ef38cde6c970cb674b0f43c3f3ce1c"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","e443bb160cda2452d56493712b433418"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","2aa6f6325a67e2022e1c5522dcfd43e5"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","73e14d0ebfb8309594f55306ab67a2cf"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","e89f9a94dd1e970b1cd77be6c03e1e8e"],["C:/lmislm.github.io/public/about/index.html","d03fdc6799a0dfcd51fef0b001837623"],["C:/lmislm.github.io/public/archives/2016/01/index.html","20960f5aa107fcce4455ab0a5439091e"],["C:/lmislm.github.io/public/archives/2016/03/index.html","69f1d5091872d6c9d102b0c66a651faf"],["C:/lmislm.github.io/public/archives/2016/index.html","5961238005fd65088d80da977f3501d3"],["C:/lmislm.github.io/public/archives/2017/01/index.html","ad852a91f9605e447afd20c97b3954fa"],["C:/lmislm.github.io/public/archives/2017/03/index.html","00d1e6224d09f8ddb3588dc2c08cf6e0"],["C:/lmislm.github.io/public/archives/2017/04/index.html","9edff35021e818bb81338c01a5a19f8a"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ed7aca941a9b85c8668c79ebfb39b19c"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b2ce49f4806013fbc530033985e2e565"],["C:/lmislm.github.io/public/archives/2017/index.html","a1245c66580d3107046be2e217f10237"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","be04828c4b233fe308a19b02f38edb7c"],["C:/lmislm.github.io/public/archives/2018/01/index.html","fd30d6973864c0ea0acc2e23a3d3341e"],["C:/lmislm.github.io/public/archives/2018/03/index.html","ca744b7c16f60bb6fad2317ba313a3ee"],["C:/lmislm.github.io/public/archives/2018/12/index.html","2d4c4e482229a75dd519e05968e6b543"],["C:/lmislm.github.io/public/archives/2018/index.html","9e054dd325ae6f62cee748360d9b775b"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a304ff10557961fcdaf802e27946cfb6"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","9c9c1afc2c075d6e1868c91904a453d9"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","87e162ebda5c31812768b08beba96120"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","1e189ff69f890f5572b116ddef138b83"],["C:/lmislm.github.io/public/archives/2019/02/index.html","7336d8ed9a801571dacacbcc0fb056ab"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","92de989f1df3cd2696dce724bfa37fb5"],["C:/lmislm.github.io/public/archives/2019/03/index.html","702f67a438ea688063eb1d2d49bdeb48"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","152e0e07b864cb2248d9310d18c3236e"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","a40225e0654fa8a027ab57f0409ff221"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","db412fde21e0555aa908b54afb0e939f"],["C:/lmislm.github.io/public/archives/2019/04/index.html","35cde2dce7f21c9b2c17cde52f014dc2"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","b9977bc7d7229c31964408469b8c3e30"],["C:/lmislm.github.io/public/archives/2019/index.html","af32750d2063bf4559f10d3754cc040a"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","03701f4adf7c00501b6b380a5e8d2e0f"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","218e0988ef52cb18dfda90e1a96d5a81"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","db106846e53aec55c42767dfc42d1896"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","1e691c0dc315a5ca0bcffbe559902399"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","4c4b887ff114b73d090d81faf6851703"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","55da5dd6255c600057f27793afa0d3eb"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","db6f6a0414b2d0d44d7dd6427229bac8"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","3294abf2ecee318991ee3a2afdf3de04"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","f15e9e06986a19d9eb7fd2cb1fa787bf"],["C:/lmislm.github.io/public/archives/index.html","cc29eb549b017089f820ff412af34493"],["C:/lmislm.github.io/public/archives/page/10/index.html","ccf854304eafe1a72bdbc9af4924b0d9"],["C:/lmislm.github.io/public/archives/page/11/index.html","ecb06ea5d5ef7046e8a346693c02e423"],["C:/lmislm.github.io/public/archives/page/12/index.html","c9a76b7da34fcabf9b2be9c20b57ff61"],["C:/lmislm.github.io/public/archives/page/13/index.html","f26a72360b8e318f6f93bb7f9aa3cceb"],["C:/lmislm.github.io/public/archives/page/2/index.html","6736a1367867a24608f9771e882b85ef"],["C:/lmislm.github.io/public/archives/page/3/index.html","d231dd42d10c4f81f78331ab19c3d351"],["C:/lmislm.github.io/public/archives/page/4/index.html","e869fb7cc63115a3d83e75a0d7a677fa"],["C:/lmislm.github.io/public/archives/page/5/index.html","873bd1d32a9853ed39e84401c0fee581"],["C:/lmislm.github.io/public/archives/page/6/index.html","b4892b9a12db5238742b2f0db3d2b198"],["C:/lmislm.github.io/public/archives/page/7/index.html","b623420cb0b2a7e5e6ab27874f1354bb"],["C:/lmislm.github.io/public/archives/page/8/index.html","090308d6d5fa0b0d749f565beec5bb02"],["C:/lmislm.github.io/public/archives/page/9/index.html","4e9fcbfa3a5a20d2c76c244f98db35ad"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","e772335fa8110700d29b2b6497de4a0a"],["C:/lmislm.github.io/public/categories/index.html","4da8372087d7b7f2bf7964050bb8166c"],["C:/lmislm.github.io/public/categories/xx/index.html","a4003dc3468288ab12034f4ed7bd5820"],["C:/lmislm.github.io/public/categories/学习/index.html","5d2be85777cc4071b05ce941399cf2fe"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","dae40cefa44e71b32241a478682e309a"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","97141c8b0306ec0e3f7823d403a4ee1d"],["C:/lmislm.github.io/public/categories/工作/index.html","ff926d4c7b841ee758da8358f1fe8a35"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","57f9ff5f99997d52f7d028e2e7faa98e"],["C:/lmislm.github.io/public/categories/技术/index.html","be3e6277f940dc90df3afa591cf30474"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","50fccd8c42883c3a361906280cc2a433"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","1e4d3818c149311a8510c472af0b70e2"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","3118c19522a6f1a0ab5db807fe14e97b"],["C:/lmislm.github.io/public/categories/日常操作/index.html","b9aedf842241d7832c7745a4ea611e7d"],["C:/lmislm.github.io/public/categories/生活/index.html","b9b931f99cb86558f897db952d5427ec"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","d777a9f90028bbc7609befc285be96a8"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","7915286eaf9164d25a6a90719d451946"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","db909e6f80c57c5ad09ed63a99299d5f"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","77b539c852a005893f34360e7bbcc741"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","28f0ab8e9d2e5440980bd2c64eca9552"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","5f2af437472cf8932093e239de0f5296"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","a737e2c7f68f787d63d024aef846a5b9"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","6333f1d1d70226697e357a88ef4f07a0"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ec8a385caee5d854b156800e036ee7bd"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","e3eef9aed9b4c5b8acb5a59dcad03793"],["C:/lmislm.github.io/public/page/11/index.html","80ff40465b5ad38c2d70f5f4f0f5c3ba"],["C:/lmislm.github.io/public/page/12/index.html","8c4473f4e71e74a8bf594e182cd5ea2a"],["C:/lmislm.github.io/public/page/13/index.html","08911bd8f69f628a9982ca330b29f366"],["C:/lmislm.github.io/public/page/2/index.html","c573515772afa6534a7f35ca666140ad"],["C:/lmislm.github.io/public/page/3/index.html","3c29aef9f682d7fbcffd6b5f5d019a4c"],["C:/lmislm.github.io/public/page/4/index.html","4657deb191570ecc6c8d1e981b3bc7d8"],["C:/lmislm.github.io/public/page/5/index.html","f7da3c1a668aa4aac42e1a582ecae1f5"],["C:/lmislm.github.io/public/page/6/index.html","0e427825d1dcfe136a278dac4e5c8f02"],["C:/lmislm.github.io/public/page/7/index.html","066167f978b113880c33f1c4bc028ca6"],["C:/lmislm.github.io/public/page/8/index.html","e3e7c42da2acb48b2284e1f4d2c16bc1"],["C:/lmislm.github.io/public/page/9/index.html","38cec8bec645dd589b825fb5754a648c"],["C:/lmislm.github.io/public/tags/Interview/index.html","1c48f3d36f0eee0985f67d434e645e4e"],["C:/lmislm.github.io/public/tags/JS/index.html","e1767c75693edef72dc931f8ee110ea2"],["C:/lmislm.github.io/public/tags/acm/index.html","c3161dfe6edef23aca3aaa854b2de5fe"],["C:/lmislm.github.io/public/tags/c/index.html","f5ef0b6aff3fb5bdc0a2d8d252ac711c"],["C:/lmislm.github.io/public/tags/codewars/index.html","2a0df42bf0b0cbbf7377e91d8f7029bb"],["C:/lmislm.github.io/public/tags/css/index.html","ed6a4b55b948af50d2e6ca288000af6f"],["C:/lmislm.github.io/public/tags/git/index.html","e3cae1afc6adc7896b1d8f61af25953d"],["C:/lmislm.github.io/public/tags/hexo/index.html","7ecf90ca8bcca6627acfd63554fc1979"],["C:/lmislm.github.io/public/tags/index.html","604735bac873cb4addb80d4caf195ea5"],["C:/lmislm.github.io/public/tags/markdown/index.html","97ceca73dd29315ecba6cef1785f9dc3"],["C:/lmislm.github.io/public/tags/poj/index.html","e2889e8e0d35429fc4282dd9720fbbf2"],["C:/lmislm.github.io/public/tags/shell/index.html","761424caf885a383539ca083265625fa"],["C:/lmislm.github.io/public/tags/vue/index.html","c63d2c918e2a384a352fbb12285bfa74"],["C:/lmislm.github.io/public/tags/xx/index.html","a9988056d40a650edcfba6580cfb9507"],["C:/lmislm.github.io/public/tags/前端/index.html","b3c1793ebe2fbcc16479e04b6da6f047"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","e2a2ce18a78ae98d5987eb09224e0b3f"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","6bd1c6156b534dd551ce96c3164fa3a3"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","cf2034df7c6f7d709a3ff140a73ebe34"],["C:/lmislm.github.io/public/tags/小技巧/index.html","17275ccee59b1b62ff3666069c7c102b"],["C:/lmislm.github.io/public/tags/展示/index.html","fcc71d5ba698772296f5c2b59843b4d9"],["C:/lmislm.github.io/public/tags/工具/index.html","cf4ae1e178112e8adbdbc83d88a3f44f"],["C:/lmislm.github.io/public/tags/感悟/index.html","d888f720094442238cb4ad2c60be5c5b"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","a72596b38874dc762ad0e641c5591c1f"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","cba01f49fbb71d50a39fef68a44f0684"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","1d97f43174bbc57fcdf37bd5f8a6ea6b"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","9af82e759203c7e105fbb7e5553f60d5"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","a87d9109cd3c9dc4b11c8040d0e9c8de"],["C:/lmislm.github.io/public/tags/练习/index.html","7eec0f90b028de8d04540806b1ac160f"],["C:/lmislm.github.io/public/tags/编程/index.html","37b40a4b6d927ed9de48a349b45f2761"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","ce7db3e06820726e886f8c00037c9bb2"],["C:/lmislm.github.io/public/tags/运维/index.html","7248d6cd960c02075047eb688e14bd5c"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







