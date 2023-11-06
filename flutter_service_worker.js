'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting.eQ.cache": "38ec4b8289fd529f6de1f4916b928fb5",
".git/COMMIT_EDITMSG": "fab6c344e2b0f98c7516ac2a14470637",
".git/config": "e5ef3c7d01d6c4d97918ca4931d4069c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8f1285828134247e83896d2117267154",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8a9e6732010f01fd4398e2ad3af2f084",
".git/logs/refs/heads/main": "f3ee94df57aaf1a62bd739c6a6296c91",
".git/logs/refs/remotes/origin/main": "9ab6e14bab6b43d86d3583c05c919a8a",
".git/objects/07/3242a9b2d214827d05b241e0cd01a2063d1da7": "03fceace1ae2ccffb38d35fafede8bf8",
".git/objects/0b/b10d8bcfdfdd9fbd6bd36ca2839594c8d0827d": "bd7a9d725c14a1f08ca37c1620371f78",
".git/objects/0f/c16926411bce712114aa94478076e4bce33786": "56a0f95aa4e905c7b890bd5003a578c2",
".git/objects/13/76b371912ad66fc112be3137b81678204a0b3c": "b55c5426966227874016a347bd3b2932",
".git/objects/13/adfd7dbb8788a1f6c886661ed6458682dcc4a2": "be9bae8ef03f5b03428868aaf7918e12",
".git/objects/19/01070f18207a78352627793f4512f5e4c88d57": "be67898519ee6e7fb2d94b1075e4b70e",
".git/objects/1b/fba330724217bbe7023746d2db8d9ef365d450": "febcaaeb12e633a4c11727378a10f002",
".git/objects/1c/6afdf69dc1241610735519c29f6981733fff32": "586c51e1f7f64fb9fe69aec3f48ca7d7",
".git/objects/1e/987a40c0457172416498f942b6ebc536be7950": "36ea9bdff0c25a3af407bb61356d9fa5",
".git/objects/24/a73d6d595318e52019fcea23b9f91a069a8bcd": "c839613a5292be54d775a32419e1b874",
".git/objects/2d/fab5dfa2b5abb519978ed4520ad083f107f752": "3248fe5741da67d06f485c0d92d589c4",
".git/objects/2e/71ce6d236136d5fff1c0d1ab179468a99f5481": "cc5668a7b54e94c278c9718cf056cca0",
".git/objects/30/cf5cb67a0aaa671d33589721b754035b6a187f": "b64db55cdf70d777067c4064be7055bf",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/7844da601f08de6c73792bdde70f7018710836": "0f01aa115ace7a535b2e858a270c6976",
".git/objects/3e/a4464ed611ee3d0110f8bd983a939262748a61": "12080431edc0d2998788a2986d81533f",
".git/objects/3f/9e9c4411836e8509f912ed0436416876c574f3": "a217f7e45e09f4947db9a7a36da13d83",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4b1bfea956392d6f0e102bc1da1039288debc0": "15a1cbbddd9ae56cce5f9650de61b5d9",
".git/objects/48/1e3df63f200fdd095e7734d1974c78c11bb9cf": "2ed9699e0835c3ab4f44b72386cdc87d",
".git/objects/4f/89b33f27430fa4d0b5435bcf97cf6d7e8d2e2b": "475c59ba5c1d2af6d388e70c78ceea13",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/b496ef09a558c42cbd9e8a60a1a1b1368687bd": "07e0df1b745f363fb558e7d52ce40cb2",
".git/objects/5a/e7a170bb13e427f7e32bb9e8ef334e799c570c": "99dbd2d45aaabff497cff6b2db3bd5f0",
".git/objects/60/6a2849731c1ed549daa13c718af8602c5a8aa3": "35e8f3af089a4b6d878fbf43ee7ee0a7",
".git/objects/67/3058620944034847481b718966ac3b41c46edc": "ea7d2b225e57a899ebd56f56468ba3cb",
".git/objects/68/7415f6cae0b144b0d680a8b32d1b04a77b3f3c": "b7c81fbeccfac56b22370c88c0813fbb",
".git/objects/6a/aab509cff4712fa9ea3213eae0529adaaa27ab": "a4568dd2c9efece734b0990e1ab1f8d0",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/76/9d8f69f94ff3c3d9187d4d3b11f59505439363": "178f36ef49e1499fcc18f21ba412ebfc",
".git/objects/7b/e5a2abb04bee3f40127ae85060f80e2cf9dd7b": "761b8bd6539c6142acb36555b119341d",
".git/objects/7c/33a7bf40f1656ee58c724183d5659d488f1139": "1bf18b64fb418fb0780fbd69a4729a92",
".git/objects/88/950c19756b410d15dcbd156d19a5279904a4ee": "982a5faed22585a8f0af621db347bc45",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/122df577e9754d212d288452e034c4031bd98e": "b3f57a2b5ef44b359fee54607cc85477",
".git/objects/96/7a0b4307b16fe20531d1c2ebe7b44cc2411931": "9727b68fd2871b632d84a1602ac62c64",
".git/objects/9a/dfbc83b93d9ecc7e6af3a80ad348e48a41f50c": "e84cbc43ddee1081e209674b3754d06d",
".git/objects/9c/3a9781d995f6fc798c464dbf32822ea7a4e8f5": "bba696f0d512cd3b8253259f580d28b7",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a1/5d93b1a865a1bd4489fa3490fa8ce5e3d18e15": "85400a9b34e3a40c5bc263faefc903a0",
".git/objects/a2/d81e2e1d635d8fb87f3bd5e0edef2906bb9eed": "5ec6d1fcacbe59107393f58d33017ab6",
".git/objects/a3/2e220cda1b9929a7675733976dec15f030aa3e": "52407780a499312cccc2436c5095a514",
".git/objects/a4/875116897693c30d00e10b3edc074a4cc8c132": "01c276295a285b08dffba8733b7d0893",
".git/objects/a6/06ff6b35452648ac0f4edebbd657374bf36334": "a57687d87edc9622077d551d6169c8d6",
".git/objects/a9/d64e4fef637748f54704186696c677fd9b6ed1": "1d85cabc49426f0baf0e951c3f51b447",
".git/objects/ac/dfbbf352b0f514a3c58db92aed3172fd274c64": "093670de41ff71f1fb6f8eaff653f5d7",
".git/objects/b2/1642bf0fe09d2ff9b86999bca1537a94aed08d": "b49d893c38b551e251a885bc39099573",
".git/objects/b3/640216c7afef3261726df90b462b74fb6acf50": "8a54429af3eaaded4507bccd0f7f5cca",
".git/objects/b6/36a225cef1624f1d7ee102e92eaaeb9d0e6aeb": "0a128fe8d74ddbc5a718e39593dfbe87",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/95826380d9a63bb4c7dff36ce8057ce958f1df": "eb3a303edbe82bba63cf6ac8bb43137e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/b32258016812b5245e0af867a76b551a644950": "488a82b8ff1e9b6268335ff0395a893b",
".git/objects/bf/6dcbdc1085f66065e5bf59daf49bb5beeb0b4f": "e03f7d802e791c58d9476bc4898827c0",
".git/objects/c2/a29dc98ab38dd39c324b12599d589970fca42e": "0c31779915c4c24f835f71e3a0792760",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/18a475b51561a2a054bd405a19b6e273980677": "9af54eeb308d3f78ba6871fe1a6cba2b",
".git/objects/c4/c42013189845d36e08732efe9debb50f5d2dda": "1914fa9e65dc8dfb31332657062f4fe7",
".git/objects/c5/46751fdafc92d63e68bf5166b9c41f8b488b7a": "edebd39d794541489fd0cb9e280391dd",
".git/objects/c5/7e9c2d92a10455e3d6fc85876d605a3f82160e": "db04e12e228e918d1cfa3e8651b5c42c",
".git/objects/cb/8c6c3af0092ca9829749cf1f6516da8477b022": "ec19f774ea4c733bcbe60d1ffefdd27a",
".git/objects/d0/054ff5fb2aa058d47df780055905a5fe3055f3": "21e3b7a6e694f76b1903bcdaf40d7c88",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/6556122c1099890d8ffba5001707f1aa895d85": "70aeb02f9f6ec90c9360e9d53283a164",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/dfdce3e6a58ab1cb177e5edc609fa329693b87": "ebd26bf6231e4e2cdf83bedf8b9a09d4",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/69e55015dc64f7c6ca72fe6f226df36ce4e729": "f1e843a0b0239fdbc2b5986ee1b6120f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ddba4c7a17d4f2d516f9e6c33d489dc9d5433f": "3a0a78cea4d04bfcd013bf869dfc8316",
".git/objects/ef/d8d256520132db11cf97a4494e3dd281f6b2cd": "be8461452dd2501bed36a0cc3d259ec4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/3a13f412e0055dc42ba15d447f6f0abe4858e0": "b059822579bf6b7c9e1281ef3ab6b7fc",
".git/refs/heads/main": "50d43399746f287782d182d0a435890b",
".git/refs/remotes/origin/main": "50d43399746f287782d182d0a435890b",
"assets/AssetManifest.bin": "9634b39bf1e494015af56532dc5461d6",
"assets/AssetManifest.json": "3f51c39f5ac1044ec7703b3a36d2fc0d",
"assets/assets/icons/activity.svg": "ae2564aed50413f62b5716b350fdc5b9",
"assets/assets/icons/activity_selected.svg": "f9930049c30d117cb15dcdab7704701d",
"assets/assets/icons/back_arrow.svg": "f3a4dc0988a1801442d8b0575389efb7",
"assets/assets/icons/chat.svg": "b1cd718d906340d8edb76a713a1433a6",
"assets/assets/icons/chat_selected.svg": "cc414bc7b2427b6395191aea9dacbb7a",
"assets/assets/icons/comment.svg": "bd61516d8d2eb26bbedd230ed1dea9b9",
"assets/assets/icons/comment_fill.svg": "b28728741c61823875bfb5b422a8c88f",
"assets/assets/icons/Delete.svg": "2efd603196c0eb390b4bd6fc009cae67",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/Edit.svg": "10e45cb45eaf38522a2a5d7c5a6f42ed",
"assets/assets/icons/events.svg": "e546cc4bef4ac5e2792f9e2529ae8013",
"assets/assets/icons/events_selected.svg": "02730cd545e68c461475c103de8fe95d",
"assets/assets/icons/excel_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/logo.svg": "dd047213ae81e8de3916da9e849d2b73",
"assets/assets/icons/love.svg": "722d9eebe3212adcf213760d24585b5c",
"assets/assets/icons/love_selected.svg": "9dc7646671f0076121856719d3363f4e",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/meets.svg": "b7a9991bb34dcbd5183cc93908a60026",
"assets/assets/icons/meets_selected.svg": "bd09b0edd39dd0d97badab49173f16dc",
"assets/assets/icons/menu_dashboard.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/profile.svg": "0612d5e85cb4fa2fc251a07c6e9f9e09",
"assets/assets/icons/profile_selected.svg": "b4dabe7ba258537129bd6e1f0602f5c4",
"assets/assets/icons/search.svg": "3fb096dd707b413343eab8e7c398a421",
"assets/assets/icons/Setting.svg": "ba62e9a779ac34ee9c68ee43942f56f2",
"assets/assets/icons/share.svg": "2e36f84c6c8333dfe86167b91910b1c7",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/transaction_error.svg": "f2e09c79017aaf031d413deb996c74c3",
"assets/assets/icons/transaction_pending.svg": "aa8316858444b80078cbee4d81ed889f",
"assets/assets/icons/transaction_success.svg": "f4f83593658a03e516e9860a7edcf743",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/app_icon.jpg": "845981b82cfe9008648ee08f5f38d95d",
"assets/assets/images/background.png": "33bb76744a1a689df5a73c7d787b59db",
"assets/assets/images/background_vector.png": "15e9b5e0526c938388590d29c4b6152c",
"assets/assets/images/event_image.png": "ea23397b5a3d86bbb9c0f0f817de6f7e",
"assets/assets/images/image1.png": "f1551343242d7d8a2e3ae90142e8b222",
"assets/assets/images/image2.png": "4e4adb800ad348bf001ceb2930edec86",
"assets/assets/images/image3.png": "83791267e8703fe9e23d35a8a810dc82",
"assets/assets/images/image4.png": "bad03e7b63c7c0449be97cf74da8d05f",
"assets/assets/images/image5.png": "3bf7bb62d939dcf3347b3bf4e630fd43",
"assets/assets/images/logo.png": "c3b89cd4d8d01c21f6a8e032747c8a3e",
"assets/assets/images/profile.png": "2d49ec214aded13731af0ac5d23a9ae8",
"assets/assets/images/qrcode.png": "b96869e9cd1a41a5e3d220f35046ee57",
"assets/assets/images/splash.jpg": "61b06ee20764f16e59d9ff51da066bca",
"assets/assets/images/visa_logo.png": "1774dac0981743d4a0b96cec3bfe15e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6eb12bc5adbb2194ef13724bd42a9d7c",
"assets/NOTICES": "dfff8c572f227b9979f4fc9b1fc1c191",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "50fbbff5b32ef4cb9a03bb350d2b1698",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0f295c2713946de04ef284b628353c8",
"/": "8789cc5fefe7c56139e1622c741c4574",
"main.dart.js": "b7df0c4446bf1dfbe20f85486c6d08b1",
"manifest.json": "7cb0ef5b9df8ad3381ead30f2c4aaed5",
"version.json": "b00f4eca814849ea5b4aa4411d2d4e69",
"y/index.html": "8789cc5fefe7c56139e1622c741c4574"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
