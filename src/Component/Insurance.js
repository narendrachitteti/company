import React, { useState } from 'react';
import './Insurance.css'
const data = {
  "INSC-00017": {
    "company_name": "Liberty General Insurance Ltd.",
    "tpa": [
      {
        "tpa": "TPA-00039",
        "policy_type": "Retail",
        "short_code": "Liberty",
        "company_name": "Liberty General Insurance Ltd."
      }
    ],
    "short_code": "Liberty"
  },
  "INSC-00022": {
    "company_name": "Go Digit General Insurance Ltd",
    "tpa": [
      {
        "tpa": "TPA-00031",
        "policy_type": "Retail",
        "short_code": "Go Digit",
        "company_name": "Go Digit General Insurance Ltd"
      },
      {
        "tpa": "TPA-00019",
        "policy_type": "Corporate",
        "short_code": "MediAssist",
        "company_name": "Medi Assist Insurance TPA Private Limited"
      }
    ],
    "short_code": "Go Digit"
  },
  "INSC-00006": {
    "company_name": "Star Health & Allied Insurance Co.Ltd.",
    "tpa": [
      {
        "tpa": "TPA-00021",
        "policy_type": "Retail",
        "short_code": "Star",
        "company_name": "Star Health & Allied Insurance Co.Ltd."
      },
      {
        "tpa": "TPA-00021",
        "policy_type": "Corporate",
        "short_code": "Star",
        "company_name": "Star Health & Allied Insurance Co.Ltd."
      }
    ],
    "short_code": "Star"
  }
};

const Insurance = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedTPA, setSelectedTPA] = useState('');
  const [tpaOptions, setTpaOptions] = useState([]);

  const handleCompanyChange = (e) => {
    const companyKey = e.target.value;
    setSelectedCompany(companyKey);
    if (data[companyKey]) {
      setTpaOptions(data[companyKey].tpa);
    } else {
      setTpaOptions([]);
    }
    setSelectedTPA('');
  };

  const handleTPAChange = (e) => {
    setSelectedTPA(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected Company:', selectedCompany);
    console.log('Selected TPA:', selectedTPA);
    alert('Data has been submitted successfully!');
    setSelectedCompany('');
    setSelectedTPA('');
    setTpaOptions([]);
  };

  return (
    <div style={{ marginTop: '50px', marginLeft:'30%'}}>
    <marquee className="welcome"><span style={{color:'#EF5036', width:'15px'}}>W</span>elcome to <span style={{color:'#EF5036'}}>I</span>nsurance&nbsp;<span style={{color:'#EF5036'}}>C</span>ompanies data</marquee>

      <div style={{ border: '2px solid black', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
      <h1><u><span style={{color:'#EF5036'}}>C</span>ompanies <span style={{color:'#EF5036'}}>D</span>ata</u></h1>
      <div>
        <label>
          Company:
          <select value={selectedCompany} onChange={handleCompanyChange}>
            <option value="">Select Company</option>
            {Object.keys(data).map((key) => (
              <option key={key} value={key}>
                {data[key].company_name}
              </option>
            ))}
          </select>
        </label>
      </div><br />
      <div>
        <label>
          TPA:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select value={selectedTPA} onChange={handleTPAChange} disabled={!selectedCompany}>
            <option value="">Select TPA</option>
            {tpaOptions.map((tpa, index) => (
              <option key={index} value={tpa.tpa}>
                {tpa.company_name} - {tpa.policy_type}
              </option>
            ))}
          </select>
        </label>
      </div><br />
      <button style={{borderColor:'cyan'}}onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default Insurance;
