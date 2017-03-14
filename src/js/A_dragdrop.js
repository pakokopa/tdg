$(function() {
    // Drag-Elemente erstellen
    $("#list_module li").draggable({
        appendTo: "body",
        helper: "clone",
        // Element am Cursor positionieren
        cursorAt: {
            cursor: "move",
            top: 5,
            left: 0
        }
    });

    // Testdata als Dropzone und Liste sortierbar machen
    $("#list_testdata ol").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: ":not(.ui-sortable-helper)",
        drop: function(event, ui) {
            var li_val = ui.draggable.text();
            $(this).find(".placeholder").remove();
            $(this).append('<div class="list_testdata_div"><input type="text" value="Bezeichnung"><li>' + li_val + '</li></div>');
            /*
            $("<li></li>").text(ui.draggable.text()).appendTo(this);
            $(this).append('<input type="text" value="bla">');
            */
        }
    }).sortable({
        items: "div:not(.placeholder)",
        sort: function() {
            $(this).removeClass("ui-state-default");
            $("ul, li").disableSelection();
        }
    });


    // Löschen der Module
    $("#trash").droppable({
        accept: "#list_testdata div",
        hoverClass: 'hovered',
        drop: function(event, ui) {
            removeelement(ui.draggable);
        }
    });
});


// Funktion Löschen
function removeelement($item) {
    $item.remove();
}
