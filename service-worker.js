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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","895be12c1399e44f1ab46738c48179ba"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","4051effbd0e87a1cff90f5beb57abda0"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","0f8901e1e1bd78b98b8345f3b0f526c9"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7521b233b8acc698133889f15c40400b"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","5fef6688b4a27f6d0579081bc224368f"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","999fe9faab7bfda1f56765741afb9cff"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","41723f90c4250bff5d8e772352ccbeb6"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","652de2917df22134ed2caf65590af4cf"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","442238f22a1ee8301f30259664f29ddf"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","b8c2f3a187eaf283847d5d9b7d9d19e3"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","28449dc0ac089568eab126f6584db53e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","0a2cdd26db7ad48807d03b95ba71f56d"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","5f125c969e8499973b8063b7839c5b59"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","bfdc3aaeaeba6fa1436c54431471947e"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2b3da1d4fac1931f4e425ca66735da93"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","e30b0bc420e76fe20b64cac24fafd46f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","fe0815384f52237c1db65efcf684a96c"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","21ff07e774c9e5f74bebf2e0e5ace7e5"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","048cbb1dea1ed98f9fa3a83a861d2185"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","412ee61b00fbb2541a815a1eea35eaf5"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","e3054b3bbd1db8c46d80cf78e8e676ca"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","7f66020e66b46df1c5002689863ff26a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","3ee214db82e567d5fa86827232b1c825"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","4b7b42915d94016fcdd1c9772b2c21ff"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","03fb05367828a1bdc44b33be6ab56413"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","17db9400d7445ae4edbb593ea829758e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","23bcab137fbd660464ca25d0bc6a16ff"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","3c303eb871429102c50c58861cc6e5a5"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","2a2a1f4c0966badb5ef8aabcb15dcded"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","6bf9041771d99ec7c0b8d9dc5aa9d371"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","a8d9d0428470a671d46868b3dc4cafc7"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","20e2507af7abae2cd89069b5fa1ae6ba"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","591d2bd0a359ecf07cb8a9dc8d4cd34c"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","fc9de16f21b1801bae3c50e1fd1f21fe"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","9a2b21ce82e19e37ed3372bed5880495"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","2545261d65677d93d030baaacbf94f18"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","0ec8a264639a417f50d116b83bac3804"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8334137963c7e43f4a5d886b5a46cb52"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","0b1c90693fed9992a47cc4acc32bb3c4"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","5c879233b54fe6047f2ca6ea1798561c"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a2bc642e5ca62ab73f1ce26098b6e2b3"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","3fae10514f132354332d5121c6dd8adf"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","d429ba34c21f7d5fb425e5c66813e9bd"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","bfc7513792ca42ba7a5ef8c9e29ee43f"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","734551dcab0a5e43b4a9a8cdb2f56a80"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","bada8148a169d2a69e58cbe283c2761e"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","0b34ce1e493f0fb1b0999eebd69c137d"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","559e312bde2a5505747d3e85e7308f9b"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","1e1c5517fe97f32fe88b73fe8df3b816"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","e7a6fa5833c0e89b1d6fe48d023f37fc"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","e4bc7b4e2745e4f36f8bb7b1306a51de"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","54fdfad8f4d27f2c2da412368d0745aa"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","df255a69abf0fb8430a76025c9b35a60"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e76c0323ae75c89d92c39920c05233bf"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","29046cd715312cf813fd12cee0f5b143"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","3320932c874b5e97c85aa9cf7ef64aa8"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","06f7b660f99c10fcbf2b60de058ab102"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","1585cbbd5069f1c82b0a2bf43bab6863"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","2858199f2293449e575ba9260c49a5a0"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","fe1c5e7c449b8f20b73f7ce22de1019a"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","ff57a156ac6efa3ef697474119577b64"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","46c793dba700a4bac27884828f0d21f7"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","6009ffe1f660509d8db280b993564520"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","95b7f1f6ff7aeab9dcf814bcb104bfe6"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","2c558408a40a15e745f888d4293824e9"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","142965cca007808bb11cea515b6f85f1"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","ca0d7b1014767aba89f2c5a4bcdcafcf"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","eddddd0d86c9185c52ba0ef6b2ca8581"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","7aa8514485d56b05c06b301f3cf0b6b8"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","f96e824b5802d1b30c2f9ec79922d1f7"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","2187e1ea0a11262aabd30a4485607d1b"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","ed704c5c7b12ca530c77de7136bec4fe"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","c641f7bb8bfdcbaca4ae6ce89753fe7a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","863afa51d118c19eb96600470a2c54a0"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","3caa91c195a67669d8ef5f6af0f5d1a6"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","3254711125c4fd92f9b20e23165b5d8d"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","8a3be25eace2762f603d9e137b695693"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","83e2899cd98e4d78c5559f4c98995db3"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","447602d2240c0c86db29f07f011d033f"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","a6d94e574f1fb87050d81d9892ef73fd"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","d445c7108637a82b9558ad9ebde6e5a3"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","28a7ff9ce04f2880e222633e47ef7164"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","87335c79737028bea5505a6e587ad758"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","5741884108d99d9608e80e211cf99eb5"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","35e7ec2499922e4a255413aa979ef9fc"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","09bc38ef657c1eded68df1a2d5b99ec5"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","a5d7ea1c58935a2fac6cbb83ac53ad18"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","aa77fb68c6c49b017093f574b006bd46"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","8fdd91a52b52a04736186e324af05604"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","b8c5dda22eb5a97ea8eeddb83d0f1f74"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","21a3fb40ff105d607587a99a827e5e62"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","c01fac78c612d6ff6779da1bc4b7e7b3"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","b2183afc6781197aa4c9853e34550d9c"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","876f8f0a56f71c246f73088a9b7fcf0f"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","2a6344596eab68e2fc100578f65fe7bf"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","7075d8436165933d643f5014e05cd511"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","8ad2b70ce7c2e419a616f7f7c3c17fa6"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","9822f4d4f0ea37a1b095da778f635d06"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","54a8023ae4c22e70df47c3e1cb19f153"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","634e67ad854abcdd375913bcf3f9b36e"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","0068db0870bf3ce0d8e8bfe6b1c72352"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","a0b4a30f97b6bdcb503e2a52f2ae20fc"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","270cb032feb6411f877da6de00ee10de"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","f54c3ad6ddde2fa9d8aa301330f5e7cd"],["C:/lmislm.github.io/public/about/index.html","bad8441204cf16a88ec9d9102532161c"],["C:/lmislm.github.io/public/archives/2016/01/index.html","9a0f187defff87cc0a26a23eaa1b893f"],["C:/lmislm.github.io/public/archives/2016/03/index.html","ad6db8f310e76cf0c78e5c5e9355a21e"],["C:/lmislm.github.io/public/archives/2016/index.html","3f39f3b08bc42eccecd01e1d7d72ac9f"],["C:/lmislm.github.io/public/archives/2017/01/index.html","b053e3770b728782041214e8def1327f"],["C:/lmislm.github.io/public/archives/2017/03/index.html","5b57b4d9dc75053f33b43d6f24941801"],["C:/lmislm.github.io/public/archives/2017/04/index.html","c99c74c04d353ca221f144b85ed6b883"],["C:/lmislm.github.io/public/archives/2017/05/index.html","14d825fb95e240759146357d6c01e5c9"],["C:/lmislm.github.io/public/archives/2017/07/index.html","0f2faaf7beaca275b7d1145dab333d13"],["C:/lmislm.github.io/public/archives/2017/index.html","ab5868eba465bdb400cd5eda4e31cf4e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","76cfebe8ff3492c33d3d66601befd8ff"],["C:/lmislm.github.io/public/archives/2018/01/index.html","7312b644bc0663ba02fb37fd8482e30d"],["C:/lmislm.github.io/public/archives/2018/03/index.html","3cd83328c232e8c68972fa05e210ebfa"],["C:/lmislm.github.io/public/archives/2018/12/index.html","518b77d214e20c897c5a9a34e51c1360"],["C:/lmislm.github.io/public/archives/2018/index.html","c38051e1220636746b8672684fcd3734"],["C:/lmislm.github.io/public/archives/2019/01/index.html","7b5a961e4f546513cefd6e0d7ac452d2"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","bee6d6bb15a79c93f22bcde59288a79a"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","fd44730033020fc9cc2858ace19903d2"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","925c3b0ad933bf39d98d92f4ca3ceae3"],["C:/lmislm.github.io/public/archives/2019/02/index.html","900b7e3c37f71d4608127c04c8d5dc06"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","f7fe05fa2f140c12b621de470412307d"],["C:/lmislm.github.io/public/archives/2019/03/index.html","486bdfc2b2a7892e57d655563017c52b"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","81f370d6ce94771c6cd46f7ebcf57a78"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","396889ab84dce23639ce73f914f340db"],["C:/lmislm.github.io/public/archives/2019/index.html","a396506078068140738fa12928d46d50"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","4e2c84915211243bcc62571179e6c185"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","5323cd3015a7eb250f8e7170ea879309"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","d897a022093dea5f53cccfff28baa76d"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","926aa77c355e03ef8c1a1a99666df0b4"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","09dae6d2aa33a30eb90a19521f5843c6"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","73f9cfa849dea12420c86eeff55fc32c"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","5a23c8582fe146779dfc546db0d8f2ea"],["C:/lmislm.github.io/public/archives/index.html","ccd7e6bd772a2ef13262b0b1470733d8"],["C:/lmislm.github.io/public/archives/page/10/index.html","fcbf2facf64a4f037b8984d48e9e0c13"],["C:/lmislm.github.io/public/archives/page/11/index.html","5106992143b8410b333270a7c0363a88"],["C:/lmislm.github.io/public/archives/page/2/index.html","df0c9f4641f2a6d2c4a2dc6b6ccda98c"],["C:/lmislm.github.io/public/archives/page/3/index.html","1eee1a15ee15eb814699c4a708bac680"],["C:/lmislm.github.io/public/archives/page/4/index.html","523a8ddc48c7df4415038e5371d69e2b"],["C:/lmislm.github.io/public/archives/page/5/index.html","5cad97ca2077c31987a4cc1a1e8925db"],["C:/lmislm.github.io/public/archives/page/6/index.html","4d58afd956adeb3f2b685901a87298b0"],["C:/lmislm.github.io/public/archives/page/7/index.html","be64cbcc2df93cf48e24cd197adc19dc"],["C:/lmislm.github.io/public/archives/page/8/index.html","8fcf41da842eded77fbef1dd8b3f1d2f"],["C:/lmislm.github.io/public/archives/page/9/index.html","05209babe778ea61735dba2b87b49374"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","3815cbe073a178282ae3026e91cee896"],["C:/lmislm.github.io/public/categories/index.html","7f762812d72558ff67968a893c7073f5"],["C:/lmislm.github.io/public/categories/xx/index.html","c8bf9e08b2aa371cf8c98536a3bc8243"],["C:/lmislm.github.io/public/categories/学习/index.html","a719b0b312ec21735b7cbfdd7d7d7f01"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","683abbe4ba0b1235924a5f894c3e440d"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","f91d1368065199765ad4abb36b47498f"],["C:/lmislm.github.io/public/categories/工作/index.html","6aebfa39d3a222fc24ba74b306f8a795"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","ab70100878493a49781742e27b243092"],["C:/lmislm.github.io/public/categories/技术/index.html","6658b2fbc9e9b130c7e025bf81df95f7"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","07a44eefe606ef99146db95f3d9e3cb8"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","5b395a41f30aad118e94d4a806a44e2e"],["C:/lmislm.github.io/public/categories/日常操作/index.html","e1fb93fff21a0f5a11de2c093ad85c1b"],["C:/lmislm.github.io/public/categories/生活/index.html","20fdd23f8ececc4c51d1edfd17a4dcea"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","34fa15046bc14f122286990f12c8f279"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","6dffa97cb6ada1cb92e15dd78354e159"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","8f1d3c18559f2ebd1efec8c297bf3440"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","19488081716545002bc15a817d110ab4"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","ad26041d52463bd15fcf880ecb71198c"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","9ac0ad23313740c5be148479271532c7"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","da1c0021001915479202525a59a166e3"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","6c79b030b2ee2f456de77f480358bbd0"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","683adff6f58317395ad6f82273e49aa9"],["C:/lmislm.github.io/public/page/11/index.html","dc5bb2a7a2526cfd8ef409ce962ee775"],["C:/lmislm.github.io/public/page/2/index.html","53363e7d57cef8f53fba77ffbd06a5d1"],["C:/lmislm.github.io/public/page/3/index.html","c55760d3641b9238c7b3a35bbfdbb3ec"],["C:/lmislm.github.io/public/page/4/index.html","b4db393443a6d3e76b988112ffabb87f"],["C:/lmislm.github.io/public/page/5/index.html","a9e744437e71f6ce215260b436b96af8"],["C:/lmislm.github.io/public/page/6/index.html","8c4de6e3e87d5ef275c5f87a4aa866d8"],["C:/lmislm.github.io/public/page/7/index.html","92f5f1ee18508d983d38dbeef8b841fd"],["C:/lmislm.github.io/public/page/8/index.html","992e7e505f74b8187f79ae4a17091782"],["C:/lmislm.github.io/public/page/9/index.html","39e5805c4e00ce5d78b6f928987efb28"],["C:/lmislm.github.io/public/tags/Interview/index.html","bd43fb2032be6917ccd9e4c19b5a7aa1"],["C:/lmislm.github.io/public/tags/JS/index.html","d29cbc48858c7cc44bdcfe1a3dfd9d39"],["C:/lmislm.github.io/public/tags/acm/index.html","3e8cb7ed85f59b61a3b38b09ce08dca2"],["C:/lmislm.github.io/public/tags/c/index.html","1479cba1f6476f41e6b4ee01b02e5a24"],["C:/lmislm.github.io/public/tags/codewars/index.html","cc0914fbabfdce81a3a21ae022a7a894"],["C:/lmislm.github.io/public/tags/css/index.html","656efac4430ffa7c64e31bc0018c577a"],["C:/lmislm.github.io/public/tags/git/index.html","f8231cc5ad572030f196c5c332fe3f38"],["C:/lmislm.github.io/public/tags/hexo/index.html","620d548f4d4ca3d599d9dbcbd5baeac6"],["C:/lmislm.github.io/public/tags/index.html","7f7f0beaefea8b59a9ebdb8e67459e94"],["C:/lmislm.github.io/public/tags/markdown/index.html","ee0318a0fb674759c0d93153579abdbe"],["C:/lmislm.github.io/public/tags/poj/index.html","bb45b8eb0be6e5e7905ccc9e7e342709"],["C:/lmislm.github.io/public/tags/shell/index.html","db69ade2a94f902ee3693d77218c33c5"],["C:/lmislm.github.io/public/tags/vue/index.html","2691b3a472dfc02852918f1d0e7b5149"],["C:/lmislm.github.io/public/tags/xx/index.html","10a5cce49b9be911612f3914b8762228"],["C:/lmislm.github.io/public/tags/前端/index.html","449442df88aa2b6ebb5ec00c63e24488"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","27daae0cf47e4446256592cbe48a06df"],["C:/lmislm.github.io/public/tags/小技巧/index.html","41fd45ec35a0b128c8f5c931d06a1d15"],["C:/lmislm.github.io/public/tags/展示/index.html","d9c9ac02384db0c3ee27de4661239606"],["C:/lmislm.github.io/public/tags/工具/index.html","f256e9b1d9fa584f266658186a9241a0"],["C:/lmislm.github.io/public/tags/感悟/index.html","61a368d69b42b0c99a510451222abbdc"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","f8514e86574b2687fbdbed3bdbf4d77e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","97c6b4adce8f635f6b89e2423446aee4"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","4e196629be2253785c1d5f7c653f1687"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","7eea75b1a4433cc102528928659bb638"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","26eb8266abc8ecd3ca05537889e15590"],["C:/lmislm.github.io/public/tags/练习/index.html","7546c4c943d61415da23f26519831f29"],["C:/lmislm.github.io/public/tags/编程/index.html","3ad76183b73e999506bd2718c58ff2f6"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","9375f44788504cc459975d90226e3e18"],["C:/lmislm.github.io/public/tags/运维/index.html","84d3c89ef76259a87b7912b9c84dd5e9"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







