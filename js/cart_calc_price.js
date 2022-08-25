/*LOKALNI FILEOVI
    $(".length").on("input", function(){
    var pokusaj =  $(this).parent().parent().find(".discount-price h5").text();
    var broj = parseInt(pokusaj);
    var duzina = $(".length").val();
    var zbroj = parseInt(duzina) + parseInt(broj);
    $(this).parent().parent().find(".discount-price h5").text(zbroj);
    console.log(zbroj);
});
/*PROJEKT CIJENE NA UNOS DUZINE*//*
$(".height").on("input", function(){
    var pokusaj =  $(this).parent().parent().find(".discount-price").text();
    var broj = parseInt(pokusaj, 10);
    var duzina = $(".height").val();
    var zbroj = parseInt(duzina) + parseInt(broj);
    /*$(this).parent().parent().find(".discount-price").text(zbroj);*/
   /* console.log(zbroj);
});*/


/*ORDER PAGE KOLIČINA +/- REFRESH CIJENA*/ 


    var jedinicna_cijena = parseFloat($(".plus").parent().parent().find(".ind_price").text().replace(',', '.')).toFixed(2);

    $(".plus").on("click", function(){
        var kolicina = $(".cart-increment").val();
        var pomnozena_cijena = (jedinicna_cijena * kolicina).toFixed(2);

        $(this).parent().parent().find(".ind_price").text(pomnozena_cijena + " kn");
    });


    var cijena_popust = parseFloat($(".plus").parent().parent().find(".disc_price").text().replace(',', '.')).toFixed(2);

    $(".plus").on("click", function(){
        var kolicina = $(".cart-increment").val();
        var pomnozen_popust = (cijena_popust * kolicina).toFixed(2);
        var pdv = (pomnozen_popust * 0.2).toFixed(2);
        var cijena_bez_pdv =  (pomnozen_popust - (pomnozen_popust * 0.2)).toFixed(2);

        $(this).parent().parent().find(".disc_price").text(pomnozen_popust + " kn");
        $(this).parent().parent().find(".cart_pdv").text(pdv + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total-2_new h6:nth-child(2)").text(pomnozen_popust + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total-1_new p:nth-child(2)").text(pdv + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total_new p:nth-child(2)").text(cijena_bez_pdv + " kn");
    });

    $(".minus").on("click", function(){
        var kolicina = $(".cart-increment").val();
        var oduzeta_cijena = (jedinicna_cijena * kolicina).toFixed(2);

        $(this).parent().parent().find(".ind_price").text(oduzeta_cijena + " kn");
    })

    $(".minus").on("click", function(){
        var kolicina = $(".cart-increment").val();
        var oduzeta_cijena = (cijena_popust * kolicina).toFixed(2);
        var pdv = (oduzeta_cijena * 0.2).toFixed(2);
        var cijena_bez_pdv =  (oduzeta_cijena - (oduzeta_cijena * 0.2)).toFixed(2);

        $(this).parent().parent().find(".disc_price").text(oduzeta_cijena + " kn");
        $(this).parent().parent().find(".cart_pdv").text(pdv + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total-2_new h6:nth-child(2)").text(oduzeta_cijena + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total-1_new p:nth-child(2)").text(pdv + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total_new p:nth-child(2)").text(cijena_bez_pdv + " kn");
})

//DRUGA VERZIJA FUNCKIJE KOJA RADI NA VISE PROIZVODA

var jedinicna_cijena = parseFloat($(".plus").closest("li").find(".ind_price").text().replace(',', '.')).toFixed(2);

    $(".plus").on("click", function(){
        var kolicina = $(".cart-increment").val();
        var pomnozena_cijena = (jedinicna_cijena * kolicina).toFixed(2);

        $(this).closest("li").find(".ind_price").text(pomnozena_cijena + " kn");
        console.log(pomnozena_cijena);
    });


    var cijena_popust = parseFloat($(".plus").parent().parent().find(".disc_price").text().replace(',', '.')).toFixed(2);

    $(".plus").on("click", function(){
        var kolicina = $(".cart-increment").val();
        var pomnozen_popust = (cijena_popust * kolicina).toFixed(2);
        var pdv = (pomnozen_popust * 0.2).toFixed(2);
        var cijena_bez_pdv =  (pomnozen_popust - (pomnozen_popust * 0.2)).toFixed(2);

        $(this).closest("li").find(".disc_price").text(pomnozen_popust + " kn");
        $(this).closest("li").find(".cart_pdv").text(pdv + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total-2_new h6:nth-child(2)").text(pomnozen_popust + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total-1_new p:nth-child(2)").text(pdv + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total_new p:nth-child(2)").text(cijena_bez_pdv + " kn");
    });

    $(".minus").on("click", function(){
        var kolicina = $(".cart-increment").val();
        var oduzeta_cijena = (jedinicna_cijena * kolicina).toFixed(2);

        $(this).parent().parent().find(".ind_price").text(oduzeta_cijena + " kn");
    })

    $(".minus").on("click", function(){
        var kolicina = $(".cart-increment").val();
        var oduzeta_cijena = (cijena_popust * kolicina).toFixed(2);
        var pdv = (oduzeta_cijena * 0.2).toFixed(2);
        var cijena_bez_pdv =  (oduzeta_cijena - (oduzeta_cijena * 0.2)).toFixed(2);

        $(this).closest("li").find(".disc_price").text(oduzeta_cijena + " kn");
        $(this).closest("li").find(".cart_pdv").text(pdv + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total-2_new h6:nth-child(2)").text(oduzeta_cijena + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total-1_new p:nth-child(2)").text(pdv + " kn");
        $(this).parent().parent().parent().parent().find(".shipping-total_new p:nth-child(2)").text(cijena_bez_pdv + " kn");
})

//TEST
var cart_price_array = [];
$(".plus").on("click", function(evt){
    var target = evt.target;
    var ind_price = parseFloat($(target).closest("li").find(".ind_price").text().replace(',', '.')).toFixed(2);
    cart_price_array.push(ind_price);
    var quantity = $(target).closest("li").find(".cart-increment").val();
    var price_multiplied = (cart_price_array[0] * quantity).toFixed(2);
    $(target).closest("li").find(".ind_price").text(price_multiplied + " kn");

$(".minus").on("click", function(evt){

})
});


//CIJENA NA UNOS DUZINE LOKALNO
$(".length").on("focusout", function(){
    var length_val = Math.ceil($(this).val() / 10) *10;
    var reg_price = parseFloat($(this).closest("li").find(".price").text().replace(',', '.')).toFixed(2);
    var disc_price = parseFloat($(this).closest("li").find(".discount-price").text().replace(',', '.')).toFixed(2);
    var reg_price_array = [];
    var disc_price_array = [];
    reg_price_array.push(reg_price);
    disc_price_array.push(disc_price);
    var reg_price_final = (reg_price_array[0] * (length_val/100)).toFixed(2);
    var disc_price_final = (disc_price_array[0] * (length_val/100)).toFixed(2);
    var price_divided = reg_price_final / length_val;
    $(this).closest("li").find(".price").text(reg_price_final + " kn");
    $(this).closest("li").find(".discount-price").text(disc_price_final + " kn");

    if(!$(this).val()){
        $(this).closest("li").find(".discount-price").text(price_divided);
    }
});

//CIJENE NA UNOS DUZINE PROJEKT
$(".height").change(function(){
    var length_val = Math.ceil($(this).val() / 10) *10;
    var reg_price = parseFloat($(this).closest("li").find(".pricez").text().replace(',', '.')).toFixed(2);
    var disc_price = parseFloat($(this).closest("li").find(".discount-price").text().replace(',', '.')).toFixed(2);
    var reg_price_array = [];
    var disc_price_array = [];
    reg_price_array.push(reg_price);
    disc_price_array.push(disc_price);
    var reg_price_final = (reg_price_array[0] * (length_val/100)).toFixed(2);
    var disc_price_final = (disc_price_array[0] * (length_val/100)).toFixed(2);
    
   
    $(this).closest("li").find(".pricez").text(reg_price_final + " kn");
    $(this).closest("li").find(".discount-price").text(disc_price_final + " kn");

        $(".height").change(function(){
            if(!$(this).val()){
                $(this).closest("li").find(".pricez").text(reg_price_array[0] + " kn");
                $(this).closest("li").find(".discount-price").text(disc_price_array[0] + " kn");
            }
        });
});

// CART PAGE KOLICINA CIJENE PROJEKT

   
    $(".cart-increment").change(function(evt){
        var cart_price_array = [];
        var disc_price_array = [];
        var pdv_array = [];
        var target = evt.target;
        var ind_price = parseFloat($(target).closest("li").find(".ind_price").text().replace(',', '.')).toFixed(2);
        var disc_price = parseFloat($(target).closest("li").find(".disc_price").text().replace(',', '.')).toFixed(2);
        var pdv =  parseFloat($(target).closest("li").find(".cart_pdv").text().replace(',', '.')).toFixed(2);
        cart_price_array.push(ind_price);
        disc_price_array.push(disc_price);
        pdv_array.push(pdv);
        var quantity = $(target).closest("li").find(".cart-increment").val();
        var price_multiplied = (cart_price_array[0] * quantity).toFixed(2);
        var disc_multiplied = (disc_price_array[0] * quantity).toFixed(2);
        var pdv_multiplied = (pdv_array[0] * quantity).toFixed(2);
      

        //$(this).closest("li").find(".ind_price").text(price_multiplied + " kn");
        $(this).closest("li").find(".ind_price").append("<h5>" + price_multiplied + "kn" + "</h5>" );
        $(".discount-price h5").not(":last-child").remove();
        //$(this).closest("li").find(".disc_price").text(disc_multiplied + " kn");
        $(this).closest("li").find(".disc_price").append("<h5>" + disc_multiplied + " kn" + "</h5>");
        $(".disc_price h5").not(":last-child").remove();
        //$(this).closest("li").find(".cart_pdv").text(pdv_multiplied + " kn");
        $(this).closest("li").find(".cart_pdv").append("<h5>" + pdv_multiplied + " kn" + "</h5>");
        $(".cart_pdv h5").not(":last-child").remove();

            var total_price = 0;
            $(".disc_price:not(:first)").each(function(){
                var disc_prices = parseFloat($(this).text().replace(',', '.'));
                total_price += disc_prices;
                $(".cart-increment").parent().parent().parent().parent().find(".shipping-total-2_new h6:nth-child(2)").text(parseFloat(total_price).toFixed(2) + " kn");
            });

           var total_no_pdv = total_price - (total_price * 0.2);
           $(".cart-increment").parent().parent().parent().parent().find(".shipping-total_new p:nth-child(2)").text(parseFloat(total_no_pdv).toFixed(2) + " kn");

            var total_pdv = 0;
            $(".cart_pdv:not(:first)").each(function(){
                var pdv_no = parseFloat($(this).text().replace(',', '.'));

                total_pdv += pdv_no;
                $(".cart-increment").parent().parent().parent().parent().find(".shipping-total-1_new p:nth-child(2)").text(parseFloat(total_pdv).toFixed(2) + " kn");
            });
});

//TEST


//CIJELA ROLA AZURIRANJE CIJENE
var polje = [];
    var polje2 =[];
$(".whole_foil, .foil_counter").change(function(){
    var whole_foil_height = Math.ceil($(this).closest("li").find(".height").val()/ 10) *10;
    var reg_price_1 = parseFloat($(this).closest("li").find(".pricez").text().replace(',', '.')).toFixed(2);
    var disc_price_1 = parseFloat($(this).closest("li").find(".discount-price").text().replace(',', '.')).toFixed(2);
    var whole_quantity  = $(this).closest("li").find(".foil_counter").val();
    
    var whole_reg_price = (whole_foil_height/100) * reg_price_1 ;
    var whole_disc_price = (whole_foil_height/100) * disc_price_1;

    polje.push(whole_reg_price);
    polje2.push(whole_disc_price);
    var pricetest = polje[0] * whole_quantity;
    var pricetest2 = polje2[0] * whole_quantity;
if($(".whole_foil").is(":checked")){

    $(this).closest("li").find(".pricez").text(parseFloat(pricetest).toFixed(2) + " kn");
    $(this).closest("li").find(".discount-price").text(parseFloat(pricetest2).toFixed(2) + " kn");
}
});


/*ALATI KOLICINA AZURIRANJE CIJENA*/

$(".tools-only").change(function(){
    var tools_price = parseFloat($(this).closest("li").find(".tools").text().replace(',', '.')).toFixed(2);
    var tools_quantity = $(this).val();
    var tools_price1 = parseFloat(tools_quantity * tools_price).toFixed(2);
    $(this).closest("li").find(".tools").parent().append("<h4 style='font-size:16px; font-weight:500; display:inline-block'>" + "&nbsp;" + tools_price1 + "kn" + "</h4>");
    $(".pricing h4").not(":last-child").remove();
    $(this).closest("li").find(".tools").hide();
});