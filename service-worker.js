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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","0a6a80e6465181ff9955a2dd18a6d1af"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","3f69c5fb39e83b35cde60f3524a4e5c4"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","cfd3f5bdc0f4ceb7e3687872ddafa738"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","91a27a3ad1cfdaf9b17048ce5240db6e"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","2540427a88d964b2aca8a0c764c821b2"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","4967c3fba512f8dfcae8abf8bbc0676e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","154bc8304be05614bd578027cb3536d8"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","65a38c82aac9b2f04bcc7bb84434ee74"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","33d113b3aeb846b245a5a8a163002d6f"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","5e995834c97b5c39e88a5e536d3cadd1"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","23679ff140b9050c7279ccca087da024"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","089d60c786c45198904da089c15f8d32"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","d210fe4c2319287c3d91ad8522b6bd65"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","a25e84314b8499e5710253724f6d6b67"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2f3cd161e763c45af7468d74afba8d65"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","8b0edd848243ec44fde90a97e2fa9835"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","02cc92e5a96705c59f211577f8f298be"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","2688e2580ba55aaa5a93bfa7ceff17ff"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","1f88fdc4e64579cef41eb6cb76b9f5f2"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","b10af7b7bc146f51a4249535c1bef856"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","7aaae807c68801fc23404ffdc33cacfb"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","1b8abce7906b1f0d33d9750d32eeef7a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","6d2082e4c46c27bcc01d49c157c04db8"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","56e6df4713316eaf8858bc1f06733762"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","ba05a703ed988cdc2b93c9ed814707e6"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d9830de0c32515c6da82fea31de33b24"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f23b775c7897f205fc839f9e9c629ce5"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","752fe722cb572cf59a9a455af0a94fc2"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","520c44c6a0d914d93f35b4ade85b3d2e"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","d6a2c56c6e9cea05e871b3fd2f07ce4b"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","7cf055b9c0e059d9e6f06b9d80f8234f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","7cef8801daf90df653afccd56d41335e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","336b5d8b3a1b9a353b08c163aead5ead"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","e3554db91ad2ca17d3d9339e678c4776"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","9727a5331c07740e10bc65f87432eb71"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","1765720a986cdabd152cf2427e8c999f"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","b45feb8c8bf5a2195d8b5b81c1245f9b"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","4c9e641a66cbf61b4e5a40cecdc32887"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","6c3d94d25e133dcde902836d3e3de1b4"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","73464c70443c57658a4ccbb057fa6f4a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","7f1aaf09f1421c6503e5ff59d09072e1"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2686a3f67790b53753cd5ec5060ee990"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","3da28babcc10fc9975e4b5ad5dda77ba"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","89677596c8e9f613534be01470a57a9d"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","a7e71a7d748535827e45ba482d644c27"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","088d2a58a5d5ca7cc2e803aa60bf0a13"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","e619be59c8d40caffad58446bfae41e5"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","b8868fc2d076b635a87f4396ef887e49"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","6582a53710a3cefd5b123d04c9a3eccf"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","ec37a944fd7d105573e96312f05689c3"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","08a03b1e51679f22c15c53613bed6222"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","bd9cc20500a8bd91aa95b55873e47724"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","6c7f05467fd3bd27285f24bd4fc64197"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","a5ca5f9f5259d1fc1412c21b3266877d"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","fe1658e0bfc642f6ee8cafd040e5c6b2"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","46689c6f71deedc1ce0a97725a3e21f1"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","c75972fea973c9b6a7d0bf7a05bc18cc"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","4d30d4c43a677a3129b5bbc83c2ae941"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","90be1edf588e81b60d9069d150a43876"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","a2e5a059b1b92bfbf0e302ad419294b6"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","836327c5546e624c061859302984e60d"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","b1b6b5b27005eab8c9b87fb5999d747d"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","08acb05dfdac1e1f28ff170a12a66af6"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","c2ec28bfc1cbbbb583514866edcbd862"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","5b00229cfc066ce312cc03570ce908d6"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","c31290b96eb758cacbff069dd047e271"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","fb6db43ee91bccb704ef417977c2ade8"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","109f78bd9f2d14d843e879269ad6337c"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","c624079cfe14e3910c7f146f45004f20"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","6ef24b85a5d4198d19499ef01001f692"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","014e9de13b15d5a55abbd5d3c786a98a"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","2d637a9ef57e3361da7ac5ab255ec763"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","805876075a7fd499f47eca873133278a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","4eedfa83664d6dbb3255fb6fb2901190"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","57a3e3f218b1bf84272ac66860a8bb8f"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","6098b737de37fe00722dc2ee46b1b420"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","0475c2369b3bb271e98513107147bbf0"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","10fe50023e712cd37b63fa72e806a664"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","f9cf51d6ed5b8db8c8a899f61937c411"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","fea4626a04fb74ec19208a40e3fb5efc"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","d1752b49534e44026c9bf9fdce207dac"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","c734bbbac40b7ed84e514a5ae5e3dab9"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","9d79882a8244c65e28e172f3856e3181"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","9530568514e80d49641d146a464a5302"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","eb9a0a27987d70534e2e8ed2d2065e7d"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","f454271ff1b5137f19563c83658a27ac"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","63fc3d7a51b174f40242f94d844c93c0"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","5563eb9bb1d985b7288ed1e41d48e5c9"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","31ccbf22e6ca49a6a2feff107f3058cf"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","50be14ab1d1902c4dbc215518dbc01ea"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","4d5a01bdb156c2c1e19ba4d79804a04a"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","32d63d856b633709444393810bc1bf8f"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","4bab260d38895a779dfc2c1f85494c01"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","d56ccb2a1aabdc91a66d33a9f19b99b4"],["C:/lmislm.github.io/public/about/index.html","84c8f29fcdf6928fe3de698ae0cf353e"],["C:/lmislm.github.io/public/archives/2016/01/index.html","42919901f0fbb56f71c340eeddb9a8fa"],["C:/lmislm.github.io/public/archives/2016/03/index.html","654d75127fa94a4a70d71ad8eaac6cd9"],["C:/lmislm.github.io/public/archives/2016/index.html","262de2569cdcf92766e8c9c5c8b15102"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e7717613ff9933911f8b548b7ea95f0f"],["C:/lmislm.github.io/public/archives/2017/03/index.html","481983751e82d9487a058718e451bb0c"],["C:/lmislm.github.io/public/archives/2017/04/index.html","765e947f6065fb524983ba98e19bdc28"],["C:/lmislm.github.io/public/archives/2017/05/index.html","8d9bd3afe193214f833308f776fa3b7d"],["C:/lmislm.github.io/public/archives/2017/07/index.html","93b3e7191123b86b6aa47e12aa6b1c04"],["C:/lmislm.github.io/public/archives/2017/index.html","e46384a12bc526439d342c98daf46bdd"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","3b74cb456d59947cea801f135f135945"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e49a876cf026b852540fa2e32a71b30d"],["C:/lmislm.github.io/public/archives/2018/03/index.html","70327fb45e7e1d16494783ca1254d647"],["C:/lmislm.github.io/public/archives/2018/12/index.html","f1c2bc7f4fec3808bed38ece628343bb"],["C:/lmislm.github.io/public/archives/2018/index.html","d7737e36efdef50efa36d2a766516dae"],["C:/lmislm.github.io/public/archives/2019/01/index.html","1abe35311bfd8d5938c7854fffeddb9c"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","43da460c686a44ea9ba50fac1593a12d"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","1109cdb4ae9f1c621e6eb08cedb38a85"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","861b6590854ade8bb62eba25c6f62e8f"],["C:/lmislm.github.io/public/archives/2019/02/index.html","0d6c268610af51c4a38689c7b41e531f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","074bdde784d979f89ddf99c56099eb5e"],["C:/lmislm.github.io/public/archives/2019/03/index.html","5846289869da63a4d8e975b106a62f11"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","b3a211866c7fa0b116b2c386d091b220"],["C:/lmislm.github.io/public/archives/2019/index.html","abe3f9658b34637f6376b3501327fb6d"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","1356100d0ffa398728bfad08f6e64614"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","470f5bbe9ec82304c94d14190ec6d3b2"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","0d832dd5dfd2e9d282c1c7d9a2d0db16"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","3bba1ffa661864c9e6722ee9c72d110f"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","29611124ed7f7859166987afa9970b0d"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","5e46a8dca3903af68a2d43fdf6bef040"],["C:/lmislm.github.io/public/archives/index.html","fbf32c0b88b00c7de9cabe64f24f2acc"],["C:/lmislm.github.io/public/archives/page/10/index.html","77b83824f20249168d7f92287b846a53"],["C:/lmislm.github.io/public/archives/page/2/index.html","a14749762e3225e49e07d98bd98918f1"],["C:/lmislm.github.io/public/archives/page/3/index.html","d17d0d126ca97240f622ea71a9b76551"],["C:/lmislm.github.io/public/archives/page/4/index.html","23c4446fa2d9e55abe687bdaac0478d0"],["C:/lmislm.github.io/public/archives/page/5/index.html","e99b0ae1c8bfeed316e3a27bf3df4dca"],["C:/lmislm.github.io/public/archives/page/6/index.html","0e9dba31b1694004b68a5a294bc993a4"],["C:/lmislm.github.io/public/archives/page/7/index.html","6d2ea31e0f942bf05231e5b96b9a17b5"],["C:/lmislm.github.io/public/archives/page/8/index.html","dfaa059d2d9efb35da9db38113449e37"],["C:/lmislm.github.io/public/archives/page/9/index.html","78b6f233ad147a75004237c66578fc04"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","e2c2056314ca834d881cddc188581409"],["C:/lmislm.github.io/public/categories/index.html","cfe92c20379ec1aaea8c06a75d9b7e33"],["C:/lmislm.github.io/public/categories/学习/index.html","50aabea9aa155aa0faa426860b04da9e"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","55ecf3ea385f184ec2e05dc15ccded7d"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","bc16a0af22a6f2529f7ba5074b8ab68e"],["C:/lmislm.github.io/public/categories/工作/index.html","4e253cf5ba7fe5f6290bec60b2e1341d"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","1c272f1bdc583bc3ad76554660b3bb8d"],["C:/lmislm.github.io/public/categories/技术/index.html","3776616a9cc2604bce3da458d8e81f8f"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","c9e31e73f6dbfb0e17976e274f15f819"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","501174a2cf3a70b90f76e8fda8b899d2"],["C:/lmislm.github.io/public/categories/日常操作/index.html","731113ebc01e6e18c90a9e0895b14bfb"],["C:/lmislm.github.io/public/categories/生活/index.html","23bfcca962c8561a22f405cca54b2f0b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","2bb6f7fdaa3117cac0430e08a300e0fb"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","401036e827175af53db2c980031bec00"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","c0b7da61f173c53b60574637a3ff09c7"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","a1c39db23edb36a4445497115df1725f"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","29dd81ffa28031799d209695af7a65ad"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","5830a6cb6338f00da8105e81304ffa23"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","e717ad4f3bbcb2a8ab845caf4fe70e84"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","5757336a964de6aa42a618d6673ee6c3"],["C:/lmislm.github.io/public/page/2/index.html","06e0f6d4b7c5e632930df42beb684692"],["C:/lmislm.github.io/public/page/3/index.html","5b84b7f6c9d9b6bac7010b7a42429374"],["C:/lmislm.github.io/public/page/4/index.html","80a80dc3b7b223d21aed9f2c5bb0c591"],["C:/lmislm.github.io/public/page/5/index.html","e806b79aea8e4660226c9c5cc052ec8b"],["C:/lmislm.github.io/public/page/6/index.html","6f4f2510f69d48959b66020b8716eb8a"],["C:/lmislm.github.io/public/page/7/index.html","c90559f147da193c226cd2446ee29f91"],["C:/lmislm.github.io/public/page/8/index.html","f0d18453ffab486198e490c50d7c53e0"],["C:/lmislm.github.io/public/page/9/index.html","f4f21d799fe1b2a67cd5bfe513af322f"],["C:/lmislm.github.io/public/tags/Interview/index.html","02ea9e38e2b643378b77e6e65ace2250"],["C:/lmislm.github.io/public/tags/JS/index.html","d3160be80081e194c392ea36019749fa"],["C:/lmislm.github.io/public/tags/acm/index.html","726eba7a4eca01275e5c46be0be3db22"],["C:/lmislm.github.io/public/tags/c/index.html","cbd894af80715a11587edec26d5f2fcc"],["C:/lmislm.github.io/public/tags/codewars/index.html","77a288c9980eb78eb93df22ec28b4250"],["C:/lmislm.github.io/public/tags/css/index.html","ea7247f7da1cb4f7add5ac1164dc9b36"],["C:/lmislm.github.io/public/tags/git/index.html","cb9454c60b1937d448ec169988bde9c6"],["C:/lmislm.github.io/public/tags/hexo/index.html","bb7291ab0da4391fb558f14e76b01b56"],["C:/lmislm.github.io/public/tags/index.html","193ea7aa807f1e1589bdaab287674600"],["C:/lmislm.github.io/public/tags/markdown/index.html","48be684914aff12153093da9ce44e771"],["C:/lmislm.github.io/public/tags/poj/index.html","5fef361382afd14034e1151d195db488"],["C:/lmislm.github.io/public/tags/shell/index.html","6fd89a78e46b22ec0b6266ff8c28a7d0"],["C:/lmislm.github.io/public/tags/vue/index.html","e7fb20442474cc2f8e2ed2b7b2c853f9"],["C:/lmislm.github.io/public/tags/前端/index.html","9dfe3eebf54867a0b5c1aa7bb4c87a18"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","a7a14aa7c81c70774e5173af05e8d79f"],["C:/lmislm.github.io/public/tags/小技巧/index.html","e69159ecde8dc02e1657bdbb60fba1bb"],["C:/lmislm.github.io/public/tags/展示/index.html","70a9c82248650f75dae4bf06c2c5e9ff"],["C:/lmislm.github.io/public/tags/工具/index.html","e62155e37a760d37ead60fce3debed43"],["C:/lmislm.github.io/public/tags/感悟/index.html","422891171d34abca071e57e665e4a839"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","436067b9838923ee48850e0899770a6e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","efb6c607b90616b94f6e50c18e3e7757"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","1906c4e7ff4901d5e036565c950f2726"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","d21f0a48f356c6e5c9f7e722cdd33fdc"],["C:/lmislm.github.io/public/tags/练习/index.html","82aedd6191ca249ea4563ef03dd627ef"],["C:/lmislm.github.io/public/tags/编程/index.html","19ecb03ba4b83a41b50ea55e871633a7"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","a3872c99f3cd097fdd6e3d90d6eaa223"],["C:/lmislm.github.io/public/tags/运维/index.html","226444797fca9efbcca1ef8aa01e2fd6"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







