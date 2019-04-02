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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e239080319b9e15767d9ffe46def2bcb"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","12f899c268963048ec6ac0533dad073d"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f4cbafe6cf6cab2dba4532c9b5c7798a"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","05c55673b393cb6f8811d4e1ac0ba204"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","3a12f4a69c9abf70f280e68130ddd7dc"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","1eaa22d8736928357ee17eab4ca72c0d"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","0ce75ca0b37cf4f9c64c1b2cb5d77431"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","6026675bdf0065893f9ee9c6f9a5975b"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","7e125d1f84a513cc16e48ea361d19a47"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","80936cedef9885f0e78b978b7ba62bf3"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","2484bdbe0942a7b3db35c8012c785618"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b80d9f095550698a905c86b48faa4734"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","faaeee370fce494b7215709a8e6ffb57"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9f1968f0327043eac2f5b88a8e14f4fb"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","c1c6b06c925be83b9d79c7e2e841e8fa"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","c4752f7a7af649d25b0560443cfda0af"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","2db7ca1181e04b82a022b2fd03dd6816"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c5b0b337e1cd9242fc1da3d7bcae07eb"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","bbab791da41a207fc467f3483becf7c9"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","4fa630e945a6d2e5e276f91fb84e8c7d"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","92a8af6bb2ae0ef69d1b646dbb879f2f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","d09daf3496ce14974cc590c71f9d7762"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","c6669415010319f2696ab67d92d6100a"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","ad618ef870df91b3baa7c8f4c5773c3b"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","289de880a2fa41ed80066733b9d6b73a"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","e78ea05d6b4f21a1ff6e1efeaac12f80"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","4213d37078fe17d5ee6fbf5f738d4a6f"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","6a30a113536e1fb96229795ec4d72f2f"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","677acb0b434f1ca07b17c111c7713c4e"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","c26913b1408417904515bbda4036e0ed"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","76babd9bcc5b9d5f4fb0bb6f622b9e0f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","6492a1ceb0fb22a3137d2e06502051c6"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","d4b39dab3fca3b8464b65b9ab6da2435"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","52af1f2bdd5627200d3867be26509f44"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","06187ca162ab6bd3307e296cbbe47b7c"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","7690d222a42f77805017fcc20e4a2713"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","ab7c007b5fb28ecc52db75da1ea88d40"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","e2daf04f4d78a5e77d1a07a1dd90dc82"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","638b3ac5052f4b8ea245b7009d229756"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","f0e6493725070a7a915446b61b4842b6"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","2ccbfb0c9fe184c3e3f560e2f9c4b464"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","3580670228d1b76e8e6b4740a5069ba7"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","bb8f3c719023c2c7d0ce1aedfbef6c86"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","707d2e24daa0a6e1331ad28807c0cdb0"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","32b8b2b48c09862cc8e9da87ad59dc2b"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","62fdbcd8364ff5d19c7278cd96c9894c"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","b356d782f873cef051d27673660d523b"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","b8bd90c2d02fb2f7d425596ab3b47ff7"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","a34667ed1f0885f504c3359cbec1a492"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","d0f1395f3f29120c24de84823080a2fe"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","1b93b755df9098d0af18c2ef884b1cc3"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","b5f0b432f819f8194171fb5188b9ba8b"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","1cd39a9ad1f225229bab7e5f218b726c"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","cc9b8ab2e91246fe11bde9f149eb7bb8"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","3ecfd4d5b21efe9aaca21aa918ea8967"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","50a4707eab826055e111b65c3da2d2f4"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","a8a00a5fc55c448733c489057a9b60e3"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","0cf05e1607c15f2b85ac7bd8a61c26a6"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","15e459434498584cb7726083fb8ac4fe"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","0298a4e491f31e061c5aaefee76e9bda"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","28884240f03e5637053eb00c01906cf5"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","df38323c1caf08434e31dc486729f4c6"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","d9f287aada8fca1c3f2efd6411a32c33"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","b2069cc95f56081bc59e70f73bdaf8b6"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","12b6af267eaa13c748e1c88b6dab9653"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","a101bcecc73b816220650c933b3cd61c"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","de643f50b16f90439fa9cce2400620b8"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","19413efa75b1c41f839e012072146f49"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","39a33218b811e762896f93bf7bf58413"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","07e23e1700aeef6490150aadf4961786"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","2b757ea18a47ed81e476b5bbd2b8837e"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","97090d2e73530a7938756c2130f5719d"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","fdaf11dd873e14206b891107f36340fe"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","81d3bf2b687bb47e1d1d9a5b7358d2d4"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","c8b68970d93ae22b43336c6a4a875da1"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","f2627ec4cda81cc908df9816b085e222"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","11e579827facea026d72667b5d85ce6d"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","8bf0eb998d22580f4f302260a0ca38ee"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","315fbdb7849d4ff1ecae97ce060ae78b"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","cd6d092373aa616138d67145ab7cef2f"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","aa76800baca68af84f53a7f4939741cf"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","7f755bee627c1bdfde04061c50f889a1"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","edf0c6a0beaed6b55692f7239d2cb4f3"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","5be4709c08a3ad6b9cfdfb59542ea30b"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","bbe6cff57f16f96abf04b673f311c24f"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","21b4ef99c66f78d8879701785edcdbe3"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","c7e93ba8e3849d8e9ef0462f36112bd4"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","6affd1487809ddb7967fbaf0a2176df3"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","faaaf24d13d4083873b8a36842633413"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","eb5df0c440df706282a7d38cdc271b4b"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","b91f421c27901321dc316cf56526b8c2"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","a3b05681b36011107f37ab6422494a46"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","ce92d7a76ff4688186f20d3f44d54566"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","e8d442d02b41f6df35b214141446ec56"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","b5cf0c796033ab482a054dda6a0b46b7"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","f69836918e3733e3d564c2262bbc8b5c"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","08d3d4190163525713a3a6959e7aa38c"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","bbc54a093f626e67db9ccc96e93310bb"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","ce9d76adcb682d873a6d7f0e58dc0346"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","97323cdc2e1f0801bbd3e4c29200d62c"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","43ef3ee69cbf2767e27bb90a76826b83"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","c732896b9341e8055335d0e701004447"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","ecae5608fa90fe5bd25549512bc60df3"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","5725fdd61d9db96107f2b46e17823e77"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","1f1037a6d4f527b8fd3de03678310e21"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","7ffd9f4f0e41886d645713a76a1d45b6"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","3b36bca4ec7a55353bcf2589b7964635"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","81f7d2624d2e825822ff79e6b2ce458a"],["C:/lmislm.github.io/public/about/index.html","0056d759cd74377efb0823c62b1a85a5"],["C:/lmislm.github.io/public/archives/2016/01/index.html","689ada66434cc6a6cc2e3c726d7730ec"],["C:/lmislm.github.io/public/archives/2016/03/index.html","b3aef8a7aca6077ea2c168e3708a7629"],["C:/lmislm.github.io/public/archives/2016/index.html","054f3eb1d9b948353e6a7e8da4c414e8"],["C:/lmislm.github.io/public/archives/2017/01/index.html","b94f4b1f1c7c68faa21dec19d9e588f7"],["C:/lmislm.github.io/public/archives/2017/03/index.html","affc2160d6e2f1f6df6ff80a526558a0"],["C:/lmislm.github.io/public/archives/2017/04/index.html","3c1714ee956ad214dd364958c1088681"],["C:/lmislm.github.io/public/archives/2017/05/index.html","4deebdda305ccbf1e72367730bf66f29"],["C:/lmislm.github.io/public/archives/2017/07/index.html","3e94ed6f56a6086910be4d308c222c78"],["C:/lmislm.github.io/public/archives/2017/index.html","1a50ef6c6e3cb6d13803812a0796128b"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","7c32813c381361f2f39d95409160d9e9"],["C:/lmislm.github.io/public/archives/2018/01/index.html","d4ab60f45a7e372cb680f13ac7383f94"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f1975b287ad63f05d695cf7e8c10b406"],["C:/lmislm.github.io/public/archives/2018/12/index.html","3fb9fcaf186846946da67a5db1a31652"],["C:/lmislm.github.io/public/archives/2018/index.html","1c0174f6c64827817df091b92aa0cc28"],["C:/lmislm.github.io/public/archives/2019/01/index.html","2289b2e5fd85e07c7bb2b90d92d10db0"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","58bc1c28d8e411d18ebf0178b114560b"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","3a3dd69d784c8ff7b321c3a6d9cbefb5"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","5ab5b7f1c214806a9432f3db55a2ff0b"],["C:/lmislm.github.io/public/archives/2019/02/index.html","3d32a5ce1f94f7c9f132fce4d02f9d9a"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","d983fe23f99c00cee9178e55cf0f0ddb"],["C:/lmislm.github.io/public/archives/2019/03/index.html","a9515ebd38bb81bcd7853603cb50093d"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","4878807ec304b076899201fb2f282d7a"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","9cf74665bb612600e5c29d7ce65714eb"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","70bd8088b9b66776827319d4b4d671a4"],["C:/lmislm.github.io/public/archives/2019/04/index.html","31abc97687e464591882655e3a75c505"],["C:/lmislm.github.io/public/archives/2019/index.html","93dad009625424fa6d3021c4f851dab9"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","e9fef3bcd2864c476783c94af34300bf"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","8c779230fee09cac0fb3c94be1dfd135"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","1e06c0a998c3b5f13c8e027e7361781d"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","b4356c99f7a0c6d015202d3c71da5b9f"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","4f89ca5ffe05241b9eda2f7538fad40c"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","37ebbb6c39b5cebf7ef65d8d8ee8d610"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","94a47b3dc2667837630b740a0cc70ec2"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","505c0bf9611669c8d58a606f503125a0"],["C:/lmislm.github.io/public/archives/index.html","d687d09ef45111df18e12f7fe392ccac"],["C:/lmislm.github.io/public/archives/page/10/index.html","d5f7d695d3a285a89cafea640b7646ae"],["C:/lmislm.github.io/public/archives/page/11/index.html","da73c3937bc53f3f163a76b7d62e321e"],["C:/lmislm.github.io/public/archives/page/2/index.html","f23004a1203e14bbb0268e8552f05926"],["C:/lmislm.github.io/public/archives/page/3/index.html","4a4d3056aea97e6988c6f80773691b47"],["C:/lmislm.github.io/public/archives/page/4/index.html","71b7e6e856353fa56ac2142e6432fbac"],["C:/lmislm.github.io/public/archives/page/5/index.html","2b24e912f81d296fba50c5b7bfadbd3d"],["C:/lmislm.github.io/public/archives/page/6/index.html","1a2b41e0696cf890c5067e1477c32f79"],["C:/lmislm.github.io/public/archives/page/7/index.html","00ef8e147d15bb0b2365b6c5ac650981"],["C:/lmislm.github.io/public/archives/page/8/index.html","4b7b177af2bc08b10803079097c10d70"],["C:/lmislm.github.io/public/archives/page/9/index.html","a99cc855bda5d0e12564a6473a1a293e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","cd2e437afece27fb0cae279bf8d0a730"],["C:/lmislm.github.io/public/categories/index.html","b3d16e53672802a88407e8c28f67439c"],["C:/lmislm.github.io/public/categories/xx/index.html","d0dbeae4c352988db47869204ece6950"],["C:/lmislm.github.io/public/categories/学习/index.html","0130420fbcc85a2e471a5471f4218b0e"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","84317826866ffbcf21451b815196b32d"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","43d1fd02c18fa2d69e16b75343e243a5"],["C:/lmislm.github.io/public/categories/工作/index.html","99eee7967e216a6cddde090401da4038"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","6a57770ace9ff2043aec73987fce66c5"],["C:/lmislm.github.io/public/categories/技术/index.html","ad55e4226c8bbfc60ae2646974143e09"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","4a0c6424b7223269667c96f193b779c9"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","ee03d1b85ee075b48cb9bb6c24a6355a"],["C:/lmislm.github.io/public/categories/日常操作/index.html","8fa7cac6c92f248ec15fd1a69a159a8d"],["C:/lmislm.github.io/public/categories/生活/index.html","b5a5d78dc80237f6e0ffa0e27c1417df"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","b1f9a551eb90df31ad93b7ffa11bc3e0"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","5855df353ce9b8c834a5f14053638f29"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","fac0f1deac4113dbda510d2a8352d6d3"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","5198080cf2e2b0a2e0a51b13568bfb6d"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","891f60963dde7770ff59a64e100f5da2"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","68aaf01f34141922f8f3c4bf9e79f1dc"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","7049a8d63009da8aa0ef4228b59848b8"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","45bc327facea6b3b3e091831b3c60ffc"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","44d550dc376f3a1f715075d2065bfd70"],["C:/lmislm.github.io/public/page/11/index.html","36c598838a1d87baa6ba31f98d0c4970"],["C:/lmislm.github.io/public/page/2/index.html","089e90408e6f1af58ddb681b81695d9c"],["C:/lmislm.github.io/public/page/3/index.html","ea48d8dba2eb37682fad637ded575a04"],["C:/lmislm.github.io/public/page/4/index.html","65c923ef1baccc6f45ba7ba0a2406e65"],["C:/lmislm.github.io/public/page/5/index.html","a561c73e8312121ae2ee6203f48f1486"],["C:/lmislm.github.io/public/page/6/index.html","9c3c6b8ebe7fc371d0621888b3ec44c1"],["C:/lmislm.github.io/public/page/7/index.html","f9c5e074b6718b2833009f054c35ab47"],["C:/lmislm.github.io/public/page/8/index.html","0d979846b7cbc63e1d2f4b71647333c6"],["C:/lmislm.github.io/public/page/9/index.html","b085f0386338ff9006728f8130ea17a1"],["C:/lmislm.github.io/public/tags/Interview/index.html","0be3856db6233a5163e4a61491826223"],["C:/lmislm.github.io/public/tags/JS/index.html","1316688b2bd0b814e1beef017c0545e6"],["C:/lmislm.github.io/public/tags/acm/index.html","726015a1cf53521680e9e8783c50197a"],["C:/lmislm.github.io/public/tags/c/index.html","11c462d36e8f2e6791e08148a057653d"],["C:/lmislm.github.io/public/tags/codewars/index.html","2481dff3e72eb4c53aa19e02c6471a02"],["C:/lmislm.github.io/public/tags/css/index.html","c3838b76a64ea8dee176bdfc22d9d5be"],["C:/lmislm.github.io/public/tags/git/index.html","5e9031aaf4d87c27ff053e04b8496767"],["C:/lmislm.github.io/public/tags/hexo/index.html","be3f213dec6c4e06cde77e3ab99e159b"],["C:/lmislm.github.io/public/tags/index.html","67f342cdbaa1646ec1cad6dcbbfeb52b"],["C:/lmislm.github.io/public/tags/markdown/index.html","822bfe16078fa17702f8ff613ca86ab9"],["C:/lmislm.github.io/public/tags/poj/index.html","ecba3d869cf98e9a9f4f0264ee94c476"],["C:/lmislm.github.io/public/tags/shell/index.html","e3c7caacb3449443d4518ad4be60dabb"],["C:/lmislm.github.io/public/tags/vue/index.html","b7fe2239782a1f7eea9b46cb8f7825dd"],["C:/lmislm.github.io/public/tags/xx/index.html","369596d7d4fb815da147a2ee6c139c61"],["C:/lmislm.github.io/public/tags/前端/index.html","2001a40ac5805f7bb19b012cc8d0a0ef"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","2c8d31ba38ed8c8192d4f6c6945e81fe"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","dbc87458bd1422a8677a375711dde90c"],["C:/lmislm.github.io/public/tags/小技巧/index.html","7ed0788c98b75731c527ddc20627072b"],["C:/lmislm.github.io/public/tags/展示/index.html","2d4fd88978a243f444ee3eae380df305"],["C:/lmislm.github.io/public/tags/工具/index.html","04c9f75a2482cb1f1018e14903279946"],["C:/lmislm.github.io/public/tags/感悟/index.html","dfe7a3dac7125a42a801344374fbc430"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","360cb86a2c3ac3225ceee5a94dcde6b9"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","bbe8cf00a966fb3d6afd3a5153b29021"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","d7eb3fb8d5001f56dd38c77fe062302c"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","f017fcee721656df42977fbdc7563374"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","0d6ae543f160914a9f7a14dc41367183"],["C:/lmislm.github.io/public/tags/练习/index.html","d26508a852dbec4d6d48bad8eac9e8e3"],["C:/lmislm.github.io/public/tags/编程/index.html","6230c9ec6e3c7be923f65479d20d4910"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","721f99346f1b7c2b10f94b77caa87fdb"],["C:/lmislm.github.io/public/tags/运维/index.html","fcbf17f3c44a2e460aef5088fed52e89"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







