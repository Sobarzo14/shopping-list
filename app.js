var list = [];
function template(name){
var template = '<li>'+
        '<span class="shopping-item">'+ name +'</span>'+
        '<div class="shopping-item-controls">'+
          '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span>'+
          '</button>'+
        '</div>'+
      '</li>'
      return template
  }
$(document).ready(function(){
	$('#js-shopping-list-form').submit(function(){
		event.preventDefault();
		var shoppingItem = $('#shopping-list-entry').val();
		$('ul').append(template(shoppingItem))
	})
	$('.shopping-item-delete').click(function(){
		$(this).parent().parent().remove();
	})
	$('.shopping-item-toggle').click(function(){
		$(this.closest('li')).toggleClass('shopping-item__checked')
	})
})