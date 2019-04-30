let applicants = [{ 
    name: "Noah Yasskin",
    email: "yasskin@icloud.com",
    phone: "541 678-0529",
    level: "Mid", 
    yearsExp: 3, 
    education: ["BA", "MA", "ABD", "Epicodus"], 
    abilities: ["prototypes", "researches", "collaborates", "codes"], 
    skills: ["HTML5", "JavaScript", "CSS3", "SASS", "Git", "jQuery"], 
    bundler: "Webpack", 
    canWorkPdx: true,
    canLift: 125
  }];
  
  let filters = {
    level: ["Mid", "Junior", "Jr"],
    yearsExp: [1],
    education: ["BA", "BS"],
    abilities: ["prototypes", "researches", "collaborates"],
    skills: ["HTML5", "JavaScript", "CSS3", "SASS", "Git"],
    bundler: ["Webpack", "Parcel", "Yarn"],
    canWorkPdx: [true],
    canLift: [25]
  };
  
  function applicantFilter(applicants, filters) {
    const filterKeys = Object.keys(filters);  
    return applicants.filter((applicant) => {   
      return filterKeys.every(key => {      
        if (key == "education"){
          return filters[key].some(function(val){
            return applicant[key].indexOf(val) >=0;
          });
        } else if (key == "abilities" || key == "skills") {
          return filters[key].every(function(value) {
            return (applicant[key].indexOf(value) >=0);
          });
        } else if (key == "yearsExp" || key == "canLift") {
          return (applicant[key] >= filters[key]) ? true : false;     
        } else {
        return filters[key].includes(applicant[key]);                
        }      
      });        
    });  
  }
  
  var interviews = applicantFilter(applicants, filters);
  
  interviews.forEach(function(applicant){ 
   let msg = `Please contact ${applicant.name} for an interview at ${applicant.email} or ${applicant.phone}.`;
   console.info(msg);
  });
  
  /* expected
  
    please contact noah for an interview at 541 678-0529 or yasskin@icloud.com 
  
  */  