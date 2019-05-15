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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","10a429a85fe943c7fab687bcab95c81f"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","38a0aad76b77d279805f1a0801e0a6be"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","4af610edca2c43dc2a95dd7549a2cef9"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","87ae9123b9e38cf71abdae298a9b672d"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","183e851a85ebec41bd029c71a04d4bd2"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","f68c775761ac798947dc98536000ba7b"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","dbc521e4cada190267df406bbfa24bc2"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","7d0ef20e1db83414a8e036dc1736528c"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","03243101869a031a6f6a074579a2fa0f"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","cb2e8653bcf3f61ae634fece8f43d682"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","9bf29bb9977aed39cf593a39db643c3b"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","376a411e9d95c829dce79b1ab7cf1cfe"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","ecd06bf5abd8cde7e24df2db2b9bf520"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","a4f839872c84499993ba371ad6491c8a"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","bc8de16ae617e0fc5961128baa85b4c0"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","e304c8631395c1f3328da4ccfb652ada"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","a8fe45beb94e5229f986e4aaa97db068"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","45523b3a4eecd806aedf4e1296eeafa3"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","18b08e9c0f974729df6439a27dc3a803"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","5f688d933eae8053c11dfd222c1cb043"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","9ef7e1c66dbb04386f59d0a461268445"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","d8d74ebafae11616388fcb74d25f207a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","0fdeeeb513a04c07e2c6d2ee8eaf3751"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","638e637b5db23fd8f51d2165bbb85b6a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6daf09f69bd79c94e49ee189eed1aeae"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","66df1c978c14225babd9a5b511043985"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","6729567c167d61886cbea4502d8c5f32"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","e14c3be349cd749db19fe8234bcb137c"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","82f31ec3fe59bcf4946de264919b5e38"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","4973b8b7ddbcb19160d69e722309cfe9"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","767c4f53a94bd217d31fe256deea2cde"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","8d34cc13159858d1ca3a41b0c1f1d995"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","dce13635e70459a62d0a3717298004d0"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","29c0a8bdb12a94c74b8c1dbe7abade44"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","d64ce090090e305256d831ffb553b11a"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","8cf53d5066148be4bfe84a824e3e8d3e"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","1dbed7b2499b8e328647df7093da881a"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","c8f7fb143e029b3f340f44448c8739ab"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","ca7b20c27bbcd1d20eafafc84dbe4930"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1cbb12a97a8e3a7eceedde4ad2b844ba"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","99e24029726f3dc7c8ec19053eeb1703"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","46c2f2a803f1de14d48e48b6cdec9427"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","cee1d500eade7f70527d1cb59b4b14c2"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","6ab11c19fb9434649e29dae6dc4899eb"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","3ce331d7862876d46a13b46f33fbd68d"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","7520cea419c5326a9cd425b7ddaf4de1"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","033ecad6bc72c4e60f0a6ab4b3eb981c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","c336f808a77f36e701bd30afcd352280"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","b91da49c048ac920bbd3b7ed6d4f3f97"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","e4fc1da3af87e35c1d086b9fffd57ca3"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","6b97a00a8bd4296f4d3673454f30fd24"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","6fd1b9295ba703f9e781a8caf947c9d9"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","2dc699ee5b8b64fab0b8136f584f4683"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","c3444278839d65f6969a6bd95d963089"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","f8a9b0372ffcb485b702cf4cc5916b8b"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","00ddf6a1ca43e4fbc235f2747571d0d6"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","89556c4b28f7645ad6c924d515483661"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","21882dfcd9bffc044594451f5033c7a7"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","65e0dc5cc2ba264a468020513ee32650"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","9f915bec36ef2c6bc9c2c8151fe29169"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","ec38540c3cd2f035c45227db269c43e2"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","ff0c75f947f0e0ec10b588dd1a0fca77"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","ba0dc4f59cc738019c39389345469c78"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","b192ccc0b8f1541fd0ee7054b3739f20"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","36241656aaa8836ec8ed00e175ac32ae"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","944956adb427abb3491aadbcab3fdb1e"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","af8c5c887fa33eb011703f19374b7193"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","53e1a3b963acce92b333f7b1b4628a85"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","1cd9a28dcb97ba74d55e30488d0d9c10"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","2d17c6751c582b88a965df3453acffb5"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","0c7d03b400880976c6e602a41efed842"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","bb8afb816b5418b101033c581d6e8f6c"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","9aa77b95dbb2f4a034ee624abcc99862"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","be50deea59a2123883b53c6ceeea865d"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","057f01488d085dcc1be0ff02d9bfa335"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","9662e0c271d33343238aa98aaa5b2fd0"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","07b4b7fbc9d1614b08936090eeea984f"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","94daaff14d413491f5f880721d04d266"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","4bdb762ed4413639394f8a373a1c4674"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","9a3fd201acbaee6abef5b88ea0e9fa81"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","64d63674058988d629c1564a0f637ea2"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","bbea5e0f64884e053c4a69ee5be2c225"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","707722af8d8fc798877c58f64748aba8"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","2aa9f072b93c9797149cef050f40b3b7"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","74ac7bf5e5f55bbdfac9d5eb088afd88"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","462dee7e2a4e023fa1bc22372d7d7a99"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","47e5a3f9e2e587addb3557921cd39c4f"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","769a71ebb79d90d1d6eae8b33a237aff"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","5d0dbd6deedcb5c2cc0bf5125b542e2d"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","1661a4e36790ab6bf66d4291e0b62fa3"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","ccc6db1c12597ded15ec3e6328ce5562"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","545cd7e20f4b12361077d32ad5c5305d"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","9a8fdc0f36581bdfe389e7583c7e736d"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","d0a98bd04170ee1877d15101422d6244"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","43bf81abf3d20dc094c3522f9f09df9d"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","148c1de87d5a39fb14c90d1bf565909b"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","2bb4ce70dd19a5fbfb50ccc8d609c17e"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","0a1f905dbd9b4f7ec6ad082274668e25"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","af18ebf77fdcd8caf968ad364b605e3c"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","0d7793270a5e3babb4346e1709f2759f"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","2399af15ae44e9a5aa87289f721b94c9"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","06f883d5ecf4e519741cfa06ddaad3e0"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","e53a1276a43860c78cbb17b9401c7c0c"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","bfa58a088e3c844791b07ff001f42c62"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","ba6f160f832db633f768e2b647ca9731"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","8a518279eb332d47c89aa18f98bcc9ef"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","cfecfeffd52bb800216615decc079370"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","258fc2d495b46ea8932ec4fce8a227c8"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","16fba5a04c220b4af83f9d5a956d787e"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","19fdafb31a0bf9fb2cc82a512265bd70"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","660dcffad03969d8e1684e91c43b2300"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","687b0acec2c4d19659d815ea430dabeb"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","88cba6f32ae0d904d4f4154d456dd121"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","9028be57fcde55191e16e1ceaf5a48e4"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","83a72b31f07e303b39b38c149af378a3"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","78629b9bfc26683fb534c6dcde1e9bce"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","5ba2869f92d1ce0096275b1b998887ef"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","f83c0282a93f701a9bcd41cda820c91f"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","9d8d4ab5f70d65f9b6c87128d003a07c"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","fa29f9ef03597029a50ebcf2cd4903d4"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","a61c8b8d3481814e25e4a8a4a5d57154"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","4094e89301b50c55af3919f19bdaab71"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","3f13ea4553ce1e3e881a138da5fc1dce"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","216b27c34712101f9d82efc3e18e225d"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","6a48cb539c796e442b5eb6ac9e6c1205"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","afad458a41a7fedaf713771734a99a10"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","9fbce0778bd1d61d20d4fab348f61941"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","79b519ded8de8e5f8790fb5478694646"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","c11de98ae1eddf0a88e7d832acf75880"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","ca193c405f2c3f6d4aa4f654ec0e456e"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","b353964bcd822b928b1e7dbc3dbe33a6"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","453a24ba279b2b3919e529acc12d4eec"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","285cb42712ce0f810e676b9efdac1d00"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","bff65254a799d6eae7e1f38ff5ea4a71"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","b31f9394e37ef1fc8befe69ed13f63db"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","61862b73b95e11b77c50c6891c21289d"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","f75825888004b22096c63e0964dfa358"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","a94cff894f79bcac96e9b6097e1184cc"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","2919af4b87d3fca8de79b96440997ab0"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","b1509304ca7bfa5eedfef975ce69bc70"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","28204a76fbc999626d73a4335e03c54e"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","f6e48bc83d9971292a4150d39341e353"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","41ee2e65f7f341fcfcd3b01a021ccd3e"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","d72cdd4f1da529921b1844747b4385df"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","023825559630ab4ffd009801d1f9420c"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","73e091cb26b7a2d12bedd576b065e757"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","558a86f523b3a81e64b2b527e1db2e77"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","85a694ffce468d64a63b128f5a7ac74f"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","3c141e5642ec29134b502e3fb1130bc0"],["C:/lmislm.github.io/public/about/index.html","28b9fbb8be46d3fa2e2efd29b8db5296"],["C:/lmislm.github.io/public/archives/2016/01/index.html","2b2d2f45615e1329ed6adbf18e295c9c"],["C:/lmislm.github.io/public/archives/2016/03/index.html","f48c28d33c51ee2b565a7eea0d4133e4"],["C:/lmislm.github.io/public/archives/2016/index.html","94b317849b95f6653677a391b6f8f0cb"],["C:/lmislm.github.io/public/archives/2017/01/index.html","f318318985249f142d8e267eed28f5e5"],["C:/lmislm.github.io/public/archives/2017/03/index.html","852f16782a3b97f8eb216d9780ce2756"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b8ba5a4fef3500895aaa18d9482bf537"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ce349bb99ed43790bd4dbaf72cd954bb"],["C:/lmislm.github.io/public/archives/2017/07/index.html","f204a35e2be7364f80b028ef086211ff"],["C:/lmislm.github.io/public/archives/2017/index.html","484cbd14e8c28cb27f80e995bac0c127"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","c50b97725267a7965d8110d0a03703d7"],["C:/lmislm.github.io/public/archives/2018/01/index.html","7980add662b95a402e1bceb12fb4ea90"],["C:/lmislm.github.io/public/archives/2018/03/index.html","7eb30d387d5dc38ef19460b45eb1270d"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c76f67aa36cf34046dc3aa2d202fd1dd"],["C:/lmislm.github.io/public/archives/2018/index.html","4f31d9058502b1cdc8b528f70eac25b0"],["C:/lmislm.github.io/public/archives/2019/01/index.html","ba8029aefeecbc8bce08ef863e12b0e1"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","3829ff9ea78642faa0e5a2ea1ebbd513"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","98a1ae357e73352c9cf9610a20129c7f"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","503cd45477737e0d66728a2b2bd52a7b"],["C:/lmislm.github.io/public/archives/2019/02/index.html","8c7929819e9d2b18eddd0c4b1fa58ddd"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","f0f0d91d062e5f825abf2a40f3e5a0ef"],["C:/lmislm.github.io/public/archives/2019/03/index.html","2ba0a74aecb795658cf8f492b196274d"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","4aa802f6367ddcdd4ec6d1217214f14d"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","b60c2b4feff41ae8f4dfe30f35a0644c"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","73d63a077f2ce7afe94fe08ec36be9b8"],["C:/lmislm.github.io/public/archives/2019/04/index.html","03b2c52634de036b898b6deb6727285f"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","cd6cb812ea65766f59f48d721fff416b"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","860b5f50f409089628833bb5defebfb9"],["C:/lmislm.github.io/public/archives/2019/05/index.html","c28bdf0e5f3d4cbe2f0f3d8ac36ab1cd"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","c8b3308d99a38f8cd6697484ff147e2e"],["C:/lmislm.github.io/public/archives/2019/index.html","4a7a25bdb964bc312a49b81b59f12dbd"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","9fadbbe88e4990d4972f726df49eb3d0"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","0874e03047e339c90f78562242829851"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","2c68a70d9766800030c20a16ea3fea02"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","10e553ce9e3459497b8030ab3a852eb2"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","3eb8635f8eb6918e17f87aa12baf077f"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","9f072547fe07415d784b7803d46cd7e5"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","1d24b5ea927512594b28e68a7d10cbdf"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","2a38ce35348cab2de314142daaac3299"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","28f1c9439564ebe7b282bd879c3dbc4a"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","eafb9a0ce1d939870764620a6ab351d6"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","09532a4259cffba8e4bb0384a49ae371"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","3091a7c8f4f1e4e43d9f03498bf55f54"],["C:/lmislm.github.io/public/archives/index.html","2dac4c01cb2f3e611b8192c49c410d10"],["C:/lmislm.github.io/public/archives/page/10/index.html","a9de81cb88c4acebb2259a654ca7ffe2"],["C:/lmislm.github.io/public/archives/page/11/index.html","28ca61bb3290d12334109842720d2652"],["C:/lmislm.github.io/public/archives/page/12/index.html","8280ba35659c2bf2dc3eecf68a728cfe"],["C:/lmislm.github.io/public/archives/page/13/index.html","bb668229ddc2c96b8a974c0a73d471b3"],["C:/lmislm.github.io/public/archives/page/14/index.html","56197b309f4be44192fe14c7db587f8e"],["C:/lmislm.github.io/public/archives/page/15/index.html","8f3a58b991716a6ea0c653c654bfb4b7"],["C:/lmislm.github.io/public/archives/page/2/index.html","2c674e9121b055ccf2152f7d26e5e1f6"],["C:/lmislm.github.io/public/archives/page/3/index.html","2cf93fac138d06001ca3d8842a9d5acc"],["C:/lmislm.github.io/public/archives/page/4/index.html","570f26d7ff042b355b8e410ad3634e4c"],["C:/lmislm.github.io/public/archives/page/5/index.html","484c351cfb76b41478ec0a9f11bd202c"],["C:/lmislm.github.io/public/archives/page/6/index.html","7092319676fbb1a61a2f7f7f7b36bc5a"],["C:/lmislm.github.io/public/archives/page/7/index.html","531ad4a7fcc5cebb16c961ef60719c6e"],["C:/lmislm.github.io/public/archives/page/8/index.html","288b5e68d9db64536d7fafbd1b55cd4b"],["C:/lmislm.github.io/public/archives/page/9/index.html","135f8252e1b11f3c5e518969ad5a1bb5"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","8156da28f6680b75d7121098d4e7670c"],["C:/lmislm.github.io/public/categories/index.html","a4bc47a9510298b8f5a804f6bca01e36"],["C:/lmislm.github.io/public/categories/xx/index.html","be80f839f9ff5aaf2bbeb2d08f5089e3"],["C:/lmislm.github.io/public/categories/学习/index.html","13e0800f0298efd1fd57aca780226fb8"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","29f85d15f4be47a9e29ad3cbebc3f87e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","4de4c040329ab1feeed931637bb95800"],["C:/lmislm.github.io/public/categories/工作/index.html","83a3eb0970df36d6fe4753aa9199c95c"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","36b8ec44d4d1c4480b602c6e9314faa2"],["C:/lmislm.github.io/public/categories/技术/index.html","1f5fd49ab48f3f5e448c279b8a11cff9"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","54ee001be26b49dca3efdfa62f040946"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","04b6e2036be84e976289b80ae44d6cd8"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","313b4f6b225c3d2b31a297fbb2b9d455"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","c506eab0b7f631d9f153d5f065af045c"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","04df68e22fc8e5336ec6195abbbbf14c"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","60b1eae6cbf3d8c9fc5615e5624404b4"],["C:/lmislm.github.io/public/categories/日常操作/index.html","715c77929ae4a4c9a8136d39867e5a58"],["C:/lmislm.github.io/public/categories/生活/index.html","e383e8a68f29e61531b4f9e7e3cd944c"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","3d1da75bde3c57360d41a0cf38d0bcfd"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","9dbb80af5bc29ce1907769d410cafeb4"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","9b1fa40e84a4391685ddc444dd2fadd5"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","214af308c65e1e078fa72476ffbbc87d"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","e83bae1cf3398bb0a1251d396de06b5c"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","147b3b41a6cc17bd349a1fd1277106f7"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","04f8ec981ada937076584f89f2f364a7"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","5fa3d16b82cedb1402d463afbf134a4d"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","c2dc11dc81e013754cd9bca6ca1ea9e7"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","fba0a2afed1070faa618ff59875c678c"],["C:/lmislm.github.io/public/page/11/index.html","8af2b177b9312943e11625ed2475c62c"],["C:/lmislm.github.io/public/page/12/index.html","1e8bf379773216f09d4c400517d04080"],["C:/lmislm.github.io/public/page/13/index.html","cef5183ac1eaa3ceb1c274d5f2ecf086"],["C:/lmislm.github.io/public/page/14/index.html","c2151846fbb73d1f64031602c6996108"],["C:/lmislm.github.io/public/page/15/index.html","09a9dca230e16b8790dc2ee56e3190f5"],["C:/lmislm.github.io/public/page/2/index.html","80a63e6404acb7b3da037a0f45871ebc"],["C:/lmislm.github.io/public/page/3/index.html","64a9de1e320cd39527cbcd14b91d03b5"],["C:/lmislm.github.io/public/page/4/index.html","be22457d40fc8d70621cac9b38728ce2"],["C:/lmislm.github.io/public/page/5/index.html","2dea98ea899a7de3abf15067ee80e1ff"],["C:/lmislm.github.io/public/page/6/index.html","138ad8f35528b9d705f2f5230c12ad7f"],["C:/lmislm.github.io/public/page/7/index.html","b49b047a19ae79ee9005a04727cb2214"],["C:/lmislm.github.io/public/page/8/index.html","6ae84e08c65d44021fc0859f15cc0387"],["C:/lmislm.github.io/public/page/9/index.html","6193906372577b8ce0b86f6a551f075b"],["C:/lmislm.github.io/public/tags/Interview/index.html","8e89a075e252a8efae3bb2bb59f1884d"],["C:/lmislm.github.io/public/tags/JS/index.html","e01bb9c1a6fd6f63e47b4389c5cf8d1c"],["C:/lmislm.github.io/public/tags/acm/index.html","27e6ba44f770d6ebaddf39d8eb50ec2e"],["C:/lmislm.github.io/public/tags/c/index.html","e54515d59507eb44823c4d78af1e7308"],["C:/lmislm.github.io/public/tags/codewars/index.html","8008a620d4ec801f7722436332553928"],["C:/lmislm.github.io/public/tags/css/index.html","d23051aa897fd9d6e6efa9dfcf30a73c"],["C:/lmislm.github.io/public/tags/git/index.html","3c13e04265b280cb00d36084c9ffd865"],["C:/lmislm.github.io/public/tags/hexo/index.html","47e65126c8c2663b108fa50983379a2f"],["C:/lmislm.github.io/public/tags/index.html","151d13c8736e4bd6a2f0970b64fde6a7"],["C:/lmislm.github.io/public/tags/markdown/index.html","ae46b17a82edd3f426d3a4508f2bb9e4"],["C:/lmislm.github.io/public/tags/poj/index.html","2f8cf269d15ac528e292c0516d929699"],["C:/lmislm.github.io/public/tags/shell/index.html","94d393dce2ed2461661a31916c7ed05e"],["C:/lmislm.github.io/public/tags/vue/index.html","970bd39271a1eb793f5cb09e16f4e345"],["C:/lmislm.github.io/public/tags/xx/index.html","bc8177f5b49593967c8ebe178cd1890b"],["C:/lmislm.github.io/public/tags/前端/index.html","7f9714534768e0fc3af5d1b1ecb36010"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","debc68f4a8cc0e57dd75e22cc1182231"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","b3ba7009261c8fa8fabdde8e87a91ba4"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","894ac2e10a39c00d0293372a36ba17f1"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","739052dc7c3c03d2cc1ebb55953a1748"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","6a6ab296d002c778e98dab8b32ff710d"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","f5df87cd95cd85a63ef607cb16562655"],["C:/lmislm.github.io/public/tags/小技巧/index.html","bc94b8d7aaa77dcc4a7b24566942aed7"],["C:/lmislm.github.io/public/tags/展示/index.html","abff018633ef557aefe9284936863bbe"],["C:/lmislm.github.io/public/tags/工具/index.html","7c9e85fe1ed48393c0f3195e0ffdcdc7"],["C:/lmislm.github.io/public/tags/感悟/index.html","692866015203791dc9e0514b93b0483e"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","a22d5853c84b348f4a13faba8a37436f"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","10f7d8be4e5136355299a74a11bc1eb9"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","e2c648e2e307279be335f6414ee9dc75"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","9cab06f1773354547506441a7d004c77"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","c0cbc5976bb0fd4b9b695350ebca9ce1"],["C:/lmislm.github.io/public/tags/练习/index.html","fc33355d17454a6bc01e16a0007dd804"],["C:/lmislm.github.io/public/tags/编程/index.html","adcaff4ec11bc386660d222f2cd2b52f"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","cb4ca8013e5c332f481ff88de7b4028a"],["C:/lmislm.github.io/public/tags/运维/index.html","ca5ef66147a71aad47bdb60f02315089"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







