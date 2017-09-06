$(document).ready(function(){
  var playlist = [{
      title:"礼物，Hello你好",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.1礼物，Hello你好.mp3",
      poster: ""
    },{
      title:"赖皮的礼物",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.2礼物，赖皮的礼物.mp3",
    },{
      title:"晚安",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.3礼物，晚安.mp3",
    },{
      title:"从前慢",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.4礼物，从前慢.mp3",
    },{
      title:"幼儿园",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.5礼物，幼儿园.mp3",
    },{
      title:"我认识的一个女孩",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.6礼物，我认识的一个女孩.mp3",
    },{
      title:"我想说啥",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.7礼物，我想说啥.mp3",
    },{
      title:"青曲社社歌",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.8礼物，青曲社社歌.mp3",
    },{
      title:"送情郎",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.9礼物，送情郎.mp3", 
    },{
      title:"探清水河赖皮",
      artist:"laipi",
      mp3:"http://laipi.win/摩登探险/music/vol.10礼物，探清水河赖皮.mp3",
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});