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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","3b67ca3757c7b651d598f0aafe313cc9"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","06b023dbf133a156f5f0f59d8c40771a"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b76bcd6a6244c698c26f601b4e06c8f7"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","b79dbc15f77c3d7ed114c7233bc9bc5a"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","aa30a9d088e3809a2d2d3dfbe34e1281"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","09439d6e2f6ed8313deb4ff0e1b1bd45"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","5b402a7e4dd159a19ca685bb84ab23c2"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","3c1851601e7f27403a44b47fd4c82452"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","29d8e3af5b814aa4d18f86c2e64d4108"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","ab5ff4aa15ae1bc3fb2df3e8a131ef81"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7daa44a0ea7ca3d50aa122a7d6a5c87f"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","2f5fe094c69bb33e3847e4190ca0476b"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","b210409c5f4f5aa37771cf22d6ca5a1b"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","75c74eef93586360534338260d37632f"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","4f93958c927b4e8641e47ad0be4e7523"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","82f0f91d802af2443a49c0a86debe319"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","c11011d32e8063870bb2547190c43130"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","a5c1af27d4974ea8645a2c0dabad417e"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","f52fcb18ed4452434bd24e7524e36e81"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","12b6ba08c9648d8b0739c5b2ed3c923b"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","1d87cd860ead66e47c122167f5d69c71"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","8edf6e3f723871fde8e135e36eb0250d"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","bd933ee1b8a4681e845679d6624afe22"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","29507fe90b9bde1fdf578e5280b19b29"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","bbc62659cd7135e3c710e820f08f613c"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d4a089e34a4da696118c0c23572ce596"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","efdde42aac16ee6d26e0e984b4f5571e"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","efc55062a48b66d424e0a33e9bf22b20"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","b00f748160ae5e908ddd40422b510834"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","5af8721f690639ba18ebce45dd2595a8"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","a894c57398a813c176bb5abddf456f96"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","309b6c791300609f6f4213c9ede87103"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f7dc2baa27ba83c79e3f66d70976add8"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","ff8de0086edf23ff206e996b949d0751"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","0ad63af1e0b3f2bba7fec9288c567376"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","48585090c5863b0d10584655aa870948"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","d81d3cf935585135a279a028e8e72e12"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","5f31f23fc39e8836417c10c472208684"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","2cc0f9e19a4158c2ffbfeb70944e3415"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","d90fd06117ac2a4565a28176b7dc78f7"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","73b7b6a1f6604dea97e24483dd64dd76"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","f0d670651d08609d88acb97d217a1bbc"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","51bc4ddf3e186f5b861a07b2e7c78591"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","44c274545d1e270504f4c9066480c0d4"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","0ab0fb93b944a87fee4d3cc6f8439c03"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","d239a1eaf40f26be407a22829ab8c633"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","e028c67845c6790398f2c0609b68516d"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","b81b8b4081d2499aaf27747e3dd6d411"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","7a3cbc447e1b19ac60452761f9e678ba"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","78232dad95ce23fd23936846b5bd29ab"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","cae7679c4b1d3cc862a439ba08c0cddc"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","e90261b23897ef8654fa34e36b379803"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","b4d2e5e43753b06c6eba17cce02e3b6e"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","6328058092bf0369290fb1260b6bb1d7"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","d458a4bf8b9fdd8a9907eadc368ff7c5"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","c8e945cd39a419fe008bd66d3d0728ff"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","f50801ad2c80d3665db79151bf9611c9"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","b9cce3405ad80d06acda542dc40d8df3"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","d0c496cb6073212bb16eb9b99a3774c9"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","6bf05010566cae1345840d88c872d195"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","59be4ae71f6c908b9dfe67e51d494b53"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","650b336eba8684c18c1194b406b2fb72"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","815003207ac01be32b35b1a1b0ac19c8"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","11f5526bc238a70bfd3e16167556bade"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","78185a2b22c9ebc3e87a7daf7f05d4c3"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","58efe64e8f99b8769c2ee170b9ac9c9e"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","3d81f5a73e83535ae29e5e0a534e5725"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","162c2f7619d24626043b5b2fcd5901f8"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","4bdfdff75ff8e9a9276a85199f04d9f2"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","0bed491a05f081075a4b302b36c525f2"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","5bd7f8927304db6c6349baafb5082fc9"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","3c74815e8ad48e3eea65fa6ae292c4de"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","f88b5e0be1672dd7d71c42ba52307f3a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","150c4b3d3c1235ea699df1497d7238e1"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","72c0df174c7c8120cc41b67c923d2db6"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","0f37c547e517896f8d904982f9a584fc"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","520c2bec7c24bc4e970a9c051f902a06"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","ecba3e6c9a867b833b1d9cbb51e90ed3"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","f09731ecaeeef374c96d6e79408e80a8"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","7c4d62f39230d9e09a81478b1e06676c"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","39e0e62c53729a300831c2ddbec76a35"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","0cea8dc5d4232b82217029e63ed9e207"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","53f0eece7acb4ca596cca2e3d7c6073b"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","c10638d256dc0aa68f5ee4d863fca712"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","5c7d4e4aa15e8c47e87652663e8853ca"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","458f143253582a8740d0b18ddcbf932e"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","5d24178ad5349164a8a7f8cca2b8b91b"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","267bc6d6c1e2a228d2cd55e94a99c9bf"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","62780f96cf4f86318feb8d3f5560188b"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","25d82d123f5d3060fdf23382312bb4ed"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","12b3dcddf4adf9d832aa5004539f19a4"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","7fbe50cf45db5ca8b24cd3035e0a5aff"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","fc3085232882a0962e36eac4b9f28033"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","1f857e1f3b7d44f8e6f7b67716eb4505"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","e2cb09ee82d46f53c8b867eaf40c4d1d"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","c6b064115976d6c03bf8e0822e1de7f7"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","6e77b4cc348e9d5f69d1bf584ed1566f"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","03f0bd5add9df144517ac6a2d0243f59"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","8315e3ed81ecbc1846388948e22540c1"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","a2c489bf206bda718f27afbe980aa919"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","a7bf20e9cd4068d9c1fa85f481fe0eef"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","df4b53814e69901af9e3ca50937f7761"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","53ff94f7e3ae556a08abab508dc48a86"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","bd60f88e350d6a7d0db2559404d4ee6b"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","3dcbb524d7293f0be3d0b3e993fa91ab"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","596c6d9e77e380d31582ab1033cedae0"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","1c8130ea1a2970d2a2b3be40dc4df5bc"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","e6fe6b4cbaf3501cfda683592685b571"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","86173bf0babd544177d27897470b4a9b"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","1ab2ede24b24fa2fd79dc7ebb6ee85ba"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","172e749bdbb6a83219ed955e4057e2f7"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","99b277e5e77150b9aed6aa42e9079f4b"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","e0bb519542e5e24033965f294f62ad74"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","fba404509c5897122183aea55cbe6fbb"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","9e7aa740a5dfb146343e1db2172d7eeb"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","c658d67f5f1703eefe24c9a7483a9df0"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","c1951e19d2679b6b3de9392a84b2b6b4"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","578e1461e637b315a3a6801bb3b6ed01"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","80483ac1b3347011a4ffedbc3679124c"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","9073cbfd69467338b145bc0ed6d0fcb6"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","6b92eaeaf51836c3556cf7010404deae"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","35a8ed97ef4fd99767309468e44053d8"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","fbea916b1862682b716dfdb077ec1f80"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","2e6739b12666875e8edaf87965cdef9b"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","e99f2b888f4ec36529f82a7cd26747ea"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","a185358594eca858a201060a30c83024"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","b54a1a2c8c637b221dbb3e015b7d3698"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","d0f5fd3774931249deaa3d426ec64fe3"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","a0b173ba8eda13c95dbcd2a8d5b4b14b"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","3865bcaeb92925c8f60d53c935ea7521"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","d7995d763fed3789d85e9fb0a019843e"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","d2a49d6dce1969c67307f6001e4fd9db"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","4a562ee9ef37b4b1ed04a5b2e40b04ed"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","91244f927b8e2c83b5a56d8da41151c1"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","fe08d4d06f60b88e663b8a1af532461c"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","ab872855022645936aa623fca4dbe7e5"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","a7c5637ef4ef838d8ce93b34b8e0cded"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","74905292785bcbbcfdb939a6fb029af5"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","bc7ce6fe01daf2c7b5a8eb8d5de9b28b"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","5ac78fdf70aff441c24191a04a438ff5"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","77f9551902f05020a7990c765074d95e"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","cffa760c14a953973bde9f0f0bcd7290"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","fee767182b89474fe10d9f2d528e58a5"],["C:/lmislm.github.io/public/about/index.html","18a197c3532df51f40987637073b0e5d"],["C:/lmislm.github.io/public/archives/2016/01/index.html","f53341352bb7690811b9a48d18b0b6db"],["C:/lmislm.github.io/public/archives/2016/03/index.html","10ef9df75901e7fb84eff160750917e8"],["C:/lmislm.github.io/public/archives/2016/index.html","3ff18424eaa0922391e14d0c3660d18c"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e4f496ba8117dac9cba1662b3ac61049"],["C:/lmislm.github.io/public/archives/2017/03/index.html","6d6bf49a97fa40d9632e7470e70d0883"],["C:/lmislm.github.io/public/archives/2017/04/index.html","0b41a69b8647836bf5983e7003f2ed66"],["C:/lmislm.github.io/public/archives/2017/05/index.html","66f6146453a9ca73751867312ec54199"],["C:/lmislm.github.io/public/archives/2017/07/index.html","22776c1999f17345638d8f2c53625d16"],["C:/lmislm.github.io/public/archives/2017/index.html","c7f34b045faaa652c466693ac0ef88e1"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","c0f20641157567554ef110a6a4880088"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e98ce7bae2de917d754950f1e4f039e8"],["C:/lmislm.github.io/public/archives/2018/03/index.html","b628098a120be60a7d9bb1f5c965a5f1"],["C:/lmislm.github.io/public/archives/2018/12/index.html","9ba2aec4ed8c3d8fd5d0db2180799d7e"],["C:/lmislm.github.io/public/archives/2018/index.html","84d6d17163d3932135f2022d009d6972"],["C:/lmislm.github.io/public/archives/2019/01/index.html","fe49066a6fdc4ba91d518610ea8ab9ca"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","297d1691072a335675add8c8c8da6ee0"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","a70379af9682eba8d112ce6523c38d6d"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","225e4b30ee2a343b7a8d7d27fa0459ae"],["C:/lmislm.github.io/public/archives/2019/02/index.html","4ea64e94235a9c2c1b06893a14d7ad26"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","0cfcfaf85799ae2d3e3d4db86b355218"],["C:/lmislm.github.io/public/archives/2019/03/index.html","fca6f9d06c0005abe66b252d10f46cc0"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","17d1c8dd0dffa7ef5af83154626986a2"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","88c2d76c0eb54d9db3167cb29874901b"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","1229c09139af54aa537f6b64a5e88f19"],["C:/lmislm.github.io/public/archives/2019/04/index.html","1d4cd3f361e61a3220e333cdf81d579c"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","da619b2a30b35e8d74bdbe7d49204bad"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","fd2a85f57a10371795bf0aface0df586"],["C:/lmislm.github.io/public/archives/2019/05/index.html","29983a7798c38375d543c4061e72e684"],["C:/lmislm.github.io/public/archives/2019/index.html","a5db5224682569d4fc96120122cd169b"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","9a50d15d78039906d470faed0a0adb78"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","92d3e8012165f6c7d8372d6c3116b412"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","419221b2a33e9e4e35f57d35458baa96"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","59aaabc436f80ab32f99960029cbc6e0"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","08f5e3a5ac10af3ee2d67e854bf9f1fd"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","c9536b817ec333fcd744032ef4da3196"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","318fa9234d79491a3101adcb368dd5e5"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","6021670b01d16e7eea055f6e1030c13b"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","c9ee7f94e2b7357c271e8c19003c7c8d"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","d38bc90837dfee279936ac810e2eadf8"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","0d5d7fb399b2efefdc0f1afd6b8f7f39"],["C:/lmislm.github.io/public/archives/index.html","e0d74f2d92e83dcdba8132f9a2d75426"],["C:/lmislm.github.io/public/archives/page/10/index.html","8618831fb3619a8a2690a0e21987d76f"],["C:/lmislm.github.io/public/archives/page/11/index.html","9243e57c4b6cb5018b00eff2222aa95e"],["C:/lmislm.github.io/public/archives/page/12/index.html","d749007cc105ed4898159d8adf722b7e"],["C:/lmislm.github.io/public/archives/page/13/index.html","46f84daa3a0779e831263fbfb7e3d84b"],["C:/lmislm.github.io/public/archives/page/14/index.html","53bd01365f599c6be3e548dbb681993e"],["C:/lmislm.github.io/public/archives/page/15/index.html","a8337d61f9125be7fdc769196a5cbeb1"],["C:/lmislm.github.io/public/archives/page/2/index.html","64549e77042e19ea2092c1f09145e9be"],["C:/lmislm.github.io/public/archives/page/3/index.html","d3de37082d62625053f13efe65a157c7"],["C:/lmislm.github.io/public/archives/page/4/index.html","01914226dfece49a7017408dc7b7d98b"],["C:/lmislm.github.io/public/archives/page/5/index.html","fc5789aabffff709e701359d9c752424"],["C:/lmislm.github.io/public/archives/page/6/index.html","c7cdb6b6eae93cb7763d6dcbc917c4a7"],["C:/lmislm.github.io/public/archives/page/7/index.html","12583ce01bcf4dfb6efc0fd8523ab197"],["C:/lmislm.github.io/public/archives/page/8/index.html","6eb0abc6ec06c147c77c6231e07c79e1"],["C:/lmislm.github.io/public/archives/page/9/index.html","9e14033f85ac889e607c4ab8018b5aee"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","790bf92b3145bc83505d5f1ce99911b9"],["C:/lmislm.github.io/public/categories/index.html","7d825de155cccf89f6ecfcafe18baec3"],["C:/lmislm.github.io/public/categories/xx/index.html","75acb4e69be1ae5d3d2158ae52971b4a"],["C:/lmislm.github.io/public/categories/学习/index.html","3f2da0f405e70ea968328f7a96bedf4f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","1b9b0e2cbff578270c4b4780d80c38e4"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","3031e787d7c0cc6465a6ed1c218e6636"],["C:/lmislm.github.io/public/categories/工作/index.html","a234e763348a9e6525ba4dc3dad9a28a"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","5facdbb6bc35ac26f564f6cccf90d5a3"],["C:/lmislm.github.io/public/categories/技术/index.html","6c9fcf71e25122e10e2750f661a84800"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","23d3dc5e4761e0c7174db28c5c0c95f9"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","ba4a3308254d81e4fec7e3d119f4a6ba"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","da1eaf506a34d6259eafacee1366b2e5"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","ed7e6bf402c6b5da3181a1fc5bea97d7"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","2734505f2a835a126ff0944755eefdd3"],["C:/lmislm.github.io/public/categories/日常操作/index.html","3223dd4056cc012986895992b3bb6e0e"],["C:/lmislm.github.io/public/categories/生活/index.html","70ed3f0ae1e3f621f4d052c00c82d301"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","546497862c2f50351a8adfef6816110a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4f87136643210f244218554cd55198e5"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","862003562f209c54ef135b054c44372a"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","c6ff066e0d618a449c13163414824ea2"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","caff694162dda1b5f57da60839c829a4"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","cbb0e13c0e44f0ed6776da5620ec9f54"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","ff8c049ecf2e2fe3ef70be7223e7a805"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","7214055714408c147a44132dee683f44"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","5575af5d3fac80c32c6291d6080a525d"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","1ad5477d0ac8317f7ce1650b89a588d5"],["C:/lmislm.github.io/public/page/11/index.html","0c16c5cf0ae3b0e3f17d87c0f46d4a1f"],["C:/lmislm.github.io/public/page/12/index.html","3eadd91f511d04f7728e2243069544d1"],["C:/lmislm.github.io/public/page/13/index.html","a5d8beaa0a303913742dbbfa76e3c967"],["C:/lmislm.github.io/public/page/14/index.html","37c5c998ed20b4a96a4e29333951effb"],["C:/lmislm.github.io/public/page/15/index.html","674b064a774dd55939efff0a7d621673"],["C:/lmislm.github.io/public/page/2/index.html","b15df3ddcd8c0d39ab3854aef2876b15"],["C:/lmislm.github.io/public/page/3/index.html","cc9922f8049707148604550ee7c08d00"],["C:/lmislm.github.io/public/page/4/index.html","e0a3a764c6fe9e9ea33c496680212650"],["C:/lmislm.github.io/public/page/5/index.html","25eb268e02d333f98ad4c04214249ccb"],["C:/lmislm.github.io/public/page/6/index.html","93bec93da9b678759f8ee58c62ad61c8"],["C:/lmislm.github.io/public/page/7/index.html","683b39e3c0ae60a3dcbe067d8cdfd08c"],["C:/lmislm.github.io/public/page/8/index.html","c4b70189e9aec95323565acea5ba354b"],["C:/lmislm.github.io/public/page/9/index.html","2a0d1d1c59b57691fb08302ea0af34fc"],["C:/lmislm.github.io/public/tags/Interview/index.html","fa3a608251ac4c1a5dfe2a23b740f7ef"],["C:/lmislm.github.io/public/tags/JS/index.html","af80bf6c1a2ce7c940bf4a7609d43e35"],["C:/lmislm.github.io/public/tags/acm/index.html","15b952cf669a030605ad2abd592a5219"],["C:/lmislm.github.io/public/tags/c/index.html","6b31482c1c1ce9aa35da743a97e46bd3"],["C:/lmislm.github.io/public/tags/codewars/index.html","7e289c38d5800268388356b7afb9845e"],["C:/lmislm.github.io/public/tags/css/index.html","14e151dcb87083d27de8fb0383a9f9ef"],["C:/lmislm.github.io/public/tags/git/index.html","fb541e7a258408d2ac77ebcd73206c30"],["C:/lmislm.github.io/public/tags/hexo/index.html","74c39f4a31b5ce8e1e7404fb72bca015"],["C:/lmislm.github.io/public/tags/index.html","130732209d12b5494d41a401ffc14760"],["C:/lmislm.github.io/public/tags/markdown/index.html","85d7a419315eb0ac719e194416a681b8"],["C:/lmislm.github.io/public/tags/poj/index.html","f2ef25885ea8c3fdcc88981ad8e614d9"],["C:/lmislm.github.io/public/tags/shell/index.html","8123c20fde9e4171749cc0d756523703"],["C:/lmislm.github.io/public/tags/vue/index.html","cdc78ee8c4e55aea092944eb7df1d0dc"],["C:/lmislm.github.io/public/tags/xx/index.html","59a469828dada40ba383572ea3061ac9"],["C:/lmislm.github.io/public/tags/前端/index.html","5e8f5e65ef40ba20595a1c62b2e0ca14"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","bf5342ed67d51124f09dda3f79d170b1"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","00e1d8fba56025fcfc1d2a5645db6630"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","fd376e14cbd61d77dedbe9653029fccf"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","673c487ec4496f81ac788d50ea58d11d"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","d33948f0da7adce8e4b4c7e8cbd7847a"],["C:/lmislm.github.io/public/tags/小技巧/index.html","30a6f7356d5748b551bbb074c135e444"],["C:/lmislm.github.io/public/tags/展示/index.html","471f72700e1df1320e8400770ceab426"],["C:/lmislm.github.io/public/tags/工具/index.html","32e1120b3249adf8da15175cfb578237"],["C:/lmislm.github.io/public/tags/感悟/index.html","a86fce1efc81eb713d1935e6eed87e0b"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","26e2dbb113fbf1a52900bbe5f3bd20c2"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","579c657b34d6b9640fdc4c964e43c96a"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","fd193e02a2a561ed7c8c2008295a5f5c"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","f24a89ed1521bd18ac4aeb56e961aa3d"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","f3a893522867830bb3ab54b157a5c59f"],["C:/lmislm.github.io/public/tags/练习/index.html","a63213966f1eda1ac821ed48bc18d046"],["C:/lmislm.github.io/public/tags/编程/index.html","118aacbbc9c9451a0675a8147fccb003"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e06bae30a9959a193b2c1a9192e9b556"],["C:/lmislm.github.io/public/tags/运维/index.html","959b714b3d1083d778ae385f23ad23b4"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







