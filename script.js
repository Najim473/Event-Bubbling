var items = document.getElementsByClassName('item')
for(i = 0;i<items.length;i++){
   var item = items[i]
   // console.log(item);
   item.addEventListener('click',function(event){
      // console.log(this);
      console.log(event.target.parentNode);
      // console.log(even);
      event.target.parentNode.removeChild(event.target)
      // console.log(event.target);
   })
}