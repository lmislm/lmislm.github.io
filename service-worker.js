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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","61889adfa5aae9a725cdc3ff2c0a5f3a"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","3232038596fdbb3a33848b1ab522c3ea"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","dfb395815e33476dee793b4a3d5f0f1c"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","bf2e4ffe3047a1650aac2125b2d05b44"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","146c281cf6807b8dcdfcd3be2df8fba0"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","1d600b2ec19b4a0ca36556031820156e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","14e573f555de4696324948dad4854170"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","ed6ecea27f208fab8aaf0c37308fe3a4"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","99426b5f5eeaaaaff11fa0667f6bd2d4"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","df7b3b2eb7deb87f0c04db768177707f"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","35a3adad29f9ff397d6c1a0cc5fb2ba6"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","2d083793be9868644d795872b3f4e922"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","d272093ffdf77eb0dc7d03448c3246bb"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","08a2fde0702ce47a17611f6806fce90a"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","ec98f63de3efb0d99048444e884e6da2"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","039b0cf70df9ebc23ef6dcf615798669"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","c66b96bce44d95e62f264a41e74ab83a"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","31360fddfc98375b33366dd447c7c4cf"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","2c11cd71c7b07bb0061db57b30144223"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","fa2da1d529fe1ff15c8351e9fb6906a0"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","20a5d4c122f0b4d723df60a141e03ff6"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","e92ce3f12ac36e04a63ce88bbaf96a1c"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","9c4021bee33fd067d334706184587642"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","f4156fa790df4fb39dde43508bf8c218"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","24929357aaf1b6a20ac95033103b7e07"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","925759e7edcad3203b26c90102a24e2b"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","e50768435cd3db0eb7e66f8c7b505daa"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","f24fec07f028fefd30ee65c9c0e5ac27"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","5356195e33e11c4b8a7c9a8484e64a84"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","2603aa6ad910d4a68431f37503fce24c"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","24d2246b7cbbc4fcb61eeea15f70d69b"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","325a3e10f65a7deb3cdf8e4e747683eb"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3c30094c8bc21097f98a4fa90fe33b8c"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","4ba90a2f942857f5f4e7001f12b62447"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","10a10de348da8f670814a30e02fbfd2b"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","558c94b52a9e9068ed340e75917294ed"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","8e364861e774aa05ee6ebdcc3105fb50"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","7957907ad1a66a479604fe64af32fe10"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","2441a9accf99f8bfa3f24ac10a340aef"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","4f12eab41d8bdc2bcc4ec25260e7dcbb"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a4b35bbd1a1af34347cc58b36d129de5"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","624e305f67ac106bd23f469c6d335565"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","b0903a648b6c20d79961e71d83fcfe50"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","0881c0a798e2a2ce6491931b333acdfd"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","efe94e0f3e6e8c91a9f305cf48a98f2e"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","1151c0090960b9566953dbc1000bd157"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","3c4e102ddaf2cfd86c833b4765f80a1e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","fde336891e69ce8a497c3ffea41bb228"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","5ad7eb5a5e774c1ca7f5ba41f373a37e"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","d81b4627321e3d453604bcb767047632"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","9b426ad0e158a14e38e96165d5ce93d7"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","0489c06179c3743e1480b3223d86ef9f"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","55b6c837145c30cc95d258ea9e6c3094"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","55f98b3008780d987c43e88ebca2de52"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","6a7263c764e2b408578d4cf5642e1df3"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","8f431c1283ecef9d716ab8c96f90aec7"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","f3f1ff4afc4d22905f5fe890dac6778a"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","14ddd54f36cf854a621e813462ab4d18"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","606a48cf71c360eca621fcc9b2a36047"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","c7a07373765978b75f90af707fc7ce90"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","e82d697c8c8ec1dab38479b36fa2390a"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","8ca308aff66b86d98fb4dd93d57d2383"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","01637fbd806e95759b5622b4bd279980"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","96251f1a3e9ea514ec5b786d446780f9"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","c37fba0138081160a87e55a0f66386b6"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","e39512e69d9f60847962b08693deab6c"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","d05e19bbadc48e63489a48e972f457a9"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","2190cc3798db34c2a9ad2e74b8d9ab10"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","c0f82c4e84dff9c17f045f48864fd0ea"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","1e0f983eecdbd0732273b6e6c9688663"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","831492af725f2077ee98580bc9c33d28"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","3b00a7f9ed0c574053384800a3b8eddc"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","e0c5690c5c784289bb03be7f37b50a9c"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","dc193ea5d6416a8280ff270b2802f819"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","5b4b6cb487149b1bef87f4db5f2af6dc"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","d819e800ea3a39c35dccc2d58289e922"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","e6d089b7cba392f0a608271bda535dfa"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","56863f4ee486a72b749956fec80f9c81"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","3b60d28762abba98fdcb7531a54ebaa6"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","134fe0fc40f74d04967565d36657bab4"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","368f694e4968620624bc30353fe2a8ec"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","4b8cb2f2685d6b7d88d71e54888dc42f"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","47727e5f9ec7261edaa1330d1a20e2cc"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","831f722833be1d8a02f57a1fae8a88cb"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","8f65e8ada1c1c2211b34e4d0204b8836"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","5ebde4e140b1c9a1be58ded8d65043d9"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","75cc1856b1bebbb2e192f2283021f58b"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","ecb7118aab87c88f3dc3d9bd03c103d5"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","97ff6883521463e195adba2b36c4da43"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","4b389c4cf2c918bf8339a85ad01cc8ca"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","3be4fc398d743b5b13e7bdd763bbcda8"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","8c6bd4b3bc6ee3bafe7d3d20e4b20176"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","c46f45c7dc9d941c40cf642007fd0701"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","ffb83fb898637f35ae8aae6850f1ea58"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","fc110fb9b092115f4fa3b06a17e93ad4"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","a90b7d0f4446a923a1f1f2bd59d069e9"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","231a53680489752478f405d6bd44dcc5"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","12e0f9b8eca8fc96e4ff0f4fc8e9f8ef"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","a2145e6c87c78ed165818352041c5a2a"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","d4d57b371d85c5cafd80e3bc1fcb57d3"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","59bcba86afb4cdc6bb7d1ba25814d55c"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","b86270e870e2b95aae2feb01448de155"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","afae2072174247d365b4b14d7437bf5a"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","0dfda969e15066e16a968de8be95ff90"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","7823737b221467c3c5f88225f33ec23a"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","210fb22969998cb10c61261a6ccd4635"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","e6dc238681235f420037e39cb9300ef5"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","dd4d410850347fc019a6b433b766a90c"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","86a4ed81b051bb355b2bac45bab77ded"],["C:/lmislm.github.io/public/about/index.html","99fa3427044c0ff980fe540465aa3ef4"],["C:/lmislm.github.io/public/archives/2016/01/index.html","93b7a7cd46a870f840ce26279cc1d6a1"],["C:/lmislm.github.io/public/archives/2016/03/index.html","ef85785384f23cab3a25c0505838e6dd"],["C:/lmislm.github.io/public/archives/2016/index.html","8d013768fd32d964b17088529b050c89"],["C:/lmislm.github.io/public/archives/2017/01/index.html","d01eaf90f72e8d620bbe4d5bad86fbc3"],["C:/lmislm.github.io/public/archives/2017/03/index.html","f6a3af66ddca614d5f823803d7b55e80"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b8b2e2219cb7ab336d258cb7369744b0"],["C:/lmislm.github.io/public/archives/2017/05/index.html","eb163c0385147fd068590f370bc1e051"],["C:/lmislm.github.io/public/archives/2017/07/index.html","927ed00c0327f66f0cfc73fc4fcd531a"],["C:/lmislm.github.io/public/archives/2017/index.html","8816069491f4ae460af84ad97e858160"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","8195948db6a8c2ebd159abe05b26cf41"],["C:/lmislm.github.io/public/archives/2018/01/index.html","bd33d8ccabc41bf26b8d54f265fbc708"],["C:/lmislm.github.io/public/archives/2018/03/index.html","1e54cfa76c826cb932694a3543469b1e"],["C:/lmislm.github.io/public/archives/2018/12/index.html","46395a9f0af6b0f5591e12258c1a0f19"],["C:/lmislm.github.io/public/archives/2018/index.html","8d345d46f22eb3ee085e3f18e53dfbad"],["C:/lmislm.github.io/public/archives/2019/01/index.html","d2d86365010749b7088c50146feea1e8"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","3221c8be0f6fc64a089e06035309e3a2"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","c99a493a1c6a9cfa3968db61eff4127f"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","a32c19cc1a5c24de06f0d3ab27d6c202"],["C:/lmislm.github.io/public/archives/2019/02/index.html","704d360f66caa4a44ba6da8249646a9a"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","bbd20fce3fd8da8bdfdd416dddf22061"],["C:/lmislm.github.io/public/archives/2019/03/index.html","9aef5df05baaf4fa6d8d1dd76a5f495c"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","964b6e899d1c3db16ed2da13e7678361"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","aeedd9493e0d3882060b2c2b2cdcdccc"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","a694eca54bcf586fdd1d67b265730ec6"],["C:/lmislm.github.io/public/archives/2019/04/index.html","4fa9b2062c560d8328a6946c016e84fc"],["C:/lmislm.github.io/public/archives/2019/index.html","85de91eb389a9adba991ebb3fc81904a"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","aa33d9c59c60d9d841cb638ebecb9df7"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","927d7463faf5c0fb02014f03b83c6e90"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","95c06f8785804356fda38c05fb73e587"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","f3a60b916dee0cc645260805491d70c6"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","3a7f93d5e171854587151813ddb4212a"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","4312314bf891ec3182447b83c7becd41"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","7bcd8ec08a536fb1319493f6cdb9c677"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","d643be9e7d71a88bd4e584b4045b80b4"],["C:/lmislm.github.io/public/archives/index.html","1b9dd6ecee28da0cd62b9a3fb77a0607"],["C:/lmislm.github.io/public/archives/page/10/index.html","4cdb0d9496fa1c8cb4f3bfac9f054d41"],["C:/lmislm.github.io/public/archives/page/11/index.html","92f9bc5ab29a11448c78c6ffdc54c41b"],["C:/lmislm.github.io/public/archives/page/2/index.html","7a02947bc2dfd77c81b2670cde997eb3"],["C:/lmislm.github.io/public/archives/page/3/index.html","a8d84912e1c0d76d0880fa385116d298"],["C:/lmislm.github.io/public/archives/page/4/index.html","e5a769dedc3da4d0621fef4b8a16776f"],["C:/lmislm.github.io/public/archives/page/5/index.html","9d380175e070dca052c5b396aaf7d5ec"],["C:/lmislm.github.io/public/archives/page/6/index.html","b1401c8004d18e8d07980f8c90c70a90"],["C:/lmislm.github.io/public/archives/page/7/index.html","729e66e349f1eb876f7cd51a3e6334ed"],["C:/lmislm.github.io/public/archives/page/8/index.html","2e5cb8b39cfa6709c3d9b220bbea8e5f"],["C:/lmislm.github.io/public/archives/page/9/index.html","3c6e9c93157fb61de2dce496340ea6e1"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","6fd93513fe92f97800000871eac9106f"],["C:/lmislm.github.io/public/categories/index.html","e4accdad32a68b642eb4907431104389"],["C:/lmislm.github.io/public/categories/xx/index.html","401ec9f864a52b4e371ab35dbb83607d"],["C:/lmislm.github.io/public/categories/学习/index.html","3c3b74e949891a76a460e6d824fb91b3"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","d93a4a037a71d6d564564f8869e96183"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","0ce00cef0c0aee695323291c18e666af"],["C:/lmislm.github.io/public/categories/工作/index.html","2606af3bb7ab09c50b3a585bdb939db0"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","41c204982993219b75c40a4104b9f509"],["C:/lmislm.github.io/public/categories/技术/index.html","6583d5c8bddf04fd17fb30554a24bad9"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","c496f19acb9499b6e34f52566c011f98"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","f4d12f00b1530f425ff0302edd15c2bb"],["C:/lmislm.github.io/public/categories/日常操作/index.html","d2e33091c5b185e6faf66667db71511e"],["C:/lmislm.github.io/public/categories/生活/index.html","ee1aa6b6c7d1d3d3c19b701ca51b70fe"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","66523155153535e49ea636a2aa7708e4"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4de1d4558da77636c4d4fc103ae58412"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","9cb0cfc3319d6fc32b0ceec6299fed6e"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","db21164c33ec7920c05ccd853400c5ba"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","0131859ca76090c16cd047b1603c405d"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","22cc244c21ecbf93a02ac3d4b14c4389"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","2866ffc44bbe7552f168acf28ff3b94b"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","bfe9bb7462d33a413ad382c66d87513f"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","4e99fbf672bc4bbd1286f45e9f4d4359"],["C:/lmislm.github.io/public/page/11/index.html","d47ca1e44f1be6d3738b35471b823485"],["C:/lmislm.github.io/public/page/2/index.html","33b9baa801422b11b257cc1cfe6bca9e"],["C:/lmislm.github.io/public/page/3/index.html","5ff41bd283529d304a874f91668ed50a"],["C:/lmislm.github.io/public/page/4/index.html","9e0a0778a1f021a834e553ed4f8110a3"],["C:/lmislm.github.io/public/page/5/index.html","efbce70bda8d4fe49365db5c27c985ff"],["C:/lmislm.github.io/public/page/6/index.html","7e341d5290e0b2509d65f3b83f33bd53"],["C:/lmislm.github.io/public/page/7/index.html","5a2a1dc9d5722e87a0215d6ec44ab375"],["C:/lmislm.github.io/public/page/8/index.html","f8bb5c53c0d6f4dd596f4de3f0c91624"],["C:/lmislm.github.io/public/page/9/index.html","bb22f6ed62fd5e89925a3a2cc979d7aa"],["C:/lmislm.github.io/public/tags/Interview/index.html","5492d5abacc2bd7eb64c87124e7bcfb9"],["C:/lmislm.github.io/public/tags/JS/index.html","4455532b2e209613d57cdbaa9958a57d"],["C:/lmislm.github.io/public/tags/acm/index.html","7d7a417483df89d4e6562374e319624e"],["C:/lmislm.github.io/public/tags/c/index.html","1760b8358d00b775ad3bd8676f7e268d"],["C:/lmislm.github.io/public/tags/codewars/index.html","db2edf0d7f09ecfb0facfd50a6568e08"],["C:/lmislm.github.io/public/tags/css/index.html","e73ce5279617ecec92aff50b1325cc15"],["C:/lmislm.github.io/public/tags/git/index.html","2b4a1366e454b8142a0b2de1a126ff58"],["C:/lmislm.github.io/public/tags/hexo/index.html","dd3e04e8468154d04d64297f1b6a3b48"],["C:/lmislm.github.io/public/tags/index.html","e0a46c76b315baee703958955543418d"],["C:/lmislm.github.io/public/tags/markdown/index.html","3cdc6c4b84351e1ffb5d64e292acd752"],["C:/lmislm.github.io/public/tags/poj/index.html","e863a4613015935083585b6c68586516"],["C:/lmislm.github.io/public/tags/shell/index.html","9a6434d5b3a421a2fd3895aabb9516ac"],["C:/lmislm.github.io/public/tags/vue/index.html","086f6b2835b4d7b568d4dabb4d84e033"],["C:/lmislm.github.io/public/tags/xx/index.html","62aa1732c91c6850d3f26de1bc5afd76"],["C:/lmislm.github.io/public/tags/前端/index.html","8128f2bb8d9ddf1718b09295e016c8eb"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","139b4bcc2eaf798f92586a4aa6613eaa"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","70e7e60a49db84d0e9669cf553a4756e"],["C:/lmislm.github.io/public/tags/小技巧/index.html","2e1bb0f494ff24a0f0ff13990acb21c3"],["C:/lmislm.github.io/public/tags/展示/index.html","cbdf178863fd68fbd2f7a71697a2b91e"],["C:/lmislm.github.io/public/tags/工具/index.html","c90f5534b995f3d84659511ad24fcfe3"],["C:/lmislm.github.io/public/tags/感悟/index.html","4a64c39563a06f084c39465704f1e0a2"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","8269eda2a60df7131eebbbd4cdc18a21"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","a81e173c3f7f6545070051ee25aa4346"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","c75cc5558c0a66f1b48d061f2bbc6208"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","61ce0cb93856be6b3d20d35ddf9a0dab"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","4b1ef9b167e74bcf0e2cec6bce0e5606"],["C:/lmislm.github.io/public/tags/练习/index.html","c5d2c0b4849500a55fed2e813177aa7d"],["C:/lmislm.github.io/public/tags/编程/index.html","0f7eb51489fe71b4932aef08b3d0eda6"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","73f0e648722d5e46d88e87e986b4400d"],["C:/lmislm.github.io/public/tags/运维/index.html","b567ef444f4b0a21fef580048d0c06a2"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







