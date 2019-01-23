<template>
	<div>
		<h3 v-bind:class="{fontColor:isActive}" @click="changeActive()">(1)表格grid</h3>
		<Grid   :data-source='localDataSource'
			    :selectable="'multiple cell'"
	            :sortable="true"
	            :filterable="true"
	            v-on:change="onChange"
	            v-on:sort="onSorting"
	            v-on:filter="onFiltering"></Grid><!--data-source数据源-->
	    <h3>(2)grid的filter功能</h3>
	    <div  class="vue-app">
	    	<DataSource ref="datasource1"
	                      :type="'odata'"
	                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
	                      :page-size='5'
	                      :server-paging="true"
	                      :server-filtering="true"
	                      :schema-model-fields="dsSchemaFields">
	    	</DataSource>
	
		    <Grid :data-source-ref="'datasource1'"
	                :pageable="true"
	                :filterable-mode="'row'">
		        <GridColumn :field="'OrderID'"
		                           :width="180"
		                           :filterable-cell-show-operators="false"></GridColumn>
		        <GridColumn :field="'ShipName'"
		                           :title="'Ship Name'"
		                           :width="240"
		                           :filterable-cell-operator="'contains'"
		                           :filterable-cell-suggestion-operator="'contains'"></GridColumn>
		        <GridColumn :field="'Freight'"
		                           :width="180"
		                           :filterable-cell-operator="'gte'"></GridColumn>
		        <GridColumn :field="'OrderDate'"
		                           :title="'Order Date'"
		                           :format="'{0:MM/dd/yyyy}'"
		                           :width="180"></GridColumn>
		    </Grid>
	    </div>
	    <h3>grid的edit功能</h3>
	    <div id="vueapp" class="vue-app">
	    	<DataSource ref="datasource2"
	    		        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
	    		        :transport-read-data-type="'jsonp'"
	    		        :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
	    		        :transport-update-data-type="'jsonp'"
	    		        :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
                        :transport-destroy-data-type="'jsonp'"
                        :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"
                        :transport-create-data-type="'jsonp'"
                        :transport-parameter-map="parameterMap"
						:schema-model-id="'ProductID'"
						:schema-model-fields="schemaModelFields"
						:batch="true"
						:page-size='10'>
	    	</DataSource>
	    	<Grid :data-source-ref="'datasource2'"
	    		  :navigatable="true"
	    		  :pageable="true"
	    		  :editable="true"
	    		  :toolbar="['create','save','cancel']">
	    		<GridColumn :field="'ProductName'"
	    			        :width="200"></GridColumn>
	    		<GridColumn :field="'UnitPrice'"
	    			        :title="'Unit Price'"
	    			        :width="120"
	    			        :format="'{0:c}'"></GridColumn>
	    		<GridColumn :field="'UnitsInStock'"
	    			        :title="'Units In Stock'"
	    			        :width="120"></GridColumn>
	    		<GridColumn :field="'Discontinued'"
	    			        :width="120"></GridColumn>
	    		<GridColumn :command="['destory']"
	    			        :title="'&nbsp;'"
	    			        :width="100"></GridColumn>

	    	</Grid>
		</div>
	</div>
</template>

<script>
	import {Grid,GridInstaller,GridColumn} from '@progress/kendo-grid-vue-wrapper';
	import {DataSource} from '@progress/kendo-datasource-vue-wrapper';
	export default{
		components:{
			Grid,
			GridColumn,
			DataSource
		},
		data(){
			return{
				isActive:false,
				//表格数据源
				localDataSource: [{
	                "ProductID": 1,
	                "ProductName": "Chai",
	                "UnitPrice": 18,
	                "UnitsInStock": 39,
	                "Discontinued": false,
	            },
	            {
	                "ProductID": 2,
	                "ProductName": "Chang",
	                "UnitPrice": 17,
	                "UnitsInStock": 40,
	                "Discontinued": false,
	            },
	            {
	                "ProductID": 3,
	                "ProductName": "Aniseed Syrup",
	                "UnitPrice": 10,
	                "UnitsInStock": 13,
	                "Discontinued": false,
	            }],
	            dsSchemaFields: {
	                OrderID: { type: "number" },
	                Freight: { type: "number" },
	                ShipName: { type: "string" },
	                OrderDate: { type: "date" },
	                ShipCity: { type: "string" }
	            },
	            schemaModelFields: {
	                ProductID: { editable: false, nullable: true },
	                ProductName: { validation: { required: true } },
	                UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
	                Discontinued: { type: 'boolean' },
	                UnitsInStock: { type: 'number', validation: { min: 0, required: true } }
	            }
			}
		},
		method:{
			changeActive(){
				this.isActive=!this.isActive
			},
			changeActive(){
				this.isActive=!this.isActive
			},
			onChange(ev) {
	            var selected = $.map(ev.sender.select(), function(item) {
	                return $(item).text();
	            });
	            console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
	       },
	        onSorting(ev) {
	            console.log("Sorting on field: " + ev.sort.field + ", direction:" + (ev.sort.dir || "none"));
	        },
	        onFiltering(ev) {
	            console.log("Filter on " + kendo.stringify(ev.filter));
	        },
	        onGroupCollapse(ev) {
	            console.log("The group to be collapsed: " + kendo.stringify(ev.group));
	        },

			parameterMap(options, operation) {
	            if (operation !== 'read' && options.models) {
	                return { models: kendo.stringify(options.models) }
	            }
	        }

		}
	}
</script>

<style>
	.fontColor{
		color: #ee2c2c;
	}
	.vue-app{
		width: 800px;
	}
</style>