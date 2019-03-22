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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e4bd1bcdaa0f43f4e34a5eca1e7d2c50"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","1a75d76dc1a8b73d0389272234d4ba87"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f2874dd60d75cbf848d1486f5270cfa9"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","4a5b08ef0fd2aad7ffa83d6546a2e0e0"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","2791d39899d1a8d8b44b409d458234a5"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","8723721955bd86789b406b38548aa0a5"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","99ddf1b14db91573597fd41db631bb2c"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","456cf69570dc061d7ede62f60b0996a3"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","cfe51f5fc4d6af57e832fb673f2d7e63"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","828d2b86692d0d45fb0ba8e0ae099615"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","0bdda1c64cf856aefdfd24e4aefa3794"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","53ffef3a68b6860d7632a8b4150b6e47"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9689b770686fb617616a070c67e4ff2b"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","6be42aa16749c058fe95cf3ba376d683"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","d902248bc11fe5b230743f8fbd4a57f6"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","b1e071f842cf5a399d0ce1f529c4120a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","59f680dd85d7b52d0b2796e14bf8061d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","90be5746ff914adf7ac086663fd873be"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","3cd404fe9a1c0727bf97c15d96a0f776"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","66c943f0c5576b9ab147195ed0226a73"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","33d57dbb597524e94129c54e1be1af5c"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","c291549cb12034366815dd96f9669dbf"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","f694b31d2a7f78e1105a03e26932b279"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","d82d70e16035487c25075f055e36e6d0"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","5f4a9bd6a2edcafae3dfc46bd048d275"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","8ad06f085f2c7bef7979a56b718423df"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","b7e31017c9887fb0975bde04c2490c97"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","8c475d6258dff1a6a2d698693995df90"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","77240c728a23acaa55d12a1ec25ffad2"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","b78c3585019081b344999e03035a1b05"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","31b0d5c8ed2c62979c3748d14e522f26"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","af226c767c8db2cb6bef9d83f0397d31"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","9005314d4e295575ba0265bca9177af2"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","206df171b21a5773a6bd2e2280bf4bbd"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","4d2b28b676d1fa8fd1ea66e04b4bcd65"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","b2909ee7abf6c74d39324b1964206b7a"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","12414f6da775068756cc8af3c4fe4967"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","2503af6416fa1fe7fa8622316b79250a"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","467e686da2729eb2c168548546a59527"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","7f89a63edc8109f2c7f0babbd4d18d7a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","783bbaf37f549dc0dcdaf337b3c8157d"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","fca9acd435707a9ceefd13e8cd9f3f27"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","05db9b6515353256f145487f06707b5a"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","0899189abb04cc564b5fde73fef3efa2"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b998def44faa66427401262094365de8"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","c85f39089f3cc8494ef2b057a7ef0876"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6c159eac83b6d7ca3d496984b5983c8a"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","a02b35a6fd66c80e3cb5b4507446ce24"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","0413331d803981b52301ec4e6a312dc0"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","d8b1ec748bf9155fcdd351a352f3cb48"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","81f0403ccbcfdff77415f0f955dcd35e"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","419dee8c0091fa1ff330393b156b624d"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","44a2757253f6c15bc893e756c37f0fe9"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","b218dfb5e3e0a01e662d2299fe598927"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","02f49c2af51951f190e76b9eccad3c29"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","e0aa3e9589b26be1e25e825d6f4644ed"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","6f76b7f29733c80b5c67ae52268f8dd1"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","6ce2554f5d529a90a2db7ed108f96ee3"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","c190f06df74dfd4a02d9cbaec26b9c30"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","c1edec18f5d67b61a436a6d849589e52"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","ac363429e4cc7511e0e909447e8c442d"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","20a4bc569c46d073458b40bbd35ce7b6"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","58f2cbded39df67d85c838e0fe5c6e5f"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","acce383725d8049022f76a3f5827bb60"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","92691aa8e28be4a457dff8301abaafb2"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","0a58d8c99848983b59b1097608db9d35"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","f97cd469a75a11639b47d2d14b5023e9"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","19af3882c267a082897b69a40619b6f9"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","7b1f1731f5844e9949852953f9c662ef"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","56dc6e14bdfbad86fee2a2ce8491bb23"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","16b8cf14e31a089487eb6382e950f11c"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","4d1f2405e664394845e948ac7a9fe912"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","a14975f57f1dcf8ca73e1a1549361d87"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","4ee80cd5d5e61dc4f4e4831ec0358ec2"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","5dc7ce3b1ea80cf089c451bdf76ff3a6"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","80375b24ad2ab656f5244730b38afa9e"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","67c03461e701dfebf85841a6bb70c6b6"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","c5aa855cbe5a413b0bca9a0fd4c7f588"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","b43f61c8d9bc868c1e98628bdb276508"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","01cdff7707f09b66ae5f5767e7c83c3d"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","06545b3f24f22bca9db0e5580734efeb"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","7772ff1fe5f752095a6a34c50cff7566"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","40a5cd7dfec5c28cbe9301da604a60d9"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","f5b13f6bae1782be778667830109ec28"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","9b5edde31a4302d488968a85bcafd762"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","719b598e3f3975fb513f24df5a96a502"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","af5c6ee998c0c515f911b0350307adde"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","b1a0ac9a04d02e5344f9fcbe517806a3"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","7013f0811ab8f698ca71b1db07c96fc4"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","a0aa7d8ced232d31de5a318749f29c6e"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","ec2a8423599c2acee5696536138da25e"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","96f9538947103bd0286c24bb13c98843"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","b38c3831b76d25a9a68afaaa46f4bb3f"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","ba350e1045b28a84a458663c79f936b3"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","471f79c4afbb265d7b36c3ef48e59249"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","22c2b0b7cfaaea92c707fc13f8bfecdf"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","c77f32672d33936f87238d91baf66966"],["C:/lmislm.github.io/public/about/index.html","240e042b8420a3cf915e0c2fc9ed80c1"],["C:/lmislm.github.io/public/archives/2016/01/index.html","8ceeafa0003e962132b2fee989a13b46"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8f69bc67007780eb0b7724a9416d80ad"],["C:/lmislm.github.io/public/archives/2016/index.html","a66370ddcd5894c2eade4d2a55de3d1e"],["C:/lmislm.github.io/public/archives/2017/01/index.html","0c576d761708c294c92563a2829d0fe9"],["C:/lmislm.github.io/public/archives/2017/03/index.html","4c012484b66dc34aef73ca1b8663c063"],["C:/lmislm.github.io/public/archives/2017/04/index.html","47b5bd508fb4f012bf351b48db624ad4"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0435166488230a9b3d5ea1202b31d0de"],["C:/lmislm.github.io/public/archives/2017/07/index.html","580b1604cd7249e74df42cc5da68e586"],["C:/lmislm.github.io/public/archives/2017/index.html","cacf700e3ac93847f7899ccb36ab9f3f"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","bc5fd1979212d3f93c48e8ccbd75cbae"],["C:/lmislm.github.io/public/archives/2018/01/index.html","b4e73914f8b2af01017a42c6c15918e1"],["C:/lmislm.github.io/public/archives/2018/03/index.html","aeeb6f5430068b2d71c8f250d56172a0"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c01a6322fb2710cd5aadb9a123872d0e"],["C:/lmislm.github.io/public/archives/2018/index.html","67f1bb0a3c0467255d7f68a2318547a8"],["C:/lmislm.github.io/public/archives/2019/01/index.html","fc288f6c6ffd60f8bbfbd96cf51f37da"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","a6b26d8b88c01abefacc5c28d307d8b2"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","afef71c2bb9640597656ec29a3114871"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","18c6cf7dcfa8b57ffaf7fb7fca0bca29"],["C:/lmislm.github.io/public/archives/2019/02/index.html","64bcd021bd241df3a82d31b8c5ff7584"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","5d1a5412938b1b21310cd6d19b7dc50d"],["C:/lmislm.github.io/public/archives/2019/03/index.html","5c328f2ae27809dcea751afdb2b7fc73"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","55e06ed2beecbdcb9c5abfaa681b7b41"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","25a276c55c50d46466594af58216031c"],["C:/lmislm.github.io/public/archives/2019/index.html","a67e31bd182758c367c470ae7c94090f"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","065b2227dc4eca4ae273041013a683ad"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","6b21e3e5243b311232a9692f9754fe72"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","974bed8658980a619e2d3e6ac3d97088"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","feebe314eb40f5fa376add528926f541"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","f4b45bedcaca0792d4948f4235152e2d"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","0b88ac33dbc004157ca2f25d71df7354"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","60a2f528cc6c4dddbe8dc7679209e456"],["C:/lmislm.github.io/public/archives/index.html","40ce1d4803d91ac0bfb6abec3e827e1c"],["C:/lmislm.github.io/public/archives/page/10/index.html","56e154bebbbe4f02fb93238f2a660eac"],["C:/lmislm.github.io/public/archives/page/2/index.html","25509918a1a68b280de2023f86ba2920"],["C:/lmislm.github.io/public/archives/page/3/index.html","9f39cde9f1e71a4c04b1f146089e8aa6"],["C:/lmislm.github.io/public/archives/page/4/index.html","332a8e138ea1d3c9e64bf3836eba5f7f"],["C:/lmislm.github.io/public/archives/page/5/index.html","d05ea06b0ac32464f22c38e85acf0630"],["C:/lmislm.github.io/public/archives/page/6/index.html","1a571d8a6b7fe694ecc0f35e15fde488"],["C:/lmislm.github.io/public/archives/page/7/index.html","b8e0b07e434623640b29281027c43533"],["C:/lmislm.github.io/public/archives/page/8/index.html","2ea3f99acb18638dd5fe88e38f49bfbb"],["C:/lmislm.github.io/public/archives/page/9/index.html","836f3ed84697edf86a7886672e860f59"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","dfc3412ec54264dfa3147f7cc3bf9494"],["C:/lmislm.github.io/public/categories/index.html","0fbbf5da9d9b21064d8c0be92599d407"],["C:/lmislm.github.io/public/categories/xx/index.html","2cfc0103ee48f0b32b27da65b43e3448"],["C:/lmislm.github.io/public/categories/学习/index.html","753ca4fddf75b48f48bb6ad4410894c9"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","561fc66760e15cb7765d6134c626344a"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","d395d957ec9bd5b1f58025b02bcda353"],["C:/lmislm.github.io/public/categories/工作/index.html","2df0392be891e42ea5a28dcebef073e0"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","ae7ad7e34a007b540b09fab0b4b7b06c"],["C:/lmislm.github.io/public/categories/技术/index.html","bbeda99de6d030021aaf2cd8b6a3763c"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","5ea1abccacf5245066ec744f978f0f4f"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","5c46c9e3c711cf57a79f3f5c7cbc70e0"],["C:/lmislm.github.io/public/categories/日常操作/index.html","69dd0e3d188199ee4f464d52e2cf05d1"],["C:/lmislm.github.io/public/categories/生活/index.html","cb6bc15ac2eab630738179eca6f32ef8"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","4c085fcdec9f133ea351dba201de0605"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","8400a672db2f108c1c736cedeb6b6aca"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","a2047bc34ec58953ef250f9fd712d070"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","8cb8878bdf3fc5611a0fbb249b367479"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","44113647bd1521375f2650c655fff88d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","2cf10a5e9470c2fb535789090ee4a44f"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","52a9f03ad085cc8fa1b71b607cad5ca7"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","1c6c87beb5474dd128ec923712a0b114"],["C:/lmislm.github.io/public/page/2/index.html","0be5e01772453874a7fbb46e10099e2d"],["C:/lmislm.github.io/public/page/3/index.html","811ee42a198b609f610677e12dd5cda3"],["C:/lmislm.github.io/public/page/4/index.html","1fbf7f7e543c19667509ad7263f57260"],["C:/lmislm.github.io/public/page/5/index.html","caeae7b8cfb7e1975767b18d5e801783"],["C:/lmislm.github.io/public/page/6/index.html","3b9b05aafa8d9aa6909b528b41426691"],["C:/lmislm.github.io/public/page/7/index.html","8ffc1049d0bd18a95724252d0802cfed"],["C:/lmislm.github.io/public/page/8/index.html","d0118f9628e43ac551000ecc1d10c7ab"],["C:/lmislm.github.io/public/page/9/index.html","98a945dceae31864109fed47b6e7fac2"],["C:/lmislm.github.io/public/tags/Interview/index.html","d609edd8cdab414068d8eb3a7d9adcb3"],["C:/lmislm.github.io/public/tags/JS/index.html","5da989844a6d927588e9f4a87a95467b"],["C:/lmislm.github.io/public/tags/acm/index.html","c9a1f7b33a41556cf9c59b5c511e7340"],["C:/lmislm.github.io/public/tags/c/index.html","38a54319a3d734f50bf607a328510def"],["C:/lmislm.github.io/public/tags/codewars/index.html","bc19bbd046da86776e0fa9470b19c14a"],["C:/lmislm.github.io/public/tags/css/index.html","40a0d0b0bd425b158ccabf51a26468fd"],["C:/lmislm.github.io/public/tags/git/index.html","bea43b45cc439c0c31b8bf78bebb7d0f"],["C:/lmislm.github.io/public/tags/hexo/index.html","e62137aece3c65863f568485502d5f6a"],["C:/lmislm.github.io/public/tags/index.html","ba5d0538889ec0891d593816813a1be9"],["C:/lmislm.github.io/public/tags/markdown/index.html","d47695fc010714b6ae60c3bdf931ad38"],["C:/lmislm.github.io/public/tags/poj/index.html","5bfa787785f103405fbafe89298d331b"],["C:/lmislm.github.io/public/tags/shell/index.html","aa7767c0423630dba22bd1dae3d6aad5"],["C:/lmislm.github.io/public/tags/vue/index.html","9d90e9f6b8817581eb919c52eee064ff"],["C:/lmislm.github.io/public/tags/xx/index.html","db42626fbf16c333c089f4d65debeb85"],["C:/lmislm.github.io/public/tags/前端/index.html","104b85d82fd737d0b25ce24314bb8a54"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","e15a264aefcb55e9d2436da5e49943bd"],["C:/lmislm.github.io/public/tags/小技巧/index.html","1a5581df9a1a45418551872ea7f11b79"],["C:/lmislm.github.io/public/tags/展示/index.html","fde51412c2ba428ee98c9d8d715b8766"],["C:/lmislm.github.io/public/tags/工具/index.html","6f37a75de44a23b6eb6c9994aaa04f51"],["C:/lmislm.github.io/public/tags/感悟/index.html","a339f8cb476e219b340a12de5225ae60"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","be0c73178945632d5e658a4215858eb2"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","4f266b46921adb287f85283f474a3fc0"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","b66d070cf76764f9d75937ea9ac0f168"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","f4a008bcfe0792bf85173b9e6c2582a2"],["C:/lmislm.github.io/public/tags/练习/index.html","dc7da32e688b0132993a3b585c9d4ce4"],["C:/lmislm.github.io/public/tags/编程/index.html","8a568dffa84f21dba3beb4e6d71bae5c"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","74bff2a0953b5dd285aa1d3d252bd222"],["C:/lmislm.github.io/public/tags/运维/index.html","9a50013eabfc99a17cc72af7f7efc04f"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







