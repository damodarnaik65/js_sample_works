
$(document).ready(function () {
    $("#get").click(function () {
        console.log("hi");
        var resultElement=$('#pan2');
        resultElement.html(' ');

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
            //data: { q:data },
            success: function(data){
                document.getElementById("pan2").innerHTML=+data;

              console.log('succes: '+data);
              
            }
          });
   
        
    });
});
