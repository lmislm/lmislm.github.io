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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","39f3839539b6cffcb56541f7172a2e70"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","15b9825064439c497f2ce9d38b688d0f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b0a89855374bd7c83127d8c3951e9614"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","aeb3a7b79bd51cf548f997480342c838"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","7cdfd03dff2694f077eb74602b181bcc"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","106c0f318dd1ffbc9b479ecdea0a3763"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","ddca5c4a43560b81fae08ff0eb23b72b"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","feabf12d6410fb748c36fa0a4f885a46"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","7fc4760059f8173de74e8de042321f82"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","d8c5af45905ead6156823f33d79a13f4"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","d5a54fa49964ae973b7225a4a1e0235f"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","2e842bd64ba47415bc14a738bfbed5dc"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9a522672f7897b19bd03366e452b6d5e"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","a26405731ee08c181cf697a25db00b0b"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","4bda7648cba6ff112db0a13fade7fb54"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","8234eebfbe60b828f80da8ce3f527fa8"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","be5eda39644d707fe8807d806e6afd8d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","9ffc55fc9082b1f0422940be63f1782e"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","016379dccf179443301c07850acfb272"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","cf5a0414c6472f32265626edb44b63b3"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","a866d831b707dcb814b857a0145a15bc"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6137ceb717f8243f0b5e9e8de60f65fe"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","0b7e869f9fde3fc6ced38c6eb4ef4295"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","0cad4ee681733b5bedd8fb6ddc420538"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","4718b47d013e875582b74e6e1bb3d2f7"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","89a44b6e20bdccc129fc14686c492040"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","4007867dfb4dce9dcd0aba4d4a24e99b"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","044d5888d468cb3d38110842370549b5"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0dc6c0f9aa9e92b278e34ed39623bafa"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","6a7d62c3af8bc149707fe8e58ed3d356"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","978b7d27aa93f72ddcdb11ffef96fc47"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","0a352de18c107680a55b4070678c4688"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","4f16acaf7666c1a15d0a9c1e5757b7f2"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","5d5dce7a66fa3b66902dceda9eca7c58"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","bf4afab68361efb992d60a69f5c39cf7"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","e318d4b5a35087de57511013ec79fbee"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","15cf9c24bfc4ea8da1d55ec6bfd18d29"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","6e470849554caef21deb7fa6d8b2cb25"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","5789078f0cdc822d1dc9f306ca8ab1c0"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","b6a25270cc00c98501d7c09c0aec0c17"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","2961e3d8a833527ed39936e021a51489"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","38beab619e40eed3dd2ff5f36dd6fc81"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e5d21cce8a79750d85195be301ea7a0b"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","1518c1ec40c881bb79210a0f3d1b6fe3"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","7e5f89e97677e23139549c76c0a97520"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","2187e850745b49e479a2f32d6b8e2426"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","69f40500afb68b472796272d76636b0b"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","4e38302c7f042d3d42c7415179dfa10d"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","d2961b8fac554d0e919ae72d08eec692"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","98b3462e85b41e7446ef155662bfbc2c"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","237d7f7c4af1e2b140dfd8874a34bf33"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","d43bc677ebd48d2f445518bdb6fe04f7"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","04f2294c3a71e3d967b875fd3b96b557"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","4cfd13507e0f738e7d785ca922132f78"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","e57d8afd9e76a09626d7f1caa8b78308"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","23be35b3933e6e71e9207abbeee2453c"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","eddb141b5beb131a89789282785e9f71"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","b4796559835f129a32bf9996afee9fba"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","5eb4a9dd614593227c747723368c2275"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","faa5f0d33208a5fec546b0c2747c2e23"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","372ea8ba352ab4564f1cb5bbf70b5ba8"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","a6c9559714b3a6f41d84aa6db9a9c6a8"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","7ca4401397b6c0668057b5dc719171f6"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","4eb34e5378e029849d3e6f57fc11b5e0"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","cfed4b9aa9ac9b2b58dcf5b36b314b7a"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","830a4675481ab0f3bc24738430acdb44"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","99189caf503e47ce027f4420322abb61"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","e0fdec989ee6bf0df250afa55e0e9e1e"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","6233732fe3cf82780b2c3f36c55bf35d"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","f9bb20391c003b10513659455e4cb814"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","c297a28d51e13a177fee8231d98c806d"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","38ed886a40e67ddfcfb379b2b77f47db"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","52229e1deb5bbbbc71d04e1e515c8a0a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","d20b0188427803f6670b704304709dfe"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","763aca876e2a86413cd0dc3b24570b3f"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","842a115f981c98290b1172990f390ad4"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","96a88186f3204a20eb87abc2d9f4cb1d"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","59a14351ab06a291223bb6fc9270347e"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","4a4b22f794b9756847f367f87e3692d5"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","8428d0f108f533ca14760038e6858645"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","9707c1cf3d3861df44f8bb481feb2bf4"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","ad113eca640e28ac6db86f2cbd68f9c5"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","89610ca7c1c965837d982aa1693c1e00"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","c04bf562eb5daf0d83787ff62eabfee9"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","bc0be68cbcca764ab6d61b0f4bb59556"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","6b2e70676a519d245d044c1a625da46c"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","7772f4845a700902c772d8c9a584b90f"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","163e5addc389ad5b655356e72d2ed3e8"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","32af8262bd9fbbe0b6c4fb403d209027"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","fc0d184b96f0b407504c6220f52c501c"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","31308e712f56f19483c23c96197fcf6e"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","874b18513ba845b467314fbe6af19e34"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","14d3e64815eb4907dd76577348d71d9f"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","e895cd2c7181e5fa3955a9719c0a4dbe"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","af8912ba6ea0ae99f6e0afb657c131f6"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","e517f4b20c0d329b91fae5236a025ae8"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","d847e26843933835e1f2994de71df97e"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","dab0b3a424034fd4c64ef7dd4ce71743"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","5f57bdbb36f842ad9f2674104ac38d1c"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","7ab7d9a72bd85bb007fc2a5787679127"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","f5477fcced30493657ac307bd85e9618"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","05427249e7226a702f5a81a84492c20e"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","84fdcfac9601d237e8b18adcc892cde4"],["C:/lmislm.github.io/public/about/index.html","70d6a0bbac14efbb305dadc9c8822d9c"],["C:/lmislm.github.io/public/archives/2016/01/index.html","5abf64a8add5fe4b78a4662383b7af1c"],["C:/lmislm.github.io/public/archives/2016/03/index.html","eaea70c65b5698debce66982c9ffc3c1"],["C:/lmislm.github.io/public/archives/2016/index.html","5e6973de9eb0ea3adf9dcb43e59f9491"],["C:/lmislm.github.io/public/archives/2017/01/index.html","6f1d90d48ea19b68fc1fbf867e98d956"],["C:/lmislm.github.io/public/archives/2017/03/index.html","51fa101069dfbda4b3f027c12c83e2d7"],["C:/lmislm.github.io/public/archives/2017/04/index.html","2ea40e2bf1b7b93016ee1c2434df72a3"],["C:/lmislm.github.io/public/archives/2017/05/index.html","d40339dbadd3db6d35de2188c0317ef3"],["C:/lmislm.github.io/public/archives/2017/07/index.html","a9af343869aff3b15b8f9e503a7ca415"],["C:/lmislm.github.io/public/archives/2017/index.html","94fb8c2c1eb2fa7e787a6c3ad5c51213"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","6f4402ac666686becfa1e572f45a1057"],["C:/lmislm.github.io/public/archives/2018/01/index.html","4085b3dba913f1ebf29c725c5684f6dd"],["C:/lmislm.github.io/public/archives/2018/03/index.html","a292c7f1761c41c204c71de3a2f00deb"],["C:/lmislm.github.io/public/archives/2018/12/index.html","7a70089cb94c5642de7cbbfab4ed6386"],["C:/lmislm.github.io/public/archives/2018/index.html","9cbfe5272d9dadc95c1f2b97a68bc2be"],["C:/lmislm.github.io/public/archives/2019/01/index.html","37f40a80a7759d45e562a6f578fed711"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","5fb323cf07bf6353833ac0318c804865"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","eecb63a58ce1acb5be34c297b82939ed"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","8c1a1311b31be17a0c7e2019172b59e4"],["C:/lmislm.github.io/public/archives/2019/02/index.html","4b37ad466927daf24972ecbf00c929d2"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","1abc758538e3cd1fc6ce13ab757705cd"],["C:/lmislm.github.io/public/archives/2019/03/index.html","dd2fc15d231310270010c5790a1a069e"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","d1c61759593efbb1be73c51814833b87"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","3c8a8be715dc5c9a48c99daed2b84336"],["C:/lmislm.github.io/public/archives/2019/index.html","59d761481607df14e3803da357aa8b3a"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","4d356c67970ec7f922edcbb66a50c63b"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","50f7af7b625c5fa5e78e0cc734b14d80"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","61c29103ccfe0c04716668710a17dc61"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","90a5b117d2eaa7fe1154aff070c05d50"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","02f3df5902b269f3b4685c16f1c53be3"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","33e4df431a886803d21ece7f6dcbd85d"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","6d2c797c895e40582b8d455c8a8ae1ef"],["C:/lmislm.github.io/public/archives/index.html","2d28cc057c1db72ca3edafbc296e27d0"],["C:/lmislm.github.io/public/archives/page/10/index.html","0ef565b0a223365196ae396e4e866867"],["C:/lmislm.github.io/public/archives/page/11/index.html","c0613b1491ef02675437e668ff2e6fcb"],["C:/lmislm.github.io/public/archives/page/2/index.html","c58ea1a9ff3e4ec9693a6a0a83b6ea91"],["C:/lmislm.github.io/public/archives/page/3/index.html","85f282a17e6bddae44b640f7d8ff4302"],["C:/lmislm.github.io/public/archives/page/4/index.html","588f2667ffbd084ea57bfe481b0c39b3"],["C:/lmislm.github.io/public/archives/page/5/index.html","92219b0c0ac59afdf51879764002b99a"],["C:/lmislm.github.io/public/archives/page/6/index.html","5caadc683709dfe23d32f41a8013b5ae"],["C:/lmislm.github.io/public/archives/page/7/index.html","cc530c58d4b9309053f1cdfaf0b58360"],["C:/lmislm.github.io/public/archives/page/8/index.html","f64367b0a6c49ef3cef0ac598fb3785d"],["C:/lmislm.github.io/public/archives/page/9/index.html","3268e25a183200f268a3df907658e022"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","55497f75ede3635cf0660cac1fca5d19"],["C:/lmislm.github.io/public/categories/index.html","cec9b141b3de7f912cfe6d42cedf21f3"],["C:/lmislm.github.io/public/categories/xx/index.html","0e4a0d6cf1e81106105f2895e3d21bff"],["C:/lmislm.github.io/public/categories/学习/index.html","c7e2b49e8a6044045febec9c3958c01f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","44c5eaf2b0ae0c06c3b848486b6e9808"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","b1e8b4f6267d2760fcdcbbf540522c82"],["C:/lmislm.github.io/public/categories/工作/index.html","34519ee9e715a850bf8f90fe3e81fd38"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","7e7e50d6fb9e82a7e35bf51ba1ad6191"],["C:/lmislm.github.io/public/categories/技术/index.html","7f4a959cdf4938fab855b4baf7ef3437"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","a4d0510b3e0315166e68c4646d74815a"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","7361262a118e6d8007bf9e1e7e6dfc89"],["C:/lmislm.github.io/public/categories/日常操作/index.html","86b8a316f6406c796532b39c48af030f"],["C:/lmislm.github.io/public/categories/生活/index.html","9efb08f87f46422b49a534044baf3b73"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","c4353c0a9c7661ff081f761711e6c8ac"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","a1d391ed6a6086efa7dbcdc482e5cda5"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","387cab632cda87740c53810017b861af"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","9c6f0f2dc1ba08fe3f889f0927d0fcda"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","2e28b9e32f08e0ba1be5b39a12960804"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","9542c95f74c88e98a3aa6ece1e4e13b2"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","b0b29239bc1f3404fb7c4694858cad46"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","00aae4353f57f6199fc4b5422eddb317"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","99b37a44080181cb7510454aca3a0995"],["C:/lmislm.github.io/public/page/11/index.html","63ec60d4b1fb541538d69b4c58a512ca"],["C:/lmislm.github.io/public/page/2/index.html","68e7d94f866d4a9e81149cd0ebc7fa9b"],["C:/lmislm.github.io/public/page/3/index.html","ff8ecb8e8f1b2630bb828d2ca9aac108"],["C:/lmislm.github.io/public/page/4/index.html","67cb799b4e3c8797b8b041709796643c"],["C:/lmislm.github.io/public/page/5/index.html","97072728df7a17e35570f5f69de9168d"],["C:/lmislm.github.io/public/page/6/index.html","1cc397da548043ffc1759717937c5f69"],["C:/lmislm.github.io/public/page/7/index.html","ea9d0d02750fcb87f89f58162d329c3e"],["C:/lmislm.github.io/public/page/8/index.html","dd2cfd62a5c62998ede09cbc9a1d7721"],["C:/lmislm.github.io/public/page/9/index.html","f772211fa656853f071028d5472770d9"],["C:/lmislm.github.io/public/tags/Interview/index.html","38c9a067c5bf03b3ad6aeff58043f46f"],["C:/lmislm.github.io/public/tags/JS/index.html","a2c97f60a97e23a443078d6ad80cdefe"],["C:/lmislm.github.io/public/tags/acm/index.html","72bcc3bae29251e9009f6203efb25275"],["C:/lmislm.github.io/public/tags/c/index.html","539f08f614aeffe89c8bab07d44bbd7e"],["C:/lmislm.github.io/public/tags/codewars/index.html","e22460865a79be1a9f6e9fc86398a482"],["C:/lmislm.github.io/public/tags/css/index.html","ed19caff919279a81b36415a491cad80"],["C:/lmislm.github.io/public/tags/git/index.html","98e160db436cdffc10619c9760adf208"],["C:/lmislm.github.io/public/tags/hexo/index.html","ed2c23412e813873cbbde083e8462769"],["C:/lmislm.github.io/public/tags/index.html","dce233b923fe1cc53a1dcfda9d68a328"],["C:/lmislm.github.io/public/tags/markdown/index.html","215255ff6b26d3db76343fbf65c1e8a6"],["C:/lmislm.github.io/public/tags/poj/index.html","e34ba4e84f9031ce09604c9602f8f8ba"],["C:/lmislm.github.io/public/tags/shell/index.html","34186708521cb2ddfec4eee902f6d364"],["C:/lmislm.github.io/public/tags/vue/index.html","338f9e0135ac85051555b18fc78b14dd"],["C:/lmislm.github.io/public/tags/xx/index.html","028fbbd52fb7db97799ada16c9ad8c73"],["C:/lmislm.github.io/public/tags/前端/index.html","2ec6c22901e86b2ff36a7b38ed8ffea6"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","f2a8cbda1aee78f44a359d4a155df2ad"],["C:/lmislm.github.io/public/tags/小技巧/index.html","d5171c18229dbfef69f36c95c162cd90"],["C:/lmislm.github.io/public/tags/展示/index.html","64940685ab0b07a45281b024d7ec4cfc"],["C:/lmislm.github.io/public/tags/工具/index.html","569fd5047fcdd79fdf92792cb843a9b0"],["C:/lmislm.github.io/public/tags/感悟/index.html","fbe497134711a6f2d5a969892b99726a"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","8b456fd144a825952718f10ae1761c64"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","95151ce1eaa17850d6d45108186cb7f9"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","f35c0d433ef062d7e8f696acb2d596b0"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","fa1bc703c2c0cec1d0983fb0f8a09b19"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","198b6324df7f7cd2d3ff9218b503b9ed"],["C:/lmislm.github.io/public/tags/练习/index.html","bd0990880744e9ee076c660a885bee50"],["C:/lmislm.github.io/public/tags/编程/index.html","d7d0e43990a4e1246f8bf5a785b079f5"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","24a7606d2e8b09d437f59f6b4a10cf3d"],["C:/lmislm.github.io/public/tags/运维/index.html","9ead8b20f4826a562b57ce4a32ab9137"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







