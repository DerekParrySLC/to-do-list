(function(){
  
  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item');
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
  },false)
  
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)
  
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = "<li>Add new items by typing them on the line above</li>"+
                       "<li>Items will be saved to your browser's local storage</li>"+
                       "<li>Complete an item by clicking on it</li>"+
                       "<li>Remove a completed item by clicking on it again</li>";
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();