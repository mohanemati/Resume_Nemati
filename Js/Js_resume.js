function ShowHideSkills(){
    if(document.getElementById('SkillsDiv').style.display != 'none'){
        
        document.getElementById('SkillsDiv').style.display = 'none';
        document.getElementById('SkillsImg').src = "img/down-arrow.png"
        }
        else{
            
        document.getElementById('SkillsDiv').style.display = 'block';
        document.getElementById('SkillsImg').src = "img/up-arrow.png"
        }
}

function ShowHideWorks(){
    if(document.getElementById('WorksDiv').style.display != 'none'){
        
    document.getElementById('WorksDiv').style.display = 'none';
    document.getElementById('WorksImg').src = "img/down-arrow.png"
    }
    else{
        
    document.getElementById('WorksDiv').style.display = 'block';
    document.getElementById('WorksImg').src = "img/up-arrow.png"
    }
}
function ShowHideEducation(){
    if(document.getElementById('EducationDiv').style.display != 'none'){
        
        document.getElementById('EducationDiv').style.display = 'none';
        document.getElementById('EducationImg').src = "img/down-arrow.png"
        }
        else{
            
        document.getElementById('EducationDiv').style.display = 'block';
        document.getElementById('EducationImg').src = "img/up-arrow.png"
        }
}

function ShowHideLanguage(){
    if(document.getElementById('LanguageDiv').style.display != 'none'){
        
        document.getElementById('LanguageDiv').style.display = 'none';
        document.getElementById('LanguageImg').src = "img/down-arrow.png"
        }
        else{
            
        document.getElementById('LanguageDiv').style.display = 'block';
        document.getElementById('LanguageImg').src = "img/up-arrow.png"
        }
}