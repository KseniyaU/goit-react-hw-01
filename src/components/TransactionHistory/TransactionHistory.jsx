import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => { 
    // console.log(items);
    
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(even =>
                        <tr key={even.id}>
                            <td>{ even.type}</td>
                            <td>{ even.amount}</td>
                            <td>{ even.currency}</td>
                        </tr>
                    )
                }
                
            </tbody>
        </table>
    )
}