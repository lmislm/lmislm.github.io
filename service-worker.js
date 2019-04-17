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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","6de6339126b7078db9b17711f41eb016"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","def44ddfa5bcaf92c33a914e376524f3"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","58de5523015b77a199f61da8554f5a76"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","14aaaa16c614fbf01387c01d08938d9e"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","5319ce2af64c667e9d07d358383fe3a9"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","bfb076860b6b437b08fdefb4b4162f18"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","4ff9f12aef8fcdb08cc1aa34258d61b0"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","dd60cc43224b5d51e130b43d5c04131f"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","25bd1aee6fa9e048b1dc9f5eb9c01ea7"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","6b996dd071b18e3e60eaa9763662d8dc"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e34191342250787043bfad20a43de293"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","0c8172f1bf920ae9b61df41af1961d29"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","c2bae1acd4990a2e63e18418b04f05fb"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","91cdc8e77561d9ef5efe99a00d3e688d"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","7d0056a31c0b339d84d166712ef009dc"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","1be0fce5aeddd91eba01a7bf0dcf8f68"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","bfe95d4eef10b115075746e57c5d03ed"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","e533929ffa1bbfb42ec84891484815a8"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","e83b14debd3dc7038050af3d65abffbc"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","58f710331fabbaf34f19355e65e1a32c"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","e4f1e4a93d38bbc2937d4de0676a1b82"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","75b3e6ff8b42d9b453373553ec4ea0bf"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","0c21b57fd8a9065dcaef23044cbfcc25"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","0156b8c4ebb32a63dc3843b57cdd3318"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","45f48871753308e53845be5e86772e1e"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","c5a44e3f7616f5d9681d920297889d8d"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f00b215b9508af183d88f928ac84315d"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","079bf322e7d7de14578837d5897d0d4e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","1f8a6fb68d6c5e0db969c55ecef09d61"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","829c5d7cf1123b46a84e93338b54ca3f"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","46bfdb0b6ac2fa74c05ad0df64bc459e"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1e2e6033b709870e3737e231c3fb035d"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","eab33fd127ad53ba51531aa9efd221c3"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","af8d247afd832019e29821dabda954d8"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","e9df59570fe61625885c6026149b858a"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","c1c9a2a1cf1167007b1d64b69a57308f"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","79732e3433daa059c18306c2af622071"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","1c20a092531004921dee92072dac18bd"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","a782f9f330b1f162001c398478df6e29"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","6c87353c36f9bda8ffe8048aa011b240"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","46afb84859bef517ccd030f03bce40ee"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","1bace6e90a743bf5de89ab15a93f74e2"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","a359140cbcd9050befa4aa06678dff4f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","b8d8f0d0e9a8224daa4195477d5e526e"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","95ee1e660187f84ae280b200f81dbf13"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","a8560058615ae81fe917051315656d87"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","727a6314bf26c0a094af8bb37a29e955"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","a28a7d66202e9ff7c60f97455f2b3755"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","7a30d9b91add74a35da8018dd5aa3d1f"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","aa25a7b886ab60ec6841a4520f2dc6ea"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","2d675eec49721a9a5edc071e1629d0df"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","edcc713dfad18f7e5b7af8afb50a9713"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","732be2ab841e164d61d7232467537cfd"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","ba50aab0e643991dc1818ab90ca20cc9"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","f288b5d85b39e3542df3fcee068c8146"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","0e5ad13594bb98f9d72bc6af3d4e6205"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","96c757b85d617fd8a1099dba067e2452"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","591ac5550a0f4a34436fc328ee0027fe"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","aa2126d7870d3c14aed870726333c030"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","82bf885622f5c32343fd7f8f4a8fc34d"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","3d687be288d7b8f4526360ffc40e4817"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","05c39e586976e7726ba08a8f935c3260"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","c20057469ff59a6938bccab9bdbbad51"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","690f5debf54ba9b30101c6080c956f4a"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","66354a2cddac84b543454cd5bcd1b191"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","3e0c400cccda8565b867c3b41d53f9b3"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","246ab24fc856230bc321ff382fcfe92f"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","b7a08c41cf91066ca4d8b13ecc6460e6"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","f110b273a88f5205b06572a3dfaaf745"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","84029a041598bfdd21a0019e40e62186"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","4d9cf9604ed4bbb0e62c53d542e51d90"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","4cc7ee4d4ceae90061b38e669a0cccbd"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","564db2431a33367aae844d8fbff76bd6"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","1e44015122999983996cd42399596992"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","39ea026422d3ba1fe872c735ad69e3f7"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","243b45928a4552c604e54a1940f1494c"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","5f38dd2afaf0f96017b11ec6c0af500d"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","e7c89d5095fae6bae416645d913d65f0"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","c1867cdeee63681dd6f11ba80c5ba30b"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","ade75320d1c6ffe3391ff19f8b703e56"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","2c48e865fc2959f51737d6a11c125a2f"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","25b71c47f0c1de051eac3772b90b26bb"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","138ba1bbb32d42ce164180872c08c4fc"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","7c5e366d86faa843bb310442a6075a14"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","79d66415c7a9bf4dfdeb74e2e926eab6"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","b29db7d5a3cec02b2d6386ca00013c00"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","a4b92bc519303a4a334a4d09ab3f9d9a"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","60e96ba4187e9ac06e3f6490cff2f025"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","52c41804bb5b85a8d8e8e9ed7a3ab0cf"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","592a2cec4186e2fc0302ac5943ddb0f3"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","27ca582c61d61724f710f38bcc9c2ad1"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","22b7a27145507c70fc89268f1bea8291"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","427d177c8d19d7e0c623b3b522623047"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","f900e71c85fc35e10e57256f18a1a1d5"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","c14d8bf082650bf58697b3907f772630"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","b572008608f4688a41e3ef82dd5a87b8"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","ffd23c4f7c212ef17d230aee1a1faa08"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","cc897a56ab99f9d9c41064da819e7918"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","e4b7f64d84dd10e565faa1988a272427"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","fe99f0f2a36bab42269ea66fc940d83f"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","dad28becb77fe1d0841d370d84af04cb"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","dd1e5e471a98c6bdfa701465e8053006"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","82c1e869413a722f7bf2e660640cd595"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","190bc0c9832add3c37cdbff06139b068"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","88187253350ab8936df92b10330341f9"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","760ee366e09122d201665973c41db251"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","d7e9adcd520cf561e7d3fad5ca356f7b"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","7ac8ff526ad5a6b2262a103d1ff31aef"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","f899495d44e187b30392e0b049b88dce"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","bc50d93b679157a4602036ff857f5c0d"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","1ca4f9d6277e433a40998708406c4eae"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","e51c89529c343e6b77eaa2782faf0d41"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","fa910ac6e35699d2075439dbe0c93585"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","5eb1ad73bb9a6c0405a07359fd6aab5d"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","9a23d2a4d737500fd86999402b826742"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","602a279d56de7e4bbd3002e69ed44dd8"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","2c23732236d9f8267399fda0e4fdd818"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","46ba6153e7c475f12088149402bf5298"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","cd495693966d4ff7015710b3cf48e3c0"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","a21ad77c9bc4d5964eb20d3cae8f208e"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","1bfa62fa9326117cbc4ada9003aca121"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","82dbaca7cca0a27ae57d78fc98319999"],["C:/lmislm.github.io/public/about/index.html","831de67d4f994d29c5943ec8439005a8"],["C:/lmislm.github.io/public/archives/2016/01/index.html","2f372e87475d90daf6012ef54b8e704e"],["C:/lmislm.github.io/public/archives/2016/03/index.html","40371fb96e3cbba9385a57dfcfdb3896"],["C:/lmislm.github.io/public/archives/2016/index.html","7efe8ad263ef1774f6dcc09a3f17b9a8"],["C:/lmislm.github.io/public/archives/2017/01/index.html","96571ccfeda6eaf0261d19586c4c5eba"],["C:/lmislm.github.io/public/archives/2017/03/index.html","4bcbab8f513de2e940695d9990006326"],["C:/lmislm.github.io/public/archives/2017/04/index.html","3b5d9e33ccd3b23d50a79417dbac90b4"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ea8b1a185d1d0868c8a0fa71c882d25d"],["C:/lmislm.github.io/public/archives/2017/07/index.html","4a673a2f5538f18a849973aae13186cd"],["C:/lmislm.github.io/public/archives/2017/index.html","113d549e03b3dfd3f352ad0562e77655"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","eb3c6cf592e97b1b74ee87cfc08ef3e2"],["C:/lmislm.github.io/public/archives/2018/01/index.html","29b5ee46ca0184cb0729be5ec04f1e60"],["C:/lmislm.github.io/public/archives/2018/03/index.html","ba7e1291524e795cc2ff009d30b89871"],["C:/lmislm.github.io/public/archives/2018/12/index.html","ea52f7fa171d6a210a035f1a2f757e98"],["C:/lmislm.github.io/public/archives/2018/index.html","8a71c62e81bdb07a80c7f23a02a5b2a5"],["C:/lmislm.github.io/public/archives/2019/01/index.html","2ce87a2f8724b308a46b2641fec84061"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","aa2f721f306d5bc8922deb04c9f44820"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","b0e77d6e3f4d49cbaef00bbd4f0eaa45"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","0752c3ab2e4fbf5da9d4ad4d930b2374"],["C:/lmislm.github.io/public/archives/2019/02/index.html","55140672e6571bc2798fdff95fa71da6"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","d8e5c6a957f7eabe15ca997100241315"],["C:/lmislm.github.io/public/archives/2019/03/index.html","16590f088de3732fb69632f14a72a0b4"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","ab8fbdd69a32cb575d850f3b86268bcc"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","dde9930d0ab5ca345d1176b6aff29aef"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","eaf462592588225144e91ebaec2ad8e3"],["C:/lmislm.github.io/public/archives/2019/04/index.html","8d97b5f57edecf8703dd4224d6031f44"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","ad8107f250f85cf76c4e908963dc4680"],["C:/lmislm.github.io/public/archives/2019/index.html","2ee11a669c0f93faaf0b96896d90a01c"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","1420d17d1ff04e6590c469a5acce765d"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","bc018697c4f152c6e3eb71344201c395"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","5ec0dde88f5c968344bfc7829d5b15dd"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","73723b21fa38418eff694efb5591e109"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","60ff45bf07486c5ac5e91f47fdaebc93"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","fb5dd399db3dbcb8b11174e2cc2022de"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","af68cd550ebbcd46dbc0f4be14018f5a"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","dfa1d1b35fa8fe128b70715eb58da121"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","e6fdd37fcee57fa3fd702c93637cdc4a"],["C:/lmislm.github.io/public/archives/index.html","4fa1f4a765b5fe8cb279090f3b607d75"],["C:/lmislm.github.io/public/archives/page/10/index.html","696ee30e8ebd21995bfb132af749135c"],["C:/lmislm.github.io/public/archives/page/11/index.html","7e5f87e4ef49d9bf386d8c3d15c5977e"],["C:/lmislm.github.io/public/archives/page/12/index.html","36346e2d955435148fa07d46bdeec58e"],["C:/lmislm.github.io/public/archives/page/13/index.html","97144004fa935d250abf439c6eea5f77"],["C:/lmislm.github.io/public/archives/page/2/index.html","4cc5cf8be26b873dfd2022e179c8c506"],["C:/lmislm.github.io/public/archives/page/3/index.html","0fe50b336474720537f20a3b69cb1e51"],["C:/lmislm.github.io/public/archives/page/4/index.html","ac5a5bd038d9f716687db11c5cb9e0d8"],["C:/lmislm.github.io/public/archives/page/5/index.html","d53f1e32e9ab0888df7fcf2bb3823b82"],["C:/lmislm.github.io/public/archives/page/6/index.html","14f7164ee4b9950ca86494a66c8aa185"],["C:/lmislm.github.io/public/archives/page/7/index.html","2b6e2d9702d3a7d05c747f07e2610b6f"],["C:/lmislm.github.io/public/archives/page/8/index.html","6128da21baa3d93f556a41a3e571edc1"],["C:/lmislm.github.io/public/archives/page/9/index.html","069912c791595056afdf1de3197335d3"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","865b9ea97073e17dc298dac94bd6f02c"],["C:/lmislm.github.io/public/categories/index.html","75c7dc5f2952a964344fd0623e57ee3a"],["C:/lmislm.github.io/public/categories/xx/index.html","270e9056ae74b115d368da61853df4dd"],["C:/lmislm.github.io/public/categories/学习/index.html","6fd0049c896b33a7af2c29d47a979c70"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","46a2fa36ba74b8a1a90a1ec04cec0081"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","f56d89ea2145f139756c4dab94ff1fac"],["C:/lmislm.github.io/public/categories/工作/index.html","5d5cf429d46b0a39582b85f87bcc6132"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","2e9ee10298e161e66705b84062f952e2"],["C:/lmislm.github.io/public/categories/技术/index.html","a8bf4bf4f437c3a1b237d7ff59bf4909"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","d2d8f83021b786638bca6509b426f952"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","9b6f895c32fd0d1ea9fa752e8dbd1f60"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","fffe48f4c8e99c63921c59f90ed24f19"],["C:/lmislm.github.io/public/categories/日常操作/index.html","8d29e7abf54087b9289725bf9bc0156f"],["C:/lmislm.github.io/public/categories/生活/index.html","bbb4e9400a25518b6469f56e416f1a74"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","ed5f79457c3d1e7132417cc2827982ea"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","00467883d261a684c8e815765c974514"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","d5c1cb33f1baf7c27988f46a2ebb37a9"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","1f4b61c22a73c2e789cd036940c98ef3"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","b49635e5d20e22cd4cd45018cc9319ca"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","7db2dae63033d03401e89a36da9de5f3"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","7b29c301991b4532bc6719b16c9d50b9"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","54a198c10faef8cfed04794404ebe726"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","b1a131c3cb147c667b2b92b122e14028"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","b42bcf773e46ae3eff2633fc084f30b5"],["C:/lmislm.github.io/public/page/11/index.html","1312058cfcf34dcb5d2c644760a3b6fa"],["C:/lmislm.github.io/public/page/12/index.html","add94d04b9a7c71b8c674546859d78cc"],["C:/lmislm.github.io/public/page/13/index.html","9f96b3caac351b2d48b0dfaa5022c7f4"],["C:/lmislm.github.io/public/page/2/index.html","59255c38b361fe20fc3be39d641e573e"],["C:/lmislm.github.io/public/page/3/index.html","34ae0564f45e1b7e8ee4e9ca7c8a9a94"],["C:/lmislm.github.io/public/page/4/index.html","844f9c799b757a909b9d8fdda783fcbd"],["C:/lmislm.github.io/public/page/5/index.html","eefafc826a7390493a6240b120514d82"],["C:/lmislm.github.io/public/page/6/index.html","d613eb79d16b18b617012125587bba00"],["C:/lmislm.github.io/public/page/7/index.html","99072b2dddafc1f45b4457ca18c24773"],["C:/lmislm.github.io/public/page/8/index.html","4cc67aa678fc49e70c51ee4f019ffa30"],["C:/lmislm.github.io/public/page/9/index.html","16651c75b4593f4609cdf0e9e19c3518"],["C:/lmislm.github.io/public/tags/Interview/index.html","af9de7602f37bac86e5263b89e254236"],["C:/lmislm.github.io/public/tags/JS/index.html","62affc516f3444d693cb40b6b09d7862"],["C:/lmislm.github.io/public/tags/acm/index.html","4ccacbb30db0d285910d209b38a231df"],["C:/lmislm.github.io/public/tags/c/index.html","84f0c0de81295ec2629d2ee4fd08b7c3"],["C:/lmislm.github.io/public/tags/codewars/index.html","1ed2807796209ba6f7861253a6f68ea6"],["C:/lmislm.github.io/public/tags/css/index.html","0a8e045dbd803f25c5f6117dc2bc4e14"],["C:/lmislm.github.io/public/tags/git/index.html","e07f39206a091fdc611f0c8da8215482"],["C:/lmislm.github.io/public/tags/hexo/index.html","7f23b5d743d96a7bed3268be85372f74"],["C:/lmislm.github.io/public/tags/index.html","3b87ddb5e3148b1d911784c16836a4af"],["C:/lmislm.github.io/public/tags/markdown/index.html","9f9549359aa260ae4f857ebff4cdf186"],["C:/lmislm.github.io/public/tags/poj/index.html","48e940d6fbc4cedb6f88beb67f7b61e1"],["C:/lmislm.github.io/public/tags/shell/index.html","a86cb518cdd6aae82622f48e01d6e2de"],["C:/lmislm.github.io/public/tags/vue/index.html","8b8f46d613c0f2de3ddb38487790dd48"],["C:/lmislm.github.io/public/tags/xx/index.html","d4bde58a9937459713dfbc815177becf"],["C:/lmislm.github.io/public/tags/前端/index.html","81fff461b4d4654ed6cd343123695749"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","910347a689f6357f5ef2da9513d4fb5f"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","007878df624208d6e29bbf35d52fddf9"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","2b24cf415e55788ebf19393b13f351d2"],["C:/lmislm.github.io/public/tags/小技巧/index.html","59cd0e8ffc347a5aa8a5bcaf33535171"],["C:/lmislm.github.io/public/tags/展示/index.html","8fc3820d2433df5cc1ed40cc7cdd0ec3"],["C:/lmislm.github.io/public/tags/工具/index.html","3fbe756efb82cd1db2fb0be07a2f1965"],["C:/lmislm.github.io/public/tags/感悟/index.html","f944585a71000cce832d17e0e8d079eb"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","61d8a0f7b15a186b20e5e09113ad2a3d"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","cba9287bc7325fb2149ef3689900b736"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","b43dea435c4632004c74464d5ef91a75"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","e3662fcf4f65ad2f9e62b4f65f43db82"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","5de1ab4d1f063fa074b38b0ebf37e9dc"],["C:/lmislm.github.io/public/tags/练习/index.html","5a0dcca42f3891a754e745c1d4851a8e"],["C:/lmislm.github.io/public/tags/编程/index.html","18958d8b156687b6be325ed8e0bb56ed"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","320fc569b00f2ecb8a4e4e6a1ef23a9d"],["C:/lmislm.github.io/public/tags/运维/index.html","da383e1fbc33cc509ae4aab1fe93305e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







