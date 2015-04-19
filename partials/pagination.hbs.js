var pagination = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"col-md-4 newer-posts\">\n    <a href=\""
    + escapeExpression(((helpers.pageUrl || (depth0 && depth0.pageUrl) || helperMissing).call(depth0, (depth0 != null ? depth0.next : depth0), {"name":"pageUrl","hash":{},"data":data})))
    + "\">\n        <i class=\"fa fa-chevron-left\"></i>\n        <span>Art&iacute;culos anteriores</span>\n    </a>\n</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"col-md-4 older-posts\">\n    <a href=\""
    + escapeExpression(((helpers.pageUrl || (depth0 && depth0.pageUrl) || helperMissing).call(depth0, (depth0 != null ? depth0.prev : depth0), {"name":"pageUrl","hash":{},"data":data})))
    + "\">\n        <span>Art&iacute;culos nuevos</span>\n        <i class=\"fa fa-chevron-right\"></i>\n    </a>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.next : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<div class=\"col-md-4 page-num\">\n    <span>P&aacute;gina "
    + escapeExpression(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"page","hash":{},"data":data}) : helper)))
    + " de "
    + escapeExpression(((helper = (helper = helpers.pages || (depth0 != null ? depth0.pages : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pages","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prev : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});