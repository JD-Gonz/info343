
//creates the states inside of an options bar to chose from
function statesView(entries) {
    var option;
    var idx;
    var state;
    var select = $('select[name="state"]');
    for(idx = 0; idx < usStates.length; ++idx) {
            state = usStates[idx];
            option = $(document.createElement('option'));
            option.attr('value', state.abbreviation);
            option.html(state.name);
            select.append(option);
    }
}
