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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","8dfc4c39fdc9c417d56d0d2591fca09d"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","46388ddf8c11077c556b60c8a8b328fc"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","79d7f7ae2b76866bccd7189f895a239a"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","121324734b1e605613d78e0e75a73755"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","bc6a02d5cd733dc96d8cd256cec899ee"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","dd07d8cefe2879ac5876c5f4bba1d44e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","2b635c5c9e66446782f7d9e49f6eb29d"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","890a450945309c667de632b9f413e987"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","f0610580d5c5ec1ff68e9137f9055f75"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","896cc0f28aa5d3bd8ebedf05dc94fc8a"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","73cd8c89f90c8c4cd2e831060d2c08b3"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","e25f8244714bf00e42af74981e24930b"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","2229d76e8ba4dc4759529ed45dedd021"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8aa9d6b5ff9ed49ec94148fabe36e9f3"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2c78cc3fcb3a334294b44b8fe687c2ed"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","d17d717d18f98147010ecc6ebcdcb06d"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","915b040bc2083b6e78b84de77b32b7f8"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","464460fe56b6e080c9bb3b8a45a5b704"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","75878f1bbbe5b35bf4a2b3d32d57e6ca"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","8a9d9e594b55dc67bc1fc5ba15223555"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","ed08a15628fa8532dc11fd889aa6a8be"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","931fbb61360025652ff99e06f6092b46"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","116f5614fc4c8f0e1a9e084a97b7f30d"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","ba0deb5f433970cd25423a0812338c72"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","bb79f0a964b85438c7f359285cedd2df"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","cc2f2ed6934cc72c52b196598f67842c"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d3744bded59f4d21a93a0ddb67fd0316"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","60f47691b473e5ae18a6d47cf5bce0fd"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c49bed920f1da9f9ea80afb121be224e"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","1dde76f775cb3124027517fc44111de3"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","ef16cf82c3c61e8e56c6e70f1a8a038b"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","e83272b656f57c8e887b1ef3ddb4f682"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","26a1d7e1cc1817bf614afedec8a1c866"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","8403dc6032a9ea54552991080d2d598d"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","c707576fd267d7f1501cb81ffe82dbb7"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","b390176461b4a91e300756b5e85f67c3"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","27b1ea6bfcef406e4471e19f21e4b486"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","0d3d108f8ca69c2334efc5cb39706364"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","1895a0bf6e96e4fd9c09515d54199219"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","f7d9fb0a1ce6c629e5d9351a2b00ec7d"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","e506f3df4c2f6a3264a27a2b6fcc7411"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2453ee10c92ddb475405fdb571f48adc"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","7fc72cd401277e134e63502714826b6f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","27a6667788c87481b19dedc272d58200"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","adc8e28779a27d925ee2cff41824095c"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","2f60d78bba9134da435f61d8ce0abd92"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","7caeef72b501c8871292d91a363f6a43"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","ed6620201587f9d2aeef981bf5485c66"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","e4ec3d68796c659337644e7e077b0cab"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","80b8f71cf9964078b6b1516ece20284a"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","3ddef4339b29e374ede363eeaeb9c82b"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","97dab2eeac07668ea55fb04339e56daf"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","e8a0b595fa724585d6305fa28c0dd4fe"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","4b51918ea6949afb1519b2917b652b23"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","fa01f0604c2eb0a0f1072104ce7e3448"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","bc63ce9934b6277369686d754f042b60"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","0e3343acf896ede7a1f12ec9da86ffaa"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","baab828078921709731b8369ec808cc0"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","98ec0df827e8c3d789d0972b73335318"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","454a6cf7ffa4d1870e3473bf4fb81ad4"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","cdf1eb2278544d23eebc09f82ea34ae4"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","8e8538a1bc341034d230ef0621255b94"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","efae268dcd869351ea8fb74c06f33f8f"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","6288e8d497657806b02cc8d1644f77bd"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","e8b44dcbe47425a6fe8e379f6e75461f"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","777fdca7660aaa512bd7be2c14ba285c"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","7629200ee4c1361ae82efa73ae1d650d"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","2d32098c2f780df71754cdac5a2fefd0"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","64f8e4e6dbd360c1a0a73308317e7b5f"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","3b5d7a2a3021affd4188ed804e54406c"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","a9fea25b2c43529a848ea4fe781de07e"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","bb1a0f501b0b2383611f40e2d89a7423"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","c134403d0994853782d6ddd929d93931"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","bd5d815c94d54d0f46d4d4c151eaba50"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","08ba1c1e806f6ee985f999ed1f6197b1"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","9b1e843956778000b6fda9b5d70bcece"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","761a866bbef28b8d58a085a53adf952a"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","ff702c662b84dee7f5789b982f8e4056"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","1af367307dde083c7a2856bb3ad8e4d3"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","230f74c7c4f9417aac6243869e5aa041"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","2500ad0915b53a1cf6f49b56b2a54fb8"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","51f0a7ede40714817d279f886f45c67f"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","581c0fa4ec0886ba32890a4a4e66b982"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","dd00a888943cee4c8c85fa2dae40fc36"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","8ff7e31807d872de30f70f978b3dcb93"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","9fa6aefa65409f7ccce0d4df118d1289"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","49b5c22e0aedad7b44ef62d47ea12887"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","fd6e713d5987e32cdeef5d95861f3a41"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","db06867711244e58999202b519228111"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","7e352070259ed64b9e4e34665b24ee57"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","8ac0953d3da4b18890b1b6031f5dffdc"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","efece43106054be91187fa5cebba41d6"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","2d16b82b87ce5f5ccbc9097c77d7161a"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","33e33b3907c7f9924bbaabaea9219e42"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","f0f16d70cf35f9e460a060a945875e98"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","8a9f50221af414f29e7cca75b0cd1d16"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","7dd274e9465bf2eaca22952cd8c2c2ac"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","3128abd3a8586a8d3a74abfb906d1a90"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","5f756dc0c42f588c9120faef6569f161"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","1f74fb87f14f4029c025b1a16f6c61eb"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","1b12da6625e69211923e268da1fdeeb0"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","cbd5ddeabc47ea651a3b45b0b364e488"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","121cfd90813748a4402172408743de33"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","b31e3a1c12c228d8f30e1b6a0942f8d8"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","2e309dffc32f441a37268f32e93f5f3a"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","2e733b3df462e52fa3f3aa07a5bf578b"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","6c4041329e705f2d3679bf0c1872c141"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","10dcf2bab98299c9ca9b3eedd506f349"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","449954217d8eea373727dedb250c6fb9"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","f85f7330adc5a453bfe4a3700fa37b43"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","2f58a27a53b14d5cab4e251b4f81155a"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","1b9b7eb8e2ed1a3a51820a5f64ffcca4"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","09dce2c8b4372a618a926dc92f9f24d8"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","63c64bf586193b714085d44ccd5d17df"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","7bed09da4038944b4e4b5c7d67f2f88b"],["C:/lmislm.github.io/public/about/index.html","0b3334e88428622c68d9953163201c78"],["C:/lmislm.github.io/public/archives/2016/01/index.html","8de4de60d2e25af25085915363aab470"],["C:/lmislm.github.io/public/archives/2016/03/index.html","5f31ed255f00ff846eefc75ad29b69ff"],["C:/lmislm.github.io/public/archives/2016/index.html","595e393f78a440413a01b7c33736f22d"],["C:/lmislm.github.io/public/archives/2017/01/index.html","75c5fae0f9d53de27fbed1f1528dbe15"],["C:/lmislm.github.io/public/archives/2017/03/index.html","db68e0e9db9f5cc4d33c8caead0b53ee"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b0ba8346eba7e24cba4e3b0baffa0665"],["C:/lmislm.github.io/public/archives/2017/05/index.html","445842081ac3afd289e3b4d25231955e"],["C:/lmislm.github.io/public/archives/2017/07/index.html","1b9081257af33a468791ab53b478844b"],["C:/lmislm.github.io/public/archives/2017/index.html","47a0f8d59c3159b751fa9c83d20498c2"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","24c4d91bbe7f60e5dca86a6549198e1a"],["C:/lmislm.github.io/public/archives/2018/01/index.html","7c73c74c1a24f90e013d8a5cef5d3212"],["C:/lmislm.github.io/public/archives/2018/03/index.html","c1c3a417f1038c167035c6167922ec9b"],["C:/lmislm.github.io/public/archives/2018/12/index.html","7b4a03ff8645b467811c6d0d6c595375"],["C:/lmislm.github.io/public/archives/2018/index.html","d0184de0c0c557af9866219bef1d7073"],["C:/lmislm.github.io/public/archives/2019/01/index.html","b7d7a873ac357c96b96bceb675f45a8f"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","5dbec82c73bd5e36dc318247f24c510f"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","053a181f3bfa1e10165ab83e3f2c245b"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","671aa6985285f148b33930bc28e9b98c"],["C:/lmislm.github.io/public/archives/2019/02/index.html","b09842a7fd15b76bee61e822edd8c43e"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","c3924226d85c2239cad2cea83bfc62a5"],["C:/lmislm.github.io/public/archives/2019/03/index.html","e5f363b178c52347a247fe2c1a332a63"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","b13ae4de9438cc529f1efc08384a3e90"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","dd2ea0ab6e8dadbaeee16a40247ac62b"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","7ea50cdb6eda02e24b59c45cfc800023"],["C:/lmislm.github.io/public/archives/2019/04/index.html","b34022793df08f8448f83a7f740fc51c"],["C:/lmislm.github.io/public/archives/2019/index.html","2e711eb656580917fff43f72dda8b1a9"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","2510b15f5a77737d6ac97b5562bdc59d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","bb36c89645d4031e35e4ccdf3f246196"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","ce6f7809c83c416fa1f507116023ce32"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","b57c64568239c2b2ccfd38ab23e99cbe"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","cd5a3d269e529d8a46ccb3be9fd0ff65"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","b3eeffce978a0aa7ab13121df50afc26"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","514394efdc952a5f49efda6fe54a43f9"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","b0a48d6e382216b0c48187e838c23d66"],["C:/lmislm.github.io/public/archives/index.html","fd68114d2127ed96cf5a9623d4fcac80"],["C:/lmislm.github.io/public/archives/page/10/index.html","3bb8d77e6f21e767b40c11af97000038"],["C:/lmislm.github.io/public/archives/page/11/index.html","6861a69946e3136ecf8085f3b4ec911a"],["C:/lmislm.github.io/public/archives/page/12/index.html","ed3cf185ae421425bb41d57ac64dc170"],["C:/lmislm.github.io/public/archives/page/2/index.html","41e89ea6852cf2934db7a44c79689979"],["C:/lmislm.github.io/public/archives/page/3/index.html","43fc09b4da3b161151dd14ea6355e8f1"],["C:/lmislm.github.io/public/archives/page/4/index.html","b66b318b699eb291ca935d2073978c8d"],["C:/lmislm.github.io/public/archives/page/5/index.html","e223d0d853dcdb13bb07eac6531c879c"],["C:/lmislm.github.io/public/archives/page/6/index.html","9d65a434d2b826fccf8682aee3db819f"],["C:/lmislm.github.io/public/archives/page/7/index.html","4e10f2ced90288055bf23696e0bf055c"],["C:/lmislm.github.io/public/archives/page/8/index.html","997a1a9a02b946950390d2e05dbd6890"],["C:/lmislm.github.io/public/archives/page/9/index.html","d46c9cddaa471eacf266256d91ccb678"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","6d4cc7e6f45d8b3b9bb98b21846ac805"],["C:/lmislm.github.io/public/categories/index.html","65fd8d3d110ef4a107b249fd5bb3c121"],["C:/lmislm.github.io/public/categories/xx/index.html","f811dd95e19f901780f10e36548b6cca"],["C:/lmislm.github.io/public/categories/学习/index.html","2d7ef0d21285fe7652cd01bc79d9c48c"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","948bdaae65216c941932eb45acc610b5"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","dee66e7196a64a117250670828c2d00d"],["C:/lmislm.github.io/public/categories/工作/index.html","f535ce8bcdd262019290c1befb0c017d"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","227bb5798047422c9e1409f13cec6e62"],["C:/lmislm.github.io/public/categories/技术/index.html","0f7ebcc4fd1a75cff903388200e3b593"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","9d233bfce058e3aa4951caf14f6f521c"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","9f2a8587892cc56e065567e61ca60a02"],["C:/lmislm.github.io/public/categories/日常操作/index.html","fb41d4a006ef9788b2b5b3c4d7ddb2ce"],["C:/lmislm.github.io/public/categories/生活/index.html","0c2798b29389463216c94dee307e0c5e"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","e212b307e2b41bf8f9f46f010f7ddba1"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","3cb629f6c29424ecd2544516d6bbb500"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","2138b7f251997fb4435cf0c17419e880"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","0ab1622b1cc1d3bcd8ae49da81fdeb3e"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","3ba54df87f11060962c8dcfc721ab76d"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","4d2406bcb14908b62a7dd14eb06de831"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","51f3f3dcc6931dbbe36172e461e1661d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f1a8bbd0d8bdd91a9fdbc34b06db442f"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","848a720d81a1ad3e77216820e7064027"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","a9b9a0a5b9d4836af1187ea5c78f8097"],["C:/lmislm.github.io/public/page/11/index.html","ca0837b75781828de673b12f53d37f38"],["C:/lmislm.github.io/public/page/12/index.html","e441cabe123366c7a8431428eb55a21e"],["C:/lmislm.github.io/public/page/2/index.html","fc1bccce2b0f2148ffea95c77593b406"],["C:/lmislm.github.io/public/page/3/index.html","24ab6506ab410bc7e470212250b3564e"],["C:/lmislm.github.io/public/page/4/index.html","c8ab95116ca1865c0eb091e042043e17"],["C:/lmislm.github.io/public/page/5/index.html","25ab3e930019f16a2edcfe91b5206b4d"],["C:/lmislm.github.io/public/page/6/index.html","03df4c0c50d8145427c9a13c68e69826"],["C:/lmislm.github.io/public/page/7/index.html","ca7ada5f6e7697c6439c778cfc07102c"],["C:/lmislm.github.io/public/page/8/index.html","ed644049d735e07ae9e087cba428b824"],["C:/lmislm.github.io/public/page/9/index.html","b28c4e18dc96130ee07df8202f5ba044"],["C:/lmislm.github.io/public/tags/Interview/index.html","c55355de2416a4cb9715144192642a95"],["C:/lmislm.github.io/public/tags/JS/index.html","660404b0ab77fef5ed681731ad2cb2e3"],["C:/lmislm.github.io/public/tags/acm/index.html","478fae4c12609fcea603ff1e442da7eb"],["C:/lmislm.github.io/public/tags/c/index.html","1e88130153fc28f5457fe49e2cb6ed3a"],["C:/lmislm.github.io/public/tags/codewars/index.html","78fd6dfc82e490b4909d80ee1d852aa3"],["C:/lmislm.github.io/public/tags/css/index.html","0d527df1993e5342dd99f135c9c99d1e"],["C:/lmislm.github.io/public/tags/git/index.html","aa42f39df484e4353320cff7a11b40b1"],["C:/lmislm.github.io/public/tags/hexo/index.html","decf73129a2d5a14a0ccb8e4d660e41d"],["C:/lmislm.github.io/public/tags/index.html","2382449f6dc0344fe2b44093fc447296"],["C:/lmislm.github.io/public/tags/markdown/index.html","d22377620f9892f5aa67307ea66f7852"],["C:/lmislm.github.io/public/tags/poj/index.html","86b8510893a1a95318258cff6c111a71"],["C:/lmislm.github.io/public/tags/shell/index.html","bf6bacd854db553952881b74f7880c6b"],["C:/lmislm.github.io/public/tags/vue/index.html","0072d974f588446eeec5cef27a459198"],["C:/lmislm.github.io/public/tags/xx/index.html","f6865b71246f55aab119484504a229c6"],["C:/lmislm.github.io/public/tags/前端/index.html","135d96c417951dad864dc438e9f059b3"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","7addf0ea45da265d40aa37bb57644ce2"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","6f5db02a98c18d9bdcfd4fac2d38c3de"],["C:/lmislm.github.io/public/tags/小技巧/index.html","356a364e08d670f78008b7080bbf3567"],["C:/lmislm.github.io/public/tags/展示/index.html","4181abc20990cf03b009a452a73ccac1"],["C:/lmislm.github.io/public/tags/工具/index.html","c6088cb50882fc8b9d200d8ac0dd4b4c"],["C:/lmislm.github.io/public/tags/感悟/index.html","20f60d432aea7d83f4a8a7bad5411e95"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","6a211e1d13b873db3070fdc99e480fc1"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","841176d9235d3631c199274e66aa4971"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","f61f4514503596f6893588861b0f4192"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","830c833add2542b67b895f2b9beb77fc"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","9562e9e94e9a7a69828ef6cecffa4046"],["C:/lmislm.github.io/public/tags/练习/index.html","cc71e9ab1e73ff0e2d2293bf252af0eb"],["C:/lmislm.github.io/public/tags/编程/index.html","1c84bdc89c6d570908ea6f612afbae08"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","556f1d8a3ff28e7e8a685862e74ca1b8"],["C:/lmislm.github.io/public/tags/运维/index.html","50c48a5ebaa3c31ab2dd5e8b4e849e8a"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







