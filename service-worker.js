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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","a98f634fb4351c36d2f458b5b174032a"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","706fb5a1cd14e0fe5266aa1506e4295a"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","fe41fc585baebf5fc9cbf81e7e517437"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","b2215dfbcc24042b077a7f592fe39e19"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6fcacdb38dc94588a7ca4c964156452c"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","1db94f9554863e02d12472e7a045c34e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","2de2c3f9085bc28cad41fc176d8657e3"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","870ac6cec2d82aa497215e48d7d81949"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","f5f250a5db293185b081f33d16d717f9"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","69908fccbf11b7ad77d3b27caf6f918d"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","c4a2379723daee5d2e8916dad7a73d8b"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6bc59ecb180f54bcacfd117cd2ab3d45"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","b9b4a3ba73999441752c36fe4c63b4a1"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8337b3843c011cfab30bf4f9197b3b0b"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","85672cca2c9c697cd0db9a4b1d77a18f"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","79474d3186d4aac9b9e94302fa7c7dec"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","54b1e9c1051fc1fe993dc2062e63e095"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f29caea68bdde92d91fd23c352c30ea5"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","644d06f585615e0cb0822fbfb3a455aa"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","63432c509bba79afb3011d3dc7aea994"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","c645158a4f1bb240bd0332f7c187d10f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","712a0aa261bfd3764ca44332b393b7f6"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","306f1d4c77436ff7c237fa0a833902f2"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","ec0cafb6fa53070fec7b24266dc85e32"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","1172025a864dda3288445d8a7425e831"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d0826a3c0f1689ad22da9ba52945cefd"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d8d2a3b54bce87dad8dd2ccae0d53af1"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","66db144fe2ba2f6b5883aa5657490a53"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","6969a0f88dba5dc837cff1448ce21a1a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","c9f932a2e2868c48a5c4db7a3e0c7044"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","4f82b541e9fd3da3a7ebf9a69abf46f4"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","0a2ba444cac931c60aa1882148315fc4"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","567ba5e58eb837679269c4417515d2d4"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","fda97c71acd0829bf825f1c99726ecca"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","02c5b1a1799400af63a5535c1806cc11"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","58f8886e8ca27834ed5c08b84c242359"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","0cdc13ae264ddd110c8d464c176a695f"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","269c06141be1a216ca90bfaefcb9e0c9"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","754d49f3d834dc0b0bdd3e7668ff1e23"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","ee65128a6bc80a4df9e6031b7aadced8"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","2464dd031a9b8f303a0029e441b3b43d"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","7bb69565190b889bcd062193707af386"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","a10bc55e8c243d3f4d270e8eaebcdfeb"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","552f42bd44691f2eb25de32412d7042e"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","f71767724656d93bd56a581580179321"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","08935399bb9c0ba4edfd6e7ae5f6fd8e"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","26f824ffd6e5b7ceeec3546a910dbc81"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","2ecccef8d00244460fcd357b212fdbd5"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","bc17fdc15b5e268d1fd49e94d7109b7a"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","9a1d16c4bd8c752888be51a420b0ab09"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","c3c4467a3ed18fa2509d74255ffef27e"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","410aa8b5da8111f7dfd628e0284705f7"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","2984b8eefb99ba11459c49042d69f9bb"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","8ba0d7e46c37432f23b61703b8794dca"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","0c85f8a6154c2f3340f359b3f42f9bdf"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","a6bcf87cf9f2d49a2b09ae4886033510"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","cc0e9ee1dc6912f2780d2ad008feedc7"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","fd496c8151c50a7df81730bdab677220"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","f0e2dcb16ccf8ca8609259b19530b4bf"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","dbb9065b4b27ce674a7dfe33447ac2ab"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","cdbdc567e9accbac1a78b59ddadd7b04"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","72ad66432fb7a9064b4561a6c1985584"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","241c9490635d953c46021b97c6eb4382"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","d9fd3782b69e650dbe3eb235c602ff9b"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","052e743c462c5cb39cd424499b5662e3"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","efe689c503d7c22dd69e3bd23dffd3f6"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","4ad5f328fad4d18655e7f01752406675"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","692b7e839fe02068ffcc3d14ef1b18ac"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","e9d4674af244f337ef2eddcbf30c51ff"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","580f76019f33978b7faea6507fbd822d"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","8dc9aa1c318ba2969bc26da25608a619"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","7d21b0e724c730292a7c94d5ff2dab5d"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","a36447a06933b54f841f92c887add355"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","4b0279193f429e555dced19d8f3f0abe"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","4775e269a8c0c069b57abd67eab760ca"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","d472c50ec14ce0028b4e0c5594caf7d8"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","ed1d132381ccb71307558e3715f78c6a"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","81621c303238fae6da7635483d90e1ad"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","9ea1437a1f576128a3fa6e4492890adf"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","709102a12a6c91415d58018abfae56a6"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","9584530e2ddd70fc5cdae32ba2e77a28"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","f56cbd84720033873a7f2c4121dece0b"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","1a0ec67dcddadf777af86692c9bb4270"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","d648d5c44a20a5f8278ca841ce8373cd"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","502d2d06a6404dc0288b8aca3b85911c"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","fbbb9e4dcf18319616621b5e26d4b712"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","0949aedbe7ea61d14e59216f2b37be12"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","9a28113ef1f95d5442a948919a7067e8"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","711a58a30a2745956d63e09212693778"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","2b5a75595542ebb199370b319a1844c1"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","9c5a55ad056d8296b591219e3addd4b6"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","ce7a167acf6b6bfb5bd2137a26f720db"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","a34a22f88f054af1d5bde6b97b4b5fcf"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","f96564ac679b9d95825f5a7fd9dfdfb2"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","0e6439f6db91dde2fc64aa64590fc1c1"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","9fd4ab46bfa5ac743e3ce7bde00abff2"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","9599221e32088dc75406259dbcacb0ff"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","50676550467353c5866a9eefcb6353a6"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","162d822282f4e20cffa0ef40c44a2edb"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","a731c84da0418085e7c5b7a2d30bf5b5"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","9d04471df32a8882f78a24c44e63b159"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","6e1366fc88b0936cf90e29202a3a3a89"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","cf78711b8385ec27f01c9bacb095949c"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","2ba3a0a8e4858b78f858193065dc3689"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","3c0f08267e05c4b5d24faac79fa0606a"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","87c676c28706bf617c78e82644aa90be"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","98edbf336d7cd9ddd926eed6241744a1"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","5f89177ff3ae4882760a79e1e7f81f11"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","f09c9a912eeb6ecda262f007634164b0"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","9d2345fe99ec9af152174658b7fa613e"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","3fda06752801dc83151af332045bc543"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","06e6a47d50feb3348d3a496dcde5ca32"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","8572b7fb5705c9a6be73595b935fdeee"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","f79d591128e00fe041c0114e1abe74c4"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","cca7e45fcd2e3f0b8a4d5410995518a6"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","25b6c80ccac2ac3fd6191fc3394a9deb"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","69557c4961a41793e4cff8cd9c26c597"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","32abff23ba30ae560a6f7bfe07303baf"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","3e7910be1f0b1d29fac9147807c6680f"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","a91bc99e35c8bb00f6ec224423a3b3e6"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","413a3a2ee2405911acb00d3e45b4083c"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","7337e550208c9b9e25aa85a38785674c"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","3215a3a4e0108db6a7957ffa59bbdd6e"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","1fc210c0f7ac472acc3beb84d84f135d"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","6ca34f0e1d937dfc39740abeeb399ba7"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","b3cf9d189f97d6af14d8e298e179b270"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","ead61d934716cd3f0ea579479462f9c8"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","5ba81339c47e6dc177e86d74716c2e59"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","815679fdb3c83a892f4f2810d6de627c"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","fd07f7fab54c7972d532d161b296944a"],["C:/lmislm.github.io/public/about/index.html","725cac99ad5dd303a8ee949801ee24ac"],["C:/lmislm.github.io/public/archives/2016/01/index.html","dbb4dfdb218c37ffc2dc6d0b56d33745"],["C:/lmislm.github.io/public/archives/2016/03/index.html","618567d47c11a50ec4ae60df13bfcff6"],["C:/lmislm.github.io/public/archives/2016/index.html","dad050fe9230915cd3440f62e55ca8b5"],["C:/lmislm.github.io/public/archives/2017/01/index.html","eaf7591099481532f72e2f8ab45889a6"],["C:/lmislm.github.io/public/archives/2017/03/index.html","71e4321c7f129cab8972f215656e6e42"],["C:/lmislm.github.io/public/archives/2017/04/index.html","37d87e40eea69ff697b792cd9fd25b7a"],["C:/lmislm.github.io/public/archives/2017/05/index.html","985fb64fc419735d0ce2e58c8e526cb1"],["C:/lmislm.github.io/public/archives/2017/07/index.html","ae5f2c4cc81006ed537e4570e46e5f52"],["C:/lmislm.github.io/public/archives/2017/index.html","5b8bed7212ec203498948d3991bc58a4"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","3321991936e39efa9707b8aec792a155"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e68c5d467a9ba7f0fe3a404b4bf89639"],["C:/lmislm.github.io/public/archives/2018/03/index.html","28e2f44fb054899355b8e443edee5b36"],["C:/lmislm.github.io/public/archives/2018/12/index.html","439738492f1529ca62d1d9748fca6bfc"],["C:/lmislm.github.io/public/archives/2018/index.html","feb0338d57297b6b1fe4091a020f35d0"],["C:/lmislm.github.io/public/archives/2019/01/index.html","9d50cb7f13deea7567f58c3d10ee2576"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","c39e948e3337049d119cd3c946c6aa8d"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","e745973a8b39b0a7ca569bbe4fa69554"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","938a0460b02259edae618b2e58058bd1"],["C:/lmislm.github.io/public/archives/2019/02/index.html","5a53c40819a559d05f4effd3d9c12c51"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","31c4abc4ea8522ca20174105950f7e72"],["C:/lmislm.github.io/public/archives/2019/03/index.html","96deef65d9c2317c111b4a8fcc4aaf32"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","17eba8ec3381f5e74fb56ac630d2ca9f"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","c55ecd112b1ef3cdc63dd52131ad0c05"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","c0c51ca590e67f08f699bb408fb3e479"],["C:/lmislm.github.io/public/archives/2019/04/index.html","8ecb816b038f8f917ad92730740566ad"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","4ee15b0dfd4314e8be6c1f27c5130467"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","09f6f0638336076c6826d50855f2b309"],["C:/lmislm.github.io/public/archives/2019/index.html","f4fca2cb556b74029cbd4178f456367e"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","20cd7ee61beed0df4311944065a7194f"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","46aeb9cacd07656643e771648c2aa614"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","5ab13725c5b05b92e183060566d95be3"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","2c85df62bce47e7e132f78c48b71b610"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","68c3ccb99623163b6732559777daeeca"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","e7f3659af1937dec265d31ce64da76ad"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","83da356c444cb9408f62e57f4ad610b8"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","2ee656bfa84d1c2f5d543a2ed5a3b081"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","f0b78d7e1bd0bc9d83f80397619fbc28"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","27f06312860521af7faddbea4458e82b"],["C:/lmislm.github.io/public/archives/index.html","f1b5333726bee1cbe017fffca2871ddd"],["C:/lmislm.github.io/public/archives/page/10/index.html","a0564ab0447f940ab5f48b4ba142321c"],["C:/lmislm.github.io/public/archives/page/11/index.html","e851cfb3da7eae21c86be7aea34e41cc"],["C:/lmislm.github.io/public/archives/page/12/index.html","fba77dd1bc9793bb9a9add767be156ba"],["C:/lmislm.github.io/public/archives/page/13/index.html","d3408e53ec4c51a3db2706a11b82e362"],["C:/lmislm.github.io/public/archives/page/2/index.html","f2314de273d7cda91f8edc1e62ca9a7a"],["C:/lmislm.github.io/public/archives/page/3/index.html","3f1e4f385b092402936a1c074978fc83"],["C:/lmislm.github.io/public/archives/page/4/index.html","903f0de067b8b41a5da8711bb4d97d3b"],["C:/lmislm.github.io/public/archives/page/5/index.html","4d651a0fc09260c24db68390dce3a1d0"],["C:/lmislm.github.io/public/archives/page/6/index.html","5aa600e757c6ba7f9ebf88e7bde3d8e5"],["C:/lmislm.github.io/public/archives/page/7/index.html","2f219524c659f7ddcc93acbe5c828847"],["C:/lmislm.github.io/public/archives/page/8/index.html","938b034789c612f2e08775f2a0f1a8d4"],["C:/lmislm.github.io/public/archives/page/9/index.html","507c6a0b2a3cc113cee18cde1c93e68b"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","a906ddf1511e321757959cb4d97c9613"],["C:/lmislm.github.io/public/categories/index.html","f005e781046bfe799cca37038893f7ca"],["C:/lmislm.github.io/public/categories/xx/index.html","9d21949190539d04251de2ed5158c276"],["C:/lmislm.github.io/public/categories/学习/index.html","7ae5cd7e500d5f3d01862605d7ab4420"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","1790f59a0cd5ae1abc5af987a0251b2e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","e385f12ad89e4e218d880e8dee3d1c51"],["C:/lmislm.github.io/public/categories/工作/index.html","986efc0fdfc69a26f5b38644b227784d"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","e84c50bf1d4644288096960df0d45e10"],["C:/lmislm.github.io/public/categories/技术/index.html","b5e5b4894bf67f0dc8e94bd9c3d3e72f"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","06e4931dd9006f619ab21513f3d4b24a"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","bd24b7f56c7d054c786cf4c04d1fd3f5"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","af222bec2157a53274788e6f1130a829"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","94b1de11a0a08b3eba0729534772d372"],["C:/lmislm.github.io/public/categories/日常操作/index.html","bf3aa1aa43751abe0c728924335e9009"],["C:/lmislm.github.io/public/categories/生活/index.html","afa3309c476f3f36880884ab09b90538"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","421857a6fd03bf024e9dd360f7a69acb"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","fc4a355f9410e3eaf69d4ed1d3166c0b"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","b06c3b70c4c1ae2dca3a1679e2d8661b"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","c5c9c20ac491495e30b3247753677692"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","7e3cf8608f3f93683c2b901aa58c8228"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","c8a23e9c11b753b4d879055d97fea15b"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","5a0dcd50d0102c6e690b53d65c27aa2a"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","0c5fff263ebad03eb69915cbaaee7639"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","bd45bf16a2a6c881ebafd66d4449e5b0"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","acd3b5ff3de305d125625856c70a419e"],["C:/lmislm.github.io/public/page/11/index.html","126f1b16d7a7e34c0b0ebb0a44359f5b"],["C:/lmislm.github.io/public/page/12/index.html","0780384a4842242876180100b2e943cc"],["C:/lmislm.github.io/public/page/13/index.html","83237860b8a59cc1b2d1965c806c69f6"],["C:/lmislm.github.io/public/page/2/index.html","baaace64e8bcfe55190b041405c4ec85"],["C:/lmislm.github.io/public/page/3/index.html","a2993c0827c8f7d29cbd0a87273049df"],["C:/lmislm.github.io/public/page/4/index.html","5f437198d81a38e14502634652ec971e"],["C:/lmislm.github.io/public/page/5/index.html","c2e4785a8d53c2b22a59d502e8968081"],["C:/lmislm.github.io/public/page/6/index.html","4ba4611dffea2c7d8cd4f34453074152"],["C:/lmislm.github.io/public/page/7/index.html","4485e9536f3f777e9be31250d49000a4"],["C:/lmislm.github.io/public/page/8/index.html","5b58447d948d64bf4d4083efd2067e14"],["C:/lmislm.github.io/public/page/9/index.html","4bdaffe541b8c91515d2b49c634de1ef"],["C:/lmislm.github.io/public/tags/Interview/index.html","418c06372f5b6fa9f7a1b52f74627a61"],["C:/lmislm.github.io/public/tags/JS/index.html","b9f66f562bcc7e13d7b1fd0f47ff2284"],["C:/lmislm.github.io/public/tags/acm/index.html","d9c3cc705c027a58d3a136cf3f018744"],["C:/lmislm.github.io/public/tags/c/index.html","6cd163a368f1ae3688c38b1e6c79653a"],["C:/lmislm.github.io/public/tags/codewars/index.html","894ce7d84fd60197b80f4004d64ad60e"],["C:/lmislm.github.io/public/tags/css/index.html","6fd2230c0229d5c63e9424a8c9a0889e"],["C:/lmislm.github.io/public/tags/git/index.html","1e915e84aa8bffd62419a5cde6fc5b1e"],["C:/lmislm.github.io/public/tags/hexo/index.html","333e2025cb64d904e83486973e1e1a76"],["C:/lmislm.github.io/public/tags/index.html","d5ac15642bf0b0a529d0b952b5effc7a"],["C:/lmislm.github.io/public/tags/markdown/index.html","3696fe81aa12feff795c0781cbd02663"],["C:/lmislm.github.io/public/tags/poj/index.html","325698623a798d99c75f405eb9dffd87"],["C:/lmislm.github.io/public/tags/shell/index.html","5918ba123736f861665c7fdca09bb27f"],["C:/lmislm.github.io/public/tags/vue/index.html","f1756aa6d7122f4caaea6b00df3717c6"],["C:/lmislm.github.io/public/tags/xx/index.html","f856f5e596e455eaf2ba9610e9f4051b"],["C:/lmislm.github.io/public/tags/前端/index.html","0806901b8a6e75b1648660ca706987f2"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","29874819ecc457717e9eb7ab9401a586"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","9f30356491de31646009861bc26656c0"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","e65ec0e1e5e1e5891a5af19989c682c7"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","b45ebe1df1f0810d21a4d60a14cf4112"],["C:/lmislm.github.io/public/tags/小技巧/index.html","f9339f5e561ac212bba5813146b221f8"],["C:/lmislm.github.io/public/tags/展示/index.html","adbed474582af2bcccc5e5c611cddf63"],["C:/lmislm.github.io/public/tags/工具/index.html","5901a786e2b433a9e3fafa16781e0107"],["C:/lmislm.github.io/public/tags/感悟/index.html","dab298c1067e69ee3ce74ab00af9ae45"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","dc9f8269fda333d6ac7991d06acf293a"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","00e764cfdcbb8ed30d835493b2c9ceea"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","6f81a6715fee52e212aa07a1b6c56966"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","e6f878245099015c8a72dcaaf1b59ca3"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","c904e4d5a9ed56ea415f23eb82f0b24f"],["C:/lmislm.github.io/public/tags/练习/index.html","cbd377d8b24c13b953686e9dc3b61561"],["C:/lmislm.github.io/public/tags/编程/index.html","35e197b3c7aacae012c1047c0b6a28a2"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","294b534f2d369c13ca31df8107eccd4f"],["C:/lmislm.github.io/public/tags/运维/index.html","74e96890eb33bcd42e44ce9efc08a896"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







