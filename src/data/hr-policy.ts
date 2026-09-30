export type PolicySection = {
  section: string;
  category: string;
  topic: string;
  text: string;
  rule: string;
  form: string;
  contact: string;
};

export const HR_POLICY: PolicySection[] = [
  {
    "section": "AL-3.1",
    "category": "Annual Leave",
    "topic": "Entitlement",
    "text": "Employees are entitled to 18 paid annual leave days per calendar year.",
    "rule": "18 paid days per calendar year.",
    "form": "Annual Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "AL-3.2",
    "category": "Annual Leave",
    "topic": "Application",
    "text": "Annual leave must be requested through the HR portal using the Annual Leave Request Form.",
    "rule": "Submit through the HR portal.",
    "form": "Annual Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "AL-3.3",
    "category": "Annual Leave",
    "topic": "Notice",
    "text": "Employees should normally submit annual leave requests at least 3 working days before the intended leave date.",
    "rule": "3 working days' advance notice.",
    "form": "Annual Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "AL-3.4",
    "category": "Annual Leave",
    "topic": "Half-day Leave",
    "text": "Annual leave may be taken in half-day increments.",
    "rule": "Minimum increment: 0.5 day.",
    "form": "Annual Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "AL-3.5",
    "category": "Annual Leave",
    "topic": "Carry Forward",
    "text": "Up to 5 unused annual leave days may be carried forward to the following calendar year. Carry-forward days expire after the following calendar year.",
    "rule": "Maximum carry-forward: 5 days.",
    "form": "None",
    "contact": "HR Operations"
  },
  {
    "section": "AL-3.6",
    "category": "Annual Leave",
    "topic": "Encashment",
    "text": "Eligible unused annual leave may be encashed at separation, subject to company policy and applicable rules.",
    "rule": "Eligibility is determined during separation processing.",
    "form": "Separation/Leave Encashment Form",
    "contact": "HR Operations"
  },
  {
    "section": "AL-3.7",
    "category": "Annual Leave",
    "topic": "Approval",
    "text": "A manager may decline or request a different leave date when there is a genuine operational requirement.",
    "rule": "Manager approval is required.",
    "form": "Annual Leave Request Form",
    "contact": "Reporting Manager / HR Operations"
  },
  {
    "section": "AL-3.8",
    "category": "Annual Leave",
    "topic": "Separation",
    "text": "Eligible unused annual leave is handled during separation according to the leave encashment policy.",
    "rule": "Final treatment is determined during separation processing.",
    "form": "Separation/Leave Encashment Form",
    "contact": "HR Operations"
  },
  {
    "section": "SL-4.1",
    "category": "Sick Leave",
    "topic": "Entitlement",
    "text": "Employees receive 10 paid sick leave days per calendar year.",
    "rule": "10 paid days per calendar year.",
    "form": "Sick Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "SL-4.2",
    "category": "Sick Leave",
    "topic": "Application",
    "text": "Sick leave should be recorded through the HR portal as soon as reasonably possible.",
    "rule": "Notify the company and record the absence in the HR portal.",
    "form": "Sick Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "SL-4.3",
    "category": "Sick Leave",
    "topic": "Medical Certificate",
    "text": "A medical certificate is required when sick leave exceeds 2 consecutive working days.",
    "rule": "Medical certificate required after 2 consecutive working days.",
    "form": "Sick Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "SL-4.4",
    "category": "Sick Leave",
    "topic": "Unexpected Illness",
    "text": "If an employee becomes suddenly ill and cannot apply beforehand, they should notify their manager as soon as reasonably possible and record the sick leave when able.",
    "rule": "Prompt notification is required where practical.",
    "form": "Sick Leave Request Form",
    "contact": "Reporting Manager / HR Operations"
  },
  {
    "section": "SL-4.5",
    "category": "Sick Leave",
    "topic": "Half-day Leave",
    "text": "Sick leave may be taken in half-day increments.",
    "rule": "Minimum increment: 0.5 day.",
    "form": "Sick Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "SL-4.6",
    "category": "Sick Leave",
    "topic": "Carry Forward",
    "text": "Unused sick leave does not carry forward to the next calendar year.",
    "rule": "No carry-forward.",
    "form": "None",
    "contact": "HR Operations"
  },
  {
    "section": "UL-5.1",
    "category": "Unpaid Leave",
    "topic": "Eligibility",
    "text": "Unpaid leave may be requested when paid leave has been exhausted or for a genuine personal reason, subject to approval.",
    "rule": "Paid leave should generally be exhausted first, unless HR approves otherwise.",
    "form": "Unpaid Leave Request Form",
    "contact": "Reporting Manager / HR Operations"
  },
  {
    "section": "UL-5.2",
    "category": "Unpaid Leave",
    "topic": "Application",
    "text": "Employees must submit an Unpaid Leave Request Form through the HR portal and obtain the required manager and HR approvals.",
    "rule": "Manager and HR approval required.",
    "form": "Unpaid Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "UL-5.3",
    "category": "Unpaid Leave",
    "topic": "Approval",
    "text": "Approval depends on the reason, operational impact, available paid leave, and manager and HR review.",
    "rule": "Approval is case-by-case.",
    "form": "Unpaid Leave Request Form",
    "contact": "Reporting Manager / HR Operations"
  },
  {
    "section": "UL-5.4",
    "category": "Unpaid Leave",
    "topic": "Salary Impact",
    "text": "Salary is reduced in proportion to approved unpaid leave days.",
    "rule": "Unpaid days are unpaid and reduce salary accordingly.",
    "form": "Unpaid Leave Request Form",
    "contact": "Payroll / HR Operations"
  },
  {
    "section": "PL-6.1",
    "category": "Parental Leave",
    "topic": "Entitlement",
    "text": "Eligible employees may receive 16 weeks of paid parental leave.",
    "rule": "16 weeks paid parental leave.",
    "form": "Parental Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "PL-6.2",
    "category": "Parental Leave",
    "topic": "Eligibility",
    "text": "Employees who have completed 6 months of continuous employment are eligible following birth, adoption, or placement of a child.",
    "rule": "Minimum service: 6 continuous months.",
    "form": "Parental Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "PL-6.3",
    "category": "Parental Leave",
    "topic": "Notice",
    "text": "Employees should normally submit parental leave requests 30 days in advance where reasonably possible.",
    "rule": "30 days' advance notice where reasonably possible.",
    "form": "Parental Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "PL-6.4",
    "category": "Parental Leave",
    "topic": "Documentation",
    "text": "HR may request reasonable supporting documentation relating to birth, adoption, or placement.",
    "rule": "Supporting documentation may be required.",
    "form": "Parental Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "PL-6.5",
    "category": "Parental Leave",
    "topic": "Splitting Leave",
    "text": "Parental leave may be taken continuously or in up to two blocks, subject to HR approval.",
    "rule": "Maximum: two blocks.",
    "form": "Parental Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "PL-6.6",
    "category": "Parental Leave",
    "topic": "Paid Status",
    "text": "Eligible parental leave is paid for up to 16 weeks under company policy.",
    "rule": "Paid for up to 16 weeks.",
    "form": "Parental Leave Request Form",
    "contact": "HR Operations"
  },
  {
    "section": "GL-7.1",
    "category": "General Leave",
    "topic": "Combining Leave",
    "text": "Different leave types may be combined where each leave type's eligibility and approval requirements are met.",
    "rule": "Each leave type must independently satisfy its requirements.",
    "form": "Relevant Leave Form(s)",
    "contact": "HR Operations"
  },
  {
    "section": "GL-7.2",
    "category": "General Leave",
    "topic": "Unauthorized Absence",
    "text": "Unapproved absence may be treated as unauthorized absence and may affect attendance records and pay, subject to company procedures.",
    "rule": "Approval should be obtained before leave except in genuine emergencies.",
    "form": "Leave Regularization Form",
    "contact": "Reporting Manager / HR Operations"
  },
  {
    "section": "GL-7.3",
    "category": "General Leave",
    "topic": "Leave Balance",
    "text": "Employees can view their current leave balance in the HR portal.",
    "rule": "Check the HR portal for the current balance.",
    "form": "HR Portal",
    "contact": "HR Operations"
  },
  {
    "section": "GL-7.4",
    "category": "General Leave",
    "topic": "Support",
    "text": "Employees should contact their reporting manager for approval questions and HR Operations for policy or system questions.",
    "rule": "Manager: approval. HR: policy/system support.",
    "form": "HR Helpdesk",
    "contact": "Reporting Manager / HR Operations"
  },
  {
    "section": "GL-7.5",
    "category": "General Leave",
    "topic": "Urgent Leave",
    "text": "For urgent leave, employees should notify their reporting manager as soon as possible and submit the appropriate leave request through the HR portal when practical.",
    "rule": "Prompt manager notification is expected.",
    "form": "Relevant Leave Form",
    "contact": "Reporting Manager / HR Operations"
  },
  {
    "section": "BL-8.1",
    "category": "Bereavement Leave",
    "topic": "Entitlement",
    "text": "Employees may receive up to 5 paid working days of bereavement leave following the death of an immediate family member.",
    "rule": "Up to 5 paid working days.",
    "form": "Bereavement Leave Form",
    "contact": "HR Operations"
  },
  {
    "section": "BL-8.2",
    "category": "Bereavement Leave",
    "topic": "Eligibility",
    "text": "Bereavement leave applies to the death of an immediate family member, including a spouse, parent, child, sibling, or legal guardian.",
    "rule": "Immediate-family relationship must apply.",
    "form": "Bereavement Leave Form",
    "contact": "HR Operations"
  },
  {
    "section": "BL-8.3",
    "category": "Bereavement Leave",
    "topic": "Application",
    "text": "Employees should notify their manager as soon as reasonably possible and submit the Bereavement Leave Form when practical.",
    "rule": "Prompt notification; documentation may be requested.",
    "form": "Bereavement Leave Form",
    "contact": "Reporting Manager / HR Operations"
  }
];

export const POLICY_CONTEXT = HR_POLICY.map(
  (p) =>
    `[${p.section}] ${p.category} > ${p.topic}\nPolicy: ${p.text}\nKey rule: ${p.rule}\nForm/Portal: ${p.form}\nContact: ${p.contact}`,
).join("\n\n");
