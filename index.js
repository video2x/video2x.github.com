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
	var full_url=window.location.href;
	var url_string = new URL(full_url);
	var url = url_string.searchParams.get("url");
	if(url!=null){
		video = $('video');
		source = $('.source');
		source.attr('src',url);
		video[0].src=url;
		video[0].load();
		video[0].play();
	}
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
