﻿var error = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "";
  stack1 = this.invokePartial(partials.header, '', 'header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<div id=\"fb-root\"></div>\r\n<script>\r\n    (function (d, s, id) {\r\n        var js, fjs = d.getElementsByTagName(s)[0];\r\n        if (d.getElementById(id)) return;\r\n        js = d.createElement(s); js.id = id;\r\n        js.src = \"//connect.facebook.net/es_MX/sdk.js#xfbml=1&version=v2.0\";\r\n        fjs.parentNode.insertBefore(js, fjs);\r\n    }(document, 'script', 'facebook-jssdk'));\r\n</script>\r\n\r\n<div class=\"header-wrap\">\r\n    <div id=\"instafeed\"></div>\r\n    <header class=\"container header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"logo-text\">\r\n                    <h1>"
    + escapeExpression(lambda(((stack1 = (data && data.blog)) && stack1.title), depth0))
    + "</h1>\r\n                    <h2 class=\"hidden-xs hidden-sm\">"
    + escapeExpression(lambda(((stack1 = (data && data.blog)) && stack1.description), depth0))
    + "</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n</div>\r\n\r\n<div class=\"content-wrap\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 posts\">\r\n                <article class=\"post\">\r\n                    <div class=\"post-header\">\r\n                        <div class=\"post-title\">\r\n                            <h1>Error<small>La p&aacute;gina que buscas no existe</small></h1>\r\n                            </div>\r\n                        </div>\r\n                            <p>Pero no te preocupes, tenemos mucho contenido que te podr&iacute;a interesar.</p>\r\n                </article>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"about\">\r\n                    <div class=\"fb-like-box\" data-href=\"https://www.facebook.com/Tamalesconpasaporte\" data-width=\"280\" data-height=\"320\"\r\n                         data-colorscheme=\"light\" data-show-faces=\"true\" data-header=\"true\"\r\n                         data-stream=\"false\" data-show-border=\"true\"></div>\r\n\r\n                    <hr class=\"divider\">\r\n\r\n                    <div style=\"text-align: center\" class=\"hidden-sm hidden-xs\">\r\n                        <!-- Tamalbox -->\r\n                        <ins class=\"adsbygoogle\"\r\n                             style=\"display:inline-block;width:290px;height:600px\"\r\n                             data-ad-client=\"ca-pub-7312968410890852\"\r\n                             data-ad-slot=\"1025056821\"></ins>\r\n                        <script>\r\n                            (adsbygoogle = window.adsbygoogle || []).push({});\r\n                        </script>\r\n                    </div>\r\n\r\n                    <hr class=\"divider\" />\r\n\r\n";
  stack1 = this.invokePartial(partials.mailchimp, '                    ', 'mailchimp', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
  stack1 = this.invokePartial(partials.footer, '', 'footer', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});