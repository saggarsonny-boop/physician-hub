export async function onRequest(context) {
  const papers = [
    {
      "id": "6941378",
      "title": "The $812 Billion Illusion: A Law and Economics Case for Replacing PDF with Block-Semantic Trust Architectures",
      "meta": "SSRN Abstract 6941378 (Distributed)",
      "desc": "Examines the systemic legal and economic costs of relying on static PDF files and proposes block-semantic trust standards to enable cryptographically verifiable electronic documents."
    },
    {
      "id": "6916858",
      "title": "The Desistance Presumption: The Emotional Stability Index (ESI) as a Clinical Tool for Federal Supervised Release Reform",
      "meta": "SSRN Abstract 6916858 (Distributed)",
      "desc": "Presents a clinical framework and evaluation index to assess desistance, offering probation officers and judges a structured clinical alternative to supervise releasees under 18 U.S.C. 3583."
    },
    {
      "id": "6845420",
      "title": "No One Can Own the Language of Medicine: The Legal and Economic Case for an Open, AI-native Standard for Coding Medical Interventions",
      "meta": "SSRN Abstract 6845420 (Distributed)",
      "desc": "Examines the proprietary coding systems that dominate medical billing and proposes an open, AI-native coding standard to reduce administrative complexity and billing errors."
    },
    {
      "id": "6810167",
      "title": "Automaticity: When Legal Systems Fire Without Thinking",
      "meta": "SSRN Abstract 6810167 (Distributed)",
      "desc": "Analyzes the risk of automated legal actions in modern case-management systems, warning of systemic due process failures when algorithms bypass human review."
    },
    {
      "id": "6561881",
      "title": "Knowingly and Willfully: How Federal Healthcare Fraud Enforcement Abandoned Its Own Statutory Standard",
      "meta": "SSRN Abstract 6561881 (Distributed)",
      "desc": "Interprets how federal enforcement agencies have effectively lowered the intent standard in healthcare billing audits, criminalizing administrative mistakes."
    },
    {
      "id": "6553338",
      "title": "Restoring the Question: A Framework for Fairness, Proportionality, and Individualized Review in Private Professional Certification After Loper Bright",
      "meta": "SSRN Abstract 6553338 (Distributed)",
      "desc": "Explores how the Supreme Court's Loper Bright decision restricts the authority of private credentialing boards to strip professional licenses without providing individualized review."
    },
    {
      "id": "6367441",
      "title": "Ethical Triage: A Physician's Analysis of Legal Risk in Ambiguous Systems",
      "meta": "SSRN Abstract 6367441 (Approved)",
      "desc": "Applies emergency medicine triage methodologies to system-level legal risk management, offering a framework for physicians navigating complex regulatory spaces."
    },
    {
      "id": "6364979",
      "title": "Supervised Release and the Clarity Principle: Statutory Authority, Probation Officer Roles, and the Supervision Relationship after Loper Bright",
      "meta": "SSRN Abstract 6364979 (Approved)",
      "desc": "Analyzes the statutory limits of supervised release, advocating for a return to probation guidelines and clear judicial directives under 18 U.S.C. 3583."
    },
    {
      "id": "6363438",
      "title": "Reading § 3583(E): How Judicial Gloss Displaced the Statutory Standard for Supervised Release Modification and Termination",
      "meta": "SSRN Abstract 6363438 (Approved)",
      "desc": "Examines how judicial interpretations of 18 U.S.C. 3583(e) have restricted defendants' ability to obtain early termination of supervised release."
    },
    {
      "id": "6363418",
      "title": "When Intent Disappears: How Federal Health Care Enforcement Criminalizes Administrative Conduct",
      "meta": "SSRN Abstract 6363418 (Distributed)",
      "desc": "A deep dive into compliance audits, demonstrating how administrative mistakes have been transformed into criminal liabilities for medical professionals."
    }
  ];

  return new Response(JSON.stringify(papers), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
