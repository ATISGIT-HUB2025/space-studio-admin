$(document).ready(function() {
    $(".datatable").DataTable({
        columns: [{
            orderable: !1
        }, {
            orderable: !0
        }, {
            orderable: !0
        }, {
            orderable: !0
        }, {
            orderable: !0
        }, {
            orderable: !0
        }, {
            orderable: !1
        }],
        order: [
            [1, "asc"]
        ],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }), $(".dataTables_length select").addClass("form-select form-select-sm")
});