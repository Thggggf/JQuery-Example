$(document).ready(function () {

    function closeModal() {
        $(".modal").slideUp(700)
        $("body").off("click", "span[aria-hidden='true']", closeModal)
        $(".modal").fadeTo(700, 0);
        $(".overlay").fadeTo(700, 0)
        $(".overlay").css("pointer-events", "none")
    }
    function modalOpen() {
        $(".modal").slideDown(1000)
        $(".modal").fadeTo(1000, 1);
        $(".overlay").fadeTo(1000, 1);
        $("span[aria-hidden='true']").on("click", closeModal)
        $(".overlay").css("pointer-events", "auto")

    }
    $("a[href = '#sheldure']").on("click", modalOpen)
    $(".main_btn").on("click", modalOpen)
    $(".main_btna").on("click", modalOpen)
})