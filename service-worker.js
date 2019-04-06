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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","99a67f9974ef235e7b88a22eee73a81f"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","11fbea25e9405dfb7829423f4f66d066"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","048e30a234d5367f464d726d3bfb736a"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","0fe996f88b75c7d4e14cb4d0df39d603"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","06fba335938e7a47e54eb0534a1fa53d"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","94d7d920ab6904eb4175a50d6f81c332"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b2d22efddd9ffb5d35d2b28ceae3678a"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","e082eddcedca0be1664960094fc2bb4d"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","4c1eee5fcd17287905f067c1cf7ae55b"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","a8158d87f2e202466c228aebe651b5a3"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","390462468e1f974276012ef7bcd1dbdf"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","2835ee80e20adc0012dd1b5c95f24e29"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","609ed20cb37f65b3db113a73263aecb3"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","f6dcd83131be2c2d7a83a4f98cea2eaf"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","79f9887233d054b6cf34ae09656e69f4"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","fd9b790e6992983276686bf8d4c649ce"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","d79cd7b9083748c3ad628e20e1590979"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","32403281cef47272bc16e77eb69ab3f9"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","23e11caaea4da44e4f0494194f55ea60"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","de9f5a5b3ec9e7165e791b839435131c"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","487b134d9e1c08a2ff4d47e632cd5cde"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","8138e098ac7b27247d168730c9491514"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","105ce0673d210a04b1a404431b7a627c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","44608b34bc2a0e1d4e789cf70de8c985"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","f000f91ee1bd5bed45806a877f6fd5e0"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","2217b5d506c3061b70cef53260247838"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","7749847ef14aae7684a0a3696a18d7aa"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","5e4da5abdf4927ea0f73e357c3f9bddf"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0cc0b6bbf2c4b1d18bd9ebca08b036b8"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","91d2dd3eb9bf0a576312435d5bbb76db"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","90a16ca8c8d7398f2a65c283a6c13903"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","224bd9b41a04008bdea1b95e4b4142a4"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f10ce7d78c52d4b2f1f876c016717411"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","7703ed891f8b056aac9473ccd0afa52d"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","ed99c17d1f6a45e34da11c9dfdd8ff02"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","f7ab99dd5c5991f7f5682653d7062034"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","d196b6002d2b97ca7b3caf9d4d8b865f"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","6a0193cf5d4e1bfe8b474739f59f8501"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","be1dbc8de135373e2e9c8568c126a7fb"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","fecdc30d4ee5852881bac6fe5ab44d8f"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","0986f127a206f272f543f8e6900d1505"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","0335ef6c61808c854603157af8219e65"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","03fd88cf41dff3587ecbd35d74de9bae"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","090b3c14d784c397db8eea53d3149e18"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","f5d66d8df981f42168d9406ba312f472"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","8dca66f73ed6240355bceab6a5cb7f3d"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","17c4283159fa106e1f472d817b71396c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","c52587f401592d7941b867dabc15a605"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","b2bb9d315afc5a7c3b537dd6382a2bb7"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f0fa96841d2203d117beb56cfb5d7833"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","30686a6cb173dbaa8249c58823ba67b3"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","8ce3d69a4a97c888270149fa4bd2c67d"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","1154e624d84157b751609c5ea9e53fef"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","b2797eeac1d3d2fc3b2f73f029a625da"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","21f91fd012616fa89ff0145e9300ee7a"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","22fc407760487c4b3c9327d515c96a8b"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","99cc0bc9b0461211469aaa09a2718310"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","e4b3c089a2d8430154511559fd70e7a8"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","145c7507a7aa12e4fcac2d4e2abf9e37"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","d8ef7be214ac6d7d5b6c673a7970465e"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","c3f55778c294f19902384950401913b5"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","3ebaddba93393f33ac89c40df7e827e4"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","ed6b83b621bc8c380b2d3656c2d860eb"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","bbcb372cc299b019de3350a7ee227780"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","3a38c3017023c1f1cada86a79e8d2bbc"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","091969774f1c7f0d8147c2d2627afd78"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","ea33bc74067649deb059eda3f9bac5f3"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","0ed5b34c23e9b3ab7c70e775706cb12f"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","1d24c77bb2ac4b43df04d311ffea7915"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","fcbcdda7bab5550d5f1998c28b4d6cf6"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","f3739de1fae3e9e656c8802ee6d6e6db"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","7e818bfbb46ca4249d974ce557435e97"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","a24e6e16b035b3e917eba03815fcf0c5"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","b16bab7517e4f61045dbb22e79742790"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","d726c80908a7e6599bf3a3b401e8261d"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","59c0fbb57fba2b90d741496af72a15de"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","100764eeaa9a9ffd34d26c70d024b2fc"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","b00e74d6ea1d5d5d3a3d2029b1bddfd3"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","8f1412d7cb9e0d75356818fa4ab8ef48"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","dc8ca24e07f8600e65634a4dfeff1e8c"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","36f4b7773e1eaed3c39ccf25db0ee296"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","13c19710793daf7fcca23f8fb7690183"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","6a52b8df61d7ed5b4f5d64422faae3c3"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","6504fac1c061fb4720c48c8a9d5a8ad4"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","bb23fdf9bced7c7a9b50e2f72e3d8acf"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","4dcb7e6496d2baad3d111854ff63cea6"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","0ae17df4a7b6cd289f9160169144a431"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","90cac4e778f01ad35e786da3c7e476e4"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","a19ad76f42e5bacf87ca7bf1c7e1cc66"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","0451eebca0786049f1503e69badb670c"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","f6743f3231eab5e024f7b1175cc2f998"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","ea201330846fd040256d58fa85a2d929"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","843dfcedb34ce96eca137835d0152d51"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","c58475b90dc8aaf3fd27cb523da45873"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","d8c4a82291aa35555d68c39be8459d6e"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","87af2754c5290d051eb6e8eaf204b5e7"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","9f51bac3fe3e63aa41664c04be005d15"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","284f3baf5fd676cf2f7b136ea516dd34"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","8253fbe9a1bfaaa5776a242ccea82d4c"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","f2a77eacfc4ce75f712886f19dc2ca54"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","d310878f2a859b71e7ecfd32358e6b0c"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","62a9945f0382a5974e6553f0c123421f"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","44e2dcc1c8cca4999c6c42735e19be5b"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","6306837fb5451ee05328d0cf7c3994f8"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","fcc972b8d0c0683f98beb035dc9c91b0"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","3205dd0c626139676f7b6040529c1560"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","b825fedced23ddaa5aacc8579acb4fb4"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","43a4af48f716752ecdcc1fe070915785"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","55e0871770c171d25b25b3b4b8c20679"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","f1de6cf27bc782e11a3d7b185df42022"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","9d2e02ee9a7628da415e067056fd7471"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","91ba42a4fb6472b5952a0519ac93c58e"],["C:/lmislm.github.io/public/about/index.html","02a860ae2ebb3d5946d28f4b0f3d84df"],["C:/lmislm.github.io/public/archives/2016/01/index.html","1834e04c801acaa24c27465b5bc3a592"],["C:/lmislm.github.io/public/archives/2016/03/index.html","3bec934f2efc595e157369bfd59151e4"],["C:/lmislm.github.io/public/archives/2016/index.html","84ec24bcae0570054266f5c19ec8e733"],["C:/lmislm.github.io/public/archives/2017/01/index.html","b812441966a2fc072edffcdcb85930aa"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ebf732e73ffbd2ffd6fbf4c35972803b"],["C:/lmislm.github.io/public/archives/2017/04/index.html","28ef9961ddc96a459e4e973b6870b1f5"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0a1357e49ceed581b108f35febf819e3"],["C:/lmislm.github.io/public/archives/2017/07/index.html","0513c9a08fd3b1febcc1cf257f13552c"],["C:/lmislm.github.io/public/archives/2017/index.html","2dfef33cc19b91da54a16c975b0c57a6"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","f97cb93b1900ef964d82e73f440e69c9"],["C:/lmislm.github.io/public/archives/2018/01/index.html","0d7e9d30acdf46776091452761cdd4bc"],["C:/lmislm.github.io/public/archives/2018/03/index.html","4e61943444ed9eb53c00558eb433fa85"],["C:/lmislm.github.io/public/archives/2018/12/index.html","fb763fc82ca2e111b620e34a371bb0da"],["C:/lmislm.github.io/public/archives/2018/index.html","99e001dcd4979081e8a39bbe86305a3f"],["C:/lmislm.github.io/public/archives/2019/01/index.html","d7922b4344db3cbd40d13e73e8536878"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","d072256226a6678f7a438bf59cc3278f"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","e1837fefeb390b8eee27a5df97795140"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","5022b8eca379032a5f4ab967e4c75e47"],["C:/lmislm.github.io/public/archives/2019/02/index.html","38d401001d59f6e20495aeb00a8bbb5f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","67c32dd1b2c2a52f1727198f6d68bb55"],["C:/lmislm.github.io/public/archives/2019/03/index.html","2fbae06087cd13f8def8862a820f7ea5"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","5e3057c4f94daaf71ad06d50b72f2697"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","022ce58ee6d7918e1759b61ee25ea0e1"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","dea77b3bc27414df9487f6ea87fc887d"],["C:/lmislm.github.io/public/archives/2019/04/index.html","3d92e3a99777a8a0204e86c92f28a851"],["C:/lmislm.github.io/public/archives/2019/index.html","cab9d0a8b0666e6ca9f0761256e5074b"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a777affdaecce7fd5100c9f94c44db22"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","95115884834623b22783e5773d48f7de"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","f425c7c9a996a0cdd253cc1655c1fb60"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","595836cd3de2804ca38473d5774171d5"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","4a110870011a125a33b1d6a060c01808"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","df1edff67ac31a9fdd44f281c9efb70c"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","f670b3486988879cf04f7764f9f76f5b"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","82becc89b6e8632823a9cfed3d988853"],["C:/lmislm.github.io/public/archives/index.html","526ebaae7091e21d928c42d61022ac63"],["C:/lmislm.github.io/public/archives/page/10/index.html","ee834c5f39780f70b587d130983de5b4"],["C:/lmislm.github.io/public/archives/page/11/index.html","b7e8733f08a0059dd98a5c66ae93760d"],["C:/lmislm.github.io/public/archives/page/12/index.html","02b854f3e7134eebde8a06f76b36110c"],["C:/lmislm.github.io/public/archives/page/2/index.html","06f8169f267165f235994df8f8ba0838"],["C:/lmislm.github.io/public/archives/page/3/index.html","c207c19368b86a8b4e10c3ed8db320ae"],["C:/lmislm.github.io/public/archives/page/4/index.html","b1a560befb5e5c743387d0de34d08e67"],["C:/lmislm.github.io/public/archives/page/5/index.html","582011f3aa68998139347ca5ec1b6998"],["C:/lmislm.github.io/public/archives/page/6/index.html","bdee96d4dbab1f8c761d4cd90e7a9aea"],["C:/lmislm.github.io/public/archives/page/7/index.html","f7dc1897abe1ce58e5af26414176e000"],["C:/lmislm.github.io/public/archives/page/8/index.html","4bd1cac9cde8a1c61dab845e704badc2"],["C:/lmislm.github.io/public/archives/page/9/index.html","02ab9b7e07f566dfc854e2b7dbcae95e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","1d66d45a827833637d0f7bb2c24c2517"],["C:/lmislm.github.io/public/categories/index.html","10ebb04340e0024f0d9fdf3e7f787356"],["C:/lmislm.github.io/public/categories/xx/index.html","33bd25bc46cc48ee4d80a80a63b7269d"],["C:/lmislm.github.io/public/categories/学习/index.html","95670e920a4d9c89f62a0ab090b0ba50"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","6303ed76909433cd284d006be9cd9de1"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","2ca3e3e0bb856edb63d81268caf2ec60"],["C:/lmislm.github.io/public/categories/工作/index.html","ee3bc260ac1f4470114bac8f6f17508a"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","1d961eb920d18b2ee258e0ab074b5a13"],["C:/lmislm.github.io/public/categories/技术/index.html","705ce8fa4ea32a6bf88ff54b1577fcef"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","b5885506060a39cdbde183ee1f6897fe"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","06681e918531ba0b91d0228c396fdd66"],["C:/lmislm.github.io/public/categories/日常操作/index.html","a97d0857ed3530c0c0787e60df0d04d0"],["C:/lmislm.github.io/public/categories/生活/index.html","1c02509e6be4439bbfab888c578c8ef5"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","ecebab9c04984f459e55f27d45c432ec"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4c8a844b45b8abbef5964e7074869a6c"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","149428ed537f57cbbe8eacaa95c428ce"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","451144e2286cb14a403f5e699ae9909f"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","31609f865310f38cc6a41b6f47a9cff7"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","7a7deee265dcd8f516305893b2109c6a"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d5a8927037aae159cc748d40f8a668f1"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","173d6a9e0dfbfc290a2d468af3c74e39"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","fbe7c8765c0bc4237f2c4bcc2965a2a4"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","36a390a6278cd0912a669eda175cf04b"],["C:/lmislm.github.io/public/page/11/index.html","f70693c1cd7fb94bc431a5b40d4fddd2"],["C:/lmislm.github.io/public/page/12/index.html","adef23d71b3ebc81ecbf8c11141b496b"],["C:/lmislm.github.io/public/page/2/index.html","9cbb63fb148547f7a17d52db74719315"],["C:/lmislm.github.io/public/page/3/index.html","f303f0419124ad831a1191adc727df12"],["C:/lmislm.github.io/public/page/4/index.html","a368c1b1dc4cf25a01bd70823349f510"],["C:/lmislm.github.io/public/page/5/index.html","e371f756fc072196d7ed5de5176de4f0"],["C:/lmislm.github.io/public/page/6/index.html","42f91f55ace0a3a2fe4797b8bc75f774"],["C:/lmislm.github.io/public/page/7/index.html","94931f180a4fcf0a1d3e94d69791ba14"],["C:/lmislm.github.io/public/page/8/index.html","4f219286f27b8012751da259f7754f45"],["C:/lmislm.github.io/public/page/9/index.html","5a86461d2acf4de04319ee81934f317f"],["C:/lmislm.github.io/public/tags/Interview/index.html","17932274fae1ad7991459201a231a81c"],["C:/lmislm.github.io/public/tags/JS/index.html","30eddae2d31844c057591e1e3f11a117"],["C:/lmislm.github.io/public/tags/acm/index.html","b0cf74bc61e203096796ab0fd43b13d4"],["C:/lmislm.github.io/public/tags/c/index.html","96bee4a2dcbd60800fe6ae49ba283388"],["C:/lmislm.github.io/public/tags/codewars/index.html","266bbbe322c8ad4410bcf97e21b396cc"],["C:/lmislm.github.io/public/tags/css/index.html","69835f7c427bab2bf3b710524180b8e0"],["C:/lmislm.github.io/public/tags/git/index.html","75d66cb7c868899fc28cc0602abe13ad"],["C:/lmislm.github.io/public/tags/hexo/index.html","5879e952b2418cfd13de2bf0db75e2c1"],["C:/lmislm.github.io/public/tags/index.html","41751f27354f5ac00548d2f517e9d0d1"],["C:/lmislm.github.io/public/tags/markdown/index.html","68ff388b4e83a50d4beb5077e84355ae"],["C:/lmislm.github.io/public/tags/poj/index.html","158e8a46a4f8423cfb7aafd4775dacf3"],["C:/lmislm.github.io/public/tags/shell/index.html","9fd452d51ea60edf6c55e6d9cbf0f64b"],["C:/lmislm.github.io/public/tags/vue/index.html","f1c7f720286cbb0da37c1b22718725a9"],["C:/lmislm.github.io/public/tags/xx/index.html","c72e7146126ed7b2f75f621a62e6d782"],["C:/lmislm.github.io/public/tags/前端/index.html","8be01d3bcc3b0e7496fa1235c44c4572"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","781e3f1cbadf54fcc1b0836e8de45b60"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","fab0e349be0336d31166fce835b8d047"],["C:/lmislm.github.io/public/tags/小技巧/index.html","c698b97d897d02c39f31a666929337a5"],["C:/lmislm.github.io/public/tags/展示/index.html","a11a78b39492f95a014e85b5c70da822"],["C:/lmislm.github.io/public/tags/工具/index.html","3bc09dd6933f118dc6723f920a09114b"],["C:/lmislm.github.io/public/tags/感悟/index.html","ff6b5af4fb0e7cf20b82f0a44737434e"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","b86a468ea317a56ccc893724b02214b6"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","791f1f32687d6fe1896c324a5d6681ed"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","bd843340ad2c0c4a4d34e769d86ca9be"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","8ec525da9250e7b0d8583f0a4895325b"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","661c042d1dbf647837a28d2b3c0a86ba"],["C:/lmislm.github.io/public/tags/练习/index.html","39e223feadc968eff9cbbede24a02e49"],["C:/lmislm.github.io/public/tags/编程/index.html","6d63db9e9b08d66a2072dc6f2d20290d"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","0742682d44b2770b730e28cfd8163c1c"],["C:/lmislm.github.io/public/tags/运维/index.html","6f881e491c02b5d7436645fd20011d3d"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







