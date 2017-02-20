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
            $(this).find(".placeholder").remove();
            $("<li></li>").text(ui.draggable.text()).appendTo(this);
        }
    }).sortable({
        items: "li:not(.placeholder)",
        sort: function() {
            $(this).removeClass("ui-state-default");
            $("ul, li").disableSelection();
        }
    });
    // Löschen der Module
    $("#trash").droppable({
        accept: "#list_testdata li",
        hoverClass: 'hovered',
        drop: function(event, ui) {
            entfernen(ui.draggable);
        }
    });
});


// Funktion Löschen
function entfernen($item) {
    $item.remove();
}
