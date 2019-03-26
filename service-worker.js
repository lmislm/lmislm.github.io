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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","50f891313cb41ee9f9d16eddcd513cba"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","2dcb03a1ae0a11b80bd1d5c4dd06dd52"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b6b48d7e5e32f602559d4b44cbd16edb"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","763df2067ef89c49ebb9aa78eb3ea893"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","507b9391f641643f35e8e637e1dead46"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","4f9789debe943276f5bdc84fa2378ae3"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","dcb7d5328ac15d71bf1be76b33ef9b5b"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","795e8a1464f143fc3ba9947839947f4a"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","715ada4c3bc902d07873025341d0784a"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","5126fe082ae3562ffc5059758ed1d75a"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","6842251c935c97446e24a317f9b8f403"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","227a0b484169e0256aa6fe2803d23f38"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","1498248d98084f329b6b5ae060eef4ed"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8983fc56d61448cb29f35e2be310ceba"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","0f38f47c3bb72871ad35fdfc28077d4f"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","c502efab9b0dad4bb9e3840b8126d67f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","113ca8b84b8dfa3c91b3ce95db4c5dff"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","0b69aaf49e86e53ddf8d1134643a5f18"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","b465ce971f0bedaee7748e18dd241bf8"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","c31307cf194e3f674964010dfac9b9df"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","3969d9af8468fc3274f844e6b9e8e069"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","e56875434197d7eb77313e8f5950ab5b"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ecfe4fb0128598293cffa0fdffed2345"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","a929a76e4d56adaeb3ec05cb1252d404"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","74ebd2a8592e633e03198893a6b6672a"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","cfc1e49e705eaf19f5975834c93a5527"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","c7f1cc6f7348ef988006083c9ce4544f"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","d0c61047c7c146c1d8ac5219459310ee"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","2b4d088426454c53baaee64fdba7aaef"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","7e94dbb583c56941e9a4c85177d33f22"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","82cf3bc27bda76f80f0e99699e139a9a"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","d8cb4461334a4ee272b5b5811e02eed3"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3ff5e6e05cc36d78bbae66ec17f78dba"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","3fc0e772527e2c28e300faf97b4552b4"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","3ac216cf5c4790f71f6e9a08c1dd109d"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","0f3f678c6a74ab048d6849d34a668278"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","f37c32f0772dfe69aaa98031969f8738"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","caef435e60342fffc62948e359ea504b"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","693edbc787220b95483603903dc5de03"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","801b93b26a6fadfbf53d43d985b4eb97"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","22e90935beb40f28ac181d1a70efd091"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","41136786739743d750d4708ecaabef10"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","51981f53c3386e2182c3fd2c20730c02"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","647dc87fae1a339120509f3ac8074c4d"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","168e9b75e6bbccb10bb960cfff58379a"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","763e1d1a702d3efae57e0693ccd978b0"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","2ecbcd61a4c0c2c06961a37ac0845536"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","9d975bd8fd465c0113d07f324fd3c2c5"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","7655a1252c30a0c1a1cff7d69d8aa34d"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f5c89131ef39ec1ba46a4557014f7257"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","5fe0b75fa97984143073dcd063f485d1"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","c12e874a8566b2290a0406a44ba990d8"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","491afc9868ae588596313074736b9981"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","c4854d7f6b444cc72153186c408f2c53"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","0e1c1d487719f1bf497e25d622742eec"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","f2d9c0e70f35f6daeb62f9396da28011"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","638b0c8c00edad7a64406d8d76535266"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","e9560abdec1a30b5f90cb47b8361fb82"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","55f4d10f58c95af6d73cb2dc1867cd15"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","c1a13653b8fcf5184bd203921856af09"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","856789cdc712492e130e27650041edfc"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","b94a8523f237252f2938abb0704af2e4"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","9ddccef4dd96d2ab8ae89fa507b66143"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","01ed53041bbbcde079877c5c8fe09058"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","fcfcea8634e065e155ecfba2f693f7bc"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","f34a8ca0852ee92342d060b4ee3dfd07"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","19da91d9a5a90937bb370e4b48ec2940"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","c2a65cef0d01f70106942f3a74f2e665"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","952fdb8aa14ba1814e98884a92d545f0"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","980dec1749c5747d5ec56d8dd378ae2a"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","9c20f99a912248f8d78ca7f8ea6e9bd3"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","7f1e5ebc10a6d60aea9719fa284a6a1f"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","daaf8e1fcb998ae4568a54872592d698"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","821a2babad3461588c9487eaeee5e3fe"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","41b8660b95ee8734506855f8493d9f92"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","ae2e33ec8c9d931074c52b8d1f332773"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","e12854df9c9a34e8cd525fd39f2dfbeb"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","1238aa7598bee2867bf0c42a70ffb768"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","b828a9d877f8bdfc66e9145456fd0bec"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","efb0aed833ac58b54bd7483c5118acbc"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","3bd95c6bd4bf4c6bf174bafb49db11b4"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","f62b474af168d1a4468f66b7d3dbf725"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","804d0a0140c3e100c5e4f87aab456099"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","52b3e86d09498541e9bd579ddfa5d011"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","0948dee19bc2b614ef8c2a892c984662"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","a5b8bba316e28a22178c10addb2fb0e6"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","85a83485bbb8d63a225423bdcbb06c00"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","6f838d5754a6ee3148a8a0784aacf184"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","89c8cdd0abb21bdb421d5f54fb5ee9ce"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","a84c430f76b0c40585f14e489f514d0c"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","7eeb48158e18f934f36c7688f4238ac4"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","1c7c9d3d06853a6e02731595a1c19adc"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","82a12c4be5cff80eca2163858a8731c6"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","1a4fe83e18d279d6f6f56be116cdbb59"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","0e1b41d73fe34570b1b02e161e053442"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","55037de2f70f5aa3257d6c99d784d132"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","78bcb098287d6425a768690cfa215686"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","48ecc06223657b9a68287244ce1d6361"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","7b6e39ccc343049e76e3fc05247c1cea"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","28e2455659ffb7e1b07bc0d89bfbf971"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","f69beaee4097a366464a3986042042c2"],["C:/lmislm.github.io/public/about/index.html","7028aff6ca7d10950cb6eb0166edd389"],["C:/lmislm.github.io/public/archives/2016/01/index.html","099142cc6d8e581846510c5e452d1eb5"],["C:/lmislm.github.io/public/archives/2016/03/index.html","57f4fc9c9fd267bdbae4a477d58ba140"],["C:/lmislm.github.io/public/archives/2016/index.html","bc590c6c7509af43c07b083b2d909e15"],["C:/lmislm.github.io/public/archives/2017/01/index.html","7cc360dc19fbc3cca27cccf3a12aea43"],["C:/lmislm.github.io/public/archives/2017/03/index.html","84d970cb1a68ef05fddc4349dc1e6e0e"],["C:/lmislm.github.io/public/archives/2017/04/index.html","394fdefc267dbd663d7b15482dcd4be9"],["C:/lmislm.github.io/public/archives/2017/05/index.html","5f2b91f000a392827e9b13a779968e48"],["C:/lmislm.github.io/public/archives/2017/07/index.html","10daf7852d46415677fed954f051a24c"],["C:/lmislm.github.io/public/archives/2017/index.html","cb1d187d754d5b3d919d1a399cd1c9c3"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","0963c1885f2e4a2981914a4e02b71275"],["C:/lmislm.github.io/public/archives/2018/01/index.html","5fe469fe56e75c8244bcb18470457977"],["C:/lmislm.github.io/public/archives/2018/03/index.html","621f42deece709f4bcc153cf372e6a9b"],["C:/lmislm.github.io/public/archives/2018/12/index.html","3b894e620f475cba86598a344dbd278f"],["C:/lmislm.github.io/public/archives/2018/index.html","d8abc96dc5c6dcc93ca620cf730cd24f"],["C:/lmislm.github.io/public/archives/2019/01/index.html","7fe7a8648fc29354bf2927d24e0ad0f2"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","7d385bd5fa4bc1734eb86856fcc37fcd"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","95c119319fa0a694a0debe07ac6a0be7"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","0ef83478db2085a2ec6e0cf637d5a37f"],["C:/lmislm.github.io/public/archives/2019/02/index.html","707954bae6cda0f13c645a83e18d7b2f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","e77f8d37a9d04f251c42c2187b926a9c"],["C:/lmislm.github.io/public/archives/2019/03/index.html","aae8f7ed51004d4f58e4f23a8e3edbc0"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","5829606b59d3c13763e98626ab787904"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","bfe03885b6de001a8ebfae159e97f4be"],["C:/lmislm.github.io/public/archives/2019/index.html","21aa6f02c48c1c9118365c96463bfadc"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","67e4fae2ac0b0e0d18b6ed6774af0201"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","8dc80fc921fbeee1371e8f267a7ff3d5"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","af77942b84a815f959efc8aea0fe3de6"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","b61944ab3c7aa734a467d6c458c52b0c"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","c6994be5b1609dd132438f3815ff61ea"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","965398b78fb85e809e6fdec15d80caf4"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","af904e7ebc5fccec4799f8bb0a33ddc5"],["C:/lmislm.github.io/public/archives/index.html","cf522782a7823becaab4d10286bae301"],["C:/lmislm.github.io/public/archives/page/10/index.html","890d50cb931078ae6be29c1a361d694d"],["C:/lmislm.github.io/public/archives/page/11/index.html","28d489dcf3d11140e7a96c538f51d6e8"],["C:/lmislm.github.io/public/archives/page/2/index.html","d722ce00a50f07f84467a670c0f2e832"],["C:/lmislm.github.io/public/archives/page/3/index.html","7552d1aeaf654c25aed0272bc7d7f819"],["C:/lmislm.github.io/public/archives/page/4/index.html","72746b02a98275aa0717f776a6ec746e"],["C:/lmislm.github.io/public/archives/page/5/index.html","59655378e2c177fa67f6599090df63c8"],["C:/lmislm.github.io/public/archives/page/6/index.html","0a705fba77d59bf9766b4d3a18b641aa"],["C:/lmislm.github.io/public/archives/page/7/index.html","bceca7ca6b8ebd43cdbd0ea96de6aed0"],["C:/lmislm.github.io/public/archives/page/8/index.html","62a92b98904b13d20d6d8d9fff621e29"],["C:/lmislm.github.io/public/archives/page/9/index.html","43851b9408028acf8221d16585f5a431"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","fcfa10d9cb846c2e9f53b2f9e5cb7298"],["C:/lmislm.github.io/public/categories/index.html","9eba02f163cc767b955cbd704bc932f0"],["C:/lmislm.github.io/public/categories/xx/index.html","218992a4c2a34426e4adf3af366bdfd3"],["C:/lmislm.github.io/public/categories/学习/index.html","f1e72af6b88fa2e0d8b6a9d05e8831b9"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","70b43cb79602e42a3d02e8c13ab5efdd"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","7507bcdf8ed0f280a64de1e657ad4edd"],["C:/lmislm.github.io/public/categories/工作/index.html","82ac912f92077212d8b60bbde1805848"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","470d1b7fed0867868fce90a7f1cdfc9e"],["C:/lmislm.github.io/public/categories/技术/index.html","521c3831e708b8c75fbeb2a6a845f701"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","247cc6b6dcd9310cbf13ba0f8bb3f20a"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","dfe1d7406ad2eeb90fe05d35461c8ff9"],["C:/lmislm.github.io/public/categories/日常操作/index.html","f3eb1f951907a01952b23eb703b724a4"],["C:/lmislm.github.io/public/categories/生活/index.html","87de73476e8bbeccbba6a367665615d1"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","6c581c0220ef37c76d05fc5fc750e487"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","a86258264d054872013ab8f198c8b987"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","97ad9ceefbab98513e54f7e315fc12bb"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","0879d5ca9409875778ebd60b1a9aa135"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","501121d42652b3f9909a25c283749448"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","6b6a88e7bccf452c187f7c84178c1f64"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","06d97ca0703a74835a4c2209c77ca6cf"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","bbb567681182e4e3d1ba6a6b14c52ad7"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","232da2266f8b13600011cf42a1952f26"],["C:/lmislm.github.io/public/page/11/index.html","1c0dc12c1d9c2cf5b9e2999eb92c2e49"],["C:/lmislm.github.io/public/page/2/index.html","e774ad11368f9ab060845d9f418c7181"],["C:/lmislm.github.io/public/page/3/index.html","213aacc01a00d9400b5188bb5e7939cb"],["C:/lmislm.github.io/public/page/4/index.html","31dfbb5c7719cbd93a9a5a4d06d1e7e4"],["C:/lmislm.github.io/public/page/5/index.html","ab34307117a17e94be1d29db41520c7a"],["C:/lmislm.github.io/public/page/6/index.html","ba8ef395b09d420bc40115fd3233bc45"],["C:/lmislm.github.io/public/page/7/index.html","29cbcc87f45f39c6d269e04980c0ad5f"],["C:/lmislm.github.io/public/page/8/index.html","f3d92a7ac90b348596ed2b19d26b56fb"],["C:/lmislm.github.io/public/page/9/index.html","dc3d145c0c6ec1c5da4d9025b64735ea"],["C:/lmislm.github.io/public/tags/Interview/index.html","8eacbf30d1593ca0d4743f3859f86700"],["C:/lmislm.github.io/public/tags/JS/index.html","5606b47056100c0a817ef10f56ad7b8f"],["C:/lmislm.github.io/public/tags/acm/index.html","f6f7b6ae5283c7f028c461b8565d90db"],["C:/lmislm.github.io/public/tags/c/index.html","e0e0787b048f8e6254d8ce932034ac9e"],["C:/lmislm.github.io/public/tags/codewars/index.html","598f06f3e06028a464a2d16a796f311a"],["C:/lmislm.github.io/public/tags/css/index.html","c55c684b3f7168799cd5ed0169d227d4"],["C:/lmislm.github.io/public/tags/git/index.html","69f9ba5d07fc82ce115e52a986755141"],["C:/lmislm.github.io/public/tags/hexo/index.html","acdcc836a72bf9dd038349534c166f4b"],["C:/lmislm.github.io/public/tags/index.html","a760b1d008ac0e6556ebc7badc76832f"],["C:/lmislm.github.io/public/tags/markdown/index.html","747d8fae8cdc10ca47842aed501b7bf0"],["C:/lmislm.github.io/public/tags/poj/index.html","2e31fde77a71c2a5956641b3a29bd78e"],["C:/lmislm.github.io/public/tags/shell/index.html","ebc33acce688a798007698dceb56183b"],["C:/lmislm.github.io/public/tags/vue/index.html","ec3150caeee427057906b891f877f04f"],["C:/lmislm.github.io/public/tags/xx/index.html","5d63b8b2b3139cb883b5b11050a0cf28"],["C:/lmislm.github.io/public/tags/前端/index.html","b2c09e5b54f52dd787bca454c2f4e2d0"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","a59ed6279c5a0741899063888caa6622"],["C:/lmislm.github.io/public/tags/小技巧/index.html","049551705b5469171b9d899dce74cf81"],["C:/lmislm.github.io/public/tags/展示/index.html","a64213802be3403f86194f90eededd21"],["C:/lmislm.github.io/public/tags/工具/index.html","682f0354116f2d0244fa6e0a536e15ea"],["C:/lmislm.github.io/public/tags/感悟/index.html","71899ed0a1258da68fe5f4529689cc4d"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","afa762ca0027ee186ba5d183767ce51e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","c2751d9b6b4e82b4715a53b49bf04692"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","40cd13dc2f7153ba5bfe5222746c71a3"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","682d21d748ab0d7158ccbabad626dc40"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","cc0a907fab53daa1dcb3c1d77bddb712"],["C:/lmislm.github.io/public/tags/练习/index.html","909dcd7d3e4cf809bfd650206006a2c5"],["C:/lmislm.github.io/public/tags/编程/index.html","b7bb795e47f317346e9ccad88be2e505"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","feb92dd9482919c1226b1876eccbf243"],["C:/lmislm.github.io/public/tags/运维/index.html","962eeb1148ce7f064dd0a54e9ab87e79"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







