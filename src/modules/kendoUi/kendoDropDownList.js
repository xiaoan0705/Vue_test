import 'kendoUiStyles/kendo.common.min.css'
import 'kendoUiStyles/kendo.bootstrap.min.css'
import kendoDropDownList from 'kendoUi/kendo.dropdownlist.min'
import $ from 'jquery'

function init(el){
  $(el).kendoDropDownList();
}

export default {
  init
}