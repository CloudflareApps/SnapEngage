(function() {
	if (!INSTALL_OPTIONS.widgetId)
	  return;

	var se = document.createElement('script'); se.type = 'text/javascript'; se.async = true;
	se.src = '//storage.googleapis.com/code.snapengage.com/js/' + INSTALL_OPTIONS.widgetId + '.js';
	var done = false;
	se.onload = se.onreadystatechange = function() {
		if (!done&&(!this.readyState||this.readyState==='loaded'||this.readyState==='complete')) {
			done = true;
		}
	};
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(se, s);
})();
