function(properties, context) {
$('body').on('DOMNodeInserted','.bad-revision', function(){
  if(!properties.displaybanner) {$('.bad-revision').remove();};
  window.location.reload();
});
}