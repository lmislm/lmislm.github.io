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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","09fb9558364c8800045ce034aa16588c"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","45a2367a3617583968151aec8089415f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","c6e2a917e6b12385f29c00283efb0248"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","d663e7f0a3011728faf462dfca71a4e3"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","3a2cf7b08b9da812817b851cb73f1c13"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","2fa43cb8913b70cd6ec546382ddba028"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","6f8196d9b35bc95beaf2e55ba5d0f925"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","0bae1c68dfe679bf65f37899af6cdbad"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","0283824706aea88ae55d8ca9a218b64e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","e54ed36f62805ec2f16b9a490e33aeea"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","c48dcacd39abdabb0bc5560ff2422a78"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","eed34ea7d7fd0c5b9736f9e933823b22"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","38aeddcade96ab0fc96c31f6833155e0"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","17cd5f292fe3518cf567cb77eb1c5bdf"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","beed5aa874a7e320e65922387f758988"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","0176ef075e95a38596955d63799466d2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","3d6f304f1d781b7b11c102c6b2bad9c2"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","8809475b216f91ddebd258f6fe99a569"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","89ad6cb485611e593dc127c2b34b7e81"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","1016943ec529e38fdf577f9ed98ae35f"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","9d0d0abaff496653667c6f631e82a43d"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","e210c025e58335399428df6f0a1c61e3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","2924737d43d93e55b5daf3c03364bd5c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","576cf143b4a169a51a31147a578f5d2e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","eb894a81840423474d77b11902632322"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","2c96c183896f231b9cc1adc6fc3decb9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","09d3af0cd4cd1587e830da3c22fdedce"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","4d552f94d36ec1afedf445b5b6b2b1b1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","98b1094cd61d53ab302fb557034510ce"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","6b0519d9d38563d048a1e30a023fa49b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","ccaa2487e837837cee4835ef64bceb6c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","835d2104ef2c39177084c2bd85b16c43"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","9a726af585b96ee042f811c57fe084df"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","718ab64165e8aa95e915a0df597a63c7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","20c01a5e00b44cf8e844b55fdcc42a33"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","66330796077c506c80bb7f892671ad1d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","e48f1adddf5cbec05a7b365eb8eba22e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","1e833ebd4f27a848dfd5f5aa33730562"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","93f857dc05a5ffe457288f702c55c856"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","bdfb9e9927915968272e1acff574f4a2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","7d2b1509419ccef9354abd1aa5455261"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","92242e4c8875b5742cbddf7cb95e9867"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","c62aa546d294f15e236944def2824d43"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","1713fb5e9c660d7e817e2f2d4fda5b0b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","f1bae6f60096a9d38e5ba7a3ef159603"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","6c79862a1c2b4242b4b57d26830e4aec"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","da3a534cc1f1cabec1962852a0a6dfe5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","2274504b6385e06bcbae9b9e20b76006"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","37bc096a6fd9f54189178eb11ef131a0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","47e82d9af30759a5b41a72df669bd32d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","b26f00f1a04187d4a64a14142d2e64b3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","b3aedf30e9e9b89e2425dd61e9bdcc30"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","2a96b990252c6fddb75e7d156576ac8e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","1d91b7e1b25f24297e07b17a276313c4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","f4979391002b51acb11e7923edb7264a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","1703602776b798acd8ab9bf7bd3df3d8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","be35f216742b5a5d5eb79352b297e43e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","86cf57d49ef1e5956f4bbe6e0b68ed6d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","2f0a32e8b7d760e86bebd68ccba648f8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","a5e91ab771d4760be20af89526c24532"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","4196c3fd68b4342468144255d46e61e2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","240bcf9cba5eea323bac4aa8229e4cc3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","1a4e1c5f199857a67063960d82ad22a7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","fdf208305cde3c47500df4127dbd9383"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","d9808f213832e1f1f5b86b9dc3c2883d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","dd630d88ed570379230981ec0a213c23"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","9b2d620b10d6f1ab9e8ee62ee9888b5b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","eee44b6022c2d3cc70d6ddd921d46e5c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","4689e50f2b8b889c19283846070fb185"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","f97b0f9224015e6259cc25a3b65ce542"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","bcd0e27803fbb8df7030123fbc7c373f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","7d39670a0f0bbcb95ca26dca176cdc36"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","5e0c76a129ad1cd740c4dd2b39fd4773"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","fc2a9fdd5026c2d5be53a64fb27997e0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","164a1029560cb48839a66fefa5da5286"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","46d8af6c96384548c6f1f2266c4a09fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","1f4e431b6ebb7a1b40bffa8f690518e2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","e51dd0a9b31914bd6a87e2329012815a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","6078a43e4848a13f606a7d52b3ca8690"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","e61af6793e8f030349ecd85554cae615"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/02/2019-07-02/index.html","d0ecb91d2f559aca21d3f2dfae733827"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/03/2019-07-03/index.html","6383fd68514138d671daf2cda1d660cc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/04/2019-07-04/index.html","1bd2ddee1d74aa1fd35001feda8c7a8f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/05/2019-07-05/index.html","e14137e3b95f36745c53edd2a2955654"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/06/2019-07-06/index.html","766fb14a41c788d8aae78d3652783ace"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/07/2019-07-07/index.html","091f2ce30989450475e544e663e7fd9f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/08/2019-07-08/index.html","9dcdc576e097de8f902a80c235946117"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/09/2019-07-09/index.html","b46733e30a2e0b55fe8c620442ff1351"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/10/2019-07-10/index.html","fd3f09ed3208c88ec7913426e8c276f9"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","ebd91784e02d88886f765f0f157f505a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","b385238b823194d7a8576991560924f9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","217be1439977c31d1ccc986fe0bb5a7d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","3ff18521843d281372f8567e5fad8708"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","aa3487376c8e857e068e7ed11d9ed7bc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","22d5ce9ff6bbff4b43b6a02e9baf6b91"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","5acc5a07e54370b52fc5f8c5d8f16a88"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","8eb727a86f1a2bd4c1771e68d2927611"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","fa3956dfcc2bd9253e40497d04352761"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","ef0da4fe14520f44b0e5ef86d0ecda40"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","ee045f01367773d17ee2d96eba7f9a3d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","7c97bdf60bd073c8c50b2a2a2dd39313"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","3069200ebd35cc2d5279a095fd3ea43b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","37e10d7215a66b8678cd731de7fb6cff"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","a89465007aca476ded2d24b9694f677e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","b147f3a9d83a46aaed3b52ef944a0b72"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","bad8527408e437b1087014524596e1b5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","481e1f78cb95a6740f9bf2efa5a6bcb7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","b41afa8ecea64f93202009abeda99644"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","86bb5b7768a617d45547821e5030ca5c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","2f014e95d6b9e7f939d5f417a5b583da"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","f6af2cb9a6e0766a49069f17657cce0c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","665ea408ad6ad7fc6a7168380eba85b1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","1b6502b47c9d51fd488cf3d8d259d254"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","701ddfe75515bd26b4eff2cbd4639f4c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","68c0155f0e89cd2bb02cf3e2628700e9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","6f3b2bb8f4fc1d7afff90219ee8f653d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","413cdfe7e790b532e3bf8cb466f633dd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","c4f017768e7f86cbbf0b7ab7c17224a2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","501fb8f25b27eb8e9296189148603367"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/7/index.html","9f022a00bb7eeeadc6f771af864657d9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","4c84bb30956b4cab834ac3503d86625d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","37a0a3ce13d3c2f8800bd07e742ebae1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","501849d8320e96da2177f33789e1a555"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","197723377ea802a884d9ec4264d1b819"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","1d782c59ab591d93019cf75e5800b0c9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","d9a9131820737b48cfcca70986dabb6f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","1af9e3821731585899626fa490a9f1e4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","e8c37d32e8313ef3ba68ccebd7a09837"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/9/index.html","5bfbbaa7e009477891d00f353b8cece3"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","5f6333c6db0cdd056329aed75a79a0a9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","bafbf244951ac8f464f6d510b9efb1b8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","c64b4333b9d020688f6d3cd188f961b7"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","3530f8c9e2ff0991851b0149d216981f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","b8b7783a08583e7bde455ea53e4a1ed0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","f6d926926d7157842d5593500691e239"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","84bc164869051a9e2527cabea8d0829e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","7e14019031a0ec45dd657b54750b8810"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","2eb47a4a1ffde568f30cbe5e4431afa4"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","8de790f8f78822565038c8c8ee670efb"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/4/index.html","15468c42a0b9b1c9a6a865bdf4455429"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","4a3b1f272839ac469ada580b7846857a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","5e00143eeef9d1636b7dc9d8aad1571d"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","d58ee18ec8c5df0b18643a25a74b8152"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","07a5f2d5ab3f68653fbcd8c996ceddc9"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","8dbec9c45f85cefeaec6e671351b0232"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","89276313231379eac11d50801ea9344c"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","8ff91369b7ffd7cb40dbd176cc2e4511"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","2446f4e46cc62f81b311ea70745d9a74"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","4f50d5b327f9d2657a3a1c1639b697c5"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","3ae3ebd206e540048f1402186183151c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","d090ddc21a0d127f570487739c40357c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","2aec1768b5a46f4ca9804cb59cd3c6e4"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","49cce5f44a4f656e3648c33aa8d59613"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","647e465d301559a2cd47f0d2f72339a5"],["C:/Users/10421/Documents/lmislm.github.io/public/page/9/index.html","1659f9cc91b7d7535217085e39c33a6d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","ccaa2e2f647673c803c0a5488a3d4634"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","46583df0e1fa73bb24f7e223e6a4816b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","4e936318bcdba006eecb8ebc288dc954"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","755edc77527dc14c5b56b1eff7048448"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","b23b08baf3aa9870e373d8437a89d656"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","bdfef2444be98b0864a7b7b4544f20b6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","419aa891d66bd8655b8bcaab1ce76aac"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","f29927729694b2df734ed71acb70c62e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","dec825591f3647f39369832698f72daf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","e9a36415a2a1d70d0981a86f5cd780d2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","e37b14006eb20a48d002e7e79d698454"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","3238d65bcb23fb6a7414b7702f2f50fb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","5866501d54aa973e950b21d433f5ea7d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","7c59a567795007769dde770219218975"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","b5f608ac721950bbbbc6b7bfd08a9a0f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","1f4479d361e64238e072bf760f199077"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/3/index.html","58a960c243921f536236143a05a15991"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","6283619e79a031cb25324e05a027991b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","db54f77daf4d3c722667b28dd9aa10a6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","24055f16c1398e9423db7f08346fb1c7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","578b36a87fcd02d5aee6d19cea2b7f9c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","25e19466416dd1d6c5eaa9aa358890dd"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","092f1032cee713738e84b4c324f23bc0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","6ef7835bd22dc9d25f8541ba8862905f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","3817b67c87072fa5f15668bd70101197"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","7a8740bb109d366ef3341b52f8ebc939"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","e4738a3ff6437053bbcf28dcf79dcd13"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







