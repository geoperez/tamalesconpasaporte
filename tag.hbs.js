var tag = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "            <article class=\""
    + escapeExpression(((helper = (helper = helpers.post_class || (depth0 != null ? depth0.post_class : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post_class","hash":{},"data":data}) : helper)))
    + "\">\r\n                <div class=\"post-header\">\r\n                    <div class=\"post-title\">\r\n                        <h2><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</a></h2>\r\n                    </div>\r\n                    <div class=\"post-date hidden-sm hidden-xs\">\r\n                        <span title=\""
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, {"name":"date","hash":{
    'format': ("YYYY")
  },"data":data})))
    + "\">"
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, {"name":"date","hash":{
    'format': ("DD")
  },"data":data})))
    + "</span>\r\n                        "
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, {"name":"date","hash":{
    'format': ("MMM")
  },"data":data})))
    + "\r\n                    </div>\r\n                </div>\r\n                <div class=\"post-content\">\r\n                    <div class=\"post-image\" style=\"background-image: url("
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + ");\">&nbsp;</div>\r\n                    <p>\r\n                        "
    + escapeExpression(((helpers.excerpt || (depth0 && depth0.excerpt) || helperMissing).call(depth0, {"name":"excerpt","hash":{
    'words': ("100")
  },"data":data})))
    + "...\r\n                    </p>\r\n                    <a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-success\">Continuar leyendo</a>\r\n                </div>\r\n                <hr />\r\n                <div class=\"post-meta\">\r\n                    Fecha: "
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, {"name":"date","hash":{
    'format': ("MMM-DD-YYYY")
  },"data":data})))
    + " - Autor: <span class=\"author-name\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\r\n                    <br />\r\n                    <ul class=\"list-inline list-post-tags\">\r\n";
  stack1 = ((helpers.foreach || (depth0 && depth0.foreach) || helperMissing).call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"foreach","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </ul>\r\n                    <div class=\"share-icons\">\r\n                        Comparte en Redes Sociales:\r\n                        <ul class=\"list-inline list-share-icons\">\r\n                            <li>\r\n                                <a href=\"https://www.facebook.com/sharer/sharer.php?u="
    + escapeExpression(((helpers.url || (depth0 && depth0.url) || helperMissing).call(depth0, {"name":"url","hash":{
    'absolute': ("true")
  },"data":data})))
    + "\" onclick=\"window.open(this.href, 'facebook-share','width=580,height=296');return false;\"><i class=\"fa fa-facebook fb-tooltip\"></i></a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"https://twitter.com/share?text="
    + escapeExpression(((helpers.encode || (depth0 && depth0.encode) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"encode","hash":{},"data":data})))
    + "&amp;url="
    + escapeExpression(((helpers.url || (depth0 && depth0.url) || helperMissing).call(depth0, {"name":"url","hash":{
    'absolute': ("true")
  },"data":data})))
    + "\" onclick=\"window.open(this.href, 'twitter-share', 'width=550,height=235');return false;\"><i class=\"fa fa-twitter tw-tooltip\"></i></a>\r\n                            </li>\r\n                            <li>\r\n                            <a href=\"https://plus.google.com/share?url="
    + escapeExpression(((helpers.url || (depth0 && depth0.url) || helperMissing).call(depth0, {"name":"url","hash":{
    'absolute': ("true")
  },"data":data})))
    + "\" onclick=\"window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;\"><i class=\"fa fa-google-plus gp-tooltip\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"divider\" />\r\n            </article>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">#"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "";
  stack1 = this.invokePartial(partials.header, '', 'header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<div id=\"fb-root\"></div>\r\n<script>\r\n    (function (d, s, id) {\r\n        var js, fjs = d.getElementsByTagName(s)[0];\r\n        if (d.getElementById(id)) return;\r\n        js = d.createElement(s); js.id = id;\r\n        js.src = \"//connect.facebook.net/es_MX/sdk.js#xfbml=1&version=v2.0\";\r\n        fjs.parentNode.insertBefore(js, fjs);\r\n    }(document, 'script', 'facebook-jssdk'));\r\n</script>\r\n<div class=\"coverpost\" style=\"background-image: url('"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.image : stack1), depth0))
    + "')\">\r\n    <div class=\"logo-text\">\r\n        <h1>";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.name : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h1><br />\r\n        <h2>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.description : stack1), depth0))
    + "</h2>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 posts\">\r\n";
  stack1 = ((helpers.foreach || (depth0 && depth0.foreach) || helperMissing).call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"foreach","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"about\">\r\n                <div class=\"fb-like-box\" data-href=\"https://www.facebook.com/Tamalesconpasaporte\" data-width=\"280\" data-height=\"320\"\r\n                     data-colorscheme=\"light\" data-show-faces=\"true\" data-header=\"true\"\r\n                     data-stream=\"false\" data-show-border=\"true\"></div>\r\n                <hr class=\"divider\">\r\n\r\n                <div style=\"text-align: center\" class=\"hidden-sm hidden-xs\">\r\n                    <!-- Tamalbox -->\r\n                    <ins class=\"adsbygoogle\"\r\n                         style=\"display:inline-block;width:290px;height:600px\"\r\n                         data-ad-client=\"ca-pub-7312968410890852\"\r\n                         data-ad-slot=\"1025056821\"></ins>\r\n                    <script>\r\n                        (adsbygoogle = window.adsbygoogle || []).push({});\r\n                    </script>\r\n                </div>\r\n\r\n                <hr class=\"divider\" />\r\n\r\n";
  stack1 = this.invokePartial(partials.mailchimp, '                ', 'mailchimp', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"posts-pagination\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            "
    + escapeExpression(((helper = (helper = helpers.pagination || (depth0 != null ? depth0.pagination : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pagination","hash":{},"data":data}) : helper)))
    + "\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
  stack1 = this.invokePartial(partials.footer, '', 'footer', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});