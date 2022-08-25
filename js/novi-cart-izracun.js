$(".cart-increment").change(function(evt){
    var cart_price_array = [];
    var disc_price_array = [];
    var pdv_array = [];
    var target = evt.target;
    var ind_price = $(target).closest("li").find(".ind_price").text();
    if(ind_price.split(",").length>2){
        ind_price = parseFloat(ind_price.replace(',', '').replace(',', '.'));
    }
    else{
        ind_price = parseFloat(ind_price.replace(',', '.'));
    }   
    var disc_price = $(target).closest("li").find(".disc_price").text();
    if(disc_price.split(",").length>2){
        disc_price = parseFloat(disc_price.replace(',', '').replace(',', '.'));
    }
    else{
        disc_price = parseFloat(disc_price.replace(',', '.'));
    }   
    var pdv =  $(target).closest("li").find(".cart_pdv").text();
    if(pdv.split(",").length>2){
        pdv = parseFloat(pdv.replace(',', '').replace(',', '.'));
    }
    else{
        pdv = parseFloat(pdv.replace(',', '.'));
    }   
    cart_price_array.push(ind_price);
    disc_price_array.push(disc_price);
    pdv_array.push(pdv);
    var quantity = $(target).closest("li").find(".cart-increment").val();
    var price_multiplied = ((cart_price_array[0] * quantity)).toLocaleString("en-HR", {minimumFractionDigits:2}).replace('.', ',');
    var disc_multiplied = ((disc_price_array[0] * quantity)).toLocaleString("en-HR", {minimumFractionDigits:2}).replace('.', ',');
    var pdv_multiplied = ((pdv_array[0] * quantity)).toLocaleString("en-HR", {minimumFractionDigits:2}).replace('.', ',');
    
   
    $(this).closest("li").find(".ind_price").parent().append("<span class='newspan'>" + price_multiplied + "kn" + "</span>" );
    $(".dealer-product-meta span").not(":first-child, :last-child").remove();
    $(this).closest("li").find(".ind_price").hide();

    $(this).closest("li").find(".disc_price").parent().append("<span class='newspan testclass'>" + disc_multiplied + " kn" + "</span>");
    $(".dealer-product-meta span").not(":first-child, :last-child").remove();
    $(this).closest("li").find(".disc_price").hide();
   
    $(this).closest("li").find(".cart_pdv").parent().append("<span class='newspan new_pdv'>" + pdv_multiplied + " kn" + "</span>");
    $(".dealer-product-meta span").not(":first-child, :last-child").remove();
    $(this).closest("li").find(".cart_pdv").hide();
  
    var total_price = 0;
    if( $(this).parent().parent().siblings().find(".disc_price").is(":visible")){
        $(this).parent().parent().siblings().not(":first-child").find(".disc_price").addClass("testclass");
     }
        $(".testclass").each(function(){
          if($(this).is(":visible")){
            var disc_prices = parseFloat($(this).text().replace(',', '.'));
            total_price += disc_prices;
            $(".cart-increment").parent().parent().parent().parent().find(".shipping-total-2_new h6:nth-child(2)").text(parseFloat(total_price).toFixed(2) + " kn");
        
        }    
        });

       var total_no_pdv = total_price - (total_price * 0.2);
       $(".cart-increment").parent().parent().parent().parent().find(".shipping-total_new p:nth-child(2)").text(parseFloat(total_no_pdv).toFixed(2) + " kn");

        var total_pdv = 0;
        if( $(this).parent().parent().siblings().find(".cart_pdv").is(":visible")){
            $(this).parent().parent().siblings().not(":first-child").find(".cart_pdv").addClass("new_pdv");
         }
        $(".new_pdv").each(function(){
            if($(this).is(":visible")){
            var pdv_no = parseFloat($(this).text().replace(',', '.'));

            total_pdv += pdv_no;
            $(".cart-increment").parent().parent().parent().parent().find(".shipping-total-1_new p:nth-child(2)").text(parseFloat(total_pdv).toFixed(2) + " kn");
            }
        });
});

/*ALATI KOLICINA AZURIRANJE CIJENA*/
/*$(".tools-only").change(function(){
    var tools_price = parseFloat($(this).closest("li").find(".tools").text().replace(',', '.')).toFixed(2);
    var tools_quantity = $(this).val();
    var tools_price1 = parseFloat(tools_quantity * tools_price).toFixed(2);
    $(this).closest("li").find(".tools").parent().append("<h4 style='font-size:16px; font-weight:500; display:inline-block'>" + "&nbsp;" + tools_price1 + "kn" + "</h4>");
    $(".pricing h4").not(":last-child").remove();
    $(this).closest("li").find(".tools").hide();
});*/


/*UNOS DUZINE IZRACUN CIJENE*/ 
$(".length").change(function(){
    var length_val = Math.ceil($(this).val() / 10) *10;
    var reg_price = parseFloat($(this).closest("li").find(".price").text().replace(',', '.')).toFixed(2);
    var disc_price = parseFloat($(this).closest("li").find(".discount-price").text().replace(',', '.')).toFixed(2);
    var reg_price_final = (reg_price* (length_val/100)).toFixed(2);
    var disc_price_final = (disc_price * (length_val/100)).toFixed(2);
    if(!$(this).val()){
                $(this).closest("li").find(".price").text(reg_price + " kn");
                $(this).closest("li").find(".discount-price").text(disc_price + " kn");
            }
    $(this).closest("li").find(".price").parent().append("<h4 style='font-weight: 500;'>" + reg_price_final + " kn" + "</h4>");
    $(this).closest("li").find(".price").hide();
    $(this).closest("li").find(".discount-price h5").parent().append("<h4 style='font-weight: 500;'>" + disc_price_final + " kn" + "</h4>");
    $(this).closest("li").find(".discount-price h5").hide();
        
    $(".discount-price h4").not(":last-child").remove();
    $(".cart-title h4").not(":last-child").remove();
});
//PROJEKT VERZIJA
/*
$(".height").change(function(){
    var length_val = Math.ceil($(this).val() / 10) *10;
    var reg_price = parseFloat($(this).closest("li").find(".pricez").text().replace(',', '.')).toFixed(2);
    var disc_price = parseFloat($(this).closest("li").find(".discount-price").text().replace(',', '.')).toFixed(2);
    var reg_price_final = (reg_price* (length_val/100)).toFixed(2);
    var disc_price_final = (disc_price * (length_val/100)).toFixed(2);
    if(!$(this).val()){
                $(this).closest("li").find(".pricez").text(reg_price + " kn");
                $(this).closest("li").find(".discount-price").text(disc_price + " kn");
            }
   
    $(this).closest("li").find(".pricez h5").parent().append("<h4 style='font-weight: 500;'>" + reg_price_final + " kn" + "</h4>");
    $(this).closest("li").find(".pricez h5").hide();
    $(this).closest("li").find(".discount-price h5").parent().append("<h4 style='font-weight: 500;'>" + disc_price_final + " kn" + "</h4>");
    $(this).closest("li").find(".discount-price h5").hide();
        
    $(".discount-price h4").not(":last-child").remove();
    $(".pricez h4").not(":last-child").remove();
});
*/


//CIJELA ROLA CIJENA 
$(".whole_foil").change(function(){
    var whole_quantity = $(this).closest("li").find(".foil_counter").val();
    console.log(whole_quantity);
});