const topics = [
    {
        "id": 1,
        "url": "All_Recent_Updates_2021-Previous_Year_Questions",
        "name": "All Recent Updates 2021-Previous Year Questions",
        "count": 1
    },
    {
        "id": 2,
        "url": "Allied_Health_Disciplines-ESI_Act__Factory_Act__NREGA_Act_and_Disaster_Management",
        "name": "Allied Health Disciplines-ESI Act  Factory Act  NREGA Act and Disaster Management",
        "count": 13
    },
    {
        "id": 3,
        "url": "Allied_Health_Disciplines-Occupational_health",
        "name": "Allied Health Disciplines-Occupational health",
        "count": 20
    },
    {
        "id": 4,
        "url": "Allied_Health_Disciplines-Previous_Year_Questions",
        "name": "Allied Health Disciplines-Previous Year Questions",
        "count": 49
    },
    {
        "id": 5,
        "url": "Biomedical_Waste_Management-Biomedical_waste_management_and_Genetics_and_Health",
        "name": "Biomedical Waste Management-Biomedical waste management and Genetics and Health",
        "count": 15
    },
    {
        "id": 6,
        "url": "Biomedical_Waste_Management-Previous_Year_Questions",
        "name": "Biomedical Waste Management-Previous Year Questions",
        "count": 4
    },
    {
        "id": 7,
        "url": "Biostatistics-Biostatistics_and_Measures_of_Central_Tendency",
        "name": "Biostatistics-Biostatistics and Measures of Central Tendency",
        "count": 10
    },
    {
        "id": 8,
        "url": "Biostatistics-Previous_Year_Questions",
        "name": "Biostatistics-Previous Year Questions",
        "count": 61
    },
    {
        "id": 9,
        "url": "Biostatistics-Types_of_Dispersion__Distribution__and_Errors",
        "name": "Biostatistics-Types of Dispersion  Distribution  and Errors",
        "count": 20
    },
    {
        "id": 10,
        "url": "Communicable_and_Non-communicable_Diseases-Acute_Respiratory_Infection_and_Tuberculosis",
        "name": "Communicable and Non-communicable Diseases-Acute Respiratory Infection and Tuberculosis",
        "count": 10
    },
    {
        "id": 11,
        "url": "Communicable_and_Non-communicable_Diseases-Chicken_Pox__Small_Pox_and_Diphtheria",
        "name": "Communicable and Non-communicable Diseases-Chicken Pox  Small Pox and Diphtheria",
        "count": 10
    },
    {
        "id": 12,
        "url": "Communicable_and_Non-communicable_Diseases-Dengue__Malaria__and_Rabies",
        "name": "Communicable and Non-communicable Diseases-Dengue  Malaria  and Rabies",
        "count": 16
    },
    {
        "id": 13,
        "url": "Communicable_and_Non-communicable_Diseases-Filariasis__Leptospirosis__Japanese_Encephalitis__and_Helminthic_Infections",
        "name": "Communicable and Non-communicable Diseases-Filariasis  Leptospirosis  Japanese Encephalitis  and Helminthic Infections",
        "count": 13
    },
    {
        "id": 14,
        "url": "Communicable_and_Non-communicable_Diseases-Infectious_Epidemiology",
        "name": "Communicable and Non-communicable Diseases-Infectious Epidemiology",
        "count": 20
    },
    {
        "id": 15,
        "url": "Communicable_and_Non-communicable_Diseases-Mumps__Measles__Rubella__Pertussis",
        "name": "Communicable and Non-communicable Diseases-Mumps  Measles  Rubella  Pertussis",
        "count": 10
    },
    {
        "id": 16,
        "url": "Communicable_and_Non-communicable_Diseases-Plague__Tetanus__HIV_AIDS__Rickettsial_Disease__Ebola__Nipah_and_Zika_Virus",
        "name": "Communicable and Non-communicable Diseases-Plague  Tetanus  HIV AIDS  Rickettsial Disease  Ebola  Nipah and Zika Virus",
        "count": 15
    },
    {
        "id": 17,
        "url": "Communicable_and_Non-communicable_Diseases-Polio__Hepatitis__Diarrhoea__Cholera___Typhoid",
        "name": "Communicable and Non-communicable Diseases-Polio  Hepatitis  Diarrhoea  Cholera   Typhoid",
        "count": 12
    },
    {
        "id": 18,
        "url": "Communicable_and_Non-communicable_Diseases-Previous_Year_Questions",
        "name": "Communicable and Non-communicable Diseases-Previous Year Questions",
        "count": 105
    },
    {
        "id": 19,
        "url": "Concept_of_Health_and_Disease-Concept_of_Disease___Well-Being",
        "name": "Concept of Health and Disease-Concept of Disease   Well-Being",
        "count": 10
    },
    {
        "id": 20,
        "url": "Concept_of_Health_and_Disease-Disease_Control__Monitoring_and_Surveillance",
        "name": "Concept of Health and Disease-Disease Control  Monitoring and Surveillance",
        "count": 15
    },
    {
        "id": 21,
        "url": "Concept_of_Health_and_Disease-Health_Indicators",
        "name": "Concept of Health and Disease-Health Indicators",
        "count": 5
    },
    {
        "id": 22,
        "url": "Concept_of_Health_and_Disease-Previous_Year_Questions",
        "name": "Concept of Health and Disease-Previous Year Questions",
        "count": 21
    },
    {
        "id": 23,
        "url": "Demography_and_Health-Demography_and_Health",
        "name": "Demography and Health-Demography and Health",
        "count": 25
    },
    {
        "id": 24,
        "url": "Demography_and_Health-Previous_Year_Questions",
        "name": "Demography and Health-Previous Year Questions",
        "count": 24
    },
    {
        "id": 25,
        "url": "Environment_and_Health-Air__Light__Sound__and_Radiation",
        "name": "Environment and Health-Air  Light  Sound  and Radiation",
        "count": 16
    },
    {
        "id": 26,
        "url": "Environment_and_Health-Entomology",
        "name": "Environment and Health-Entomology",
        "count": 12
    },
    {
        "id": 27,
        "url": "Environment_and_Health-Previous_Year_Questions",
        "name": "Environment and Health-Previous Year Questions",
        "count": 34
    },
    {
        "id": 28,
        "url": "Environment_and_Health-Water-_Introduction_and_Purification",
        "name": "Environment and Health-Water- Introduction and Purification",
        "count": 15
    },
    {
        "id": 29,
        "url": "Epidemiology-Basics_of_Epidemiology",
        "name": "Epidemiology-Basics of Epidemiology",
        "count": 11
    },
    {
        "id": 30,
        "url": "Epidemiology-Bias_and_confounders",
        "name": "Epidemiology-Bias and confounders",
        "count": 9
    },
    {
        "id": 31,
        "url": "Epidemiology-Previous_Year_Questions",
        "name": "Epidemiology-Previous Year Questions",
        "count": 69
    },
    {
        "id": 32,
        "url": "Epidemiology-Study_Designs_in_Epidemology",
        "name": "Epidemiology-Study Designs in Epidemology",
        "count": 31
    },
    {
        "id": 33,
        "url": "Epidemiology-Systematic_Review__Meta-Analysis__and_Evidence-Based_Studies",
        "name": "Epidemiology-Systematic Review  Meta-Analysis  and Evidence-Based Studies",
        "count": 6
    },
    {
        "id": 34,
        "url": "Family_Planning_and_Contraceptives-Family_Planning_and_Contraceptives",
        "name": "Family Planning and Contraceptives-Family Planning and Contraceptives",
        "count": 27
    },
    {
        "id": 35,
        "url": "Family_Planning_and_Contraceptives-Previous_Year_Questions",
        "name": "Family Planning and Contraceptives-Previous Year Questions",
        "count": 17
    },
    {
        "id": 36,
        "url": "Health_Care_of_The_Community_in_India-Healthcare_of_Community_and_Health_Delivery_Systems",
        "name": "Health Care of The Community in India-Healthcare of Community and Health Delivery Systems",
        "count": 18
    },
    {
        "id": 37,
        "url": "Health_Care_of_The_Community_in_India-Previous_Year_Questions",
        "name": "Health Care of The Community in India-Previous Year Questions",
        "count": 25
    },
    {
        "id": 38,
        "url": "Health_Education_and_Communication-Health_Education_and_Communication",
        "name": "Health Education and Communication-Health Education and Communication",
        "count": 8
    },
    {
        "id": 39,
        "url": "Health_Education_and_Communication-Previous_Year_Questions",
        "name": "Health Education and Communication-Previous Year Questions",
        "count": 20
    },
    {
        "id": 40,
        "url": "Health_Planning_and_Management-Health_Planning_and_Management",
        "name": "Health Planning and Management-Health Planning and Management",
        "count": 8
    },
    {
        "id": 41,
        "url": "Health_Planning_and_Management-Previous_Year_Questions",
        "name": "Health Planning and Management-Previous Year Questions",
        "count": 15
    },
    {
        "id": 42,
        "url": "International_Health-International_health",
        "name": "International Health-International health",
        "count": 6
    },
    {
        "id": 43,
        "url": "International_Health-Previous_Year_Questions",
        "name": "International Health-Previous Year Questions",
        "count": 7
    },
    {
        "id": 44,
        "url": "Miscellaneous-Previous_Year_Questions",
        "name": "Miscellaneous-Previous Year Questions",
        "count": 8
    },
    {
        "id": 45,
        "url": "National_Health_Programs-Blindness_control_program__NLEP__Health_programs_misc_",
        "name": "National Health Programs-Blindness control program  NLEP  Health programs misc",
        "count": 11
    },
    {
        "id": 46,
        "url": "National_Health_Programs-Endgame_strategy_and_national_polio_surveillance_program",
        "name": "National Health Programs-Endgame strategy and national polio surveillance program",
        "count": 6
    },
    {
        "id": 47,
        "url": "National_Health_Programs-NACP_global_initiatives",
        "name": "National Health Programs-NACP global initiatives",
        "count": 12
    },
    {
        "id": 48,
        "url": "National_Health_Programs-NCDS___NPCDS",
        "name": "National Health Programs-NCDS   NPCDS",
        "count": 11
    },
    {
        "id": 49,
        "url": "National_Health_Programs-NVBDCP",
        "name": "National Health Programs-NVBDCP",
        "count": 15
    },
    {
        "id": 50,
        "url": "National_Health_Programs-National_TB_Elimination_Program__NTEP_",
        "name": "National Health Programs-National TB Elimination Program  NTEP",
        "count": 20
    },
    {
        "id": 51,
        "url": "National_Health_Programs-National_health_mission_RMNCH_-_A___maternal_initiatives__Child_and_adolescents_health_initiatives",
        "name": "National Health Programs-National health mission RMNCH - A   maternal initiatives  Child and adolescents health initiatives",
        "count": 14
    },
    {
        "id": 52,
        "url": "National_Health_Programs-Previous_Year_Questions",
        "name": "National Health Programs-Previous Year Questions",
        "count": 61
    },
    {
        "id": 53,
        "url": "Nutrition_and_Health-Food_Adulteration_and_Food_Fortification",
        "name": "Nutrition and Health-Food Adulteration and Food Fortification",
        "count": 11
    },
    {
        "id": 54,
        "url": "Nutrition_and_Health-Macronutrients",
        "name": "Nutrition and Health-Macronutrients",
        "count": 14
    },
    {
        "id": 55,
        "url": "Nutrition_and_Health-Micronutrients",
        "name": "Nutrition and Health-Micronutrients",
        "count": 15
    },
    {
        "id": 56,
        "url": "Nutrition_and_Health-Previous_Year_Questions",
        "name": "Nutrition and Health-Previous Year Questions",
        "count": 59
    },
    {
        "id": 57,
        "url": "Nutrition_and_Health-Recommended_Dietary_Allowances_and_Nutritional_Health_Programmes",
        "name": "Nutrition and Health-Recommended Dietary Allowances and Nutritional Health Programmes",
        "count": 12
    },
    {
        "id": 58,
        "url": "Preventive_Medicine_in__Obstetrics__Pediatrics_and_Geriatrics-Preventive_Medicine_in_Obstetrics__Pediatrics_and_Geriatrics",
        "name": "Preventive Medicine in  Obstetrics  Pediatrics and Geriatrics-Preventive Medicine in Obstetrics  Pediatrics and Geriatrics",
        "count": 25
    },
    {
        "id": 59,
        "url": "Preventive_Medicine_in__Obstetrics__Pediatrics_and_Geriatrics-Previous_Year_Questions",
        "name": "Preventive Medicine in  Obstetrics  Pediatrics and Geriatrics-Previous Year Questions",
        "count": 28
    },
    {
        "id": 60,
        "url": "Screening_of_Diseases-Previous_Year_Questions",
        "name": "Screening of Diseases-Previous Year Questions",
        "count": 15
    },
    {
        "id": 61,
        "url": "Screening_of_Diseases-Screening_of_Diseases",
        "name": "Screening of Diseases-Screening of Diseases",
        "count": 23
    },
    {
        "id": 62,
        "url": "Social_Sciences_and_Health-Previous_Year_Questions",
        "name": "Social Sciences and Health-Previous Year Questions",
        "count": 11
    },
    {
        "id": 63,
        "url": "Social_Sciences_and_Health-Social_Sciences_and_Health",
        "name": "Social Sciences and Health-Social Sciences and Health",
        "count": 9
    },
    {
        "id": 64,
        "url": "Vaccines_and_Cold_Chain-National_Immunization_Schedule__Delayed_immunization__Cold_chain",
        "name": "Vaccines and Cold Chain-National Immunization Schedule  Delayed immunization  Cold chain",
        "count": 18
    },
    {
        "id": 65,
        "url": "Vaccines_and_Cold_Chain-Previous_Year_Questions",
        "name": "Vaccines and Cold Chain-Previous Year Questions",
        "count": 43
    },
    {
        "id": 66,
        "url": "Vaccines_and_Cold_Chain-Vaccines_and_Open_Vial_Policy",
        "name": "Vaccines and Cold Chain-Vaccines and Open Vial Policy",
        "count": 16
    }
];
