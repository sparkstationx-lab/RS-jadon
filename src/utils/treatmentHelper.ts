import { Product } from '../types';

export interface TreatmentInfo {
  targetConditions: string;
  clinicalSummary: string;
  keyIndications: string[];
  therapeuticClass: string;
  administrationRoute: string;
  prescriptionStatus: string;
}

/**
 * Returns structured treatment info for any product in the catalog based on its active API,
 * description, category, and form, or uses explicit product metadata if provided.
 */
export function getTreatmentInfo(product: Product): TreatmentInfo {
  const descUpper = product.description.toUpperCase();
  const nameUpper = product.brandName.toUpperCase();
  const catUpper = product.category.toUpperCase();
  const formUpper = product.form.toUpperCase();

  // Route of administration derived from form
  let route = 'Intravenous Infusion / Clinical Admin';
  if (formUpper.includes('TABLET') || formUpper.includes('CAPSULE')) {
    route = 'Oral Administration (Enteral)';
  } else if (formUpper.includes('INJECTION') || formUpper.includes('VIAL') || formUpper.includes('AMPOULE')) {
    route = 'Parenteral Injection / Infusion';
  } else if (formUpper.includes('BOTTLE') || formUpper.includes('INFUSION')) {
    route = 'Intravenous Infusion';
  } else if (formUpper.includes('SYRUP') || formUpper.includes('LIQUID')) {
    route = 'Oral Liquid Suspension';
  } else if (formUpper.includes('OINTMENT') || formUpper.includes('CREAM') || formUpper.includes('GEL')) {
    route = 'Topical Application';
  }

  // 1. Acyclovir
  if (descUpper.includes('ACYCLOVIR') || nameUpper.includes('SENOVIR')) {
    return {
      targetConditions: 'Herpes Simplex Virus (HSV 1 & 2), Varicella-Zoster (Shingles) & Viral Encephalitis',
      clinicalSummary:
        'Indicated for the treatment of severe mucocutaneous herpes simplex virus infections, herpes zoster (shingles) in immunocompromised patients, and acute viral encephalitis. Acts by selectively inhibiting viral DNA polymerase to halt viral replication.',
      keyIndications: [
        'Severe Mucocutaneous Herpes Simplex',
        'Herpes Zoster (Shingles)',
        'Varicella-Zoster (Chickenpox)',
        'Acute Viral Encephalitis',
      ],
      therapeuticClass: 'Antiviral Agent / Nucleoside Analogue',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Hospital Grade',
    };
  }

  // 2. Human Normal Albumin
  if (descUpper.includes('ALBUMIN') || nameUpper.includes('SENUMIN')) {
    return {
      targetConditions: 'Severe Hypoalbuminemia, Hypovolemic Shock, Extensive Burns & Cirrhotic Ascites',
      clinicalSummary:
        'Indicated for restoration and maintenance of circulating blood volume where plasma volume deficit is demonstrated, including traumatic shock, extensive thermal burns, severe acute hypoalbuminemia, and liver cirrhosis with refractory ascites.',
      keyIndications: [
        'Hypovolemic Emergency Shock',
        'Severe Hypoalbuminemia',
        'Extensive Thermal Burns',
        'Hepatic Failure & Ascites',
      ],
      therapeuticClass: 'Blood Derivative / Plasma Volume Expander',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Critical Care',
    };
  }

  // 3. Amiodarone
  if (descUpper.includes('AMIODARONE') || nameUpper.includes('SENODARONE')) {
    return {
      targetConditions: 'Life-Threatening Cardiac Arrhythmias, Ventricular Fibrillation & Atrial Fibrillation',
      clinicalSummary:
        'Class III antiarrhythmic agent indicated for the acute treatment and prevention of recurrent, hemodynamically unstable ventricular tachycardia and ventricular fibrillation resistant to other antiarrhythmic therapies.',
      keyIndications: [
        'Recurrent Ventricular Fibrillation',
        'Hemodynamically Unstable VT',
        'Refractory Atrial Fibrillation',
        'Supraventricular Tachyarrhythmias',
      ],
      therapeuticClass: 'Class III Antiarrhythmic Agent',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Cardiac Care',
    };
  }

  // 4. Atracurium
  if (descUpper.includes('ATRACURIUM') || nameUpper.includes('ATRASEN')) {
    return {
      targetConditions: 'Surgical Neuromuscular Blockade & ICU Mechanical Ventilation Facilitation',
      clinicalSummary:
        'Non-depolarizing skeletal muscle relaxant indicated as an adjunct to general anesthesia to facilitate endotracheal intubation and relax skeletal muscles during surgery or controlled mechanical ventilation in ICU settings.',
      keyIndications: [
        'Endotracheal Intubation Facilitation',
        'General Anesthesia Muscle Relaxation',
        'ICU Mechanical Ventilation Adjunct',
        'Controlled Muscle Flaccidity',
      ],
      therapeuticClass: 'Non-Depolarizing Neuromuscular Blocker',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Anesthesia',
    };
  }

  // 5. Azithromycin
  if (descUpper.includes('AZITHROMYCIN') || nameUpper.includes('SENITHRO')) {
    return {
      targetConditions: 'Community-Acquired Pneumonia, Severe Respiratory Tract & Soft Tissue Infections',
      clinicalSummary:
        'Macrolide antibiotic indicated for acute bacterial sinusitis, community-acquired pneumonia, acute exacerbations of chronic bronchitis, and severe skin/soft tissue infections caused by susceptible organisms.',
      keyIndications: [
        'Community-Acquired Pneumonia',
        'Acute Exacerbation of Bronchitis',
        'Bacterial Sinusitis & Tonsillitis',
        'Complicated Skin Structure Infection',
      ],
      therapeuticClass: 'Macrolide Antimicrobial Agent',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Antibiotic',
    };
  }

  // 6. Aztreonam
  if (descUpper.includes('AZTREONAM') || nameUpper.includes('AZTREOSEN')) {
    return {
      targetConditions: 'Aerobic Gram-Negative Septicemia, Pseudomonas Aeruginosa & Intra-Abdominal Sepsis',
      clinicalSummary:
        'Monobactam bactericidal antibiotic indicated for severe hospital-acquired infections caused by aerobic Gram-negative pathogens, including Pseudomonas aeruginosa, urinary tract sepsis, and intra-abdominal infections.',
      keyIndications: [
        'Pseudomonas Aeruginosa Infection',
        'Gram-Negative Septicemia',
        'Complicated Urinary Tract Infection',
        'Hospital Intra-Abdominal Sepsis',
      ],
      therapeuticClass: 'Monobactam Beta-Lactam Antibiotic',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Hospital ICU',
    };
  }

  // 7. Cefoperazone + Sulbactam
  if (descUpper.includes('CEFOPERAZONE') || descUpper.includes('SULBACTAM') || nameUpper.includes('CEFOSENTUM')) {
    return {
      targetConditions: 'Polymicrobial ICU Infections, Severe Intra-Abdominal & Surgical Sepsis',
      clinicalSummary:
        'Combination beta-lactamase inhibitor antibiotic indicated for serious lower respiratory tract, intra-abdominal, gynecological, skin, and urinary tract infections caused by beta-lactamase producing resistant bacteria.',
      keyIndications: [
        'Intra-Abdominal & Surgical Sepsis',
        'Hospital-Acquired Pneumonia',
        'Complicated Urinary Sepsis',
        'Multidrug-Resistant Bacterial Infection',
      ],
      therapeuticClass: '3rd Gen Cephalosporin + Beta-Lactamase Inhibitor',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Hospital Supply',
    };
  }

  // 8. Cefuroxime
  if (descUpper.includes('CEFUROXIME') || nameUpper.includes('CEFUSEN')) {
    return {
      targetConditions: 'Upper & Lower Respiratory Tract Infections, ENT Infections & Skin Structures',
      clinicalSummary:
        'Second-generation cephalosporin antibiotic indicated for bacterial pharyngitis, acute otitis media, acute bronchitis exacerbation, uncomplicated skin structure infections, and early Lyme disease.',
      keyIndications: [
        'Acute Otitis Media & Sinusitis',
        'Bacterial Pharyngitis & Tonsillitis',
        'Chronic Bronchitis Exacerbation',
        'Skin & Soft Tissue Infection',
      ],
      therapeuticClass: '2nd Generation Cephalosporin Antibiotic',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Antibiotic',
    };
  }

  // 9. Citicoline
  if (descUpper.includes('CITICOLIN') || descUpper.includes('CITICOLINE') || nameUpper.includes('SENOCOLINE')) {
    return {
      targetConditions: 'Acute Ischemic Stroke, Traumatic Brain Injury (TBI) & Cerebrovascular Insufficiency',
      clinicalSummary:
        'Neuroprotective agent and phospholipid membrane precursor indicated for acute ischemic cerebrovascular stroke, traumatic head injuries, age-related cognitive decline, and neurological recovery adjunct.',
      keyIndications: [
        'Acute Ischemic Stroke Rehabilitation',
        'Traumatic Brain Injury (TBI)',
        'Cerebrovascular Insufficiency',
        'Cognitive Function Restoration',
      ],
      therapeuticClass: 'Psychostimulant & Neuroprotective Agent',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Neurology',
    };
  }

  // 10. Clarithromycin
  if (descUpper.includes('CLARITHROMYCIN') || nameUpper.includes('SENOCLARE')) {
    return {
      targetConditions: 'Macrolide-Sensitive Bacterial Pneumonia, H. Pylori Eradication & Sinusitis',
      clinicalSummary:
        'Macrolide antibiotic indicated for lower respiratory infections, pharyngitis, acute maxillary sinusitis, Helicobacter pylori eradication in peptic ulcer disease, and disseminated mycobacterial infections.',
      keyIndications: [
        'Helicobacter Pylori Eradication',
        'Atypical Bacterial Pneumonia',
        'Disseminated Mycobacterial Infection',
        'Acute Maxillary Sinusitis',
      ],
      therapeuticClass: 'Macrolide Antibiotic',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Antibiotic',
    };
  }

  // 11. Colistin / Colistimethate
  if (descUpper.includes('COLISTIMETHATE') || descUpper.includes('COLISTIN') || nameUpper.includes('SENCOLIS')) {
    return {
      targetConditions: 'Multidrug-Resistant (MDR) Gram-Negative Sepsis & Carbapenem-Resistant ICU Pathogens',
      clinicalSummary:
        'Polymyxin bactericidal antibiotic reserved for the critical care treatment of severe multidrug-resistant Gram-negative bacterial infections, including Acinetobacter baumannii, Pseudomonas aeruginosa, and carbapenem-resistant Enterobacteriaceae.',
      keyIndications: [
        'Multidrug-Resistant (MDR) Gram-Negative Sepsis',
        'Carbapenem-Resistant Pathogens (CRE)',
        'Acinetobacter Baumannii Infection',
        'ICU Ventilator-Associated Sepsis',
      ],
      therapeuticClass: 'Polymyxin Antibiotic / Critical Care Reserve',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Hospital ICU',
    };
  }

  // 12. Meropenem
  if (descUpper.includes('MEROPENEM') || nameUpper.includes('MEROPENEM')) {
    return {
      targetConditions: 'Bacterial Meningitis, Severe Hospital-Acquired Pneumonia & Complicated Sepsis',
      clinicalSummary:
        'Ultra-broad-spectrum carbapenem antibiotic indicated for severe hospital pneumonia, complicated intra-abdominal sepsis, bacterial meningitis in adult and pediatric patients, and febrile neutropenia.',
      keyIndications: [
        'Acute Bacterial Meningitis',
        'Hospital-Acquired Pneumonia',
        'Complicated Intra-Abdominal Sepsis',
        'Febrile Neutropenia Empirical Care',
      ],
      therapeuticClass: 'Carbapenem Ultra-Broad-Spectrum Antibiotic',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / ICU Essential',
    };
  }

  // 13. Piperacillin + Tazobactam
  if (descUpper.includes('PIPERACILLIN') || descUpper.includes('TAZOBACTAM')) {
    return {
      targetConditions: 'Ventilator-Associated Pneumonia, Pseudomonas Sepsis & Intra-Abdominal Peritonitis',
      clinicalSummary:
        'Extended-spectrum antipseudomonal penicillin combination indicated for severe hospital-acquired pneumonia, complicated appendicitis, peritonitis, pelvic inflammatory disease, and systemic pseudomonal sepsis.',
      keyIndications: [
        'Ventilator-Associated Pneumonia (VAP)',
        'Pseudomonas Aeruginosa Sepsis',
        'Peritonitis & Intra-Abdominal Sepsis',
        'Complicated Gynecological Infection',
      ],
      therapeuticClass: 'Antipseudomonal Penicillin + Beta-Lactamase Inhibitor',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Hospital Care',
    };
  }

  // 14. Vancomycin
  if (descUpper.includes('VANCOMYCIN')) {
    return {
      targetConditions: 'Methicillin-Resistant Staphylococcus Aureus (MRSA) & Severe Infective Endocarditis',
      clinicalSummary:
        'Glycopeptide antibiotic indicated for serious, life-threatening Gram-positive infections resistant to beta-lactams, specifically Methicillin-Resistant Staphylococcus aureus (MRSA), bacterial endocarditis, and surgical prophylaxis.',
      keyIndications: [
        'Methicillin-Resistant S. Aureus (MRSA)',
        'Bacterial Infective Endocarditis',
        'Pseudomembranous C. Difficile Colitis',
        'High-Risk Surgical Prophylaxis',
      ],
      therapeuticClass: 'Glycopeptide Antibiotic',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Reserved Hospital Anti-infective',
    };
  }

  // 15. Paracetamol / Acetaminophen
  if (descUpper.includes('PARACETAMOL') || descUpper.includes('ACETAMINOPHEN')) {
    return {
      targetConditions: 'Acute Mild-to-Moderate Pain, Post-Operative Surgical Analgesia & High Pyrexia (Fever)',
      clinicalSummary:
        'Central-acting analgesic and antipyretic indicated for acute management of mild-to-moderate pain, rapid pyrexia reduction, and as an opioid-sparing adjunct in post-operative hospital pain protocols.',
      keyIndications: [
        'Post-Operative Acute Analgesia',
        'High Fever / Pyrexia Reduction',
        'Mild to Moderate Pain Relief',
        'Opioid-Sparing Surgical Pain Care',
      ],
      therapeuticClass: 'Central Analgesic & Antipyretic',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H / OTC Hospital Formulation',
    };
  }

  // 16. Pantoprazole / Esomeprazole / Omeprazole
  if (
    descUpper.includes('PANTOPRAZOLE') ||
    descUpper.includes('ESOMEPRAZOLE') ||
    descUpper.includes('OMEPRAZOLE') ||
    descUpper.includes('RABEPRAZOLE')
  ) {
    return {
      targetConditions: 'Gastroesophageal Reflux Disease (GERD), Peptic Ulcer Disease & Stress Ulcer Prophylaxis',
      clinicalSummary:
        'Proton pump inhibitor (PPI) indicated for acute management of gastroesophageal reflux disease (GERD), gastric and duodenal ulcers, Zollinger-Ellison syndrome, upper GI hemorrhage, and ICU stress ulcer prophylaxis.',
      keyIndications: [
        'Gastroesophageal Reflux Disease (GERD)',
        'Gastric & Duodenal Peptic Ulcers',
        'ICU Stress Ulcer Prophylaxis',
        'Upper Gastrointestinal Bleeding',
      ],
      therapeuticClass: 'Proton Pump Inhibitor (PPI)',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Acid Control',
    };
  }

  // 17. Ondansetron
  if (descUpper.includes('ONDANSETRON')) {
    return {
      targetConditions: 'Chemotherapy-Induced, Radiation-Induced & Post-Operative Nausea and Vomiting',
      clinicalSummary:
        'Selective 5-HT3 receptor antagonist antiemetic indicated for the prevention and treatment of nausea and vomiting associated with emetogenic cancer chemotherapy, radiotherapy, and surgical recovery.',
      keyIndications: [
        'Chemotherapy-Induced Nausea & Vomiting (CINV)',
        'Post-Operative Nausea & Vomiting (PONV)',
        'Radiation-Induced Emesis Prevention',
        'Acute Emetic Gastrointestinal Relief',
      ],
      therapeuticClass: 'Selective 5-HT3 Receptor Antagonist Antiemetic',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Antiemetic',
    };
  }

  // 18. Heparin / Enoxaparin
  if (descUpper.includes('HEPARIN') || descUpper.includes('ENOXAPARIN')) {
    return {
      targetConditions: 'Deep Vein Thrombosis (DVT), Pulmonary Embolism (PE) & Acute Coronary Syndrome',
      clinicalSummary:
        'Anticoagulant indicated for the prophylaxis and treatment of deep vein thrombosis, pulmonary embolism, acute coronary syndrome (unstable angina / NSTEMI), and thromboembolic prevention during surgery.',
      keyIndications: [
        'Deep Vein Thrombosis (DVT) Prophylaxis',
        'Pulmonary Embolism (PE) Management',
        'Acute Coronary Syndrome (ACS)',
        'Post-Surgical Thromboembolic Prevention',
      ],
      therapeuticClass: 'Anticoagulant / Low Molecular Weight Heparin',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Hematology',
    };
  }

  // 19. Generic fallback based on category
  if (catUpper.includes('ANTIBIOTIC') || catUpper.includes('ANTIFUNGAL')) {
    return {
      targetConditions: 'Systemic Bacterial & Pathogenic Antimicrobial Infections',
      clinicalSummary:
        'Hospital-grade antimicrobial formulation indicated for the targeted eradication of susceptible bacterial or fungal pathogens in hospital wards, outpatient clinics, and critical care settings.',
      keyIndications: [
        'Susceptible Pathogen Eradication',
        'Systemic Bacterial Infection Control',
        'Empirical & Targeted Antimicrobial Care',
        'Surgical Infection Prevention',
      ],
      therapeuticClass: 'Antimicrobial / Anti-Infective Agent',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Antibiotic',
    };
  }

  if (catUpper.includes('CRITICAL CARE') || catUpper.includes('PLASMA')) {
    return {
      targetConditions: 'ICU Resuscitation, Hemodynamic Instability & Acute Plasma Deficit',
      clinicalSummary:
        'Hospital critical care therapeutic formulation indicated for emergency hemodynamics, plasma expansion, acute fluid resuscitation, and organ perfusion support in ICU settings.',
      keyIndications: [
        'ICU Resuscitation & Fluid Management',
        'Hemodynamic Instability Support',
        'Plasma Deficit Restoration',
        'Critical Care Emergency Therapy',
      ],
      therapeuticClass: 'Critical Care / Plasma Derivative',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Critical Care',
    };
  }

  if (catUpper.includes('CARDIOVASCULAR') || catUpper.includes('HEMATOLOGY')) {
    return {
      targetConditions: 'Cardiovascular Hemodynamics, Hypertensive Crisis & Vascular Care',
      clinicalSummary:
        'Cardiovascular and hematological agent indicated for acute regulation of cardiac output, vascular tone, blood pressure stabilization, or hematological disorder management.',
      keyIndications: [
        'Cardiovascular Hemodynamic Balance',
        'Vascular Tone & Output Management',
        'Cardiac Clinical Care',
        'Hematological Support',
      ],
      therapeuticClass: 'Cardiovascular & Hematological Therapeutic',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Cardiac Care',
    };
  }

  if (catUpper.includes('NEUROLOGY') || catUpper.includes('ANESTHESIA')) {
    return {
      targetConditions: 'Central Nervous System Disorders, Surgical Anesthesia & Neuro Care',
      clinicalSummary:
        'Specialized neurological or anesthetic agent indicated for clinical sedation, neuromuscular regulation, neuroprotective support, or surgical anesthesia protocols.',
      keyIndications: [
        'Central Nervous System Management',
        'Surgical Anesthesia Support',
        'Neuromuscular Regulation',
        'Neuroprotective Clinical Care',
      ],
      therapeuticClass: 'Neurological & Anesthetic Agent',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Anesthesia',
    };
  }

  if (catUpper.includes('GASTROENTEROLOGY') || catUpper.includes('METABOLIC')) {
    return {
      targetConditions: 'Gastrointestinal Mucosal Disorders, Acid Peptic Disease & Metabolic Balance',
      clinicalSummary:
        'Gastrointestinal therapeutic indicated for acid suppression, digestive tract mucosa protection, metabolic homeostasis, or hepatic and gastrointestinal care.',
      keyIndications: [
        'Gastrointestinal Acid Regulation',
        'Mucosal Protection & Ulcer Care',
        'Metabolic Homeostasis Support',
        'Digestive System Recovery',
      ],
      therapeuticClass: 'Gastrointestinal & Metabolic Agent',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Gastro Care',
    };
  }

  if (catUpper.includes('PAIN') || catUpper.includes('INFLAMMATORY')) {
    return {
      targetConditions: 'Acute Surgical Pain, Systemic Inflammatory Response & Fever',
      clinicalSummary:
        'Analgesic and anti-inflammatory formulation indicated for acute post-operative pain control, musculoskeletal inflammatory conditions, and systemic fever reduction.',
      keyIndications: [
        'Acute Surgical Pain Relief',
        'Anti-Inflammatory Response',
        'Musculoskeletal Analgesia',
        'Pyrexia & Pain Management',
      ],
      therapeuticClass: 'Analgesic & Anti-Inflammatory Agent',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Pain Care',
    };
  }

  if (catUpper.includes('RESPIRATORY') || catUpper.includes('ALLERGY')) {
    return {
      targetConditions: 'Acute Bronchospasm, Respiratory Airway Distress & Allergic Exacerbation',
      clinicalSummary:
        'Respiratory therapeutic indicated for acute airway obstruction relief, bronchial hyperactivity suppression, allergic respiratory symptom management, and pulmonary ventilation support.',
      keyIndications: [
        'Acute Airway Bronchospasm Relief',
        'Asthma & COPD Airway Management',
        'Allergic Exacerbation Relief',
        'Pulmonary Ventilation Support',
      ],
      therapeuticClass: 'Respiratory & Anti-Allergic Agent',
      administrationRoute: route,
      prescriptionStatus: 'Schedule H Prescription / Respiratory Care',
    };
  }

  // Absolute default fallback
  return {
    targetConditions: `Therapeutic Management of ${product.category} Indications`,
    clinicalSummary: `Regulated pharmaceutical formulation (${product.brandName}) indicated for clinical healthcare administration under medical supervision for specified ${product.category.toLowerCase()} indications.`,
    keyIndications: [
      `${product.category} Clinical Care`,
      'Prescription Medical Therapy',
      'Hospital Formulation Management',
      'Targeted Patient Indication',
    ],
    therapeuticClass: `${product.category} Formulation`,
    administrationRoute: route,
    prescriptionStatus: 'Schedule H Prescription / Hospital Supply',
  };
}
