function getData(board) {
  $.getJSON("https://rainestorme.github.io/chrome81/"+board+".json", function( data ) {
    $("#devices").text("Device(s): " + data.devices.join(", "));
   
    var ul = $("#versions");
    $.each(data.versions, function(key, value) {
      var li = $("<li></li>");
      li.append(key + " (" + value.platform + ") - ");
      var a;
      if (value.magnet) {
        a = $("<a></a>").attr("href", value.magnet).text("magnet");
        li.append(a);
        if (value.seeded && value.seeded == "n"){
          li.append("*");
        }
        li.append(" ");
      }
      if (value.torrent) {
        a = $("<a></a>").attr("href", value.torrent).text("torrent");
        li.append(a);
        if (value.seeded && value.seeded == "n"){
          li.append("*");
        }
        li.append(" ");
      }
      if (value.direct) {
        a = $("<a></a>").attr("href", value.direct).text("direct");
        li.append(a);
        li.append(" ");
      }
      ul.append(li);
    });
    
  });
}
