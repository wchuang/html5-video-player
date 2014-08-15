$(document).ready(function() {
  var video_1 = document.getElementById("playlist_1");

  /* Start to play video at First. */
  video_1.play();

  /* Start to add eventListener on video_1. */
  video_1.addEventListener("timeupdate", function () {
    if (0 < video_1.currentTime) {
      video_1.pause();
      video_1.currentTime = 0;
      this.removeEventListener("timeupdate", arguments.callee, false);
    }
  }, false);

  video_1.addEventListener("loadstart", function () {
    $('.play_btn, .pause_btn').prop("disabled", "true");
    $('p').text("Loading..");
  }, false);

  video_1.addEventListener("loadedmetadata", function () {
    var duration = video_1.duration, buf = video_1.buffered;
    video_1.addEventListener("progress", function () {
      if (1 == Math.round(video_1.buffered.end(0)) / Math.round(video_1.seekable.end(0))) {
        $(".play_btn, .pause_btn").prop("disabled", "");
        $('p').text("Ready to play");
        this.removeEventListener("progress", arguments.callee, false);
      }
    }, false);
  }, false);
  /* End to add eventListener on video_1. */

  /* Event binder of play and pause buttons. */
  $(".play_btn").click(function () {
    video_1.play();
    $('p').text("Playing");
    $('.play_btn').prop("disabled", "true");
    $('.pause_btn').prop("disabled", "");
  });

  $(".pause_btn").click(function () {
    video_1.pause();
    $('p').text("Pause");
    $('.play_btn').prop("disabled", "");
    $('.pause_btn').prop("disabled", "true");
  });
});
