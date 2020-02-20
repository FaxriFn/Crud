$(document).ready(function () {
    //  Modal Hide
    $('.model-element').hide();
    // end
    // Modal Show
    $(document).on("click",'#edit_btn', function () {
        $('.model-element').show();
    })
    // end
    // Button Cancel
    getCancel()
    function getCancel() {
        $(document).on("click", ".cancel",function () {
            $(".model-element").hide(2000);
                $('.input_text').val('');
                $('.input_textTwo').val('');
                $('.input_salary').val('');
                $('.input_email').val('');
        });
    }
    // end
    // Delete Tr
    getDelete()
    function getDelete() {
        $(document).on("click",'.delete', function () {
            $(this).parent().parent().remove();
        })}
    // end
    // Save Button
    getSave()
  function getSave() {
    $('.savebtn').on("click", function (e) {
        // Form Control
        e.preventDefault();
        if ($('.input_text').val().length < 1) {
            $('.input_text').next().text("Please input name");
            return;
        } else {
            $('.input_text').next().text("");
        }
        if ($('.input_textTwo').val().length < 1) {
            $('.input_textTwo').next().text("Please input user country");
            return;
        } else {
            $('.input_textTwo').next().text("");
        }
        if ($('.input_salary').val().length < 1) {
            $('.input_salary').next().text("Please input salary");
            return;
        } else {
            $('.input_salary').next().text("");
        }
        if ($('.input_email').val().indexOf('@') === -1) {
            $('.input_email').next().text("Please input valid email");
            return;
        } else {
            $('.input_email').next().text("");
        }
// New -Tr -Append- Table
        $('.table').append(`
        <tr class="tr_total">
        <td>${$('.input_text').val()}</td>
        <td>${$('.input_textTwo').val()}</td>
        <td>${$('.input_salary').val()}</td>
        <td>@${$('.input_email').val()}</td>
        <td><button class="edit1 btn btn-primary">Edit</button></td>
        <td><button class="delete btn btn-danger">Delete</button></td></tr>`)
        $('.input_text').val('');
        $('.input_textTwo').val('');
        $('.input_salary').val('');
        $('.input_email').val('');
        $('.model-element').hide();
        // end
    });
  }
    // Total Sum
    getTotal()
    function getTotal() {
        let total = 0;
        $('tbody tr').each(function (index, element) {
            let salaryNumber = parseInt($(element).find("td:nth-child(3)").text());
            total = total + salaryNumber;
            $('#total_num2').html(total);
        });
    }
    // Edit Start
    getEdit()
    function getEdit() {
        $(document).on('click','.edit1', function () {
            $('.model-element').show();    
 $('.input_text').val($(this).closest('tr').find("td:nth-child(1)").html());
 $('.input_textTwo').val($(this).closest('tr').find("td:nth-child(2)").html());
 $('.input_salary').val($(this).closest('tr').find("td:nth-child(3)").html());
 $('.input_email').val($(this).closest('tr').find("td:nth-child(4)").html());   
        });
    }
    // End
});