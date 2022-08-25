$("#button_delete_users").on("click", function() {
    $(".delete_user_box").fadeTo("fast", 1).css("display", "inline-block");
  });

$(".delete_user_box").on("click", function() {
    if (confirm("Sigurno želite obrisati ovog korisnika?")) {
        $(this).parent().remove();
        $("#button_edit_users").css({"background-color":"#fac212", "cursor":"pointer"});
    return true;
}
});

$(".delete_user_box").on("click", function() {
if($(".list-of-users").children().length === 1){
  $("h1, #button_edit_users ,.dealer-product-container, .breadcrumb-section, .list-of-users, #button_delete_users").hide();
  $(".empty_client_list").fadeIn();
}
});