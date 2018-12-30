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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","db776f2216107239987c266a209c8596"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","42c1597e7dc88eb7fee9d7597bb8fae5"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","97ff974992916abf0a5fc11147df5fe0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","ceeb23773ccaab05e53f4e32194ee792"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ad17a39c432d56fe2930f6811e645895"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","d4e27173ece124dfb17d544cd31a4e39"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","2973e1085c3895769d7681d3c91021c9"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","89e37fd6ba1d3235f7ad432586c95998"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","c6ac208118e83b00540ecaade2b8e328"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","44d752e0bfcbaed6b2edd4487f501930"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","57a3c9dba87267ab8e1c420848f586f9"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","863db1db48cb22739e94895986b9ed14"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","19d79173f2d9fb8b622f6e6fda48afad"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","c5e55af78db5f6592fa4d9f02dee41af"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","c6c27732125790fdfb494176c88efa3c"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","cbad619bc22731eaeaa7d09814094345"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","909e60df37e26e052dd4743ca8821559"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","7ce7052dea82a7e4d67c22698e47ad3b"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","8fe0eebc1ac0da70c3a11364cb3e3c24"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0f3e57d381b43c2144b918330c8e821a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","c5085e456361d5447677d13352083652"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","3ea0d673671f267fecd1acfcfd748a07"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ff3b10d4a5348d0151885b24c14fe936"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","14357528a44b3eb9400528af2cf35c8e"],["C:/lmislm.github.io/public/about/index.html","7165d479f911120eeee901f46e51707a"],["C:/lmislm.github.io/public/archives/2016/01/index.html","d4613ddedeba540e0fd787af68c817f8"],["C:/lmislm.github.io/public/archives/2016/03/index.html","010f7125c3b868dded259dd59e26fbf9"],["C:/lmislm.github.io/public/archives/2016/index.html","834e392dd5a6ddadee0a3eb20262f4e4"],["C:/lmislm.github.io/public/archives/2017/01/index.html","2b7fd2582981f30bfa974157f5386cc5"],["C:/lmislm.github.io/public/archives/2017/03/index.html","21a7ff2b9e97603d7d710d703c96b43a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1b94f001ffbfdfd454e5adf3deee6be7"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ab3487082c9d196590d676cf38e76c35"],["C:/lmislm.github.io/public/archives/2017/07/index.html","d88c6697e518ad2ef829e8f01cacf19b"],["C:/lmislm.github.io/public/archives/2017/index.html","69c525ec9d078f21dbe7d95485ed73f1"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","df93e430667d63b543cc4790a1f86c4f"],["C:/lmislm.github.io/public/archives/2018/01/index.html","2e3d305c57e3a7c75a12d6535016637f"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f32790a9d2e0d2e3afc347575016c725"],["C:/lmislm.github.io/public/archives/2018/12/index.html","d8ee5bb3e89f402270da2022967eda87"],["C:/lmislm.github.io/public/archives/2018/index.html","f20ff4a3f5d7a849a4529adf4f34f168"],["C:/lmislm.github.io/public/archives/index.html","6eb43a9c803cdb4f5902ed218ed06df8"],["C:/lmislm.github.io/public/archives/page/2/index.html","4defab4eb9e7b456e037ab9c54a8486d"],["C:/lmislm.github.io/public/archives/page/3/index.html","0d8115232635ed8406c9ee63755838dc"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","d1a4d3c4b906e243ccf4351313fa39c4"],["C:/lmislm.github.io/public/categories/index.html","d0a020bb0b749b89b2190a6babccbe7a"],["C:/lmislm.github.io/public/categories/学习/index.html","21c88b0b424b6c593fd4e6e82da4991e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","c1a92c4d9c76074478f7a5001cf3f096"],["C:/lmislm.github.io/public/categories/工作/index.html","1316484408cf9dbde9814ced7529a929"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","c445132beb4fe9bd96d325d1927430e7"],["C:/lmislm.github.io/public/categories/日常操作/index.html","0da812647ebc7caf289d1b1094f138c5"],["C:/lmislm.github.io/public/categories/生活/index.html","53dac6d7096864c5b1e82f5780cb2d13"],["C:/lmislm.github.io/public/css/index.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","970bea698007a63724c2151e298fc8dc"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","0ab6df16b5a580ed422f83a02bc00272"],["C:/lmislm.github.io/public/images/algolia_logo.svg","f309cbb84b60cd71bee3f21e7f24162e"],["C:/lmislm.github.io/public/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["C:/lmislm.github.io/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["C:/lmislm.github.io/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["C:/lmislm.github.io/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["C:/lmislm.github.io/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["C:/lmislm.github.io/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["C:/lmislm.github.io/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["C:/lmislm.github.io/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["C:/lmislm.github.io/public/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["C:/lmislm.github.io/public/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["C:/lmislm.github.io/public/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["C:/lmislm.github.io/public/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["C:/lmislm.github.io/public/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","da7de82b173e4caed4e7044122b1374d"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["C:/lmislm.github.io/public/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["C:/lmislm.github.io/public/js/src/bootstrap.js","5a4182294c1b520fbe21921c1e313a05"],["C:/lmislm.github.io/public/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["C:/lmislm.github.io/public/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["C:/lmislm.github.io/public/js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["C:/lmislm.github.io/public/js/src/motion.js","5e50cb0717c2be4c43ecd948b3abca59"],["C:/lmislm.github.io/public/js/src/particle.js","f90572a184235bc94a539284192fb2fc"],["C:/lmislm.github.io/public/js/src/post-details.js","57665f3ceec6828aaffeaa643e379e8b"],["C:/lmislm.github.io/public/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["C:/lmislm.github.io/public/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["C:/lmislm.github.io/public/js/src/utils.js","69a57e2326aca462f8f9d9e102bd05bc"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["C:/lmislm.github.io/public/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["C:/lmislm.github.io/public/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["C:/lmislm.github.io/public/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["C:/lmislm.github.io/public/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["C:/lmislm.github.io/public/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["C:/lmislm.github.io/public/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["C:/lmislm.github.io/public/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["C:/lmislm.github.io/public/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["C:/lmislm.github.io/public/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["C:/lmislm.github.io/public/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["C:/lmislm.github.io/public/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["C:/lmislm.github.io/public/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["C:/lmislm.github.io/public/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["C:/lmislm.github.io/public/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["C:/lmislm.github.io/public/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["C:/lmislm.github.io/public/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["C:/lmislm.github.io/public/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["C:/lmislm.github.io/public/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["C:/lmislm.github.io/public/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["C:/lmislm.github.io/public/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["C:/lmislm.github.io/public/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["C:/lmislm.github.io/public/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["C:/lmislm.github.io/public/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["C:/lmislm.github.io/public/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["C:/lmislm.github.io/public/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["C:/lmislm.github.io/public/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["C:/lmislm.github.io/public/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["C:/lmislm.github.io/public/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["C:/lmislm.github.io/public/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["C:/lmislm.github.io/public/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["C:/lmislm.github.io/public/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["C:/lmislm.github.io/public/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["C:/lmislm.github.io/public/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["C:/lmislm.github.io/public/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["C:/lmislm.github.io/public/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["C:/lmislm.github.io/public/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["C:/lmislm.github.io/public/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["C:/lmislm.github.io/public/page/2/index.html","7672168c1b6ff925f875a6b938353038"],["C:/lmislm.github.io/public/page/3/index.html","1f63e6785d1ab8d6294ac5b27612d508"],["C:/lmislm.github.io/public/tags/Interview/index.html","9efcb5439adaf14b7fcc83b139f8bfd3"],["C:/lmislm.github.io/public/tags/acm/index.html","e23d4192d385f3df341750c66531e8b5"],["C:/lmislm.github.io/public/tags/c/index.html","0f32280199d01e38f73efa290ec91d26"],["C:/lmislm.github.io/public/tags/codewars/index.html","0864231dd63bf4ca68be4b4481e8461d"],["C:/lmislm.github.io/public/tags/css/index.html","9c87ae309c76eba39f9d222930e2ed1f"],["C:/lmislm.github.io/public/tags/git/index.html","fbf9bf8b746525216eda412c3e20cf96"],["C:/lmislm.github.io/public/tags/hexo/index.html","dc121d759649a7cd48d9b3fa7e972330"],["C:/lmislm.github.io/public/tags/index.html","82460ba3cdac4dd83140bd9dcc653d27"],["C:/lmislm.github.io/public/tags/js/index.html","77c61c1067eb6ce565478bf5015f9146"],["C:/lmislm.github.io/public/tags/markdown/index.html","5bc04bf12c5b1a6780d7a1a822b702f6"],["C:/lmislm.github.io/public/tags/poj/index.html","e51e9977f490f1a9e12976bcd4d30c17"],["C:/lmislm.github.io/public/tags/shell/index.html","c81630e5a0df5394c4e57c6b362bd18a"],["C:/lmislm.github.io/public/tags/vue/index.html","f53b72ab1826c34a56d1df2ed87ac0da"],["C:/lmislm.github.io/public/tags/前端/index.html","a82485d600c5ead94fe5b084fafcf868"],["C:/lmislm.github.io/public/tags/小技巧/index.html","fb685e8e3b726f6e263716b3982130ea"],["C:/lmislm.github.io/public/tags/展示/index.html","efd7e704267fa6621726d47097cbaa17"],["C:/lmislm.github.io/public/tags/工具/index.html","d04de8ea96f14a07ee610d24003dee3e"],["C:/lmislm.github.io/public/tags/感悟/index.html","6d82e5fcc8849e33204ec253d9a9866f"],["C:/lmislm.github.io/public/tags/编程/index.html","c0d47358c2a5fba8191f3087f70ad4df"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","0de6da798b112cf264ed3136cb50fcec"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







