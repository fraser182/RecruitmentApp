package com.example.codeclan.recruitment.models;

public class Job {

    private Long id;
    private String companyName;
    private String contactEmail;
    private String contactPhoneNumber;
    private String contactName;
    private String title;
    private String salary;
    private String location;
    private String applicationUrl;
    private String companyCulture;
    private String techStack;
    private String yourTeam;
    private String responsibilities;
    private String requirements;
    private String role;
    private String skillLevel;
    private String jobType;

    public Job(String companyName, String contactEmail, String contactPhoneNumber, String contactName, String title, String salary, String location, String applicationUrl, String companyCulture, String techStack, String yourTeam, String responsibilities, String requirements, String role, String skillLevel, String jobType) {
        this.companyName = companyName;
        this.contactEmail = contactEmail;
        this.contactPhoneNumber = contactPhoneNumber;
        this.contactName = contactName;
        this.title = title;
        this.salary = salary;
        this.location = location;
        this.applicationUrl = applicationUrl;
        this.companyCulture = companyCulture;
        this.techStack = techStack;
        this.yourTeam = yourTeam;
        this.responsibilities = responsibilities;
        this.requirements = requirements;
        this.role = role;
        this.skillLevel = skillLevel;
        this.jobType = jobType;
    }

    public Job() {
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getContactPhoneNumber() {
        return contactPhoneNumber;
    }

    public void setContactPhoneNumber(String contactPhoneNumber) {
        this.contactPhoneNumber = contactPhoneNumber;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getApplicationUrl() {
        return applicationUrl;
    }

    public void setApplicationUrl(String applicationUrl) {
        this.applicationUrl = applicationUrl;
    }

    public String getCompanyCulture() {
        return companyCulture;
    }

    public void setCompanyCulture(String companyCulture) {
        this.companyCulture = companyCulture;
    }

    public String getTechStack() {
        return techStack;
    }

    public void setTechStack(String techStack) {
        this.techStack = techStack;
    }

    public String getYourTeam() {
        return yourTeam;
    }

    public void setYourTeam(String yourTeam) {
        this.yourTeam = yourTeam;
    }

    public String getResponsibilities() {
        return responsibilities;
    }

    public void setResponsibilities(String responsibilities) {
        this.responsibilities = responsibilities;
    }

    public String getRequirements() {
        return requirements;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getSkillLevel() {
        return skillLevel;
    }

    public void setSkillLevel(String skillLevel) {
        this.skillLevel = skillLevel;
    }

    public String getJobType() {
        return jobType;
    }

    public void setJobType(String jobType) {
        this.jobType = jobType;
    }
}
