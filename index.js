$(document).ready(function() {
	$('input#url').change(function() {
		link = $('.link').val();
		video = $('video');
		source = $('.source');
		source.attr('src',link);
		video[0].src=link;
		video[0].load();
		video[0].play();
	});
	var url_string = window.location.href;
	var url = new URL(url_string);
	var link = url.searchParams.get("url");
	console.log(c);
});
videojs('my-video').ready(function() {
		this.hotkeys({
			volumeStep: 0.1,
			seekStep: 15,
			enableMute: true,
			enableFullscreen: true,
			enableNumbers: false,
			enableVolumeScroll: true,
		});
	});
