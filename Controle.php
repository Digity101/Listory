<html>
<div id="Wrapper">
	<script>
		$( document ).ready(function() {
			var LoginI = JSON.parse(localStorage.getItem('LoginI'));
			console.log(LoginI.SWeekN);
			document.getElementById("startweek").value = LoginI.SWeekN;
			document.getElementById("startweek").value = LoginI.LengtePer;
		});
	</script>

	<form>
		Startweek periode als weeknummer <input type=number name="startweek" value="" id="startweek"><br>
		Lengte periode als getal <input type=number name="Perweken" value="" id="startweek">
	</form>
</div><!--EndContent-->	
</html>
<?php
	ob_clean();
?>