#💰 Loan React
A simple React application to simulate loans, allowing users to select an amount and a payment period in months. The app automatically calculates the total repayment and estimated monthly installment.
URL: 


## 🚀 Features
- Adjustable loan amount using a range slider.
- Increment and decrement buttons for precise control.
- Selectable payment terms (6, 12, or 24 months).
- Automatic calculation of total repayment and monthly installment.
- Currency formatting (MXN).
- Responsive UI styled with TailwindCSS.

## 🛠️ Technologies Used
- React
- JavaScript (ES6+)
- TailwindCSS
- Vite (for development and bundling)

## 📦 Installation
1. Clone the repository:
```
bash
git clone https://github.com/your-username/loan-react.git
cd loan-react
```

2. Install dependencies:
```
bash
npm install
```

3. Start the development server:
```
bash
npm run dev
```

4. Open your browser and visit:
```
chrome
http://localhost:5173
```
## 📁 Project Structure

```
css
Copiar
Editar
📦 loan-react
├── public
│   └── loan.png
├── src
│   ├── components
│   │   ├── Button.jsx
│   │   └── Header.jsx
│   ├── helpers.js
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

## 📌 Notes
The loan amount range is between $0 and $100,000 MXN, increasing in $100 steps.




