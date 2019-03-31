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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","c59540bf869d163fa31685a4fb7c87c8"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","f88017020f07f60f6307e4d281d1f8e1"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b8201981d4a44d4f510986fcaa345297"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","14b5f853d1ccf4000fc9be57fda0295d"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","8d0e03654391ee0517e6340f59b38c40"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","db86fb63aa6970d370ef7498867d754c"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","2cfc99622117f6eaa745b6637e8fe6f4"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","9334b79d05c81a1eb3c4da0f1fda6512"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","122c6d9d17026060ef4e32c63faeeda2"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","4e7df47e5daa6588915a46840972c85d"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","fa040e4a9fd7ed55418f4c3b03ff96ce"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","9ca4b932a98bc4d579a555cf5b6deff1"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","e583e42363921285bb658c7e2821a3f0"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","c7048e169357249a0df95999ef12ca91"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","d2010a8a86b20696aedfe6bcc5359d7d"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","3446ddb184947ff6d6e09d89b23bd9c1"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","13f9be032f45be8f4b2c23c8d6b8d18c"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","45ea28dd7e9798bdb34a3896073f1a95"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","a9c6a6680bc34e669c8ad73b678ef469"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","29bda1cf1af0e0e9e5e5d585229f7705"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","4b6967e03862371e790a9dc5e7c1a32c"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","1100181e8e2d749193e7c8029dae3d78"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","3a742a3097c1e21d95d851fab9a22c7e"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","00f2734fd51b31f2a798419d4bc8846d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6c2d105f66e3d70f05ee69a743a3ce3e"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ef6e27b3659dfbcb61ab47d3f2de0db5"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f2c2c244ac83717ed32987e0000e5f72"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","b3a5032d7c1fdd1ea26c6b474d35f28e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0bfdb59399638d7b1f0de8844b5a74be"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","64211a2df27a5768564846e7929eb06e"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","da1e9033c81881bb1845c399cba651be"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","e2485dec6416ce688728636a3add8bbe"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3f3a7489e4ac77c5622ff0c7270b3b59"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","461ec44fd6f4622c1801b4a2b16df13f"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","27c121f7f00e270d332e9856c53e4b7c"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","a47eebecaf4c32ab4f70801f799c447d"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","d5d2fd39305327e246f13e2e1ef199ee"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","cd7f0a2d155cd9a3b7ef31515416f55b"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","02951c3ed45e344f69c4587c81fed78b"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1af9957fe7050c1b4bd4f86c423fb720"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","fdec9400883b05e73a83ed67e02c793a"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","79a28bdd17654af1f574d234f3a96c19"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","9cfdcca612064bdd551d989212e071ce"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","d79963dfbe10f4e2052231c102b38e83"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","0cbf764473ca2117a3a0debdcbe52b0f"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","62152616237102089048ea1080cdaeba"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","b2dd866246565286e72f2abdc59d724d"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","64ce24def6b8a3f06d75c61833531a81"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","e423613be1a4fae3cd177889ba2b1356"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","86e4b15e39bce1329434547e811b2e76"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","47a6276c940749f26bbc266c9e3ac41a"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","ee0c0644378e8f44e61bdbd6ad23bc26"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","d405494806d60a249a5cc44d36cd9539"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e8503d358431772358bee45aaee4172c"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","0f90b2e87aee4290340c5d5540bbdcad"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","a8054c727dc0b5c8c9d1cd2b2ec59264"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","3650a9178ce51056c0e51740df9d3a99"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","72667e88645e4e5173e0e23dac0d646b"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","0242be8ae4491c408824a1d79f67d53d"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","4ae86835ff5b28e760e99da130cc6036"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","fedccf667a3b93ec608ea021abc1fb67"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","05bd011707ef387287b0cc5f76a978ae"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","da648c879a973bc15eafcfb9a26903db"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","634e918fdecb9518553d8a9751359ab8"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","0d2fd06e1f51d95d988869b6949358c9"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","b14ba8be1ec61944bda69e3663bdcafc"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","1eb3c61ce2d175b81eb053b358eb476c"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","5b840e62aa33572eb8aeaa838e539b76"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","24be356620e317dba4b46f5dfeb759e9"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","97c0b74c947be35cc024e84e6506fd15"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","50b7c10b7b2ee2d27f83638be53ceb14"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","cd181e32d857ea91cfaf77c380a3dd89"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","8f1e823ecc6f407b34515135df6e5abe"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","69a306dfed5b46bd6357b6ce1977dc18"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","e150c9113037d73c4cb13f3728af6bd3"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","0a88d6b9f4f9ed74f9d1a99ff2292d4a"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","d2c28314c2cb6c106a4a3cae313f11df"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","06af37c285f4bd2f16501da2067af9de"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","f6a683432631ecf288ae690abe26c196"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","e6cda2e4885070b8f24cf34ea19b5840"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","a1c236af39d0f754d93d0e7d2142d7b9"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","ed4c6fe7dcf196223cfcf739000443ea"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","4b74cda275b30fc16442d267f019bd36"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","b26dce6223932651d32133eb1261ade8"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","82ebefb596a40444ff55a24c43e870ac"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","81d23b1660c5c2a2eec2dbfcfcfb3511"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","014f9281519ed1c21ab8f710130f3606"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","6ec692f3fa3d696cbfc2c5e4c5877087"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","f06b038a13a6c264ace0f47620cab954"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","c5bc7bf304483f7e23c5ff08ebf437ca"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","1fd08f1ac37e623fbafbfd5af5677cb7"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","478c8356d627e47b09feb04bbd960534"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","787556c184203768b27c76b8d5be4640"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","744c1ac6e81706b3a89b711dcc2e97d9"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","04ceaa789c482282b365ff7b2d592a3e"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","c704a2aa590db26a4ed86e9f80ac151c"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","2178b012d8ed095b6929165ad69c6694"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","d2ab033a7d4e306a207ab8d7dd3ec3cb"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","cd0b555af092a60186261bbefaff7bbb"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","f5d1357e8f64293aa0100a21cb6e34a2"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","dc5b7be5ffeee6fc91bae29580fff5f4"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","2377c826197da340f7f6ff8c51889045"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","a0e982211112bbc5c13d930fab6f14ce"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","6cf0000e02a271ba5224d1c612ea2d64"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","6c6987a2a8858d47dad9b0122d503bd5"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","b4bdf95362b1d69905c618bf1bce1b61"],["C:/lmislm.github.io/public/about/index.html","0240a996e09d498a4b32034078223efe"],["C:/lmislm.github.io/public/archives/2016/01/index.html","d6589e316e6b0e09554a210013d6c387"],["C:/lmislm.github.io/public/archives/2016/03/index.html","40ec2fa94e45d088595d0fe7fcc3c5d5"],["C:/lmislm.github.io/public/archives/2016/index.html","69a21956d9c6d5927fb2c7fd811068f9"],["C:/lmislm.github.io/public/archives/2017/01/index.html","3612f8a865dbf79f17e6a49247bfac13"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ea985587ff96fcc0d93f8fc61efd056c"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f36e2c55487cfc2892bf2a63cf423bc2"],["C:/lmislm.github.io/public/archives/2017/05/index.html","c0bfbc89ca1caed26272423f42810691"],["C:/lmislm.github.io/public/archives/2017/07/index.html","4f021ec6bb9e82e9be8f48f61b7749a9"],["C:/lmislm.github.io/public/archives/2017/index.html","76801b41c2db76e698f074a82daac28d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9ce725d6e972dc0a1b42924ed5209b5a"],["C:/lmislm.github.io/public/archives/2018/01/index.html","adfe33cba3451ae8cf02a39dc05c5715"],["C:/lmislm.github.io/public/archives/2018/03/index.html","849b92f02d822479d8400e7597baffb2"],["C:/lmislm.github.io/public/archives/2018/12/index.html","4bfe086657f63e03e4abc48e8128a23b"],["C:/lmislm.github.io/public/archives/2018/index.html","a82e7a39c30ec8f8c2a092466cc8e0b2"],["C:/lmislm.github.io/public/archives/2019/01/index.html","45a7e07ec452672a249e414acbeb46db"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","df2a34c94f8684d2f8357f96a30f0cd9"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","ea72bbe82bd1c3653639d68ed27f342d"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","a5e7364133c3039a9436e3d872ca8ad4"],["C:/lmislm.github.io/public/archives/2019/02/index.html","909cb21b1311339d7e872b2ea41f0c5f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","8aa1a5983bbd98e4023c8c743190c84e"],["C:/lmislm.github.io/public/archives/2019/03/index.html","772e95ac7cc71d4f1e2bd8982e82b8af"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","ab6e7aa5be5ce7b61989c3df5876f455"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","a1cb7254c1196b3176a19d71d4c5585b"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","9e4a3ae3a1281f8e9bb3bcfde727ab9c"],["C:/lmislm.github.io/public/archives/2019/index.html","e86b0ce343a0fd9894d70cb4fbec9318"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","24426d25ceb287d3024dc0aac4b86b9d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","4591980951fba81964baf6f27156d448"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","295147e53945911d35184d6e8565ffd5"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","cd7a71dedbc97af29c22e9bf4423bbb8"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","3ea9e4eb4b271fe109bee34217f1d114"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","7023585a7d342a0e04ff2c0c2b1a1127"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","b24fd1e7595b757afee1956b8e4496a9"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","844182facfb3b9e437845920ab670870"],["C:/lmislm.github.io/public/archives/index.html","da7abf24c062ffac8c2e664637824d75"],["C:/lmislm.github.io/public/archives/page/10/index.html","e1651d862e1348f9ae49aef8fecf4d3c"],["C:/lmislm.github.io/public/archives/page/11/index.html","46940fe5741d1a032d00b0c984148e0f"],["C:/lmislm.github.io/public/archives/page/2/index.html","98932a6c08b020b27cd707bde66d69f8"],["C:/lmislm.github.io/public/archives/page/3/index.html","b5bf91937570431200bc629a57b68943"],["C:/lmislm.github.io/public/archives/page/4/index.html","4274f4846d9471dd64856b019438a55f"],["C:/lmislm.github.io/public/archives/page/5/index.html","f2085a93b107f33d659878a49c6c485f"],["C:/lmislm.github.io/public/archives/page/6/index.html","570154087f3dbf2e6f39e52b8547e4a7"],["C:/lmislm.github.io/public/archives/page/7/index.html","90107a1c5adced8265c5a56fc7491e86"],["C:/lmislm.github.io/public/archives/page/8/index.html","ff53e5f29020fc7842d8bd10e8b964f8"],["C:/lmislm.github.io/public/archives/page/9/index.html","b7ca0a75c1ddd282566db89789913703"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","a160ded72d6010bfdc18160d972df084"],["C:/lmislm.github.io/public/categories/index.html","80af8c9961bf1d8f61309510c0e6d34d"],["C:/lmislm.github.io/public/categories/xx/index.html","746e044be5cdde53afcbe6f873388c8e"],["C:/lmislm.github.io/public/categories/学习/index.html","72b16a4dfe508d0ac2e73eb5450fa498"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","38518363e5d4b4156277d0d32f9507a5"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","01d88e69750b05e974bc70a862970971"],["C:/lmislm.github.io/public/categories/工作/index.html","d7643f79dd170a21906be992433c9113"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","eb2aa3df77320d75d3e14393a67702a9"],["C:/lmislm.github.io/public/categories/技术/index.html","93999b321d2dd1446c472ffb560344ed"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","d6dbde0fb26a9bafe78241d369ea4e9c"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","9775ae889364a97993628320a1efe734"],["C:/lmislm.github.io/public/categories/日常操作/index.html","26633522504f74780edb40f247d0b39b"],["C:/lmislm.github.io/public/categories/生活/index.html","a17c3236e070f613a20d47a79d66756b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","3f0d3915e335948591297a6e685eb097"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","0e4ba1f579aa7d632805e2498f8e92b5"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","5d703bcee03feda66cc7e085bc60fdf6"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","89e0b5c3f3c7a68eeda5e9aeb740ec12"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","6291dcf5f68c5c91723e77e3a0ddfc4f"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","6d3d7f9d85841c2b9cd270b189ecc6d3"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","c50ee253d45ea65e8e65b2d01d55105b"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ae2b153a6f0f0e42a948a683d240dbb1"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","c16e5304e6996e50afad63e9d0ac9773"],["C:/lmislm.github.io/public/page/11/index.html","395b16aa5a830f05e5059b973f18da79"],["C:/lmislm.github.io/public/page/2/index.html","43411c1bbfaa8d0bad2daa4fb61aaf05"],["C:/lmislm.github.io/public/page/3/index.html","a6c7b6ab01ac66d35fac37048cb7eefe"],["C:/lmislm.github.io/public/page/4/index.html","422a1d03988b4aa620d126be384547ac"],["C:/lmislm.github.io/public/page/5/index.html","bda3c0a9dbc802a16f1784cf40f52b71"],["C:/lmislm.github.io/public/page/6/index.html","60198a23f06194d969f2694338833956"],["C:/lmislm.github.io/public/page/7/index.html","a177573231fb79c759f846869563bb84"],["C:/lmislm.github.io/public/page/8/index.html","1f74aa05cb6d35a618564c864870cd1e"],["C:/lmislm.github.io/public/page/9/index.html","5e1bf475e88e79f8619ce487d9106066"],["C:/lmislm.github.io/public/tags/Interview/index.html","75e4c4ca65663a4f830242f02753f8eb"],["C:/lmislm.github.io/public/tags/JS/index.html","0c66f0b7c0a65ae9deaceeea59c7a462"],["C:/lmislm.github.io/public/tags/acm/index.html","4a01cf7e0784b1c7de880ca31e5a20a3"],["C:/lmislm.github.io/public/tags/c/index.html","effb66fc99713d00c160e4c5a7bb309a"],["C:/lmislm.github.io/public/tags/codewars/index.html","d281ff16a046db08e88c5e38c5958864"],["C:/lmislm.github.io/public/tags/css/index.html","4a34393dfab32bf173f9103766ce69f6"],["C:/lmislm.github.io/public/tags/git/index.html","cb59a823cbc921515edf43f26476c725"],["C:/lmislm.github.io/public/tags/hexo/index.html","d4c20d94f87490ebcb06e577de68386c"],["C:/lmislm.github.io/public/tags/index.html","82cddffde5ee99f93875f383efa83d57"],["C:/lmislm.github.io/public/tags/markdown/index.html","c78197efd0b4a1a7f2baefacda01e2da"],["C:/lmislm.github.io/public/tags/poj/index.html","3821fa67bf9397438cdea55d88fd8804"],["C:/lmislm.github.io/public/tags/shell/index.html","ec543dcd7db6e428787debfd8e427f62"],["C:/lmislm.github.io/public/tags/vue/index.html","823faf7213b1d799dfc71495d341d019"],["C:/lmislm.github.io/public/tags/xx/index.html","55d5c8b42634d1929612da2b6b705eed"],["C:/lmislm.github.io/public/tags/前端/index.html","9a14ce0e879e51549cb19d36f36b659b"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","d6f0915baefdf90921ae05ac588b037e"],["C:/lmislm.github.io/public/tags/小技巧/index.html","ab7b1be602302076ee49f02613657b82"],["C:/lmislm.github.io/public/tags/展示/index.html","88e1cb673c98b008b24487060baac70b"],["C:/lmislm.github.io/public/tags/工具/index.html","1ffcbe517873e479ffbb181ef09d8d0b"],["C:/lmislm.github.io/public/tags/感悟/index.html","0eb4a347d752e3a4c2178b150be522ae"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","5cc1a2221794bbde25e68190df9cfab0"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","6fe922aea9b4cc7b76279fe7886ed628"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","927eb2978e8090e88dda4b41074af8c9"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","c164f8ac10c0117a9e9366702a8dfa73"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","a61774f18201a8306d660c7a79968277"],["C:/lmislm.github.io/public/tags/练习/index.html","c1a2126959e1d7337a8bb8b8f10acd69"],["C:/lmislm.github.io/public/tags/编程/index.html","dc8e2b2ba07438dc0154e50654f683d9"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","df6aad45f0672aa3b273a865882fd973"],["C:/lmislm.github.io/public/tags/运维/index.html","74502dd3bed9a072ead371a67367193c"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







