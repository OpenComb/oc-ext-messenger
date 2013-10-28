exports.onload = function(app){

    helper.template('opencomb/templates/WebPage.html',this.holdButThrowError(function(err,tpl){


	// 加入 bootstrap css
	tpl.$("html head assets[type=css]").before(
	    '<link type="text/css" rel="stylesheet" href="/oc-ext-messenger/public/css/messenger.css">'
	    + '<link type="text/css" rel="stylesheet" href="/oc-ext-messenger/public/css/messenger-theme-future.css">'
	) ;
	// 加入 bootstrap js
	tpl.$("html body assets[type=script]").before(
	    '<script type="text/javascript" src="/oc-ext-messenger/public/js/messenger.js"></script>'
	) ;

	// 从新编译
	tpl.compile() ;

    })) ;


}
