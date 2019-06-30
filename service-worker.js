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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","1f571bef46d889c7f5ff09a0288443e9"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","567395a34c4895dada0065093e6dcd4c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b8dd0d85436cfccf08c2d8eeebdada36"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","209712fe7c1ad2aa9f610b92cc88ecf4"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6a40bd60638a098d26f5354edf4b8797"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","c74160cdde9a2bf0e9990321fbb99ea7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e94e6ef5388da1fd3f2d9a7da118c736"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","a65aecfbb93098909353827776c3a933"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","f3f312342995e00450c06bf8055ea9c6"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","3153b8578e646fd621d5ea6bc0fb25c8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","ea73786ff8eb8392ed84eca2e9709369"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a09a1629ad7b3868317302015e13d848"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","1c4e54e3adde3b70ae08b9f06ab27fc2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","d8da563bb1d69af4c5fe1fd3d8b46181"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","9f31c5a9dfd6d10dad2bdc56857f4a6d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","daf33d2688f96f65a0afb52fe5cc3454"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","49b9b0453b1ae1c441bb10bd2c474303"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","886119be6ae5aeda03ab012806a15b1e"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","0ccc01513db29381b80899eb45963bbb"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","c1c3e06b95e968b5aafa09cde618a22d"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","e101c2c8c45531521df53a9806c1cd7c"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","dcf8f73ba79760f127ca0f6f280cab6d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","cfe50ad50d9e1a08caeef3a6f7bf931e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","58a6851a953adbdcbe6db4a8f12f864e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","93aed430411cd098d242d6c259ab411b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","620e76e3ae6da83bc7897cddc707370d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a6c2501a48fb5bc1451c8b73ddd492f1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","b880044f5d35f67276ae3afddf33590e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","146cd8ec12f1ecce8748da0064512122"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","25363d1030d940e8c9801faa04b10d53"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","d3b94be3ead6716ac8f3c557d492aad0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","390ba862535d586d60033faf11c7a3a9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","e34b5e28704dc4c1756738353ec4ddae"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","320d3891234957999c65e3f155f59de0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","05df4c24725115865d2ce08672aafd38"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","6af209e9f6d5d2193ac6ed547f68e3ec"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1b3f5bdff28f482033f59b159a1f9fa9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","eddec7f42bdbc7a54e89a9bfe5d698ff"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","6a562dfc1466a195afd4aab7c26bd6f7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","56adf77ef8024dc26796af01f7ee1867"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","8a09c28bbf5f3768c7d49715690728eb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","eafee4b89477db7752fc5c7b5bfa6996"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","2906fb478ee711ef055636210634cfb5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","8ff269c685426c63442867dc887c58e7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","8efb681a319abf06ea2373f8512635ab"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","95692f0c11f607be613202e70a22cd28"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","8762094fd284a57b02d5cdcb3f375cb9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","47d4f1cd783b029e3ff7c582e56c4d28"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","e46b8725b692d40e5b4a3185faab9b14"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","1c70a5c6ab332f467dad091f4da4106a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","089d527580a51850cb259cce5e181028"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","69cab1da4e70c45b8801676cf696c08f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","2dc9b61e5fd441ae07c805371f96e5b7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","338eb135d4a7d91e8c4a96f9655a9ec3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","4cdd156ad328db8542030924d9a8f161"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","5380fd54983e5112bb965d7f881ed6b9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","03063f6f00abd9bf4a67c9c9940c99d4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","4e2ba67a3884a89ed754c4d00e05f929"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","e24bc35b0a399819f2b8d7fe90552174"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","917b7066d296cf4164ffc6c418118279"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","1b38c64ddfdd2b3f28d14f588268393d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","e8c95dd9ddf062525404f54950b12335"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","23c9e030d73d4fe0f6e4e59f3d0ff60c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","e79c926a86ca4aaec775ca88c4196c9b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","4dd56eda4875219138c8ac5b8ed8580b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","911d61b2f41376c845a49a18b1c2726f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","27047378e8081e578859a86a602bd133"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","31dd4dd6483bd3f477ac3b00fabf275c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","335e41b452bd00c9aea467e4ac502459"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","a45d08ae62dee93d276278a83d4e21e8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","0e024b21a4cf48b16731f8ec986ccb28"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","e2eaaae35b0d29b038e933daf995f671"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","2bd9a4c7a5d1fdfba6ddcf47824a240c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","d357d403be43215011753fe1d907e6f4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","b4e0af85b000a47e86045176e693afa1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","ecdb66315dd6eaad42ef38567c7e3d28"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","eaae71a55f4877c4de433f4f011da2d4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","9552778e9872d8009354c9f2ff6865b7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","994ffd2f2823a04b4722934fa51191e0"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","2568ad3bc86f3d9746818b3dfaf69461"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","729252e36daeb4133e9702aea1b42df7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","ec4592e1b9a7914eaf2edfbf943304db"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","da4677993296b7ba43a8d92c8b477812"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","707a9d012706dc967ac3f7db80a44143"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","4694075e460d003866f31ad63b910f6c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","42a869104ecf8095f939490669580433"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","95c5ea174f3042c8e9fdfabbf1b83024"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","15a9d5c6c07a6ff022cc33a5b0999325"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","8bfbf02d364d6abceac68dfcbeb9c3ba"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","a831009880e50f4b4247754609804175"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","fcbbadcb86fb93e206ef81a82238623d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","370e500922033de05e623e09f3da896d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","c27675ca5b799b20a4685aca04c542db"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","935ab3c7ed0e35f5c8e0ea88ebcaa64e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","5ddc20c61aaa45b04078ce8d86b434e2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","5e8a1ae79a1a9a40c009247f77627950"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","996ddbd0ef3fdae68057a5383b304cbd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","0cf1c9cf0d002c481abbdd5ac88354b5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","3bb58a3753b7198bd54de83d962a5fe1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","2155f31053df332fd86600d377efaefb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","be98129dc9d85cda24913804bbd4cde0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","81a7146a94be7fc434d1b2922d84fe32"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","9bdf9c498f9b2231e0cf88681f51aca6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","afbc94e68ac0ab98858e20503f32e7bc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","343a23d0213c9accd0b5f3cfa6155efe"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","56a4c94590ce1a0b88840e130ff65ebd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","a4f15a1be7c7389ec31698927635be4b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","68282a39b8b996ae491e278f89edc401"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","2386479092f764125f0124b107badd05"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","940a408cc471de27f734f566a238a89e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","902c41549e868923b4dd50f12760d613"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","193c45edb95cf5c213fe8c057d8ecd1b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","fc79a133038fd0390c5bbd5bed97a7b7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","5ca0c57eab831cb2af4c5146d7590fc5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","77383084a568317c9d0bd7153eb6d208"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","14212a2cb6b5b38bde15307de1a265a9"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","7eec188d6ddc25c4fd3d49a69bc2a2c7"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","3d74da73131dd1fbd6f2b335aa2947ad"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","f6d4e483b9fd709898800c168b102d1a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","c47b580589d66c9659786f09f69df5fb"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","92a551cc7dcce031e150833762164bc8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","3322cc318d83f47dc7687ad6f2726eac"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","378e934ac4d8c13945bfc9b80153a426"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","c92ec5fb41c286e03fa4dd4f411a983f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","fb442ee2d6bb30a015409bfbdee9c446"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","6b7dff2588a02363f9e4f3e50fdf2bc2"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","0e12d571188173630721d40cf2c8a516"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","2a9702405e9a38c05b0c5b4eabb04365"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","4d215f90844da613c301374623f8effc"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","ff8213d53aa5d051afcf80161057a899"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","8e000fa3cf8e83e7ce362ad91de7e1c5"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","4a439d6a8341e289ffc04b6b87b6ccfa"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","3681596cf48b41ad1c8e4ac839d75d78"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","570ab0c796f33ce2ef18c5fc5c19cd26"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","7d2ab9a1a7e7d49f7b0444ae598e49a6"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","e46e421ccad0dc95b275c1aaef494c23"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","e2f1d6f7d47388d3c1aeda57f84bfd3c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","0b14972c6e0d6159c0d916d0fcf360af"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","cad7dc9110e79a102705a6212fefd3db"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","38d6ff634e1dcef3d0d5a63d1dc3cad8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","87325809fc96e10a42e4ca8b3a20c991"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","c550f278b7de6304a8da507daa33384c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","d45ae571e48b95e534184a224456d389"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","e2c24ba68ee89ba20fa9d80422f3f414"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","6bbd874096d78ffed816ab7a3c7cfe7b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","eab7d61fdcc10110c79d7d4e7fda0faa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","16b0666162a590de8776093c628615ec"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","f04abe85628c47e1e5d3591f08c0b4cc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","cb89bd2ff46f1e7f86ee1cfb94cee154"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","3ea02dc15bcc8dbbde250899c68b6cf9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","88af03885edf63f4cacaa23f46cced14"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","3d971e0093fe471e363665a0062f52f6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","963b70d4b29f297467cebc80fa25e363"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","fdeb4f2b1b7c95c6d576724e0cc402e3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","6045936a46f06a62af5f54c47642e0b5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","77ce890052e7aa01b09fd5a1c1aa3dc1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","2fafeb59739335f816ed2c441589a63b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","0d986d6152d8ca8bc166bf5009a0b9be"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","224e38ea60220098606349de6ba58bd5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","2de6ee448a821dc9da05e3ebb62468e3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","e1deb9c620dd4d8f1fea069dc364ce3b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","315c00b2c65e96b3c93cba8c1d46fddf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","edf1f75aa9b4d7b7f40a4b2d415b6ae0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","d9a5af1f3568fbc5a7bc4b957896d364"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","ef2152dadbac7e28a810205401761ea6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","3e97869f7a7e168b56296a54c55fa66b"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







