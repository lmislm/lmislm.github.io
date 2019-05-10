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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e4bde44d367d785decf8c63dd9b4b96d"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e0a10d53a8c8516a6796edc85888e23d"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","6912f39843d3a3f9f2dd324d2242afca"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","c03af7bcb24a184c7d81f64fbe600ecc"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","d2a4d2364746b7bc0796fedd16a081b7"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","02f479659621e404a9822c17da5f812c"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","36824e5bfc580e5c7f0bd3c8156e58be"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","d7bba3ffa35da0488b1136a3dfa5cd05"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","d61df0120e9f8e4942159bade9c58d30"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","938f82927e62afe41aa14bde11978a30"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7d9f5a524b203bb72af8f68c1cd68f58"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5ead35d30bbdf40752da74ed23459fde"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","147dc558adf155873ca1482bd5ee37d6"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","e37caebf799bdc2af987679711ab7d40"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","92a67e5fd731c008a2c5fecf67c7a314"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","e89ba27b07c5880f20876f5ec06a03a7"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","7a4839a06d970f344a72ac3b9e097986"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","aa4828d43102649cb121650b43bf5753"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","020f93ea6f75e5317f9a94bf2f281f4a"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","d4af36003f004e37d8e521e3524a85d2"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","0a880693384c6b8c54396135432d7300"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","7ab2bd87af590dd0abbf7359af2bafaf"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","f6c5c6f9410cec7ddcc243a18e372040"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","874b077749d930b4828238653287f638"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","8397fb1c2fd47ea46b0545c06fd6b757"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","a6c7785cd7d2725e9c080e05e5b6adca"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","50f122819647dc288f31145562e77436"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","98fb5e04229d16bf8ed1c1623cdaf378"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","1f9262e04ca81fe652be8729b4024bd2"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","084bbf82e05d0ad2c9b14fc61f54ceaf"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","97c9760e06c0c2f01649760959d2d8d5"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","6965287e2cda1706cf18012f230cdd77"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","a1a254ceb06204c169fb5f077c6067ef"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","35a0550af85f5bc7e7d46539d5a3ac73"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","ea068836d6d91c74ba8bacfff5964588"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","7f62844d2925ec6e0fb688b0e39deba1"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","c58d00f23d0d72c9467184536296649d"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","512d8e77059596baa78789bfbccfacc7"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","0572f0f205c9a3f2bd96380f6c09669f"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","41cdebe6c3b937ce80df90e88ea2abb4"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","de53d6643e70b24d1891860782b325e3"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","8be775af878039dac395061c0f843ae4"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","4ea08ae9509645d6b976b4197fd67426"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","0f825484612614afb1173347f88c72ab"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","7e0773f4aee795bd8a38e5c535111ad3"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","c04bf8a87a99bc60131064b236d6c0f3"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","fe6dbef16b416d22a0bc05d2df399745"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","0eb03a1b8ceccbe6c370d39f3d68ad4e"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","a0cc361777e09793760c574f17a36aef"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a57be22ce797f37fc0bc3c9474fe2f49"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","647d8fb9a1ca31d0ed0ae55e5d74ce12"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","426d5ca7178cfe4051a75311c9d6bd59"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","720578277e0863cd33271b787b763351"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","adcd69c6207339984e1b6bc573390394"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","13c826f893039732126495bcf737074b"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","af40030bdfc0587813b0a09d0bc4c099"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","ada9b2e74e388631aa087bb974ecd59e"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","a7c517405e686012806d12c859ca21bd"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","21d63e6484b78c3f049875f2477fd910"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","f58572783a24f1c05b9e5b8b32fcd0ac"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","2f4c237a15698c80e338c44a0c180340"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","ca53a04e8d9c0c6d43ca52a58caf0da6"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","cae5727c7633b7a23e58374aa28740bd"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","696528fd51d141e7c062cb281d286c90"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","cfbcc84d93966e6a5237327e565d5033"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","506e5f465a97c92d1fcf41f672fd14c6"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","4368d9ae97b86caf9ecfe72c1f00505f"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","025a4b76ab77a1bd836414def4234439"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","7ecabc68927ec4e395bb4456da12847f"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","55616ae737592d2dd47bfa102c8d1b52"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","97a51e61a796ef4cd1aa4ff98f4f3fa9"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","38e207ab166239ec77c1752e4ccf670f"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","7ea5c1b072d4e5fa20a1a508d76450ad"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","73aa3799252c01b558f5271c950c95e5"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","d8f343a477b53b593241285e5816b19f"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","6b8ce729f026d6ae444de5039a53e905"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","7c05ba801275c0598840c744318237ba"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","577e41c656a12da11d91bf3e8f8733ab"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","5e7b8bb390617e6b1ebe551d9a59cdf5"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","2c4ab1eafc4d413eba5ce0c8349a2538"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","f6eddb0ee22adebaa7ffa1bbf1663551"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","d4c162d3314d9eb6e6c65eb9451a99a0"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","228f8489a1fcdc2a749a7e7dde114845"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","481cd5dd8650c99705c6ae3ac1fe9e0e"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","dbe236ad16f24420042c6859b0714a03"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","c00d0d09f46d5645d89a693fbbbdcf74"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","89211476c181132adab5cf93d7f2c059"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","62a48ea19745a36c63e74b062bf1f891"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","e26c1c4d2647895500fa1e125b6dd8d4"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","0377e68bcbf84702477ca3cbc7fa12e8"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","744ae6eaa89250014e6de045ef46f9bd"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","92788776fb3ed0dae1e5965be27e4cd2"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","dccd12bf0f033aa7463f79d5e46caaca"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","45f411aa9d19174b1159ebd2d83eb89d"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","b05b71dcf46f6930090eda82d2dd6e3d"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","ded5c88ad9c074f7754f69031aca902d"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","a1279985356abfdd99072e70c98006a1"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","84e4c8ce381186650c48799ef6b086f9"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","1614220cda5aa6bd5fd1fd9ed127732f"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","6e15aaea3556503352cb10871f087020"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","1ad21ec8b52fbd2ec38e0209156b06e8"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","0476cef0ceec7684ffeec1538172556c"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","b21e1b7c7722745e9bc38f7b8add6acd"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","ca2689bd3704217bc7681a7aa20e3a31"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","c95cc40b6adfc519886ea4869e35eda4"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","b11f1cdfb053c61fb72c8d13ad4b23df"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","739408c488324dd320bc209fa802e304"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","91e0624b4ce548528baacd2557caeff9"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","78b18b945e30e61c40c3b0d9fa139ac0"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","99cf673df374ec45d661ccf79bce92cd"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","70e2b2f8aeea98118967d05eb30a4c18"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","5ceb1ac79466fcfdafdf3eac968c0188"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","d0dfb49d5a739ec9decf92ce5f594391"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","01b6d9a5e3467839f0eec04c81dc599f"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","b04570a84f1ec37628a36d2c21a98943"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","74d8a2cb05219f5c927be649ac8e8194"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","716c43654cb4f7eb3579a3569a40a9ab"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","3ba459a16350893d94da979320f52bbf"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","fb0ce636d0f00e970847e17b13f7d62d"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","4aa5d73afbb86af601d072adab94da9c"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","5551dcfe740a83ed64a88a7680cbb8d8"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","67dc3b3c3a258f52ce9bb6cf927bdb00"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","42d065e58d7a7b83b115f0ff0c3c990e"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","d31dd732eb39b1c794d23f0a9fc2d608"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","a20e75f7f8e7030b95a533845a8c8f00"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","96b041ee70a055aea4689e8c8cb4fdd0"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","f57e1460146860220ffa01a02658cae2"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","02caf86a2375879550c83f3acf7f76e3"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","e5ef11eca7ea9f6a0ae6d5250ece99b5"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","94bb213a064b35c7cc492fe470537b95"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","5a7886133b90cd7bb86b0ff1fd84bee6"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","62e3185441207a63ebe48225d3248f61"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","955f4f0ac38803a8098874cde5c93859"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","25971411de560439defcf62f751a7332"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","d0928cb42858ce596a275988b9b48bc6"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","1553d8fbb9cffad168db954a572303ce"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","cf53d00da29590c6af5a8241a9bda44d"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","6783ce97ccf44b7a30aa27cdab645741"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","8b428664857bbc98028f7d86fff79e39"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","620a7dd57ca4b45fe6a9663a6385d0c5"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","69815fc4445b83a58db35e94c12e4d1a"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","a9e85fb217be364d576b09358de31fce"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","f22bc2df68544a5393576b3e5102b39f"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","f3bd9681167df7d1a878fdb0a7003df8"],["C:/lmislm.github.io/public/about/index.html","3fcdae4c91a9b0d3a8fbebc42b2a173a"],["C:/lmislm.github.io/public/archives/2016/01/index.html","11930c963aae6d3c34e660b4d99479fc"],["C:/lmislm.github.io/public/archives/2016/03/index.html","eadb5ef42b70e37f3794bdffd6bffb51"],["C:/lmislm.github.io/public/archives/2016/index.html","6d0e4d47546add799fbcfcf7365f6be1"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e52800f86ca04668333e38853c4a619a"],["C:/lmislm.github.io/public/archives/2017/03/index.html","e2d00ade46772ad9e6de09da48946e85"],["C:/lmislm.github.io/public/archives/2017/04/index.html","37a458b0f18e56c703f809f9064a7391"],["C:/lmislm.github.io/public/archives/2017/05/index.html","42a3c95fe59bc9f59d61258b20d445f8"],["C:/lmislm.github.io/public/archives/2017/07/index.html","495e836a4db57fe0f9ff8366d7949452"],["C:/lmislm.github.io/public/archives/2017/index.html","06d989dce9be31e6749f8ec0ed95c7af"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","2b0bf5eff10378bcc356557ec7314093"],["C:/lmislm.github.io/public/archives/2018/01/index.html","bdd94a6d726da0a47bcc64ecd1506ff7"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f88c6cda88d5acc8c5ed10be4f2a6fa4"],["C:/lmislm.github.io/public/archives/2018/12/index.html","3a52994c98ecd7a65a59d755227ac2d7"],["C:/lmislm.github.io/public/archives/2018/index.html","71c6ebd7937c247ae2c01edfa029a825"],["C:/lmislm.github.io/public/archives/2019/01/index.html","fe7a891ebfcdb659b8c5881fb9a056d0"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","483f7f45938c86340ceb27149409b83c"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","cb82fd97ba7b5c9978f64c6b0435ad67"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","3d1a59622c4d47e381358a73a13f27cc"],["C:/lmislm.github.io/public/archives/2019/02/index.html","c4fcc23db4e0f793f36e7632beb74a3b"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","cd90faafedf71ecc529e64f91cb5deba"],["C:/lmislm.github.io/public/archives/2019/03/index.html","680b1da5723095e37e06a1f317fb0861"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","cdd4ddf4c69ec75c81fbda052ed0160f"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","92862876825931b82690e38e4ce71c7c"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","1704c1d912503650a4b98d259c96bff4"],["C:/lmislm.github.io/public/archives/2019/04/index.html","f63ab2c2760d3936be23bf1694e6c32d"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","da7ea97749df4878420601cf0a159cde"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","fa201c4527bd036d3c55b807bac94179"],["C:/lmislm.github.io/public/archives/2019/05/index.html","35be0ac355b1900d49c365b4c49477a9"],["C:/lmislm.github.io/public/archives/2019/index.html","6b0aad379a0d1293070179b02395e2aa"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","265e26961dc7cd3ead060d4bcbffeca4"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","258ead64971c270bdd7fbcdfac74b311"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","e6bef9f41334f1c2d4038bfda26ed08f"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","49120aead4d3a72d19b38193d7961f1c"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","f10cff99971f43b08590d0bf2e360efc"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","dbf3a30bdb95f08bc548383a4baa2c48"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","99213ad5dcd2d99db516115b99c1a50d"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","3393217e9e42f11b94d72585bc54ed89"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","6ab855d99d4b2aa5a664ebb58e3df990"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","6c1b2db13ebcde39e62721d9e247eac6"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","432df651fe5698b5d18b3ff76b912f4d"],["C:/lmislm.github.io/public/archives/index.html","9c9141a298ef3bd335c2a39e5ad93ed6"],["C:/lmislm.github.io/public/archives/page/10/index.html","904938599d00f697cdde274bc8893d3a"],["C:/lmislm.github.io/public/archives/page/11/index.html","9e5011305da26a83561e1f29338df8f0"],["C:/lmislm.github.io/public/archives/page/12/index.html","577470b2f3e7e1f4a87cb005201bdcf6"],["C:/lmislm.github.io/public/archives/page/13/index.html","b444ff73e2cbfbf3130990f04ccf37ba"],["C:/lmislm.github.io/public/archives/page/14/index.html","bafaa5bbbe31f34a296773be400b7933"],["C:/lmislm.github.io/public/archives/page/15/index.html","81aa1e3c93f07f1c93a00e0da02b6f12"],["C:/lmislm.github.io/public/archives/page/2/index.html","9f184e1361638b9d80d240cc9b74c777"],["C:/lmislm.github.io/public/archives/page/3/index.html","2882e43ead67382cdd3bce4e89cb9956"],["C:/lmislm.github.io/public/archives/page/4/index.html","9ed48cdd4484c41dd63b13ea2f0c4adc"],["C:/lmislm.github.io/public/archives/page/5/index.html","d01e51cfd9e544ba82bdf432bfb66153"],["C:/lmislm.github.io/public/archives/page/6/index.html","2429c2c3a18e08ad3fb7152ab8ba9573"],["C:/lmislm.github.io/public/archives/page/7/index.html","13bd133be2d202822ac9595e6aa8294a"],["C:/lmislm.github.io/public/archives/page/8/index.html","b672688007009b41c6755f2130c9ee49"],["C:/lmislm.github.io/public/archives/page/9/index.html","40bca2ec09d0043b784215d46917f9c7"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","b80347dafe53d4a970c51b2b2a5a7e0b"],["C:/lmislm.github.io/public/categories/index.html","e592b348b05dec193d6e4895dddd0b57"],["C:/lmislm.github.io/public/categories/xx/index.html","1db714caa3b7539b0103ff4bb9c027de"],["C:/lmislm.github.io/public/categories/学习/index.html","64118f11af27a4f76a76f74e8b313a31"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","defb6398f26d43356ffc61f9112a308e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","209edfd693e9badb724581db4f1cb4a8"],["C:/lmislm.github.io/public/categories/工作/index.html","a69790cc0ea1a62fc94c48e160a5a8fb"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","f5c3ed31a79abddd3170bf679f5cb6d0"],["C:/lmislm.github.io/public/categories/技术/index.html","f6b7863f4d682be5938e2e54874b5d54"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","8763accba96601fa47c8763167b664d6"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","94bec19e743bb4628aaaad6a10488150"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","db7ebdef97193d9b447ab274fa2b853a"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","e46d79787a03aade794a0569b7609f21"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","3d85373047f9fc5f37108f69bde1a8a8"],["C:/lmislm.github.io/public/categories/日常操作/index.html","165ea1dac7d51ef39122efb690f9b9fb"],["C:/lmislm.github.io/public/categories/生活/index.html","6fb034fbbbf123da5fa54482592b9c3a"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","c82bd5c73c412534f57355baef3ed27a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","b77b53128d3e8928c5b773b46f3cf18d"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","e773051a960b0b7b73e2fab475593314"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","627b15d595120be23350562be6507433"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","cc092d8b9ca6d3a4297b2303b83ef81e"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","654de0510a7900cf435a93ba240de8c4"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","e96471ccbb852be64327e7e5353ca48d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","6e621bed26010675c82a347d7aae47eb"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","4f4e3744fa9205f8df32d3ed8b3e0b33"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","8f497cffab695fa2bd9c2cdfab95a3fb"],["C:/lmislm.github.io/public/page/11/index.html","1994c6bf3849e4a0bea43e3d5e8eae00"],["C:/lmislm.github.io/public/page/12/index.html","bab98951fc32cc16e82ca678d6eaab44"],["C:/lmislm.github.io/public/page/13/index.html","b921d884c910aa9d68e9df03a056a887"],["C:/lmislm.github.io/public/page/14/index.html","bca0e83b76d665fe89aa1eaefb522e5d"],["C:/lmislm.github.io/public/page/15/index.html","c86e3ff6738ac8d9c43d36bb07eeb451"],["C:/lmislm.github.io/public/page/2/index.html","ad1492e2e791d9114b04bac64cba9eb6"],["C:/lmislm.github.io/public/page/3/index.html","ac67d351c71dd8f0c76bb94c4864670b"],["C:/lmislm.github.io/public/page/4/index.html","f3fca928dcb88ea34de66f1f85a8ea3f"],["C:/lmislm.github.io/public/page/5/index.html","71af54d37cc27201e60f000d44068fc8"],["C:/lmislm.github.io/public/page/6/index.html","1a220331ef4abebfbfb1b40bbb0b78bd"],["C:/lmislm.github.io/public/page/7/index.html","f4a558a645cef55cb04655e0922c183a"],["C:/lmislm.github.io/public/page/8/index.html","f994ebd581b4312b5415b1c51412ce8e"],["C:/lmislm.github.io/public/page/9/index.html","9a27ed99a81f25877e10d7da32c87def"],["C:/lmislm.github.io/public/tags/Interview/index.html","00029d895111aed52908090953be4f19"],["C:/lmislm.github.io/public/tags/JS/index.html","ec0e26161507cd67a8f8673cddb32d85"],["C:/lmislm.github.io/public/tags/acm/index.html","b16b47b1e139ead93a00678140caa9b9"],["C:/lmislm.github.io/public/tags/c/index.html","92ee9e2cef24b99f4e44775c4760ca70"],["C:/lmislm.github.io/public/tags/codewars/index.html","503abf755a264b3652f57e27c322322f"],["C:/lmislm.github.io/public/tags/css/index.html","fec0607a8c21e23d956bc2b15471f31e"],["C:/lmislm.github.io/public/tags/git/index.html","9ef4248768b31e45901e878a3037903b"],["C:/lmislm.github.io/public/tags/hexo/index.html","969f844c278a7153e47931c84ad19636"],["C:/lmislm.github.io/public/tags/index.html","4319ed31f6dda455e66acf3ea853765f"],["C:/lmislm.github.io/public/tags/markdown/index.html","0a9227fbf91eb47de7ed516e7d84f5d3"],["C:/lmislm.github.io/public/tags/poj/index.html","a85972ae43a89352e4f5044ec5881210"],["C:/lmislm.github.io/public/tags/shell/index.html","e8fc5c961ae364503fcba499f553574b"],["C:/lmislm.github.io/public/tags/vue/index.html","73fe3b9e27ad0ee406ff8c37b8ec9c30"],["C:/lmislm.github.io/public/tags/xx/index.html","27d171e1355f34baba77b8be2fe56e9e"],["C:/lmislm.github.io/public/tags/前端/index.html","d8e2391ad2624014753911ea880a030e"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","137b026c1f5d6ab4dec3f3ca7f3c2839"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","a6bfca13f330a2da770025e92dd13008"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","6b48a72efb96081a4aceb0472b731b76"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","4a460e74b7462cfddd46f0b927dac261"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","95341c8322fb19d9a38113bde050bf6c"],["C:/lmislm.github.io/public/tags/小技巧/index.html","7bdedf3233c8a93279a9a85201891c1f"],["C:/lmislm.github.io/public/tags/展示/index.html","160b769b22855f5e08d55d0d98dba4bb"],["C:/lmislm.github.io/public/tags/工具/index.html","f0aa83eb67503643fa4a5e1cf4701d3c"],["C:/lmislm.github.io/public/tags/感悟/index.html","1256b82993a73e4e0237911be8a673a4"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","0bcaead106ef481f93a2a5a4fb36bffe"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","f0997294ef7875fa2766823cf6ee6ca7"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","8447811f12ae0e4fb31d6a11df3107b5"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","eb9e5795ac9399f00bebbdaceb98ca9a"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","b0529da79635cf5ed15d4eb7b3b6c613"],["C:/lmislm.github.io/public/tags/练习/index.html","2d37c06aa0303e324047fbc4920fcb83"],["C:/lmislm.github.io/public/tags/编程/index.html","0885c25792bdf67da68cabfd522b9343"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","8692eb865e7e296ebdce12a860e21737"],["C:/lmislm.github.io/public/tags/运维/index.html","799d1bddf7bada071500ddbd7d79ddc9"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







