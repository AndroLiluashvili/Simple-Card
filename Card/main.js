// Color Switch
$("#redbtn").click(function (e) { //Red Button
    e.preventDefault();
    
    $("img").attr("src", "./Img/Headset_Red.jpg")
    
    
    $("#redbtn").css("padding", "15px 17px")

    $("#silverbtn").css("padding", "10px 13px")
    $("#gunmetalbtn").css("padding", "10px 13px")
});

$("#gunmetalbtn").click(function (e) { //Gun Metal Button
    e.preventDefault();
    
    $("img").attr("src", "./Img/Headset_GunMetal.jpg")
    
    $("#gunmetalbtn").css("padding", "15px 17px")

    $("#silverbtn").css("padding", "10px 13px")
    $("#redbtn").css("padding", "10px 13px")
});

$("#silverbtn").click(function (e) { //Silver Button
    e.preventDefault();
    
    $("img").attr("src", "./Img/Headset_Silver.jpg")

    $("#silverbtn").css("padding", "15px 17px")

    $("#redbtn").css("padding", "10px 13px")
    $("#gunmetalbtn").css("padding", "10px 13px")
});
//Add to cart
$(".shopNum").val(0)
$("#addToCart").click(function (e) {
    e.preventDefault()
    $(".shopNum").val(parseInt($(".shopNum").val()) + 1)
});

    
