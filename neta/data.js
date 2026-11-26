// Sample data for one Neta Card. Every non-illustrative value was copied from the linked source on 26 Nov 2026.
const MYNETA = '<a href="https://myneta.info/LokSabha2024/candidate.php?candidate_id=3668" target="_blank" rel="noopener">MyNeta (ADR): 2024 affidavit</a>';
const MYNETA_LIST = '<a href="https://myneta.info/LokSabha2024/index.php?action=show_candidates&constituency_id=110" target="_blank" rel="noopener">MyNeta: all 8 North Goa 2024 candidates</a>';
const PRS = '<a href="https://prsindia.org/mptrack/18-lok-sabha/shripad-yesso-naik" target="_blank" rel="noopener">PRS MP Track</a> (CC BY 4.0)';

window.NETA = {
  asof: "Data as of 26 Nov 2026",
  person: {
    name: "Shripad Yesso Naik",
    photo: { url: "naik.jpg", credit: "Photo: Biswarup Ganguly, CC BY 3.0, via Wikimedia Commons (2014)" },
    meta: ["Age 74 · Graduate (BA, Bombay University, 1978)", "MP, North Goa · 6th term"],
    tags: ["Sitting MP", "Union Minister of State", "Contesting 2029: not yet known"],
    party: { name: "Bharatiya Janata Party (BJP)", alliance: "NDA" }
  },
  stats: [
    { label: "Pending criminal cases", value: 0, display: "0",
      others: [0,0,0,0,0,0,5], loLabel: "0", hiLabel: "5",
      src: `None declared. Range is all 8 candidates in North Goa 2024. Source: ${MYNETA}; ${MYNETA_LIST}.` },
    { label: "Total assets", value: 108683533, display: "₹10.87 Cr", log: true,
      others: [388773,1579416,1200000,179796602,7000000,3922302,492649], loLabel: "₹3.9 L", hiLabel: "₹17.98 Cr",
      src: `Declared: Rs 10,86,83,533 (self + family). Scale is logarithmic so small and large fortunes both stay readable. Source: ${MYNETA}.` },
    { label: "Liabilities", value: 508675, display: "₹5.09 L",
      others: [64200,0,600000,0,0,0,0], loLabel: "₹0", hiLabel: "₹6 L",
      src: `Declared: Rs 5,08,675. Source: ${MYNETA}.` },
    { label: "Asset growth 2019 → 2024", single: true, display: "+65%",
      note: "₹6.58 Cr → ₹10.87 Cr. Only shown for people who contested both elections.",
      src: `2019 declared Rs 6,57,95,623; 2024 declared Rs 10,86,83,533. Source: ${MYNETA} (Other Elections table).` },
    { label: "Age at nomination", value: 71, display: "71",
      others: [33,53,42,77,55,61,39], loLabel: "33", hiLabel: "77",
      src: `Age as declared in the 2024 affidavit. Source: ${MYNETA_LIST}.` }
  ],
  house: [
    ["Attendance", "Not recorded"],
    ["Questions asked", "Not applicable"],
    ["Debates", "Not applicable"],
    ["Private member bills", "Not applicable"]
  ],
  houseNote: `He is a minister. Ministers answer for the government, so they don't sign the attendance register, ask questions or bring private bills. Period: 24 Jun 2024 – 13 Aug 2026. Source: ${PRS}.`,
  fund: [
    ["Entitlement", "₹5 Cr / year"],
    ["Works recommended", "Pending"],
    ["Amount spent", "Pending"]
  ],
  fundNote: `The ₹5 Cr/year entitlement is set by the MPLADS scheme. North Goa's per-MP figures sit behind the <a href="https://mplads.mospi.gov.in/" target="_blank" rel="noopener">eSAKSHI dashboard</a>, which has no public export yet. Our data pipeline will collect them.`,
  minister: [
    ["Now", "MoS, Power + New & Renewable Energy"],
    ["Since", "10 Jun 2024"],
    ["Before", "MoS Tourism (2021–24), Defence (2019–21), AYUSH (independent charge, 2014–21)"]
  ],
  ministerNote: `Ministry numbers for his term (e.g. renewable capacity added, from CEA and MNRE) are pending. Source for roles: <a href="https://en.wikipedia.org/wiki/Shripad_Naik" target="_blank" rel="noopener">Wikipedia</a>, to be cross-checked against the Cabinet Secretariat list.`,
  sectors: [
    { name: "Education", illustrative: true, rows: [["Literacy rate", "+2.1 pts", "better"], ["School dropout", "+0.4 pts", "worse"]] },
    { name: "Health", illustrative: true, rows: [["Infant deaths / 1,000", "−1.8", "better"]] },
    { name: "Safety", illustrative: true, rows: [["Crime rate", "+3%", "same"], ["Road deaths", "+6%", "worse"]] },
    { name: "Roads", illustrative: true, rows: [["Rural road km (PMGSY)", "48 km", "same"]] }
  ],
  sampleNote: "<b>Sample card.</b> Front side and the Lok Sabha / minister facts are real, with sources on tap. The fund numbers and ministry numbers are still pending. <b>The sector numbers are made up</b>, only to show the design; they're marked ILLUSTRATIVE. Photo: Biswarup Ganguly, CC BY 3.0, via Wikimedia Commons (2014)."
};
