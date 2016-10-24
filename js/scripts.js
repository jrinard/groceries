
$(document).ready(function(){
  $("form").submit(function(event){
      var item1Input = $("input#item1").val();
      var item2Input = $("input#item2").val();
      var item3Input = $("input#item3").val();

      var itemsList = [item1Input, item2Input, item3Input].sort();

      var newList = itemsList.map(function(itemsList) {
        return itemsList.toUpperCase();
      });

      $("form").hide();
      $("ul").show();
      $(".r1").text(newList[0]);
      $(".r2").text(newList[1]);
      $(".r3").text(newList[2]);

      event.preventDefault();

});
});
