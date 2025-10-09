import goAirLogo from '../assets/Go_First_Logo.jpg';
import bajaLogo from '../assets/bajaj_logo.jpg';
import oyoLogo from '../assets/oyo_logo.png';

export const ipoList = [
  {
    id: 'go-air',
    company: 'GO AIR',
    companyFullName: 'Go Airlines (India) Limited',
    logo: goAirLogo,
    isImage: true,
    logoColor: '#fff',
    issueDate: '4th - 7th Oct 2022',
    issueSize: '₹3600 Crores',
    priceRange: '₹50-60',
    minInvestment: '₹50,000',
    sharesLots: '100 Shares/5 Lots',
    status: 'Open'
  },
  {
    id: 'bajaj-energy',
    company: 'BAJAJ ENERGY',
    companyFullName: 'Bajaj Energy Limited',
    logo: bajaLogo,
    isImage: true,
    logoColor: '#fff',
    issueDate: '4th - 7th Oct 2022',
    issueSize: '₹3600 Crores',
    priceRange: '₹50-60',
    minInvestment: '₹50,000',
    sharesLots: '100 Shares/5 Lots',
    status: 'Open'
  },
  {
    id: 'oyo',
    company: 'OYO',
    companyFullName: 'OYO Private Limited',
    logo: oyoLogo,
    isImage: true,
    logoColor: '#fff',
    issueDate: 'To be announced',
    issueSize: '₹3600 Crores',
    priceRange: '₹50-60',
    minInvestment: '₹50,000',
    sharesLots: '100 Shares/5 Lots',
    status: 'Upcoming'
  }
];

export const ipoDetails = {
  'oyo': {
    company: 'OYO',
    companyFullName: 'OYO Private Limited',
    logo: oyoLogo,
    isImage: true,
    logoColor: '#fff',
    issueSize: '₹2,877 - 3,028 Cr.',
    priceRange: '₹1,026 - 1,080',
    minimumAmount: '₹50,000',
    lotSize: '150 shares/lots',
    issueDates: '12 Dec - 15 Dec 22',
    listedOn: '15 Dec 22',
    listedPrice: '₹1,080',
    listingGains: '₹54 ',
    listingGainsPercentage: '5.0%',
    timeline: [
      {
        stage: 'Bidding starts',
        date: '12 Dec 2023',
        completed: true
      },
      {
        stage: 'Bidding ends',
        date: '15 Dec 2023',
        completed: false
      },
      {
        stage: 'Allotment finalisation',
        date: '18 Dec 2023',
        completed: false
      },
      {
        stage: 'Refund initiation',
        date: '18 Dec 2023',
        completed: false
      },
      {
        stage: 'Demat transfer',
        date: '18 Dec 2023',
        completed: false
      },
      {
        stage: 'Listing date',
        date: '21 Dec 2023',
        completed: false
      }
    ],
    about: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  'go-air': {
    company: 'GO AIR',
    companyFullName: 'Go Airlines (India) Limited',
    logo: goAirLogo,
    isImage: true,
    logoColor: '#fff',
    issueSize: '₹3,600 Cr.',
    priceRange: '₹50-60',
    minimumAmount: '₹50,000',
    lotSize: '100 shares/lots',
    issueDates: '4 Oct - 7 Oct 22',
    listedOn: '7 Oct 22',
    listedPrice: '₹60',
    listingGains: '₹10 ',
    listingGainsPercentage: '20.0%',
    timeline: [
      {
        stage: 'Bidding starts',
        date: '4 Oct 2022', 
        completed: true
      },
      { stage: 'Bidding ends', date: '7 Oct 2022', completed: true },
      { stage: 'Allotment finalisation', date: '10 Oct 2022', completed: true },
      { stage: 'Refund initiation', date: '10 Oct 2022', completed: true },   
      { stage: 'Demat transfer', date: '10 Oct 2022', completed: true },
      { stage: 'Listing date', date: '13 Oct 2022', completed: true }
    ],
    about: 'Go Airlines (India) Limited, operating as Go First, is a low-cost airline headquartered in Mumbai, India. Established in 2005, it has grown to become one of the leading budget carriers in the country. The airline operates an extensive domestic network, connecting major cities and regional destinations across India. Known for its affordable fares and efficient service, Go First aims to make air travel accessible to a broader segment of the population. The airline boasts a modern fleet of aircraft, primarily consisting of Airbus A320 family planes, which contribute to its operational efficiency and environmental sustainability. With a focus on customer satisfaction, Go First offers a range of services including online booking, mobile check-in, and various in-flight amenities. The airline has received several accolades for its service quality and punctuality. As it continues to expand its route network and enhance its offerings, Go First is poised to play a significant role in the growth of Indias aviation sector.'
  },
  'bajaj-energy': {
    company: 'BAJAJ ENERGY',
    companyFullName: 'Bajaj Energy Limited',
    logo: bajaLogo,
    isImage: true,
    logoColor: '#fff',
    issueSize: '₹3,600 Cr.',
    priceRange: '₹50-60',
    minimumAmount: '₹50,000',
    lotSize: '100 shares/lots',
    issueDates: '4 Oct - 7 Oct 22', 
    listedOn: '7 Oct 22',
    listedPrice: '₹60',
    listingGains: '₹10 ', 
    listingGainsPercentage: '20.0%',
    timeline: [
      {
        stage: 'Bidding starts',  
        date: '4 Oct 2022',
        completed: true
      },  
      { stage: 'Bidding ends', date: '7 Oct 2022', completed: true },
      { stage: 'Allotment finalisation', date: '10 Oct 2022', completed: true },
      { stage: 'Refund initiation', date: '10 Oct 2022', completed: true }, 
      { stage: 'Demat transfer', date: '10 Oct 2022', completed: true },
      { stage: 'Listing date', date: '13 Oct 2022', completed: true }
    ],
    about: 'Bajaj Energy Limited is a prominent player in the Indian energy sector, specializing in the generation and distribution of electricity. Established as part of the Bajaj Group, the company has a rich history of contributing to India\'s power infrastructure. Bajaj Energy operates a diverse portfolio of power plants, including thermal, hydroelectric, and renewable energy sources, reflecting its commitment to sustainable development. The company is known for its focus on efficiency, innovation, and environmental responsibility, striving to minimize its carbon footprint while maximizing energy output. Bajaj Energy serves a wide range of customers, from residential consumers to large industrial clients, ensuring reliable and affordable electricity supply. With a strong emphasis on research and development, the company continuously explores new technologies and methodologies to enhance its operations. Bajaj Energy Limited has received numerous accolades for its performance and corporate governance, solidifying its reputation as a leader in the energy sector. As India continues to grow and urbanize, Bajaj Energy is well-positioned to play a crucial role in meeting the country\'s increasing energy demands.'
  }
};
