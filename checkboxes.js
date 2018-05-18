$('document').ready(function(){


var lastCheckboxClickedIndex = undefined;
// Find all checkboxes (in case they were hidden before)
$('input:checkbox').click(function(e){
    var checkBox = $('input:checkbox:visible');
    var checkBoxCount = checkBox.length;
	
	// Get the index of the checkbox
	// if user clicks on checkbox without shift-key
	// (that's the first checkbox to start from)
    if(!e.shiftKey){
	   lastCheckboxClickedIndex = checkBox.index(this);
    }
	// If user holds shift-key
    else if(e.shiftKey){
        // Index of the last checkbox that was clicked on
        var toCheckboxIndex = checkBox.index(this);
        // If last checkbox was checked
		if(checkBox.get(lastCheckboxClickedIndex).checked == true){
            for(i=lastCheckboxClickedIndex; i <= toCheckboxIndex; i++){
                var checkb = checkBox.get(i);
                checkb.checked = true;
				// Custom code for special pages
                $(checkb).closest("tr").find("input[name$='[salvestada]']").val("t");
            }
        }
        else{
            // If checkbox was unchecked
            for(i=lastCheckboxClickedIndex; i <= toCheckboxIndex; i++){
                var checkb = checkBox.get(i);
                checkb.checked = false;
                $(checkb).closest("tr").find("input[name$='[salvestada]']").val("t");
            }
        }
    }
})

})