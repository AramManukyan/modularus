exampleApp.reports

.filter('datagridItem', function($log, $filter) {
	return function(itemValue, itemType) {

		//  If item type is date, then show in date friendly format
		if(itemType == "date") {
			return $filter("date")(new Date(itemValue), "dd/MM/yyyy");
		}
		// Else just show input
		else {
			return itemValue;
		}

	};
})


.filter('datagridPaginate', function($log, $filter) {
	return function(rows, activePage, itemsPerPage) {

		// $log.log(rows);

		return rows.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

	};
})

;
