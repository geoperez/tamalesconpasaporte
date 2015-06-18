var post = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, blockHelperMissing=helpers.blockHelperMissing, buffer = "<div class=\"coverpost\" style=\"background-image: url('"
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + "')\">\r\n    <div class=\"logo-text\">\r\n        <h1>";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h1><br />\r\n        <h2>"
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, {"name":"date","hash":{
    'format': ("MMM-DD-YYYY")
  },"data":data})))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h2>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 posts\">\r\n            <article class=\""
    + escapeExpression(((helper = (helper = helpers.post_class || (depth0 != null ? depth0.post_class : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post_class","hash":{},"data":data}) : helper)))
    + "\">\r\n                <div class=\"post-content\">\r\n                    <p>";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</p>\r\n                </div>\r\n                <hr />\r\n\r\n                <div class=\"hidden-sm hidden-xs\">\r\n                    <p>Continua leyendo m&aacute;s art&iacute;culos sobre: </p>\r\n                    <ul class=\"list-inline list-post-tags\">\r\n";
  stack1 = ((helpers.foreach || (depth0 && depth0.foreach) || helperMissing).call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"foreach","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </ul>\r\n                </div>\r\n\r\n                <div class=\"post-meta\">\r\n                    Fecha: "
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, {"name":"date","hash":{
    'format': ("MMM-DD-YYYY")
  },"data":data})))
    + " - Autor: <span class=\"author-name\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\r\n                    <br />\r\n                    <div class=\"share-icons\">\r\n                        Compartir: <i class=\"fa fa-share\"></i>\r\n                        <ul class=\"list-inline list-share-icons\">\r\n                            <li>\r\n                                <a href=\"https://www.facebook.com/sharer/sharer.php?u="
    + escapeExpression(((helpers.url || (depth0 && depth0.url) || helperMissing).call(depth0, {"name":"url","hash":{
    'absolute': ("true")
  },"data":data})))
    + "\"\r\n                                   onclick=\"window.open(this.href, 'facebook-share','width=580,height=296');return false;\"><i class=\"fa fa-facebook fb-tooltip\"></i></a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"https://twitter.com/share?text="
    + escapeExpression(((helpers.encode || (depth0 && depth0.encode) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"encode","hash":{},"data":data})))
    + "&amp;url="
    + escapeExpression(((helpers.url || (depth0 && depth0.url) || helperMissing).call(depth0, {"name":"url","hash":{
    'absolute': ("true")
  },"data":data})))
    + "\"\r\n                                   onclick=\"window.open(this.href, 'twitter-share', 'width=550,height=235');return false;\"><i class=\"fa fa-twitter tw-tooltip\"></i></a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"https://plus.google.com/share?url="
    + escapeExpression(((helpers.url || (depth0 && depth0.url) || helperMissing).call(depth0, {"name":"url","hash":{
    'absolute': ("true")
  },"data":data})))
    + "\"\r\n                                   onclick=\"window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;\"><i class=\"fa fa-google-plus gp-tooltip\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <hr />\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">";
  stack1 = this.invokePartial(partials.mailchimp, '', 'mailchimp', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div id=\"disqus_thread\"></div>\r\n                        <script type=\"text/javascript\">\r\n                            var disqus_shortname = 'tamalesconpasaporte';\r\n                            var disqus_identifier = '"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.id : stack1), depth0))
    + "';\r\n                            var disqus_config = function () {\r\n                                this.language = \"es_MX\";\r\n                            };\r\n\r\n                            /* * * DON'T EDIT BELOW THIS LINE * * */\r\n                            (function () {\r\n                                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;\r\n                                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';\r\n                                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\r\n                            })();\r\n                        </script>\r\n                        <noscript>Please enable JavaScript to view the <a href=\"http://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>\r\n                        <a href=\"http://disqus.com\" class=\"dsq-brlink\">comments powered by <span class=\"logo-disqus\">Disqus</span></a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <hr />\r\n                        <p>Continua leyendo con nostros. Podrian interesarte los siguientes art&iacute;culos.</p>\r\n                    </div>\r\n";
  stack1 = ((helper = (helper = helpers.prev_post || (depth0 != null ? depth0.prev_post : depth0)) != null ? helper : helperMissing),(options={"name":"prev_post","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.prev_post) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.next_post || (depth0 != null ? depth0.next_post : depth0)) != null ? helper : helperMissing),(options={"name":"next_post","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.next_post) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\r\n            </article>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"about\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.author : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n                <hr class=\"divider\">\r\n\r\n                <h3>Etiquetas</h3>\r\n\r\n                <p>Encuentra m&aacute;s art&iacute;culos sobre:</p>\r\n\r\n                <ul class=\"list-inline list-post-tags\">\r\n";
  stack1 = ((helpers.foreach || (depth0 && depth0.foreach) || helperMissing).call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"foreach","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </ul>\r\n\r\n                <hr class=\"divider\">\r\n\r\n                <div style=\"text-align: center\" class=\"hidden-sm hidden-xs\">\r\n                    <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n                    <!-- Tamalbox -->\r\n                    <ins class=\"adsbygoogle\"\r\n                         style=\"display:inline-block;width:290px;height:600px\"\r\n                         data-ad-client=\"ca-pub-7312968410890852\"\r\n                         data-ad-slot=\"1025056821\"></ins>\r\n                    <script>\r\n                        (adsbygoogle = window.adsbygoogle || []).push({});\r\n                    </script>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">#"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <div class=\"col-md-6\" style=\"padding: 0;min-height: 200px;\">\r\n                        <div style=\"background-image: url("
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + ");  background-size: cover;opacity: 0.4;float: right;width: 100%;min-height: 200px;border-radius: 20px 0 0 20px;\"></div>\r\n                        <div style=\"position: absolute;margin: 10px;\">\r\n                            <h2><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>\r\n\r\n                            <p>"
    + escapeExpression(((helpers.excerpt || (depth0 && depth0.excerpt) || helperMissing).call(depth0, {"name":"excerpt","hash":{
    'words': ("20")
  },"data":data})))
    + "...</p>\r\n                        </div>\r\n                    </div>\r\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <div class=\"col-md-6\" style=\"padding: 0;min-height: 200px;\">\r\n                        <div style=\"background-image: url("
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + ");  background-size: cover;opacity: 0.4;float: right;width: 100%;min-height: 200px;border-radius: 0 20px 20px 0;\"></div>\r\n                        <div style=\"position: absolute;margin: 10px;\">\r\n                            <h2><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>\r\n\r\n                            <p>"
    + escapeExpression(((helpers.excerpt || (depth0 && depth0.excerpt) || helperMissing).call(depth0, {"name":"excerpt","hash":{
    'words': ("20")
  },"data":data})))
    + "...</p>\r\n                        </div>\r\n                    </div>\r\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.image : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                <div class=\"author-info\">\r\n                    <h2>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h2>\r\n                    <p class=\"hidden-sm hidden-xs\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.bio : stack1), depth0))
    + "</p>\r\n                </div>\r\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <div class=\"author-image\" style=\"border: 0\">\r\n                    <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" />\r\n                </div>\r\n";
},"11":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">#"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "";
  stack1 = this.invokePartial(partials.header, '', 'header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(options={"name":"post","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.post) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  stack1 = this.invokePartial(partials.footer, '', 'footer', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});