var page = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                    <article class=\""
    + escapeExpression(((helper = (helper = helpers.post_class || (depth0 != null ? depth0.post_class : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post_class","hash":{},"data":data}) : helper)))
    + "\">\r\n                        <div class=\"post-header\">\r\n                            <div class=\"post-title\">\r\n                                <h2>";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h2>\r\n                            </div>\r\n                            <hr class=\"divider\" />\r\n                        </div>\r\n                        <div class=\"post-content\">\r\n                            <p>\r\n                                ";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n                            </p>\r\n                        </div>\r\n                    </article>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "";
  stack1 = this.invokePartial(partials.header, '    ', 'header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n    <div>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 posts\">\r\n";
  stack1 = ((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(options={"name":"post","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.post) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    <div style=\"text-align: center\" class=\"hidden-sm hidden-xs\">\r\n                        <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n                        <!-- Tamal -->\r\n                        <div style=\"text-align: center\">\r\n                            <ins class=\"adsbygoogle\"\r\n                                 style=\"display:inline-block;width:728px;height:90px\"\r\n                                 data-ad-client=\"ca-pub-7312968410890852\"\r\n                                 data-ad-slot=\"2217745225\"></ins>\r\n                            <script>\r\n                                (adsbygoogle = window.adsbygoogle || []).push({});\r\n                            </script>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";
  stack1 = this.invokePartial(partials.footer, '    ', 'footer', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});