export interface IAadhaarTypes {
  aadhaarNumber: string;   
  name: string;            
  dob: string;            
  gender: "Male" | "Female" | "Transgender" | "Other";
  address: string;        
  pincode?: string; 
}
export interface CustomError extends Error {
  statusCode?: number;
}