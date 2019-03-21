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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","fee3e72c5b004f7b3dcbc272ed3ca0e9"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","7071ad86b122025dbbfffbb2ff47189d"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","6fdd1c25e454ad9e147a99d08723423f"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","c94df57ac7af1b6d852c8b6605101891"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","547aa0cf6e2921fb354b8763917fecfe"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","c31e5122a465f95e70a55ca639750391"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","d87c4da38d3035515de85ff7fc0afaff"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","d04e12d99b3bcc6c0824b528ae0e30f2"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","b69f5ceead71f92345755772c820b14e"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","bd89bda4d18ffa9223691dc9127bbd50"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","4d9fcf90e476c91b910c2b8ac9f7983d"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","3d1e9d7cc041417064526bee08492665"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","880f410620d41d133ad37c771894bf0a"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","5413e7bb1117777ac92ace438b9def95"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","03d1ce58764afa3f5c0e534d220f8209"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","d4a086144dabd1738c85bead9427552c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","37a14631f0570d0a5656d04378a8ae34"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","4e15f56cc685f97609e8645e5dc32fa6"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","c19ac48ff644543d387647ff6c33a5d0"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","bc73ec2da527fb1c7b74bfb41b95b048"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","ae747ad4f9d728bd8569a842857a8528"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","9f364f490370f4234ccb7968782b9c18"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","c26ede4437c35e980e70149c7b0f1ed6"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","98674a96c8c6e9b7cc7caab6e81799d5"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","7713541e9ae3bbd6bdb0d60c12914a37"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f55e04a8f0dabbeaf1ff9ddaf487777b"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","c778842a9964fcb0d828796f6e07acdf"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","4b223ff20d0e0fb6652f2b3b7d693033"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","7f686e1bee6ed9d37512824ca81914f8"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","5c46cc4d3ed85a268668aa0bda887f0c"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","21d92e9b1f2367097d3cb0f46c94c858"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","4ec9eec60f0886b89ab6c37d5801cc4b"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","9dc5e74aee789c8728f2cf10f5ccba4d"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a355bc4897be2672bf0232c77cffb376"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","424f8b3c41b97daff92d209f4f1c53b3"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","3929cc7332715a5238f83d3f0814c6a6"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","cd2513aea512ffac534e127245b659f6"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","d9bb4f21c564493df825cca2b28c4ad6"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","be8d0a0ea0259a4050d01816a4e82e58"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","5e8606b64a9428bcdf0119c9ac95ffd7"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","002b4172107b28a8955bfeba2ea0e58f"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","bbacbdd7f619f3d92abfc35f2c7818a6"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","fd2aea67c058db1b0267b6e02e29b07f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","41655bb3e73350bfbac04831ea908678"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","ac6bc37d5eb4948ddbf2dfa2322274d3"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","5f1f08cab1063d0a8feae15c7aec3a95"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6962432dc9ea732025774890b4d65500"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","8aa49f3febaa288cc398e4dbfe9db3b2"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","06414bcdc238f432666df39f01d073c6"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","14b84f0e32f7ed5b429e52ab0351650a"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d91ea83a4732f0daf896c4689ff9a9a1"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","13ebc5ebb96e0c88ac75486b0aba2601"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","fcdd0d194d86683fcb4ba0ac0ff8830f"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","9307b95eec8499e956d10cc8537a1647"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","c15cf46590c4d7fd88b9faab13deecf8"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","2a095c60997a6e2079e4e2c2ab373812"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","7e648514499164dcb6286f8460286d76"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","e47360c4073ebbb107f037213eb6716c"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","a6111886f98ccfc6a9bbef196ac271a5"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","35f82e3ee3a53ef085377421306ed702"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","e4e74b8ba2373d28c4f0c1ad94fb491c"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","68e560b40bc31f929d7e44a25662887a"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","036aa3c9afdcdb992a2b20f9e4ae4c27"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","0dbc6616554ffc01837a24ab71497cef"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","6d7f972c587963e9d705f707f54ad9b7"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","dcb78782ea83135af28eae26cd159ade"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","d6dd7a674854233e22aa1442ac570f9b"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","b8f8e7f8b7d2d39534a9d723627fcf06"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","3d8f74b2e39396e8898ef1e77f495fe2"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","4b2362ce1fc74e3b91c99231a9e906e5"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","102a5435c4aa42a4fa29dec38fbf01f3"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","37af9768c2c723a90d3deeb1b4385b7b"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","e469c46d1969bf4c24598c016a256829"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","2324da262b41e12d6bc4bd18d908abe1"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","f88ff8c4b01e752df981bee018fa8420"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","a31e42730e6bcd5ecc07ff80795a379d"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","d47008ac3c8cc8ce04c4abf9b889089c"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","8625d19694ff8e74b1fb2c4a38d7fbb0"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","9c98bc1b4859826286b84aeedba6085b"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","6b06bb10d90518beabab717c9517090b"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","d4b5695ac9add8d078ec24027345bed7"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","a2d0ccba40097a7671727b30ebf37e89"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","65291faf8c08358344e9138c2d6e59d2"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","fd6723e1859244fad4d95e4dacbadc8e"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","d06257009bfb0ea557e040536925ed6b"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","2f5c58052e512e31d9eade3f9502ed83"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","952e9b32a807fe5762fe37db2e20ae9b"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","aaa1211c751ab7bde0b2e9ef878a5d53"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","1c019edfe9e0d6de24f51e2cc4021978"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","c32d846a756cede0f25b8d16bb367407"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","35d1eff4daf07b7d7d09e672a90432d7"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","401b9257975afac7212068be31f77046"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","4acc25740d8b7e8c96a5c62c1a06eedc"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","875836fd0946d79c56c10864c9f83897"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","7d223b6fdf4df71afecf9fd48c1ca867"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","6a6672c153bddf18be467237a2531029"],["C:/lmislm.github.io/public/about/index.html","59e2691e8e4c85d3b2e178939dd74177"],["C:/lmislm.github.io/public/archives/2016/01/index.html","0fba4fcf7ddd27ba628db73c0da1c7b4"],["C:/lmislm.github.io/public/archives/2016/03/index.html","797d4438d0dc1f5dfbeba90e3f6e9134"],["C:/lmislm.github.io/public/archives/2016/index.html","209ef56d68e0f9700ad8aa0465b5fc39"],["C:/lmislm.github.io/public/archives/2017/01/index.html","d015df307900d0f70b4425f20f098689"],["C:/lmislm.github.io/public/archives/2017/03/index.html","1e367b477aac102a54fab1dae8be6e66"],["C:/lmislm.github.io/public/archives/2017/04/index.html","58c60ae9f55b3835b7aba54262f17175"],["C:/lmislm.github.io/public/archives/2017/05/index.html","a672254c4ba548e19462dc5d08516681"],["C:/lmislm.github.io/public/archives/2017/07/index.html","1b14f7bf649587305147883f5298d04b"],["C:/lmislm.github.io/public/archives/2017/index.html","fe1aebb676789181a7db2b89a250476c"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","bec3aa87d883ae2b8a3b985d4c8ed975"],["C:/lmislm.github.io/public/archives/2018/01/index.html","24ac69670384d7f3b72dac0e91e64694"],["C:/lmislm.github.io/public/archives/2018/03/index.html","30ba0ddb3ae41d7d94b7be15eb330738"],["C:/lmislm.github.io/public/archives/2018/12/index.html","6be496a7b535941c1b97326610332e12"],["C:/lmislm.github.io/public/archives/2018/index.html","12d27ea5af942c984c066185732d008d"],["C:/lmislm.github.io/public/archives/2019/01/index.html","18f669937ead6ded9680009297e4caf9"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","005c8e9e403aa75fc943cc8abd88df04"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","2951e548beabbac3af6d39df6205d5e1"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","61855ee79bcecb05e63f8dae3f68f507"],["C:/lmislm.github.io/public/archives/2019/02/index.html","d8885476a78a844ec12d35f277799a96"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","bc5e35be6f389c3574c5cab4779d5e29"],["C:/lmislm.github.io/public/archives/2019/03/index.html","b7a32b546448475a9fda2963c95ad396"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","372715f25893d8d2eec919ec5e2b9e48"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","8bac7ee18ceae68ee004de66d5dc3891"],["C:/lmislm.github.io/public/archives/2019/index.html","fa3a444f826bb4ae79e73241b87cfc40"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a12be589e7cedc0389fef6b0cc75c36f"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","58ef8502207e02b60e61a659090d5102"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","efe9ab991962170f0449b78eeb2b9527"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","37a95c4474bafc0372a9dd33a76686b9"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","6e2338e24da146a52134187fef07124b"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","8506aa23f834e8c8dd7b90fdab3de3e7"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","d5154863ad9d9b3de567ea2858da6e84"],["C:/lmislm.github.io/public/archives/index.html","ca79bfc84de597f4459bf9e333e5c171"],["C:/lmislm.github.io/public/archives/page/10/index.html","20dfba07e0c9dcbe2e5545f617c059b9"],["C:/lmislm.github.io/public/archives/page/2/index.html","a9dc96d1e0cae2886f03a0e32e819721"],["C:/lmislm.github.io/public/archives/page/3/index.html","77e3a48914b318056cb16b316c1ced35"],["C:/lmislm.github.io/public/archives/page/4/index.html","690fbaabc3730702a32ecdeb97241379"],["C:/lmislm.github.io/public/archives/page/5/index.html","8189c00682d925b9f02195360bd90272"],["C:/lmislm.github.io/public/archives/page/6/index.html","ce07fd9db9f0b59caf86339b0e7bffec"],["C:/lmislm.github.io/public/archives/page/7/index.html","c463a5ab45e1369bddbe8d128dd0f16a"],["C:/lmislm.github.io/public/archives/page/8/index.html","302e9f2a5a8ccfeb376872b26196c209"],["C:/lmislm.github.io/public/archives/page/9/index.html","f13f41538948de8897bfa25c055799cb"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","872a85dd83b240d80318626a2c7af44a"],["C:/lmislm.github.io/public/categories/index.html","322abd3fdb4f9704fec88b467606ab5e"],["C:/lmislm.github.io/public/categories/xx/index.html","f71f8a8f02807f75a8c83b072e86cba1"],["C:/lmislm.github.io/public/categories/学习/index.html","59179110f327521951ff25dcac72e106"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","242964e144767ae47fbd3f331992159b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","d91ebfd67a7fa4e126fc0a915f214d8c"],["C:/lmislm.github.io/public/categories/工作/index.html","8a375dee8feb5394c360a174aeaa8355"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","90f1f20847af1797266115abb4ee3ba5"],["C:/lmislm.github.io/public/categories/技术/index.html","194ad940a2141b5e6aa58a032a75f188"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","e1d613037e07ba77b177dc42c891b941"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","bccb51a05525380d9cedbd537f544f63"],["C:/lmislm.github.io/public/categories/日常操作/index.html","aeca742cb4691ecaa722ef1492710224"],["C:/lmislm.github.io/public/categories/生活/index.html","266723f8904557c38f506e267348b177"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","0852734d36095ab846fbe66e0b02b09f"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","203074fee9a1151ab91a18e3853c90cd"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","e66edfd96a4d9be63ce5d3dac1636404"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","08fbef9f5990a71ca4cf8b50b2600398"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","a2a4b5c7b7c5c31f2b2e6d6913f9337a"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","8d6121598828f524ef54c4a5704f0378"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","40ad6ad51b30bfcb4b574384168bceae"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","68ac2ea3c1083232c2f6dfad2ae02838"],["C:/lmislm.github.io/public/page/2/index.html","cdbc901d647c43c7cb8723af28b503c8"],["C:/lmislm.github.io/public/page/3/index.html","6213642d726b1dd0533d9dc11c2af105"],["C:/lmislm.github.io/public/page/4/index.html","dcbd39f3d1d4e46e3d368aaf81501b75"],["C:/lmislm.github.io/public/page/5/index.html","48453528ebe5c8fce59a6b32c9168820"],["C:/lmislm.github.io/public/page/6/index.html","c0002c0b5a5bcc366e15d2e8e6c1c65e"],["C:/lmislm.github.io/public/page/7/index.html","fd1b658ae8f003508c0df40b0d1a7827"],["C:/lmislm.github.io/public/page/8/index.html","54c68b04a8a9626a344c96db9375a471"],["C:/lmislm.github.io/public/page/9/index.html","623bc70228c9d43cb4cc0c7c5ae3c73f"],["C:/lmislm.github.io/public/tags/Interview/index.html","4d6b83f76656bc3e04298436e8729483"],["C:/lmislm.github.io/public/tags/JS/index.html","543c813a8adbeebc2cf25167b5469863"],["C:/lmislm.github.io/public/tags/acm/index.html","522cd5e578f48cc8c296cbc248721a64"],["C:/lmislm.github.io/public/tags/c/index.html","36d743dc56033f6a496aca41d25e77bf"],["C:/lmislm.github.io/public/tags/codewars/index.html","3fc699fcf4f1210b46a144f44d4cfa37"],["C:/lmislm.github.io/public/tags/css/index.html","e8c68162ef37d70b6f754b4c58c1cd55"],["C:/lmislm.github.io/public/tags/git/index.html","984b1654515c514241bcd3385e0fed4a"],["C:/lmislm.github.io/public/tags/hexo/index.html","05e9fd852a1482aaeddf6587a454b950"],["C:/lmislm.github.io/public/tags/index.html","2f76900b015e3adc4c6ea65fbe49d5c7"],["C:/lmislm.github.io/public/tags/markdown/index.html","0dd33b7d69bd4eb91bfaff6bc99e106c"],["C:/lmislm.github.io/public/tags/poj/index.html","07173d183acf99ad11ce209ab4969ddb"],["C:/lmislm.github.io/public/tags/shell/index.html","bbc53e100b367174655658b0c8af34d5"],["C:/lmislm.github.io/public/tags/vue/index.html","7c76c09d8d891002d7e27b29107023bf"],["C:/lmislm.github.io/public/tags/xx/index.html","9fcb6f7010a10e65aefa9185efc419a3"],["C:/lmislm.github.io/public/tags/前端/index.html","6c972a5e6c6103573463ce40d44a5fe9"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","03f8e32468ebfacd9a6eabb01494b6be"],["C:/lmislm.github.io/public/tags/小技巧/index.html","15a72f7ed40241539634f651de70d8e7"],["C:/lmislm.github.io/public/tags/展示/index.html","12734d9edef5e236fba563e81dcd6777"],["C:/lmislm.github.io/public/tags/工具/index.html","9175c77ed0690af759523a40b2ba4a25"],["C:/lmislm.github.io/public/tags/感悟/index.html","bad5169f3bd10a9900bf537835a05bda"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","f9d39989f0a30ecab0ba40429e5ab561"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","672bafad3c28baf60566f72177ee7817"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","0c38b9f9bbc874037c5ccfe245217fba"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","d3a44fac1116d6f4b1a70e5f9d3f1fba"],["C:/lmislm.github.io/public/tags/练习/index.html","9d64fc0ba06d5be7a2dd47c57107f4d4"],["C:/lmislm.github.io/public/tags/编程/index.html","fdfb1d6570c7975b2ddb91b0558f9176"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","a6542e68bb29b44f6d18513ad4232655"],["C:/lmislm.github.io/public/tags/运维/index.html","ad51b44a221f703d080c26e519440979"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







