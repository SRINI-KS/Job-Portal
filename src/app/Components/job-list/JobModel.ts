export interface JobModel{
    id:number
    userId:string
    jobTitle:string;
    jobDescription:string;

    jobCategory:string;

    jobType:string;
    jobPostDate:Date;

    salaryType:string;

    minSalary:number;

    maxSalary:number;

    skills:string;

    qualifications:string;

    experience:string;

    companyName:string;

    companyContactPerson:string;

    contactEmail:string;
    contactNumber:string;

    companyAddress:string;

    country:string;
    state:string;
    pincode:number;



}