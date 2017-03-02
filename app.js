// Single State Object
let state = {
  items: []
};

//State modification functions
const addItem = function(state, item) {
  state.items.push(item);
};

const removeItem = function(state, item) {
  state.items.splice(state.items.indexOf(item), 1);
};

// Render functions
const renderList = function(state) {
  let element = $('.shopping-list');
  let itemsHTML = state.items.map(function(item) {
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
  renderList(state);
  $('#shopping-list-entry').val("");
});

$('ul').on('click', 'button.shopping-item-delete', function(event){
  removeItem(state, $(this).closest('li').find('span.shopping-item').text());
  renderList(state);
});

$('ul').on('click','button.shopping-item-toggle', function(){
  $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
});
