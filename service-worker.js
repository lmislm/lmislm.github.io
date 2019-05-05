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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","6e02e875bc4838b66433e62f8fcf51b2"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","dc65cf1af5906c78b93386cc13d899b0"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","4dd7eebb441607d80347a07ee51d0f9c"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","ca95ba2e868df816f7baf8612bdcb8d2"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c20f0ec23b45ab8b2f007cbec85b70c8"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","ec36bc0d57496d9cf0638d5a36ed7405"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","10ea861cd443797377b067adae231ccd"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","edb30f26fb3a5048d485b1b3caeb722b"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","eefc5670642979c19c6df27a7a56ac98"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","b7faba5d53888b50396da88a7fd16723"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","003aa8906fe0a02dccfac5ca8cfdae04"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","73a509ec5e28a60a369aa07663546d6d"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4acb466cd2b65313a18b5003c1da8c19"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","5849458274c5127022631693f8270b57"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","ad125fca311021a85d65d62d42560caf"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","e844d3fc1c4933a66a640faf55d7b52c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","82f38d6d2455e9127a6a761962057b13"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","6ff98e7ec2d1b9d4fbe1fa1f72518ef5"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","c4b388bd4d793534b8e764877c4e9691"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","b23777b39bd75537e7c76ea98a6e562f"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","bd120a84ba553f7419f95954fa262b2e"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","c54b02b51f4c6e93469f498eaae8aa3f"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","c879bb80445ff8334ee9da0caeb9570d"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","b621df1b7ecc56a6f2731199937922f2"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","63656fe3068620b33edea6dcbd80fd21"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d611e34530126846d561f447c6e63565"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","5d8361ef31821546110c061f0040e5c1"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","a05e6f8a19edd4c235aa8e10bb887ba8"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c58b65fb231fa6f871c5662a334af1ba"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a713151980846282a081c894ff0432e1"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","bab073bc46b79faab181cc36e3f204df"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","09ebc72c96b14abeb55607503ee56ed6"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","ea1c0f26453efb0ccd141eb34be70ae5"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","7fc09b27d008c5a74173a6a0700c85f4"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","60a097794b924febc1eda6e483c07488"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","b846efe4e56ade8f0757dcddcbb0824e"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","5aaabbb80a7be145226bfdd2c542a783"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ec5d49d4d634e01392b5dc11c638c9c9"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","b23f0dae620b58a95eec94b5e8d36c9f"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","0dab2345879deefce3e458b3b2a75c05"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","ed7cf5b06933e5581c916ab3e2f5fd24"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","87f622618afbc1bf89fe3b6e1296783c"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","bd6c20f1ca53c8a4a3290304beb6bd1c"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","14b3a15bb38d9200c8d7dd8f24492b97"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","aed31d1a1cd2ded35e1bcc86eece96f8"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","85d569be60d8cce8e474da2d83f9e9d8"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","0358afcbf867461a235576be75cafc66"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","6d9cf57e32b13f246b1db41f36cd9533"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","adfe3825700650713f437e28b4b6bb59"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","6b6132898e712ae7b6d47f284c626b4f"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","a4b5765a9dc7aa5422db29e790ea3a0c"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","08729eb1eed6a1ad22aa7af797d6acd4"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","1370d787a1c01e605cb00baa852116ae"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","7acb6a6ce90c7e0630d79d8485a82703"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","345754c166b424f86d0ef0cab6755a28"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","a1997f2e839cdd27e204af75ffbf8ed6"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","b0a3ef082d8dbd620267a767e2743b5c"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","dcbd35f44e496fbafccd14e82a274453"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","67dfb1af01a218d0d18b3b882c42c40e"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","3a81fe2d7f7f0d10d468f52cf9bc9b84"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","b4f35bb691332952edd24c206f2a6590"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","47ef0b5aa9502d56563abcb3242fb26e"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","69c97c9fbb86a7c209f2fdf5dad37469"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","93c702cf6791d966a7bc9bdbd6df5232"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","490503a849b0779fb6da6c74f2846bee"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","1e8b9616b3035ea67ea40f51f04266ae"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","c3f7220049787519779ae319b13ff58c"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","1730a93f472d9ed8ca880ef04426b11c"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","77fc1ed7490b86c7e6bf3e8b116d9cce"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","0ace388fde9c3ba2c99650b80a0e65b7"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","81261d43bdab585178820f92c5dbe74e"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","c8dba46ed2cee8fab36166f4fd9e9065"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","665f61dd12bc754e93fca4f7e2e4df05"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","ea088f90916a8950721382966e57eb38"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","1738edb19d0644f949c0b698360c3884"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","4eb39db231fff4604c98d59f54170f5e"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","1b8f8c58ad42bf206d6fba7aeb3e594b"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","bb818ae0c11c1fa6c5b65bbcd9776e5c"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","14f7f0805a5a0c0166a85513ef37b3ea"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","285528164dc9444863cd179fabb3045c"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","9311478b65b5c06ff0bb2ecad36021bb"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","1b4d2b499fb9da4fa34c709cc3609afe"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","b2787ab5295fd8043588e76583971318"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","28cfd40b48e35c92707fad4bf13600a1"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","9f1854189f5631c9b340a1032408eba8"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","24bf9efefd402ce145fb080248279321"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","7cc1fa2bfbe88ae00808bda0a54e5863"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","699dd2f02c0c46610f1e0434e4b5c854"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","325984ff164b286ed3b4a832eb19815c"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","5fef1d76752f7f94c1dc9da2fbc13083"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","604f8fadd4a294ab3687e572a476491a"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","b11c2351da71e36d6f2d8d3d9c306db8"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","6dfed2378f9a55c620a69d752c99ae36"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","377454fcb8cb1f8c8822956f95039bdd"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","223823890a6a39802b735a602e02eb6c"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","a8cbc9a35ff5e66a0c8654f6a9292993"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","2e68e39cceb7c9c2ae4ead9139bbc7e6"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","df279e56e08544a78ae98d4106d83442"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","00b48f0c22d6d390aafca3f7ef8d1f32"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","b197db3fccfac1f2179f945d3b501924"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","7bec6d7333e6f9fba5c6b95d8f5f1c60"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","45fd35db9cc2c9606ef1dcef47ed331f"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","fa625ceb4207ccaa1eb8fa68256ed865"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","b603b8c0ba027a5765888f419d84b8a2"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","51ceaeb1d48d70e277b2a2a40401b863"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","b4cfdaa62688ee031ab80f98360b6101"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","7a83479b9b593fe3b762bc331b28dea2"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","2ce710b3bda1e045e11be2465d32cb3f"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","cf48d0655f682d706d13c37dd04800a9"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","cc5f76f640fc8c0607eed3068af67e51"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","2e029a792f96d259979c4055171997df"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","16037f530ac9488268c8a9a7da25273b"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","10427bbfe65472c00e0b9c02aff2f441"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","cb37b388d16b9bae8719ff4c265c6e8f"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","e4874b1648d679ec5b10f82f04346e0c"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","281403a5257f15f2ff417706b30de4b4"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","a43b7c768cff50bd45d6df8b8cf45cf4"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","6698219ba861f61a06052f6b65cd4d04"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","c81cc769ab9f1229d7397111e1f72833"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","05174e0c58183a4653da80be28fe071e"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","c48023ea0d4cfc41040f234fece498e0"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","e54c9f5b0b37fcf1a4d2eca17039141b"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","60c68d6fa421e02959b97533553bf393"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","a003ac9a1a51c7ef919b625dd10dc614"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","27bdaf8e044c1261990ce6bafab8b5b5"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","6cf8fcbb13a411350d0a51141136e969"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","42c577db023ea72e4967f69d2333c9bc"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","b4847c78c3a994d0fb4ad0187c2d73e8"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","a05c9ec47e3234f6900f634d391b749f"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","ac7fa411df8b99f8814d4b95afe48efb"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","d9709b89283f6ea8818cb8755c4132fa"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","a32faf692c047b1cad9e1e18a6175caf"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","9553436b13757dfba468072afffdfa83"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","212dcfd3e8be607f5cce368611db41b1"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","6ee14684db24836c4606342caa3770f3"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","da6ee8f1637ccd4525ad8d281ff84437"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","bb4a19d0f63b4750d735bc5003d8ba08"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","f1399ca068579dd921984f9374b2d104"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","ce8cd0277234f2a006e32c96591ace64"],["C:/lmislm.github.io/public/about/index.html","6a56f5fc3e5459cd3b1455ead1243a96"],["C:/lmislm.github.io/public/archives/2016/01/index.html","e53883c4db6cc4ff87c7eba928d06c77"],["C:/lmislm.github.io/public/archives/2016/03/index.html","fe29f481e523e2fdcf373766341733e9"],["C:/lmislm.github.io/public/archives/2016/index.html","448949014ed1f0c43f0e8fd6fd02e91e"],["C:/lmislm.github.io/public/archives/2017/01/index.html","fadee09e062d30bb6f332c4ff7d24583"],["C:/lmislm.github.io/public/archives/2017/03/index.html","c6ec6f81fd431d036faa94b39fa226e4"],["C:/lmislm.github.io/public/archives/2017/04/index.html","92820b546c65f819eb7b5371ffc59cd9"],["C:/lmislm.github.io/public/archives/2017/05/index.html","22caa6d337b4ef84daca6d2a3a2e9bb1"],["C:/lmislm.github.io/public/archives/2017/07/index.html","2f74adb7eddde11632f97d611f6ffa24"],["C:/lmislm.github.io/public/archives/2017/index.html","bc57ea73433f33961935d5d4a8aff8ac"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","236c60eb3b2bec496d128ae341ecae73"],["C:/lmislm.github.io/public/archives/2018/01/index.html","b873fe89f2974b06b37384390f4551e1"],["C:/lmislm.github.io/public/archives/2018/03/index.html","151abbbc4589e93ecc84c2f3f097d9fe"],["C:/lmislm.github.io/public/archives/2018/12/index.html","5a890259b21e81d5dd052751c81926dd"],["C:/lmislm.github.io/public/archives/2018/index.html","f2d5e68d22890f7da8f04c448ff4cb23"],["C:/lmislm.github.io/public/archives/2019/01/index.html","bd4e55364862836f02d5529543cbaf3f"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","14019f3fc95a3860f3ff7b0e4576ddb4"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","7dc247392204f906ca515ca49200e48c"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","0324cd837dee8b1c5dd9e3f95f59c9d8"],["C:/lmislm.github.io/public/archives/2019/02/index.html","6aecc4e5c37ab61589be3c44b2c491f0"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","d86d4ae7e3b2aed9340940b89960a920"],["C:/lmislm.github.io/public/archives/2019/03/index.html","22c4aff8f14cd404ac2fddb5627d2a3c"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","e3084773705d9f6a0ba67b297d8045ba"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","7bc3c7896c680a425058336eb6161af5"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","e9e898ca452df11c7b76805377dbd1ba"],["C:/lmislm.github.io/public/archives/2019/04/index.html","153a3e5ff1b9945cc8f483a49714c69e"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","c545dfbb56581c7d0fab5661241fdb99"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","3edb9b22414260e5ba7728bd665aafc1"],["C:/lmislm.github.io/public/archives/2019/05/index.html","5fd493c8b6b6046205163fee8a8b232c"],["C:/lmislm.github.io/public/archives/2019/index.html","d6ed1fee3cebff6ea61d3b5137e477ed"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","5f4810ee93cec05eee4b435fa6ba4226"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","5c5db5a0f36586ebdd28c06de24a48c8"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","399d4448723808a6758af4882e8fde49"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","3bdd9dab6bef051fe9ac73630b0a8228"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","542ce2d28fae79ab8994e3f805299828"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","083f042da90b358caaff4e375c7ba334"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","00287d13649d1e77896239065c26ced2"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","ff619a7d53eadf7b69fe767640dde2e2"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","7d33881ce930d5d138ff250246d8607d"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","5a18b1f4be915530969040001e0de9fc"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","16f49777cdb32601694b928a55288474"],["C:/lmislm.github.io/public/archives/index.html","15caad5335b8445a748f478d7bdd2a83"],["C:/lmislm.github.io/public/archives/page/10/index.html","fb44d564e05cf02eb2a6f02058205a62"],["C:/lmislm.github.io/public/archives/page/11/index.html","cb0c622f4beff5ceeee8bfabcbae64a4"],["C:/lmislm.github.io/public/archives/page/12/index.html","510e656fe823841b97eee25b87fec41a"],["C:/lmislm.github.io/public/archives/page/13/index.html","4be50c203bcea305f7396d152edecbf3"],["C:/lmislm.github.io/public/archives/page/14/index.html","950fcb3b843d30b7c8b6544e35b606e4"],["C:/lmislm.github.io/public/archives/page/2/index.html","ff3a02be96bef21fc0c5210e75bf5c69"],["C:/lmislm.github.io/public/archives/page/3/index.html","74f5cecd5414ee7f4a9c5b29101c2b7e"],["C:/lmislm.github.io/public/archives/page/4/index.html","33c1bda54347dcb50b7f9deee81facdb"],["C:/lmislm.github.io/public/archives/page/5/index.html","cf4eb102b9541aab3944297bd3dc020e"],["C:/lmislm.github.io/public/archives/page/6/index.html","4a4bd66cd23b62c17f8c8244530d410d"],["C:/lmislm.github.io/public/archives/page/7/index.html","39fa5cb12418b41649f8fe9274404254"],["C:/lmislm.github.io/public/archives/page/8/index.html","fbdab1000840a97128d14075c07f2dc9"],["C:/lmislm.github.io/public/archives/page/9/index.html","2cb5d11bcc009ff10401106fd1be83d6"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","43d3b18cf947a5ec1dc8af991447a065"],["C:/lmislm.github.io/public/categories/index.html","8517eb2f735ef30e8536d3ec3346096b"],["C:/lmislm.github.io/public/categories/xx/index.html","13aefdbac3977127e83ae1277c0ee051"],["C:/lmislm.github.io/public/categories/学习/index.html","f309e4bfb161665b66e208a17c0ec538"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","7946e324d9f72780535dd8014dbc471a"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","1928a7e22ce55917b9bddb56d7825b87"],["C:/lmislm.github.io/public/categories/工作/index.html","ff1df6ddda5910a6a3b8126b866df1ab"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","b67414a3eab766589ad6dc6c2c5c8a86"],["C:/lmislm.github.io/public/categories/技术/index.html","bf2605a5b2c18f0e026c254a76c37d57"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","5aea3a0fcee2c9233d2d668a80a6db56"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","cb621e03b9613ac5ab95660d1e3ebb33"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","f9823142aa758ab2ec0d819003a092ad"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","3a84612dd9465960db786cd9558cb5fe"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","43f22c32177ca92acde3a4b81d6fd4ba"],["C:/lmislm.github.io/public/categories/日常操作/index.html","8ef419efbfdf7ce2b4adf24ce2e79e94"],["C:/lmislm.github.io/public/categories/生活/index.html","27c9db05f127ea808ac59c3070c0ca49"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","4f59901d93999dba6c5ad6ac8f0a134a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","1061ce98d1b0c7bc2c2a7341883f9e8a"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","b2537bca887914848b0d969d715bd771"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","04848502a040ac1a60071779306e35ea"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","108f217304f9afdc3aaebd182670a5e6"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","08ebcf200b09716454cab0b517106bf7"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","bcc88822e6d04af29e1c700e79b9297e"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","476e6751154fe51674f903c25eca1e83"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","fbde1b78f9d6fd2b16c8736416879ace"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","927c054e88be53c343fb173dd62f1339"],["C:/lmislm.github.io/public/page/11/index.html","6f0e720d23059aaf4df7d1bc705097ce"],["C:/lmislm.github.io/public/page/12/index.html","0cd7a463d6084497269d2aeceff29797"],["C:/lmislm.github.io/public/page/13/index.html","0ab64bddace5cf60741a3ccfa495db4c"],["C:/lmislm.github.io/public/page/14/index.html","1a459e0a8d1a1e06c8f351cb0ca65bb7"],["C:/lmislm.github.io/public/page/2/index.html","fc7f41ec22300761966115967a8cd5c2"],["C:/lmislm.github.io/public/page/3/index.html","0259cef11aa1fb1acb36043a10d16ae2"],["C:/lmislm.github.io/public/page/4/index.html","4a8597bf9b1cfc4eaf2e5d850477797e"],["C:/lmislm.github.io/public/page/5/index.html","f932dfc87ccf3d78bb21fb432313c905"],["C:/lmislm.github.io/public/page/6/index.html","26828dfc3f13dfb62ac8224250c72221"],["C:/lmislm.github.io/public/page/7/index.html","8a1b7553453250d61934bbd6f47de058"],["C:/lmislm.github.io/public/page/8/index.html","ad1ea537babe8bee88e7bf02cf87dd71"],["C:/lmislm.github.io/public/page/9/index.html","c43e7726b563fe62a7f78873659f6fc2"],["C:/lmislm.github.io/public/tags/Interview/index.html","16fea7881bd9e962a34d96c23ac21c5c"],["C:/lmislm.github.io/public/tags/JS/index.html","426969dafc75b7737c6376c3f6290aa7"],["C:/lmislm.github.io/public/tags/acm/index.html","1008207fb135101f18aae04784297070"],["C:/lmislm.github.io/public/tags/c/index.html","348638b394851d6fd1bbd5cb6b7b92e0"],["C:/lmislm.github.io/public/tags/codewars/index.html","b28a5777ff3e5f99d2d2f0df96886459"],["C:/lmislm.github.io/public/tags/css/index.html","89bbc197b679b368ceb4ec9df4800fe6"],["C:/lmislm.github.io/public/tags/git/index.html","37769bec4c4f13b7497ff27f3e2d13ff"],["C:/lmislm.github.io/public/tags/hexo/index.html","8b7c8263346cb65835f89f9744e7fc1d"],["C:/lmislm.github.io/public/tags/index.html","da0fbf834faaef410760a36ff1ab5010"],["C:/lmislm.github.io/public/tags/markdown/index.html","4b8064340a6d7aa93d585cd55adbd100"],["C:/lmislm.github.io/public/tags/poj/index.html","905036ce7249ab41ce1abbccbd1ab1f6"],["C:/lmislm.github.io/public/tags/shell/index.html","b916effa4ce766f176dd5ec9ed26dd08"],["C:/lmislm.github.io/public/tags/vue/index.html","bbf5b257ae72c00495dc2aa82c89d2ab"],["C:/lmislm.github.io/public/tags/xx/index.html","e78498a879cee5ef98a3a0ce5e436a92"],["C:/lmislm.github.io/public/tags/前端/index.html","6e800278c84e67bbe16026bacde36220"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","b765ed0ce8d2d5697f3a44bfb906fd2f"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","2247b26bd737a20337807d80928d7303"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","2763940b6fdc6a865f5ddfd64e47e214"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","59ee1e28fb494818220f6bbd67401903"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","87312ae768441e174943ed67ca238693"],["C:/lmislm.github.io/public/tags/小技巧/index.html","a7ff49f10b9baef644261644e92ac52b"],["C:/lmislm.github.io/public/tags/展示/index.html","f336469bee27a2a37c876842cd8fd6ad"],["C:/lmislm.github.io/public/tags/工具/index.html","80e3aa167f1e0a5a406e5754265b930d"],["C:/lmislm.github.io/public/tags/感悟/index.html","c79be976fc561f9154bc9b3816070eba"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","a3e6dbad65f647d3654408eb1b91b0b8"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","ffd961248fdba47464fac38b767d0e62"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","9cb4e0f20a6f82d226882d916545509e"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","5aa979845ebe5f1a9ac6ada799ebeb0c"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","d2cdf704fbc3ee24564f6e5b41dadff4"],["C:/lmislm.github.io/public/tags/练习/index.html","4d686c25030d28c048b15f51a1d356c3"],["C:/lmislm.github.io/public/tags/编程/index.html","3caf7fbee4479170130a5bab81bcc248"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","39a9cfd2271250b08d33c6fd00e54479"],["C:/lmislm.github.io/public/tags/运维/index.html","8d43ec6d74a7277e36b39bf65ffd6ecb"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







