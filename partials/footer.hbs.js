var footer = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <p>\r\n                    Siguenos en nuestro <a href=\""
    + escapeExpression(lambda(((stack1 = (data && data.blog)) && stack1.url), depth0))
    + "/rss/\">\r\n                        <i class=\"fa fa-rss\"> RSS </i>\r\n                    </a>\r\n                </p>\r\n                <p>\r\n                    <a href=\""
    + escapeExpression(lambda(((stack1 = (data && data.blog)) && stack1.url), depth0))
    + "/\">"
    + escapeExpression(lambda(((stack1 = (data && data.blog)) && stack1.title), depth0))
    + "</a> &copy; "
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, {"name":"date","hash":{
    'format': ("YYYY")
  },"data":data})))
    + " - All Rights Reserved.\r\n                </p>\r\n                <p>\r\n                    Proudly powered by <a href=\"http://ghost.org\">Ghost</a>.\r\n                </p>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <ul class=\"list-inline list-footer-social\">\r\n                    <li><a href=\"https://www.facebook.com/Tamalesconpasaporte\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                    <li><a href=\"https://twitter.com/TCPasaporte\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                    <li><a href=\"http://instagram.com/tamales_con_pasaporte\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                    <li><a href=\"https://www.youtube.com/playlist?list=PLeedmGY8zVnDrluDHR6JG4otmwbThu8QV\"><i class=\"fa fa-youtube\"></i></a></li>\r\n                </ul>\r\n                <a id=\"go-top\" href=\"#\" class=\"go-top\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>";
},"useData":true});