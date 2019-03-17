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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","76ebe68b09f001b894a6f6e210e89a05"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","cc9316337eb14d53a54353183e8dded4"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","d51c8d6b9b30d26c4fff30cf6c9e8b4d"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","672fd3d03ac99cfec04bd954997de6f8"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","0fba3424d60c48a1cc9f4e3e3d4f1965"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","c15aab6e44f031bd3c82cc2bc4db0012"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","6c83aec28b52b70b4fa89d232f2fc866"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","515eef8f4467e2ced64702ea9d24da6b"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","7f068f4f5614feda2d5e6f10e7410bb0"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","78a201810d8324f0b4cd9a697618529c"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","658789d4f97d8df4ccb41d649d565498"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","f076b3002f5b9ecbf2ca41608ea92f0d"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","1f1e824e2caa5c3902f947f98fc547dd"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","17e774270836b676f947bc00b6ce3ccf"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","9b8bdbf470e3bc97d5059928a9f10cf2"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","0d812890ae1f58a9015f9fcd532bce8c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","9df4d71bca2ccc8d086c4dc884e40650"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","9df5c9c64445d8f88f0825a705dba0fe"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","0cd6e973acdbe89b9379c3533b0634e2"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","4e96cc66b1e2e7741a737f1831659450"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","8deb92e07cd4d2489fbfc0b4547fc94b"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","456c95cecaaf3922bf98277853998f70"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","7596f8427ddd9f5ab06f5057321be925"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","d5e2e9747ec2bfca95cfdcefcf17b254"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","a4777e0d3ca2accf98bb6934fc3bae6b"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f04b56bb1816964aaef1150958b9cc76"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","3016760a7491b7e5e6e7cce69bf38033"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","3d386f222bedd44b08dad9add90096da"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","5736977050916ba5f9db63d21e927e55"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","bc659235d11b4920fe9a806a8eb585ce"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","e10eedb628d661b0c3a3c36f3accd26f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","39e80e58336138d8fe4ef5a0f5c445c1"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","5700672335f7bae0c391832b5cc2b63c"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","8da8d3c3abc747538b141968b678c8f3"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","9d02a5325a0a493ab66e66013aed74e7"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","83b12387f7b0ba9cba4e3ab81d0c412b"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","0d7578f5a700dca544ca1b59320f57f6"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8dddeb2c4cf97183ca483bc3d00372d4"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","ddb87672f86d5abb19cd72113fcde841"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","22cfa1c4d900cebac13fbb0ee778bf64"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","60d9ef86dfaeb9c1a4728744f106a271"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","9a91aef1047ff664390a3ff59ea23f95"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","a8578ff9af3eb430405c5a3ac60092ef"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","05cb565084997febb081ba153af9a28b"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","2144690786d3dc8f1990bd35084670dd"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","7776ce2e221ae32d55e1a4fb8ed4c6cd"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","b87daea721d3b3e8edbecca2559a4566"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","d6a01e5e2b4df4386ff076c39b0cd330"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","b00126f307c533457dd4c62bd3d754cb"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","269f134b069ef0fb568f2b6fe4b1c346"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","a3a6d4832aa219bb77692b8597a6b756"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","2004984805921365ee2e372122f0787e"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","f3bad727161b8fdf99e9d6ee52602c65"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","f9d41f96ac3f457f127e56f8907de138"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","3efc025932593d5ed246bf9b792de924"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","188a110ac845daeffcbcfbeb5cbba7ca"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","c2feaa94c3214cf1fa2acd654083a6c0"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","977311dc1dc040ad670399bdebe25d69"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","146556f1ceb1e8c440e40e071a081e33"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","1f9d9470a310ddc3cf41c21b92d381f8"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","e49419cfa44ece66c027758a3d98886f"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","249c5b58b2d5bb37a3442ab25177f022"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","746018fd4cd42753b3694505bb006f5a"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","28cc388f19da79bae32185db542a2ae6"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","8f27f05b62b440e41703e64ed629babd"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","e9ba15d64edd4ec56ffb208750d412fb"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","dabe08e386b77881c71a281481da3176"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","89b4afc499811c1f2f2810ee7ce1a809"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","4ce0629a092c97d83871c0a33b18bd29"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","443034a1fcf79dc66a7d38b914c600c4"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","03d984c6a0524df8c59508079b4b95bc"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","2812140463a16ee6885307f4afeecc9c"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","f2dcd6ee905cd416ab5597076e861359"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","8ab59dc3c6487b4daf0232080d71bde5"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","fa908c65810b2f838fa24a84298845aa"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","f2c177838fa9447360c204ece46b6b27"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","9bf552e014f1c329381c5e3417ccd9dd"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","5ba9302626e30e1d46bc2401563e02f0"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","63fc3472756549d5330018131ba4f3d9"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","ef3688664e9d3bc44fa1a8bd731c1f3c"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","98be1d610b1862419d53bef00f9923f2"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","b0a63b3568cdfa5fd565e9f13553f063"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","bd59f3e97250ddb0cfcf737c697860b7"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","57dc3ff5f58a6aa000c34a7f19fd624b"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","807ee66a84f7fb7bd24aa82dab0beadf"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","d2e47c03afc5425f0c015cd30342e07b"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","0aacf2294bdebcfea50330867780f6f0"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","9fc22d6109b7ba0bc4e17017217b459c"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","68ec4397453824fb45e25b4e16707009"],["C:/lmislm.github.io/public/about/index.html","9caac2060edc4d2d2f858e695d80007d"],["C:/lmislm.github.io/public/archives/2016/01/index.html","e5853880dbc4376663667444e42ab338"],["C:/lmislm.github.io/public/archives/2016/03/index.html","ed4144fe5ad1d633651a936f9d85d563"],["C:/lmislm.github.io/public/archives/2016/index.html","1bbde88788f4812784e16a10e8495515"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e21a95f514182ccdb109078a5da9ec3a"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b61d50a33569153dc5cb6fbc0af14cfa"],["C:/lmislm.github.io/public/archives/2017/04/index.html","39546056ea57aa3f1de12c4814e29eb1"],["C:/lmislm.github.io/public/archives/2017/05/index.html","c2e1a5eae4308198cca220267911072f"],["C:/lmislm.github.io/public/archives/2017/07/index.html","2fbe5bbc469368f31c1b93b6f1dcfe4c"],["C:/lmislm.github.io/public/archives/2017/index.html","5171dbc7083f9b06d4115cc06bd52056"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","8476459953e2c642f0fa7eb9a36040bb"],["C:/lmislm.github.io/public/archives/2018/01/index.html","264b886d4945555f22a16765f0cd9170"],["C:/lmislm.github.io/public/archives/2018/03/index.html","272346016a81a0add4fc49b96cd73191"],["C:/lmislm.github.io/public/archives/2018/12/index.html","6779fbeeda3224e8bcd3e90e315d8455"],["C:/lmislm.github.io/public/archives/2018/index.html","e2977ff2e0e895a13511584062a15172"],["C:/lmislm.github.io/public/archives/2019/01/index.html","f4d459a4b756f9fb3c30691422f4c3f4"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","b5aac628663fe51bcd762551c473121c"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","644c23c54f8b39cf985ec54438a58ec1"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","4ffab25190a6f8689e4b43d0f3f7d9ce"],["C:/lmislm.github.io/public/archives/2019/02/index.html","33a99f3925a1a821721f076d03268acf"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","51e0d46ae07ca7067930b403e8ef6951"],["C:/lmislm.github.io/public/archives/2019/03/index.html","08400c19e5777325954691ad1266bbdf"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","1e653ad1b76b1d038e3b30e7d78115cb"],["C:/lmislm.github.io/public/archives/2019/index.html","38cecc1f6844ec83d3488482837916a4"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","285aff8e3b4ff71918bb97849295ab7f"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","b0c433082bf37d43175d09b9766371eb"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","77697b3ff30f20a59fa1496a5ad8f99f"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","dc1df636c74cf051de3b1e73ab125f78"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","274a11626f4363f5aca81183fafb0d8b"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","eca012153a4d2757e87293981684e81a"],["C:/lmislm.github.io/public/archives/index.html","1e4b55f738edc3a9a591bcf21b89e560"],["C:/lmislm.github.io/public/archives/page/2/index.html","84bad2e661261f83b6d8d78cac417ece"],["C:/lmislm.github.io/public/archives/page/3/index.html","9059679f4aa4ac40d25ff7224547356e"],["C:/lmislm.github.io/public/archives/page/4/index.html","5a8bd015693feb6dc16d0e0231942b26"],["C:/lmislm.github.io/public/archives/page/5/index.html","88f12d5e51af94272c362d8f9f5f7d27"],["C:/lmislm.github.io/public/archives/page/6/index.html","90440384783284013e8ac4f80d438aab"],["C:/lmislm.github.io/public/archives/page/7/index.html","cadd455af5efafa74c92431b68053b2a"],["C:/lmislm.github.io/public/archives/page/8/index.html","297e3db81e4a01b6d3abfd2f2a10cae3"],["C:/lmislm.github.io/public/archives/page/9/index.html","63468c30b13c6ce5edbbfb231f7a3ad0"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","03df0ed379a9a23ed566792d32c10661"],["C:/lmislm.github.io/public/categories/index.html","6ccfc0ea71c93326489202c9ef1e69bd"],["C:/lmislm.github.io/public/categories/学习/index.html","c12f93073a95b0220c7b7d93a689cff5"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","c4272329db017800068f0112f57fdd9e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","65de5c9f9f71afade7f83b24fc70e599"],["C:/lmislm.github.io/public/categories/工作/index.html","fde8c726f47fb4448a8f40575cd0461d"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","cb21018d390c77fee1c0e44b4c8375b5"],["C:/lmislm.github.io/public/categories/技术/index.html","c54ee496010c02368abe5c61818376c1"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","b360f14e9f450fb5c68a15c81be752b7"],["C:/lmislm.github.io/public/categories/日常操作/index.html","af6755c8e9e65480a2816105a8385d3c"],["C:/lmislm.github.io/public/categories/生活/index.html","29abfdb33d46ce09fc36293bb4a7b177"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","250eaef632b13c751660edb0e7fba628"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","f03151b56a2a4f096e82c74fba2aee9e"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","73adbbb2e591adf9e0ad556011e3395c"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","84ece960d80332a75308fc342e604f01"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","75a148284846782a7049186c16ddce22"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","303bae30371e311a6406dc0f38c6cae4"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","09162b1a55bbdd1d28e4a3fd9412a064"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a520fe8eab923e31a2680777381b2ea1"],["C:/lmislm.github.io/public/page/3/index.html","22ebc5e035b3ab2e957b4872da5cc944"],["C:/lmislm.github.io/public/page/4/index.html","cf395a1ce45ff046a798be2674cb145d"],["C:/lmislm.github.io/public/page/5/index.html","8a3045580d7e4320c82d4640a266fb05"],["C:/lmislm.github.io/public/page/6/index.html","86d8b3dbbee33f5b33c63aa6324cf507"],["C:/lmislm.github.io/public/page/7/index.html","8fd78b33b81d457faa274eb448a0f9d9"],["C:/lmislm.github.io/public/page/8/index.html","ffef4bcb7a97ee7dd754bf294788848c"],["C:/lmislm.github.io/public/page/9/index.html","5a1023c06492c52f71142393f639bce9"],["C:/lmislm.github.io/public/tags/Interview/index.html","d4e03f5f3f5b383e9b9b0d953475afd2"],["C:/lmislm.github.io/public/tags/JS/index.html","0077ee5eb7fbe7e8fede9599a55dbdfd"],["C:/lmislm.github.io/public/tags/acm/index.html","a1b122d414d3c2fcc1d6598b37736157"],["C:/lmislm.github.io/public/tags/c/index.html","e27cebfd83c77e010fa4cd3694b716f5"],["C:/lmislm.github.io/public/tags/codewars/index.html","c187140e9876b906e5b0ad3124edf14e"],["C:/lmislm.github.io/public/tags/css/index.html","20bf33ca7572a983749134a5076aa580"],["C:/lmislm.github.io/public/tags/git/index.html","d3f244fc58af24f35e9a3a0131fbd530"],["C:/lmislm.github.io/public/tags/hexo/index.html","36e456bdb6984b746085864c01e65bb9"],["C:/lmislm.github.io/public/tags/index.html","e1b18aee24ad2978a2e42b622be7ae67"],["C:/lmislm.github.io/public/tags/markdown/index.html","7b040f8fd2d90f4356cf9809be2cf8e1"],["C:/lmislm.github.io/public/tags/poj/index.html","c25264fd365656429dea3dbc5234619c"],["C:/lmislm.github.io/public/tags/shell/index.html","3d124552cac1acbddcf2c9916e6f102a"],["C:/lmislm.github.io/public/tags/vue/index.html","56ba234cba4c8a75de25a9717e0d49a5"],["C:/lmislm.github.io/public/tags/前端/index.html","00352b9c8721c616a70e49fa62226bac"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","315d8dabd8f4dc05343a161726324734"],["C:/lmislm.github.io/public/tags/小技巧/index.html","6952779ba13a7696b2aba8671c47bcf7"],["C:/lmislm.github.io/public/tags/展示/index.html","40950c0087c09a5272fe8d4ab82cca2b"],["C:/lmislm.github.io/public/tags/工具/index.html","d0f60c0a1dde1a467cbd1ab61ba9d67a"],["C:/lmislm.github.io/public/tags/感悟/index.html","1717f500e90fee985076aaf2a07d31ac"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","74b66702e898b64b866543683291f5a5"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","39fb11f4e6fde45af03c0b794f9d2ace"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","ea09621622e9c9a2a14e9e6635822fbe"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","c63388820413bb11a36757e60de6b8ef"],["C:/lmislm.github.io/public/tags/练习/index.html","536370ade5a89b6e3e2b13838ec76636"],["C:/lmislm.github.io/public/tags/编程/index.html","1b8954860e40300eecbeebaaa0923137"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","40ce2f239c0a073deb3c95fa54c01325"],["C:/lmislm.github.io/public/tags/运维/index.html","e0098ce8637ede83ddf7918936136652"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







