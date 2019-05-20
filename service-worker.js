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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","8327eb3876bf4329ba7921a91d82468f"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","dda5830f8ba0de92899e5c47e56dde96"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","a41c0d173ac8c9554e46d6ad06cc8b47"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","38ade6b8c3a2b1879b7483fe07a857fb"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","00e1ea365b4862afed3749ee6f6f5fc6"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","76357bc0af5ab6af3443962407636e0a"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","ab9f5c103341fb718d145bb96790f63f"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","7a606b819a94a20c045c882bcde35b3f"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","42c426d4787efaa3d138acbc8c2a3493"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","818e7cd0547bf4661c28c0209ad0baaf"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","f1ba731b733d7f5c4ec36a8feee5b394"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","64909ba713f30b7450fb7d525e86c085"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","3b2cfb9fefabb28bebf5f3b7ae9de4af"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","143d1d1e3cd43e84352ac7ab45a97963"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","86552dde91b05593b65dd47db447f48c"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","b03d7708a2c23f4e91cde6f3cbcd1da1"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","8d6578d29d37e3a3833832a89d00945e"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","92185e3b1d6bdb66bac7404441865c90"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","4758aa2088261ca2b1c85a147dc4ebc1"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","04b99f30e11df44e4f8ab0de9d857b5b"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","287e61dc5ed019553c62d23b03b1f983"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","5639cce388346ac2c668c4126a030b10"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","6dd3aead2c3ec871f20667cf0447d4d1"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","90babbc724b3e18ca86ac27d4aaae370"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","336c111ec2a885d878e40f3f0cb21292"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","8c966696acf8dd3f03156e3120e5ae42"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","8e03757a1050aa18eb663bf406bc19ea"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","2bcbd7566dc6a8cfe8ce04f36536a925"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","b8dde9dda3600337607bcba1db075a16"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","27f9cb5b32c6db15e66c26952f136d1f"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","720c2808b5c2249871b295f536d045e7"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","f4390e2bf89135a0c2f02a76c1302487"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","cfe80a65955ac246a89543ab2d409e65"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","e274c75a2cdee547bd41421d46717376"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","628de9767f5ff8c469c827aaaff92047"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","544c835eac0a9eabfd82bc31b17cf54d"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","64d812c2326badb8584459abd0a0f451"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","9e55245e5c1dec5e170335cf31aa2a84"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","86940b0ea5f2192c248417a421bc6b73"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","6d84da5cd6bd4187182103d3eae4a582"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","8e34629ede20a50c09f2f777dd654841"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","fb9f04820b59ce1582e036cbd9ee5f6c"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","1d4f11b11cca82193cb0c14cc91bf431"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","f5814b0c5729319a4fba1d72708f4670"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","6aab294e03b27c5cd3d09e4abcbb8e85"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","2dc0f88d21dba394feba6fc82ef102cb"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","892249b6b4a0fc2ddfba3640a07cf079"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","fa8cf0a9823ed392907bf47e7ebb3613"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","a0a78384df122b1114268138dc00fd3d"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","83d9c8150ac00d8bce2ef9a08c99f7a7"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d6d98336ba813c4a6e76f7b5e664c44e"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","426ecf2748202002fcef65ee2a99539f"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","6ea3adbb9536745c1bd6706d8dc8cd1b"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","71faf53a52eb1038b69016ccd19355d8"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","3ac79d3d8805c125001c83488f681c8c"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","08582355bca1e6c3b89271334e22f4d0"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","6ba16744ccf8409a5394673bd361aa55"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","17b472872b227ab939466f4a55b57baa"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","57b2dcb407cb4b50e77775f0eed646b8"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","96d1b0f4b32356ed840e614463a2ee63"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","80dad2e70808b2bbf5f3803d1531876e"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","0d56026f09a614a5c4579a5f15d1a354"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","6a51a7e48c52f4be3063ab88aa6443c8"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","9bd3f16db96bf3d79d464a419254e4d5"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","9ca2caaf9c0f11c6f70d1194b3e606bd"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","6b5b31fa2baae243c895d677b0596eb0"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","a59dd7aca5faa3822abc448d6a49bb7a"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","2c803a2443dfd73aef7260951d95a692"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","e17492d26d5b2f2cd50c823cae54ad41"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","23a3812cb2350e63278a443d0cc2ae8a"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","15b5d5a07b0454c42a160c9a75e15470"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","d6d7822335edaed4b47b467089c9adcc"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","3052620c3c857662dc34c36d971fea3a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","53daf89d835f2c8e6e2d4391642c18f5"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","78cf9f807e26459f93d5e479dbfa0b6f"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","20dd449fb49a58e2155fe336140e110c"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","2d4c0e1772594c74280b6ed0ccac9eab"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","5f05f8dd254b5d6b57b6792f56ff6df8"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","ee33a621aa0421d3a84a400f18b88246"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","fcbc104cdc3c3ec6d78dcaa3978534f3"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","2f878eeb61ad43ce39403677b532b9fb"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","34eadc71d3baa5f6c2439bdb01265b81"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","26e46a184cb82ef7c3f3628b992ac1f2"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","648a97cebbace5c7459a25d7d1b36b4e"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","4e48e3416acbd8bfde056ca3e04cd67c"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","171c3f3b63e5219f4ca1edf36ad022a1"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","09247e7e504ec5af42b3ae3c5254fda6"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","3a63248793a6c6416a88f2c0691ab0a6"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","f2997251dc44709e84cdcd05ef858033"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","b42f01997bf79ba059171417b963a4d2"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","476b0f237d44214b5694fbec948c2326"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","28e98a4698a5df030fb0271def3e48e8"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","f40659b2e651923776c064e1f98ecc0f"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","08d23af4ad96085531531880a29416d9"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","bb2a27df066f081dcd91ec2ab6679749"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","6e0546d5168371e2dd5425cb54e578e8"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","8ea6134ded245e9d53cfed5ac16d9885"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","d1ca82bd8b46d4ef18e40562c2106c3a"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","bd39dc376609adbbf73730ca97c3a244"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","696c309f41cbfa87ccb5040613137571"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","fa83272fcf5094577079bf756708e08b"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","5601decee255ee6c02a904c13d4da1ae"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","a18113b642fe1258a72c39f253617c4f"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","eaa66a325fb47a95f9eb36f971bcba2f"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","e92af6dfdce3d6ef17316eb81dc29802"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","7a1064b974f045ce72453f5c4acc9dc6"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","0bba0375f4d67958b8f2979c3edfdff0"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","2320d16a77dc0c27b1f9c6a89ab04931"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","13012120f8a0091c3beb013518ea0c5f"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","4d1db2e69b4e0d85dee6fb0c679af0d9"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","a136f3bc85a886d5b54bcc52b3368643"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","b951255ad2e31a77dc5f6aebac5cac80"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","bb7e62da6fd80d8994ebc01a5e30de4d"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","9498d275b97e4548487798f744ccf24e"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","93ae82de38b632fd1373ae0ae9e32cdc"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","bbb4c5b4a2699076e4bf11cf6d4e46fb"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","35eda5fe71dea66eb21096321b373998"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","ec0dfc87679680715a28eb33a9024e2f"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","6a5e0e6353d71f241acd70015c88deda"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","f842b6984b8379bc4796575b5adf51cf"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","d1bcdbfc3b7d62fabc06cb9d8cd86aa7"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","a14dd5039986f98c3680a25d5436be0a"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","02bd1fc61e8f1cbdde0d1b53475d4388"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","5735ac19b8c28090ba2bd9f9b1972f52"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","18c801f0bad4116fa253520f2eee2095"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","4509766b16d1bd251bebbc89523de9af"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","75dbbc24cf7143d7b0a810eb980f1597"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","42b51203a415ef17dda0fc70284c7f4f"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","b2de7e324da866ce2af8c17113c45561"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","bc858d5ecf4d9e11ecb12a4708c065de"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","1412865ab0ab0cafb56fe40c9896222c"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","d566c17fba16566d19ca082e51d4e84b"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","98d994a9a41e4a63eb535ea4f8b2c099"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","ee70f01b35a2a7ef0b56f6cbd6f13d39"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","c3f13eb5502dc06cd2075c224f192186"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","ccd58245d4063eadf2d749d2be8fbe95"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","c373a7e9cc7261d6764726413eb0a25b"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","5a006ff75e846b3cb4b9b10701478473"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","10886b98523048808fe270feb472284b"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","fa50a4d98ef1b8f8d5142a1e1b9c4267"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","b85d6dfc12de3cc88d726cab0e979ea4"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","d7a6b52d2fdfb8c714d6bab96a4ae7ef"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","9f51291165b5357b782a8c7db20c4c46"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","79faff1c3e0384fba4a24b9211504c0e"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","d44886ea1ab42fba162a3fd529a244d4"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","1faf43e7f59bce3c17021de00e09820e"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","156c73031ba315a7951e6a471ebf0006"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","2f3bcdfd1606cf8ec0839575ba0cbf72"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","e9f2473c53b5872563427dc29168e3a6"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","4b188dae8730d38635a8856ff69a7a69"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","44f834748b54f3a391fef25a6e871dfc"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","5efaa41dfb96ddedc66ae69b131b74a8"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","82d6d62016aae8ad15f4c227b54ba953"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","3d88fdc4e0614f188f770a524f717a66"],["C:/lmislm.github.io/public/about/index.html","33534273c27a960e2a274b9897fe0e82"],["C:/lmislm.github.io/public/archives/2016/01/index.html","0b8fb84b9e001fca66af4ae1150abdf6"],["C:/lmislm.github.io/public/archives/2016/03/index.html","ac62468dfff136567c4fa423b9ca0373"],["C:/lmislm.github.io/public/archives/2016/index.html","8ae00c9564533d9c7e0fa2d4f0d7142b"],["C:/lmislm.github.io/public/archives/2017/01/index.html","cff948dac809a9e3c3673f03af4d45ae"],["C:/lmislm.github.io/public/archives/2017/03/index.html","8debb31d85b3348007a52a97b6a82bc7"],["C:/lmislm.github.io/public/archives/2017/04/index.html","c9c7c27eac6f51764f7501317a6b53da"],["C:/lmislm.github.io/public/archives/2017/05/index.html","6ccc5d041495dae6794e5879c269f731"],["C:/lmislm.github.io/public/archives/2017/07/index.html","04a3dd94d652f589296767f4e166248e"],["C:/lmislm.github.io/public/archives/2017/index.html","d46891c5d359e3d1f95f141f86fe2108"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","ff47bfba014acc1fe9ebe4812074328b"],["C:/lmislm.github.io/public/archives/2018/01/index.html","21b41a7ad8e5447be1c2aefa3f473be9"],["C:/lmislm.github.io/public/archives/2018/03/index.html","98fdc1f010e5822258305d3590a74181"],["C:/lmislm.github.io/public/archives/2018/12/index.html","2e63e26361e9fae66a348bf38251f361"],["C:/lmislm.github.io/public/archives/2018/index.html","d184112c0da646206d769c5c504e3ce6"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a4c8ab2cac53a02135f9855a349b96f5"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","c96f6a24267e3f9c97bd0c9955264f64"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","3cfd1b51b6e82c7a1975b7431e6c0443"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","10d12cb54713047b6291de41ae2a084d"],["C:/lmislm.github.io/public/archives/2019/02/index.html","4180de6bf19eb8ffcb9b7e5f401f564f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","b29f3dd738e22296a30049104059a7e3"],["C:/lmislm.github.io/public/archives/2019/03/index.html","5be88d93584263b8e6ecbb80b8c1808a"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","6de933a70670cb5036cd27cd52618fa6"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","af185f314d3154383252a375ea4bb1a2"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","fb52bbd080fbb888f2e8e4f327d69386"],["C:/lmislm.github.io/public/archives/2019/04/index.html","6a37707d5da9fcf597d96c181c271ec0"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","662c0afae496e9c9cc52af453cb53d54"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","57f52826096a8f0162802fce5526002c"],["C:/lmislm.github.io/public/archives/2019/05/index.html","8c44ed9e99451ecbca76c9315af132cc"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","f41f685e7d280d737cdd3b7503f24705"],["C:/lmislm.github.io/public/archives/2019/index.html","e10f2ccc0625bae76083eab69e5f8c91"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","e31377792aa9362e4e9cbc768ff73919"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","9e3bb15f047b5008496032952a41c04e"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","5c89a0187b379d3ba00fb3cf81294380"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","fad8139056c6c70028dd9beea3b15779"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","2ed03ff5512798bcacf828e4117c0b26"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","4e82014b09c4a9269a4ca951c5246a06"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","c3c2c5a913da4e2393d76e3b8e21241b"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","4a28b97723bff528b8b3c149fd72f688"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","ee299deac95595d72db3c653beec99a4"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","49f0ba4b587310d3ca769b5bca5da599"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","3dbf01bad38ac04f99e13950546f2b15"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","559ce7e8ef5eebcdc8757b368a2d5627"],["C:/lmislm.github.io/public/archives/index.html","09668ccbc11351eaceed81e8c84d9644"],["C:/lmislm.github.io/public/archives/page/10/index.html","44d0a478c6cc90e23d6dbe353c7c17c9"],["C:/lmislm.github.io/public/archives/page/11/index.html","1d19e6edc97bd94baf93d1d7aba769a8"],["C:/lmislm.github.io/public/archives/page/12/index.html","ca6f270931784338168cc885502356f9"],["C:/lmislm.github.io/public/archives/page/13/index.html","1c7c84dc201984952061d8e40197236f"],["C:/lmislm.github.io/public/archives/page/14/index.html","45a5338b0702a70926ff1344c140131b"],["C:/lmislm.github.io/public/archives/page/15/index.html","fd849d6699adefe80866ab78b1a0eaf3"],["C:/lmislm.github.io/public/archives/page/16/index.html","618b9a74ce1159dd5982b3146f39eb66"],["C:/lmislm.github.io/public/archives/page/2/index.html","734f34bb99724fc6a741a93f8582dde7"],["C:/lmislm.github.io/public/archives/page/3/index.html","5f1dc6dc968c56cde25e047afb315339"],["C:/lmislm.github.io/public/archives/page/4/index.html","111fd50183ec12e0c332a526f81f5a10"],["C:/lmislm.github.io/public/archives/page/5/index.html","6308477904875649c86d39105153c70c"],["C:/lmislm.github.io/public/archives/page/6/index.html","effe248fd8360dd506bb7f131fb049d1"],["C:/lmislm.github.io/public/archives/page/7/index.html","5a6bdcd33d4f933e82dafd4248d3c0a7"],["C:/lmislm.github.io/public/archives/page/8/index.html","c32475cd5681c74b9c39db24e72e7e29"],["C:/lmislm.github.io/public/archives/page/9/index.html","8136162df374f596474b4fa351d2d280"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","5b4a3d6522c6f81e29d001c7ecb65dba"],["C:/lmislm.github.io/public/categories/index.html","bfcc643f167aff25776d4e11c3a6381a"],["C:/lmislm.github.io/public/categories/xx/index.html","a83b6fa7e76a0bd2276824ee8328953c"],["C:/lmislm.github.io/public/categories/学习/index.html","8ddc46d51eb4c72e544d780af4b68ad0"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","58da53159f3d315f8fa9f9944820ca23"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","490666c39cfc2652ba865a4374e44c22"],["C:/lmislm.github.io/public/categories/工作/index.html","12becbdebb6126fae3bd1d18d1457c23"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","9f97b855209bf90e8c662189cb2e3c5a"],["C:/lmislm.github.io/public/categories/技术/index.html","49ff980b418af0133155c300da5dc176"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","a78372a5a54ccd8a3d040c10ce27ffb5"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","02007ef09c12356861d3ab05c89a3f8d"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","a4227f8f68a2aa79a87a5c3394329553"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","68e3249c8b851bce48fcc93e87e60d3b"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","11da7338d7852d2ff8704b749f54239c"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","2ffe9b2bc6446c2a246a7d546540c329"],["C:/lmislm.github.io/public/categories/日常操作/index.html","0c112cb211f0f991792537b9a9d53611"],["C:/lmislm.github.io/public/categories/生活/index.html","7adb0615b6bbdf6821398d51f607adf0"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","0d6f2cf8ca9aa17c8633ab0ded6ab00f"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","546e73c37737768bfd27fc6d64d75147"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","4bede9bf75d9964b0054a6876cc8c583"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","0429ea52e0f8a5a5a51d8c61332bbf29"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","aa363ada866cdc299e3ca0a2b713411d"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","adfe2927b1483ed6c8c1fe1d5a124f37"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","beac041fe9649e3e5d98cf854864603c"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f2d74ff01eb75beac731b737fdc4771d"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f8099bc8ac5570382aed4038aadf43fd"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","337918591093f2b7d34a992a0e98d3bc"],["C:/lmislm.github.io/public/page/11/index.html","0cd2a8ccc5a67a7c2d4ffbd575e4a7b9"],["C:/lmislm.github.io/public/page/12/index.html","f19537062a1cad8f2773ee5df3bf70a3"],["C:/lmislm.github.io/public/page/13/index.html","7210ce568881187f81a16ed383647183"],["C:/lmislm.github.io/public/page/14/index.html","b0beb54129ffdd4c1ef051f6ee8ea858"],["C:/lmislm.github.io/public/page/15/index.html","c9c7bdeaa690f451d0c8e4987aec0529"],["C:/lmislm.github.io/public/page/16/index.html","98972fd9e80570927532b29c5f70bbab"],["C:/lmislm.github.io/public/page/2/index.html","6094604736fac18892cb637ff3e75ee5"],["C:/lmislm.github.io/public/page/3/index.html","be815c977bb2e6f1a5d0db40a25b5681"],["C:/lmislm.github.io/public/page/4/index.html","26f37631e3d3e88e84a53e35cfc24e17"],["C:/lmislm.github.io/public/page/5/index.html","cb5eaa15f11b685247e1be8c6d187824"],["C:/lmislm.github.io/public/page/6/index.html","91eeeff1fd91f269b3a1cf62c8ab017c"],["C:/lmislm.github.io/public/page/7/index.html","f14dddda558f4ce462edd9dcd94bd036"],["C:/lmislm.github.io/public/page/8/index.html","66362080a54e465d8f426c2c6a0f8caf"],["C:/lmislm.github.io/public/page/9/index.html","385d873feaad9177b30fe186e7c7e2ef"],["C:/lmislm.github.io/public/tags/Interview/index.html","d8a4ed9ab9294f93f9acbed2bb8696d1"],["C:/lmislm.github.io/public/tags/JS/index.html","6c0a42c89f9dd8b1b41dcfb2678b0d4f"],["C:/lmislm.github.io/public/tags/acm/index.html","0fe389ed14296b5a1de0c9b8d71f3ad7"],["C:/lmislm.github.io/public/tags/c/index.html","bf597120466a2fed02772e6fa5244130"],["C:/lmislm.github.io/public/tags/codewars/index.html","0cc9e317eeb99b3cb340ed3bb9daac03"],["C:/lmislm.github.io/public/tags/css/index.html","13728e1dadedba51b27c66670ee5de93"],["C:/lmislm.github.io/public/tags/git/index.html","f22780b4e12596474dec92318dccf03c"],["C:/lmislm.github.io/public/tags/hexo/index.html","677cbc3a7a531e20244268ce0ed7f52e"],["C:/lmislm.github.io/public/tags/index.html","46cbcd0f2a9f6909981b6f492578831e"],["C:/lmislm.github.io/public/tags/markdown/index.html","d48736bcae5e51ea7e6f64524d0efc43"],["C:/lmislm.github.io/public/tags/poj/index.html","964776da6ca2a312ca44a453db00ea5b"],["C:/lmislm.github.io/public/tags/shell/index.html","fca126afce1b3d68e68ab0fe38cfc0f3"],["C:/lmislm.github.io/public/tags/vue/index.html","1f505e2ccd4f7a8e6d32fc0a1579d041"],["C:/lmislm.github.io/public/tags/xx/index.html","9c0e245dee2f4aa2389b11d08eb4cbde"],["C:/lmislm.github.io/public/tags/前端/index.html","2bf5a11eb2005409b9b9c195befafdc8"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","6ff5222591538ff023a23c01d7d564cd"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","73b92db701343ad643ef8231b215f177"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","bfa161b9a0ad9f681a3a1f22abd862eb"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","14f9d2fd16f4dab267bd1d19cdcf3588"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","2b7b9df91ea3eb0ddad5adfffa2a16cb"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","3c9f15e17f271265210d319047f7184c"],["C:/lmislm.github.io/public/tags/小技巧/index.html","1251c7ebc7523e19ef36c51a457b8f42"],["C:/lmislm.github.io/public/tags/展示/index.html","077ffa1ee13b44c18cd4cc26f6859756"],["C:/lmislm.github.io/public/tags/工具/index.html","9712ca0be8c592a0b0caca879110b2e0"],["C:/lmislm.github.io/public/tags/感悟/index.html","c0dda64811dc59b60bda3e6f6fc51514"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","2666759d3c80ebf84972b567be2a4225"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","38e13f9a945af1d2a7aea5a75e7e419d"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","28ad283782bc096afc500c8279e0aa98"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","bb725f0eee751c93e050c81b3557dc5f"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","08270f49337f808122d2fa70f4ff9136"],["C:/lmislm.github.io/public/tags/练习/index.html","d2a3c65798e34619b71b2b2afef0d633"],["C:/lmislm.github.io/public/tags/编程/index.html","882e7fd2f2d297eb00ae4a42ac521ec3"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","5842f6cb39c34c17437f6368bce7fa06"],["C:/lmislm.github.io/public/tags/运维/index.html","9dce974bb5c40c70a184bd1e6282e1d9"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







