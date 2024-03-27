AFRAME.registerComponent("play-on-click", {
 //Add code here
  schema:{
    isPlaying:{type:"boolean",default:false}
  },
init:function(){
this.videoEl=this.el.getAttribute("material").src;
this.onClick=this.onClick.blind(this)
},
play: function() {
    window.addEventListener("click", this.onClick);
  },
  onClick: function(evt) {
    if (!this.videoEl) {
      return;
    }
    
}
});
