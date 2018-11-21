export function functionArgs(){

	function getEmail(...args){
		console.log(args);
	}

	function setSomeDefaults(myString = "", asList = []){
		console.log(myString, asList);	
	}

	function configurationThing({monsterSize, boatCapacity}){
		console.log(monsterSize, boatCapacity);
	}
}