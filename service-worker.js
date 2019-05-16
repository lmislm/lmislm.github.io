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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","4a608dad8951b751e501813275765652"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e74b4110c1e18b9bdb492a579c9f2a55"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","2f64e1ff50d4ded71551eee7914d1544"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","d079501d331ba6c4ee3d81efe6e627a5"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","5ffdcecd227ff8efe4b175bb09f5f969"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","0cc00becb91df27c7b014d4562e133f0"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","64bfdec7f06bf0a2da01f1bfdd8d8deb"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","0ee243d29e546797b09d2c47e4665d71"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","64ecf1523534c69fff158a41520ea022"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f6fb5f45ec54178fba1be57c3b94098c"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","fa42fc23f5d0816b3951f170a66de0c9"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","343e4905f041caf9d010c7e24bdca136"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","2043ef459e2ec7dbc19bab660ce420b5"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","c46b4b08432504b3712224564756a4e5"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","ed89bfc224ff44bebe3b580ee43bcd5c"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","37c865a8b600493384d9eecd29f141f5"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","74fd324dc5864484381fe6590f04283e"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","726d11a472a79ab9db4ab4ba9cf6c8b0"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","5d6ecc8b650dfeff3c6649863f4ae00c"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","17effe24a760f22567f2a1e46bcee08c"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","058a1162207fbefc70c06eccde090823"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","5eda86d30b39f36aad09c6c074a6235f"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","c46091ed99e5e39b953ec46f95e8ed4e"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","8c31db1c32abf3293b46a1dd5fa9df47"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","8efc6270c33145a19c5aa98311230d2f"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f6844dc467c0cdf1eacf9b92af727654"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","ed7d2665e60ca58077a1b925ed5a1e10"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","eb4457b481c3a8367087a82394c3e60e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","98beaf5e7a0887fa2e43898390ad195c"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","d29b741ed2b3d6323fd55c2aa0ef989c"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","6332120a82a4982fdbe27c929f41aa67"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","b44b509aa6e9757f316655385bb10777"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","7d417a2b5be78c44339934d35e9cee70"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","44dc42b2ee706eec43081ec773104b1b"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","897ba5797beed093ca1b1e6d3b420238"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","30ff6027af4857b07c778da71a5f425d"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","79e8420f1d3527ca96abc8fb03a1fb0b"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","412d840bf75b39c36b1321c54395a748"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","63c6ba772bc55bc294708bc9e8493e65"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","b7c0229f08d7a8b3507dd69a38998421"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","247dc89ef524100531a7cffeea1923e8"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","92b6e15a47eb50aa8038ef1898252503"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","cb7d4694f7de761db636e55fdb295663"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","62e14363d2a06d9b0e0e440c7ef39d63"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","c71dc246fc2b166748b9375006c65c66"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","bc2749d6bbd9d4f7a414d4a65ae3faea"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","ed11c525adf0334521abc26b85dc840c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","d818fb45705cd6e31f4de0b936bc7a32"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","53fa0c61b7a398e0b5ef31b8061ed0b9"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a3d55f8c3d3217af4955867b43235562"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","9be67e5b6fc7cf014c1a8ead358360d4"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","b2528e68ba84a7a1da924be4d8c6c314"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","3b4bdba250ef9474375a623a54d723d8"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","daa24c6c90a90799ccad9e1cb4ea60dd"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","c637c29c06de16562f0ea538664e1641"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","65c4cd4400e5d6c44c56d775aa524c0c"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","3a3f142deec76d0c05f274b5a64d71e7"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","dc4f9ef2471bad584cb26af4be21e0b8"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","4649bd4958d8fc979d95a8815a319927"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","419375f6449d289d1b49f54b2891b582"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","8e7a389595ff2fe214b74714692b2e13"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","34220ac70c0ce326cd8b3d144e4c9ca1"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","1892544a597bca0287603dba37cda5cd"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","1b8cda979a4d63d62a0686c6706cc641"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","bfee1a2655b6e673d186ac9858d5fe53"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","f980c0ecc30ddc7bdb7640f2ab37d273"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","8dc437f707323f8f5bf68e04ba0707db"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","ebbc064eec8c8433df43a63172282f3a"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","2cf910d2893a1583fb7b51d887c3c92d"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","8b37f92839489d2597bdfc6a62652380"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","395c3af5c85c22fe2909759e0fda7076"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","8a771ea73053a8dbb52bcff218107bb0"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","6b6148888a9c49406d5440f4b6109eb4"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","6809feb052eeb88949e74ed7d1ebc034"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","ba4f1c48470b4a97038392438e933385"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","36f361e25fae2e89719267a11ab88793"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","b9ba040cc1747dc834832aae4e0a9ad6"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","8455045e4a19727d176a0c0bd6b88869"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","44ebdeb041a0d82e2463aea072876c69"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","d575864e12991a723aa374674dc83e16"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","d899283be09c86173b77e327a888cb55"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","894cab69b483a7370ecc9d4d30ad34bf"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","0306707d1f581d271271c88a204ebb55"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","11e783814ac6987988b56db459d9ddf8"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","a60f459bccb2be4293b2569ba6ea8b63"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","65faadcdf1f6fc8baef79221254b6e47"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","07de3a8de09ad53706fd97805f838600"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","428a9f7ef050dc1a44dd6bda2ef723a5"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","f324f9f2135d0d262963ea5d7a7e76c2"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","388d82ef0b3d306d0240815e82c6dd48"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","ff917821499c6f25252051e4511b6a99"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","e6e8e659f094e0f176ef86a29da4d606"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","db98dc4319b5070f57c570cd5ba5b325"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","8dc1fdff46a6ab75e611199d11f167c6"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","7f0177520e63d0077bd503727fff2dd2"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","66d42199d68ef006cbbc8a55f4a52a87"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","c1b8b1fbbb042c66bb2c50f96223ec54"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","9cb17a95d45a2b7889eefb179ace1222"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","97269f1f7d2c2dab95248fc421a291f2"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","0cb5f418c59a862fc8dedb3517be711f"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","5c9ae39032cd5ef70ca994471f12a3a7"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","0dec9c576a752eb194e3be833eff6fcc"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","9bbdded5ae2935ba029aceeae2c9a6de"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","a478b9de6ff921cec640a31bede126af"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","88ace098262c4d3fbff70d69a5b8e004"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","c911386ca190a4bb44af827c3a599eb9"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","297f33f90a82daf804b9f534affe83f6"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","af769242cba50fb6bc6255175e509984"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","7d7e458a9028f96da469f4567a1144e3"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","515c659bbc1a1d17a51b5f4918757e1a"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","59368a08ea92777c07fe809b4098bb4d"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","2bb04fb1548a4e6dc5a2aee6160271c0"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","4427b49fc0f37acebc371c993219eaf5"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","9517c066df5acc46db97a403c3e92984"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","d3747670ffdb872cc662ab3f3d2b94ee"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","199824d66cd9743bcd990f79e82b29dd"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","fb900504de01c7e6055a06a6d4a5b33f"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","6198e85d5c9be5f9290cdfa0e1cdad0c"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","501d1ffffc60d66cf960dd889e8c32a8"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","f75fabe879fcd2bc886418cd2e4580a4"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","d60845c6890af0ce1412ce29daed1374"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","8f4b43f9b12b3759fd4a45d562429460"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","bd10233fb55cb423974a5aec4d50a9c0"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","78ce8e3732c39cfeaef0eccde91145f2"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","9eb8f47ae7873093e7502c3a1f36287d"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","ef4917551cb212a106d5a941a5ef8852"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","5b664c4a4a19ce5318e15c8b11e3b27b"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","1ecd559bff1792f085d01f8a939774a8"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","a45382e9110811bc56f938777596c1ff"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","2a24f0e78f1f71e5a547c30502fcee5a"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","7825282a858551ebc25b5f4624949bce"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","b8f01c8eac0d55bad01cc7475ebd0526"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","1dbd0deeb1e93175ecaaa50ce06d8522"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","ea511a38d9496c3b933839986cfebf6b"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","853b77aa0884247c128ac84738c2edaa"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","b7ea9d76cd107d64ed7f5a992c70db62"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","9fe4816fbde1b4cb35aeb5724b5f375f"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","c46a363f392da2ff631901c4c5f90591"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","58544b95d577f612e05136dea515d21a"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","4101763c2ea48cce34d6287458052f4d"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","26cb10d8df0f10bd45b9982fc0b6c9ed"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","1951221c9aefb2d380fa7f6f0e2fd2cc"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","b14fb1065c371375d34343fe493210a6"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","2d5cc16e940075e0e84f030406340766"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","309f48008b2464af0fa5bfe147537ace"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","3f1f342e3720b4b3429933919dbb8e26"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","1805eb6f8bfe4c9ecd1a53c7574c7bfb"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","a7e64de60b5db02bae999b3c46bbfec0"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","71ecd76ed86a85a5a20e57fba0b6cc9c"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","337ea66f37b130c768dec4352618e5a7"],["C:/lmislm.github.io/public/about/index.html","0c232d643c3193944dfd244a107c1751"],["C:/lmislm.github.io/public/archives/2016/01/index.html","b26ec865c3c82a7f2abf8247ced4c13a"],["C:/lmislm.github.io/public/archives/2016/03/index.html","f88c8bfed91b102ee513cae9cdc5a793"],["C:/lmislm.github.io/public/archives/2016/index.html","9f32ba9770b8b7177847dac2b6e7025f"],["C:/lmislm.github.io/public/archives/2017/01/index.html","d68eb1d5693436690f57e774b156b67b"],["C:/lmislm.github.io/public/archives/2017/03/index.html","014bb8657ebf1126c5b540228b5ba376"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f4cdc1abe8bbb9079e91c8ea62dcfb33"],["C:/lmislm.github.io/public/archives/2017/05/index.html","8594235354a91fcd6f5482d66176e7b6"],["C:/lmislm.github.io/public/archives/2017/07/index.html","aa6b6f9509e7ef4a412a2e11af0a7df9"],["C:/lmislm.github.io/public/archives/2017/index.html","b4225bd21ad603128d7128f4274cc868"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","81134ad22bf79b066613a4dc48920c9a"],["C:/lmislm.github.io/public/archives/2018/01/index.html","215a79ced40d60031ccb938fc5bea67f"],["C:/lmislm.github.io/public/archives/2018/03/index.html","8c3d576dd91c39055af50d1e233062c8"],["C:/lmislm.github.io/public/archives/2018/12/index.html","0b631754dd8b65e89cfbc4845e6b0779"],["C:/lmislm.github.io/public/archives/2018/index.html","8220cf739c406dd2c6e53eb6d07617fa"],["C:/lmislm.github.io/public/archives/2019/01/index.html","22b34c623c6a79109bc2f9cc2b871a7f"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","983e1cc4056d221c975ec240e6b7a838"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","881203e82849da5a5dfb09ad2735a33c"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","e052d436a44ad05b6848e13cdcc047ca"],["C:/lmislm.github.io/public/archives/2019/02/index.html","a3fcb108878342211284f8fb2bb14b7e"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","99b0b37d2fa4da38c4407a2eed7e4933"],["C:/lmislm.github.io/public/archives/2019/03/index.html","b5d092ed2dfa2fcbb302c8ea158eb310"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","775270ff713b869729c8ce57bbbf2fa9"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","a174757dff34e7e492aa3e4f549ee49c"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","bc557674b2b2a335928dedd05d618d50"],["C:/lmislm.github.io/public/archives/2019/04/index.html","7fbbd30e71a9ec2c622229789b9492d2"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","9121f40dedc5161c91f7f539a27df928"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","8d16c985a4abf88debf74ec8846da8e4"],["C:/lmislm.github.io/public/archives/2019/05/index.html","1488184c22a0f3373e818664f8d09f63"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","5061ff3ef77f8f35aae7116fe765fc8c"],["C:/lmislm.github.io/public/archives/2019/index.html","227843b7c5a444a8863344ed5358b691"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","929e501795e91e3f9bce75060cbc6a96"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","3aecab947a9a7ce2b0bc2b117f0dfdce"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","7f6106b364fe7db0ff51fea6909d068e"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","88baf0f0c189506d7fc01f0a9bfe7c38"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","87239a164b3fc54b01bf3a4e025155d5"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","7012360a0efa5fdb58761329cf9b644d"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","8998ed976278f74868154398ae6bfdd9"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","8f965e76c1d038f1d19c32641f7dd9d6"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","d038b7903b4b387e5f31dc337a779a0f"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","c5ae5fe5d52537a8028d52b7c973e18f"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","b85d02ec8738318e5808e6c92ff097fc"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","3a1d8ea8693f3c98cbfbb5b03f79cda3"],["C:/lmislm.github.io/public/archives/index.html","785792351027918c5737e80251d65bba"],["C:/lmislm.github.io/public/archives/page/10/index.html","09c0d3149cd679af8331ea10ad5e90df"],["C:/lmislm.github.io/public/archives/page/11/index.html","4447f5dc0ee11405a0f4616dc0426ce7"],["C:/lmislm.github.io/public/archives/page/12/index.html","9f9ee3679f49373de18c991d8c48c041"],["C:/lmislm.github.io/public/archives/page/13/index.html","6a37d39259ab203a5c03b87ee111c5fc"],["C:/lmislm.github.io/public/archives/page/14/index.html","85f2096ee7bd0a92b249091785c8c44d"],["C:/lmislm.github.io/public/archives/page/15/index.html","b0b01168b6937d886fe980efa60f27fc"],["C:/lmislm.github.io/public/archives/page/2/index.html","5eac50242778ef8e630148b30d8758a0"],["C:/lmislm.github.io/public/archives/page/3/index.html","594373d85f2929e6200cbbc7d4ceb9e1"],["C:/lmislm.github.io/public/archives/page/4/index.html","1a824165cb86dbefea3bb467b28c9d57"],["C:/lmislm.github.io/public/archives/page/5/index.html","936a93b7ca0e0f1217d1609fdeaf18e9"],["C:/lmislm.github.io/public/archives/page/6/index.html","c767da91ed949349b83cee34b1250a93"],["C:/lmislm.github.io/public/archives/page/7/index.html","e6b2e9d2aa98df3282a48c0f641f9f3b"],["C:/lmislm.github.io/public/archives/page/8/index.html","4fb0376f4a1b5d82d41ebe750537d42d"],["C:/lmislm.github.io/public/archives/page/9/index.html","769eed9b3e20dd8dac063545e955be70"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","e6c8d1d61b365e90f1eedf17ac58b224"],["C:/lmislm.github.io/public/categories/index.html","e4d0edd5eb4e1e6edd87e75d3a364306"],["C:/lmislm.github.io/public/categories/xx/index.html","81d1fb8b5ff652894a5cb15e88e51836"],["C:/lmislm.github.io/public/categories/学习/index.html","2dc89452dcff47fed22591d98a50ac0f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","8a64b6a9c394db4eb24c0aafebffb846"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","528a4304c83fdad656e9169accf08549"],["C:/lmislm.github.io/public/categories/工作/index.html","f48d2289464d2d731e66ac0cb6b83bd0"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","98f1f1be9fa9ae080d6ed06c69ff7fda"],["C:/lmislm.github.io/public/categories/技术/index.html","b142bdc12cd4782a56cc828eab5d5ce9"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","3276f29d4a53cdaf17bc5f75457865a2"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","a19f1b1a1772bee064c46a401a9f767e"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","77ed9570241c60b24102cd44e8a49b62"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","f2e41cf37d7af04fca37022a4b992af3"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","4a5e63eb8568b8715f8907b6ae20877b"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","31b0ed21c25d865b91a5df5f547c23fa"],["C:/lmislm.github.io/public/categories/日常操作/index.html","8ad29f4adfe920ab08c72c924893760a"],["C:/lmislm.github.io/public/categories/生活/index.html","3bc36f0000d331df47e1dedc61c1c059"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","cabb86e998d669bae94d6b9372d0bc74"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","1c81eef7c46281b20fb02e1c8cfebdb5"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","54cf82b5034d7b61ee7876c953c6db25"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","d81f44c84adc8a1de1019546719669fb"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","04ef6f1bc7169b4580e73d2117b05a7a"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","82a18f7d9cc047b077e324f246cbf0ee"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","89bb258737dd04c6f94cc004904f727b"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","29afcb4f416fa0e3628b8eb762584c04"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","cb9b5b3307333b931f1201daab71928a"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","f9506ae700467c6485601a0ca9448532"],["C:/lmislm.github.io/public/page/11/index.html","c2ede4a81422f505cab0fe6660855f29"],["C:/lmislm.github.io/public/page/12/index.html","d29873d1029d8f6109713a1e1aa879ab"],["C:/lmislm.github.io/public/page/13/index.html","5e2accbccb29c23a6e2042054b8c485d"],["C:/lmislm.github.io/public/page/14/index.html","772afdf122acabe204680b12bfa3cee3"],["C:/lmislm.github.io/public/page/15/index.html","7ecad5576be61fe4f48c5523e8cd1b47"],["C:/lmislm.github.io/public/page/2/index.html","a041c18e21a3d6071a326b6142eb0703"],["C:/lmislm.github.io/public/page/3/index.html","2e194e6a5fd9f4af4151b39923d7c111"],["C:/lmislm.github.io/public/page/4/index.html","efcb4539c0f1ae4f24cc37f7f85e20ef"],["C:/lmislm.github.io/public/page/5/index.html","923b8d8d756db6145887b25d73a38fa3"],["C:/lmislm.github.io/public/page/6/index.html","646745e43b468ba61d0464b5b19d6200"],["C:/lmislm.github.io/public/page/7/index.html","7a334148f865d616f776ec325e0d52f3"],["C:/lmislm.github.io/public/page/8/index.html","b1bebc5334be07f5865fc812d683ef2e"],["C:/lmislm.github.io/public/page/9/index.html","b63fd537606cc2810ad57ad5c6f78238"],["C:/lmislm.github.io/public/tags/Interview/index.html","095e9d00f0f58548c2db2a8d5eaefa7d"],["C:/lmislm.github.io/public/tags/JS/index.html","411f221be86d260a7a79427d393fcf3c"],["C:/lmislm.github.io/public/tags/acm/index.html","a9610dd754f2cd0d1c14ef156f8f8d51"],["C:/lmislm.github.io/public/tags/c/index.html","d872aa0ca55ea6d24fcbb74335aba546"],["C:/lmislm.github.io/public/tags/codewars/index.html","2ac05ec25b868c111f96e6a3ffb64bde"],["C:/lmislm.github.io/public/tags/css/index.html","17924083d2d8b5e1a541c5a763c323b4"],["C:/lmislm.github.io/public/tags/git/index.html","c0e49e5237396c9636b4ebdeb6336fee"],["C:/lmislm.github.io/public/tags/hexo/index.html","1c089bdff5f37e8af8943dd88677e845"],["C:/lmislm.github.io/public/tags/index.html","541e6f41ef63a8c661345ccc26c7a720"],["C:/lmislm.github.io/public/tags/markdown/index.html","53894a872112ecfd82ab24541699b0ee"],["C:/lmislm.github.io/public/tags/poj/index.html","258d0a1eed6f2d9d3d0e80ea4e0ff6b8"],["C:/lmislm.github.io/public/tags/shell/index.html","a1e07266e392182f3b51e10343c88f18"],["C:/lmislm.github.io/public/tags/vue/index.html","bdf27f21cd1970e7e0394226b145a332"],["C:/lmislm.github.io/public/tags/xx/index.html","232d33963a70b9352b1a87339ef07f06"],["C:/lmislm.github.io/public/tags/前端/index.html","4c6581e1e498833e945636e4b5125f49"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","6860680c8afdceb5dcef23d9ed287b44"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","d865c0474c3f336b7e9d6b7f4340067a"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","c97fbfe66cc0a63659dd81b27a996ef5"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","273308210ac955b5b48b6c9a572a26e5"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","8545745f8d3f5c2e4e3014075166e3a2"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","ae3fa63bcf7d6894846edfcbaa958218"],["C:/lmislm.github.io/public/tags/小技巧/index.html","56c88624b6e0dd9c33712c124d159432"],["C:/lmislm.github.io/public/tags/展示/index.html","96213de95553e2dc12ae478abcb26bc6"],["C:/lmislm.github.io/public/tags/工具/index.html","b2d47402936a5f3c4b6662ad3a12b3e6"],["C:/lmislm.github.io/public/tags/感悟/index.html","35bc1a6e365183838bd44aace6d41424"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","d58df18c796dcfb46311338ab84ee6a4"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","3b340d362cf63965767e4c5b0d3caafb"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","42596d4e41c3b3931a2f0c80da394b72"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","68f799e3acda8d1839a7db2fd4754e45"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","206ac3d9e6137506195873712f8126d3"],["C:/lmislm.github.io/public/tags/练习/index.html","9cf3342b58e4b49f9ea8b85117712c49"],["C:/lmislm.github.io/public/tags/编程/index.html","6e64503162f67e3f008afdc037129eb4"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","8274aca887f0481bdb7ab41edd409214"],["C:/lmislm.github.io/public/tags/运维/index.html","f9a1f1eaff2755ab829c81af3c40304b"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







