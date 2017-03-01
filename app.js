// Single State Object
let state = {
  items: []
};

//State modification functions
let addItem = function(state, item) {
  state.items.push(item);
};

let removeItem = function(state, item) {
 let deleter = state.items.indexOf(item);
  state.items.splice(deleter, 1);
};

// Render functions
var renderList = function(state, element) {
  var itemsHTML = state.items.map(function(item) {
    return(
    `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
  });
  element.html(itemsHTML);
};

//Event listners
$('#js-shopping-list-form').submit(function(event){
  event.preventDefault();
  addItem(state, $('#shopping-list-entry').val());
  renderList(state, $('.shopping-list'));
});

$('ul').on('click', 'button.shopping-item-delete', function(event){
  $(event.target).closest('li').remove();
  removeItem(state, $('#shopping-list-entry').val());
})

$('ul').on('click','button.shopping-item-toggle', function(event){
  $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
})
