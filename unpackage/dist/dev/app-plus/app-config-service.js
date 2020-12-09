
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/Album/Album","pages/personal/personal","pages/player/player","pages/SongClass/popmusic/popmusic","pages/SongClass/classicalmusic/classicalmusic","pages/SongClass/NationalMusic/NationalMusic","pages/Login/login/login"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#ffd317","backgroundColor":"#FFFFFF"},"tabBar":{"borderStyle":"black","backgroundColor":"#ffd317","color":"#000000","selectedColor":"#000000","list":[{"pagePath":"pages/index/index","iconPath":"static/img/tabbar/home.png","selectedIconPath":"static/img/tabbar/homeactive.png","text":"首页"},{"pagePath":"pages/Album/Album","iconPath":"static/img/tabbar/radio.png","selectedIconPath":"static/img/tabbar/radio2.png","text":"播放"},{"pagePath":"pages/personal/personal","iconPath":"static/img/tabbar/me.png","selectedIconPath":"static/img/tabbar/meactive.png","text":"个人"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"我的音乐","compilerVersion":"2.7.14","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","aliasPath":"/"}},{"path":"/pages/Album/Album","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"播放"}},{"path":"/pages/personal/personal","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人"}},{"path":"/pages/player/player","meta":{},"window":{"navigationBarTitleText":"播放器"}},{"path":"/pages/SongClass/popmusic/popmusic","meta":{},"window":{"navigationBarTitleText":"流行音乐","navigationBarBackgroundColor":"#ae00c7"}},{"path":"/pages/SongClass/classicalmusic/classicalmusic","meta":{},"window":{"navigationBarTitleText":"古典音乐","navigationBarBackgroundColor":"#b42f04"}},{"path":"/pages/SongClass/NationalMusic/NationalMusic","meta":{},"window":{"navigationBarTitleText":"民族音乐","navigationBarBackgroundColor":"#17b533"}},{"path":"/pages/Login/login/login","meta":{},"window":{"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#007AFF"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});