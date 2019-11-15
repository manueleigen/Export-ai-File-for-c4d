#target Illustrator
quickSaveAI(1);
function quickSaveAI(fileNameCount){



	if ( app.documents.length > 0 ){ SaveFunction(fileNameCount);}



	function SaveFunction(fileNameCount){
		var QS_Path = app.activeDocument.fullName.toString();
		
		var QS_Name = app.activeDocument.name.toString();
		
		QS_Path = QS_Path.split(QS_Name)[0];
		
		var QS_Name = "c4d_export";
		
		//Create a Folder
		var destFolder = Folder(QS_Path);
		//Check if it exist, if not create it.
		if(!destFolder.exists) destFolder.create();
		
		//CheckFileName
		
		if(QS_Path == 0 ){QS_Path = "~/Desktop/";}
		
		

		//Check the String.length of the fileNumber
		var fileCount = 0;
		var fileNameCountLength = fileNameCount.toString().length; 
	
		if(fileNameCountLength == 1 ){fileCount = "00" + fileNameCount;}
 		if(fileNameCountLength == 2 ){fileCount = "0" + fileNameCount;}
 		

		//Set up FilePath + FileName	
		var dest = QS_Path + "/" + QS_Name + "_" + fileCount;
		
		

		//Check if FileName exists
		if(File(dest + ".ai").exists) {
			fileNameCount ++;
			quickSaveAI(fileNameCount);
		}
 		else{
			var saveOptions = new IllustratorSaveOptions();
			var ai3Doc = new File(dest);
			saveOptions.compatibility = Compatibility.ILLUSTRATOR8;
			saveOptions.flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;
			app.activeDocument.saveAs( ai3Doc, saveOptions );
						

		}

	}

}

