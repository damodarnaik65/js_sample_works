
$(document).ready(function () {
    $("#get").click(function () {
        console.log("hi");
        var results=$('#result');
        var images=$('#img');
        results.html(' ');
        var requestData=$('#btn1').val();
        $.ajax({
            url: 'https://www.apimint.com:443/mock/ECATERING/v1/users/',
            headers: {
                //'Authorization':'Basic xxxxxxxxxxxxx',
                //'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
                'x-mock-access': '20842df23128ea0b4ff651ff4572c0',
                'Content-Type':'application/json'
            },
            method: 'GET',
            dataType: 'json',
            success: function(data){
                

              console.log(data.user_details[0]);
              console.log(data.user_details[1]);
              results.html('Email : '+data.user_details[0].email+ '<br>' + 'Age : '+data.user_details[0].age + '<br>' + 'ID : '+data.user_details[0].email+ '<br>'+ 'Name : '+data.user_details[0].name);
              images.html('<li><img src='+data.user_details[0].image+'></li>')
            }
          });
   
        
    });
});


$(document).ready(function () {
    $("#get1").click(function () {
        console.log("hi");
        var results=$('#result');
        var images=$('#img');
        results.html(' ');
        var requestData=$('#btn1').val();
        $.ajax({
            url: 'https://www.apimint.com:443/mock/ECATERING/v1/users/',
            headers: {
                //'Authorization':'Basic xxxxxxxxxxxxx',
                //'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
                'x-mock-access': '20842df23128ea0b4ff651ff4572c0',
                'Content-Type':'application/json'
            },
            method: 'GET',
            dataType: 'json',
            success: function(data){
                

              console.log(data.user_details[0]);
              console.log(data.user_details[1]);
              results.html('Email : '+data.user_details[1].email+ '<br>' + 'Age : '+data.user_details[1].age + '<br>' + 'ID : '+data.user_details[1].email+ '<br>'+ 'Name : '+data.user_details[1].name);
              images.html('<li><img src='+data.user_details[1].image+'></li>')
               
            }
          });
   
        
    });
});
