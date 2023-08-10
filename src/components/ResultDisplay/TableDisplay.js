import React from 'react'

export default function TableDisplay(props) {

const formatter =new Intl.NumberFormat('en-us',{
    style:'currency',
    currency:'USD',
    minimumFractionDigits:2,
    maximumFractionDigits:2,
});
console.log(props.dat)
  return (
    <div>
       <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {props.yearlyData.map((ye)=>{
                return(
            <tr key={ye.year}>
            <td>{ye.year}</td>
            <td>{formatter.format(ye.savingsEndOfYear)}</td>
            <td>{formatter.format(ye.yearlyInterest)}</td>
            <td>{formatter.format(ye.savingsEndOfYear - props.dat - ye.yearlyContribution * ye.year)}</td>
            <td>{formatter.format(props.dat+ye.yearlyContribution*ye.year)}</td>
          </tr>
            )})}
          
        </tbody>
      </table>
    </div>
  )
}
