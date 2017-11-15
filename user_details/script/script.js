/*ajax({
    beforeSend: function (jqXHR, settings) {
        jqXHR.setRequestHeader('x-mock-access: 20842df23128ea0b4ff651ff4572c0');
    },
    url: "https://www.apimint.com:443/mock/ECATERING/v1/users/",
    
    type: "GET",
    data: {"sort":"date"},
    contentType: "application/json",
    dataType: "json",
})
*/

$(document).ready(function () {
    $("#get").click(function () {
        console.log("hi");
        ajax({
            beforeSend: function (jqXHR, settings) {
                jqXHR.setRequestHeader('x-mock-access: 20842df23128ea0b4ff651ff4572c0');
            },
            url: "https://www.apimint.com:443/mock/ECATERING/v1/users/",

            type: "get",
            //data: {"sort":"date"},
            contentType: "application/json",
            dataType: "json",
        })
    });
});
