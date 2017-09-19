
    function quote(){

    var rgb = [];
    var myUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en";
    $.ajax( {
      url: myUrl,
      jsonp: 'jsonp',
      dataType: 'jsonp',
      success: function(data) {
        document.getElementById('quote').innerHTML='" '+data.quoteText+' "';
        document.getElementById('author').innerHTML=': '+data.quoteAuthor;
      },
      cache: false
    });

    for(var i = 0; i < 3; i++)
        rgb.push(Math.floor(Math.random() * 255));
    document.body.style.backgroundColor = 'rgb('+ rgb.join(',') +')';

}

